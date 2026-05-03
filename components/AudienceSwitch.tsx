"use client";

import { useRouter } from "next/navigation";
import { Stethoscope, Users } from "lucide-react";
import { Audience, writeAudience } from "@/lib/audience";

interface Props {
    /** Which audience this link will switch to */
    target: Audience;
}

export function AudienceSwitch({ target }: Props) {
    const router = useRouter();

    const onClick = () => {
        writeAudience(target);
        router.push(target === "public" ? "/patients" : "/");
    };

    const label = target === "public" ? "切換到病患版" : "切換到醫療人員版";
    const Icon = target === "public" ? Users : Stethoscope;

    return (
        <button
            type="button"
            onClick={onClick}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md hover:bg-accent"
        >
            <Icon className="h-4 w-4" />
            {label}
        </button>
    );
}
