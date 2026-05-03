'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Edit } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

export function EditTrialButton({ id }: { id: string }) {
    const [isAuthed, setIsAuthed] = useState(false)

    useEffect(() => {
        const supabase = createClient()
        supabase.auth.getUser().then(({ data: { user } }) => {
            setIsAuthed(!!user)
        })
    }, [])

    if (!isAuthed) return null

    return (
        <Link
            href={`/admin/trials/${id}/edit`}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4"
        >
            <Edit className="mr-2 h-4 w-4" />
            Edit Trial
        </Link>
    )
}
