-- Backfill mechanism_zh and eligibility_zh with patient-friendly Chinese.
-- Initial AI-translated values; admins should review and refine via the form.
-- Run AFTER add_patient_view_columns.sql.

begin;

-- 40939a31-9f15-45f1-ac30-8b9cbeebc3cc
update public.trials set mechanism_zh = '抗 CD20 × CD3 雙特異性抗體 — 引導 T 細胞攻擊帶有 CD20 標記的淋巴瘤細胞。', eligibility_zh = '• 18 歲以上成人
• 未曾接受治療的濾泡性淋巴瘤 (Grade 1–3a)
• 第二期巨大型 / 第三期 / 第四期
• 病理確診、影像可見病灶、有治療需求 (符合 GELF 標準)
• 體能狀態 ECOG 0–2
• 心、肝、腎及血液功能良好', updated_at = now() where id = '40939a31-9f15-45f1-ac30-8b9cbeebc3cc';

-- bcf958fd-be5e-453e-817a-86c7e42ffd16
update public.trials set mechanism_zh = 'BTK 蛋白降解劑 — 利用人體自身分解蛋白的機制，清除腫瘤細胞所需的 BTK 訊號。', eligibility_zh = '• 收案條件待定 (Pending)', updated_at = now() where id = 'bcf958fd-be5e-453e-817a-86c7e42ffd16';

-- 7c6addcc-a080-4cc8-9425-f5ea9632f2a6
update public.trials set mechanism_zh = 'pan-FLT3 與 IRAK4 抑制劑 — 同時阻斷急性白血病細胞兩條重要的生長訊號。', eligibility_zh = '• 18 歲以上成人
• 復發或難治型急性骨髓性白血病 (AML)
• 帶有 FLT3 突變或 spliceosome 突變 (SF3B1/SRSF2/U2AF1/ZRSR2)
• 體能狀態 ECOG ≤ 2
• 肝、腎功能良好', updated_at = now() where id = '7c6addcc-a080-4cc8-9425-f5ea9632f2a6';

-- c98ec5b2-2a47-4b9f-90fe-6f7520f4efbe
update public.trials set mechanism_zh = 'TGF-β 配體陷阱 — 改善骨髓造血、減少對輸血的依賴。', eligibility_zh = '• 極低度 / 低度 / 中度風險的骨髓增生不良症候群 (MDS)
• 16 週內持續輸血依賴 (1U / 8 週)
• 血清 EPO 介於 200–500', updated_at = now() where id = 'c98ec5b2-2a47-4b9f-90fe-6f7520f4efbe';

-- 2460a77b-d245-4c6a-85b3-2d4b45468672
update public.trials set mechanism_zh = '抗 CD20 × CD3 雙特異性抗體 (Epcoritamab) 合併 Polatuzumab 與 RCHP 化療 — 多重機制攻擊大 B 細胞淋巴瘤。', eligibility_zh = '• 病理確認 CD20 陽性瀰漫性大 B 細胞淋巴瘤 (DLBCL)
• 包含原發 DLBCL (NOS)、雙打擊／三打擊高惡性度 B 細胞淋巴瘤、第 3B 級濾泡淋巴瘤', updated_at = now() where id = '2460a77b-d245-4c6a-85b3-2d4b45468672';

-- 60d5786b-b535-487d-8529-2689be5ee363
update public.trials set mechanism_zh = 'Daratumumab 生物相似藥 — 抗 CD38 抗體，誘導骨髓瘤細胞凋亡，並合併 Lenalidomide + Dexamethasone 治療。', eligibility_zh = '• 成人復發或難治型多發性骨髓瘤 (RRMM)
• 對前一線治療曾達到部分緩解 (PR) 以上後又惡化
• 已接受 1–3 線前期治療
• 體能狀態 ECOG 0–2
• 器官、血液功能符合要求', updated_at = now() where id = '60d5786b-b535-487d-8529-2689be5ee363';

