-- Populate chinese_full_title and irb_approval_number for matched trials.
-- Generated from CTC NCKUH hematology dept list, manually curated.
-- Run AFTER add_chinese_title_irb.sql.

begin;

-- ZE46-0134-0002-US  →  AB-CR-114-087  (PI: 陳彩雲)
update public.trials set chinese_full_title = '一項第 1 期、開放性、劑量調升及劑量擴增、多中心臨床試驗，目的在評估 ZE46-0134 對患有 FLT3 突變或Spliceosome突變之復發或難治型急性骨髓性白血病 (AML) 成人的安全性、藥物動力學、藥效學和初步療效', irb_approval_number = 'AB-CR-114-087', updated_at = now() where id = '7c6addcc-a080-4cc8-9425-f5ea9632f2a6';

-- KER-050-D301  →  AB-CR-114-052  (PI: 陳彩雲)
update public.trials set chinese_full_title = '一項第三期、隨機分配、雙盲、安慰劑對照試驗，針對患有極低度、低度或中度風險骨髓分化不良症候群 (MDS) 的成年參與者，評估以Elritercept (KER-050) 治療輸血依賴性貧血的療效和安全性 (RENEW)', irb_approval_number = 'AB-CR-114-052', updated_at = now() where id = 'c98ec5b2-2a47-4b9f-90fe-6f7520f4efbe';

-- M22-132  →  AB-CR-111-055  (PI: Unknown)
update public.trials set chinese_full_title = 'Epcoritamab 併用抗腫瘤藥物用於罹患非何杰金氏淋巴瘤受試者之安全性與耐受性的一項第1b/2期開放性試驗', irb_approval_number = 'AB-CR-111-055', updated_at = now() where id = '2460a77b-d245-4c6a-85b3-2d4b45468672';

-- CT-P44 3.1  →  AB-CR-113-119  (PI: 陳彩雲)
update public.trials set chinese_full_title = '一項雙盲、隨機分配、活性對照、平行組、第 1/3 期試驗，比較皮下注射 CT-P44 和 Darzalex Faspro 併用 Lenalidomide 和 Dexamethasone 用於治療難治型或復發性多發性骨髓瘤患者的藥物動力學、療效和安全性', irb_approval_number = 'AB-CR-113-119', updated_at = now() where id = '60d5786b-b535-487d-8529-2689be5ee363';

-- M22-003 (EPCORE™ FL-2)  →  AB-CR-113-025  (PI: 陳彩雲)
update public.trials set chinese_full_title = '一項第3 期、多中心、隨機分配、開放性試驗，評估Epcoritamab + Rituximab 和Lenalidomide (R2) 相較於化學免疫療法用於先前未曾接受治療的濾泡型淋巴瘤之安全性和療效(EPCORE™FL-2)', irb_approval_number = 'AB-CR-113-025', updated_at = now() where id = '15a576f7-0bdb-4a5f-b72d-6fce2631e1d5';

-- 87562761MMY1001  →  AB-CR-113-085  (PI: 陳彩雲)
update public.trials set chinese_full_title = '一項有關JNJ-87562761用於復發型／難治型多發性骨髓瘤的第1 期、首次使用於人體、開放性、劑量遞增試驗', irb_approval_number = 'AB-CR-113-085', updated_at = now() where id = 'e35eeeca-1a6b-4d26-b3d8-ee760f885863';

-- D7404C00001 (SOUNDTRACK-B)  →  AB-CR-113-074  (PI: 陳彩雲)
update public.trials set chinese_full_title = '一項模組化第二期、單組、多中心、開放性試驗，評估Surovatamig (AZD0486) 用於復發型或難治型 B 細胞非何杰金氏淋巴瘤受試者的療效和安全性 (SOUNDTRACK-B)', irb_approval_number = 'AB-CR-113-074', updated_at = now() where id = '64d843ec-14cd-4691-8757-ba2e2de49dcb';

-- R3918-PNH-2021  →  AB-CR-112-094  (PI: Unknown)
update public.trials set chinese_full_title = '一項隨機分配、開放性、補體因子 5 (C5) 抑制劑對照試驗，針對未曾接受補體抑制劑治療或最近未接受過補體抑制劑療法的陣發性夜間血紅素尿症患者，評估 Pozelimab 和 Cemdisiran 併用療法的療效與安全性', irb_approval_number = 'AB-CR-112-094', updated_at = now() where id = '64eef4fd-1f65-4c5c-b19c-c70903a74262';

