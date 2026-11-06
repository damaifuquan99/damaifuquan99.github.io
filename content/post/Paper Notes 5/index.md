---
title: 文献阅读笔记5 | Cdk2 作为 Cdc2–Cyclin B 的正向调节者
description: 进 M 期不只需要 MPF，还需要一个"G1/S 的激酶" | Cdk2 kinase is required for entry into mitosis as a positive regulator of Cdc2–cyclin B kinase activity
slug: cdk2-positive-regulator-of-cdc2-cyclin-b
date: 2026-11-06 18:00:00+0000
categories:
    - Paper Notes
tags:
    - Cdk2
    - Cyclin E
    - Cdc2
    - MPF
    - Xenopus Egg Extract
    - p21Cip1
    - Cell Cycle
    - Academic
weight: 2
---

# **文献阅读笔记5 | Cdk2 作为 Cdc2–Cyclin B 的正向调节者**
---

> **一句话总结：**  
> 这篇 1996 年的 Cell 论文在一个"不依赖 DNA 复制、也不依赖转录"的爪蟾卵提取物体系里，用 Cdk 抑制蛋白 p21^Cip1 和 Cdk2 免疫去除两种互相独立的手段，证明 Cdk2–cyclin E 激酶是 Cdc2–cyclin B（MPF）被激活所必需的：没有 Cdk2 活性，Cdc2 会一直停在 Thr-14/Tyr-15 磷酸化的失活状态，细胞核不破裂、染色体不凝集；把 Cdk2–cyclin E 加回去，周期就恢复。也就是说，进入有丝分裂除了需要 MPF 本身，还需要一个原本被认为只负责 G1/S 的激酶来"点火"。

---

## 文献信息

| 项目 | 内容 |
| :--- | :--- |
| **标题** | Cdk2 Kinase Is Required for Entry into Mitosis as a Positive Regulator of Cdc2–Cyclin B Kinase Activity |
| **作者** | Thomas M. Guadagno, John W. Newport |
| **单位** | Department of Biology, University of California, San Diego, La Jolla, CA 92093-0347 |
| **期刊** | Cell |
| **卷期页码** | 84, 73–82 |
| **年份** | 1996（1995 年 9 月 12 日投稿，11 月 8 日修回，1996 年 1 月 12 日刊出） |
| **关键词** | Cdk2; cyclin E; Cdc2; cyclin B; MPF; p21^Cip1; Xenopus egg extract; G2–M transition |

---

## 研究背景

### 1. 进入有丝分裂的开关：MPF 的三处磷酸化

高等真核细胞的增殖由一组**周期蛋白依赖性激酶（Cdk）** 驱动。G2/M 转换由一个 Cdk–cyclin 复合物启动，这就是**成熟促进因子（MPF）**：**Cdc2** 蛋白激酶 + **B 型 cyclin**。

MPF 的活化受两条线控制：

- **cyclin B 的积累**——cyclin B 在间期合成，是 Cdc2 的调节亚基；
- **Cdc2 亚基上的三个磷酸化位点**：
  - **Thr-161**：由 **CAK**（Cdk-activating kinase）磷酸化，是 Cdc2 催化活性所必需；
  - **Tyr-15**（由 **Wee1** 磷酸化）和 **Thr-14**（由一种膜结合的激酶，即后来的 **Myt1** 磷酸化）：这两个位点的磷酸化把 Cdc2–cyclin B 压在最抑制的状态，不能进入有丝分裂；
  - 进入 M 期时，**Cdc25 磷酸酶**把这两个位点去磷酸化，MPF 才被激活。

由于 CAK 的活性在整个细胞周期中基本恒定，MPF 的"开关"实际上取决于 **Wee1/Myt1 的下降**或 **Cdc25 的上升**。而 Cdc2–cyclin B 本身又能磷酸化并激活 Cdc25——这就是那个著名的**正反馈环**，它解释了进入 M 期时 MPF 活性的陡峭放大。

但正反馈环只解释了"一旦开始就很快"，没有解释"最开始那一小撮 Cdc2 活性从哪来"。这篇文章要找的，就是这个**上游点火者**。

### 2. 一个分工问题：酵母只有一个 Cdk，高等真核有很多个

在芽殖酵母里，**一个 Cdc28（Cdc2）** 同时管 G1–S 和 G2–M 两个转换。高等真核生物则把工作分给了不同的 Cdk：**Cdk2 管 G1 和 S**，**Cdc2 管 G2 和 M**。

1996 年时的共识是：Cdk2 是"G1/S 的激酶"。证据很硬——

- 免疫去除 Cdk2 会阻断爪蟾卵提取物中的 DNA 合成（Fang & Newport, 1991）；
- 用 Cdk 抑制蛋白 **p21^Cip1** 抑制其激酶活性，同样阻断 DNA 合成（Strausfeld et al., 1994; Yan & Newport, 1995）；
- 在体细胞里瞬时表达 Cdk2 的**激酶失活突变体**，细胞停在 G1（van den Heuvel & Harlow, 1993）。

在这些证据之上，领域里的默认推论是：**Cdk2 的事情到 S 期就结束了**。

### 3. 但胚胎的细胞周期不太一样