-- 15a576f7-0bdb-4a5f-b72d-6fce2631e1d5
update public.trials set mechanism_zh = '抗 CD20 × CD3 雙特異性抗體 (Epcoritamab) 合併 Rituximab 和 Lenalidomide (R2) — 引導 T 細胞攻擊濾泡性淋巴瘤。', eligibility_zh = '• 18 歲以上成人
• 未曾接受治療的 CD20 陽性濾泡性淋巴瘤
• Ann Arbor 第三 / 第四期，或第二期且病灶較大
• 符合 GELF 治療指引
• PET 掃描陽性、有可測量病灶
• 體能狀態 ECOG 0–2
• 器官功能良好', updated_at = now() where id = '15a576f7-0bdb-4a5f-b72d-6fce2631e1d5';

-- e35eeeca-1a6b-4d26-b3d8-ee760f885863
update public.trials set mechanism_zh = '抗 GPRC5D 增強型單株抗體 — 鎖定骨髓瘤細胞表面標記，誘導免疫攻擊。', eligibility_zh = '• 成人復發或難治型多發性骨髓瘤
• 有可測量病灶
• 曾接受蛋白酶體抑制劑 (PI)、免疫調節劑 (IMiD) 及抗 CD38 三類藥物
• 體能狀態 ECOG 0–1
• 腎、肝、血液功能良好', updated_at = now() where id = 'e35eeeca-1a6b-4d26-b3d8-ee760f885863';

-- 64d843ec-14cd-4691-8757-ba2e2de49dcb
update public.trials set mechanism_zh = 'CD19 × CD3 T 細胞雙特異性抗體 (Surovatamig) — 引導 T 細胞攻擊 B 細胞淋巴瘤。', eligibility_zh = '• 18 歲以上成人
• 復發或難治型 B 細胞非何杰金氏淋巴瘤
• 已接受 ≥ 2 線系統性治療
• 體能狀態 ECOG 0–2
• PET 影像可見病灶
• 骨髓、肝、腎、心臟功能良好', updated_at = now() where id = '64d843ec-14cd-4691-8757-ba2e2de49dcb';

-- 64eef4fd-1f65-4c5c-b19c-c70903a74262
update public.trials set mechanism_zh = 'C5 補體抑制劑 (Pozelimab + Cemdisiran) — 阻斷異常免疫攻擊紅血球的最終步驟。', eligibility_zh = '• 陣發性夜間血紅素尿症 (PNH) 患者
• 從未接受過補體抑制劑治療，或 Eculizumab 停藥 ≥ 3 個月、Ravulizumab 停藥 ≥ 6 個月', updated_at = now() where id = '64eef4fd-1f65-4c5c-b19c-c70903a74262';

-- 0437c73e-550b-4600-9201-fb9af38af7fc
update public.trials set mechanism_zh = 'LSD1 抑制劑 (Bomedemstat) — 調控異常造血細胞，降低血小板過度生成。', eligibility_zh = '• 原發性血小板增多症 (Essential Thrombocythemia)
• 未曾接受過細胞減量治療', updated_at = now() where id = '0437c73e-550b-4600-9201-fb9af38af7fc';

-- bccc6cfd-8c35-48b4-b7cf-bcddf18111cb
update public.trials set mechanism_zh = '細胞分子膠 (CRBN E3 連接酶調控劑, Iberdomide) — 啟動骨髓瘤細胞的自我清除機制，作為移植後維持治療。', eligibility_zh = '• 新診斷多發性骨髓瘤 (NDMM)
• 已完成自體幹細胞移植 (ASCT)', updated_at = now() where id = 'bccc6cfd-8c35-48b4-b7cf-bcddf18111cb';

-- 8521caf6-62ed-49a4-bb4b-cb16943187d3
update public.trials set mechanism_zh = 'CD19 × CD3 T 細胞雙特異性抗體 (AZD0486) — 引導 T 細胞攻擊 B 系白血病細胞。', eligibility_zh = '• 12 歲以上 (16 歲以下需符合體重規定)
• CD19 陽性復發或難治型 B 細胞急性淋巴性白血病 (Ph+ 或 Ph− 皆可)
• 已接受 ≥ 2 線治療，或 1 線治療後無合適標準療法
• 體能狀態 ECOG ≤ 2 (兒童 Lansky ≥ 50)
• 肝、腎、心臟功能良好', updated_at = now() where id = '8521caf6-62ed-49a4-bb4b-cb16943187d3';

