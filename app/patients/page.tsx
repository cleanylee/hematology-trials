import { getTrials } from "@/lib/actions";
import { PatientTrialsClient } from "@/components/PatientTrialsClient";
import { HeartPulse, Phone } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
    title: "病患資訊｜成大醫院血液科臨床試驗",
    description:
        "成大醫院血液科目前招募中的臨床試驗。提供病患與家屬參考：包含試驗中文名稱、試驗藥品、合適參加的病人條件，以及諮詢方式。涵蓋白血病、淋巴瘤、多發性骨髓瘤、骨髓增生疾病等。",
    alternates: {
        canonical: "/patients",
    },
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
    // Patient view: only trials actively recruiting new participants
    const trials = allTrials.filter(t => t.status === "Recruiting");

    return (
        <main className="min-h-screen bg-background">
            <div className="border-b bg-card">
                <div className="container py-6 md:py-8 max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-3">
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
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        本頁列出本院血液科目前 <strong>招募中</strong> 的臨床試驗。
                        若您或家屬罹患下列疾病、且對某項試驗有興趣，請至
                        <a
                            href={CONSULT_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mx-1 text-primary font-medium hover:underline"
                        >
                            成大醫院血液科醫師門診
                        </a>
                        諮詢，由醫師評估是否適合參加。
                    </p>
                </div>
            </div>

            <div className="container py-6 md:py-8 max-w-4xl mx-auto">
                <PatientTrialsClient trials={trials} />
            </div>

            <div className="border-t bg-muted/30 mt-12">
                <div className="container py-6 max-w-4xl mx-auto space-y-4">
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
                    <p className="text-xs text-muted-foreground border-t pt-3">
                        ⚠️ 部份翻譯資訊由 AI 提供，所有臨床試驗資訊以最新版試驗計畫書為準。
                    </p>
                </div>
            </div>
        </main>
    );
}
