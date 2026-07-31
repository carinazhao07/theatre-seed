export const site = {
  name: "种戏",
  nameEn: "Theatre Seed",
  tagline: "种下心中戏剧的种子",
  description:
    "「种戏」是零门槛、纯公益、聚焦县域的公益戏剧教育项目，为欠发达地区青年提供免费的戏剧体验与舞台实践。",
  contactName: "赵宁淇",
  contactEmail: "carina.zhao@yale.edu",
  contactNote: "联系方式如下。",
};

export const nav = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于我们" },
  { href: "/camps", label: "营期与归档" },
  { href: "/stories", label: "声音与改变" },
  { href: "/join", label: "参与支持" },
] as const;

export const impactStats = [
  { label: "累计学员", value: 50, suffix: "+", note: "三届近五十名伙伴" },
  { label: "零基础比例", value: 95, suffix: "%+", note: "第一次站上舞台" },
  { label: "演出场次", value: 8, suffix: "+", note: "乡村 · 古城 · 城市巡演" },
  { label: "营期届数", value: 4, suffix: "", note: "冬夏双轨持续生长" },
] as const;

export const features = [
  {
    title: "零门槛",
    body: "为从未接触过戏剧的年轻人敞开大门。舞台不属于少数人，而属于每一个愿意尝试的人。",
  },
  {
    title: "纯公益",
    body: "导师志愿、学员全程免费。食宿、交通、物资与演出费用由公益资金承担，让戏剧回归教育本质。",
  },
  {
    title: "聚焦县域",
    body: "服务湖南、广西等 PEER 县域青年。把有限的公益资源，投向最需要被看见的人。",
  },
] as const;