这里有一个被忽视的观察。体细胞里 Cdk2 主要与 cyclin A 和 cyclin E 结合，活性在晚 G1 出现、S 与 G2 期最强，到 S 中期就迅速衰减。**爪蟾早期胚胎不是这样**：在那些快速的卵裂周期里，Cdk2 主要与 **cyclin E** 结合，而这个复合物的活性**贯穿整个细胞周期**（Fang & Newport, 1991; Rempel et al., 1995）。

既然一个有"促进进入 S 期"功能的激酶，在整个 S 期和 M 期都保持活性，那它很可能还在管别的事。作者把这个观察直接摆在了台面上。

### 4. 酵母的先例：Cdk 之间可以级联

芽殖酵母提供了一个概念模板：晚 G1 期 **Cln–Cdc28** 的活性，是关掉 Clb cyclin 的降解机器（Amon et al., 1994）、并让 **Clb–Cdc28** 得以表达和激活（Schwob et al., 1994）所必需的。也就是说，**一个 Cdk–cyclin 复合物可以给下一个 Cdk–cyclin 复合物"发许可"**。

如果这个逻辑在高等真核也成立，那么爪蟾的 Cdk2 就可能对应酵母的 Cln–Cdc28，Cdc2 对应 Clb–Cdc28。

### 5. 为什么必须用卵提取物

在体细胞里做这个实验非常困难，因为存在多重**检查点**：细胞大小是否足够、DNA 复制是否完成、DNA 损伤是否修复——任何一条不满足，细胞都不会进入 M 期。Cdk2 被抑制后细胞进不了 M 期，你无法判断这是"Cdk2 直接管 M 期"，还是"DNA 没复制完，检查点把 M 期拦住了"。

爪蟾卵提取物正好能把这个变量拆开：提取物可以在**没有生长、没有 DNA 复制、没有 DNA 修复**的情况下在 S 期与 M 期之间振荡（Murray & Kirschner, 1989）。更关键的是，**可以不加精子染色质**——没有核，就没有复制检查点。这一点是全文实验设计的支点。

---

## 主要方法

- **提取物制备**：三种。
  - **CSF 提取物**（cytostatic factor arrest）：未受精卵在 EGTA 存在下裂解，停在 metaphase（Murray, 1991）；
  - **间期提取物**（Smythe & Newport, 1991）；
  - **周期提取物**：电激活的卵制备，可在 S 与 M 之间振荡（Murray & Kirschner, 1989）。
- **释放 CSF 阻断**：加 **0.4 mM Ca²⁺**，cyclin B 被降解，提取物进入间期，约 80–95 min 后重新积累 cyclin B 而再次进入 M 期。这是全文的"时钟"。
- **抑制 Cdk2**：**GST–p21^Cip1** 融合蛋白（S. Elledge 提供），另有 His 标签版本。常规用量 **125 nM**，部分实验到 **300 nM**；4 °C 预孵 15 min。滴定确定 **75–100 nM** 即可抑制 >95% 的 Cdk2 激酶活性与 DNA 复制，而 **300 nM 也不抑制已激活的 Cdc2**。
- **回补用的重组蛋白**（均在大肠杆菌 BL21(DE3) pLysS 中表达，谷胱甘肽–Sepharose 纯化，换入 XB 缓冲液）：
  - GST–爪蟾 **Cdk2**（全长 cDNA，pGEX-KG）；
  - GST–爪蟾 **cyclin E1**（T. Hunt 提供）；
  - GST–**海胆 cyclin B1**（缺失 N 端 13 个氨基酸，即去掉**降解框**，因此不可降解；M. Solomon 提供）。用异种 cyclin 的目的就是让它不被降解，从而把"cyclin B 浓度"变成一个可以人为设定的量。
- **复合物分离**：**p13^suc1–Sepharose**（p13 定量结合 Cdc2 和 Cdk2，不区分磷酸化状态，因此适合做"总量"对照）；以及**谷胱甘肽–Sepharose**（拉下与 GST–Cip 结合的复合物）。
- **读出**：
  - **组蛋白 H1 激酶测定**（[γ-³²P]ATP），测 Cdk 活性；
  - **迁移率变动（mobility shift）**：Cdc2 被 Thr-14/Tyr-15 磷酸化后跑得慢，Cdc25 超磷酸化后也跑得慢。这是本文判断"是否进入 M 期"的核心生化指标。为了分辨 Cdc2 那一点点迁移差异，作者用了 **25 cm 长的 10% SDS–PAGE**——这是个容易被忽略但很关键的细节，普通小胶分不开。
  - **形态学**：加入去膜精子染色质（250–500 核/µl），固定后用 **bisbenzimide**（Hoechst）染色看核膜完整性与染色体凝集；相差显微镜看**核膜破裂（NEB）**。
- **排除复制的混淆**：一组实验**完全不加精子染色质**，只靠 Cdc2/Cdc25 的迁移率判断是否进入 M 期。
- **排除 cyclin A 的混淆**：制备**环己酰亚胺（cycloheximide）阻断的间期提取物**。卵裂解时加入蛋白合成抑制剂，cyclin A1、B1、B2 全部被降解且无法再合成，而 Cdk2–cyclin E 活性仍然很高。这种提取物只有在外源加入 cyclin B 时才会进入 M 期，因此可以在**完全没有 cyclin A**的条件下检验 Cip 的作用。
- **免疫去除**：Cdk2 抗体去除效率 **>98%**（Western 验证），用无关 IgG 做 mock 对照。
- **其他**：[³⁵S]甲硫氨酸标记新合成蛋白 + p13 沉淀，看 cyclin 的合成与结合是否受影响；用纯化的人 **GST–Cdc25B** 在体外激活从 Cdk2 缺失提取物中免疫沉淀出来的 Cdc2–cyclin B（未发表数据）。

