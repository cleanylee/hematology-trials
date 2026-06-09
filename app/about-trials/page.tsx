import { AudienceSwitch } from "@/components/AudienceSwitch";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, BookOpen, Shield, Activity, AlertTriangle, ListChecks, HelpCircle } from "lucide-react";

export const revalidate = 86400; // daily — static content

const CONSULT_URL = "https://dr.hosp.ncku.edu.tw/p/412-1087-29872.php?Lang=zh-tw";

export const metadata: Metadata = {
    title: "什麼是臨床試驗？參加流程、好處與風險｜成大醫院血液科",
    description:
        "臨床試驗是什麼？要怎麼參加？會有什麼好處和風險？由成大醫院血液科為您完整說明臨床試驗的分期、流程、病患權益與常見問題，幫助病患與家屬了解新藥試驗。",
    keywords: [
        "臨床試驗", "什麼是臨床試驗", "新藥試驗", "Phase 1", "Phase 2", "Phase 3",
        "臨床試驗 好處", "臨床試驗 風險", "成大醫院", "血液科",
    ],
    alternates: { canonical: "/about-trials" },
    openGraph: {
        title: "什麼是臨床試驗？｜成大醫院血液科",
        description: "臨床試驗的完整介紹：分期、流程、好處、風險、常見問題。",
        url: "/about-trials",
        type: "article",
    },
};

const FAQS = [
    {
        q: "參加臨床試驗要付錢嗎？",
        a: "通常不需要。臨床試驗使用的試驗藥物由藥廠提供，試驗所需的特殊檢查也由藥廠或試驗計畫支付。部分常規檢查（如健保給付範圍內的檢查）仍依一般就醫流程進行。詳細費用細節，主持醫師與研究護理師會在簽署知情同意書前向您完整說明。",
    },
    {
        q: "我可以隨時退出嗎？",
        a: "可以。參加臨床試驗是自願的，您隨時可以決定退出，且不會影響您後續的醫療權益。如果您決定退出，請告知主持醫師與研究護理師，團隊會協助您安排後續的標準治療或追蹤。",
    },
    {
        q: "萬一有副作用怎麼辦？",
        a: "試驗團隊會在治療期間密切監控您的反應與副作用，並依照試驗計畫書處理。臨床試驗有完整的安全監控機制，包括定期回診、抽血檢查與不良事件通報。若發生試驗相關的副作用，相關醫療照護費用會由藥廠或試驗計畫負擔。",
    },
    {
        q: "怎麼知道自己分到實驗組還是對照組？",
        a: "這要看試驗設計。許多第 3 期試驗採用「隨機分配」，由電腦隨機決定您分到哪一組，且部分試驗會「雙盲」（您、您的醫師都不知道您分到哪一組），目的是讓比較結果更客觀。試驗結束、解盲後您會知道分組結果。對照組通常使用目前標準治療，並非「安慰劑」，請放心。第 1、2 期試驗則通常所有人都接受實驗藥物。",
    },
    {
        q: "試驗結束後，我還能繼續用這個藥嗎？",
        a: "視情況而定。如果試驗藥物對您有效，部分試驗會有「延伸試驗」(extension study) 讓您繼續用藥；如果該藥物已在台灣核准上市，您可依正常程序取得；若尚未上市，主持醫師會協助您規劃後續治療。",
    },
    {
        q: "Phase 1、Phase 2、Phase 3 有什麼不同？",
        a: "Phase 1（第一期）主要評估藥物的安全性、找出合適劑量，通常人數較少（20–80 人）。Phase 2（第二期）評估初步療效，人數約 100–300 人。Phase 3（第三期）為大規模試驗，比較新藥與標準治療的優劣，通常數百至數千人參與，是新藥能否上市的關鍵。Phase 4 為上市後的長期追蹤。",
    },
    {
        q: "我要怎麼知道哪些試驗適合我？",
        a: "請至成大醫院血液科門診掛號，主持醫師會根據您的疾病類型、過去治療紀錄、身體狀況等評估您可能合適的試驗，並向您完整說明試驗目的、藥物、流程、可能的好處與風險。您有充分時間考慮後再決定是否簽署知情同意書。",
    },
    {
        q: "誰會審查臨床試驗是否安全且合乎倫理？",
        a: "每項臨床試驗都必須經過「人體試驗委員會 (IRB)」的審查與核可，才能進行。IRB 由醫師、護理師、藥師、倫理學者、社會人士等組成，會審查試驗計畫是否科學上合理、是否充分保障參與者權益。試驗進行期間，IRB 也會持續監督。",
    },
];

