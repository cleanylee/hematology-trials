"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Stethoscope, Users } from "lucide-react";
import { Audience, readAudience, writeAudience } from "@/lib/audience";

export function AudienceGate() {
    const [show, setShow] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const existing = readAudience();
        if (existing) return;

        // Visitors who land directly on a patient page came for the patient view —
        // silently set the cookie, no modal interruption.
        if (pathname?.startsWith("/patients")) {
            writeAudience("public");
            return;
        }
        // Skip on admin/auth flows entirely
        if (pathname?.startsWith("/admin") || pathname?.startsWith("/auth") || pathname?.startsWith("/login")) {
            return;
        }

        setShow(true);
    }, [pathname]);

    if (!show) return null;

    const choose = (a: Audience) => {
        writeAudience(a);
        setShow(false);
        if (a === "public" && !pathname?.startsWith("/patients")) {
            router.push("/patients");
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="audience-gate-title"
        >
            <div className="bg-card rounded-xl shadow-2xl max-w-md w-full p-6 space-y-6 border">
                <div>
                    <h2 id="audience-gate-title" className="text-xl font-bold mb-2">
                        歡迎使用本網站
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        本網站提供成大醫院血液科臨床試驗資訊。<br />
                        請選擇您的身份以瀏覽合適的版本：
                    </p>
                </div>

                <div className="grid gap-3">
                    <button
                        type="button"
                        onClick={() => choose("hcp")}
                        className="flex items-center gap-4 p-4 rounded-lg border-2 border-input hover:border-primary hover:bg-accent transition-colors text-left"
                    >
                        <Stethoscope className="h-7 w-7 text-primary shrink-0" />
                        <div>
                            <div className="font-semibold">醫療人員</div>
                            <div className="text-xs text-muted-foreground">
                                Health Care Professional — 完整試驗資訊（英文 protocol、收案條件詳情）
                            </div>
                        </div>
                    </button>
                    <button
                        type="button"
                        onClick={() => choose("public")}
                        className="flex items-center gap-4 p-4 rounded-lg border-2 border-input hover:border-primary hover:bg-accent transition-colors text-left"
                    >
                        <Users className="h-7 w-7 text-primary shrink-0" />
                        <div>
                            <div className="font-semibold">病患 / 一般民眾</div>
                            <div className="text-xs text-muted-foreground">
                                General Public — 中文簡要說明，提供病患與家屬參考
                            </div>
                        </div>
                    </button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                    您的選擇將儲存於本機 (cookie)，下次造訪不再詢問。可隨時於頁面上方切換。
                </p>
            </div>
        </div>
    );
}