-- MK3543-007  →  AB-CR-113-054  (PI: 陳彩雲)
update public.trials set chinese_full_title = '一項第3期、隨機分配、雙盲、活性對照藥物對照之臨床試驗，針對未曾接受細胞減量療法的原發性血小板增多症受試者，評估Bomedemstat（MK-3543）相較於羥基尿素的療效與安全性。', irb_approval_number = 'AB-CR-113-054', updated_at = now() where id = '0437c73e-550b-4600-9201-fb9af38af7fc';

-- IM048-022 (EXCALIBER-Maint)  →  AB-CR-112-038  (PI: 陳彩雲)
update public.trials set chinese_full_title = '一項第 3 期、兩階段、隨機分配、多中心、對照、開放性試驗，在接受自體幹細胞移植 (ASCT) 後的新診斷出多發性骨髓瘤 (NDMM) 參與者中，Iberdomide 維持療法與 Lenalidomide 維持療法之比較', irb_approval_number = 'AB-CR-112-038', updated_at = now() where id = 'bccc6cfd-8c35-48b4-b7cf-bcddf18111cb';

-- AC220-168 (QuANTUM-WILD)  →  AB-CR-113-088  (PI: 陳彩雲)
update public.trials set chinese_full_title = '一項在新診斷為 FLT3-ITD 陰性急性骨髓性白血病成人患者中給予 Quizartinib 合併誘導與鞏固化療以及作為維持療法給藥的第 3 期、雙盲、隨機分配、安慰劑對照試驗 (QuANTUM-Wild)', irb_approval_number = 'AB-CR-113-088', updated_at = now() where id = 'fc41a52c-be12-4754-b17c-ee08966f3905';

-- 75276617ALE1001  →  AB-CR-113-089  (PI: 陳彩雲)
update public.trials set chinese_full_title = 'Menin-KMT2A (MLL1) 抑制劑 Bleximenib 用於急性白血病受試者且首次應用於人體的第 1 或第 2 期試驗', irb_approval_number = 'AB-CR-113-089', updated_at = now() where id = '4e6423ae-bc92-481e-a673-cfd772be0116';

-- D7401C00001 (SOUNDTRACK-F1)  →  AB-CR-113-062  (PI: 陳彩雲)
update public.trials set chinese_full_title = '一項第3期、多中心、隨機分配、開放性試驗，比較AZD0486加上Rituximab相較於化療加上Rituximab用於未曾接受治療之濾泡性淋巴瘤受試者的療效與安全性(SOUNDTRACK-F1)', irb_approval_number = 'AB-CR-113-062', updated_at = now() where id = 'e8ef60f7-3da1-4db8-ab09-a3537d85eb94';

-- DREAMM-10 (Study 214828)  →  AB-CR-114-015  (PI: 許雅婷)
update public.trials set chinese_full_title = '一項在新診斷出多發性骨髓瘤且不符合自體幹細胞移植資格的參與者中，比較 Belantamab mafodotin、Lenalidomide 和 dexamethasone (BRd) 相對於Daratumumab、Lenalidomide 和 dexamethasone (DRd) 的第 3 期、隨機分配、開放性試驗(TI-NDMM)-DREAMM-10', irb_approval_number = 'AB-CR-114-015', updated_at = now() where id = '1e1f5b6f-57e6-4c4e-bffb-6e8fdd22b311';

-- D7400C00006  →  AB-CR-112-091  (PI: 陳彩雲)
update public.trials set chinese_full_title = '一項多中心、開放性、劑量遞增與擴展的第 1 期試驗，AZD0486 係以 CD19 為標靶的雙特異性抗體，針對 B 細胞非何杰金氏淋巴瘤的受試者', irb_approval_number = 'AB-CR-112-091', updated_at = now() where id = 'bc75df88-67f4-47d4-bc59-42dcdef2f0b1';

-- DR-01-ONC-001  →  AB-CR-112-034  (PI: 陳彩雲)
update public.trials set chinese_full_title = '一項多中心、開放性、首次用於人體(FIH)、多重擴增群組、第1/2期試驗，針對患有大顆粒淋巴球白血病(LGLL)或細胞毒性淋巴瘤的成人受試者中，評估DR-01的安全性和療效', irb_approval_number = 'AB-CR-112-034', updated_at = now() where id = '10db1671-0794-4ada-843e-0ebe13125001';

