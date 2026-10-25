---
title: 文献阅读笔记3 | SNARE 蛋白编码的膜融合区室特异性
description: 区室特异性是否写在 SNARE 自己身上 | Compartmental specificity of cellular membrane fusion encoded in SNARE proteins
slug: snare-compartmental-specificity
date: 2026-10-22 15:00:00+0000
image: cover.jpg
categories:
    - Paper Notes
tags:
    - SNARE
    - Membrane Fusion
    - Compartmental Specificity
    - Yeast
    - Lipid Bilayer
    - Academic
weight: 2
---

# **文献阅读笔记3 | SNARE 蛋白编码的膜融合区室特异性**
---

> **一句话总结：**  
> 这篇 2000 年的 Nature 论文把酵母基因组里全部 11 个候选 v-SNARE 与 3 个分别标记高尔基、液泡、质膜的 t-SNARE 复合物两两配对，做完了全部 33 个组合的脂质体融合实验；结果 33 个里只有 4 个已知的生理配对和 2 个额外组合能融合，说明细胞内的膜流地图在很大程度上就"写"在 SNARE 蛋白自身的物理化学性质里——把 SNARE 从细胞里拿出来，特异性依然成立。

---

## 文献信息

| 项目 | 内容 |
| :--- | :--- |
| **标题** | Compartmental specificity of cellular membrane fusion encoded in SNARE proteins |
| **作者** | James A. McNew\*, Francesco Parlati, Ryouichi Fukuda\*, Robert J. Johnston, Keren Paz, Fabienne Paumet, Thomas H. Söllner & James E. Rothman（\* 同等贡献） |
| **单位** | Cellular Biochemistry and Biophysics Program, Memorial Sloan-Kettering Cancer Center, New York, USA |
| **期刊** | Nature |
| **卷期页码** | 407, 153–159 |
| **年份** | 2000（5 月 30 日投稿，7 月 18 日接收，9 月 14 日发表） |
| **关键词** | SNARE; v-SNARE; t-SNARE; membrane fusion; compartmental specificity; SNAREpin; liposome reconstitution; *Saccharomyces cerevisiae* |

---

## 研究背景

真核细胞的细胞质被膜分隔成许多区室，物质靠**囊泡**在区室之间穿梭：囊泡从供体区室出芽，带着特定的"货物"（cargo），最终只与**指定的**靶膜融合。这个"只跟对的人融合"的性质，就是**区室特异性（compartmental specificity）**。如果特异性失效，货物就会被投递到错误的地方——对细胞而言这是灾难性的。

1993 年，Söllner 等发现囊泡膜上的 **v-SNARE**（vesicle-SNARE）与靶膜上的 **t-SNARE**（target-SNARE）能够配对，并据此提出 **SNARE 假说**：v-SNARE 与 t-SNARE 的特异性配对既是囊泡"停靠（docking）"的分子基础，也是启动双层膜融合的机制本身。SNARE 这个名字来自 "SNAP receptor"（SNAP = soluble NSF attachment protein，NSF = N-ethylmaleimide-sensitive factor）。

到 2000 年，这个假说的"前半段"已经被反复验证：

- SNARE 的胞质域能自组装成**棒状的 SNARE 复合物**（四螺旋束），把囊泡"拴"在靶膜上；
- 把 v-SNARE 和 t-SNARE 分别重建到两个人造脂质体上，两者配对就足以**自发触发融合**，这种最小装置被称为 **SNAREpin**；
- 融合的能量来自 SNARE 复合物异常高的稳定性，这份自由能被用来对脂双层"做功"；
- 分离的 SNARE 驱动的融合速度快到可以与细胞内整体的胞吐速率相比；
- 来自 ER–高尔基、液泡同型融合、调节性胞吐等不同通路的 SNARE，都能在脂质体上融合。

于是问题就变成了：**既然融合这么"自动"，那特异性是不是也自动的？**

逻辑上，区室特异性可以来自三个层次：

