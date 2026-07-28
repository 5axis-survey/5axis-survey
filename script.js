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
  { code: "HN2", question: "Some political systems go against human nature", scores: { "Strongly Disagree": {HN: -1}, "Disagree": {HN: -0.5}, "Neutral": {HN: 0}, "Agree": {HN: 0.5}, "Strongly Agree": {HN: 1} } },
  { code: "HN3", question: "Rehabilitation is possible regardless of past actions", scores: { "Strongly Disagree": {HN: 1}, "Disagree": {HN: 0.5}, "Neutral": {HN: 0}, "Agree": {HN: -0.5}, "Strongly Agree": {HN: -1} } },
  { code: "HN4", question: "Some people are predisposed to violent behavior", scores: { "Strongly Disagree": {HN: -1}, "Disagree": {HN: -0.5}, "Neutral": {HN: 0}, "Agree": {HN: 0.5}, "Strongly Agree": {HN: 1} } },
  { code: "HN5", question: "A perfect society is achievable", scores: { "Strongly Disagree": {HN: 1}, "Disagree": {HN: 0.5}, "Neutral": {HN: 0}, "Agree": {HN: -0.5}, "Strongly Agree": {HN: -1} } },
  { code: "HN6", question: "People are born with a fixed underlying human nature", scores: { "Strongly Disagree": {HN: -1.5}, "Disagree": {HN: -0.75}, "Neutral": {HN: 0}, "Agree": {HN: 0.75}, "Strongly Agree": {HN: 1.5} } },
  { code: "HN7", question: "We are shaped more by our experiences than by our genetics", scores: { "Strongly Disagree": {HN: 1}, "Disagree": {HN: 0.5}, "Neutral": {HN: 0}, "Agree": {HN: -0.5}, "Strongly Agree": {HN: -1} } },

  // --- TRIBALISM ---
  { code: "TRB1", question: "Strangers deserve as much of our help as members of our community", scores: { "Strongly Disagree": {TRB: 1}, "Disagree": {TRB: 0.5}, "Neutral": {TRB: 0}, "Agree": {TRB: -0.5}, "Strongly Agree": {TRB: -1} } },
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
  ETH: { neg: "Subjectivism",   negKey: "S", pos: "Objectivism", posKey: "O" },
  HN:  { neg: "Constructivism", negKey: "C", pos: "Realism",     posKey: "R" },
  TRB: { neg: "Universalism",   negKey: "U", pos: "Tribalism",   posKey: "T" },
  JST: { neg: "Equality",       negKey: "E", pos: "Justice",     posKey: "J" },
  RLG: { neg: "Laicity",        negKey: "L", pos: "Spiritualism", posKey: "P" }
};

// Sonuclarin ekranda gorunecegi sabit sira.
// (RLG6 hem RLG hem ETH'yi etkiledigi icin Object.keys sirasina guvenmiyoruz.)
const AXIS_ORDER = ["ETH", "HN", "TRB", "JST", "RLG"];

let currentIndex = 0;
let rawScores = {};
let maxPossibleScores = {};
let userAnswers = [];
let lastResults = [];      // paylasim gorseli icin sonuc anlik goruntusu
let shareBlob = null;     // uretilen PNG

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

  // Soru kodunu (örneğin ETH1) gizleyerek sadece temiz soru metnini basıyoruz
  const qText = document.getElementById("question-text");
  if (qText) qText.innerText = qData.question;

  // Bu soru daha once cevaplandiysa secimi geri getir
  const saved = userAnswers[currentIndex];

  const container = document.getElementById("options-container");
  if (container) {
    container.innerHTML = "";
    OPTIONS.forEach(optText => {
      const btn = document.createElement("button");
      btn.className = "btn-option";
      btn.innerText = optText;
      btn.setAttribute("aria-pressed", "false");

      if (saved && saved.selectedOption === optText) {
        btn.classList.add("selected");
        btn.setAttribute("aria-pressed", "true");
      }

      btn.onclick = () => handleChoice(optText);
      container.appendChild(btn);
    });
  }
}