-- DZ2022J0004  →  AB-CR-114-003  (PI: 陳彩雲)
update public.trials set chinese_full_title = '一項第 3 期、開放性、隨機分配、多國試驗，研究 Golidocitinib 相較於試驗主持人選定治療用於成人復發型／難治型周邊 T 細胞淋巴瘤患者的抗腫瘤療效', irb_approval_number = 'AB-CR-114-003', updated_at = now() where id = 'ad9698cb-1f23-477b-8f54-6fdc2fa0f59c';

-- KRT-232-115  →  AB-CR-114-108  (PI: 許雅婷)
update public.trials set chinese_full_title = '一項第3期、隨機分配、雙盲、附加試驗，在對Ruxolitinib反應未臻理想的骨髓纖維化患者中，評估Navtemadlin加Ruxolitinib相較於安慰劑加Ruxolitinib的安全性和療效', irb_approval_number = 'AB-CR-114-108', updated_at = now() where id = 'e4f527c9-893b-4005-9bb5-dc90c1581630';

-- R1979-HM-2299 (OLYMPIA-4)  →  AB-CR-108-040  (PI: 陳彩雲)
update public.trials set chinese_full_title = '評估抗 CD20 X和抗 CD3 雙特異性抗體 REGN1979 使用於復發性或難治性B細胞非何杰金氏淋巴瘤病患之抗腫瘤活性和安全性的一項開放性試驗', irb_approval_number = 'AB-CR-108-040', updated_at = now() where id = '7e755eb9-fb11-4ea2-add5-4d75326ebd05';

-- C1071005 (MAGNETISMM-5)  →  A-BR-110-097  (PI: 陳彩雲)
update public.trials set chinese_full_title = 'MagnetisMM-5 一項開放性、3 -組、多中心、隨機分配、第 3 期試驗，對於曾接受包括 LENALIDOMIDE 和一種蛋白酶體抑制劑之至少 1 種療法的復發型／難治型多發性骨髓瘤參與者，評估 ELRANATAMAB (PF-06863135) 單一藥物治療和 ELRANATAMAB + DARATUMUMAB 相較於 DARATUMUMAB + POMALIDOMIDE + DEXAMETHASONE 的療效和安全性', irb_approval_number = 'A-BR-110-097', updated_at = now() where id = 'd83a016f-5991-47d0-bfa6-3d7a3cee1ac0';

-- 20190360 (Golden Gate Study)  →  AB-CR-110-103  (PI: 陳彩雲)
update public.trials set chinese_full_title = '第 3 期隨機分配、對照試驗，比較 Blinatumomab 交替使用低強度化療相對於標準治療 (採安全性導入期) 用於新診斷為費城染色體陰性 B 細胞前驅細胞急性淋巴性白血病的中老年人 (Golden Gate 試驗)', irb_approval_number = 'AB-CR-110-103', updated_at = now() where id = '506ac385-403d-4d5d-9339-48089740a29c';

-- BGB-16673-303 (CaDAnCe-303)  →  AB-CR-114-018  (PI: 陳彩雲)
update public.trials set chinese_full_title = '一項第 3 期、開放標記、隨機分配試驗，比較 BGB-16673 與試驗主持人選擇的治療用於復發/難治型慢性淋巴細胞白血病或小淋巴細胞淋巴瘤且先前曾使用共價 BTK 抑制劑的患者', irb_approval_number = 'AB-CR-114-018', updated_at = now() where id = '278c0400-e849-4d41-a532-a97c2ff0db7f';

-- MK-1026-011 (​BELLWAVE-011)  →  AB-CR-112-090  (PI: 陳彩雲)
update public.trials set chinese_full_title = '一項第3期、隨機分配試驗，針對未接受治療之慢性淋巴性白血病／小淋巴球性淋巴瘤的受試者，比較Nemtabrutinib與對照藥物（試驗主持人選擇使用Ibrutinib或Acalabrutinib）（BELLWAVE 011）', irb_approval_number = 'AB-CR-112-090', updated_at = now() where id = '6409c642-6fa6-436c-8250-9972fa892d5c';

commit;