-- c33b829c-01c3-4567-a8ae-e1c5bc126463
update public.trials set mechanism_zh = 'EZH2 抑制劑 (Tazemetostat) — 調控腫瘤基因表現，與 R2 (Rituximab + Lenalidomide) 合併治療。', eligibility_zh = '• 18 歲以上成人
• 病理確認的濾泡性淋巴瘤 (Grade 1–3A)
• 復發或難治型，已接受 ≥ 1 線系統性治療
• 有可測量病灶
• 體能狀態 ECOG 0–2
• 骨髓、肝、腎、凝血功能良好', updated_at = now() where id = 'c33b829c-01c3-4567-a8ae-e1c5bc126463';

-- fc41a52c-be12-4754-b17c-ee08966f3905
update public.trials set mechanism_zh = 'FLT3 酪胺酸激酶抑制劑 (Quizartinib) — 合併標準誘導與鞏固化療，為新診斷 AML 病患加強治療。', eligibility_zh = '• 18–70 歲成人
• 新診斷急性骨髓性白血病 (AML)
• FLT3-ITD 基因檢測為陰性
• 適合接受密集化療 (體能狀態 ECOG 0–2)
• 未曾接受 AML 治療
• 心、肝、腎功能良好', updated_at = now() where id = 'fc41a52c-be12-4754-b17c-ee08966f3905';

-- 4e6423ae-bc92-481e-a673-cfd772be0116
update public.trials set mechanism_zh = 'Menin-KMT2A (MLL1) 抑制劑 (Bleximenib) — 阻斷某些急性白血病的關鍵基因驅動訊號。', eligibility_zh = '• 復發或難治型急性白血病 (Phase 1) 或 AML (Phase 2，符合 WHO 2022 分類)
• 帶有 KMT2A 重組或 NPM1 突變
• 體能狀態 ECOG 0–2 (青少年 Performance ≥ 70)', updated_at = now() where id = '4e6423ae-bc92-481e-a673-cfd772be0116';

-- e8ef60f7-3da1-4db8-ab09-a3537d85eb94
update public.trials set mechanism_zh = 'CD19 × CD3 雙特異性抗體 (AZD0486) 合併 Rituximab — 雙重免疫機制治療淋巴瘤。', eligibility_zh = '• 成人未曾接受治療的濾泡性淋巴瘤
• 第二至第四期，FLIPI 評分 2–5
• 符合 GELF 系統性治療指標
• 體能狀態 ECOG 0–2
• PET 掃描可見病灶
• 肝、腎、骨髓、心臟功能良好', updated_at = now() where id = 'e8ef60f7-3da1-4db8-ab09-a3537d85eb94';

-- 27c0f659-9d51-42b4-831a-e780ef170e97
update public.trials set mechanism_zh = '異體 γδ T 細胞療法 — 與抗 CD20 抗體結合形成「抗體-細胞偶合」(ACC) 療法，攻擊 CD20 陽性 B 細胞淋巴瘤。', eligibility_zh = '• 18 歲以上成人
• CD20 陽性高惡性度 B 細胞非何杰金氏淋巴瘤
• 已接受 ≥ 2 線系統性治療 (含 anthracycline + 抗 CD20 化學免疫療法)
• 有可測量病灶
• 體能狀態 ECOG 0–1 (ECOG 2 需白蛋白 > 3.5)
• 器官功能良好', updated_at = now() where id = '27c0f659-9d51-42b4-831a-e780ef170e97';

