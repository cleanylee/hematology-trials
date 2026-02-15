"use client";

import { useState } from "react";
import { DiseaseCategory, Trial, TrialStatus } from "@/lib/data";
import { useRouter } from "next/navigation";
import { createTrial, updateTrial } from "@/lib/actions";

interface AdminTrialFormProps {
    initialData?: Trial;
    isEditing?: boolean;
}

export function AdminTrialForm({ initialData, isEditing = false }: AdminTrialFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState<Partial<Trial>>(
        initialData || {
            diseaseCategory: "AML",
            status: "Recruiting",
            expectedEnrollment: 0,
            alreadyEnrolled: 0,
        }
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                data.append(key, value.toString());
            }
        });

        try {
            if (isEditing && initialData?.id) {
                await updateTrial(initialData.id, data);
            } else {
                await createTrial(data);
            }
            // Actions redirect on success, so we don't need to push here unless we want to
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again.");
            setLoading(false);
        }
    };

    const categories: DiseaseCategory[] = ["AML", "ALL", "MM", "Lymphoma", "PNH", "MPN", "GVHD", "Other"];
    const statuses: TrialStatus[] = ["Recruiting", "On Hold", "Completed", "Terminated"];

    return (
        <form onSubmit={handleSubmit} className="space-y-8 bg-card p-6 rounded-xl border shadow-sm">
            {error && (
                <div className="bg-red-50 p-4 rounded-md text-red-700 text-sm">
                    {error}
                </div>
            )}
            <div className="space-y-4">
                <h3 className="text-lg font-medium">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Disease Category</label>
                        <select
                            name="diseaseCategory"
                            value={formData.diseaseCategory}
                            onChange={handleChange}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Status</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                            {statuses.map((s) => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium">Trial Name</label>
                        <input
                            type="text"
                            name="trialName"
                            required
                            value={formData.trialName || ""}
                            onChange={handleChange}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Clinical Trial Number</label>
                        <input
                            type="text"
                            name="clinicalTrialNumber"
                            value={formData.clinicalTrialNumber || ""}
                            onChange={handleChange}
                            placeholder="NCT..."
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Study Drug</label>
                        <input
                            type="text"
                            name="studyDrug"
                            value={formData.studyDrug || ""}
                            onChange={handleChange}
                            placeholder="Drug Name (Mechanism)"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-medium">Study Design & Staff</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Study Design</label>
                        <input
                            type="text"
                            name="studyDesign"
                            value={formData.studyDesign || ""}
                            onChange={handleChange}
                            placeholder="e.g. RCT, Single Arm"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Control Arm</label>
                        <input
                            type="text"
                            name="controlArm"
                            value={formData.controlArm || ""}
                            onChange={handleChange}
                            placeholder="e.g. Placebo"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Principal Investigator (PI)</label>
                        <input
                            type="text"
                            name="pi"
                            value={formData.pi || ""}
                            onChange={handleChange}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Study Nurse</label>
                        <input
                            type="text"
                            name="studyNurse"
                            value={formData.studyNurse || ""}
                            onChange={handleChange}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Contact Tel</label>
                        <input
                            type="text"
                            name="contactTel"
                            value={formData.contactTel || ""}
                            onChange={handleChange}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Expected</label>
                            <input
                                type="number"
                                name="expectedEnrollment"
                                value={formData.expectedEnrollment}
                                onChange={handleChange}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Enrolled</label>
                            <input
                                type="number"
                                name="alreadyEnrolled"
                                value={formData.alreadyEnrolled}
                                onChange={handleChange}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-medium">Criteria & Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Inclusion (Simple)</label>
                        <textarea
                            name="inclusionCriteriaSimple"
                            rows={3}
                            value={formData.inclusionCriteriaSimple || ""}
                            onChange={handleChange}
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Exclusion (Simple)</label>
                        <textarea
                            name="exclusionCriteriaSimple"
                            rows={3}
                            value={formData.exclusionCriteriaSimple || ""}
                            onChange={handleChange}
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium">Inclusion (Detailed)</label>
                        <textarea
                            name="inclusionCriteriaDetailed"
                            rows={5}
                            value={formData.inclusionCriteriaDetailed || ""}
                            onChange={handleChange}
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono text-sm"
                        />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium">Exclusion (Detailed)</label>
                        <textarea
                            name="exclusionCriteriaDetailed"
                            rows={5}
                            value={formData.exclusionCriteriaDetailed || ""}
                            onChange={handleChange}
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono text-sm"
                        />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium">Notes</label>
                        <textarea
                            name="note"
                            rows={3}
                            value={formData.note || ""}
                            onChange={handleChange}
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-4">
                <button
                    type="button"
                    onClick={() => router.back()}
                    disabled={loading}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                    {loading ? "Saving..." : (isEditing ? "Update Trial" : "Create Trial")}
                </button>
            </div>
        </form>
    );
}
