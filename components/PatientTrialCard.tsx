import Link from "next/link";
import { Trial } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const diseaseLabelZh: Record<string, string> = {
    "AML-MDS": "急性骨髓性白血病 / 骨髓增生不良",
    "ALL": "急性淋巴性白血病",
    "CLL": "慢性淋巴細胞白血病",
    "CML": "慢性骨髓性白血病",
    "MM": "多發性骨髓瘤",
    "Lymphoma": "淋巴瘤",
    "MPN": "骨髓增生性腫瘤",
    "PNH": "陣發性夜間血紅素尿症",
    "GVHD": "移植物對抗宿主病",
    "Others": "其他",
};

const statusLabelZh: Record<string, { text: string; cls: string }> = {
    "Recruiting": { text: "招募中", cls: "bg-green-100 text-green-800 hover:bg-green-100/80" },
    "Active, not recruiting": { text: "收案已結束 (仍可諮詢)", cls: "bg-blue-100 text-blue-800 hover:bg-blue-100/80" },
};

export function PatientTrialCard({ trial }: { trial: Trial }) {
    const status = statusLabelZh[trial.status] ?? { text: trial.status, cls: "bg-gray-100 text-gray-800" };
    const eligibilityLines = (trial.eligibilityZh || "")
        .split(/\r?\n/)
        .map(s => s.replace(/^[•\-\*]\s*/, "").trim())
        .filter(Boolean);

    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-sm">
                        {diseaseLabelZh[trial.diseaseCategory] ?? trial.diseaseCategory}
                    </Badge>
                    <Badge className={status.cls}>{status.text}</Badge>
                    {trial.irbApprovalNumber && (
                        <span className="text-xs text-muted-foreground">IRB: {trial.irbApprovalNumber}</span>
                    )}
                </div>

                <div>
                    <h2 className="text-xl font-bold leading-relaxed">
                        {trial.chineseFullTitle || trial.fullTitle || trial.trialName}
                    </h2>
                    {trial.chineseFullTitle && trial.fullTitle && (
                        <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                            {trial.fullTitle}
                        </p>
                    )}
                </div>

                {(trial.studyDrug || trial.mechanismZh) && (
                    <div className="text-sm">
                        <span className="font-semibold text-primary">試驗藥品：</span>
                        <span>{trial.studyDrug}</span>
                        {trial.mechanismZh && (
                            <p className="text-muted-foreground mt-1">{trial.mechanismZh}</p>
                        )}
                    </div>
                )}

                {eligibilityLines.length > 0 && (
                    <div className="text-sm">
                        <span className="font-semibold text-primary">合適參加的病人：</span>
                        <ul className="mt-2 space-y-1 text-muted-foreground">
                            {eligibilityLines.slice(0, 4).map((line, i) => (
                                <li key={i} className="flex gap-2">
                                    <span className="text-primary mt-0.5">•</span>
                                    <span>{line}</span>
                                </li>
                            ))}
                            {eligibilityLines.length > 4 && (
                                <li className="text-xs italic">…還有 {eligibilityLines.length - 4} 項條件</li>
                            )}
                        </ul>
                    </div>
                )}

                <div className="flex justify-end pt-2">
                    <Link
                        href={`/patients/${trial.id}`}
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                        了解更多
                        <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}