-- 4310502e-3a96-430d-8ffc-3468480d3379
update public.trials set mechanism_zh = '抗 CD20 × CD3 雙特異性抗體 (Odronextamab) 合併 Lenalidomide — 雙重機制攻擊復發濾泡性淋巴瘤。', eligibility_zh = '• 18 歲以上成人
• 復發或難治型濾泡性淋巴瘤 (Grade 1–3a) 或邊緣帶淋巴瘤
• 已接受 ≥ 1 線含抗 CD20 抗體的全身性治療
• 有可測量病灶
• 體能狀態 ECOG 0–2
• 骨髓及器官功能良好', updated_at = now() where id = '4310502e-3a96-430d-8ffc-3468480d3379';

-- 1e1f5b6f-57e6-4c4e-bffb-6e8fdd22b311
update public.trials set mechanism_zh = 'BCMA 標靶抗體藥物複合體 (Belantamab mafodotin) — 將細胞毒性藥物精準送入骨髓瘤細胞，合併 Lenalidomide 與 Dexamethasone 治療。', eligibility_zh = '• 新診斷多發性骨髓瘤 (符合 IMWG 標準)
• 不適合接受幹細胞移植 (TI-NDMM)
• 有可測量病灶
• 體能狀態 ECOG 0–2
• 器官功能良好', updated_at = now() where id = '1e1f5b6f-57e6-4c4e-bffb-6e8fdd22b311';

-- 4713eb1f-44e6-433f-b268-3b609dac7ff9
update public.trials set mechanism_zh = '口服 menin 抑制劑 (Enzomenib) — 阻斷某些急性白血病的關鍵基因驅動訊號。', eligibility_zh = '• 18 歲以上成人
• 復發或難治型急性骨髓性白血病 (AML) 或急性淋巴性白血病 (ALL)
• 帶有 MLLr 重組或 NPM1 突變 (依分組)
• 體能狀態 ECOG ≤ 2
• 白血球低於試驗門檻
• 肝、腎功能良好
• 預期存活 ≥ 3 個月', updated_at = now() where id = '4713eb1f-44e6-433f-b268-3b609dac7ff9';

-- bc75df88-67f4-47d4-bc59-42dcdef2f0b1
update public.trials set mechanism_zh = 'CD19 × CD3 雙特異性抗體 (AZD0486) — 引導 T 細胞攻擊 B 細胞淋巴瘤。', eligibility_zh = '• 成人 (一般 18–80 歲，部分組別可超過 80 歲)
• 病理確認 CD19 陽性 B 細胞非何杰金氏淋巴瘤 (DLBCL 或濾泡性淋巴瘤)
• 有可測量病灶
• 體能狀態 ECOG ≤ 2
• 骨髓、肝、腎功能良好', updated_at = now() where id = 'bc75df88-67f4-47d4-bc59-42dcdef2f0b1';

-- 10db1671-0794-4ada-843e-0ebe13125001
update public.trials set mechanism_zh = '抗 CD94 單株抗體 (非岩藻醣化) — 鎖定大顆粒淋巴球白血病細胞，誘發免疫清除。', eligibility_zh = '• 18 歲以上成人
• 大顆粒淋巴球白血病 (LGLL) 或符合條件的細胞毒性淋巴瘤
• 體能狀態及前期治療符合疾病分組要求
• 器官、凝血功能良好', updated_at = now() where id = '10db1671-0794-4ada-843e-0ebe13125001';

-- ad9698cb-1f23-477b-8f54-6fdc2fa0f59c
update public.trials set mechanism_zh = 'JAK1 抑制劑 (Golidocitinib) — 阻斷 T 細胞淋巴瘤的訊號傳遞。', eligibility_zh = '• 18 歲以上成人
• 病理確認的復發或難治型周邊 T 細胞淋巴瘤 (PTCL)
• 體能狀態 ECOG 0–2
• 已接受全身性治療失敗或無法耐受
• 不適合接受幹細胞移植', updated_at = now() where id = 'ad9698cb-1f23-477b-8f54-6fdc2fa0f59c';

