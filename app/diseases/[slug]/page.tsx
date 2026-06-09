import { getTrials } from "@/lib/actions";
import { DISEASE_LANDINGS, findLanding } from "@/lib/diseases";
import { PatientTrialCard } from "@/components/PatientTrialCard";
import { AudienceSwitch } from "@/components/AudienceSwitch";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Phone, Microscope } from "lucide-react";

export const revalidate = 3600;

const CONSULT_URL = "https://dr.hosp.ncku.edu.tw/p/412-1087-29872.php?Lang=zh-tw";

export function generateStaticParams() {
    return DISEASE_LANDINGS.map(d => ({ slug: d.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const d = findLanding(slug);
    if (!d) return { title: "找不到頁面" };

    const title = `${d.nameZh} 臨床試驗｜成大醫院血液科`;
    const description = d.tagline.slice(0, 200);

    return {
        title,
        description,
        keywords: d.keywords,
        alternates: { canonical: `/diseases/${slug}` },
        openGraph: {
            title,
            description,
            url: `/diseases/${slug}`,
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}

export default async function DiseasePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const d = findLanding(slug);
    if (!d) return notFound();

    const all = await getTrials();
    const recruiting = all.filter(
        t => d.categories.includes(t.diseaseCategory) && t.status === "Recruiting"
    );

    const medicalConditionLd = {
        "@context": "https://schema.org",
        "@type": "MedicalCondition",
        name: d.nameZh,
        alternateName: d.nameEn,
        url: `https://trials.hematology.tw/diseases/${slug}`,
    };

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "NCKUH Hematology Trials",
                item: "https://trials.hematology.tw",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "疾病分類",
                item: "https://trials.hematology.tw/diseases",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: d.nameZh,
                item: `https://trials.hematology.tw/diseases/${slug}`,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <main className="min-h-screen bg-background">
                <div className="container py-8 max-w-4xl mx-auto space-y-8">
                    <div className="flex items-center justify-between">
                        <Link
                            href="/diseases"
                            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            返回疾病分類
                        </Link>
                        <AudienceSwitch target="hcp" />
                    </div>

                    <header>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                            {d.nameZh} 臨床試驗
                        </h1>
                        <p className="text-lg text-muted-foreground mt-2">{d.nameEn}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                            成大醫院血液科 — 提供病患與家屬參考
                        </p>
                    </header>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold border-b pb-2">疾病簡介</h2>
                        <p className="text-base leading-relaxed">{d.intro}</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold border-b pb-2">治療進展</h2>
                        <p className="text-base leading-relaxed">{d.treatmentContext}</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold border-b pb-2">
                            目前招募中的臨床試驗
                            <span className="ml-2 text-sm font-normal text-muted-foreground">
                                ({recruiting.length} 項)
                            </span>
                        </h2>

                        {recruiting.length === 0 ? (
                            <Card>
                                <CardContent className="p-6 text-center space-y-3">
                                    <Microscope className="h-10 w-10 mx-auto text-muted-foreground/60" />
                                    <p className="text-muted-foreground">
                                        目前成大醫院血液科尚無此類別之招募中試驗。
                                        如您對相關治療有疑問，仍歡迎至成大血液科醫師門診諮詢。
                                    </p>
                                </CardContent>
                            </Card>
                        ) : (
                            <div className="grid grid-cols-1 gap-4">
                                {recruiting.map(t => (
                                    <PatientTrialCard key={t.id} trial={t} />
                                ))}
                            </div>
                        )}
                    </section>

                    <Card className="border-primary/30 bg-primary/5">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <Phone className="h-5 w-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold mb-1">想了解是否合適參加？</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        請至成大醫院血液科醫師門診諮詢。醫師會根據您的病史與檢查資料，
                                        評估您的治療選項，並說明合適的臨床試驗。
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

                    <p className="text-xs text-muted-foreground text-center pt-2 border-t">
                        ⚠️ 部份翻譯資訊由 AI 提供，所有臨床試驗資訊以最新版試驗計畫書為準。
                    </p>
                </div>
            </main>
        </>
    );
}
