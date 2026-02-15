"use client";

import { useState } from "react";
import { Trial, DiseaseCategory, TrialStatus } from "@/lib/data";
import { TrialCard } from "./TrialCard";

interface TrialsDashboardClientProps {
    trials: Trial[];
}

export function TrialsDashboardClient({ trials }: TrialsDashboardClientProps) {
    const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
    const [selectedCategory, setSelectedCategory] = useState<DiseaseCategory | 'All'>('All');
    const [selectedStatus, setSelectedStatus] = useState<TrialStatus | 'All'>('Recruiting'); // Default active trials
    const [searchQuery, setSearchQuery] = useState("");

    const filteredTrials = trials.filter((trial) => {
        const matchesCategory = selectedCategory === 'All' || trial.diseaseCategory === selectedCategory;
        const matchesStatus = selectedStatus === 'All' || trial.status === selectedStatus;
        const matchesSearch =
            trial.trialName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            trial.studyDrug.toLowerCase().includes(searchQuery.toLowerCase()) ||
            trial.clinicalTrialNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
            trial.sponsor?.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch && matchesStatus;
    });

    const categories: DiseaseCategory[] = ["AML-MDS", "ALL", "CLL", "CML", "MM", "Lymphoma", "MPN", "PNH", "GVHD", "Others"];
    const statuses: TrialStatus[] = [
        "Pending Approval",
        "Recruiting",
        "On Hold",
        "Recruiting Completed",
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
                {(selectedCategory !== 'All' || selectedStatus !== 'All' || searchQuery) && (
                    <button
                        onClick={() => {
                            setSelectedCategory('All');
                            setSelectedStatus('Recruiting');
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
                    {filteredTrials.map((trial) => (
                        <TrialCard key={trial.id} trial={trial} />
                    ))}
                </div>
            ) : (
                <div className="border rounded-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-muted/50 text-muted-foreground font-medium border-b">
                                <tr>
                                    <th className="px-4 py-3">Trial Name</th>
                                    <th className="px-4 py-3">Clinical #</th>
                                    <th className="px-4 py-3">Drug</th>
                                    <th className="px-4 py-3">Category</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3 text-right">Enrollment</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {filteredTrials.map((trial) => (
                                    <tr key={trial.id} className="hover:bg-muted/5 transition-colors">
                                        <td className="px-4 py-3 font-medium">
                                            <a href={`/trials/${trial.id}`} className="hover:underline text-primary">
                                                {trial.trialName}
                                            </a>
                                        </td>
                                        <td className="px-4 py-3">{trial.clinicalTrialNumber}</td>
                                        <td className="px-4 py-3">{trial.studyDrug}</td>
                                        <td className="px-4 py-3">
                                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                                {trial.diseaseCategory}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent ${trial.status === 'Recruiting' ? 'bg-green-100 text-green-800' :
                                                trial.status === 'Pending Approval' ? 'bg-yellow-100 text-yellow-800' :
                                                    trial.status === 'Recruiting Completed' ? 'bg-blue-100 text-blue-800' :
                                                        trial.status === 'Terminated' ? 'bg-red-100 text-red-800' :
                                                            'bg-gray-100 text-gray-800'
                                                }`}>
                                                {trial.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-right tabular-nums">
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