1. **定位（localization）**：SNARE 靠自身的分选信号待在不同区室，彼此"见不到面"；
2. **调控（regulation）**：Rab GTPase、tether（拴系蛋白）、SM 蛋白等调控因子在空间和时间上限制 SNARE 的活性；
3. **内在性质（intrinsic property）**：SNARE 自己"认不认"对方，配对之后能不能在运输的时间尺度内真的把两层膜拉到一起并融合。

前两个层次只有在完整细胞里才读得出来；**只有第三个层次可以被"孤立"的蛋白单独检验**。这正是本文的实验切口：把 SNARE 从细胞里彻底拿出来，看特异性还在不在。

选择酵母（*Saccharomyces cerevisiae*）作为材料的理由非常充分：它的基因组测序已经完成，全部 SNARE 都已被注释；ER–高尔基、液泡、质膜这三条通路上"哪一对配哪一对"也已经在功能上被确定。因此可以做一个**穷举式**的实验，而不是挑几个组合看看。

---

## 主要方法

- **蛋白表达与纯化**：大肠杆菌（*E. coli*）表达。Snc1、Snc2 为 His₆ 标签；Sso1 为 His₈ 标签；Sec9 中与 SNAP-25 同源的部分（Sec9c）为 **GST 融合蛋白**。用 Ni-NTA 或谷胱甘肽琼脂糖纯化，最后换到去垢剂 OG（octylglucoside）中。
- **t-SNARE 复合物的重建**：把 His₈-Sso1 与 GST-Sec9c 按摩尔比约 1:5 混合，4 °C 过夜形成复合物；加入 POPC:DOPS（85:15）脂膜，用**去垢剂稀释 + 透析法**形成脂质体；再用**漂浮（flotation）**回收脂质体；最后用**凝血酶（thrombin）**切掉 GST。约 60–70% 的 GST-Sec9c 朝外、可被切开，其余朝内、抗切割；对照实验证明 GST 不影响 Sec9c 活性。
- **v-SNARE 的重建**：把候选 v-SNARE 单独重建进含荧光脂质的"供体"脂质体，用同样方法回收。
- **融合测定（lipid mixing）**：供体脂质体含 NBD/Rhodamine 荧光脂质，与不带荧光的"受体"脂质体按 1:9 混合于 96 孔板，37 °C 实时读取 NBD 荧光（激发 460 nm，发射 538 nm），每 2 min 一点。120 min 时加入去垢剂（n-dodecylmaltoside）测定"无限稀释"荧光作为 100% 定标。数据换算成 **rounds of fusion（融合轮数）**，即脂质被稀释的倍数。
- **阴性/抑制对照**：加入可溶的 v-SNARE 胞质域（GST-Snc2ΔTMD）竞争，检验融合是否真依赖 SNARE 配对；另设无蛋白脂质体作为背景。
- **定量**：Coomassie 染色胶 + 已知量标准品估算蛋白量；用 ³H-DPPC 示踪剂测磷脂量；据此计算每个 45 nm 囊泡上 v-/t-SNARE 的**拷贝数**（Table 1、Table 2）。
- **锚定方式的改造（关键实验）**：Ykt6 天然靠 C 端的 **CAAX box** 接一个 C20 异戊二烯（geranylgeranyl）脂锚；作者另外做了两个版本：接合成 C55 异戊二烯的版本，以及把 Ykt6 胞质域接到 Gos1 跨膜段上的**嵌合蛋白**版本。
- **文库扫描**：11 个候选 v-SNARE × 3 个 t-SNARE 复合物 = **33 个组合全部测定**，每个组合的融合程度以对应的 cognate 配对（100%）归一化。

---

## 主要结果

### 1. 酵母质膜 SNARE 在脂质体上就能融合，且依赖 SNARE 配对

酵母质膜的 t-SNARE 是 syntaxin **Sso1** 与 SNAP-25 同源物 **Sec9** 组成的异二聚体；它的 cognate v-SNARE 是 **Snc2**（与 Snc1 遗传上可互换）。Sso1 与大鼠 Syntaxin1A 有 42% 序列一致，Snc2 与神经元 VAMP2 有 50% 一致，说明这套配对在进化上高度保守。

实验上：

