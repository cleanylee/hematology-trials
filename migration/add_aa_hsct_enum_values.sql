-- Extend disease_category enum with AA (Aplastic Anemia) and HSCT
-- (Hematopoietic Stem Cell Transplantation).
-- Non-destructive — existing rows are untouched.
-- IMPORTANT: in PostgreSQL, ALTER TYPE ADD VALUE must run outside any
-- transaction block. The Supabase SQL Editor runs statements
-- auto-committed individually, so the two statements below are safe.

alter type public.disease_category add value if not exists 'AA';
alter type public.disease_category add value if not exists 'HSCT';