---

## 主要结果

### 1. p21^Cip1 阻断有丝分裂的进入

在 Ca²⁺ 激活的周期提取物中加 125 nM GST–Cip：

- 核仁周围形成核，但染色质始终比对照更凝集；
- 到 90 min，对照提取物核膜破裂、染色体凝集（进入 M 期），Cip 处理组在**整整 2.5 小时**内都没有进入 M 期；
- 生化上，对照的 Cdc2 在 80–100 min 之间突然去磷酸化（跑快），Cip 组的 Cdc2 **一直停在 Thr-14/Tyr-15 磷酸化的慢迁移形式**；
- 对照的 Cdc25 在 30–75 min 部分磷酸化、90–105 min 超磷酸化，Cip 组的 Cdc25 **全程未被磷酸化**。

一个只被当作"G1/S 激酶抑制剂"的工具，把细胞拦在了 M 期门口。这是全文的起点，也是它最意外的地方。

### 2. 这个阻断不是 DNA 复制检查点造成的

这是最容易想到的替代解释：Cdk2 是 DNA 复制的必需因子，Cip 一加，DNA 复制停摆，复制检查点就把 M 期拦住了。

作者的排除方法很干脆：**不加精子染色质，重做一遍**。没有核就没有复制，也就没有复制检查点。结果一模一样——对照仍在 80–100 min 去磷酸化 Cdc2，Cip 组仍停在磷酸化的失活状态。

**结论：抑制 Cdk2 造成的 M 期阻断，与正在进行的 DNA 复制无关。**

这是全文设计上最漂亮的一步：用一个"减法"（去掉核）把一个混杂变量彻底移除，而不是靠加抑制剂去"对冲"。

### 3. p21 不是通过直接抑制 Cdc2 起作用的

如果 Cip 能直接抑制 Cdc2，那一切就都解释得通了，文章也就没有新意。作者用三条独立证据排除：

- **不影响 cyclin 的合成与结合**：[³⁵S] 标记 + p13 沉淀显示，Cip 处理组中 cyclin A1、B1、B2 的合成量以及与 Cdc2 的结合量，与对照没有差别；
- **不破坏已经建立的有丝分裂状态**：把足够浓度的 Cip 加到 metaphase 停住的 CSF 提取物里，提取物**仍然停在 M 期**（染色质保持凝集、不成核）；再加 Ca²⁺ 后又正常退出 M 期、形成核；
- **不抑制 Cdc2 的激酶活性**：CSF 提取物中 Cdc2 的 H1 激酶活性在 Cip 存在下不下降；甚至把 Cip **直接加进 H1 激酶反应体系**也不抑制。

**结论：在能阻断进入 M 期的浓度下，Cip 不直接抑制 Cdc2–cyclin B。**

### 4. p21 结合 Cdk2–cyclin E 和 Cdc2–cyclin A，但不结合 Cdc2–cyclin B

用 GST–Cip 从间期提取物中拉下结合的复合物，再用抗体检测：

| 复合物 | 是否被 GST–Cip 拉下 |
| :--- | :--- |
| Cdk2–cyclin E1 | **是**（结合很强） |
| Cdc2–cyclin A1 | **是**（选择性沉淀） |
| Cdc2–cyclin B2 | **否**（只能被 p13 拉下） |

[³⁵S] 标记的新合成蛋白也给出同样结果：cyclin A1 出现在 GST–Cip 沉淀中，cyclin B1、B2 不出现。

**结论：在卵提取物里，Cip 的靶点是 Cdk2–cyclin E 和 Cdc2–cyclin A，不是 Cdc2–cyclin B。** 于是问题缩小为：阻断到底来自哪一个？

### 5. 用"没有 cyclin A"的提取物把靶点锁定到 Cdk2–cyclin E

在环己酰亚胺阻断的间期提取物里，cyclin A1 检测不到，cyclin B 也没有；此时加入 **35 nM 不可降解的 GST–cyclin B**，提取物就能进入 M 期（对照 50 min NEB）。

在这个"只剩 Cdk2–cyclin E"的体系里加 Cip（0–300 nM）：

- Cdc2 的 H1 激酶活性在 75 min 时**被抑制 ≥90%**；
- 核膜**至少 90 min 不破裂**；
- 有效阈值是 **75 nM**，恰好与"完全抑制内源 Cdk2"所需的最低浓度吻合。

**结论：被 Cip 抑制、并且对 Cdc2 活化必不可少的，是 Cdk2–cyclin E，而不是 Cdc2–cyclin A。**

### 6. 回补 Cdk2–cyclin E 可以逆转阻断

向含 100 nM Cip 的周期提取物中加入 250 nM GST–Cdk2 + 250 nM GST–cyclin E：

- 测得的 Cdk2–cyclin E 激酶活性是内源水平的 **2.5 倍**（说明外加的复合物有活性、且过量于 Cip）；
- 提取物**恢复了周期振荡**：核膜破裂发生在 50–60 min，第二次在 95–110 min；
- Cdc2 的磷酸化状态随之周期性地"慢—快"变化，H1 激酶出现相应的峰。

