import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://trials.hematology.tw"),
    title: {
        default: "成大醫院血液科臨床試驗 | NCKUH Hematology Clinical Trials",
        template: "%s | NCKUH Hematology Trials"
    },
    description: "成大醫院血液腫瘤科現行臨床試驗一覽:涵蓋白血病、淋巴瘤、骨髓瘤、骨髓增生疾病等。Active hematology clinical trials at National Cheng Kung University Hospital (NCKUH) — leukemia, lymphoma, myeloma, MPN. Find eligibility, status, and contact information.",
    keywords: [
        "成大醫院", "血液科", "血液腫瘤科", "臨床試驗", "NCKUH",
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
                <div className="flex min-h-screen flex-col">
                    <div className="flex-1">{children}</div>
                    <footer className="border-t py-6 md:py-0">
                        <div className="container flex flex-col items-center justify-center gap-1 text-xs text-muted-foreground text-center py-4">
                            <p>臨床試驗資訊以最新版本計畫書為準 Clinical trial information is subject to the latest version of the Protocol.</p>
                            <p>系統設計 李欣學醫師 System designed by Sin-Syue Li</p>
                        </div>
                    </footer>
                </div>
                <GoogleAnalytics gaId="G-6TY069VNRL" />
            </body>
        </html>
    );
}