function handleChoice(selectedOption) {
  const qData = SURVEY_DATA[currentIndex];
  const weights = qData.scores[selectedOption] || {};

  // Kullanici geri donup cevabini degistirdiyse eski agirliklari once geri al
  const previous = userAnswers[currentIndex];
  if (previous) {
    Object.entries(previous.weights).forEach(([axis, weight]) => {
      if (axis in rawScores) rawScores[axis] -= weight;
    });
  }

  userAnswers[currentIndex] = {
    questionIndex: currentIndex,
    selectedOption: selectedOption,
    weights: weights
  };

  Object.entries(weights).forEach(([axis, weight]) => {
    if (axis in rawScores) rawScores[axis] += weight;
  });

  currentIndex++;
  if (currentIndex < SURVEY_DATA.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function handlePrevious() {
  if (currentIndex <= 0) return;

  // Cevap silinmiyor; sadece bir soru geri gidiyoruz ki secim gorunur kalsin
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

  const vectorParts = [];
  const codeParts = [];
  const pendingFills = [];
  lastResults = [];

  if (resultsContainer) {
    const legend = document.createElement("div");
    legend.className = "axis-legend";
    legend.innerHTML = "<span>-10</span><span>-5</span><span>0</span><span>+5</span><span>+10</span>";
    resultsContainer.appendChild(legend);
  }

  AXIS_ORDER.forEach(axis => {
    const raw = rawScores[axis] || 0;
    const max = maxPossibleScores[axis] || 0;

    // -10 / +10 araligina normalize et ve tasmaya karsi kilitle
    let scaled = max > 0 ? (raw / max) * 10 : 0;
    scaled = Math.max(-10, Math.min(10, scaled));

    const formatted = scaled.toFixed(1);
    const labels = AXIS_LABELS[axis] || { neg: "Negative", negKey: "-", pos: "Positive", posKey: "+" };

    const isNeutral = Math.abs(scaled) < 0.05;
    const isPos = scaled >= 0;
    const halfPct = (Math.abs(scaled) / 10) * 50;   // yarim genislik: 0-50%
    const targetLeft = isPos ? 50 : 50 - halfPct;

    vectorParts.push(`${axis}:${formatted}`);
    // Her eksen bir tarafa cozulur -> 2^5 = 32 profil. Tam 0.0 pozitif tarafa yuvarlanir.
    codeParts.push({
      letter: isPos ? labels.posKey : labels.negKey,
      side: isPos ? "pos" : "neg",
      pole: isPos ? labels.pos : labels.neg,
      tip: `${axis}: ${isPos ? labels.pos : labels.neg}`
    });

    lastResults.push({
      axis: axis,
      scaled: scaled,
      formatted: formatted,
      isPos: isPos,
      neg: labels.neg, negKey: labels.negKey,
      pos: labels.pos, posKey: labels.posKey
    });

    if (!resultsContainer) return;

    const leftDominant  = (!isNeutral && !isPos) ? " dominant" : "";
    const rightDominant = (!isNeutral && isPos)  ? " dominant" : "";

    const row = document.createElement("div");
    row.className = "axis-result";
    row.innerHTML = `
      <div class="axis-head">
        <span class="axis-side left${leftDominant}">
          <span class="axis-key">${labels.negKey}</span> ${labels.neg}
        </span>
        <span class="axis-score">
          ${axis} <strong>${isPos && !isNeutral ? "+" : ""}${formatted}</strong>
        </span>
        <span class="axis-side right${rightDominant}">
          ${labels.pos} <span class="axis-key">${labels.posKey}</span>
        </span>
      </div>
      <div class="axis-track" role="img"
           aria-label="${axis}: ${formatted} (${isNeutral ? "balanced" : (isPos ? labels.pos : labels.neg)})">
        <div class="axis-fill ${isPos ? "pos" : "neg"}" style="left:50%; width:0%;"></div>
        <div class="axis-midline"></div>
      </div>
    `;

    resultsContainer.appendChild(row);
    pendingFills.push({ el: row.querySelector(".axis-fill"), left: targetLeft, width: halfPct });
  });

  // Barlari merkezden disari dogru animasyonla ac
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      pendingFills.forEach(f => {
        f.el.style.left = f.left + "%";
        f.el.style.width = f.width + "%";
      });
    });
  });

  const vecText = document.getElementById("vector-text");
  if (vecText) vecText.innerText = `[${vectorParts.join("|")}]`;

  // Bes harflik tip kodu: ETH-HN-TRB-JST-RLG sirasiyla baskin kutuplar
  const codeString = codeParts.map(c => c.letter).join("");
  const codeBox = document.getElementById("vector-code");
  if (codeBox) {
    codeBox.dataset.code = codeString;
    codeBox.innerHTML = codeParts
      .map(c => `<span class="code-letter ${c.side}" title="${c.tip}">${c.letter}</span>`)
      .join("");
  }

  const poles = document.getElementById("profile-poles");
  if (poles) poles.innerText = codeParts.map(c => c.pole).join(" \u00b7 ");

  wireShareLinks();
  prepareShareImage();

  const btnNative = document.getElementById("btn-share-native");
  if (btnNative) btnNative.classList.toggle("hidden", !canShareFiles());
}

