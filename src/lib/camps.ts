export type CampStatus = "completed" | "ongoing" | "upcoming";

export type ScheduleItem = {
  date: string;
  label: string;
  phase: "arrival" | "training" | "workshop" | "rehearsal" | "performance" | "wrap";
  highlights: string[];
};

export type Production = {
  title: string;
  premise?: string;
  body: string;
};

export type Camp = {
  slug: string;
  season: string;
  year: number;
  title: string;
  subtitle: string;
  dates: string;
  location: string;
  participants: string;
  status: CampStatus;
  /** false = 进行中，列表可见但不可进入归档 */
  openable?: boolean;
  cover: string;
  gallery: string[];
  summary: string;
  overview: string[];
  mentors?: string;
  venues?: string[];
  highlights?: string[];
  modules: { title: string; body: string }[];
  productionsDetailed?: Production[];
  letters?: { to: string; excerpt: string }[];
  quotes: { text: string; author: string }[];
  wechatUrl?: string;
  productions?: string[];
  schedule?: ScheduleItem[];
};

export function isCampOpenable(camp: Camp) {
  return camp.openable !== false && camp.status !== "ongoing";
}

export const camps: Camp[] = [
  {
    slug: "2025-winter",
    season: "冬令营",
    year: 2025,
    title: "种下心中戏剧的种子",
    subtitle: "从零到一，三天共创原创演出",
    dates: "2025.01.16 – 01.19（三天四晚）",
    location: "广西龙胜 · 广南村",
    participants: "12 位学员 + 导师团队",
    status: "completed",
    cover: "/images/gallery-20.jpg",
    gallery: [
      "/images/gallery-20.jpg",
      "/images/gallery-21.jpg",
      "/images/gallery-25.jpg",
      "/images/gallery-06.jpg",
      "/images/gallery-43.jpg",
      "/images/gallery-29.jpg",
      "/images/gallery-05.jpg",
    ],
    mentors: "导师秋秋（上戏）· 发起人宁淇 · 舞监呱呱等",
    venues: ["广南侗寨保护中心（村民公演）"],
    highlights: [
      "种戏首届营期，零基础共创",
      "剪影剧情 +「神树」布景",
      "走村入户邀请村民观演",
      "学唱 Beyond《Amani》",
    ],
    summary:
      "2025 年 1 月 16 日至 19 日，「种戏」冬令营首次落地广西龙胜县广南村。十二位来自各地的伙伴，与毕业于上海戏剧学院、有丰富话剧表演导演经验的导师秋秋相聚于此，用三天时间完成一场从零到舞台的戏剧探索。他们中多数人从未接触过戏剧，却在密集的表演训练、即兴创作与团队协作中，最终呈现出一场充满生命力的原创演出，让寂静的山野第一次回荡起属于自己的戏剧之声。",
    overview: [
      "Day 1：欢迎与破冰。不久前才相识的大家围炉夜话，彼此信任，分享脆弱与记忆。",
      "Day 2：表演台词训练——腹部发声、情绪表达；话剧理论通识课；学唱歌谣《Amani》。",
      "Day 3：即兴表演与肢体探索；粗裁服装、在纸箱上绘画；搭建「神树」与剪影背景；制作海报并入村宣传。",
      "Day 4：剧本与剪影剧情技术合成、彩排冲刺、正式演出与庆功复盘。",
    ],
    productions: ["学员共创原创短剧（含剪影剧情）"],
    productionsDetailed: [
      {
        title: "共创汇报演出",
        body: "营员以个人经历为灵感，共同构思剧本与剧情，结合剪影艺术与纸箱、「神树」等布景，亲手裁剪服装、设计海报，并走进村子邀请村民。从技术合成到彩排，每个环节由营员完成，真正体验戏剧创作全过程。",
      },
    ],
    modules: [
      {
        title: "表演训练",
        body: "从基础情绪表达开始，用「喜怒哀乐怕」五种情感演绎同一句台词；分组演绎母女、闺蜜、情人等关系；通过眼神交流的专注力训练，提升舞台注意力与默契。",
      },
      {
        title: "戏剧游戏",
        body: "「接抛球」在静默中仅凭眼神传递小球；「我是一棵树」即兴构建小故事；Music Toy 以身体为乐器编织即兴合奏——把关系一点点连在一起。",
      },
      {
        title: "音乐体验 · Amani",
        body: "合唱演奏 Beyond《Amani》（斯瓦希里语「和平」）。不同乐器共同演绎，让音乐成为连接彼此的桥梁，感受共鸣与力量。",
      },
      {
        title: "共创演出",
        body: "以个人经历为灵感构思剧本与剧情，结合剪影艺术与纸箱、「神树」等布景；亲手裁剪服装、设计海报，并走进村子邀请村民。最终在广南侗寨保护中心呈现光影与歌声交织的汇报演出。",
      },
      {
        title: "三天之后",
        body: "节奏很快，却神奇地完成了演出任务。复盘环节「看见彼此和自己」，收获真挚祝福——三天短如一瞬，却足以让陌生人成为家人。AMANI NAKUPENDA（爱与和平）。",
      },
    ],
    wechatUrl: "https://mp.weixin.qq.com/s/E2kJP-k8AFNlvBLqRIOnqA",
    schedule: [
      {
        date: "Day 1",
        label: "欢迎与破冰",
        phase: "arrival",
        highlights: ["相识围炉夜话", "分享脆弱与记忆", "建立信任"],
      },
      {
        date: "Day 2",
        label: "表演与理论",
        phase: "training",
        highlights: ["腹部发声 · 情绪表达", "话剧理论通识", "学唱 Amani"],
      },
      {
        date: "Day 3",
        label: "即兴与制作",
        phase: "workshop",
        highlights: [
          "即兴表演 · 肢体探索",
          "服装粗裁 · 纸箱绘画",
          "搭建神树与剪影",
          "哈姆雷特台词试练 · 入村宣传",
        ],
      },
      {
        date: "Day 4",
        label: "合成与公演",
        phase: "performance",
        highlights: ["剧本与剪影技术合成", "彩排冲刺", "正式演出", "庆功复盘"],
      },
    ],
    quotes: [
      {
        text: "从畏惧舞台到享受舞台，戏剧让我收获了自信。我曾以为表演是件难事，但通过一遍遍排练，正式演出时一点也不紧张。",
        author: "2025 冬令营学员",
      },
      {
        text: "这里就像是疗养院，一年的焦虑在这里被疗愈。我重新变回一个话痨，拥有源源不断的分享欲。",
        author: "2025 冬令营学员",
      },
      {
        text: "没想到有那么多乡亲观众来看，超级感动！复盘环节看见了彼此和自己，收获可以滋养很久的时光。",
        author: "正式演出与复盘反馈",
      },
      {
        text: "节奏很快，但是很神奇——我们在如此短的时间内完成了演出，也和伙伴们更加亲密。",
        author: "技术合成与彩排",
      },
      {
        text: "当一个灯光师特别有成就感！幕布前后看不一样，前面看会更美更有氛围感。",
        author: "剪影剧情创作",
      },
      {
        text: "2025 才过去 19 天，我已经拥有今年最想珍藏的时刻。",
        author: "2025 冬令营学员",
      },
    ],
  },
  {
    slug: "2025-summer",
    season: "夏令营",
    year: 2025,
    title: "让戏剧的种子生长出枝桠",
    subtitle: "经典剧目完整排演与双城巡演",
    dates: "2025.07.03 – 07.14（营期约 10 天，含线上共学）",
    location: "广西龙胜广南村 + 长沙",
    participants: "17 人（导演 1 · 共创导师 3 · 演员组 9 · 幕后 / 摄影宣传等）",
    status: "completed",
    cover: "/images/mode-summer.jpg",
    gallery: [
      "/images/mode-summer.jpg",
      "/images/gallery-24.jpg",
      "/images/gallery-33.jpg",
      "/images/gallery-46.jpg",
      "/images/gallery-34.jpg",
      "/images/gallery-35.jpg",
      "/images/gallery-11.jpg",
      "/images/gallery-12.jpg",
    ],
    mentors: "导演宁淇 · 嘉辰 / 嘎嘎 / April 等工作坊导师",
    venues: ["广南村首演（村民观众）", "长沙挚友营巡演（120+ 观众）"],
    highlights: [
      "营前 4–6 周线上共学与试镜",
      "经典话剧《驴得水》完整排演",
      "广南村 + 长沙双场巡演",
      "木偶 / 布景 / 音效灯光工作坊",
      "侗寨田野、溪畔围读与赶集",
    ],
    summary:
      "2025 年 7 月 3 日至 14 日，第一届「种戏」夏令营在广西龙胜县广南村顺利举办。十七位来自各地的伙伴用十天时间投入排练、共创与探索。在导演与导师们的带领下，完成了《驴得水》的排演与打磨，并带着这部戏走上巡演：一场在广南村演给村民，一场在长沙挚友营呈现给更多观众。一月在广南埋下的种子，于七月悄然发芽。",
    overview: [
      "模块一 · 戏剧排练与演出：从围读剧本开始，溪水边对词，青石板上走位，在妆造下完成定妆照；广南与长沙两场正式演出。",
      "模块二 · 戏剧工作坊：制作木偶、设计布景、体验音效与灯光，从幕后理解一场戏的构成与张力。",
      "模块三 · 在地探索：手拉手走进黄昏稻田，溪边嬉戏，学唱侗歌《欢迎你到侗寨来》，感受山村节奏。",
    ],
    productions: ["《驴得水》"],
    productionsDetailed: [
      {
        title: "《驴得水》",
        body: "黑色幽默经典话剧。演员从忘词卡壳到脱稿衔接，把角色一点点演进骨血。广南村贴上「三民小学」字条，村民围坐院子观看；长沙谢幕，为整个夏天画上温热又坚定的句点。",
      },
    ],
    modules: [
      {
        title: "排戏记",
        body: "从线上剧本围读一头扎进戏里。站在台前试走位，绕到幕后揣测人物。顶着酷暑排练后冲到溪边泡脚背词——自然风是场灯，水声是配乐。广南每个角落都留着把戏从纸上搬到脚下的痕迹。",
      },
      {
        title: "定妆记",
        body: "嘎嘎的笔在脸上游走，给角色搭桥：孙校长的皱纹、铁男的锋芒忽然近得能触到。对着剧照拍定妆照，快门响时像回到了那个年代。",
      },
      {
        title: "演出记 · 广南与长沙",
        body: "灯一亮面对黑压压人群，紧张电流蹿过全身，但伙伴的拥抱与眼神足以稳住心跳。哪怕忘词也不怕——台上总有人会接住你。长沙场地受限、仅有一次深夜完整排练，大家仍互相支持到凌晨，最终圆满完成。",
      },
      {
        title: "工作坊",
        body: "一个水杯也可以是一座舞台。腹部发声投向田野；报纸捏出角色人偶；亲任音效师与灯光师——一束光、一个音，足以点燃场景情绪。",
      },
      {
        title: "在地探索",
        body: "手拉手走进黄昏稻田；溪畔围读，台词混着流水声；学唱侗歌；恰逢一年仅两次的市集，侗布与山货香气交织。围读声、流水声、歌唱声，成为广南夏日三重奏。",
      },
    ],
    letters: [
      {
        to: "孙恒海",
        excerpt:
          "你是个浪漫的革命主义者……一棵树它的根已经烂了，你怎么能强求它结果呢。或许现在过去的只是一个驴得水，但未来呢？如果不阻止其根，不进行改革，不认清现实，未来只会有千千万万个驴得水。",
      },
      {
        to: "一曼",
        excerpt:
          "其实刚看剧本的时候，我是觉得「你怎么这样」，但到后来，一遍又一遍地细读和排练，我慢慢开始理解你的委屈、痛苦、愤怒……如果可以，我希望你生逢其时，能好好读书，好好成长。",
      },
      {
        to: "周铁男",
        excerpt:
          "我理解你，又不理解你……你是周铁男，是那个年代曾经怀抱无限梦想的知识分子，也是最终迷失在时代洪流中的一员。而我所能做的，大概只有记住你的故事。",
      },
      {
        to: "佳佳",
        excerpt:
          "好久不见，我们素未谋面却又相伴已久……在战火纷争的年代，记得先保护好自己，再为自己坚守的理想信念挺身而出。期待再会！",
      },
      {
        to: "老婆",
        excerpt:
          "大胆的向前走吧！！不管你看到什么，听到了什么，那都只是人生的某一种方式！你可以选择成为任何一种可能的你！",
      },
    ],
    quotes: [
      {
        text: "哪怕忘词也不怕了，因为我们知道——台上总有人会接住你。",
        author: "2025 夏令营学员",
      },
      {
        text: "谢幕时手拉手，那种自己完成一部话剧的成就感很爽；关灯一起唱歌，夜聊约定下一次见面。",
        author: "2025 夏令营学员",
      },
      {
        text: "坐在河边唱歌，冰凉的溪水从脚趾间穿过……人生有那么几个瞬间，足矣。",
        author: "2025 夏令营学员",
      },
      {
        text: "在这里每个人都可以成为自己。那种毫无顾忌地把经历和感悟分享出来的感觉，很温暖。",
        author: "2025 夏令营学员",
      },
      {
        text: "我们没有被任何困难打败。仅有一次完整排练也在晚上九点半以后，大家仍充满热情排练到凌晨——团结力量大。",
        author: "长沙巡演复盘",
      },
    ],
    wechatUrl: "https://mp.weixin.qq.com/s/Bb-3qrC6E-ap42ea1wq34g",
  },
  {
    slug: "2026-winter",
    season: "冬令营",
    year: 2026,
    title: "戏剧种子的冬日回响",
    subtitle: "古城共创，两部原创短剧双场巡演",
    dates: "2026.02.04 – 02.08",
    location: "湖南黔阳古城 + 中方一中",
    participants: "15 位伙伴 + 导师团队",
    status: "completed",
    cover: "/images/gallery-37.jpg",
    gallery: [
      "/images/gallery-37.jpg",
      "/images/gallery-38.jpg",
      "/images/gallery-40.jpg",
      "/images/gallery-41.jpg",
      "/images/gallery-42.jpg",
      "/images/gallery-39.jpg",
      "/images/gallery-48.jpg",
      "/images/gallery-32.jpg",
    ],
    mentors: "宁淇 · 呱呱 等",
    venues: ["黔阳古城茶馆", "中方一中 / 冬旅人营点"],
    highlights: [
      "种戏冬令营首次落地黔阳古城",
      "从零共创两部原创短剧",
      "学员参与灯光与音效设计",
      "茶馆雨中首演 + 高中生场巡演",
    ],
    summary:
      "2026 年 2 月 4 日至 8 日，「种戏」冬令营首次落地湖南省怀化市黔阳古城。十五位伙伴用四天完成从零到舞台的探索：共同书写剧本、完成灯光及音效设计，创作《爱要大声说出口》与《延迟修复》，并在古城茶馆与中方一中 / 冬旅人营点完成巡演。从零到一的舞台经验里，藏着即兴创作的好奇心与团队协作的包容力——尝试戏剧，也许并不像预设的那么艰难。",
    overview: [
      "Day 1：欢迎与破冰。带着线上共学任务与自创人物，围坐分享「人生碎片」，信任与脆弱在夜晚流转。",
      "Day 2：表演训练（腹部发声、情绪表达）；线上学习灯光音效；按角色主题分组完成剧本初稿。",
      "Day 3：即兴与肢体、道具音效制作、剧本打磨与排练。",
      "Day 4：彩排冲刺、黔阳演出、中方演出与庆功复盘。",
    ],
    productions: ["《爱要大声说出口》", "《延迟修复》"],
    productionsDetailed: [
      {
        title: "《爱要大声说出口》",
        premise: "一个人在火车上遇到了曾经喜欢的人",
        body: "沉默的少年因怯懦错过爱情，别扭的父亲用伤人的话语包裹笨拙的爱。即兴碎片拼成载满遗憾与和解的列车。雨中茶馆首演平静无慌；面对高中生的笑声与共情，再次读懂种戏——从来不是完美表演，而是让每一份表达都被看见。",
      },
      {
        title: "《延迟修复》",
        premise: "一个人在医院遇见了已经过世的母亲",
        body: "忙碌的孩子在母亲去世后翻看生前照片，看见母亲角色之外的生活。三幕跨越青年到老年：追梦者、不被看好的女儿、隐忍的妻子、坚强的姐姐、不想添麻烦的母亲。延迟修复的是对女性身份的认识与亲情的捕捉——让爱不用延迟，即刻修复。",
      },
    ],
    modules: [
      {
        title: "剧本共创",
        body: "安全包容的氛围里，没有对错，任何真实回答都被欢迎。茶馆包厢里播放医院背景音，伙伴们飞扬思绪再围坐碰撞——天马行空与才思敏捷，慢慢浮现出可打动人心的故事。",
      },
      {
        title: "YES AND 与即兴",
        body: "「没有完美的表演，意外也是舞台魅力的一部分。」即兴中看见创作与打开自己；舞台上放心地把自己交给伙伴，也考虑到对方能否接住。",
      },
      {
        title: "双重观众",
        body: "第一次在黔阳茶馆，雨丝无声鼓励；第二次面对鲜活高中生，热烈反应让表达被听见。落幕时热泪盈眶，是给彼此最珍贵的礼物。",
      },
      {
        title: "被细腻对待的冬天",
        body: "不想忘记导演的耐心、排练的珍贵、雨天棚下的拥抱鼓励。戏里戏外，我们都是自己人生的主角——也请记得：爱要大声说出口。",
      },
    ],
    schedule: [
      {
        date: "Day 1",
        label: "破冰与人生碎片",
        phase: "arrival",
        highlights: ["线上共学人物分享", "围坐夜话", "信任与脆弱流转"],
      },
      {
        date: "Day 2",
        label: "训练与初稿",
        phase: "training",
        highlights: ["腹部发声 · 情绪表达", "灯光音效学习", "分组剧本初稿"],
      },
      {
        date: "Day 3",
        label: "即兴与打磨",
        phase: "workshop",
        highlights: ["即兴 · 肢体探索", "道具与音效制作", "剧本完善与排练"],
      },
      {
        date: "Day 4",
        label: "彩排与巡演",
        phase: "performance",
        highlights: ["彩排冲刺", "黔阳演出", "中方演出", "庆功复盘"],
      },
    ],
    quotes: [
      {
        text: "原来只需要短短几天，一群人真的可以完成这场关于「爱」的修行。有些看似不可能的事，只要一起走，就会走出答案。",
        author: "《爱要大声说出口》组",
      },
      {
        text: "好的东西总是慢慢浮现出价值。我们的剧本，也是在包容的土壤里，慢慢变成可以打动人心的故事。",
        author: "洁锴",
      },
      {
        text: "舞台上我们可以放心地把自己交给舞台、交给伙伴。走进戏剧，并不需要很巨大的开始。",
        author: "《延迟修复》组",
      },
      {
        text: "从来不是完美的表演，而是让每一份表达都被看见、被听见。",
        author: "高中生场之后",
      },
      {
        text: "戏里戏外，我们都是自己人生的主角。也请记得：爱要大声说出口！",
        author: "2026 冬令营学员",
      },
    ],
    wechatUrl: "https://mp.weixin.qq.com/s/SNeful33MoXp-rq7dwDyEQ",
  },
  {
    slug: "2026-summer",
    season: "夏令营",
    year: 2026,
    title: "种戏夏令营 2026",
    subtitle: "嘉兴十一日，排练 · 工作坊 · 三场演出",
    dates: "2026.07.23 – 08.02",
    location: "浙江嘉兴",
    participants: "演员组 · 幕后组 · 导师团队",
    status: "ongoing",
    openable: false,
    cover: "/images/mode-summer.jpg",
    gallery: [
      "/images/gallery-36.jpg",
      "/images/gallery-12.jpg",
      "/images/gallery-34.jpg",
      "/images/gallery-35.jpg",
      "/images/gallery-14.jpg",
      "/images/gallery-10.jpg",
    ],
    venues: ["嘉兴演出", "嘉年华演出", "嘉兴剧场演出"],
    highlights: [
      "经典剧目长周期排演",
      "舞美 / 灯光工作坊",
      "定妆照与外出宣传",
      "三场正式演出收束",
    ],
    summary:
      "2026 夏令营在嘉兴进行。十一天密集排练与工作坊，涵盖剧本分析、试镜选角、舞美灯光、定妆宣传与技术合成，并以三场演出收束——嘉兴演出、嘉年华演出、嘉兴剧场演出。",
    overview: [
      "延续夏令营模式：营前共学与试镜 + 线下深打磨经典剧目。",
      "日节奏：早功 → 上午下午排练 → 晚间工作坊/演出 → 每日复盘。",
      "演出周：7.31 / 8.1 / 8.2 三场，并以庆功宴与结项复盘画上句点。",
    ],
    productions: ["经典剧目排演（进行中）"],
    modules: [
      {
        title: "日节奏",
        body: "早功开场，上午与下午排练/训练，晚间工作坊或演出，每日复盘收束——用稳定节律把戏一点点立起来。",
      },
      {
        title: "工作坊",
        body: "舞美设计、灯光、定妆照与外出宣传，让学员同时理解台上与幕后。",
      },
      {
        title: "演出周",
        body: "7.31 嘉兴演出 · 8.1 嘉年华演出 · 8.2 嘉兴剧场演出，并以庆功宴与结项复盘收束。",
      },
    ],
    quotes: [
      {
        text: "故事永远说不完，种戏种下的种子在缓缓发芽，抽出枝桠，持续生长。",
        author: "种戏团队",
      },
    ],
    schedule: [
      {
        date: "07.23",
        label: "抵达嘉兴",
        phase: "arrival",
        highlights: ["报到入住", "欢迎仪式 + 破冰"],
      },
      {
        date: "07.24",
        label: "打开戏",
        phase: "training",
        highlights: ["剧本分析", "表演训练", "试镜选角"],
      },
      {
        date: "07.25",
        label: "交流排练",
        phase: "rehearsal",
        highlights: ["交流分享", "剧目排练"],
      },
      {
        date: "07.26",
        label: "舞美工作坊",
        phase: "workshop",
        highlights: ["舞美设计工作坊", "剧目排练"],
      },
      {
        date: "07.27",
        label: "灯光工作坊",
        phase: "workshop",
        highlights: ["剧目排练", "灯光工作坊"],
      },
      {
        date: "07.28",
        label: "定妆与宣传",
        phase: "workshop",
        highlights: ["定妆照", "外出宣传"],
      },
      {
        date: "07.29",
        label: "技术合成",
        phase: "rehearsal",
        highlights: ["技术合成彩排", "连排推进"],
      },
      {
        date: "07.30",
        label: "全妆彩排",
        phase: "rehearsal",
        highlights: ["全妆彩排 1 & 2"],
      },
      {
        date: "07.31",
        label: "嘉兴演出",
        phase: "performance",
        highlights: ["演出前准备", "嘉兴演出"],
      },
      {
        date: "08.01",
        label: "嘉年华演出",
        phase: "performance",
        highlights: ["演出前准备", "嘉年华演出"],
      },
      {
        date: "08.02",
        label: "剧场收束",
        phase: "wrap",
        highlights: ["嘉兴剧场演出", "庆功宴 + 结项复盘"],
      },
    ],
  },
];

export function getCamp(slug: string) {
  return camps.find((c) => c.slug === slug);
}

export function getOngoingCamp() {
  return camps.find((c) => c.status === "ongoing");
}
