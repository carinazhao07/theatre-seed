/** Chinese homepage copy — mirrors `homeEn` shape */
export const homeZh = {
  nav: [
    { label: "首页", href: "/" },
    { label: "关于我们", href: "/about" },
    { label: "营期与归档", href: "/camps" },
    { label: "声音与改变", href: "/stories" },
    { label: "参与支持", href: "/join" },
  ],
  brand: { seal: "种", name: "种戏", sub: "THEATRE SEED" },
  hero: {
    title: "种戏",
    verticalLabel: "THEATRE SEED · THEATRE · EDUCATION",
    tagline: "种下心中戏剧的种子",
    body: "为零基础县域青年提供免费的戏剧教育与舞台实践，在共创与持续中练习表达，在观众面前被真正看见。",
    ctaAbout: "了解种戏",
    ctaCamps: "查看营期归档 →",
  },
  about: {
    eyebrow: "ABOUT THEATRE SEED",
    line1: "关于",
    line2: "种戏",
    body: "戏剧为年轻人提供的，不只是一次演出机会，更是一段从「尝试表达」到「被他人听见」的成长旅程。",
    watermark: "剧",
    pillars: [
      {
        num: "01",
        title: "零门槛",
        desc: "为从未接触过戏剧的年轻人打开大门。舞台不属于少数人，而属于每一个愿意尝试的人。",
      },
      {
        num: "02",
        title: "纯公益",
        desc: "导师志愿，学员全程免费：食宿、交通、物资与演出费用由公益资金承担，让戏剧回归教育本质。",
      },
      {
        num: "03",
        title: "聚焦县城",
        desc: "服务湖南、广西等PEER县域青年，把有限的公益资源，投向最需要被看见的人。",
      },
    ],
    imgAlt: "营员发声训练",
  },
  impact: {
    title: "影响力",
    subtitle: "种子正在发芽：每一届营期，都是一次被认真对待的第一次。",
    stats: [
      { num: 50, suffix: "+", label: "累计学员", sub: "三届近五十名伙伴" },
      { num: 95, suffix: "%+", label: "零基础比例", sub: "第一次站上舞台" },
      { num: 8, suffix: "+", label: "演出场次", sub: "乡村 · 古城 · 城市剧演" },
      { num: 4, suffix: "", label: "营期届数", sub: "每届营均持续生长" },
    ],
  },
  archive: {
    title: "历届营期",
    intro: "从广南侗寨到黔阳古城，再到嘉兴舞台——每一届都值得被完整记住。",
    ongoingTag: "进行中",
    endedTag: "已结束",
    archiveSoon: "归档即将开放",
    cta: "进入营期归档 →",
  },
  voices: {
    watermark: "声音与改变",
    imgAlt: "营期伙伴",
    moreCta: "更多声音与改变 →",
  },
  support: {
    title: "参与种戏",
    body: "无论是成为导师志愿者、公益捐助者，还是分享种戏的故事——你的参与，让更多种子有机会发芽。",
    cta: "了解如何支持 →",
  },
  footer: {
    taglineLines: ["种下心中戏剧的种子", "零门槛 · 纯公益 · 聚焦县城"],
    navLabel: "导航",
    contactLabel: "联系",
    contactLead: "发邮件给负责人赵宁淇",
    contactEmail: "carina.zhao@yale.edu",
    copyright: `© ${new Date().getFullYear()} 种戏 · 种下心中戏剧的种子`,
  },
  menuAria: "菜单",
} as const;