async function handleCopyCode() {
  const codeBox = document.getElementById("vector-code");
  const vecText = document.getElementById("vector-text");
  const btn = document.getElementById("btn-copy-code");
  if (!codeBox || !codeBox.dataset.code || !btn) return;

  const payload = `Your Profile: ${codeBox.dataset.code} ${vecText ? vecText.innerText : ""}`.trim();
  const original = "Copy";

  try {
    await navigator.clipboard.writeText(payload);
    btn.innerText = "Copied";
  } catch (err) {
    btn.innerText = "Copy failed";
  }
  setTimeout(() => { btn.innerText = original; }, 1600);
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

// ARKA PLANDA E-POSTA GÖNDERME (HİÇBİR DOSYA İNDİRMEZ)
async function handleCommentSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const actionUrl = form.action;
  const statusText = document.getElementById("comment-status");
  const btnSubmit = document.getElementById("btn-submit-comment");

  const nicknameInput = document.getElementById("comment-nickname");
  const commentInput = document.getElementById("comment-text");
  const vectorElement = document.getElementById("vector-text");
  const codeElement = document.getElementById("vector-code");

  const nickname = nicknameInput ? nicknameInput.value.trim() : "";
  const comment = commentInput ? commentInput.value.trim() : "";
  const currentVector = (vectorElement && vectorElement.innerText) ? vectorElement.innerText : "Not Taken Yet";
  const currentCode = (codeElement && codeElement.dataset.code) ? codeElement.dataset.code : "Not Taken Yet";

  if (!nickname || !comment) return;

  btnSubmit.disabled = true;
  btnSubmit.innerText = "Sending...";
  if (statusText) {
    statusText.style.display = "block";
    statusText.style.color = "#94a3b8";
    statusText.innerText = "Sending your message...";
  }

  const payload = {
    Nickname: nickname,
    Comment: comment,
    Type_Code: currentCode,
    Vector_Result: currentVector
  };

  try {
    const response = await fetch(actionUrl, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      if (statusText) {
        statusText.style.color = "#4ade80";
        statusText.innerText = "Thank you! Your comment has been sent successfully.";
      }
      nicknameInput.value = "";
      commentInput.value = "";
    } else {
      throw new Error("Server error");
    }
  } catch (error) {
    if (statusText) {
      statusText.style.color = "#ef4444";
      statusText.innerText = "An error occurred. Please check the endpoint URL or try again.";
    }
  } finally {
    btnSubmit.disabled = false;
    btnSubmit.innerText = "Submit Comment";
  }
}


/* =========================================================
   PAYLASIM
   Gorsel: canvas -> PNG. navigator.share() varsa cihazin
   paylas menusune dosya olarak gider (Instagram, WhatsApp...).
   Link butonlari sadece metin tasir; bu bir tarayici kisiti.
   ========================================================= */

function getProfileCode() {
  const box = document.getElementById("vector-code");
  return (box && box.dataset.code) ? box.dataset.code : "";
}

function getVectorString() {
  const el = document.getElementById("vector-text");
  return el ? el.innerText : "";
}

function getPageUrl() {
  return location.origin + location.pathname;
}

function getShareText() {
  return `My 5-Axis Compass profile: ${getProfileCode()} ${getVectorString()}`.trim();
}

