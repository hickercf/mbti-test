const scaleSteps = [
  { value: -3, label: "非常" },
  { value: -2, label: "相当" },
  { value: -1, label: "稍微" },
  { value: 0, label: "中立" },
  { value: 1, label: "稍微" },
  { value: 2, label: "相当" },
  { value: 3, label: "非常" }
];

const questions = [
  { text: "在聚会中，你通常更喜欢：", dimension: "EI", options: ["与很多人交流，认识新朋友", "只和熟悉的朋友深入聊天"] },
  { text: "你更倾向于如何获取能量：", dimension: "EI", options: ["通过与人互动和社交活动", "通过独处和自我反思"] },
  { text: "面对一个新环境，你会：", dimension: "EI", options: ["主动与他人交谈，快速融入", "先观察，等待别人来接触你"] },
  { text: "在团队讨论中，你通常：", dimension: "EI", options: ["积极发言，分享自己的想法", "先倾听他人的观点，再谨慎表达"] },
  { text: "周末你更愿意如何度过：", dimension: "EI", options: ["和朋友一起外出活动", "在家安静地做自己的事"] },
  { text: "做决定时，你更倾向于：", dimension: "EI", options: ["和他人讨论后决定", "独自思考后决定"] },
  { text: "在电话和文字消息之间，你更喜欢：", dimension: "EI", options: ["直接打电话沟通", "发文字消息或邮件"] },
  { text: "工作中，你更倾向于：", dimension: "EI", options: ["和他人一起合作完成任务", "独立完成自己的部分"] },
  { text: "你更喜欢的沟通方式是：", dimension: "EI", options: ["当面或语音交流", "书面或文字沟通"] },
  { text: "到一个新城市旅行，你更可能：", dimension: "EI", options: ["主动和当地人聊天交朋友", "安静地自己探索感受城市"] },
  { text: "你更关注：", dimension: "SN", options: ["具体的事实和细节", "抽象的概念和可能性"] },
  { text: "学习新事物时，你更喜欢：", dimension: "SN", options: ["按部就班，从基础到高级", "先了解整体框架，再填充细节"] },
  { text: "面对一个问题，你更信任：", dimension: "SN", options: ["过往的经验和实用方法", "直觉和灵光一闪的想法"] },
  { text: "阅读时你更容易被什么吸引：", dimension: "SN", options: ["写实的描述和具体的情节", "深刻的隐喻和象征意义"] },
  { text: "在工作中，你更重视：", dimension: "SN", options: ["实际的操作和执行效率", "创新的想法和未来规划"] },
  { text: "描述一个物品时，你会先说：", dimension: "SN", options: ["它的外观、材质、用途", "它给你带来的感受和联想"] },
  { text: "做项目时，你更倾向于：", dimension: "SN", options: ["遵循已有的成功模板", "尝试全新的方法和思路"] },
  { text: "看地图时，你更关注：", dimension: "SN", options: ["具体的路线和地标名称", "整体方位和区域布局"] },
  { text: "你更喜欢哪种类型的故事：", dimension: "SN", options: ["基于真实事件改编的", "充满想象力的奇幻设定"] },
  { text: "学习一项新技能时，你更重视：", dimension: "SN", options: ["掌握每个具体步骤", "理解背后的原理框架"] },
  { text: "评价一件事时，你首先考虑：", dimension: "TF", options: ["逻辑是否严密，是否合理", "是否公平，是否顾及他人感受"] },
  { text: "当朋友向你倾诉烦恼时，你通常会：", dimension: "TF", options: ["帮他分析问题，提出解决方案", "先共情和安慰，给予情感支持"] },
  { text: "在做重要决定时，你更依赖：", dimension: "TF", options: ["客观的事实和数据分析", "内心的价值观和情感判断"] },
  { text: "你更欣赏哪种特质：", dimension: "TF", options: ["理性和公正", "同理心和包容"] },
  { text: "面对批评时，你更看重：", dimension: "TF", options: ["批评的内容是否客观正确", "批评的方式是否尊重人"] },
  { text: "在争论中，你更倾向于：", dimension: "TF", options: ["坚持事实，即使可能伤害感情", "维护和谐，避免直接冲突"] },
  { text: "你认为更重要的是：", dimension: "TF", options: ["坚持原则", "体谅他人"] },
  { text: "看到社会新闻时，你首先关注的是：", dimension: "TF", options: ["事件的来龙去脉和逻辑", "当事人的感受和处境"] },
  { text: "给他人提建议时，你更倾向于：", dimension: "TF", options: ["直接指出问题所在", "先肯定再委婉表达"] },
  { text: "一个好的决定应该是：", dimension: "TF", options: ["经得起逻辑推敲的", "让大多数人感到舒适的"] },
  { text: "你对待日程安排的态度是：", dimension: "JP", options: ["喜欢提前计划，按部就班", "喜欢灵活应变，保持开放"] },
  { text: "面对截止日期，你通常：", dimension: "JP", options: ["提前规划，尽早完成", "在压力下高效冲刺"] },
  { text: "你的工作桌面通常是：", dimension: "JP", options: ["整洁有序，每样东西有固定位置", "看起来有些乱，但你知道东西在哪"] },
  { text: "旅行时你更喜欢：", dimension: "JP", options: ["提前做好详细的行程规划", "随性而行，遇到什么玩什么"] },
  { text: "对于待办事项，你倾向于：", dimension: "JP", options: ["列出清单，逐项完成", "记在脑子里，灵活处理"] },
  { text: "你更享受哪种工作方式：", dimension: "JP", options: ["有明确的结构和规则", "自由度高，可以即兴发挥"] },
  { text: "当一个计划被打乱时，你会：", dimension: "JP", options: ["感到不安，希望尽快恢复秩序", "觉得无所谓，顺势调整"] },
  { text: "对于金钱管理，你更倾向于：", dimension: "JP", options: ["制定详细预算并严格执行", "大致有数，花得比较随性"] },
  { text: "你更喜欢的环境是：", dimension: "JP", options: ["井井有条，每样东西有固定位置", "轻松随意，有生活气息"] },
  { text: "面对多项任务时，你更习惯：", dimension: "JP", options: ["逐一完成，做完一件再做下一件", "多任务并行，灵活切换"] }
];

