-- Drop the two-month-old backup of the trials table.
-- The Supabase RLS linter flagged it because the table was in the public
-- schema (PostgREST-exposed) with no RLS policy. Git history + Supabase
-- PITR cover the backup-restore use case, so the snapshot is no longer
-- needed.
drop table if exists public.trials_backup_20260307;