function wireShareLinks() {
  const text = getShareText();
  const url = getPageUrl();
  const t = encodeURIComponent(text);
  const u = encodeURIComponent(url);
  const both = encodeURIComponent(`${text}\n${url}`);

  const links = {
    "share-wa":   `https://wa.me/?text=${both}`,
    "share-x":    `https://twitter.com/intent/tweet?text=${t}&url=${u}`,
    "share-tg":   `https://t.me/share/url?url=${u}&text=${t}`,
    "share-mail": `https://mail.google.com/mail/?view=cm&fs=1&su=${encodeURIComponent("My 5-Axis Compass result")}&body=${both}`
  };

  Object.entries(links).forEach(([id, href]) => {
    const el = document.getElementById(id);
    if (el) el.href = href;
  });
}

function roundRectPath(ctx, x, y, w, h, r) {
  const rr = Math.max(0, Math.min(r, w / 2, h / 2));
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

function drawShareCanvas() {
  const W = 1080, H = 1350;
  const SANS = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
  const MONO = "'Courier New', Courier, monospace";
  const PAD = 90;
  const CW = W - PAD * 2;

  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#0f172a";
  ctx.fillRect(0, 0, W, H);

  roundRectPath(ctx, 36, 36, W - 72, H - 72, 30);
  ctx.fillStyle = "#1e293b";
  ctx.fill();
  ctx.strokeStyle = "#334155";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.textBaseline = "alphabetic";
  ctx.textAlign = "left";

  ctx.fillStyle = "#38bdf8";
  ctx.font = `700 46px ${SANS}`;
  ctx.fillText("5-Axis Compass", PAD, 132);

  ctx.fillStyle = "#94a3b8";
  ctx.font = `italic 23px ${SANS}`;
  ctx.fillText("created by H\u00fcseyin Ba\u015ftu\u011f & Arda Toby \u00d6zdemir", PAD, 170);

  ctx.fillStyle = "#94a3b8";
  ctx.font = `600 24px ${SANS}`;
  ctx.fillText("YOUR PROFILE", PAD, 244);

  // --- Profil kodu: tek parca govde ---
  const LS = 92;
  ctx.font = `700 ${LS}px ${MONO}`;
  const letters = lastResults.map(r => (r.isPos ? r.posKey : r.negKey));
  const widths = letters.map(l => ctx.measureText(l).width);
  const LGAP = 18, BOXPX = 46, BOXPY = 30;

  const inner = widths.reduce((a, b) => a + b, 0) + LGAP * (letters.length - 1);
  const boxW = inner + BOXPX * 2;
  const boxH = LS + BOXPY * 2;
  const boxX = (W - boxW) / 2;
  const boxY = 268;

  roundRectPath(ctx, boxX, boxY, boxW, boxH, 20);
  ctx.fillStyle = "#0f172a";
  ctx.fill();
  ctx.strokeStyle = "#334155";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.textAlign = "left";
  let lx = boxX + BOXPX;
  letters.forEach((letter, i) => {
    ctx.fillStyle = lastResults[i].isPos ? "#38bdf8" : "#a78bfa";
    ctx.fillText(letter, lx, boxY + BOXPY + LS * 0.78);
    lx += widths[i] + LGAP;
  });

  // --- Kutup isimleri ---
  const poles = lastResults.map(r => (r.isPos ? r.pos : r.neg)).join("  \u00b7  ");
  ctx.textAlign = "center";
  ctx.fillStyle = "#94a3b8";
  let poleSize = 24;
  ctx.font = `${poleSize}px ${SANS}`;
  while (ctx.measureText(poles).width > CW && poleSize > 15) {
    poleSize -= 1;
    ctx.font = `${poleSize}px ${SANS}`;
  }
  ctx.fillText(poles, W / 2, boxY + boxH + 52);

  // --- Barlar ---
  const cx = PAD + CW / 2;
  let by = 540;

  lastResults.forEach(r => {
    ctx.font = `22px ${SANS}`;

    ctx.textAlign = "left";
    ctx.fillStyle = r.isPos ? "#64748b" : "#f8fafc";
    ctx.fillText(`${r.negKey}  ${r.neg}`, PAD, by);

    ctx.textAlign = "right";
    ctx.fillStyle = r.isPos ? "#f8fafc" : "#64748b";
    ctx.fillText(`${r.pos}  ${r.posKey}`, PAD + CW, by);

    ctx.textAlign = "center";
    ctx.fillStyle = "#cbd5e1";
    ctx.font = `700 22px ${MONO}`;
    ctx.fillText(`${r.axis} ${r.scaled >= 0 ? "+" : ""}${r.formatted}`, cx, by);

    const trackY = by + 18;
    const trackH = 24;

    roundRectPath(ctx, PAD, trackY, CW, trackH, 12);
    ctx.fillStyle = "#0f172a";
    ctx.fill();
    ctx.strokeStyle = "#334155";
    ctx.lineWidth = 2;
    ctx.stroke();

    const halfW = (Math.abs(r.scaled) / 10) * (CW / 2);
    if (halfW > 1) {
      roundRectPath(ctx, r.isPos ? cx : cx - halfW, trackY, halfW, trackH, 12);
      ctx.fillStyle = r.isPos ? "#38bdf8" : "#a78bfa";
      ctx.fill();
    }

    ctx.strokeStyle = "#64748b";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx, trackY);
    ctx.lineTo(cx, trackY + trackH);
    ctx.stroke();

    by += 108;
  });

  // --- Vektor ---
  ctx.strokeStyle = "#334155";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(PAD, by + 6);
  ctx.lineTo(PAD + CW, by + 6);
  ctx.stroke();

  ctx.textAlign = "center";
  ctx.fillStyle = "#94a3b8";
  ctx.font = `21px ${SANS}`;
  ctx.fillText("Result Vector", W / 2, by + 52);

  ctx.fillStyle = "#f8fafc";
  let vecSize = 26;
  const vec = getVectorString();
  ctx.font = `${vecSize}px ${MONO}`;
  while (ctx.measureText(vec).width > CW && vecSize > 14) {
    vecSize -= 1;
    ctx.font = `${vecSize}px ${MONO}`;
  }
  ctx.fillText(vec, W / 2, by + 92);

  const host = location.host;
  if (host) {
    ctx.fillStyle = "#64748b";
    ctx.font = `20px ${SANS}`;
    ctx.fillText(host, W / 2, H - 82);
  }

  return canvas;
}