const icons = {
  diamond: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="36" fill="#f0ded8"/><path d="M40 16L56 40 40 64 24 40z" stroke="#b8695a" stroke-width="2.5" stroke-linejoin="round"/><path d="M40 24L48 40l-8 16-8-16z" fill="#b8695a"/></svg>`,
  bulb: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="36" fill="#f0ded8"/><path d="M33 38a7 7 0 1 1 14 0c0 3-2 6-4 7l-1 1v5h-4v-5l-1-1c-2-1-4-4-4-7z" stroke="#b8695a" stroke-width="2.5" stroke-linejoin="round"/><rect x="36" y="53" width="8" height="3" rx="1.5" fill="#b8695a"/><path d="M37 48h6" stroke="#b8695a" stroke-width="2" stroke-linecap="round"/></svg>`,
  crown: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="36" fill="#f0ded8"/><path d="M24 50l8-20 8 8 8-8 8 20H24z" fill="#b8695a"/><rect x="26" y="52" width="28" height="4" rx="2" fill="#b8695a"/><circle cx="32" cy="48" r="2" fill="#f0ded8"/><circle cx="40" cy="46" r="2" fill="#f0ded8"/><circle cx="48" cy="48" r="2" fill="#f0ded8"/></svg>`,
  lightning: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="36" fill="#f0ded8"/><path d="M44 18L26 44h12L34 62l20-26H42l4-18z" fill="#b8695a"/></svg>`,
  lotus: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="36" fill="#f0ded8"/><path d="M40 28c-4 0-8 3-8 7 0 6 8 8 8 8s8-2 8-8c0-4-4-7-8-7z" fill="#b8695a" opacity=".8"/><path d="M34 38c-2 2-3 5-1 6 2 2 7-1 7-1s5 3 7 1c2-1 1-4-1-6" fill="#b8695a" opacity=".5"/><path d="M40 24c-1 0-2 1-2 2" stroke="#b8695a" stroke-width="2" stroke-linecap="round"/></svg>`,
  cloud: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="36" fill="#f0ded8"/><path d="M30 48c-4 0-6-2-6-5 0-3 2-5 5-5 0-4 3-7 7-7s7 3 7 7c3 0 5 2 5 5 0 3-2 5-6 5H30z" fill="#b8695a"/><path d="M38 36l2-4 2 4h-4zM48 42l2-4 2 4h-4z" fill="#f0ded8"/></svg>`,
  flame: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="36" fill="#f0ded8"/><path d="M40 20c-2 6-8 10-8 16 0 4 2 8 8 8s8-4 8-8c0-6-6-10-8-16z" fill="#b8695a" opacity=".9"/><path d="M40 28c-1 3-4 5-4 8 0 2 1 4 4 4s4-2 4-4c0-3-3-5-4-8z" fill="#f0ded8"/></svg>`,
  wings: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="36" fill="#f0ded8"/><path d="M24 32c0 8 8 12 16 6 0-8-6-14-16-6z" fill="#b8695a"/><path d="M56 32c0 8-8 12-16 6 0-8 6-14 16-6z" fill="#b8695a"/><path d="M40 38v12M40 50l-3-3M40 50l3-3" stroke="#b8695a" stroke-width="2" stroke-linecap="round"/></svg>`,
  shield: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="36" fill="#f0ded8"/><path d="M30 24h20v14c0 6-10 16-10 16s-10-10-10-16V24z" fill="#b8695a"/><path d="M34 36l4 4 8-8" stroke="#f0ded8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  heart: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="36" fill="#f0ded8"/><path d="M40 54c-8-6-14-12-14-18 0-4 3-8 7-8 3 0 5 1 7 4 2-3 4-4 7-4 4 0 7 4 7 8 0 6-6 12-14 18z" fill="#b8695a"/></svg>`,
  building: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="36" fill="#f0ded8"/><rect x="26" y="30" width="28" height="24" rx="2" fill="#b8695a"/><path d="M33 26l7-6 7 6H33z" fill="#b8695a"/><rect x="34" y="36" width="4" height="6" rx="1" fill="#f0ded8"/><rect x="42" y="36" width="4" height="6" rx="1" fill="#f0ded8"/><rect x="34" y="46" width="4" height="6" rx="1" fill="#f0ded8"/></svg>`,
  star: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="36" fill="#f0ded8"/><path d="M40 18l5 15 16-2-12 12 6 16-15-8-15 8 6-16L19 31l16 2z" fill="#b8695a"/></svg>`,
  gear: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="36" fill="#f0ded8"/><circle cx="40" cy="40" r="9" fill="#b8695a"/><path d="M40 22v6M40 52v6M22 40h6M52 40h6M27 27l4 4M49 49l4 4M27 53l4-4M49 31l4-4" stroke="#b8695a" stroke-width="3" stroke-linecap="round"/></svg>`,
  brush: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="36" fill="#f0ded8"/><path d="M52 24L34 46l-2 2M52 24l4 4-8 2M52 24l-4-4-2 8" fill="#b8695a"/><rect x="28" y="48" width="8" height="4" rx="1" fill="#b8695a" transform="rotate(-45 28 48)"/><circle cx="36" cy="46" r="4" fill="#b8695a"/></svg>`,
  rocket: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="36" fill="#f0ded8"/><path d="M40 18L26 48h28L40 18z" fill="#b8695a"/><rect x="24" y="48" width="32" height="4" rx="2" fill="#b8695a"/><rect x="18" y="52" width="44" height="4" rx="2" fill="#b8695a"/><circle cx="40" cy="34" r="4" fill="#f0ded8"/></svg>`,
  note: `<svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="36" fill="#f0ded8"/><path d="M32 28v24c0 3-3 6-7 6s-7-3-7-6 3-6 7-6c1 0 2 0 3 1V24l18-2v18c0 3-3 6-7 6s-7-3-7-6 3-6 7-6c1 0 2 0 3 1" stroke="#b8695a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="40" cy="42" r="3" fill="#b8695a"/></svg>`
};

