"use client";

import { useState, useMemo } from "react";
import { Trial, DiseaseCategory } from "@/lib/data";
import { PatientTrialCard } from "./PatientTrialCard";

const categoryOrder: Array<DiseaseCategory | "All"> = [
    "All", "AML-MDS", "ALL", "CLL", "CML", "MM", "Lymphoma", "MPN", "PNH", "GVHD", "Others",
];

const categoryLabelZh: Record<string, string> = {
    "All": "全部疾病",
    "AML-MDS": "AML / MDS",
    "ALL": "ALL",
    "CLL": "CLL",
    "CML": "CML",
    "MM": "多發性骨髓瘤",
    "Lymphoma": "淋巴瘤",
    "MPN": "骨髓增生性腫瘤",
    "PNH": "PNH",
    "GVHD": "GVHD",
    "Others": "其他",
};

export function PatientTrialsClient({ trials }: { trials: Trial[] }) {
    const [category, setCategory] = useState<DiseaseCategory | "All">("All");

    const visible = useMemo(
        () => trials.filter(t => category === "All" || t.diseaseCategory === category),
        [trials, category]
    );

    const counts = useMemo(() => {
        const c: Record<string, number> = { All: trials.length };
        for (const t of trials) c[t.diseaseCategory] = (c[t.diseaseCategory] || 0) + 1;
        return c;
    }, [trials]);

    return (
        <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
                {categoryOrder.map(cat => {
                    const count = counts[cat] || 0;
                    if (cat !== "All" && count === 0) return null;
                    const active = category === cat;
                    return (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                                active
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                            }`}
                        >
                            {categoryLabelZh[cat] ?? cat}
                            <span className="ml-1.5 text-xs opacity-70">({count})</span>
                        </button>
                    );
                })}
            </div>

            {visible.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                    目前此分類沒有符合條件的試驗。
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {visible.map(t => (
                        <PatientTrialCard key={t.id} trial={t} />
                    ))}
                </div>
            )}
        </div>
    );
}
