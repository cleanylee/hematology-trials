-- Update script for Clinical Trial Numbers (NCT IDs)
-- Generated automatically by fetch_nct_ids.py
BEGIN;
UPDATE public.trials SET clinical_trial_number = 'NCT06136559', updated_at = NOW() WHERE trial_name = 'MK-1026-011';
UPDATE public.trials SET clinical_trial_number = 'NCT06970743', updated_at = NOW() WHERE trial_name = 'BGB-16673-303';
UPDATE public.trials SET clinical_trial_number = 'NCT04994717', updated_at = NOW() WHERE trial_name = '20190360';
UPDATE public.trials SET clinical_trial_number = 'NCT06137118', updated_at = NOW() WHERE trial_name = 'D7405C00001';
UPDATE public.trials SET clinical_trial_number = 'NCT04988555', updated_at = NOW() WHERE trial_name = 'DSP-5336-101';
UPDATE public.trials SET clinical_trial_number = 'NCT07295951', updated_at = NOW() WHERE trial_name = '75276617ALE1001';
UPDATE public.trials SET clinical_trial_number = 'NCT06578247', updated_at = NOW() WHERE trial_name = 'AC220-168';
UPDATE public.trials SET clinical_trial_number = 'NCT06499285', updated_at = NOW() WHERE trial_name = 'KER-050-D301';
UPDATE public.trials SET clinical_trial_number = 'NCT06230224', updated_at = NOW() WHERE trial_name = 'R1979-HM-2299
(Olympia-4)';
UPDATE public.trials SET clinical_trial_number = 'NCT05653271', updated_at = NOW() WHERE trial_name = 'ACE1831-001';
UPDATE public.trials SET clinical_trial_number = 'NCT06191744', updated_at = NOW() WHERE trial_name = 'M22-003';
UPDATE public.trials SET clinical_trial_number = 'NCT04224493', updated_at = NOW() WHERE trial_name = 'EZH-302';
UPDATE public.trials SET clinical_trial_number = 'NCT04594642', updated_at = NOW() WHERE trial_name = 'D7400C00006';
UPDATE public.trials SET clinical_trial_number = 'NCT05475925', updated_at = NOW() WHERE trial_name = 'DR-01-ONC-001';
UPDATE public.trials SET clinical_trial_number = 'NCT07234162', updated_at = NOW() WHERE trial_name = 'DZ2022J0004';
UPDATE public.trials SET clinical_trial_number = 'NCT06526793', updated_at = NOW() WHERE trial_name = 'D7404C00001
(SOUNDTRACK-B)';
UPDATE public.trials SET clinical_trial_number = 'NCT06549595', updated_at = NOW() WHERE trial_name = 'D7401C00001';
UPDATE public.trials SET clinical_trial_number = 'NCT05133531', updated_at = NOW() WHERE trial_name = 'R3918-PNH-2021';
UPDATE public.trials SET clinical_trial_number = 'NCT06479135', updated_at = NOW() WHERE trial_name = 'KRT-232-115';
UPDATE public.trials SET clinical_trial_number = 'NCT06952478', updated_at = NOW() WHERE trial_name = 'CT-P44 3.1';
UPDATE public.trials SET clinical_trial_number = 'NCT06679101', updated_at = NOW() WHERE trial_name = 'DREAMM-10(214828)';
UPDATE public.trials SET clinical_trial_number = 'NCT05020236', updated_at = NOW() WHERE trial_name = 'C1071005';
UPDATE public.trials SET clinical_trial_number = 'NCT06604715', updated_at = NOW() WHERE trial_name = '87562761MMY1001';
COMMIT;
