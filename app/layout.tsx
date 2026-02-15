import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Hematology Clinical Trials - NCKUH",
    description: "Dashboard for hematology clinical trials at NCKUH",
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
                </div>
            </body>
        </html>
    );
}
