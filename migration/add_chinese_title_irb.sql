-- Add Chinese full title and IRB approval number columns.
-- Run this once on production via Supabase SQL Editor.
-- Safe to re-run: uses IF NOT EXISTS.

alter table public.trials
    add column if not exists chinese_full_title text null,
    add column if not exists irb_approval_number text null;

comment on column public.trials.chinese_full_title is 'Full Chinese title of the trial';
comment on column public.trials.irb_approval_number is 'NCKUH IRB approval number';