export default function AboutTrialsPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map(f => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    };

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "NCKUH Hematology Trials", item: "https://trials.hematology.tw" },
            { "@type": "ListItem", position: 2, name: "病患資訊", item: "https://trials.hematology.tw/patients" },
            { "@type": "ListItem", position: 3, name: "什麼是臨床試驗", item: "https://trials.hematology.tw/about-trials" },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
            <main className="min-h-screen bg-background">
                <div className="container py-8 max-w-7xl mx-auto space-y-10">
                    <div className="flex items-center justify-between">
                        <Link
                            href="/patients"
                            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            返回病患資訊
                        </Link>
                        <AudienceSwitch target="hcp" />
                    </div>

                    <header>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <BookOpen className="h-7 w-7 text-primary" />
                            </div>
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                                    什麼是臨床試驗？
                                </h1>
                                <p className="text-muted-foreground">成大醫院血液科 — 病患與家屬指南</p>
                            </div>
                        </div>
                    </header>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold border-b pb-2">臨床試驗是什麼</h2>
                        <p className="leading-relaxed">
                            臨床試驗 (Clinical Trial) 是讓研究中的新藥物、新療法、新醫療器材在人體中進行的研究，目的在證明其
                            <strong>安全性</strong>與<strong>療效</strong>。
                            所有目前我們使用的標準治療藥物，都曾經過臨床試驗證實有效後才能上市。臨床試驗是醫學進步、為病患帶來新療法的關鍵環節。
                        </p>
                        <p className="leading-relaxed">
                            在血液科領域，過去 10 年因為臨床試驗的進展，許多疾病（如急性白血病、淋巴瘤、骨髓瘤等）的治療成績都大幅改善，過去難以治療的疾病現在已有多種新藥選項。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold border-b pb-2">試驗分期</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <Card>
                                <CardContent className="p-4 space-y-2">
                                    <div className="font-bold text-primary">Phase 1</div>
                                    <p className="text-sm">
                                        評估安全性、找出合適劑量。人數較少 (20–80 人)，多為已用盡標準治療的病患。
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4 space-y-2">
                                    <div className="font-bold text-primary">Phase 2</div>
                                    <p className="text-sm">
                                        評估初步療效。人數 100–300 人，鎖定特定疾病或亞型。
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4 space-y-2">
                                    <div className="font-bold text-primary">Phase 3</div>
                                    <p className="text-sm">
                                        比較新藥與標準治療。數百至數千人參與，是新藥能否上市的關鍵。
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold border-b pb-2 flex items-center gap-2">
                            <Activity className="h-5 w-5 text-primary" />
                            參加臨床試驗的好處
                        </h2>
                        <ul className="space-y-2 text-base leading-relaxed">
                            <li className="flex gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>
                                    <strong>有機會取得最新治療</strong> — 在新藥上市前提早使用，特別是對標準治療反應不佳的病患而言，臨床試驗可能是重要的治療選項。
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>
                                    <strong>密切的醫療照護</strong> — 試驗團隊會根據計畫書定期追蹤您的反應，回診頻率與檢查項目通常比一般門診更密集，能更早發現問題並處理。
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>
                                    <strong>不需支付試驗藥費</strong> — 試驗藥物與計畫相關的特殊檢查通常由藥廠或試驗計畫支付。
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>
                                    <strong>為醫學進步貢獻</strong> — 您的參與將幫助未來的病患得到更好的治療。
                                </span>
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold border-b pb-2 flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5 text-amber-600" />
                            可能的風險
                        </h2>
                        <ul className="space-y-2 text-base leading-relaxed">
                            <li className="flex gap-3">
                                <span className="text-amber-600 font-bold">•</span>
                                <span>
                                    <strong>副作用尚未完全掌握</strong> — 特別是 Phase 1 試驗，因為人類使用經驗少，可能會出現未預期的副作用。試驗團隊會密切監控並及時處理。
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-amber-600 font-bold">•</span>
                                <span>
                                    <strong>新藥未必比標準治療更有效</strong> — 雖然試驗藥物經過篩選才進入臨床研究，但有時結果可能與預期不同。
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-amber-600 font-bold">•</span>
                                <span>
                                    <strong>需配合較頻繁的追蹤</strong> — 試驗回診頻率、檢查次數通常比一般門診多，可能需要較多時間與交通配合。
                                </span>
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold border-b pb-2 flex items-center gap-2">
                            <ListChecks className="h-5 w-5 text-primary" />
                            參加流程
                        </h2>
                        <ol className="space-y-3 text-base leading-relaxed">
                            <li className="flex gap-3">
                                <span className="bg-primary/10 text-primary font-bold rounded-full w-7 h-7 shrink-0 flex items-center justify-center text-sm">1</span>
                                <span>
                                    <strong>諮詢與評估</strong> — 至成大血液科門診掛號，主持醫師會根據您的疾病類型、過去治療等評估合適的試驗。
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="bg-primary/10 text-primary font-bold rounded-full w-7 h-7 shrink-0 flex items-center justify-center text-sm">2</span>
                                <span>
                                    <strong>說明與知情同意</strong> — 主持醫師、研究護理師會詳細說明試驗目的、藥物、流程、可能好處與風險。您有充分時間考慮後再決定簽署知情同意書 (Informed Consent)。
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="bg-primary/10 text-primary font-bold rounded-full w-7 h-7 shrink-0 flex items-center justify-center text-sm">3</span>
                                <span>
                                    <strong>篩選檢查 (Screening)</strong> — 進行抽血、影像、骨髓檢查等，確認您是否符合試驗收案條件。
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="bg-primary/10 text-primary font-bold rounded-full w-7 h-7 shrink-0 flex items-center justify-center text-sm">4</span>
                                <span>
                                    <strong>治療階段</strong> — 開始試驗藥物治療，期間定期回診、檢查與追蹤反應。
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="bg-primary/10 text-primary font-bold rounded-full w-7 h-7 shrink-0 flex items-center justify-center text-sm">5</span>
                                <span>
                                    <strong>長期追蹤</strong> — 治療結束後仍會繼續追蹤一段時間，以了解長期療效與安全性。
                                </span>
                            </li>
                        </ol>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold border-b pb-2 flex items-center gap-2">
                            <Shield className="h-5 w-5 text-primary" />
                            病患權益保障
                        </h2>
                        <ul className="space-y-2 text-base leading-relaxed">
                            <li className="flex gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>
                                    <strong>IRB 倫理審查</strong> — 每項試驗都必須經過人體試驗委員會 (IRB) 審查核可。IRB 由跨領域成員組成，會審查試驗計畫的科學性、安全性與倫理性。
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>
                                    <strong>知情同意書</strong> — 您有權充分了解試驗內容後再決定是否參加。簽署後您仍可隨時退出，且不影響後續就醫權益。
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>
                                    <strong>安全監控機制</strong> — 試驗期間有獨立的數據安全監測委員會 (DSMB) 監控所有參與者的安全資料，必要時可暫停或終止試驗。
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>
                                    <strong>個人資料保密</strong> — 您的醫療資料會去識別化處理，僅有授權人員可存取。
                                </span>
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold border-b pb-2 flex items-center gap-2">
                            <HelpCircle className="h-5 w-5 text-primary" />
                            常見問題
                        </h2>
                        <div className="space-y-3">
                            {FAQS.map((f, i) => (
                                <details key={i} className="group border rounded-lg">
                                    <summary className="cursor-pointer p-4 font-medium text-base hover:bg-accent transition-colors flex items-start justify-between gap-2 list-none">
                                        <span>Q{i + 1}. {f.q}</span>
                                        <span className="text-muted-foreground text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                                    </summary>
                                    <div className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground border-t pt-3">
                                        {f.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>

                    <Card className="border-primary/30 bg-primary/5">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <Phone className="h-5 w-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold mb-1">想了解您適合的臨床試驗？</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        請至成大醫院血液科醫師門診諮詢，醫師會根據您的狀況為您評估。
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <a
                                            href={CONSULT_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4"
                                        >
                                            查看門診時間表
                                        </a>
                                        <Link
                                            href="/patients"
                                            className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-input bg-background hover:bg-accent h-10 px-4"
                                        >
                                            瀏覽目前試驗
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <p className="text-xs text-muted-foreground text-center pt-4 border-t">
                        本頁資訊為一般性介紹，個別試驗細節請依各試驗計畫書與主持醫師說明為準。
                    </p>
                </div>
            </main>
        </>
    );
}
