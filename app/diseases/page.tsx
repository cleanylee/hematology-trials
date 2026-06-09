import { getTrials } from "@/lib/actions";
import { DISEASE_LANDINGS } from "@/lib/diseases";
import { AudienceSwitch } from "@/components/AudienceSwitch";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartPulse } from "lucide-react";

export const revalidate = 3600;

export const metadata: Metadata = {
    title: "血液疾病臨床試驗總覽｜成大醫院血液科",
    description:
        "成大醫院血液科目前進行中的臨床試驗，依疾病分類瀏覽：白血病、淋巴瘤、多發性骨髓瘤、骨髓增生疾病、PNH 等。提供病患與家屬參考。",
    keywords: [
        "血液病", "血癌", "白血病", "淋巴癌", "淋巴瘤", "骨髓瘤",
        "臨床試驗", "新藥試驗", "成大醫院", "成大血液科",
    ],
    alternates: { canonical: "/diseases" },
    openGraph: {
        title: "血液疾病臨床試驗總覽｜成大醫院血液科",
        description: "依疾病分類瀏覽成大醫院血液科進行中的臨床試驗",
        url: "/diseases",
        type: "website",
    },
};

export default async function DiseasesIndex() {
    const all = await getTrials();
    const recruiting = all.filter(t => t.status === "Recruiting");

    const countFor = (landing: typeof DISEASE_LANDINGS[number]) =>
        recruiting.filter(t => landing.categories.includes(t.diseaseCategory)).length;

    return (
        <main className="min-h-screen bg-background">
            <div className="border-b bg-card">
                <div className="container py-6 md:py-8 max-w-4xl mx-auto">
                    <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <HeartPulse className="h-7 w-7 text-primary" />
                            </div>
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                                    血液疾病臨床試驗總覽
                                </h1>
                                <p className="text-muted-foreground text-base">
                                    依疾病分類瀏覽成大醫院血液科進行中的臨床試驗
                                </p>
                            </div>
                        </div>
                        <AudienceSwitch target="hcp" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        點選下方疾病分類，了解該疾病簡介、目前治療進展，以及成大醫院血液科正在進行的相關臨床試驗。
                    </p>
                </div>
            </div>

            <div className="container py-6 md:py-8 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {DISEASE_LANDINGS.map(d => {
                        const count = countFor(d);
                        return (
                            <Link key={d.slug} href={`/diseases/${d.slug}`} className="group">
                                <Card className="h-full hover:shadow-md hover:border-primary/40 transition-all">
                                    <CardContent className="p-5 space-y-2">
                                        <div className="flex items-start justify-between gap-2">
                                            <h2 className="font-semibold text-base leading-snug group-hover:text-primary transition-colors">
                                                {d.nameZh}
                                            </h2>
                                            <ArrowRight className="h-4 w-4 mt-1 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </div>
                                        <p className="text-xs text-muted-foreground">{d.nameEn}</p>
                                        <p className="text-sm text-muted-foreground line-clamp-2">
                                            {d.tagline}
                                        </p>
                                        <p className="text-xs font-medium text-primary pt-1">
                                            {count > 0 ? `${count} 項招募中` : "目前無進行中試驗"}
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="border-t bg-muted/30 mt-12">
                <div className="container py-6 max-w-4xl mx-auto">
                    <p className="text-sm text-muted-foreground">
                        想直接看所有招募中試驗？前往{" "}
                        <Link href="/patients" className="text-primary font-medium hover:underline">
                            病患資訊頁
                        </Link>
                        。
                    </p>
                </div>
            </div>
        </main>
    );
}
