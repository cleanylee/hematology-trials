import { getTrials } from "@/lib/actions";
import { PatientTrialsClient } from "@/components/PatientTrialsClient";
import { AudienceSwitch } from "@/components/AudienceSwitch";
import { Card, CardContent } from "@/components/ui/card";
import { DISEASE_LANDINGS } from "@/lib/diseases";
import { HeartPulse, Phone, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
    title: "病患資訊｜成大醫院血液科臨床試驗",
    description:
        "成大醫院血液科目前招募中的臨床試驗。提供病患與家屬參考：依疾病分類查詢，含試驗中文名稱、試驗藥品、合適參加的病人條件，以及諮詢方式。涵蓋白血病、淋巴瘤、多發性骨髓瘤、骨髓增生疾病、PNH、再生不良性貧血等。",
    keywords: [
        "血液病", "血癌", "白血病", "淋巴癌", "淋巴瘤", "骨髓瘤",
        "臨床試驗", "新藥試驗", "成大醫院", "成大血液科", "病患資訊",
    ],
    alternates: { canonical: "/patients" },
    openGraph: {
        title: "病患資訊｜成大醫院血液科臨床試驗",
        description: "成大醫院血液科目前招募中的臨床試驗 — 病患與家屬版資訊",
        url: "/patients",
        type: "website",
    },
};

const CONSULT_URL = "https://dr.hosp.ncku.edu.tw/p/412-1087-29872.php?Lang=zh-tw";

export default async function PatientsPage() {
    const allTrials = await getTrials();
    const trials = allTrials.filter(t => t.status === "Recruiting");

    const recruitingCountFor = (landing: typeof DISEASE_LANDINGS[number]) =>
        trials.filter(t => landing.categories.includes(t.diseaseCategory)).length;

    return (
        <main className="min-h-screen bg-background">
            <div className="border-b bg-card">
                <div className="container py-6 md:py-8 max-w-7xl mx-auto">
                    <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <HeartPulse className="h-7 w-7 text-primary" />
                            </div>
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                                    成大醫院血液科臨床試驗
                                </h1>
                                <p className="text-muted-foreground text-base">病患與家屬資訊</p>
                            </div>
                        </div>
                        <AudienceSwitch target="hcp" />
                    </div>
                    <p className="text-sm leading-relaxed">
                        <strong>成大醫院血液科</strong>長期深耕血液疾病的診斷與治療，並具備豐富的多中心臨床試驗執行經驗，是台灣重要的血液疾病臨床試驗中心之一。
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                        本頁提供本科目前 <strong>招募中</strong> 的臨床試驗。
                        您可以從下方疾病分類進入，閱讀疾病簡介、治療進展與相關試驗；或往下查看所有招募中試驗。
                        若有興趣參加，請至
                        <a
                            href={CONSULT_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mx-1 text-primary font-medium hover:underline"
                        >
                            成大醫院血液科醫師門診
                        </a>
                        諮詢評估。
                    </p>
                    <Link
                        href="/about-trials"
                        className="inline-flex items-center gap-1.5 mt-3 text-sm text-primary font-medium hover:underline"
                    >
                        <BookOpen className="h-4 w-4" />
                        什麼是臨床試驗？
                    </Link>
                </div>
            </div>

            {/* Disease landing card grid */}
            <div className="container py-8 max-w-7xl mx-auto">
                <h2 className="text-xl font-semibold mb-4">依疾病分類瀏覽</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {DISEASE_LANDINGS.map(d => {
                        const count = recruitingCountFor(d);
                        return (
                            <Link key={d.slug} href={`/patients/${d.slug}`} className="group">
                                <Card className="h-full hover:shadow-md hover:border-primary/40 transition-all">
                                    <CardContent className="p-4 space-y-1">
                                        <div className="flex items-start justify-between gap-2">
                                            <h3 className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors">
                                                {d.nameZh}
                                            </h3>
                                            <ArrowRight className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </div>
                                        <p className="text-xs text-muted-foreground">{d.nameEn}</p>
                                        <p className="text-xs font-medium text-primary pt-1">
                                            {count > 0 ? `${count} 項招募中` : "衛教資訊"}
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Full trial list with client-side filter */}
            <div className="container pb-8 max-w-7xl mx-auto">
                <h2 className="text-xl font-semibold mb-4">所有招募中試驗 ({trials.length} 項)</h2>
                <PatientTrialsClient trials={trials} />
            </div>

            <div className="border-t bg-muted/30 mt-8">
                <div className="container py-6 max-w-7xl mx-auto space-y-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold">想了解是否合適參加？</h3>
                            <p className="text-sm text-muted-foreground">
                                請至成大醫院血液科醫師門診諮詢。
                            </p>
                        </div>
                        <a
                            href={CONSULT_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4"
                        >
                            門診時間查詢
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