**结论：Cip 造成的阻断是可以通过恢复 Cdk2–cyclin E 活性来逆转的。**

### 7. 不用 Cip，直接去掉 Cdk2 也是同样的表型

为了排除"这只是 p21 这个试剂的特异现象"，作者做了第二条独立路线：**免疫去除 Cdk2（>98%）**。

- mock 去除的提取物加 35–70 nM GST–cyclin B 后，Cdc2 的 H1 激酶活性升高 **8.3 倍**，45 min 进入 M 期；
- Cdk2 去除的提取物加同样量的 cyclin B，**Cdc2 完全不被激活**，60 min 时核仍然完整；
- 向去除的提取物中回补 100 nM Cdk2 + cyclin E，Cdc2 活化被**挽救**到接近 mock 对照的水平。

**两条独立手段（药物抑制 + 蛋白去除）、两个方向的验证（阻断 + 回补），指向同一个结论。**

### 8. 高浓度 cyclin B 可以绕过阻断——这反而划定了结论的边界

一个很有信息量的观察：把 GST–cyclin B 提到 **240 nM**（约 8 倍于生理用量）时，无论是 Cip 处理还是 Cdk2 去除的提取物，Cdc2 都能被迅速激活、提取物进入 M 期。

作者的解释是：Cip 阻断的是 Cdc2 的**起始活化步骤**，而不是**自催化放大环**。一旦有足够多的 Cdc2–cyclin B 底物，正反馈环可以自己"点火"，绕过对 Cdk2 的需求。这与 Fang & Newport（1991）早先"大量 cyclin B 可绕过 Cdk2 缺失"的观察一致。

### 9. Cdc2 是被 Thr-14/Tyr-15 抑制的，不是缺 Thr-161 磷酸化

从 Cdk2 缺失的提取物中免疫沉淀出失活的 Cdc2–cyclin B，用纯化的人 **GST–Cdc25B** 处理，复合物被迅速激活。

这一条很关键：说明 Cdc2 已经被 CAK 在 Thr-161 上磷酸化（否则 Cdc25 去磷酸化也救不回来），它之所以失活，是**因为 Thr-14/Tyr-15 上带着抑制性磷酸化**。也就是说，Cdk2 缺失并没有影响 CAK，而是影响了"谁去移除 T14/Y15"或"谁在加上它们"。

---

## 结论与意义

1. **Cdk2 激酶是进入有丝分裂的正向调节者，作用点在 Cdc2 活化的上游。** 没有 Cdk2 活性，Cdc2–cyclin B 会积累但始终保持 T14/Y15 磷酸化的失活状态。
2. **建立了 Cdk 之间的级联关系。** 在高等真核中，Cdk2（G1/S）→ Cdc2（G2/M）的次序，与芽殖酵母中 Cln–Cdc28 → Clb–Cdc28 的级联同构。这是"分工"之外的另一层组织原则：分工的 Cdk 之间还有上下游。
3. **给"为什么 S 期必须先完成"提供了一个单点解释。** Cdk2 既是驱动 S 期的激酶，又是允许 M 期启动的激酶——一把钥匙开两道锁，因此 M 期天然地排在 S 期之后（Fig. 7 的模型）。这个设计比"两个独立检查点"更经济。
4. **机制上最可能是通过 Cdc25 或 Wee1/Myt1。** Cdk2 要么下调给 Cdc2 加磷酸的激酶，要么上调去掉磷酸的磷酸酶；无论哪一种，只要让 Cdc2 的净磷酸化状态稍微偏向"去磷酸化"，那个极其敏感的自催化环就会被点燃。作者给出的支持性观察是：Cip 处理下，Cdc25 在 30–75 min 的那次**早期部分磷酸化完全消失**（远早于 90 min 的 M 期），而 Cdc25 的磷酸化与其活化相关。
5. **对体细胞的推测**：体细胞里 Cdk2–cyclin E 在 S 中期就衰减，因此不太可能承担这个角色；作者认为**很可能由 Cdk2–cyclin A 承担**——cyclin A 在 S 和 G2 期持续积累、到 M 期才被降解，时间窗正好合适。作者明确标注这是推测（"we believe"、"it is quite likely"）。
6. **方法学上的示范**：在体细胞里被检查点掩盖的调控关系，可以在去核的卵提取物里被"提纯"出来。这是爪蟾体系最经典的一次价值展示。

---

## 我的思考

这篇文章的论证结构非常干净，值得单独学一遍：**先报告一个意外的表型（p21 阻断 M 期），然后用排除法逐个封掉所有更容易的解释**——不是复制检查点（去核）、不是直接抑制 Cdc2（三条证据）、不是 cyclin A（CHX 提取物）、不是试剂假象（免疫去除）——最后把解释逼到唯一剩下的出口。这种"把替代假设一个一个杀掉"的写法，比正面堆证据有说服力得多。

但正因为结构太干净，我读的时候反而更留意它**没有封掉**的那些出口。有几个地方我一直没被说服。

**第一，全文的核心操作都是"蛋白的有无"，却没有区分"激酶活性"和"蛋白本身"。** 两个方向的实验——加 p21 抑制活性、免疫去除去掉蛋白——最后回补的都是**野生型** Cdk2–cyclin E。也就是说，作者证明了"Cdk2 这个东西必须在场并且有活性"，但没有证明"必须是它的催化活性在起作用"。逻辑上还留着一个可能：Cdk2 只是作为一个**支架**，把某个因子（比如 Cdc25 或某个衔接蛋白）带到 Cdc2 附近；或者它只是通过结合把 p21"吸走"。

