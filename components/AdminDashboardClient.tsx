"use client";

import Link from "next/link";
import { useState } from "react";
import { Trial } from "@/lib/data";

export default function AdminDashboardClient({ trials }: { trials: Trial[] }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredTrials = trials.filter((trial) =>
        trial.trialName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold">Manage Trials</h1>
                <Link
                    href="/admin/trials/new"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                    Add New Trial
                </Link>
            </div>

            <div className="w-full max-w-sm">
                <input
                    type="text"
                    placeholder="Search trials..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
            </div>

            <div className="rounded-md border bg-card text-card-foreground shadow-sm">
                <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm text-left">
                        <thead className="[&_tr]:border-b">
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Status</th>
                                <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Title</th>
                                <th className="h-12 px-4 align-middle font-medium text-muted-foreground">PI</th>
                                <th className="h-12 px-4 align-middle font-medium text-muted-foreground text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                            {filteredTrials.map((trial) => (
                                <tr key={trial.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td className="p-4 align-middle">
                                        <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${trial.status === "Recruiting" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                                            }`}>
                                            {trial.status}
                                        </span>
                                    </td>
                                    <td className="p-4 align-middle font-medium">
                                        {trial.trialName}
                                        <span className="block text-xs text-muted-foreground">{trial.clinicalTrialNumber}</span>
                                    </td>
                                    <td className="p-4 align-middle">{trial.pi}</td>
                                    <td className="p-4 align-middle text-right">
                                        <Link
                                            href={`/admin/trials/${trial.id}/edit`}
                                            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3"
                                        >
                                            Edit
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
