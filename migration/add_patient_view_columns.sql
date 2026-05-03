-- Add patient-friendly Chinese fields used by /patients pages.
-- Safe to re-run.

alter table public.trials
    add column if not exists mechanism_zh text null,
    add column if not exists eligibility_zh text null;

comment on column public.trials.mechanism_zh is 'Patient-friendly Chinese mechanism description (1–2 sentences)';
comment on column public.trials.eligibility_zh is 'Simplified Chinese inclusion criteria, one bullet per line (prefix "• ")';