这里还有一个我觉得更具体的疑点：回补实验用的是 **250 nM 的 Cdk2–cyclin E 去对抗 100 nM 的 p21**，是 2.5 倍的摩尔过量。p21 与 Cdk2 的结合非常紧（亚纳摩尔级），所以要让体系里出现游离的活性复合物，过量在化学上是必需的——这一点我完全理解。但**恰恰因为必需**，"恢复"到底来自外加的复合物在催化，还是来自内源 Cdk2–cyclin E 被重新解放，这个实验本身分辨不了。作者其实有更好的武器没用：在**已经去除 Cdk2** 的提取物里回补一个 **K33R 的激酶失活突变体**。那个体系里没有内源 Cdk2 可以"被解放"，所以若能恢复，就说明是结合而非催化；若不能恢复，才真正坐实标题里的 "kinase activity"。这个对照只需要一个点突变，而作者自己在引言里就引用了别人用 kinase-dead Cdk2 的工作（van den Heuvel & Harlow, 1993），说明这个工具他们是知道的。

**第二，"必需（required）"这个词比数据能支撑的更强。** 作者自己报告了：cyclin B 提到 240 nM（约 8 倍生理浓度）就能绕过阻断。那么严格说，结论应该是"**在生理 cyclin B 浓度下**，Cdc2 的起始活化严格依赖 Cdk2"，而不是无条件的"必需"。作者在讨论里其实做了这个限定（"at physiological levels of GST–cyclin B (35–70 nM), Cdc2–cyclin B activation is strictly dependent on Cdk2 kinase activity"），措辞是谨慎的；但标题和摘要没有带上这个限定。

顺着他自己的数据往下推，还有一个更有意思的问题：在被阻断的提取物里，cyclin B **不被降解、只会持续累积**。既然 240 nM 就能绕过，那么在 2.5 小时的观察窗之后，累积的 cyclin B 是否最终会把体系推过阈值、自发进入 M 期？如果是，那这个阻断就只是**延迟**而非**阻断了**——这两者对"必需"的解读完全不同。文中没有给出 150 min 时 cyclin B 的实际浓度，也没有更长时间的观察。这是一个用现有数据就能回答、但文章没有回答的问题。

**第三，Cdc25 那条证据是相关，不是因果。** 作者用"Cip 处理下 Cdc25 的早期部分磷酸化消失"来支持"Cdk2 作用于 Cdc25 上游"。但引言里他们自己就说了：**Cdc25 是被 Cdc2–cyclin B 磷酸化并激活的**（正反馈）。在一个 Cdc2 处于 T14/Y15 磷酸化失活状态的提取物里，Cdc25 不被磷酸化本来就是预期结果，无论 Cdk2 是否直接作用在它身上。所以这条证据无法区分 "Cdk2 → Cdc25" 和 "Cdk2 →（少量）Cdc2 → Cdc25"。作者用的词是 "could serve to increase"，很克制，没有硬说是因果——但读者很容易把这张图当成机制证据。

而且这里还有个**不对称**：文章提出的两个可能（下调 Wee1/Myt1，或上调 Cdc25）里，只测了 Cdc25，**Wee1/Myt1 的活性从头到尾没测过**。严格说，现有数据同样支持"Cip 处理下 Wee1 活性升高"，而这一点是完全没被检验的。

**第四，把结论外推到体细胞这一步，我觉得是全文最弱的地方。** 作者推测体细胞里由 Cdk2–cyclin A 承担这个功能。时间窗的论证是合理的（cyclin A 到 M 期才降解）。但有一个逻辑上的别扭：如果 Cdk2 是 M 期的"许可者"，而体细胞里 cyclin A 在**中期之前**就被降解了，那么许可一旦发出、Cdk2 随后消失，这个许可如何维持？换句话说，这个模型在胚胎里（Cdk2 全程有活性）是自洽的，搬到体细胞里就变成"一次性触发"的模型，而这需要额外假设。作者显然意识到了这一点，所以用词都是 "we believe"、"it is quite likely"，没有把话说死。（顺带一提，后来小鼠的 Cdk2 基因敲除结果让这个外推变得更复杂，但那是很久以后的事了。）

**第五，一个我觉得很值得留意的技术细节。** 全文判断"Cdc2 是否处于失活状态"，主要靠 **25 cm 长胶上的迁移率变动**。这个选择本身是对的（T14/Y15 的磷酸化只带来很小的迁移差异，短胶分不开），但迁移率终究是一个间接指标：文中没有用**抗磷酸酪氨酸抗体**或**磷酸酶处理**来直接确认那两条上移带就是 T14/Y15 的磷酸化形式。作者有一条很强的旁证——用 Cdc25B 能激活这些复合物，说明 T161 已被磷酸化、抑制来自 T14/Y15——但这是间接推理。在 1996 年，anti-phosphotyrosine 印迹已经是常规操作，这个确认的成本很低。

