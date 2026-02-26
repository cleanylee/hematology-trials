"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { Trial, DiseaseCategory, TrialStatus, getCategoryColor } from "@/lib/data";
import { Search, Plus } from "lucide-react";

export default function AdminDashboardClient({ trials }: { trials: Trial[] }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<DiseaseCategory | 'All'>('All');
    const [selectedStatus, setSelectedStatus] = useState<TrialStatus | 'All'>('All');

    const filteredTrials = useMemo(() => {
        return trials.filter((trial) => {
            const matchesCategory = selectedCategory === 'All' || trial.diseaseCategory === selectedCategory;
            const matchesStatus = selectedStatus === 'All' || trial.status === selectedStatus;
            const matchesSearch =
                trial.trialName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                trial.studyDrug.toLowerCase().includes(searchQuery.toLowerCase()) ||
                trial.clinicalTrialNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                trial.pi.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesCategory && matchesStatus && matchesSearch;
        });
    }, [trials, searchQuery, selectedCategory, selectedStatus]);

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
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold">Manage Trials</h1>
                <Link
                    href="/admin/trials/new"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Trial
                </Link>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center bg-card p-4 rounded-lg shadow-sm border">
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                        type="search"
                        placeholder="Search trials, drugs, PIs..."
                        className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-9"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

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

                {(searchQuery || selectedCategory !== 'All' || selectedStatus !== 'All') && (
                    <button
                        onClick={() => {
                            setSearchQuery("");
                            setSelectedCategory('All');
                            setSelectedStatus('All');
                        }}
                        className="text-sm text-primary hover:underline ml-auto"
                    >
                        Reset
                    </button>
                )}
            </div>

            <div className="text-sm text-muted-foreground px-1">
                Showing {filteredTrials.length} trials
            </div>

            <div className="rounded-md border bg-card text-card-foreground shadow-sm overflow-hidden">
                <div className="relative w-full overflow-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-muted/50 border-b">
                            <tr>
                                <th className="h-10 px-4 align-middle font-medium text-muted-foreground">Status</th>
                                <th className="h-10 px-4 align-middle font-medium text-muted-foreground">Title</th>
                                <th className="h-10 px-4 align-middle font-medium text-muted-foreground">Category</th>
                                <th className="h-10 px-4 align-middle font-medium text-muted-foreground">Study Drug</th>
                                <th className="h-10 px-4 align-middle font-medium text-muted-foreground">Nurse</th>
                                <th className="h-10 px-4 align-middle font-medium text-muted-foreground">PI</th>
                                <th className="h-10 px-4 align-middle font-medium text-muted-foreground text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {filteredTrials.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="h-24 text-center">
                                        No trials found.
                                    </td>
                                </tr>
                            ) : (
                                filteredTrials.map((trial) => (
                                    <tr key={trial.id} className="hover:bg-muted/50 transition-colors">
                                        <td className="px-4 py-3 align-middle">
                                            <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold transition-colors border-transparent whitespace-nowrap ${trial.status === 'Recruiting' ? 'bg-green-100 text-green-800' :
                                                trial.status === 'Pending Approval' ? 'bg-yellow-100 text-yellow-800' :
                                                    trial.status === 'Active, not recruiting' ? 'bg-blue-100 text-blue-800' :
                                                        trial.status === 'Terminated' ? 'bg-red-100 text-red-800' :
                                                            trial.status === 'On Hold' ? 'bg-orange-100 text-orange-800' :
                                                                'bg-gray-100 text-gray-800'
                                                }`}>
                                                {trial.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 align-middle font-medium">
                                            <div className="flex flex-col">
                                                <span>{trial.trialName}</span>
                                                <span className="text-[10px] text-muted-foreground uppercase">{trial.clinicalTrialNumber}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 align-middle">
                                            <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap ${getCategoryColor(trial.diseaseCategory)}`}>
                                                {trial.diseaseCategory}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 align-middle text-xs">{trial.studyDrug}</td>
                                        <td className="px-4 py-3 align-middle text-xs">{trial.studyNurse || '-'}</td>
                                        <td className="px-4 py-3 align-middle text-xs">{trial.pi}</td>
                                        <td className="px-4 py-3 align-middle text-right">
                                            <Link
                                                href={`/admin/trials/${trial.id}/edit`}
                                                className="inline-flex items-center justify-center rounded-md text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3"
                                            >
                                                Edit
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