const mbtiTypes = {
  "INTJ": {
    title: "建筑师", summary: "富有战略眼光的独立思考者，追求知识与创新。", icon: icons.diamond,
    strengths: ["战略思维强，善于长远规划", "独立自主，高度自信", "分析能力突出，求知欲旺盛", "善于发现系统性问题并优化"],
    weaknesses: ["可能显得冷漠或傲慢", "对情感需求关注不足", "有时过于完美主义"],
    career: ["科学家", "工程师", "策略顾问", "大学教授", "软件架构师"]
  },
  "INTP": {
    title: "逻辑学家", summary: "充满好奇心的创新思考者，热衷于探索真理。", icon: icons.bulb,
    strengths: ["逻辑分析能力极强", "思维开放，富有创造力", "客观公正，不拘泥于传统", "对感兴趣的事物极度专注"],
    weaknesses: ["容易陷入过度分析", "可能忽视日常琐事", "社交场合可能显得疏离"],
    career: ["程序员", "数学家", "研究员", "数据分析师", "哲学家"]
  },
  "ENTJ": {
    title: "指挥官", summary: "天生的领导者，善于组织和激励团队达成目标。", icon: icons.crown,
    strengths: ["领导力强，目标明确", "决策果断，执行力强", "善于组织和管理复杂项目", "自信且富有感染力"],
    weaknesses: ["可能显得过于强势", "对他人感受不够敏感", "急躁，缺乏耐心"],
    career: ["CEO", "政治家", "管理顾问", "律师", "军事指挥官"]
  },
  "ENTP": {
    title: "辩论家", summary: "思维敏捷的创新者，享受智力挑战和思想碰撞。", icon: icons.lightning,
    strengths: ["思维敏捷，口才出众", "好奇心强，多才多艺", "善于即兴发挥和创新", "善于发现机会和可能性"],
    weaknesses: ["可能不够专注和坚持", "容易与他人争论", "对常规和重复性工作缺乏耐心"],
    career: ["创业者", "发明家", "记者", "广告创意", "产品经理"]
  },
  "INFJ": {
    title: "提倡者", summary: "富有同理心的理想主义者，致力于让世界更美好。", icon: icons.lotus,
    strengths: ["深刻的洞察力和直觉", "强烈的同理心和价值观", "善于激励和帮助他人成长", "富有创造力和远见"],
    weaknesses: ["容易疲惫和倦怠", "对批评过于敏感", "有时过于理想化"],
    career: ["心理咨询师", "教师", "作家", "HR", "社会工作者"]
  },
  "INFP": {
    title: "调停者", summary: "充满理想的浪漫主义者，追寻生命的意义与价值。", icon: icons.cloud,
    strengths: ["富有同情心和同理心", "创造力和想象力丰富", "忠于自己的价值观", "善于倾听和理解他人"],
    weaknesses: ["可能过于理想化", "难以面对冲突和批评", "有时决策犹豫"],
    career: ["作家", "平面设计师", "心理咨询师", "翻译", "艺术家"]
  },
  "ENFJ": {
    title: "主人公", summary: "富有魅力的引导者，善于激发他人的潜能。", icon: icons.flame,
    strengths: ["出色的沟通和社交能力", "善于理解和支持他人", "组织能力强，富有责任感", "积极乐观，富有感染力"],
    weaknesses: ["可能过于介入他人的问题", "难以拒绝他人", "有时忽略自己的需求"],
    career: ["教师", "HR经理", "公关", "培训师", "政治家"]
  },
  "ENFP": {
    title: "竞选者", summary: "热情洋溢的自由灵魂，追寻无限的可能性。", icon: icons.wings,
    strengths: ["热情洋溢，富有感染力", "创造力强，思维活跃", "善于与人建立联系", "适应力强，乐观积极"],
    weaknesses: ["容易分心，难以专注", "对细节关注不足", "有时不够实际"],
    career: ["记者", "市场营销", "演艺", "创意总监", "企业家"]
  },
  "ISTJ": {
    title: "物流师", summary: "务实可靠的守护者，重视传统与秩序。", icon: icons.shield,
    strengths: ["可靠负责，信守承诺", "做事有条理，注重细节", "务实、逻辑清晰", "意志坚定，有耐心"],
    weaknesses: ["可能过于固执和保守", "对变化适应较慢", "可能忽视他人的情感需求"],
    career: ["会计师", "审计员", "公务员", "军人", "医生"]
  },
  "ISFJ": {
    title: "守卫者", summary: "温暖细心的奉献者，默默守护身边的人。", icon: icons.heart,
    strengths: ["温暖可靠，乐于助人", "细心负责，有耐心", "实际操作能力强", "善于观察和记忆细节"],
    weaknesses: ["可能过于谦虚低调", "不善于拒绝他人", "容易承担过多责任"],
    career: ["护士", "教师", "社工", "行政助理", "图书管理员"]
  },
  "ESTJ": {
    title: "总经理", summary: "高效务实的管理者，善于组织资源达成目标。", icon: icons.building,
    strengths: ["组织和管理能力出色", "果断务实，执行力强", "诚实可靠，责任心强", "善于制定和执行规则"],
    weaknesses: ["可能显得专制和固执", "对不同的观点不够包容", "有时忽略情感因素"],
    career: ["项目经理", "法官", "警察", "校长", "财务主管"]
  },
  "ESFJ": {
    title: "执政官", summary: "热情友善的组织者，关心他人的需要和感受。", icon: icons.star,
    strengths: ["善于社交，热情友善", "组织和协调能力强", "责任感强，可靠务实", "关心他人，乐于助人"],
    weaknesses: ["可能过度需要认可", "对批评比较敏感", "有时过于传统"],
    career: ["护士", "教师", "销售经理", "活动策划", "客户服务"]
  },
  "ISTP": {
    title: "鉴赏家", summary: "冷静灵活的实践者，精通各种工具的运用。", icon: icons.gear,
    strengths: ["动手能力强，善于解决实际问题", "冷静理性，危机处理能力强", "灵活适应，不拘泥于常规", "善于分析数据和事实"],
    weaknesses: ["可能显得冷淡和疏离", "对长期规划缺乏兴趣", "有时过于冒险"],
    career: ["工程师", "飞行员", "法医", "程序员", "消防员"]
  },
  "ISFP": {
    title: "探险家", summary: "温柔敏感的美学家，用感官体验世界的魅力。", icon: icons.brush,
    strengths: ["审美能力强，富有艺术感", "温柔友善，容易相处", "活在当下，享受生活", "适应能力强，灵活多变"],
    weaknesses: ["可能过于内向和害羞", "难以做长期规划", "可能回避冲突"],
    career: ["设计师", "摄影师", "厨师", "画家", "音乐家"]
  },
  "ESTP": {
    title: "企业家", summary: "精力充沛的行动派，享受冒险和刺激。", icon: icons.rocket,
    strengths: ["行动力强，反应迅速", "社交能力强，富有魅力", "务实、善于解决问题", "适应力强，乐观自信"],
    weaknesses: ["可能冲动和缺乏耐心", "对理论和抽象概念兴趣不大", "有时忽视他人的感受"],
    career: ["销售", "企业家", "运动员", "急救人员", "演员"]
  },
  "ESFP": {
    title: "表演者", summary: "活力四射的娱乐家，用热情感染每一个人。", icon: icons.note,
    strengths: ["热情开朗，善于社交", "乐观积极，富有感染力", "实际操作能力强", "善于观察他人的需求"],
    weaknesses: ["可能缺乏长期规划", "容易感到无聊", "对批评比较敏感"],
    career: ["演员", "销售", "导游", "活动策划", "时尚设计师"]
  }
};