-- e4f527c9-893b-4005-9bb5-dc90c1581630
update public.trials set mechanism_zh = 'MDM2 抑制劑 (Navtemadlin) — 重啟 p53 介導的腫瘤細胞凋亡，搭配 Ruxolitinib 治療骨髓纖維化。', eligibility_zh = '• 成人原發性骨髓纖維化、PV 後 MF、ET 後 MF
• 體能狀態 ECOG 0–2
• TP53 為野生型 (隨機分配時確認)
• Ruxolitinib 治療反應仍未達理想 (run-in 期間)
• 血液、肝、腎功能良好', updated_at = now() where id = 'e4f527c9-893b-4005-9bb5-dc90c1581630';

-- 7e755eb9-fb11-4ea2-add5-4d75326ebd05
update public.trials set mechanism_zh = '抗 CD20 × CD3 雙特異性抗體 (Odronextamab) — 引導 T 細胞攻擊高惡性度 B 細胞淋巴瘤。', eligibility_zh = '• 18 歲以上成人
• 病理確認的高惡性度 B 細胞非何杰金氏淋巴瘤 (DLBCL / 雙打擊 / 三打擊 / PMBCL / T-HRBCL / FL3b)
• 一線抗 CD20 + anthracycline 治療後原發難治，或 12 個月內復發
• 有可測量病灶
• 體能狀態 ECOG 0–1
• 計畫接受自體幹細胞移植
• 器官功能良好', updated_at = now() where id = '7e755eb9-fb11-4ea2-add5-4d75326ebd05';

-- d83a016f-5991-47d0-bfa6-3d7a3cee1ac0
update public.trials set mechanism_zh = '抗 BCMA × CD3 雙特異性抗體 (Elranatamab) 合併 Daratumumab — 雙重免疫機制攻擊骨髓瘤細胞。', eligibility_zh = '• 復發或難治型多發性骨髓瘤
• 有可測量病灶
• 已接受 1–3 線治療 (含 Lenalidomide 與蛋白酶體抑制劑)
• 過去治療曾達到至少微小反應 (MR)
• 體能狀態 ECOG ≤ 2
• 心、腎、肝、血液功能良好', updated_at = now() where id = 'd83a016f-5991-47d0-bfa6-3d7a3cee1ac0';

-- 506ac385-403d-4d5d-9339-48089740a29c
update public.trials set mechanism_zh = 'CD19 × CD3 雙特異性抗體 (Blinatumomab) — 引導 T 細胞攻擊 B 系白血病細胞，搭配低強度化療。', eligibility_zh = '• 新診斷費城染色體陰性 B 細胞前驅細胞急性淋巴性白血病
• 55 歲以上成人，或 40–54 歲合併特定共病
• 體能狀態 ECOG ≤ 2', updated_at = now() where id = '506ac385-403d-4d5d-9339-48089740a29c';

-- 278c0400-e849-4d41-a532-a97c2ff0db7f
update public.trials set mechanism_zh = 'BTK 蛋白降解劑 (BGB-16673) — 利用人體分解蛋白機制清除腫瘤細胞所需的 BTK，適用於對 BTK 抑制劑失效的病患。', eligibility_zh = '• 18 歲以上成人
• 病理確認的慢性淋巴細胞白血病 (CLL) 或小淋巴細胞淋巴瘤 (SLL)
• 曾使用過共價型 BTK 抑制劑
• 符合 iwCLL 治療指引
• 體能狀態 ECOG 0–2
• 預期存活 > 6 個月
• 器官、骨髓功能良好', updated_at = now() where id = '278c0400-e849-4d41-a532-a97c2ff0db7f';

-- 6409c642-6fa6-436c-8250-9972fa892d5c
update public.trials set mechanism_zh = '口服非共價、可逆型 BTK 抑制劑 (Nemtabrutinib) — 阻斷 B 淋巴球異常生長訊號。', eligibility_zh = '• 18 歲以上成人
• 未曾接受治療的活動性 CLL/SLL，符合 iwCLL 治療指引
• 有可測量病灶
• 中央實驗室確認 del(17p)/TP53 狀態
• 可口服藥物
• 體能狀態 ECOG 0–2
• 器官功能良好
• 控制中的 HBV/HCV/HIV 可入組', updated_at = now() where id = '6409c642-6fa6-436c-8250-9972fa892d5c';

commit;