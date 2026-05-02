var questions = [
  { text: "在聚会中，你通常更喜欢：", dimension: "EI", options: ["与很多人交流，认识新朋友", "只和熟悉的朋友深入聊天"] },
  { text: "你更倾向于如何获取能量：", dimension: "EI", options: ["通过与人互动和社交活动", "通过独处和自我反思"] },
  { text: "面对一个新环境，你会：", dimension: "EI", options: ["主动与他人交谈，快速融入", "先观察，等待别人来接触你"] },
  { text: "在团队讨论中，你通常：", dimension: "EI", options: ["积极发言，分享自己的想法", "先倾听他人的观点，再谨慎表达"] },
  { text: "周末你更愿意如何度过：", dimension: "EI", options: ["和朋友一起外出活动", "在家安静地做自己的事"] },
  { text: "做决定时，你更倾向于：", dimension: "EI", options: ["和他人讨论后决定", "独自思考后决定"] },
  { text: "在电话和文字消息之间，你更喜欢：", dimension: "EI", options: ["直接打电话沟通", "发文字消息或邮件"] },
  { text: "你更关注：", dimension: "SN", options: ["具体的事实和细节", "抽象的概念和可能性"] },
  { text: "学习新事物时，你更喜欢：", dimension: "SN", options: ["按部就班，从基础到高级", "先了解整体框架，再填充细节"] },
  { text: "面对一个问题，你更信任：", dimension: "SN", options: ["过往的经验和实用方法", "直觉和灵光一闪的想法"] },
  { text: "阅读时你更容易被什么吸引：", dimension: "SN", options: ["写实的描述和具体的情节", "深刻的隐喻和象征意义"] },
  { text: "在工作中，你更重视：", dimension: "SN", options: ["实际的操作和执行效率", "创新的想法和未来规划"] },
  { text: "描述一个物品时，你会先说：", dimension: "SN", options: ["它的外观、材质、用途", "它给你带来的感受和联想"] },
  { text: "做项目时，你更倾向于：", dimension: "SN", options: ["遵循已有的成功模板", "尝试全新的方法和思路"] },
  { text: "评价一件事时，你首先考虑：", dimension: "TF", options: ["逻辑是否严密，是否合理", "是否公平，是否顾及他人感受"] },
  { text: "当朋友向你倾诉烦恼时，你通常会：", dimension: "TF", options: ["帮他分析问题，提出解决方案", "先共情和安慰，给予情感支持"] },
  { text: "在做重要决定时，你更依赖：", dimension: "TF", options: ["客观的事实和数据分析", "内心的价值观和情感判断"] },
  { text: "你更欣赏哪种特质：", dimension: "TF", options: ["理性和公正", "同理心和包容"] },
  { text: "面对批评时，你更看重：", dimension: "TF", options: ["批评的内容是否客观正确", "批评的方式是否尊重人"] },
  { text: "在争论中，你更倾向于：", dimension: "TF", options: ["坚持事实，即使可能伤害感情", "维护和谐，避免直接冲突"] },
  { text: "你认为更重要的是：", dimension: "TF", options: ["坚持原则", "体谅他人"] },
  { text: "你对待日程安排的态度是：", dimension: "JP", options: ["喜欢提前计划，按部就班", "喜欢灵活应变，保持开放"] },
  { text: "面对截止日期，你通常：", dimension: "JP", options: ["提前规划，尽早完成", "在压力下高效冲刺"] },
  { text: "你的工作桌面通常是：", dimension: "JP", options: ["整洁有序，每样东西有固定位置", "看起来有些乱，但你知道东西在哪"] },
  { text: "旅行时你更喜欢：", dimension: "JP", options: ["提前做好详细的行程规划", "随性而行，遇到什么玩什么"] },
  { text: "对于待办事项，你倾向于：", dimension: "JP", options: ["列出清单，逐项完成", "记在脑子里，灵活处理"] },
  { text: "你更享受哪种工作方式：", dimension: "JP", options: ["有明确的结构和规则", "自由度高，可以即兴发挥"] },
  { text: "当一个计划被打乱时，你会：", dimension: "JP", options: ["感到不安，希望尽快恢复秩序", "觉得无所谓，顺势调整"] }
];

