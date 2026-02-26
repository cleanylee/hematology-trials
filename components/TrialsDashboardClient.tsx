"use client";

import { useState, useMemo } from "react";
import { Trial, DiseaseCategory, TrialStatus, getCategoryColor } from "@/lib/data";
import { TrialCard } from "./TrialCard";
import { ChevronUp, ChevronDown, ChevronsUpDown, Tag } from "lucide-react";

interface TrialsDashboardClientProps {
    trials: Trial[];
}

type SortKey = 'trialName' | 'diseaseCategory' | 'status' | 'studyDrug' | 'controlArm' | 'pi' | 'studyNurse' | 'contactTel' | 'alreadyEnrolled';

interface SortConfig {
    key: SortKey;
    direction: 'asc' | 'desc';
}

export function TrialsDashboardClient({ trials }: TrialsDashboardClientProps) {
    const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
    const [selectedCategory, setSelectedCategory] = useState<DiseaseCategory | 'All'>('All');
    const [selectedStatus, setSelectedStatus] = useState<TrialStatus | 'All'>('Recruiting'); // Default active trials
    const [selectedPi, setSelectedPi] = useState<string | 'All'>('All');
    const [selectedSn, setSelectedSn] = useState<string | 'All'>('All');
    const [searchQuery, setSearchQuery] = useState("");
    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'trialName', direction: 'asc' });

    const filteredTrials = useMemo(() => {
        return trials.filter((trial) => {
            const matchesCategory = selectedCategory === 'All' || trial.diseaseCategory === selectedCategory;
            const matchesStatus = selectedStatus === 'All' || trial.status === selectedStatus;
            const matchesPi = selectedPi === 'All' || trial.pi === selectedPi;
            const matchesSn = selectedSn === 'All' || trial.studyNurse === selectedSn;
            const matchesSearch =
                trial.trialName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                trial.studyDrug.toLowerCase().includes(searchQuery.toLowerCase()) ||
                trial.mechanismOfAction?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                trial.clinicalTrialNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                trial.sponsor?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                trial.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

            return matchesCategory && matchesSearch && matchesStatus && matchesPi && matchesSn;
        });
    }, [trials, selectedCategory, selectedStatus, selectedPi, selectedSn, searchQuery]);

    const sortedTrials = useMemo(() => {
        const sorted = [...filteredTrials];
        sorted.sort((a, b) => {
            let aValue: any = a[sortConfig.key];
            let bValue: any = b[sortConfig.key];

            // Handle numeric sorting for enrollment
            if (sortConfig.key === 'alreadyEnrolled') {
                aValue = a.alreadyEnrolled;
                bValue = b.alreadyEnrolled;
            }

            // Handle null/undefined values
            if (aValue === null || aValue === undefined) aValue = '';
            if (bValue === null || bValue === undefined) bValue = '';

            if (typeof aValue === 'string') {
                aValue = aValue.toLowerCase();
                bValue = bValue.toLowerCase();
            }

            if (aValue < bValue) {
                return sortConfig.direction === 'asc' ? -1 : 1;
            }
            if (aValue > bValue) {
                return sortConfig.direction === 'asc' ? 1 : -1;
            }
            return 0;
        });
        return sorted;
    }, [filteredTrials, sortConfig]);

    const pis = useMemo(() => {
        const uniquePis = new Set(trials.map(t => t.pi).filter(Boolean));
        return Array.from(uniquePis).sort();
    }, [trials]);

    const studyNurses = useMemo(() => {
        const uniqueNurses = new Set(trials.map(t => t.studyNurse).filter(Boolean));
        return Array.from(uniqueNurses).sort();
    }, [trials]);

    const handleSort = (key: SortKey) => {
        setSortConfig((current) => ({
            key,
            direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc',
        }));
    };

    const SortIcon = ({ columnKey }: { columnKey: SortKey }) => {
        if (sortConfig.key !== columnKey) return <ChevronsUpDown className="ml-1 h-3 w-3 text-muted-foreground/50" />;
        return sortConfig.direction === 'asc' ? <ChevronUp className="ml-1 h-3 w-3 text-foreground" /> : <ChevronDown className="ml-1 h-3 w-3 text-foreground" />;
    };

    const TableHeader = ({ columnKey, label, className = "" }: { columnKey: SortKey; label: string; className?: string }) => (
        <th
            className={`px-4 py-3 cursor-pointer hover:bg-muted/50 transition-colors group select-none ${className}`}
            onClick={() => handleSort(columnKey)}
        >
            <div className={`flex items-center ${className.includes('text-right') ? 'justify-end' : ''}`}>
                {label}
                <SortIcon columnKey={columnKey} />
            </div>
        </th>
    );

    const categories: DiseaseCategory[] = ["AML-MDS", "ALL", "CLL", "CML", "MM", "Lymphoma", "MPN", "PNH", "GVHD", "Others"];
    const statuses: TrialStatus[] = [
        "Pending Approval",
        "Recruiting",
        "On Hold",
        "Active, not recruiting",
        "Trial Completed",
        "Terminated"
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-card p-4 rounded-lg shadow-sm border">
                <div className="flex flex-wrap gap-2 items-center flex-1 w-full">
                    {/* Search */}
                    <div className="relative w-full md:w-64">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </svg>
                        <input
                            type="search"
                            placeholder="Search trials, drugs, sponsors..."
                            className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-9"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Category Filter */}
                    <select
                        className="h-9 w-full md:w-auto rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value as DiseaseCategory | 'All')}
                    >
                        <option value="All">All Categories</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>

                    {/* Status Filter */}
                    <select
                        className="h-9 w-full md:w-auto rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value as TrialStatus | 'All')}
                    >
                        <option value="All">All Statuses</option>
                        {statuses.map((s) => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>

                    {/* PI Filter */}
                    <select
                        className="h-9 w-full md:w-auto rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        value={selectedPi}
                        onChange={(e) => setSelectedPi(e.target.value)}
                    >
                        <option value="All">All PIs</option>
                        {pis.map((pi) => (
                            <option key={pi} value={pi}>{pi}</option>
                        ))}
                    </select>

                    {/* Study Nurse Filter */}
                    <select
                        className="h-9 w-full md:w-auto rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        value={selectedSn}
                        onChange={(e) => setSelectedSn(e.target.value)}
                    >
                        <option value="All">All Study Nurses</option>
                        {studyNurses.map((sn) => (
                            <option key={sn} value={sn}>{sn}</option>
                        ))}
                    </select>
                </div>

                {/* View Toggles */}
                <div className="flex items-center space-x-1 border rounded-md p-1 bg-muted/20">
                    <button
                        onClick={() => setViewMode('grid')}
                        className={`p-1.5 rounded-sm transition-all ${viewMode === 'grid' ? 'bg-background shadow-sm' : 'text-muted-foreground hover:bg-background/50'}`}
                        title="Grid View"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>
                    </button>
                    <button
                        onClick={() => setViewMode('table')}
                        className={`p-1.5 rounded-sm transition-all ${viewMode === 'table' ? 'bg-background shadow-sm' : 'text-muted-foreground hover:bg-background/50'}`}
                        title="Table View"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3z" /><path d="M21 9H3" /><path d="M21 15H3" /><path d="M12 3v18" /></svg>
                    </button>
                </div>
            </div>

            {/* Results Info */}
            <div className="flex items-center justify-between text-sm text-muted-foreground px-1">
                <p>Showing {filteredTrials.length} trials</p>
                {(selectedCategory !== 'All' || selectedStatus !== 'All' || selectedPi !== 'All' || selectedSn !== 'All' || searchQuery) && (
                    <button
                        onClick={() => {
                            setSelectedCategory('All');
                            setSelectedStatus('Recruiting');
                            setSelectedPi('All');
                            setSelectedSn('All');
                            setSearchQuery('');
                        }}
                        className="text-primary hover:underline"
                    >
                        Reset Filters
                    </button>
                )}
            </div>

            {/* Content */}
            {filteredTrials.length === 0 ? (
                <div className="text-center py-12 border rounded-lg bg-muted/10">
                    <h3 className="text-lg font-medium">No trials found</h3>
                    <p className="text-muted-foreground mt-1">Try adjusting your summary or filters.</p>
                </div>
            ) : viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedTrials.map((trial) => (
                        <TrialCard key={trial.id} trial={trial} />
                    ))}
                </div>
            ) : (
                <div className="border rounded-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-muted/50 text-muted-foreground font-medium border-b">
                                <tr>
                                    <TableHeader columnKey="trialName" label="Trial Name" className="min-w-[150px] px-3 py-2" />
                                    <TableHeader columnKey="diseaseCategory" label="Category" className="px-3 py-2" />
                                    <TableHeader columnKey="status" label="Status" className="px-3 py-2" />
                                    <TableHeader columnKey="studyDrug" label="Drug" className="px-3 py-2" />
                                    <TableHeader columnKey="controlArm" label="Control" className="px-3 py-2" />
                                    <th className="px-3 py-2 min-w-[150px]">Tags</th>
                                    <th className="px-3 py-2 min-w-[350px]">Key Inclusion</th>
                                    <TableHeader columnKey="pi" label="PI" className="px-3 py-2" />
                                    <TableHeader columnKey="studyNurse" label="Nurse" className="px-3 py-2" />
                                    <TableHeader columnKey="contactTel" label="TEL" className="px-3 py-2" />
                                    <TableHeader columnKey="alreadyEnrolled" label="Enrolled" className="text-right px-3 py-2" />
                                </tr>
                            </thead>
                            <tbody className="divide-y text-xs">
                                {sortedTrials.map((trial) => (
                                    <tr key={trial.id} className="hover:bg-muted/5 transition-colors align-top">
                                        <td className="px-3 py-2 font-medium">
                                            <a href={`/trials/${trial.id}`} className="hover:underline text-primary block leading-tight">
                                                {trial.trialName}
                                            </a>
                                            <span className="text-[10px] text-muted-foreground">{trial.clinicalTrialNumber}</span>
                                        </td>
                                        <td className="px-3 py-2">
                                            <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap ${getCategoryColor(trial.diseaseCategory)}`}>
                                                {trial.diseaseCategory}
                                            </span>
                                        </td>
                                        <td className="px-3 py-2">
                                            <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent whitespace-nowrap ${trial.status === 'Recruiting' ? 'bg-green-100 text-green-800' :
                                                trial.status === 'Pending Approval' ? 'bg-yellow-100 text-yellow-800' :
                                                    trial.status === 'Active, not recruiting' ? 'bg-blue-100 text-blue-800' :
                                                        trial.status === 'Terminated' ? 'bg-red-100 text-red-800' :
                                                            'bg-gray-100 text-gray-800'
                                                }`}>
                                                {trial.status}
                                            </span>
                                        </td>
                                        <td className="px-3 py-2">{trial.studyDrug}</td>
                                        <td className="px-3 py-2 text-muted-foreground">{trial.controlArm || "-"}</td>
                                        <td className="px-3 py-2">
                                            <div className="flex flex-wrap gap-1">
                                                {trial.tags?.map(tag => (
                                                    <span key={tag} className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-muted text-[9px] font-medium text-muted-foreground border">
                                                        <Tag className="h-2 w-2" />
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="px-3 py-2 text-[11px] text-muted-foreground">
                                            <p className="line-clamp-4 leading-normal">{trial.inclusionCriteriaSimple || "-"}</p>
                                        </td>
                                        <td className="px-3 py-2 whitespace-nowrap">{trial.pi}</td>
                                        <td className="px-3 py-2 whitespace-nowrap">{trial.studyNurse || "-"}</td>
                                        <td className="px-3 py-2 whitespace-nowrap">{trial.contactTel || "-"}</td>
                                        <td className="px-3 py-2 text-right tabular-nums whitespace-nowrap">
                                            {trial.alreadyEnrolled} / {trial.expectedEnrollment}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