- Snc2 供体脂质体与 Sso1/Sec9c 受体脂质体**自发且高效融合**；
- 把 Snc2 的拷贝数依次降到 0.5×、0.25×，**融合速率随之下降**（剂量依赖）；
- 加入可溶的 Snc2 胞质域竞争，**融合被抑制**——证明融合确实需要 SNARE 复合物装配，而不是脂质体随机粘连。

### 2. 酵母与神经元的 SNARE 可以交叉融合

含神经元 v-SNARE **VAMP2** 的脂质体能和 Sso1/Sec9c 脂质体融合；含神经元 t-SNARE **syntaxin1A/SNAP25** 的脂质体也能和 Snc2 脂质体融合。速率比各自的 cognate 慢，但明确成立。说明**质膜 SNARE 的配对规则在进化中高度保守**。

### 3. 3×3 小矩阵：三个已知配对都融合，六个错配里只有一个融合

当时已被功能鉴定出的 cognate 配对共有三对：

| v-SNARE | t-SNARE | 通路 |
| :--- | :--- | :--- |
| Bet1 | Sed5/Bos1,Sec22 | ER → 高尔基 |
| Nyv1 | Vam3/Vam7,Vti1 | 液泡同型融合 |
| Snc2 | Sso1/Sec9c | 高尔基 → 质膜（本文建立） |

作者把这 3 个 v-SNARE 与 3 个 t-SNARE 做了 9 个组合（Fig. 3）：三个 cognate 全部融合；6 个错配中**只有 1 个**融合——**Nyv1 + 质膜 t-SNARE**。作者指出，这一组合在动物细胞中对应"溶酶体分泌（lysosomal secretion）"这一普遍存在的通路（在酵母中尚未被证实），因此它很可能是**另一个生理上真实的 cognate 配对**，而不能简单当作非特异噪声。

### 4. 全基因组扫描（核心结果）：33 个组合里只有 6 个能融合

酵母基因组共编码 **14 个非 syntaxin 的 SNARE**。其中 3 个（Vam7、Sec9、Spo20）没有跨膜锚定、不是内在膜蛋白，不能单独当 v-SNARE，但可以当 t-SNARE 的"轻链"。剩下 **11 个**才是真正"候选 v-SNARE"：Snc1、Snc2、Bet1、Nyv1、Ykt6、Sec22、Bos1、Gos1、Sft1、Tlg1、Vti1。

把这 11 个分别重建进供体脂质体，与 3 个 t-SNARE 脂质体做 **33 个组合**（Fig. 4）：

| t-SNARE（区室） | 能融合的 v-SNARE | 数目 |
| :--- | :--- | :--- |
| Sed5/Bos1,Sec22（高尔基） | Bet1（唯一） | 1 |
| Vam3/Vam7,Vti1（液泡） | Nyv1（唯一） | 1 |
| Sso1/Sec9c（质膜） | Snc1、Snc2、Nyv1、Sec22 | 4 |
| **合计** | **33 个中 6 个** | **6** |

两个结论：

- **高尔基和液泡的 t-SNARE 极其严格**，只认自己那一个 v-SNARE；
- **质膜 t-SNARE 相对"宽松"**，除了两个 cognate（Snc1、Snc2）外还接受 Nyv1 和 Sec22。作者对此并不回避，而是把这两例都做了解释（见下）。

### 5. "R 残基"并不是特异性的决定因素

能通过质膜 t-SNARE 融合的 4 个 v-SNARE（Snc1、Snc2、Nyv1、Sec22）都属于 **R-SNARE**——它们的 SNARE motif 中央（0 层）是一个保守的精氨酸。领域内曾流行"这个 R 决定配对特异性"的观点。但作者指出：**这个 R 被突变后并不显著影响分泌**，因此它既不可能是融合机制的关键，也不可能是膜间配对特异性的关键。这是主动推翻自己领域一个流行解释的做法。

### 6. Ykt6：细胞用一个"脂锚"就把候选 v-SNARE 关掉了

Ykt6 是酵母中第 5 个 R-SNARE。它天然通过 C 端 CAAX box 接一个 C20 geranylgeranyl 脂锚。实验发现：