var mbtiTypes = {
  "INTJ": {
    title: "建筑师",
    summary: "富有战略眼光的独立思考者，追求知识与创新。",
    strengths: ["战略思维强，善于长远规划", "独立自主，高度自信", "分析能力突出，求知欲旺盛", "善于发现系统性问题并优化"],
    weaknesses: ["可能显得冷漠或傲慢", "对情感需求关注不足", "有时过于完美主义"],
    career: ["科学家", "工程师", "策略顾问", "大学教授", "软件架构师"]
  },
  "INTP": {
    title: "逻辑学家",
    summary: "充满好奇心的创新思考者，热衷于探索真理。",
    strengths: ["逻辑分析能力极强", "思维开放，富有创造力", "客观公正，不拘泥于传统", "对感兴趣的事物极度专注"],
    weaknesses: ["容易陷入过度分析", "可能忽视日常琐事", "社交场合可能显得疏离"],
    career: ["程序员", "数学家", "研究员", "数据分析师", "哲学家"]
  },
  "ENTJ": {
    title: "指挥官",
    summary: "天生的领导者，善于组织和激励团队达成目标。",
    strengths: ["领导力强，目标明确", "决策果断，执行力强", "善于组织和管理复杂项目", "自信且富有感染力"],
    weaknesses: ["可能显得过于强势", "对他人感受不够敏感", "急躁，缺乏耐心"],
    career: ["CEO", "政治家", "管理顾问", "律师", "军事指挥官"]
  },
  "ENTP": {
    title: "辩论家",
    summary: "思维敏捷的创新者，享受智力挑战和思想碰撞。",
    strengths: ["思维敏捷，口才出众", "好奇心强，多才多艺", "善于即兴发挥和创新", "善于发现机会和可能性"],
    weaknesses: ["可能不够专注和坚持", "容易与他人争论", "对常规和重复性工作缺乏耐心"],
    career: ["创业者", "发明家", "记者", "广告创意", "产品经理"]
  },
  "INFJ": {
    title: "提倡者",
    summary: "富有同理心的理想主义者，致力于让世界更美好。",
    strengths: ["深刻的洞察力和直觉", "强烈的同理心和价值观", "善于激励和帮助他人成长", "富有创造力和远见"],
    weaknesses: ["容易疲惫和倦怠", "对批评过于敏感", "有时过于理想化"],
    career: ["心理咨询师", "教师", "作家", "HR", "社会工作者"]
  },
  "INFP": {
    title: "调停者",
    summary: "充满理想的浪漫主义者，追寻生命的意义与价值。",
    strengths: ["富有同情心和同理心", "创造力和想象力丰富", "忠于自己的价值观", "善于倾听和理解他人"],
    weaknesses: ["可能过于理想化", "难以面对冲突和批评", "有时决策犹豫"],
    career: ["作家", "平面设计师", "心理咨询师", "翻译", "艺术家"]
  },
  "ENFJ": {
    title: "主人公",
    summary: "富有魅力的引导者，善于激发他人的潜能。",
    strengths: ["出色的沟通和社交能力", "善于理解和支持他人", "组织能力强，富有责任感", "积极乐观，富有感染力"],
    weaknesses: ["可能过于介入他人的问题", "难以拒绝他人", "有时忽略自己的需求"],
    career: ["教师", "HR经理", "公关", "培训师", "政治家"]
  },
  "ENFP": {
    title: "竞选者",
    summary: "热情洋溢的自由灵魂，追寻无限的可能性。",
    strengths: ["热情洋溢，富有感染力", "创造力强，思维活跃", "善于与人建立联系", "适应力强，乐观积极"],
    weaknesses: ["容易分心，难以专注", "对细节关注不足", "有时不够实际"],
    career: ["记者", "市场营销", "演艺", "创意总监", "企业家"]
  },
  "ISTJ": {
    title: "物流师",
    summary: "务实可靠的守护者，重视传统与秩序。",
    strengths: ["可靠负责，信守承诺", "做事有条理，注重细节", "务实、逻辑清晰", "意志坚定，有耐心"],
    weaknesses: ["可能过于固执和保守", "对变化适应较慢", "可能忽视他人的情感需求"],
    career: ["会计师", "审计员", "公务员", "军人", "医生"]
  },
  "ISFJ": {
    title: "守卫者",
    summary: "温暖细心的奉献者，默默守护身边的人。",
    strengths: ["温暖可靠，乐于助人", "细心负责，有耐心", "实际操作能力强", "善于观察和记忆细节"],
    weaknesses: ["可能过于谦虚低调", "不善于拒绝他人", "容易承担过多责任"],
    career: ["护士", "教师", "社工", "行政助理", "图书管理员"]
  },
  "ESTJ": {
    title: "总经理",
    summary: "高效务实的管理者，善于组织资源达成目标。",
    strengths: ["组织和管理能力出色", "果断务实，执行力强", "诚实可靠，责任心强", "善于制定和执行规则"],
    weaknesses: ["可能显得专制和固执", "对不同的观点不够包容", "有时忽略情感因素"],
    career: ["项目经理", "法官", "警察", "校长", "财务主管"]
  },
  "ESFJ": {
    title: "执政官",
    summary: "热情友善的组织者，关心他人的需要和感受。",
    strengths: ["善于社交，热情友善", "组织和协调能力强", "责任感强，可靠务实", "关心他人，乐于助人"],
    weaknesses: ["可能过度需要认可", "对批评比较敏感", "有时过于传统"],
    career: ["护士", "教师", "销售经理", "活动策划", "客户服务"]
  },
  "ISTP": {
    title: "鉴赏家",
    summary: "冷静灵活的实践者，精通各种工具的运用。",
    strengths: ["动手能力强，善于解决实际问题", "冷静理性，危机处理能力强", "灵活适应，不拘泥于常规", "善于分析数据和事实"],
    weaknesses: ["可能显得冷淡和疏离", "对长期规划缺乏兴趣", "有时过于冒险"],
    career: ["工程师", "飞行员", "法医", "程序员", "消防员"]
  },
  "ISFP": {
    title: "探险家",
    summary: "温柔敏感的美学家，用感官体验世界的魅力。",
    strengths: ["审美能力强，富有艺术感", "温柔友善，容易相处", "活在当下，享受生活", "适应能力强，灵活多变"],
    weaknesses: ["可能过于内向和害羞", "难以做长期规划", "可能回避冲突"],
    career: ["设计师", "摄影师", "厨师", "画家", "音乐家"]
  },
  "ESTP": {
    title: "企业家",
    summary: "精力充沛的行动派，享受冒险和刺激。",
    strengths: ["行动力强，反应迅速", "社交能力强，富有魅力", "务实、善于解决问题", "适应力强，乐观自信"],
    weaknesses: ["可能冲动和缺乏耐心", "对理论和抽象概念兴趣不大", "有时忽视他人的感受"],
    career: ["销售", "企业家", "运动员", "急救人员", "演员"]
  },
  "ESFP": {
    title: "表演者",
    summary: "活力四射的娱乐家，用热情感染每一个人。",
    strengths: ["热情开朗，善于社交", "乐观积极，富有感染力", "实际操作能力强", "善于观察他人的需求"],
    weaknesses: ["可能缺乏长期规划", "容易感到无聊", "对批评比较敏感"],
    career: ["演员", "销售", "导游", "活动策划", "时尚设计师"]
  }
};