const state = {
  currentQuestion: 0,
  answers: new Array(questions.length).fill(null),
  scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
};

const pages = {
  start: document.getElementById("page-start"),
  quiz: document.getElementById("page-quiz"),
  result: document.getElementById("page-result")
};

const elProgressFill = document.getElementById("progress-fill");
const elProgressCurrent = document.getElementById("progress-current");
const elProgressTotal = document.getElementById("progress-total");
const elDimIndicator = document.getElementById("dimension-indicator");
const elQuestionText = document.getElementById("question-text");
const elOptions = document.getElementById("options");
const elBtnPrev = document.getElementById("btn-prev");
const elBtnNext = document.getElementById("btn-next");
const elResultIcon = document.getElementById("result-icon");
const elResultType = document.getElementById("result-type");
const elResultTitle = document.getElementById("result-title");
const elResultSummary = document.getElementById("result-summary");
const elResultScores = document.getElementById("result-scores");
const elResultDetails = document.getElementById("result-details");
const elError = document.getElementById("error-message");

let isTransitioning = false;

function showPage(name) {
  const target = pages[name];
  Object.keys(pages).forEach(k => {
    const p = pages[k];
    p.classList.remove("page--active", "page--exit");
  });
  target.classList.add("page--active");
}

function getDimensionLabel(dim) {
  const map = { EI: "外向 / 内向", SN: "实感 / 直觉", TF: "思考 / 情感", JP: "判断 / 感知" };
  return map[dim] || "";
}