- 天然 C20 脂锚定的 Ykt6：**不能融合**；
- 换成 C55 异戊二烯锚定：**能融合**；
- 换成 Gos1 的跨膜肽段（蛋白锚定，和其他 R-SNARE 一样）：**能融合**。

也就是说，Ykt6 的胞质域本身具备当 v-SNARE 的能力，**是"脂锚定"这一种锚定方式把它限制住了**。这在功能上间接提高了质膜 t-SNARE 的"有效特异性"。

### 7. 作者的机制解释：为什么"溶液里能配对"不等于"膜间能融合"

当时有两项用**可溶性 SNARE**（无膜锚定）研究特异性的工作得出了相反结论：SNARE 配对似乎没有内在特异性。本文的反驳是方法学的：

1. 可溶性 SNARE 的结合实验**缺少膜锚定**，也**缺少直接的功能读出**；
2. 融合是一个**能量耦合**过程：SNAREpin 装配释放的自由能，有一部分被用来对脂双层做功（把两层膜拉近、弯曲、破膜），这相应地降低了 SNAREpin 本身的稳定性；
3. 因此，一个在溶液里"热力学上很有利"的非 cognate 配对，如果其自由能不足以完成对膜做的功，在**膜与膜之间**就不会发生。膜锚定把"装配"和"做功"耦合起来，**这本身就提高了选择性**。

---

## 结论与意义

1. **区室特异性在很大程度上内在于 SNARE 蛋白的物理化学性质**。把 SNARE 从细胞中分离出来、只放在两个脂质体之间，细胞内的膜流地图几乎被忠实重演（"almost without exception"），这正是 SNARE 假说的预言。
2. **特异性不是绝对的，但方向是对的**。33 个组合中只有 6 个融合，且 4 个是已知的生理配对；高尔基和液泡的 t-SNARE 严格专一，质膜 t-SNARE 只是"不严格"而非"乱配"。
3. **特异性由三个层次共同保证，本文只证明了第三层**。作者明确写道：SNARE 的内在特异性虽然已经把膜流限制得很死，但仍然被**定位**（topogenic signals）和**调控**（Rab、tether、局部激活）所"加固（buttressed）"。
4. **锚定方式（anchor）是特异性的一部分**。Ykt6 的例子说明，同一个胞质域，换一种膜锚定方式，功能就从"不能当 v-SNARE"变成"能当 v-SNARE"。这提示我们在讨论 SNARE 特异性时不能只看 SNARE motif，还要看它怎么被固定在膜上。
5. **方法学教训**：判断 SNARE 特异性必须用**有膜锚定的、有功能读出（融合）的**体系；用可溶性蛋白的体外结合数据推断膜间特异性是不可靠的。
6. **对领域的定位**：SNARE 提供的是"进化上保守、通常静态"的区室身份编码；Rab 和 tether 提供的是"动态、可调"的空间与时间控制。两者是**互补而非冗余**的关系。

---

## 我的思考

这篇文章的结论很强，但也有其他值得探讨的点。

作者证明的是"充分性"——孤立的 SNARE 就足以重现特异的融合模式。但没有证明"必要性"——在体内，特异性是不是**只能**由 SNARE 决定。这两件事在逻辑上是分开的。如果要补上必要性，我想最直接的实验是**体内 domain swap**：把 Bet1 的 SNARE motif 换到 Snc2 的定位信号 + 锚定上，看这个"伪装成 Snc2 的 Bet1"会不会把本应去高尔基的囊泡错误地送到质膜。如果会，就说明 SNARE motif 确实是"邮政编码"；如果不会，说明定位信号的分量比本文暗示的更重。这个实验在 2000 年的技术条件下并不难，作者没做，可能是因为他们已经把"体外重现"当成了更强的证据。

第二个让我在意的地方是**读出方式**。本文的"融合"只有脂质混合（NBD 去淬灭）。脂质混合可以停在**半融合（hemifusion）**——两层膜的外叶连通了，内叶和内容物还没通。内容物混合的证据在本文里是引用前人的（ref. 6），不是自己做的。所以严格讲，本文测的是"SNARE 依赖的膜间脂质连通"。这并不是说结论错了（这个领域的惯例如此，而且后续工作确实补上了内容物混合），但值得进一步探究。

