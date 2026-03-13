import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "Hematology Clinical Trials - NCKUH",
        template: "%s | NCKUH Hematology Trials"
    },
    description: "Search and browse active hematology clinical trials at National Cheng Kung University Hospital (NCKUH). Find trial requirements, status, and contact information.",
    keywords: ["hematology", "clinical trials", "NCKUH", "blood cancer", "leukemia", "lymphoma", "myeloma", "Taiwan"],
    openGraph: {
        title: "Hematology Clinical Trials - NCKUH",
        description: "Dashboard for active hematology clinical trials at National Cheng Kung University Hospital.",
        url: "https://hematology-trials.nckuh.org.tw", // Replace with your actual deployed URL
        siteName: "NCKUH Hematology Trials",
        locale: "en_US",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex min-h-screen flex-col">
                    <div className="flex-1">{children}</div>
                    <footer className="border-t py-6 md:py-0">
                        <div className="container flex flex-col items-center justify-center gap-1 text-xs text-muted-foreground text-center py-4">
                            <p>臨床試驗資訊以最新版本計畫書為準 Clinical trial information is subject to the latest version of the Protocol.</p>
                            <p>系統設計 李欣學醫師 System designed by Sin-Syue Li</p>
                        </div>
                    </footer>
                </footer>
            </div>
            {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
        </body>
        </html >
    );
}
