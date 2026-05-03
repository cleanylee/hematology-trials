-- Add Chinese study drug name field. Safe to re-run.

alter table public.trials
    add column if not exists study_drug_zh text null;

comment on column public.trials.study_drug_zh is 'Chinese name / brief description of the study drug, used on patient-facing pages';