function renderQuestion() {
  elError.classList.add("hidden");

  const q = questions[state.currentQuestion];
  elQuestionText.textContent = q.text;
  elDimIndicator.textContent = getDimensionLabel(q.dimension);
  const currentVal = state.answers[state.currentQuestion];

  elOptions.innerHTML = "";

  const scaleWrap = document.createElement("div");
  scaleWrap.className = "scale-wrap";

  const optLabels = document.createElement("div");
  optLabels.className = "scale-labels";
  optLabels.innerHTML =
    `<span class="scale-labels__left">${q.options[0]}</span><span class="scale-labels__right">${q.options[1]}</span>`;
  scaleWrap.appendChild(optLabels);

  const track = document.createElement("div");
  track.className = "scale-track";
  track.setAttribute("role", "radiogroup");
  track.setAttribute("aria-label", "选择倾向程度");

  scaleSteps.forEach(s => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "scale-btn";
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", currentVal === s.value ? "true" : "false");
    btn.dataset.value = s.value;

    const dot = document.createElement("span");
    dot.className = "scale-btn__dot";
    btn.appendChild(dot);

    const label = document.createElement("span");
    label.className = "scale-btn__label";
    label.textContent = s.label;
    btn.appendChild(label);

    if (currentVal === s.value) {
      btn.classList.add("selected");
    }
    if (s.value === 0) {
      btn.classList.add("scale-btn--neutral");
    }

    btn.addEventListener("click", () => setAnswer(s.value));
    track.appendChild(btn);
  });

  scaleWrap.appendChild(track);
  elOptions.appendChild(scaleWrap);

  const num = state.currentQuestion + 1;
  const pct = (num / questions.length) * 100;
  elProgressFill.style.width = pct + "%";
  elProgressFill.parentElement.setAttribute("aria-valuenow", num);
  elProgressCurrent.textContent = num;
  elProgressTotal.textContent = String(questions.length);

  elBtnPrev.disabled = state.currentQuestion === 0;

  if (state.currentQuestion === questions.length - 1) {
    elBtnNext.innerHTML = '查看结果 <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M7 4l5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  } else {
    elBtnNext.innerHTML = '下一题 <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M7 4l5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }

  elBtnNext.focus();
}