第三个是**定量上的不对称**。Table 1 和 Table 2 里各囊泡的蛋白拷贝数差异很大：最少的液泡 t-SNARE 只有 14 拷贝/囊泡，最多的 Sft1 有 1111 拷贝/囊泡。作者说——"cognate 的密度不高于其他候选，这个方向有利于检出假阳性而不是假阴性"。但它只能排除"假阳性"，不能排除"假阴性"：某些"不融合"可能只是密度太低。要真正扎实，需要做"融合速率 vs 表面密度"的滴定曲线，然后外推到同一密度再比较。另外，Snc2 用 Coomassie 染色很差，作者自己也承认它的定量不准。

第四个是**锚定**。Ykt6 的实验是全文最漂亮的一个发现：同一个蛋白，C20 脂锚不融合，C55 脂锚和跨膜段就融合。但"为什么"完全没有回答。我的猜测是：C20 这种短链、双脂锚的结构过于"浅"和"灵活"，在 trans-SNARE 复合物把两层膜往一起拉的时候，它无法提供足够的锚定深度和机械阻力，于是能量被"浪费"在把脂锚从膜里拽出来，而不是用在弯曲膜上。另一种可能是 C20 版本的重建效率低，表面密度本来就不够——这需要用等密度的对照来排除。不管哪种解释，这都提示"锚定"不是被动的固定装置，而是融合机器的一部分。这是一个可以做的假设。

最后一个：这篇文章的 33 个组合里，有 27 个是"不融合"的负结果，而负结果恰恰是它最有价值的部分。但负结果的解释力完全依赖于"不融合 = 不配对"这个隐含假设。作者在讨论里承认"我们不知道那些不融合的组合是否发生无效停靠"，并且引用自己以前的工作说"就研究过的情况而言，它们确实不停靠"。这个引用很关键，但也很单薄——**如果要用负结果论证特异性，就必须有独立的停靠（docking）读出**，比如用荧光标记直接看囊泡是否被拴在平面支撑的双层膜上。

仅为一点想法。

---

## 专业词汇表

