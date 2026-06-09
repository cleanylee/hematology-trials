import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import { AudienceGate } from "@/components/AudienceGate";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://trials.hematology.tw"),
    title: {
        default: "成大醫院血液科臨床試驗 | NCKUH Hematology Clinical Trials",
        template: "%s | NCKUH Hematology Trials"
    },
    description: "成大醫院血液科現行臨床試驗一覽:涵蓋白血病、淋巴瘤、骨髓瘤、骨髓增生疾病等。Active hematology clinical trials at National Cheng Kung University Hospital (NCKUH) — leukemia, lymphoma, myeloma, MPN. Find eligibility, status, and contact information.",
    keywords: [
        "成大醫院", "血液科", "臨床試驗", "NCKUH",
        "hematology", "clinical trials", "Taiwan",
        "leukemia", "lymphoma", "myeloma", "MDS", "MPN", "CLL", "AML", "CAR-T",
        "白血病", "淋巴瘤", "骨髓瘤"
    ],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "成大醫院血液科臨床試驗 | NCKUH Hematology Clinical Trials",
        description: "Dashboard for active hematology clinical trials at National Cheng Kung University Hospital.",
        url: "https://trials.hematology.tw",
        siteName: "NCKUH Hematology Trials",
        locale: "zh_TW",
        alternateLocale: ["en_US"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "成大醫院血液科臨床試驗 | NCKUH Hematology Clinical Trials",
        description: "Active hematology clinical trials at National Cheng Kung University Hospital (NCKUH) — leukemia, lymphoma, myeloma, MPN.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-Hant">
            <body className={inter.className}>
                <AudienceGate />
                <div className="flex min-h-screen flex-col">
                    <div className="flex-1">{children}</div>
                    <footer className="border-t">
                        <div className="container max-w-4xl mx-auto py-6 text-xs text-muted-foreground space-y-3 text-center">
                            <div className="space-y-0.5">
                                <p className="font-semibold text-foreground">國立成功大學醫學院附設醫院 內科部血液科</p>
                                <p>地址：70403 台南市北區勝利路 138 號</p>
                                <p>電話：06-235-3535 分機 4620</p>
                            </div>
                            <div className="border-t pt-3 space-y-0.5">
                                <p>臨床試驗資訊以最新版本計畫書為準 Clinical trial information is subject to the latest version of the Protocol.</p>
                                <p>系統設計 李欣學醫師 System designed by Sin-Syue Li</p>
                            </div>
                        </div>
                    </footer>
                </div>
                <GoogleAnalytics gaId="G-6TY069VNRL" />
            </body>
        </html>
    );
}