最后说一个纯粹觉得有意思的点：p21 在本文里其实扮演了两个角色。它既是**抑制剂**（用来做功能失活），又是**亲和试剂**（GST 拉下实验）。而它"结合 Cdc2–cyclin A 却不抑制 Cdc2–cyclin B"这个选择性，本身就说明**cyclin 亚基决定了 Cdk 的表面界面**——同一份催化亚基，换一个 cyclin，抑制剂的结合能力就完全不同。这一点文章没有展开，但它其实是后来"cyclin 决定底物特异性"这一整条研究线路的一个早期信号。

仅为一点想法。

---

## 专业词汇表

| 单词 | 音标 | 释义 | 生化医学专业含义 | 解释 |
| :--- | :--- | :--- | :--- | :--- |
| **Cdk** | /ˌsiː diː ˈkeɪ/ | — | cyclin-dependent kinase，周期蛋白依赖性激酶 | 与 cyclin 结合才有活性，驱动细胞周期各转换 |
| **Cdk2** | /ˌsiː diː ˈkeɪ tuː/ | — | 主要调控 G1–S 转换的 Cdk | 本文的主角，在卵提取物中主要与 cyclin E 结合 |
| **Cdc2** | /ˌsiː diː ˈsiː tuː/ | — | 即 Cdk1，MPF 的催化亚基 | 驱动 G2–M 转换；在酵母中也叫 Cdc28 |
| **cyclin** | /ˈsaɪklɪn/ | 周期蛋白 | 与 Cdk 结合并决定其底物特异性的调节亚基 | 周期性合成与降解，是细胞周期的"时钟指针" |
| **cyclin E** | /ˈsaɪklɪn iː/ | — | G1 后期出现的 cyclin，与 Cdk2 结合 | 卵提取物中 Cdk2 的主要伙伴 |
| **cyclin A** | /ˈsaɪklɪn eɪ/ | — | S 期与 G2 期的 cyclin，可与 Cdk2 或 Cdc2 结合 | 卵中主要与 Cdc2 结合；本文用 CHX 把它去掉 |
| **cyclin B** | /ˈsaɪklɪn biː/ | — | 有丝分裂 cyclin，与 Cdc2 组成 MPF | 在间期合成，M 期经 APC/C 降解 |
| **MPF** | /ˌem piː ˈef/ | — | maturation/mitosis-promoting factor | Cdc2–cyclin B 复合物的旧称，启动有丝分裂 |
| **CAK** | /kæk/ | — | Cdk-activating kinase，即 Cdk7–cyclin H–Mat1 | 磷酸化 Cdc2 的 Thr-161，是催化活性所必需 |
| **Wee1** | /ˈwiː wʌn/ | — | 磷酸化 Cdc2 Tyr-15 的抑制性激酶 | 把 MPF 压住；其活性下降是进入 M 期的条件之一 |
| **Myt1** | /ˈmɪt wʌn/ | — | 膜结合的抑制性激酶，同时磷酸化 Thr-14 与 Tyr-15 | 本文写作 "a distinct membrane-associated kinase" |
| **Cdc25** | /ˌsiː diː ˈsiː twenti faɪv/ | — | 双特异性磷酸酶，去磷酸化 Cdc2 的 T14/Y15 | 激活 MPF；又被 MPF 磷酸化激活，构成正反馈 |
| **Thr-161** | /θrɪˈɒnɪn wʌn sɪks wʌn/ | — | Cdc2 上的苏氨酸残基 | 被 CAK 磷酸化后 Cdc2 才有催化活性 |
| **Tyr-15** | /ˈtaɪrəsiːn fɪfˈtiːn/ | — | Cdc2 上的酪氨酸残基 | 被 Wee1 磷酸化后 Cdc2 失活，是主要的抑制位点 |
| **Thr-14** | /θrɪˈɒnɪn fɔːˈtiːn/ | — | Cdc2 上的另一个抑制性磷酸化位点 | 与 Tyr-15 协同，把 Cdc2 锁在失活态 |
| **p21^Cip1** | /ˌpiː twenti wʌn/ /sɪp wʌn/ | — | 一种 Cdk 抑制蛋白（CKI） | 本文的核心工具：抑制 Cdk2 活性，也用作亲和试剂 |
| **Cip** | /sɪp/ | — | 本文对 p21^Cip1 的简称 | 文中 "Cip-treated extract" 即加入 GST–p21 的提取物 |
| **CKI** | /ˌsiː keɪ ˈaɪ/ | — | Cdk inhibitor，Cdk 抑制蛋白家族 | 包括 p21、p27、p57（CIP/KIP 家族）与 p16（INK4 家族） |
| **Xenopus** | /ˈzenəpəs/ | 非洲爪蟾 | 非洲爪蟾属，经典发育与细胞周期模型 | 卵大、量大，可制备无细胞提取物 |
| **egg extract** | /eɡ ˈekstrækt/ | — | 卵提取物 | 在体外重现细胞周期事件的"试管细胞" |
| **CSF** | /ˌsiː es ˈef/ | — | cytostatic factor，细胞静止因子 | 使未受精卵停在 metaphase 的活性；提取物借此停在 M 期 |
| **metaphase** | /ˈmetəfeɪz/ | 中期 | 有丝分裂中期，染色体排列在赤道板 | CSF 提取物即停在此状态 |
| **interphase** | /ˈɪntəfeɪz/ | 间期 | 有丝分裂之间的时期（G1、S、G2） | 加 Ca²⁺ 后 CSF 提取物进入间期 |
| **NEB** | /ˌen iː ˈbiː/ | — | nuclear envelope breakdown，核膜破裂 | 进入 M 期最直观的形态学标志 |
| **chromosome condensation** | /ˈkrəʊməsəʊm ˌkɒndenˈseɪʃn/ | 染色体凝集 | 间期染色质折叠成可见染色体的过程 | 本文用 bisbenzimide 染色观察 |
| **chromatin** | /ˈkrəʊmətɪn/ | 染色质 | 由 DNA 与组蛋白组成的复合物 | 加入的精子染色质会先在提取物中形成核 |
| **demembranated sperm chromatin** | /diːˈmembreɪneɪtɪd/ | 去膜精子染色质 | 用去垢剂剥去膜的精子核 | 加入卵提取物后可重新组装核膜，是标准底物 |
| **histone H1 kinase assay** | /ˈhɪstəʊn eɪtʃ wʌn/ | — | 以组蛋白 H1 为底物测 Cdk 活性的方法 | Cdk 的通用活性读出，用 ³²P 掺入量定量 |
| **p13^suc1** | /ˌpiː θɜːˈtiːn/ | — | 裂殖酵母 suc1 基因产物，结合 Cdc2/Cdk2 | 偶联到 Sepharose 后可定量沉淀 Cdc2 与 Cdk2 |
| **mobility shift** | /məʊˈbɪləti ʃɪft/ | 迁移率变动 | 磷酸化等修饰导致 SDS–PAGE 上条带位置改变 | 本文判断 Cdc2 是否被 T14/Y15 磷酸化的主要指标 |
| **SDS–PAGE** | /ˌes diː es peɪdʒ/ | — | SDS-聚丙烯酰胺凝胶电泳 | 按分子量分离蛋白；本文用 25 cm 长胶分辨微小差异 |
| **Western blot** | /ˈwestən blɒt/ | — | 蛋白免疫印迹 | 用特异抗体检测目标蛋白及其修饰状态 |
| **autoradiography** | /ˌɔːtəʊreɪdiˈɒɡrəfi/ | 放射自显影 | 用 X 光片记录放射性信号 | 用于检测 ³⁵S 标记的新合成蛋白与 ³²P 掺入 |
| **GST** | /ˌdʒiː es ˈtiː/ | — | glutathione S-transferase，谷胱甘肽 S-转移酶 | 常用融合标签，便于用谷胱甘肽–Sepharose 纯化与拉下 |
| **glutathione–Sepharose** | /ˌɡluːtəˈθaɪəʊn/ | — | 谷胱甘肽偶联的琼脂糖珠 | 用于纯化 GST 融合蛋白、拉下与之结合的复合物 |
| **pulldown** | /ˈpʊldaʊn/ | 拉下 | 用固定化的诱饵蛋白捕获相互作用蛋白 | 本文用 GST–Cip 拉下与之结合的 cyclin–Cdk 复合物 |
| **immunodepletion** | /ˌɪmjʊnəʊdɪˈpliːʃn/ | 免疫去除 | 用抗体把目标蛋白从提取物中清除 | 本文去除 Cdk2，效率 >98%，是独立于药物的第二条路线 |
| **immunoprecipitation** | /ˌɪmjʊnəʊprɪˌsɪpɪˈteɪʃn/ | 免疫沉淀 | 用抗体特异性沉淀目标蛋白 | 与免疫去除原理相同，目的是"取出来测"而非"去掉" |
| **mock depletion** | /mɒk dɪˈpliːʃn/ | — | 用无关 IgG 做的假去除对照 | 排除"操作本身"造成的影响 |
| **cycloheximide** | /ˌsaɪkləʊˈheksɪmaɪd/ | 环己酰亚胺 | 蛋白质合成抑制剂 | 用于制备"只有 Cdk2–cyclin E、没有 cyclin A/B"的提取物 |
| **bisbenzimide** | /bɪsˈbenzmɪd/ | — | Hoechst 33258，DNA 荧光染料 | 固定后染色观察核形态与染色体凝集 |
| **phase-contrast microscopy** | /feɪz ˈkɒntrɑːst maɪˈkrɒskəpi/ | 相差显微镜 | 无需染色即可观察透明样品的显微技术 | 用于实时观察核膜破裂 |
| **EGTA** | /ˈeɡtə/ | — | 钙离子螯合剂 | 制备 CSF 提取物时加入，防止 Ca²⁺ 触发 cyclin 降解 |
| **calcium ion** | /ˈkælsiəm/ | 钙离子 | 二价阳离子，此处作为信号分子 | 加 0.4 mM Ca²⁺ 可解除 CSF 阻断，让提取物进入间期 |
| **oscillation** | /ˌɒsɪˈleɪʃn/ | 振荡 | 周期性地在两个状态间往复 | 周期提取物在 S 期与 M 期之间振荡 |
| **dephosphorylation** | /diːˌfɒsfərɪˈleɪʃn/ | 去磷酸化 | 由磷酸酶移除磷酸基团 | Cdc25 对 Cdc2 的作用即去磷酸化激活 |
| **tyrosine phosphatase** | /ˈtaɪrəsiːn ˈfɒsfəteɪz/ | 酪氨酸磷酸酶 | 专一移除酪氨酸上磷酸基团的酶 | Cdc25 属双特异性磷酸酶，可作用于 Tyr-15 与 Thr-14 |
| **autocatalytic loop** | /ˌɔːtəʊkætəˈlɪtɪk luːp/ | 自催化环 | 产物反过来促进自身生成的正反馈 | Cdc2–Cdc25 正反馈使 MPF 活化呈陡峭的开关式 |
| **positive feedback** | /ˈpɒzətɪv ˈfiːdbæk/ | 正反馈 | 输出增强输入 | 解释进入 M 期时 MPF 活性的爆发式上升 |
| **threshold** | /ˈθreʃhəʊld/ | 阈值 | 触发某一反应的临界值 | 本文反复出现：Cip 浓度阈值、cyclin B 浓度阈值 |
| **stoichiometric** | /ˌstɔɪkiəˈmetrɪk/ | 化学计量的 | 按分子数比例而非催化周转起作用 | 讨论抑制剂与回补蛋白的摩尔比时需要区分 |
| **kinase-dead** | /ˈkɪneɪz ded/ | 激酶失活的 | 保留结构但催化活性丧失的突变体 | 如 Cdk2 的 K33R／D145N，用于区分"活性"与"蛋白本身" |
| **dominant-negative** | /ˈdɒmɪnənt ˈneɡətɪv/ | 显性负性 | 突变体干扰野生型功能的效应 | kinase-dead 突变体常表现显性负性 |
| **checkpoint** | /ˈtʃekpɔɪnt/ | 检查点 | 监控关键事件是否完成、未完成则阻断进程的机制 | 复制检查点、DNA 损伤检查点等；本文要排除的正是它 |
| **replication checkpoint** | /ˌreplɪˈkeɪʃn ˈtʃekpɔɪnt/ | 复制检查点 | DNA 未复制完成时抑制 Cdc2 活化的通路 | 本文用"去核"实验把它彻底移除 |
| **restriction point** | /rɪˈstrɪkʃn pɔɪnt/ | 限制点 | 哺乳动物细胞 G1 晚期的一个决定点 | 通过后细胞便不再依赖生长因子，注定进入 S 期 |
| **START** | /stɑːt/ | — | 酵母 G1 晚期的决定点 | 与哺乳动物限制点功能对应 |
| **somatic cell** | /səʊˈmætɪk sel/ | 体细胞 | 除生殖细胞外的身体细胞 | 与胚胎细胞周期相比，多 G1/G2 期与多重检查点 |
| **rescue experiment** | /ˈreskjuː ɪkˈsperɪmənt/ | 回补实验 | 去除某因子后再加回，看功能是否恢复 | 证明"表型确由该因子缺失引起"的关键逻辑 |
| **titration** | /taɪˈtreɪʃn/ | 滴定 | 逐步改变浓度以确定有效剂量 | 本文用它确定 75–100 nM 为 Cip 的完全抑制浓度 |
| **recombinant protein** | /rɪˈkɒmbɪnənt ˈprəʊtiːn/ | 重组蛋白 | 用异源表达系统生产的蛋白 | 本文的 Cdk2、cyclin E、cyclin B、p21 均为大肠杆菌表达 |
| **fusion protein** | /ˈfjuːʒn ˈprəʊtiːn/ | 融合蛋白 | 由两个蛋白（或标签）拼接而成 | GST 融合用于纯化与固定化 |
| **destruction box** | /dɪˈstrʌkʃn bɒks/ | 降解框 | cyclin N 端被 APC/C 识别的短序列 | 去掉它 cyclin 就不再被降解，可用来"锁定"浓度 |
| **sea urchin cyclin B** | /siː ˈɜːtʃɪn/ | 海胆 cyclin B | 异种 cyclin，常去 N 端 13 aa 做成稳定版本 | 本文用它把 cyclin B 浓度变成可人为设定的变量 |
| **degradation** | /ˌdeɡrəˈdeɪʃn/ | 降解 | 蛋白被蛋白酶体等分解 | cyclin 的周期性降解是细胞周期单向性的基础 |
| **affinity purification** | /əˈfɪnəti ˌpjʊərɪfɪˈkeɪʃn/ | 亲和纯化 | 利用特异结合（如标签–配体）纯化蛋白 | 本文用谷胱甘肽–Sepharose 与 Ni 树脂 |
| **substrate** | /ˈsʌbstreɪt/ | 底物 | 被酶作用的分子 | 组蛋白 H1 是 Cdk 的通用底物 |
| **catalytic activity** | /ˌkætəˈlɪtɪk ækˈtɪvəti/ | 催化活性 | 酶加速反应的能力 | 本文的争论焦点：必需的是活性还是蛋白本身 |
| **upstream / downstream** | /ˌʌpˈstriːm/ /ˈdaʊnstriːm/ | 上游 / 下游 | 信号通路中更早 / 更晚的环节 | Cdk2 位于 Cdc2 活化的上游 |
| **cascade** | /kæsˈkeɪd/ | 级联 | 一系列依次激活的反应 | Cdk2 → Cdc2 构成一个级联 |
| **licensing** | /ˈlaɪsnsɪŋ/ | 许可 | 使某事件被允许发生的前置条件 | Cdk2 给 M 期的启动"发许可" |
| **Fig. 7 model** | — | — | 作者在讨论中给出的机制示意图 | 描述 Cdk2 如何把 S 期完成与 M 期启动耦合起来 |

---

> 图片来自论文原文（Cell 84: 73–82, 1996）与网络公开资料。