var state = {
  currentQuestion: 0,
  answers: new Array(questions.length).fill(null),
  scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 },
  timerInterval: null
};

var pages = {
  start: document.getElementById("page-start"),
  quiz: document.getElementById("page-quiz"),
  result: document.getElementById("page-result")
};

var elProgressFill = document.getElementById("progress-fill");
var elProgressText = document.getElementById("progress-text");
var elDimIndicator = document.getElementById("dimension-indicator");
var elQuestionText = document.getElementById("question-text");
var elOptions = document.getElementById("options");
var elBtnPrev = document.getElementById("btn-prev");
var elBtnNext = document.getElementById("btn-next");
var elResultType = document.getElementById("result-type");
var elResultTitle = document.getElementById("result-title");
var elResultSummary = document.getElementById("result-summary");
var elResultScores = document.getElementById("result-scores");
var elResultDetails = document.getElementById("result-details");

function showPage(name) {
  Object.keys(pages).forEach(function (k) {
    pages[k].classList.add("hidden");
  });
  pages[name].classList.remove("hidden");
}

function getDimensionLabel(dim) {
  var map = { EI: "外向 E / 内向 I", SN: "实感 S / 直觉 N", TF: "思考 T / 情感 F", JP: "判断 J / 感知 P" };
  return map[dim] || "";
}