function setAnswer(value) {
  state.answers[state.currentQuestion] = value;
  renderQuestion();
}

function calculateScores() {
  const s = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  questions.forEach((q, i) => {
    const val = state.answers[i];
    if (val === null) return;
    const w = Math.abs(val);
    let dimA, dimB;
    if (q.dimension === "EI") { dimA = "E"; dimB = "I"; }
    else if (q.dimension === "SN") { dimA = "S"; dimB = "N"; }
    else if (q.dimension === "TF") { dimA = "T"; dimB = "F"; }
    else { dimA = "J"; dimB = "P"; }
    if (val < 0) s[dimA] += w;
    else if (val > 0) s[dimB] += w;
  });
  state.scores = s;
}

function getType() {
  calculateScores();
  const s = state.scores;
  return (s.E >= s.I ? "E" : "I") + (s.S >= s.N ? "S" : "N") + (s.T >= s.F ? "T" : "F") + (s.J >= s.P ? "J" : "P");
}

function getPct(a, b) {
  const sum = a + b;
  if (sum === 0) return 50;
  return Math.round((Math.max(a, b) / sum) * 100);
}

function getClarity(a, b) {
  const diff = Math.abs(a - b);
  if (diff <= 4) return { label: "轻微倾向", level: "slight" };
  if (diff <= 12) return { label: "中等倾向", level: "moderate" };
  return { label: "清晰倾向", level: "clear" };
}

