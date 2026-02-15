"use client";

import { useState } from "react";
import { Trial, DiseaseCategory } from "@/lib/data";
import { TrialCard } from "@/components/TrialCard";
import Link from "next/link";

export default function TrialsDashboardClient({ trials }: { trials: Trial[] }) {
    const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
    const [filterCategory, setFilterCategory] = useState<DiseaseCategory | "All">("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredTrials = trials.filter((trial) => {
        const matchesCategory = filterCategory === "All" || trial.diseaseCategory === filterCategory;
        const matchesSearch =
            trial.trialName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            trial.clinicalTrialNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
            trial.studyDrug.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const categories: (DiseaseCategory | "All")[] = [
        "All", "AML", "ALL", "MM", "Lymphoma", "PNH", "MPN", "GVHD", "Other"
    ];

    return (
        <main className="min-h-screen bg-gray-50/50">
            {/* Header */}
            <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between py-4">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                            <span className="text-primary-foreground font-bold">H</span>
                        </div>
                        <h1 className="text-xl font-bold tracking-tight">Hematology Trials</h1>
                    </div>
                    <nav className="flex items-center gap-4">
                        <Link href="/admin" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                            Nurse Login
                        </Link>
                    </nav>
                </div>
            </header>

            <div className="container py-8 space-y-8">
                {/* Controls */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-1 items-center gap-4 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilterCategory(cat)}
                                className={`inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${filterCategory === cat
                                    ? "bg-primary text-primary-foreground shadow"
                                    : "bg-background text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground border"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <input
                            type="search"
                            placeholder="Search trials..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:w-[200px] lg:w-[300px]"
                        />
                        <div className="flex items-center rounded-lg border bg-background p-1 shadow-sm">
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`flex h-7 w-7 items-center justify-center rounded-md text-sm transition-colors ${viewMode === "grid" ? "bg-muted font-medium text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                                title="Grid View"
                            >
                                G
                            </button>
                            <button
                                onClick={() => setViewMode("table")}
                                className={`flex h-7 w-7 items-center justify-center rounded-md text-sm transition-colors ${viewMode === "table" ? "bg-muted font-medium text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                                title="Table View"
                            >
                                T
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content */}
                {filteredTrials.length === 0 ? (
                    <div className="text-center py-20 text-muted-foreground">
                        No trials found matching your criteria.
                    </div>
                ) : viewMode === "grid" ? (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredTrials.map((trial) => (
                            <Link href={`/trials/${trial.id}`} key={trial.id} className="block">
                                <TrialCard trial={trial} />
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="rounded-md border bg-card">
                        <div className="relative w-full overflow-auto">
                            <table className="w-full caption-bottom text-sm text-left">
                                <thead className="[&_tr]:border-b">
                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Status</th>
                                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Category</th>
                                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Title / ID</th>
                                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Drug</th>
                                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Enrollment</th>
                                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Nurse</th>
                                    </tr>
                                </thead>
                                <tbody className="[&_tr:last-child]:border-0">
                                    {filteredTrials.map((trial) => (
                                        <tr key={trial.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                            <td className="p-4 align-middle">
                                                <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${trial.status === "Recruiting" ? "bg-green-100 text-green-800" :
                                                    trial.status === "On Hold" ? "bg-yellow-100 text-yellow-800" :
                                                        "bg-gray-100 text-gray-800"
                                                    }`}>
                                                    {trial.status}
                                                </span>
                                            </td>
                                            <td className="p-4 align-middle font-medium">{trial.diseaseCategory}</td>
                                            <td className="p-4 align-middle">
                                                <Link href={`/trials/${trial.id}`} className="hover:underline font-medium block">
                                                    {trial.trialName}
                                                </Link>
                                                <span className="text-xs text-muted-foreground">{trial.clinicalTrialNumber}</span>
                                            </td>
                                            <td className="p-4 align-middle">{trial.studyDrug}</td>
                                            <td className="p-4 align-middle">
                                                {trial.alreadyEnrolled} / {trial.expectedEnrollment}
                                            </td>
                                            <td className="p-4 align-middle">{trial.studyNurse}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