function renderQuestion() {
  var q = questions[state.currentQuestion];
  elQuestionText.textContent = q.text;
  elDimIndicator.textContent = getDimensionLabel(q.dimension);

  elOptions.innerHTML = "";
  q.options.forEach(function (opt, i) {
    var btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    if (state.answers[state.currentQuestion] === i) {
      btn.classList.add("selected");
    }
    btn.addEventListener("click", function () {
      setAnswer(i);
    });
    elOptions.appendChild(btn);
  });

  var pct = ((state.currentQuestion + 1) / questions.length) * 100;
  elProgressFill.style.width = pct + "%";
  elProgressText.textContent = (state.currentQuestion + 1) + " / " + questions.length;
  elBtnPrev.disabled = state.currentQuestion === 0;

  if (state.currentQuestion === questions.length - 1) {
    elBtnNext.textContent = "查看结果";
  } else {
    elBtnNext.textContent = "下一题";
  }
}

function setAnswer(index) {
  state.answers[state.currentQuestion] = index;
  renderQuestion();
}

function calculateScores() {
  state.scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  questions.forEach(function (q, i) {
    var answer = state.answers[i];
    if (answer === null) return;
    if (q.dimension === "EI") {
      answer === 0 ? state.scores.E++ : state.scores.I++;
    } else if (q.dimension === "SN") {
      answer === 0 ? state.scores.S++ : state.scores.N++;
    } else if (q.dimension === "TF") {
      answer === 0 ? state.scores.T++ : state.scores.F++;
    } else if (q.dimension === "JP") {
      answer === 0 ? state.scores.J++ : state.scores.P++;
    }
  });
}

function getType() {
  calculateScores();
  var type = "";
  type += state.scores.E >= state.scores.I ? "E" : "I";
  type += state.scores.S >= state.scores.N ? "S" : "N";
  type += state.scores.T >= state.scores.F ? "T" : "F";
  type += state.scores.J >= state.scores.P ? "J" : "P";
  return type;
}

function getPct(a, b) {
  var sum = a + b;
  if (sum === 0) return "50%";
  return Math.round((Math.max(a, b) / sum) * 100) + "%";
}

function renderResult() {
  var type = getType();
  var info = mbtiTypes[type];
  elResultType.textContent = type;
  elResultTitle.textContent = info.title;
  elResultSummary.textContent = info.summary;

  var score = state.scores;
  elResultScores.innerHTML = [
    { label: score.E >= score.I ? "E" : "I", pct: getPct(score.E, score.I), dim: "外向 / 内向" },
    { label: score.S >= score.N ? "S" : "N", pct: getPct(score.S, score.N), dim: "实感 / 直觉" },
    { label: score.T >= score.F ? "T" : "F", pct: getPct(score.T, score.F), dim: "思考 / 情感" },
    { label: score.J >= score.P ? "J" : "P", pct: getPct(score.J, score.P), dim: "判断 / 感知" }
  ].map(function (s) {
    return '<div class="score-item"><div class="score-label">' + s.label + '</div><div class="score-bar">' + s.dim + '</div><div class="score-pct">' + s.pct + '</div></div>';
  }).join("");

  elResultDetails.innerHTML =
    '<h3>优势</h3><ul>' + info.strengths.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ul>" +
    '<h3 style="margin-top:14px;">需注意</h3><ul>' + info.weaknesses.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ul>" +
    '<h3 style="margin-top:14px;">适合职业方向</h3><p>' + info.career.join("、") + "</p>";

  showPage("result");
}

function goNext() {
  if (state.answers[state.currentQuestion] === null) return;
  if (state.currentQuestion < questions.length - 1) {
    state.currentQuestion++;
    renderQuestion();
  } else {
    renderResult();
  }
}

function goPrev() {
  if (state.currentQuestion > 0) {
    state.currentQuestion--;
    renderQuestion();
  }
}

document.getElementById("btn-start").addEventListener("click", function () {
  state.currentQuestion = 0;
  state.answers = new Array(questions.length).fill(null);
  state.scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  showPage("quiz");
  renderQuestion();
});

elBtnNext.addEventListener("click", goNext);
elBtnPrev.addEventListener("click", goPrev);

document.getElementById("btn-restart").addEventListener("click", function () {
  state.currentQuestion = 0;
  state.answers = new Array(questions.length).fill(null);
  state.scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  showPage("start");
});

document.addEventListener("keydown", function (e) {
  if (pages.quiz.classList.contains("hidden")) return;
  if (e.key === "ArrowRight") goNext();
  if (e.key === "ArrowLeft") goPrev();
  if (e.key === "1" && questions[state.currentQuestion]) setAnswer(0);
  if (e.key === "2" && questions[state.currentQuestion]) setAnswer(1);
});