function renderResult() {
  const type = getType();
  const info = mbtiTypes[type];

  if (!info) {
    elResultIcon.innerHTML = "";
    elResultType.textContent = "?";
    elResultTitle.textContent = "无法识别";
    elResultSummary.textContent = "请重新测试";
    elResultScores.innerHTML = "";
    elResultDetails.innerHTML = "<p>出现异常，请重新开始测试。</p>";
    showPage("result");
    return;
  }

  elResultIcon.innerHTML = info.icon;
  elResultType.textContent = type;
  elResultTitle.textContent = info.title;
  elResultSummary.textContent = info.summary;

  const s = state.scores;
  elResultScores.innerHTML = [
    { a: s.E, b: s.I, label: s.E >= s.I ? "E" : "I", dim: "外向 / 内向" },
    { a: s.S, b: s.N, label: s.S >= s.N ? "S" : "N", dim: "实感 / 直觉" },
    { a: s.T, b: s.F, label: s.T >= s.F ? "T" : "F", dim: "思考 / 情感" },
    { a: s.J, b: s.P, label: s.J >= s.P ? "J" : "P", dim: "判断 / 感知" }
  ].map(item => {
    const pct = getPct(item.a, item.b);
    const clarity = getClarity(item.a, item.b);
    return `<div class="scores__item"><div class="scores__label">${item.label}</div><div class="scores__dim">${item.dim}</div><div class="scores__pct">${pct}%</div><div class="scores__clarity scores__clarity--${clarity.level}">${clarity.label}</div></div>`;
  }).join("");

  elResultDetails.innerHTML =
    `<div class="details__section"><h3>优势</h3><ul>${info.strengths.map(s => `<li>${s}</li>`).join("")}</ul></div>` +
    `<div class="details__section"><h3>需注意</h3><ul>${info.weaknesses.map(s => `<li>${s}</li>`).join("")}</ul></div>` +
    `<div class="details__section"><h3>适合职业方向</h3><div class="career-list">${info.career.map(c => `<span class="career-tag">${c}</span>`).join("")}</div></div>`;

  showPage("result");
}

function goNext() {
  if (isTransitioning) return;
  if (state.answers[state.currentQuestion] === null) {
    elError.classList.remove("hidden");
    return;
  }
  elError.classList.add("hidden");

  if (state.currentQuestion < questions.length - 1) {
    state.currentQuestion++;
    renderQuestion();
  } else {
    renderResult();
  }
}

function goPrev() {
  if (isTransitioning) return;
  if (state.currentQuestion > 0) {
    elError.classList.add("hidden");
    state.currentQuestion--;
    renderQuestion();
  }
}

function resetTest() {
  state.currentQuestion = 0;
  state.answers = new Array(questions.length).fill(null);
  state.scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
}

document.getElementById("btn-start").addEventListener("click", () => {
  resetTest();
  showPage("quiz");
  renderQuestion();
});

elBtnNext.addEventListener("click", goNext);
elBtnPrev.addEventListener("click", goPrev);

document.getElementById("btn-restart").addEventListener("click", () => {
  resetTest();
  showPage("start");
});

document.addEventListener("keydown", e => {
  if (!pages.quiz.classList.contains("page--active")) return;
  if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
  if (e.key === "ArrowRight") { e.preventDefault(); goNext(); }
  const keyMap = { "1": -3, "2": -2, "3": -1, "4": 0, "5": 1, "6": 2, "7": 3 };
  if (e.key in keyMap && questions[state.currentQuestion]) {
    e.preventDefault();
    setAnswer(keyMap[e.key]);
  }
});

document.querySelectorAll("[data-font-status]").forEach(el => {
  if ("fonts" in document) {
    document.fonts.ready.then(() => {
      el.dataset.fontStatus = "active";
    });
  }
});
