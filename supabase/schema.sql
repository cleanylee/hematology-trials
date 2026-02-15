-- Drop previous types and tables if they exist
drop table if exists public.trials;
drop type if exists public.disease_category;
drop type if exists public.trial_status;

-- Create an Enum for Disease Category
create type public.disease_category as enum (
  'AML',
  'ALL',
  'MM',
  'Lymphoma',
  'PNH',
  'MPN',
  'GVHD',
  'Other'
);

-- Create an Enum for Trial Status
create type public.trial_status as enum (
  'Pending Approval',
  'Recruiting',
  'On Hold',
  'Recruiting Completed',
  'Trial Completed',
  'Terminated'
);

-- Create the Trials table
create table public.trials (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone null,
  
  disease_category disease_category not null,
  trial_name text not null,
  clinical_trial_number text not null, -- NCT Number
  
  study_drug text not null,
  study_design text null,
  control_arm text null,
  
  sponsor text null, -- New column
  
  inclusion_criteria_simple text null,
  inclusion_criteria_detailed text null,
  exclusion_criteria_simple text null,
  exclusion_criteria_detailed text null,
  
  expected_enrollment int4 null default 0,
  already_enrolled int4 null default 0,
  
  study_nurse text null,
  contact_tel text null,
  pi text not null, -- Principal Investigator
  
  note text null,
  status trial_status not null default 'Recruiting'::trial_status,
  
  constraint trials_pkey primary key (id)
);

-- Enable Row Level Security
alter table public.trials enable row level security;

-- Policy: Everyone can read trials
create policy "Enable read access for all users" on public.trials
  for select using (true);

-- Policy: Only authenticated admins can insert/update/delete
-- Assuming admin users are the only ones authenticated for now
create policy "Enable write access for authenticated users only" on public.trials
  for all using (auth.role() = 'authenticated');
