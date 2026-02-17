-- Seed data generated from migration
BEGIN;

INSERT INTO public.trials (id, created_at, updated_at, disease_category, trial_name, clinical_trial_number, study_drug, mechanism_of_action, study_design, control_arm, inclusion_criteria_simple, inclusion_criteria_detailed, expected_enrollment, already_enrolled, study_nurse, contact_tel, pi, sponsor, status) VALUES ('8521caf6-62ed-49a4-bb4b-cb16943187d3', '2026-02-17T07:22:50.882535+00:00', '2026-02-17T07:22:50.882535+00:00', 'ALL', 'D7405C00001', 'D7405C00001', 'AZD0486', 'anti-CD19/CD3', 'I/ II', '', '1.≥2 prior Tx
2. CD19(+)
3. PH(+)->至少兩線TKI failure or replase
4. PH(-)->至少兩線systemic therapy failure', 'Age: 1. ≥12 years
2. CD19+
Phase: I/ II', 3, 0, '吳軒綾', '3998', 'Unknown', 'Unknown', 'Recruiting');
INSERT INTO public.trials (id, created_at, updated_at, disease_category, trial_name, clinical_trial_number, study_drug, mechanism_of_action, study_design, control_arm, inclusion_criteria_simple, inclusion_criteria_detailed, expected_enrollment, already_enrolled, study_nurse, contact_tel, pi, sponsor, status) VALUES ('4713eb1f-44e6-433f-b268-3b609dac7ff9', '2026-02-17T07:22:50.882535+00:00', '2026-02-17T07:22:50.882535+00:00', 'ALL', 'DSP-5336-101', 'DSP-5336-101', 'DSP-5336', 'Menin inhibitor', 'I/ II', '', '4 cycle HMA/ LDAC or 2 cycle combination therapy failure for refractory group', 'Age: ≥18 years
Phase: I/ II', 3, 0, '鄭采涵', '3974', 'Unknown', 'Unknown', 'Recruiting');
INSERT INTO public.trials (id, created_at, updated_at, disease_category, trial_name, clinical_trial_number, study_drug, mechanism_of_action, study_design, control_arm, inclusion_criteria_simple, inclusion_criteria_detailed, expected_enrollment, already_enrolled, study_nurse, contact_tel, pi, sponsor, status) VALUES ('4e6423ae-bc92-481e-a673-cfd772be0116', '2026-02-17T07:22:50.882535+00:00', '2026-02-17T07:22:50.882535+00:00', 'AML-MDS', '75276617ALE1001', '75276617ALE1001', 'Bleximenib', 'Menin-KMT2A (MLL1) inhibitor', 'II', '', 'Cohort A1: KMT2A-r AML
Cohort A2: NPM1m AML', 'Age: ≥18 years
Phase: II', 2, 0, '李佳玲', '4620', 'Unknown', 'Unknown', 'Recruiting');
INSERT INTO public.trials (id, created_at, updated_at, disease_category, trial_name, clinical_trial_number, study_drug, mechanism_of_action, study_design, control_arm, inclusion_criteria_simple, inclusion_criteria_detailed, expected_enrollment, already_enrolled, study_nurse, contact_tel, pi, sponsor, status) VALUES ('fc41a52c-be12-4754-b17c-ee08966f3905', '2026-02-17T07:22:50.882535+00:00', '2026-02-17T07:22:50.882535+00:00', 'AML-MDS', 'AC220-168', 'AC220-168', 'Quizartinib/ Placebo', 'class III receptor tyrosine kinases', 'III', '', 'Untreated & FLT3-ITD(-)', 'Age: ≥18 years
Phase: III', 4, 1, '李佳玲', '4620', 'Unknown', 'Unknown', 'Recruiting');
INSERT INTO public.trials (id, created_at, updated_at, disease_category, trial_name, clinical_trial_number, study_drug, mechanism_of_action, study_design, control_arm, inclusion_criteria_simple, inclusion_criteria_detailed, expected_enrollment, already_enrolled, study_nurse, contact_tel, pi, sponsor, status) VALUES ('c98ec5b2-2a47-4b9f-90fe-6f7520f4efbe', '2026-02-17T07:22:50.882535+00:00', '2026-02-17T07:22:50.882535+00:00', 'AML-MDS', 'KER-050-D301', 'KER-050-D301', 'Elritercept/ placebo', 'tgf-β ligand', 'III', '', 'very low-, low-, intermediate risk MDS', 'Age: ≥18 years
Phase: III', 0, 0, '李佳玲', '4620', 'Unknown', 'Unknown', 'Recruiting');
INSERT INTO public.trials (id, created_at, updated_at, disease_category, trial_name, clinical_trial_number, study_drug, mechanism_of_action, study_design, control_arm, inclusion_criteria_simple, inclusion_criteria_detailed, expected_enrollment, already_enrolled, study_nurse, contact_tel, pi, sponsor, status) VALUES ('7c6addcc-a080-4cc8-9425-f5ea9632f2a6', '2026-02-17T07:22:50.882535+00:00', '2026-02-17T07:22:50.882535+00:00', 'AML-MDS', 'ZE46-0134-0002-US', 'ZE46-0134-0002-US', 'ZE46-0134', 'FLT3 inhibitors', 'I', '', 'Group 1: FLT3 ITD/TDK mutation
Group 2: Spliceosome Mutation (SF3B1, SRSF2, U2AF1, ZRSR2)', 'Age: ≥18 years
Phase: I', 0, 0, '李佳玲', '4620', 'Unknown', 'Unknown', 'Recruiting');
INSERT INTO public.trials (id, created_at, updated_at, disease_category, trial_name, clinical_trial_number, study_drug, mechanism_of_action, study_design, control_arm, inclusion_criteria_simple, inclusion_criteria_detailed, expected_enrollment, already_enrolled, study_nurse, contact_tel, pi, sponsor, status) VALUES ('4310502e-3a96-430d-8ffc-3468480d3379', '2026-02-17T07:22:50.882535+00:00', '2026-02-17T07:22:50.882535+00:00', 'Lymphoma', 'R1979-ONC-2210
(Olympia-5)', 'R1979-ONC-2210
(Olympia-5)', 'Odronextamab+ Lenalidomide', 'CD20+CD3 bispecific Ab', 'III', 'R2', '1.R/R
2.≥1 prior Tx', 'Age: 
Phase: III', 3, 0, '溫上容', '3998', 'Unknown', 'Unknown', 'Recruiting');
INSERT INTO public.trials (id, created_at, updated_at, disease_category, trial_name, clinical_trial_number, study_drug, mechanism_of_action, study_design, control_arm, inclusion_criteria_simple, inclusion_criteria_detailed, expected_enrollment, already_enrolled, study_nurse, contact_tel, pi, sponsor, status) VALUES ('7e755eb9-fb11-4ea2-add5-4d75326ebd05', '2026-02-17T07:22:50.882535+00:00', '2026-02-17T07:22:50.882535+00:00', 'Lymphoma', 'R1979-HM-2299
(Olympia-4)', 'R1979-HM-2299
(Olympia-4)', 'Odronextamab', 'CD20+CD3 bispecific Ab', 'III', 'R-ICE
R-DHAP
R-GDP', '1. DLBCL(de novo or transformed indolent NHL, high-grade B with MYC+BCL2 ± BCL6
2. r/r within 12m from 1st treatment', 'Age: 
Phase: III', 3, 1, '劉璟穎', '6452', 'Unknown', 'Unknown', 'Recruiting');
INSERT INTO public.trials (id, created_at, updated_at, disease_category, trial_name, clinical_trial_number, study_drug, mechanism_of_action, study_design, control_arm, inclusion_criteria_simple, inclusion_criteria_detailed, expected_enrollment, already_enrolled, study_nurse, contact_tel, pi, sponsor, status) VALUES ('27c0f659-9d51-42b4-831a-e780ef170e97', '2026-02-17T07:22:50.882535+00:00', '2026-02-17T07:22:50.882535+00:00', 'Lymphoma', 'ACE1831-001', 'ACE1831-001', 'ACE1831', 'ACC(CAR-T)', 'I b/ II', '', 'R/R', 'Age: 
Phase: I b/ II', 4, 2, '鄭采涵', '3974', 'Unknown', 'Unknown', 'Recruiting');
INSERT INTO public.trials (id, created_at, updated_at, disease_category, trial_name, clinical_trial_number, study_drug, mechanism_of_action, study_design, control_arm, inclusion_criteria_simple, inclusion_criteria_detailed, expected_enrollment, already_enrolled, study_nurse, contact_tel, pi, sponsor, status) VALUES ('15a576f7-0bdb-4a5f-b72d-6fce2631e1d5', '2026-02-17T07:22:50.882535+00:00', '2026-02-17T07:22:50.882535+00:00', 'Lymphoma', 'M22-003', 'M22-003', 'Epcoritamab+ R2', 'CD20+CD3 bispecific Ab', 'III', 'Arm B: G-CHOP/ R-CHOP/ BR
Arm C: R2', 'newly diagnosed + stage, III or IV disease, or stage II with bulky disease', 'Age: 
Phase: III', 5, 4, '鄭采涵', '3974', 'Unknown', 'Unknown', 'Recruiting');
INSERT INTO public.trials (id, created_at, updated_at, disease_category, trial_name, clinical_trial_number, study_drug, mechanism_of_action, study_design, control_arm, inclusion_criteria_simple, inclusion_criteria_detailed, expected_enrollment, already_enrolled, study_nurse, contact_tel, pi, sponsor, status) VALUES ('c33b829c-01c3-4567-a8ae-e1c5bc126463', '2026-02-17T07:22:50.882535+00:00', '2026-02-17T07:22:50.882535+00:00', 'Lymphoma', 'EZH-302', 'EZH-302', 'Tazemetostat+ R2', 'EZH 2 innibitor', 'III', 'placebo +R2', '≥1 prior Tx', 'Age: 
Phase: III', 6, 6, '鄭采涵', '3974', 'Unknown', 'Unknown', 'Recruiting');
INSERT INTO public.trials (id, created_at, updated_at, disease_category, trial_name, clinical_trial_number, study_drug, mechanism_of_action, study_design, control_arm, inclusion_criteria_simple, inclusion_criteria_detailed, expected_enrollment, already_enrolled, study_nurse, contact_tel, pi, sponsor, status) VALUES ('bc75df88-67f4-47d4-bc59-42dcdef2f0b1', '2026-02-17T07:22:50.882535+00:00', '2026-02-17T07:22:50.882535+00:00', 'Lymphoma', 'D7400C00006', 'D7400C00006', 'AZD0486(TNB-486)', 'CD19+CD3 bispecific Ab', 'I', '', '1. R/R 
2. ≥2 prior Tx', 'Age: 
Phase: I', 5, 3, '鄭采涵', '3974', 'Unknown', 'Unknown', 'Recruiting');
INSERT INTO public.trials (id, created_at, updated_at, disease_category, trial_name, clinical_trial_number, study_drug, mechanism_of_action, study_design, control_arm, inclusion_criteria_simple, inclusion_criteria_detailed, expected_enrollment, already_enrolled, study_nurse, contact_tel, pi, sponsor, status) VALUES ('10db1671-0794-4ada-843e-0ebe13125001', '2026-02-17T07:22:50.882535+00:00', '2026-02-17T07:22:50.882535+00:00', 'Lymphoma', 'DR-01-ONC-001', 'DR-01-ONC-001', 'DR-01', 'human IgG1 antibody against CD94,', 'I/II', '', '≥1 prior Tx', 'Age: 
Phase: I/II', 2, 2, '李佳玲', '4620', 'Unknown', 'Unknown', 'Recruiting');
INSERT INTO public.trials (id, created_at, updated_at, disease_category, trial_name, clinical_trial_number, study_drug, mechanism_of_action, study_design, control_arm, inclusion_criteria_simple, inclusion_criteria_detailed, expected_enrollment, already_enrolled, study_nurse, contact_tel, pi, sponsor, status) VALUES ('ad9698cb-1f23-477b-8f54-6fdc2fa0f59c', '2026-02-17T07:22:50.882535+00:00', '2026-02-17T07:22:50.882535+00:00', 'Lymphoma', 'DZ2022J0004', 'DZ2022J0004', 'Golidicitinib', 'JAK 1', 'III', 'Pralatrexate(缺藥)
Belinostat
Gemcitabine
Chidamide', '≥1 prior Tx', 'Age: 
Phase: III', 4, 3, '李佳玲', '4620', 'Unknown', 'Unknown', 'Recruiting');
INSERT INTO public.trials (id, created_at, updated_at, disease_category, trial_name, clinical_trial_number, study_drug, mechanism_of_action, study_design, control_arm, inclusion_criteria_simple, inclusion_criteria_detailed, expected_enrollment, already_enrolled, study_nurse, contact_tel, pi, sponsor, status) VALUES ('64d843ec-14cd-4691-8757-ba2e2de49dcb', '2026-02-17T07:22:50.882535+00:00', '2026-02-17T07:22:50.882535+00:00', 'Lymphoma', 'D7404C00001
(SOUNDTRACK-B)', 'D7404C00001
(SOUNDTRACK-B)', 'AZD0486', 'CD19+CD3 bispecific Ab', 'II', 'Single-Arm (-)', '1. R/R 
2. ≥2 prior Tx', 'Age: 
Phase: II', 0, 2, '李佳玲', '4620', 'Unknown', 'Unknown', 'Recruiting');
INSERT INTO public.trials (id, created_at, updated_at, disease_category, trial_name, clinical_trial_number, study_drug, mechanism_of_action, study_design, control_arm, inclusion_criteria_simple, inclusion_criteria_detailed, expected_enrollment, already_enrolled, study_nurse, contact_tel, pi, sponsor, status) VALUES ('e8ef60f7-3da1-4db8-ab09-a3537d85eb94', '2026-02-17T07:22:50.882535+00:00', '2026-02-17T07:22:50.882535+00:00', 'Lymphoma', 'D7401C00001', 'D7401C00001', 'AZD0486', 'CD19+CD3 bispecific Ab', 'III', 'AZD0486+Rituximab', 'newly diagnosed + stage, III or IV disease, or stage II with bulky disease', 'Age: 
Phase: III', 10, 1, '吳宜真', '3974', 'Unknown', 'Unknown', 'Recruiting');
INSERT INTO public.trials (id, created_at, updated_at, disease_category, trial_name, clinical_trial_number, study_drug, mechanism_of_action, study_design, control_arm, inclusion_criteria_simple, inclusion_criteria_detailed, expected_enrollment, already_enrolled, study_nurse, contact_tel, pi, sponsor, status) VALUES ('2460a77b-d245-4c6a-85b3-2d4b45468672', '2026-02-17T07:22:50.882535+00:00', '2026-02-17T07:22:50.882535+00:00', 'Lymphoma', 'M22-132
(名額需問slot)', 'M22-132
(名額需問slot)', 'Epcoritamab + Polatuzumab +RCHP', 'CD20+CD3 bispecific Ab', 'I b/ II', '', 'Newly diagnosed', 'Age: 
Phase: I b/ II', 0, 2, '李佳玲', '4620', 'Unknown', 'Unknown', 'Recruiting');
INSERT INTO public.trials (id, created_at, updated_at, disease_category, trial_name, clinical_trial_number, study_drug, mechanism_of_action, study_design, control_arm, inclusion_criteria_simple, inclusion_criteria_detailed, expected_enrollment, already_enrolled, study_nurse, contact_tel, pi, sponsor, status) VALUES ('64eef4fd-1f65-4c5c-b19c-c70903a74262', '2026-02-17T07:22:50.882535+00:00', '2026-02-17T07:22:50.882535+00:00', 'PNH', 'R3918-PNH-2021', 'R3918-PNH-2021', 'C5 inhibitor', 'C5 inhibitor', 'III', 'Eculizumab', 'Untreat or 
Eculizumab stop over 3 m or
Ravulizumab stop over 6 m', 'Age: 
Phase: III', 0, 0, '李佳玲', '4620', 'Unknown', 'Unknown', 'Recruiting');
INSERT INTO public.trials (id, created_at, updated_at, disease_category, trial_name, clinical_trial_number, study_drug, mechanism_of_action, study_design, control_arm, inclusion_criteria_simple, inclusion_criteria_detailed, expected_enrollment, already_enrolled, study_nurse, contact_tel, pi, sponsor, status) VALUES ('0437c73e-550b-4600-9201-fb9af38af7fc', '2026-02-17T07:22:50.882535+00:00', '2026-02-17T07:22:50.882535+00:00', 'MPN', 'MK3543-007', 'MK3543-007', 'MK3543/Hydroxyurea(placebo)', 'LSD1', 'III', 'Hydroxyurea(placebo)/MK3543', 'untreat', 'Age: 
Phase: III', 0, 0, '李佳玲', '4620', 'Unknown', 'Unknown', 'Recruiting');
INSERT INTO public.trials (id, created_at, updated_at, disease_category, trial_name, clinical_trial_number, study_drug, mechanism_of_action, study_design, control_arm, inclusion_criteria_simple, inclusion_criteria_detailed, expected_enrollment, already_enrolled, study_nurse, contact_tel, pi, sponsor, status) VALUES ('e4f527c9-893b-4005-9bb5-dc90c1581630', '2026-02-17T07:22:50.882535+00:00', '2026-02-17T07:22:50.882535+00:00', 'MPN', 'KRT-232-115', 'KRT-232-115', 'Navtemadlin + Ruxolitinib', 'MDM2', 'III', 'Navtemadlin(placebo) + Ruxolitinib', 'JAK inhibitor naive', 'Age: 
Phase: III', 0, 0, '李佳玲', '4620', 'Unknown', 'Unknown', 'Recruiting');
INSERT INTO public.trials (id, created_at, updated_at, disease_category, trial_name, clinical_trial_number, study_drug, mechanism_of_action, study_design, control_arm, inclusion_criteria_simple, inclusion_criteria_detailed, expected_enrollment, already_enrolled, study_nurse, contact_tel, pi, sponsor, status) VALUES ('60d5786b-b535-487d-8529-2689be5ee363', '2026-02-17T07:22:50.882535+00:00', '2026-02-17T07:22:50.882535+00:00', 'MM', 'CT-P44 3.1', 'CT-P44 3.1', 'CT-P44+Lena+Dexa', 'CD38+', 'III', 'DRd', '≥1 prior Tx(Including Lenalidomide )', 'Age: 
Phase: III', 10, 0, '溫上容', '3998', 'Unknown', 'Unknown', 'Recruiting');
INSERT INTO public.trials (id, created_at, updated_at, disease_category, trial_name, clinical_trial_number, study_drug, mechanism_of_action, study_design, control_arm, inclusion_criteria_simple, inclusion_criteria_detailed, expected_enrollment, already_enrolled, study_nurse, contact_tel, pi, sponsor, status) VALUES ('bccc6cfd-8c35-48b4-b7cf-bcddf18111cb', '2026-02-17T07:22:50.882535+00:00', '2026-02-17T07:22:50.882535+00:00', 'MM', 'IM048-022
(EXCALIBER-Maint))', 'IM048-022
(EXCALIBER-Maint))', 'Iberdomide', 'CUL4-CRBN E3-Bite', 'III', 'Lenalidomide', 'after ASCT with NDMM', 'Age: 
Phase: III', 7, 2, '曾睦捷', '4620', 'Unknown', 'Unknown', 'Recruiting');
INSERT INTO public.trials (id, created_at, updated_at, disease_category, trial_name, clinical_trial_number, study_drug, mechanism_of_action, study_design, control_arm, inclusion_criteria_simple, inclusion_criteria_detailed, expected_enrollment, already_enrolled, study_nurse, contact_tel, pi, sponsor, status) VALUES ('1e1f5b6f-57e6-4c4e-bffb-6e8fdd22b311', '2026-02-17T07:22:50.882535+00:00', '2026-02-17T07:22:50.882535+00:00', 'MM', 'DREAMM-10(214828)', 'DREAMM-10(214828)', 'belantamab mafodotin+Lena+Dexa', 'BCMA', 'III', 'DRd', '1. Newly diagnosed MM
2. ineligible for ASCT', 'Age: 
Phase: III', 5, 3, '鄭采涵', '3974', 'Unknown', 'Unknown', 'Recruiting');
INSERT INTO public.trials (id, created_at, updated_at, disease_category, trial_name, clinical_trial_number, study_drug, mechanism_of_action, study_design, control_arm, inclusion_criteria_simple, inclusion_criteria_detailed, expected_enrollment, already_enrolled, study_nurse, contact_tel, pi, sponsor, status) VALUES ('d83a016f-5991-47d0-bfa6-3d7a3cee1ac0', '2026-02-17T07:22:50.882535+00:00', '2026-02-17T07:22:50.882535+00:00', 'MM', 'C1071005', 'C1071005', '1. Elranatamab
2. Elranatamab+Dara', 'BCMA-Bite', 'III', '', '≥2 prior Tx (Including Lenalidomide and Proteasome Inhibitor )', 'Age: 
Phase: III', 10, 3, '曾睦捷', '4620', 'Unknown', 'Unknown', 'Recruiting');
INSERT INTO public.trials (id, created_at, updated_at, disease_category, trial_name, clinical_trial_number, study_drug, mechanism_of_action, study_design, control_arm, inclusion_criteria_simple, inclusion_criteria_detailed, expected_enrollment, already_enrolled, study_nurse, contact_tel, pi, sponsor, status) VALUES ('e35eeeca-1a6b-4d26-b3d8-ee760f885863', '2026-02-17T07:22:50.882535+00:00', '2026-02-17T07:22:50.882535+00:00', 'MM', '87562761MMY1001', '87562761MMY1001', 'JNJ-87562761', 'GPRC5D', 'I', '', 'RRMM', 'Age: 
Phase: I', 1, 1, '曾睦捷', '4620', 'Unknown', 'Unknown', 'Recruiting');

COMMIT;