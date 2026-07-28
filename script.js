// Google Apps Script Web App URL
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbyjNOiABYgb6giv2CFF62hgVXf6r2vv6GCi1vD22Q_XGMadI8yPVZOz3kPZLWJD8-cnhw/exec";

const SURVEY_DATA = [
  // --- ETHICS ---
  { code: "ETH1", question: "There is a set of moral values that are universally valid", scores: { "Strongly Disagree": {ETH: -1}, "Disagree": {ETH: -0.5}, "Neutral": {ETH: 0}, "Agree": {ETH: 0.5}, "Strongly Agree": {ETH: 1} } },
  { code: "ETH2", question: "No set of moral values is superior to any other", scores: { "Strongly Disagree": {ETH: 1}, "Disagree": {ETH: 0.5}, "Neutral": {ETH: 0}, "Agree": {ETH: -0.5}, "Strongly Agree": {ETH: -1} } },
  { code: "ETH3", question: "Good and evil are real, objective categories", scores: { "Strongly Disagree": {ETH: -1.5}, "Disagree": {ETH: -0.75}, "Neutral": {ETH: 0}, "Agree": {ETH: 0.75}, "Strongly Agree": {ETH: 1.5} } },
  { code: "ETH4", question: "Morality is a social construct", scores: { "Strongly Disagree": {ETH: 2}, "Disagree": {ETH: 1}, "Neutral": {ETH: 0}, "Agree": {ETH: -1}, "Strongly Agree": {ETH: -2} } },
  { code: "ETH5", question: "Some of my moral beliefs may be false", scores: { "Strongly Disagree": {ETH: 1}, "Disagree": {ETH: 0.5}, "Neutral": {ETH: 0}, "Agree": {ETH: -0.5}, "Strongly Agree": {ETH: -1} } },
  { code: "ETH6", question: "No moral standard is permanently valid across all times and societies", scores: { "Strongly Disagree": {ETH: 1}, "Disagree": {ETH: 0.5}, "Neutral": {ETH: 0}, "Agree": {ETH: -0.5}, "Strongly Agree": {ETH: -1} } },
  { code: "ETH7", question: "Moral truths are accessible through common sense, or reason", scores: { "Strongly Disagree": {ETH: -1}, "Disagree": {ETH: -0.5}, "Neutral": {ETH: 0}, "Agree": {ETH: 0.5}, "Strongly Agree": {ETH: 1} } },

  // --- HUMAN NATURE ---
  { code: "HN1", question: "All humans share a common moral foundation at birth", scores: { "Strongly Disagree": {HN: -1}, "Disagree": {HN: -0.5}, "Neutral": {HN: 0}, "Agree": {HN: 0.5}, "Strongly Agree": {HN: 1} } },
  { code: "HN2", question: "Human nature sets clear limits on what is feasible in politics", scores: { "Strongly Disagree": {HN: -1}, "Disagree": {HN: -0.5}, "Neutral": {HN: 0}, "Agree": {HN: 0.5}, "Strongly Agree": {HN: 1} } },
  { code: "HN3", question: "Rehabilitation is possible regardless of past actions", scores: { "Strongly Disagree": {HN: 1}, "Disagree": {HN: 0.5}, "Neutral": {HN: 0}, "Agree": {HN: -0.5}, "Strongly Agree": {HN: -1} } },
  { code: "HN4", question: "Some people are predisposed to violent behavior", scores: { "Strongly Disagree": {HN: -1}, "Disagree": {HN: -0.5}, "Neutral": {HN: 0}, "Agree": {HN: 0.5}, "Strongly Agree": {HN: 1} } },
  { code: "HN5", question: "A perfect society is achievable", scores: { "Strongly Disagree": {HN: 1}, "Disagree": {HN: 0.5}, "Neutral": {HN: 0}, "Agree": {HN: -0.5}, "Strongly Agree": {HN: -1} } },
  { code: "HN6", question: "People are born with a fixed underlying human nature", scores: { "Strongly Disagree": {HN: -1.5}, "Disagree": {HN: -0.75}, "Neutral": {HN: 0}, "Agree": {HN: 0.75}, "Strongly Agree": {HN: 1.5} } },
  { code: "HN7", question: "We are shaped more by our experiences than by our genetics", scores: { "Strongly Disagree": {HN: 1}, "Disagree": {HN: 0.5}, "Neutral": {HN: 0}, "Agree": {HN: -0.5}, "Strongly Agree": {HN: -1} } },

  // --- TRIBALISM ---
  { code: "TRB1", question: "It is our duty go out of our way to care for strangers", scores: { "Strongly Disagree": {TRB: 1}, "Disagree": {TRB: 0.5}, "Neutral": {TRB: 0}, "Agree": {TRB: -0.5}, "Strongly Agree": {TRB: -1} } },
  { code: "TRB2", question: "Our most important responsibility is towards our own society", scores: { "Strongly Disagree": {TRB: -1}, "Disagree": {TRB: -0.5}, "Neutral": {TRB: 0}, "Agree": {TRB: 0.5}, "Strongly Agree": {TRB: 1} } },
  { code: "TRB3", question: "There are things to be learned from every culture", scores: { "Strongly Disagree": {TRB: 1}, "Disagree": {TRB: 0.5}, "Neutral": {TRB: 0}, "Agree": {TRB: -0.5}, "Strongly Agree": {TRB: -1} } },
  { code: "TRB4", question: "It is our duty to preserve our own social identity", scores: { "Strongly Disagree": {TRB: -1}, "Disagree": {TRB: -0.5}, "Neutral": {TRB: 0}, "Agree": {TRB: 0.5}, "Strongly Agree": {TRB: 1} } },
  { code: "TRB5", question: "It is regrettable that global interconnectedness is causing ruptures in communities", scores: { "Strongly Disagree": {TRB: -1}, "Disagree": {TRB: -0.5}, "Neutral": {TRB: 0}, "Agree": {TRB: 0.5}, "Strongly Agree": {TRB: 1} } },
  { code: "TRB6", question: "A society must maintain a strong distinction between its members and outsiders", scores: { "Strongly Disagree": {TRB: -1.5}, "Disagree": {TRB: -0.75}, "Neutral": {TRB: 0}, "Agree": {TRB: 0.75}, "Strongly Agree": {TRB: 1.5} } },
  { code: "TRB7", question: "It is important for membership in society to be exclusive", scores: { "Strongly Disagree": {TRB: -1}, "Disagree": {TRB: -0.5}, "Neutral": {TRB: 0}, "Agree": {TRB: 0.5}, "Strongly Agree": {TRB: 1} } },
  { code: "TRB8", question: "We should be accountable to our community for our actions", scores: { "Strongly Disagree": {TRB: 1}, "Disagree": {TRB: 0.5}, "Neutral": {TRB: 0}, "Agree": {TRB: -0.5}, "Strongly Agree": {TRB: -1} } },

  // --- JUSTICE ---
  { code: "JST1", question: "Those who contribute more deserve a greater share of benefits", scores: { "Strongly Disagree": {JST: -1}, "Disagree": {JST: -0.5}, "Neutral": {JST: 0}, "Agree": {JST: 0.5}, "Strongly Agree": {JST: 1} } },
  { code: "JST2", question: "Hierarchies protect society from anarchy", scores: { "Strongly Disagree": {JST: -1.5}, "Disagree": {JST: -0.75}, "Neutral": {JST: 0}, "Agree": {JST: 0.75}, "Strongly Agree": {JST: 1.5} } },
  { code: "JST3", question: "From each according to his ability to each according to his needs", scores: { "Strongly Disagree": {JST: 1}, "Disagree": {JST: 0.5}, "Neutral": {JST: 0}, "Agree": {JST: -0.5}, "Strongly Agree": {JST: -1} } },
  { code: "JST4", question: "Since humans have unequal abilities, social inequality is inevitable", scores: { "Strongly Disagree": {JST: -1}, "Disagree": {JST: -0.5}, "Neutral": {JST: 0}, "Agree": {JST: 0.5}, "Strongly Agree": {JST: 1} } },
  { code: "JST5", question: "Affirmative action is ineffective at reducing inequality", scores: { "Strongly Disagree": {JST: -1}, "Disagree": {JST: -0.5}, "Neutral": {JST: 0}, "Agree": {JST: 0.5}, "Strongly Agree": {JST: 1} } },
  { code: "JST6", question: "The more equal a society the more just", scores: { "Strongly Disagree": {JST: 1.5}, "Disagree": {JST: 0.75}, "Neutral": {JST: 0}, "Agree": {JST: -0.75}, "Strongly Agree": {JST: -1.5} } },
  { code: "JST7", question: "It is better to be middle class in an equal society than it is to be wealthy in an unequal society", scores: { "Strongly Disagree": {JST: 1}, "Disagree": {JST: 0.5}, "Neutral": {JST: 0}, "Agree": {JST: -0.5}, "Strongly Agree": {JST: -1} } },

  // --- RELIGION ---
  { code: "RLG1", question: "Science is the only universally valid source of knowledge", scores: { "Strongly Disagree": {RLG: 1}, "Disagree": {RLG: 0.5}, "Neutral": {RLG: 0}, "Agree": {RLG: -0.5}, "Strongly Agree": {RLG: -1} } },
  { code: "RLG2", question: "There is an innate meaning to life", scores: { "Strongly Disagree": {RLG: -1}, "Disagree": {RLG: -0.5}, "Neutral": {RLG: 0}, "Agree": {RLG: 0.5}, "Strongly Agree": {RLG: 1} } },
  { code: "RLG3", question: "Faith and reason complement each other", scores: { "Strongly Disagree": {RLG: -1}, "Disagree": {RLG: -0.5}, "Neutral": {RLG: 0}, "Agree": {RLG: 0.5}, "Strongly Agree": {RLG: 1} } },
  { code: "RLG4", question: "Prayer can have a real effect on our lives", scores: { "Strongly Disagree": {RLG: -1}, "Disagree": {RLG: -0.5}, "Neutral": {RLG: 0}, "Agree": {RLG: 0.5}, "Strongly Agree": {RLG: 1} } },
  { code: "RLG5", question: "Supernatural forces have played a major role in human history", scores: { "Strongly Disagree": {RLG: -1}, "Disagree": {RLG: -0.5}, "Neutral": {RLG: 0}, "Agree": {RLG: 0.5}, "Strongly Agree": {RLG: 1} } },
  { code: "RLG6", question: "Morality cannot be explained in purely materialistic terms", scores: { "Strongly Disagree": {RLG: -1, ETH: -1}, "Disagree": {RLG: -0.5, ETH: -0.5}, "Neutral": {RLG: 0, ETH: 0}, "Agree": {RLG: 0.5, ETH: 0.5}, "Strongly Agree": {RLG: 1, ETH: 1} } },
  { code: "RLG7", question: "Religion is an outdated concept", scores: { "Strongly Disagree": {RLG: 1}, "Disagree": {RLG: 0.5}, "Neutral": {RLG: 0}, "Agree": {RLG: -0.5}, "Strongly Agree": {RLG: -1} } },
  { code: "RLG8", question: "Human life does not end with physical death", scores: { "Strongly Disagree": {RLG: -1}, "Disagree": {RLG: -0.5}, "Neutral": {RLG: 0}, "Agree": {RLG: 0.5}, "Strongly Agree": {RLG: 1} } }
];