/* Gorseli sonuclar ekrana gelir gelmez hazirla.
   navigator.share() iOS Safari'de kullanici hareketiyle ayni anda
   cagrilmak zorunda; blob'u onceden uretmezsek paylasim engelleniyor. */
function prepareShareImage() {
  shareBlob = null;
  try {
    drawShareCanvas().toBlob(blob => { shareBlob = blob; }, "image/png");
  } catch (err) {
    shareBlob = null;
  }
}

function canShareFiles() {
  try {
    const probe = new File([new Blob()], "probe.png", { type: "image/png" });
    return !!(navigator.canShare && navigator.canShare({ files: [probe] }));
  } catch (err) {
    return false;
  }
}

function shareImageNative() {
  if (!shareBlob) return;
  const file = new File([shareBlob], "5-axis-compass.png", { type: "image/png" });
  navigator.share({
    files: [file],
    title: "5-Axis Compass",
    text: getShareText()
  }).catch(() => { /* kullanici iptal etti */ });
}

function downloadShareImage() {
  if (!shareBlob) return;
  const url = URL.createObjectURL(shareBlob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `5-axis-compass-${getProfileCode() || "result"}.png`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

document.addEventListener("DOMContentLoaded", () => {
  const btnNavTest = document.getElementById("nav-test");
  const btnNavAbout = document.getElementById("nav-about");
  const btnNavComment = document.getElementById("nav-comment");
  const btnPrev = document.getElementById("btn-prev");
  const commentForm = document.getElementById("comment-form");
  const btnCopyCode = document.getElementById("btn-copy-code");

  if (btnNavTest) btnNavTest.onclick = () => switchTab("test");
  if (btnNavAbout) btnNavAbout.onclick = () => switchTab("about");
  if (btnNavComment) btnNavComment.onclick = () => switchTab("comment");
  if (btnPrev) btnPrev.onclick = handlePrevious;
  if (commentForm) commentForm.onsubmit = handleCommentSubmit;
  if (btnCopyCode) btnCopyCode.onclick = handleCopyCode;

  const btnDownloadImg = document.getElementById("btn-download-img");
  const btnShareNative = document.getElementById("btn-share-native");

  if (btnDownloadImg) btnDownloadImg.onclick = downloadShareImage;
  if (btnShareNative) btnShareNative.onclick = shareImageNative;

  calculateBounds();
  loadQuestion();
});