| 单词 | 音标 | 释义 | 生化医学专业含义 | 解释 |
| :--- | :--- | :--- | :--- | :--- |
| **SNARE** | /sneə(r)/ | 陷阱、套索 | 介导囊泡与靶膜融合的一类膜蛋白家族 | 名称来自 "SNAP receptor"，是 v-SNARE 与 t-SNARE 的统称 |
| **v-SNARE** | /ˈviː sneə(r)/ | — | 位于囊泡膜上的 SNARE | v 代表 vesicle，多为 R-SNARE（如 VAMP、Snc、Bet1、Nyv1） |
| **t-SNARE** | /ˈtiː sneə(r)/ | — | 位于靶膜上的 SNARE 复合物 | t 代表 target，通常由 syntaxin + 轻链（SNAP-25 类）组成 |
| **syntaxin** | /sɪnˈtæksɪn/ | — | t-SNARE 的重链组分，含 N 端调节域 | 酵母质膜为 Sso1，高尔基为 Sed5，液泡为 Vam3 |
| **SNAP-25** | /snæp/ | — | t-SNARE 的轻链，无跨膜段，靠棕榈酰化锚定 | 酵母同源物为 Sec9；本文用的是其胞质部分 Sec9c |
| **NSF** | /ˌen es ˈef/ | — | N-ethylmaleimide-sensitive factor，AAA-ATPase | 用 ATP 水解的能量拆开 cis-SNARE 复合物，为下一轮融合"复位" |
| **SNAP** | /snæp/ |  snap（响指、突然） | soluble NSF attachment protein | NSF 的接头蛋白；SNARE 之名即由此而来 |
| **SNAREpin** | /ˈsneəpɪn/ | — | 两层膜之间由 v-/t-SNARE 拉成的"针状"四螺旋束 | 融合的最小机器，把两层膜机械地拉到一起 |
| **trans-SNARE complex** | /trænz/ | trans 意为"跨越" | 跨两层膜的 SNARE 复合物 | 融合前、融合进行中的状态，是"做功"的形式 |
| **cis-SNARE complex** | /sɪs/ | cis 意为"同侧" | 融合后同处一层膜的 SNARE 复合物 | 融合完成后形成，需 NSF 拆解才能循环使用 |
| **R-SNARE** | /ɑː(r)/ | — | SNARE motif 0 层为精氨酸的 SNARE | 多为 v-SNARE；本文证明该 R 残基不决定特异性 |
| **Q-SNARE** | /kjuː/ | — | SNARE motif 0 层为谷氨酰胺的 SNARE | 多为 t-SNARE 组分，与 R-SNARE 互补配对 |
| **SNARE motif** | /ˈməʊtiːf/ | 基序 | 约 60–70 个氨基酸的七肽重复序列 | 四个 motif 缠绕成四螺旋束，是配对与融合的结构基础 |
| **coiled-coil** | /kɔɪld kɔɪl/ | 卷曲的螺旋 | 两股以上 α 螺旋缠绕的结构 | SNARE 复合物的核心结构，异常稳定 |
| **cognate** | /ˈkɒɡneɪt/ | 同源的、同族的 | 生理上正确配对的（v-/t-SNARE） | 本文的核心概念：只有 cognate 配对才高效融合 |
| **non-cognate** | /nɒn ˈkɒɡneɪt/ | — | 非生理配对的组合 | 本文中 33 个组合里绝大部分属于此类 |
| **compartment** | /kəmˈpɑːtmənt/ | 隔间、区室 | 细胞内由膜围成的独立空间 | ER、高尔基、液泡、内体、质膜等 |
| **compartmental specificity** | /kəmˈpɑːtməntl ˌspesɪˈfɪsəti/ | — | 区室特异性 | 囊泡只与"正确"的靶区室融合的性质，本文主题 |
| **membrane fusion** | /ˈmembreɪn ˈfjuːʒn/ | — | 双层膜合并为单层膜的过程 | 需经历识别、停靠、半融合、孔道开放等阶段 |
| **hemifusion** | /ˌhemiˈfjuːʒn/ | hemi 意为"半" | 半融合：仅外叶脂质连通，内叶与内容物未通 | 脂质混合实验无法与完全融合区分，是本文读出的边界 |
| **docking** | /ˈdɒkɪŋ/ | 停靠 | 囊泡被拴在靶膜上但尚未融合的状态 | "不融合"可能只是"不停靠"，也可能"停靠但不融合" |
| **tethering** | /ˈteðərɪŋ/ | 拴系 | 由长而柔性的蛋白（tether）把囊泡先拉近靶膜 | 发生在 SNARE 配对之前，Rab 参与其中 |
| **Rab GTPase** | /ræb ˌdʒiː tiː ˈpiː eɪs/ | — | 小 GTP 酶家族，调控囊泡运输的方向与身份 | 只有 GTP 结合态才有活性；与 tether 协同提供时空调控 |
| **liposome** | /ˈlɪpəsəʊm/ | 脂质体 | 人造磷脂双层囊泡 | 本文的"最小体系"：只有脂质和重建进去的蛋白 |
| **proteoliposome** | /ˌprəʊtiəʊˈlɪpəsəʊm/ | — | 含重建膜蛋白的脂质体 | 本文所有 donor / acceptor 囊泡都是 proteoliposome |
| **reconstitution** | /ˌriːˌkɒnstɪˈtjuːʃn/ | 重建、重构 | 把纯化蛋白重新组装进脂膜并恢复功能 | 本文核心方法，是"体外最小体系"的前提 |
| **lipid mixing** | /ˈlɪpɪd ˈmɪksɪŋ/ | — | 脂质混合 | 用荧光去淬灭测两层膜脂质是否连通，本文唯一的功能读出 |
| **fluorescence dequenching** | /flʊəˈresns ˌdiːˈkwentʃɪŋ/ | quench 意为"淬灭" | 荧光去淬灭 | 荧光脂质被稀释后不再自淬灭，信号上升，用于定量融合 |
| **NBD** | /ˌen biː ˈdiː/ | — | 7-nitrobenz-2-oxa-1,3-diazole，常用荧光脂质标记 | 激发 460 nm、发射 538 nm，本文的检测波长 |
| **rhodamine** | /ˈrəʊdəmiːn/ | 罗丹明 | 另一种荧光脂质标记，与 NBD 构成 FRET 对 | 与 NBD 共掺入供体膜，用于去淬灭测定 |
| **rounds of fusion** | /raʊndz əv ˈfjuːʒn/ | — | 融合轮数 | 以"脂质被稀释的倍数"表示融合程度，比百分比更物理 |
| **donor / acceptor vesicle** | /ˈdəʊnə(r)/ /əkˈseptə(r)/ | 供体 / 受体 | 带荧光脂质的一方 / 不带荧光的一方 | 二者融合后荧光被稀释，信号上升 |
| **octylglucoside (OG)** | /ˌɒktɪlˈɡluːkəsaɪd/ | — | 辛基葡萄糖苷，一种温和非离子去垢剂 | 重建时用来把膜蛋白保持在溶液中，透析时被移除 |
| **detergent dialysis** | /dɪˈtɜːdʒənt daɪˈæləsɪs/ | — | 去垢剂透析法 | 透析去除去垢剂，蛋白随脂质自发形成脂质体 |
| **flotation** | /fləʊˈteɪʃn/ | 漂浮 | 密度梯度离心使脂质体上浮以纯化 | 把重建好的脂质体与游离蛋白分开 |
| **thrombin** | /ˈθrɒmbɪn/ | 凝血酶 | 特异性切割凝血酶识别序列的蛋白酶 | 用来切掉 GST 标签，检验蛋白朝向 |
| **glutathione S-transferase (GST)** | /ˌɡluːtəˈθaɪəʊn es ˈtrænsfəreɪs/ | — | 谷胱甘肽 S-转移酶，常用融合标签 | 便于用谷胱甘肽琼脂糖纯化；也常用来增大蛋白体积做对照 |
| **His-tag** | /hɪs tæɡ/ | — | 多聚组氨酸标签 | 用 Ni-NTA 亲和纯化；本文 Sso1 用 His₈，Snc 用 His₆ |
| **moiety** | /ˈmɔɪəti/ | 一半、部分 | 分子中的某一部分/基团 | 本文指 GST 这一"部分"被切除后剩余的蛋白 |
| **Coomassie** | /ˈkuːməsi/ | — | 考马斯亮蓝，蛋白染色剂 | 用于估算重建后各蛋白的相对量 |
| **isoprenoid** | /ˌaɪsəʊˈpriːnɔɪd/ | — | 异戊二烯类脂质 | 蛋白质的脂锚定基团，如法尼基（C15）、geranylgeranyl（C20） |
| **geranylgeranyl** | /ˌdʒerənɪlˈdʒerənɪl/ | — | 牻牛儿基牻牛儿基（C20 异戊二烯基） | Ykt6 天然通过 CAAX box 接上的脂锚 |
| **CAAX box** | /kɑːks bɒks/ | — | C 端 Cys-X-X-任何氨基酸 的基序 | 异戊二烯化的识别位点；Ykt6 的 Cys76 是锚定位点 |
| **prenylation** | /ˌpriːnɪˈleɪʃn/ | — | 异戊二烯化（蛋白质的脂修饰） | Ykt6 的功能依赖此修饰，本文用它制造"锚定差异" |
| **lipid anchor** | /ˈlɪpɪd ˈæŋkə(r)/ | — | 脂锚 | 用共价连接的脂质把蛋白固定在膜上，与跨膜肽段相对 |
| **palmitoylation** | /ˌpælmɪtɔɪˈleɪʃn/ | — | 棕榈酰化（C16 饱和脂肪酸修饰） | 哺乳动物 SNAP-25 靠它锚定；酵母 Sec9 不需要 |
| **transmembrane domain (TMD)** | /trænzˈmembreɪn/ | — | 跨膜结构域 | 本文用它替换脂锚，检验"锚定方式"对融合的影响 |
| **chimera / chimaeric** | /kaɪˈmɪərə/ /kaɪˈmɪərɪk/ | 嵌合体 | 由不同蛋白片段拼接成的融合蛋白 | 本文的 Ykt6–Gos1 TMD 嵌合体 |
| **topology** | /təˈpɒlədʒi/ | 拓扑 | 蛋白在膜上的朝向与跨膜次数 | 锚定拓扑（在哪一侧、跨几次膜）会影响能否融合 |
| **topogenic signal** | /ˌtɒpəˈdʒenɪk/ | — | 决定蛋白亚细胞定位的分选信号 | 只能在完整细胞中被"读取"，体外无法体现 |
| **integral membrane protein** | /ˈɪntɪɡrəl/ | — | 整合膜蛋白（内在膜蛋白） | 含跨膜段、与膜紧密结合的蛋白 |
| **auto-inhibitory domain** | /ˌɔːtəʊ ɪnˈhɪbɪtəri/ | — | 自抑制结构域 | syntaxin 的 N 端可回折封闭自身 SNARE motif，需被移除才高效融合 |
| **vacuole** | /ˈvækjuəʊl/ | 液泡 | 酵母的液泡，相当于动物细胞的溶酶体 | 其同型融合是本文三条通路之一 |
| **homotypic fusion** | /ˌhəʊməʊˈtɪpɪk/ | homo 意为"相同" | 同型融合：同类区室之间的融合 | 液泡与液泡的融合，是最简单的融合模型 |
| **heterotypic fusion** | /ˌhetərəʊˈtɪpɪk/ | hetero 意为"不同" | 异型融合：不同区室之间的融合 | 如囊泡与高尔基、囊泡与质膜 |
| **anterograde / retrograde** | /ˈæntərəʊɡreɪd/ /ˈretrəʊɡreɪd/ | — | 顺向 / 逆向运输 | 从 ER 向高尔基 / 从高尔基回 ER，本文 Sec22、Bos1 参与两个方向 |
| **endosome** | /ˈendəsəʊm/ | — | 内体 | 胞吞后的分选站；Tlg1、Tlg2 在此发挥作用 |
| **exocytosis** | /ˌeksəʊsaɪˈtəʊsɪs/ | exo 意为"向外" | 胞吐 | 囊泡与质膜融合释放内容物，本文的质膜通路 |
| **lysosomal secretion** | /ˌlaɪsəˈsəʊməl sɪˈkriːʃn/ | — | 溶酶体分泌 | 溶酶体与质膜融合释放内容物；本文用其解释 Nyv1 与质膜 t-SNARE 的融合 |
| **sporulation** | /ˌspɔːrjuˈleɪʃn/ | — | 孢子形成 | 酵母在营养匮乏时的减数分裂与孢子形成，Spo20 特异表达于此 |
| **Saccharomyces cerevisiae** | /ˌsækəˈrəʊmaɪsiːz ˌserɪˈvɪsiː/ | — | 酿酒酵母 | 本文的模式生物：基因组已测序、SNARE 已全部注释 |
| **protease** | /ˈprəʊtieɪz/ | — | 蛋白酶 | 用于检测蛋白朝向（朝外者被消化） |
| **background subtraction** | /ˈbækɡraʊnd səbˈtrækʃn/ | — | 背景扣除 | 本文用"被抑制的融合反应"或"无蛋白脂质体"作为背景 |
| **arginine** | /ˈɑːdʒɪniːn/ | 精氨酸 | 带正电的碱性氨基酸 | SNARE 0 层的 R 残基，曾被怀疑决定特异性 |
| **mutagenesis** | /ˌmjuːtəˈdʒenəsɪs/ | — | 诱变 | 定点突变用于构造 Ykt6(C76S) 等突变体 |
| **temporal / spatial control** | /ˈtempərəl/ /ˈspeɪʃl/ | — | 时间 / 空间控制 | 本文用来区分 SNARE（静态编码）与 Rab/tether（动态调控） |

---

> 图片来自与网络公开资料。