const OPTIONS = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];

const AXIS_LABELS = {
  ETH: { pos: "Objectivism", neg: "Subjectivism" },
  HN:  { pos: "Realism", neg: "Constructivism" },
  TRB: { pos: "Tribalism", neg: "Universalism" },
  JST: { pos: "Justice", neg: "Equality" },
  RLG: { pos: "Spiritual", neg: "Laic" }
};

let currentIndex = 0;
let rawScores = {};
let maxPossibleScores = {};
let userAnswers = [];

function calculateBounds() {
  SURVEY_DATA.forEach(q => {
    let qMaxPerAxis = {};
    Object.values(q.scores).forEach(weights => {
      Object.entries(weights).forEach(([axis, weight]) => {
        if (!qMaxPerAxis[axis] || weight > qMaxPerAxis[axis]) {
          qMaxPerAxis[axis] = weight;
        }
      });
    });

    Object.entries(qMaxPerAxis).forEach(([axis, maxW]) => {
      maxPossibleScores[axis] = (maxPossibleScores[axis] || 0) + maxW;
      if (!(axis in rawScores)) rawScores[axis] = 0;
    });
  });
}

function loadQuestion() {
  const qData = SURVEY_DATA[currentIndex];
  if (!qData) return;
  
  const progText = document.getElementById("progress-text");
  if (progText) progText.innerText = `Question ${currentIndex + 1} of ${SURVEY_DATA.length}`;
  
  const progFill = document.getElementById("progress-fill");
  if (progFill) progFill.style.width = `${(currentIndex / SURVEY_DATA.length) * 100}%`;

  const btnPrev = document.getElementById("btn-prev");
  if (btnPrev) btnPrev.disabled = (currentIndex === 0);

  const qText = document.getElementById("question-text");
  if (qText) qText.innerText = qData.question;

  const container = document.getElementById("options-container");
  if (container) {
    container.innerHTML = "";
    OPTIONS.forEach(optText => {
      const btn = document.createElement("button");
      btn.className = "btn-option";
      btn.innerText = optText;
      btn.onclick = () => handleChoice(optText);
      container.appendChild(btn);
    });
  }
}

