import { getTrial } from "@/lib/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AudienceSwitch } from "@/components/AudienceSwitch";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";

export const revalidate = 3600;

const CONSULT_URL = "https://dr.hosp.ncku.edu.tw/p/412-1087-29872.php?Lang=zh-tw";

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
    "Recruiting": { text: "招募中", cls: "bg-green-100 text-green-800" },
    "Active, not recruiting": { text: "收案已結束 (仍可諮詢)", cls: "bg-blue-100 text-blue-800" },
    "Pending Approval": { text: "審核中", cls: "bg-yellow-100 text-yellow-800" },
    "On Hold": { text: "暫停", cls: "bg-orange-100 text-orange-800" },
    "Trial Completed": { text: "試驗已完成", cls: "bg-gray-100 text-gray-800" },
    "Terminated": { text: "已終止", cls: "bg-red-100 text-red-800" },
};

export async function generateMetadata(
    { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
    const { id } = await params;
    const trial = await getTrial(id);
    if (!trial) {
        return { title: "找不到試驗", description: "找不到指定的臨床試驗。" };
    }
    const title = trial.chineseFullTitle || trial.trialName;
    const description = trial.mechanismZh
        ? `${diseaseLabelZh[trial.diseaseCategory] ?? trial.diseaseCategory}臨床試驗 — ${trial.mechanismZh}`
        : `${diseaseLabelZh[trial.diseaseCategory] ?? trial.diseaseCategory}臨床試驗 — ${trial.studyDrug}`;

    return {
        title: `${title.slice(0, 60)} | 病患資訊`,
        description: description.slice(0, 280),
        alternates: { canonical: `/patients/${id}` },
        openGraph: {
            title: `${title.slice(0, 80)}｜成大醫院血液科臨床試驗`,
            description: description.slice(0, 280),
            url: `/patients/${id}`,
            type: "article",
        },
    };
}

export default async function PatientTrialPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const trial = await getTrial(id);
    if (!trial) return notFound();

    const status = statusLabelZh[trial.status] ?? { text: trial.status, cls: "bg-gray-100 text-gray-800" };
    const eligibilityLines = (trial.eligibilityZh || "")
        .split(/\r?\n/)
        .map(s => s.replace(/^[•\-\*]\s*/, "").trim())
        .filter(Boolean);

    return (
        <main className="min-h-screen bg-background">
            <div className="container py-8 max-w-3xl mx-auto space-y-6">
                <div className="flex items-center justify-between">
                    <Link
                        href="/patients"
                        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        返回試驗列表
                    </Link>
                    <AudienceSwitch target="hcp" />
                </div>

                <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge variant="outline">
                            {diseaseLabelZh[trial.diseaseCategory] ?? trial.diseaseCategory}
                        </Badge>
                        <Badge className={status.cls}>{status.text}</Badge>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold leading-relaxed">
                        {trial.chineseFullTitle || trial.fullTitle || trial.trialName}
                    </h1>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm text-muted-foreground">
                        {trial.pi && trial.pi !== "Unknown" && (
                            <span>主持醫師：<strong className="text-foreground">{trial.pi} 醫師</strong></span>
                        )}
                        {trial.irbApprovalNumber && <span>IRB 編號：{trial.irbApprovalNumber}</span>}
                        {trial.clinicalTrialNumber && trial.clinicalTrialNumber !== "Pending" && (
                            <span>NCT 編號：{trial.clinicalTrialNumber}</span>
                        )}
                    </div>
                    {trial.fullTitle && trial.chineseFullTitle && (
                        <p className="mt-3 text-xs text-muted-foreground italic">
                            {trial.fullTitle}
                        </p>
                    )}
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">試驗藥品</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        {trial.studyDrugZh ? (
                            <>
                                <p className="font-medium">{trial.studyDrugZh}</p>
                                <p className="text-xs text-muted-foreground">{trial.studyDrug}</p>
                            </>
                        ) : (
                            <p className="font-medium">{trial.studyDrug || "—"}</p>
                        )}
                        {trial.mechanismZh ? (
                            <p className="text-sm text-muted-foreground leading-relaxed pt-2">{trial.mechanismZh}</p>
                        ) : trial.mechanismOfAction ? (
                            <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                                作用機轉：{trial.mechanismOfAction}
                            </p>
                        ) : null}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">合適參加的病人</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {eligibilityLines.length > 0 ? (
                            <ul className="space-y-2 text-sm">
                                {eligibilityLines.map((line, i) => (
                                    <li key={i} className="flex gap-2 leading-relaxed">
                                        <span className="text-primary mt-0.5">•</span>
                                        <span>{line}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : trial.inclusionCriteriaSimple ? (
                            <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                                {trial.inclusionCriteriaSimple}
                            </p>
                        ) : (
                            <p className="text-sm text-muted-foreground">收案條件待補充</p>
                        )}
                        <p className="mt-4 text-xs text-muted-foreground italic">
                            上述條件僅供參考。實際是否合適參加，需由試驗主持醫師依個人病史與檢查結果評估。
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-primary/30 bg-primary/5">
                    <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <Phone className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold mb-1">想了解是否合適參加？</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    請至成大醫院血液科醫師門診諮詢
                                    {trial.pi && trial.pi !== "Unknown" && (
                                        <>
                                            （建議掛號 <strong className="text-foreground">{trial.pi} 醫師</strong>）
                                        </>
                                    )}
                                    。醫師會根據您的病史與檢查資料，評估您是否合適參加此試驗。
                                </p>
                                <a
                                    href={CONSULT_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4"
                                >
                                    查看門診時間表
                                </a>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <p className="text-xs text-muted-foreground text-center pt-4 border-t">
                    ⚠️ 部份翻譯資訊由 AI 提供，所有臨床試驗資訊以最新版試驗計畫書為準。
                </p>
            </div>
        </main>
    );
}