function handleChoice(selectedOption) {
  const qData = SURVEY_DATA[currentIndex];
  const weights = qData.scores[selectedOption] || {};

  userAnswers.push({
    questionIndex: currentIndex,
    selectedOption: selectedOption,
    weights: weights
  });

  Object.entries(weights).forEach(([axis, weight]) => {
    if (axis in rawScores) {
      rawScores[axis] += weight;
    }
  });

  currentIndex++;
  if (currentIndex < SURVEY_DATA.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function handlePrevious() {
  if (currentIndex <= 0 || userAnswers.length === 0) return;

  const lastAnswer = userAnswers.pop();

  Object.entries(lastAnswer.weights).forEach(([axis, weight]) => {
    if (axis in rawScores) {
      rawScores[axis] -= weight;
    }
  });

  currentIndex--;
  loadQuestion();
}

function showResults() {
  const surveyView = document.getElementById("survey-view");
  const resultView = document.getElementById("result-view");
  if (surveyView) surveyView.classList.add("hidden");
  if (resultView) resultView.classList.remove("hidden");
  
  const resultsContainer = document.getElementById("results-list");
  if (resultsContainer) resultsContainer.innerHTML = "";

  let vectorParts = [];

  Object.keys(maxPossibleScores).forEach(axis => {
    const raw = rawScores[axis];
    const max = maxPossibleScores[axis];
    const scaled = max > 0 ? (raw / max) * 10 : 0;
    const formatted = scaled.toFixed(1);

    const labels = AXIS_LABELS[axis] || { pos: "Positive", neg: "Negative" };
    const stanceTag = scaled >= 0 ? labels.pos : labels.neg;

    vectorParts.push(`${axis}:${formatted}`);

    if (resultsContainer) {
      const row = document.createElement("div");
      row.className = "result-row";
      row.innerHTML = `
        <span><strong>${axis}</strong> <small style="color: #94a3b8; margin-left: 6px;">(${stanceTag})</small></span>
        <span>${scaled >= 0 ? '+' : ''}${formatted}</span>
      `;
      resultsContainer.appendChild(row);
    }
  });

  const vecText = document.getElementById("vector-text");
  if (vecText) vecText.innerText = `[${vectorParts.join("|")}]`;
}

function switchTab(tabName) {
  const pageTest = document.getElementById("page-test");
  const pageAbout = document.getElementById("page-about");
  const pageComment = document.getElementById("page-comment");

  const navTest = document.getElementById("nav-test");
  const navAbout = document.getElementById("nav-about");
  const navComment = document.getElementById("nav-comment");

  if (pageTest) pageTest.classList.add("hidden");
  if (pageAbout) pageAbout.classList.add("hidden");
  if (pageComment) pageComment.classList.add("hidden");

  if (navTest) navTest.classList.remove("active");
  if (navAbout) navAbout.classList.remove("active");
  if (navComment) navComment.classList.remove("active");

  if (tabName === "test" && pageTest && navTest) {
    pageTest.classList.remove("hidden");
    navTest.classList.add("active");
  } else if (tabName === "about" && pageAbout && navAbout) {
    pageAbout.classList.remove("hidden");
    navAbout.classList.add("active");
  } else if (tabName === "comment" && pageComment && navComment) {
    pageComment.classList.remove("hidden");
    navComment.classList.add("active");
  }
}

function submitCommentToSheets(event) {
  event.preventDefault();

  if (!GOOGLE_SHEETS_URL) {
    alert("Google Sheets URL is not configured yet.");
    return;
  }

  const nicknameInput = document.getElementById("comment-nickname");
  const commentInput = document.getElementById("comment-text");
  const btnSubmit = document.getElementById("btn-submit-comment");
  const statusText = document.getElementById("comment-status");

  const nickname = nicknameInput.value.trim();
  const comment = commentInput.value.trim();

  const vectorElement = document.getElementById("vector-text");
  const currentVector = (vectorElement && vectorElement.innerText) ? vectorElement.innerText : "Not Taken Yet";

  if (!nickname || !comment) return;

  btnSubmit.disabled = true;
  btnSubmit.innerText = "Sending...";
  statusText.style.display = "block";
  statusText.style.color = "#94a3b8";
  statusText.innerText = "Submitting your comment...";

  // Arka planda gizli iframe ve form ile veri gönderimi
  let iframe = document.getElementById("hidden-script-iframe");
  if (!iframe) {
    iframe = document.createElement("iframe");
    iframe.id = "hidden-script-iframe";
    iframe.name = "hidden-script-iframe";
    iframe.style.display = "none";
    document.body.appendChild(iframe);
  }

  const form = document.createElement("form");
  form.method = "POST";
  form.action = GOOGLE_SHEETS_URL;
  form.target = "hidden-script-iframe";

  const fields = {
    nickname: nickname,
    comment: comment,
    vector: currentVector
  };

  for (let key in fields) {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = fields[key];
    form.appendChild(input);
  }

  document.body.appendChild(form);
  form.submit();

  setTimeout(() => {
    statusText.style.color = "#4ade80";
    statusText.innerText = "Thank you! Your comment has been recorded.";
    
    nicknameInput.value = "";
    commentInput.value = "";
    btnSubmit.disabled = false;
    btnSubmit.innerText = "Submit Comment";
    
    if (form.parentNode) {
      form.parentNode.removeChild(form);
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  const btnNavTest = document.getElementById("nav-test");
  const btnNavAbout = document.getElementById("nav-about");
  const btnNavComment = document.getElementById("nav-comment");
  const btnPrev = document.getElementById("btn-prev");
  const commentForm = document.getElementById("comment-form");

  if (btnNavTest) btnNavTest.onclick = () => switchTab("test");
  if (btnNavAbout) btnNavAbout.onclick = () => switchTab("about");
  if (btnNavComment) btnNavComment.onclick = () => switchTab("comment");
  if (btnPrev) btnPrev.onclick = handlePrevious;
  if (commentForm) commentForm.onsubmit = submitCommentToSheets;

  calculateBounds();
  loadQuestion();
});
