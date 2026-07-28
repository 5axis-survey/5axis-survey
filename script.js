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

/* Bes eksen uc cluster altinda toplaniyor.
   Iki boyutlu cluster'larda kombinasyon anahtari = yatayHarf + dikeyHarf. */
const CLUSTERS = [
  {
    id: "PHI",
    name: "Philosophical Cluster",
    x: "ETH",              // yatay: S <-> O
    y: "HN",               // dikey:  C <-> R
    combos: {
      OR: { name: "Yellow", hex: "#eab308" },
      SR: { name: "Red",    hex: "#ef4444" },
      SC: { name: "Green",  hex: "#22c55e" },
      OC: { name: "Blue",   hex: "#3b82f6" }
    }
  },
  {
    id: "POL",
    name: "Political Cluster",
    x: "TRB",              // yatay: U <-> T
    y: "JST",              // dikey:  E <-> J
    combos: {
      TJ: { name: "Orange", hex: "#f97316" },
      UJ: { name: "Purple", hex: "#a855f7" },
      UE: { name: "Brown",  hex: "#9a6b4f" },
      TE: { name: "Gray",   hex: "#94a3b8" }
    }
  },
  {
    id: "RLG",
    name: "Religion Cluster",
    single: "RLG"
  }
];

let lastClusters = [];   // paylasim gorseli icin cluster anlik goruntusu

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

function computeAxis(axis) {
  const raw = rawScores[axis] || 0;
  const max = maxPossibleScores[axis] || 0;

  let scaled = max > 0 ? (raw / max) * 10 : 0;
  scaled = Math.max(-10, Math.min(10, scaled));

  const labels = AXIS_LABELS[axis];
  const isPos = scaled >= 0;

  return {
    axis: axis,
    scaled: scaled,
    formatted: scaled.toFixed(1),
    isPos: isPos,
    isNeutral: Math.abs(scaled) < 0.05,
    neg: labels.neg, negKey: labels.negKey,
    pos: labels.pos, posKey: labels.posKey,
    letter: isPos ? labels.posKey : labels.negKey,
    pole: isPos ? labels.pos : labels.neg
  };
}

function buildBarHTML(r) {
  const half = (Math.abs(r.scaled) / 10) * 50;
  const left = r.isPos ? 50 : 50 - half;
  const ld = (!r.isNeutral && !r.isPos) ? " dominant" : "";
  const rd = (!r.isNeutral && r.isPos) ? " dominant" : "";
  const sign = (r.isPos && !r.isNeutral) ? "+" : "";

  return `
    <div class="axis-result">
      <div class="axis-head">
        <span class="axis-side left${ld}"><span class="axis-key">${r.negKey}</span> ${r.neg}</span>
        <span class="axis-score">${r.axis} <strong>${sign}${r.formatted}</strong></span>
        <span class="axis-side right${rd}">${r.pos} <span class="axis-key">${r.posKey}</span></span>
      </div>
      <div class="axis-track" role="img"
           aria-label="${r.axis}: ${r.formatted} towards ${r.isNeutral ? "neither pole" : r.pole}">
        <div class="axis-fill ${r.isPos ? "pos" : "neg"}"
             data-left="${left}" data-width="${half}" style="left:50%; width:0%;"></div>
        <div class="axis-midline"></div>
      </div>
    </div>`;
}

/* Iki boyutlu cluster karesi. viewBox 240x240; kare 20,20 -> 220,220 */
function buildGridSVG(cluster, xr, yr) {
  const activeKey = xr.letter + yr.letter;
  const dx = 120 + (xr.scaled / 10) * 90;
  const dy = 120 - (yr.scaled / 10) * 90;

  const quads = [
    { x: 120, y: 20,  key: xr.posKey + yr.posKey },
    { x: 20,  y: 20,  key: xr.negKey + yr.posKey },
    { x: 20,  y: 120, key: xr.negKey + yr.negKey },
    { x: 120, y: 120, key: xr.posKey + yr.negKey }
  ];

  const rects = quads.map(q => {
    const combo = cluster.combos[q.key];
    const active = (q.key === activeKey);
    return `<rect x="${q.x}" y="${q.y}" width="100" height="100" rx="2"
              fill="${combo.hex}" opacity="${active ? 0.58 : 0.15}">
              <title>${q.key} \u2014 ${combo.name}</title>
            </rect>`;
  }).join("");

  return `
    <svg viewBox="0 0 240 240" class="cluster-svg" role="img"
         aria-label="${cluster.name} position: ${activeKey}">
      ${rects}
      <line x1="120" y1="20" x2="120" y2="220" stroke="#64748b" stroke-width="1"></line>
      <line x1="20" y1="120" x2="220" y2="120" stroke="#64748b" stroke-width="1"></line>
      <rect x="20" y="20" width="200" height="200" fill="none" stroke="#475569" stroke-width="1.5" rx="3"></rect>
      <text class="grid-label" x="120" y="13"  text-anchor="middle">${yr.posKey}</text>
      <text class="grid-label" x="120" y="236" text-anchor="middle">${yr.negKey}</text>
      <text class="grid-label" x="9"   y="125" text-anchor="middle">${xr.negKey}</text>
      <text class="grid-label" x="231" y="125" text-anchor="middle">${xr.posKey}</text>
      <circle cx="${dx}" cy="${dy}" r="8" fill="#f8fafc" stroke="#0f172a" stroke-width="2.5"></circle>
    </svg>`;
}

const AXIS_LEGEND = '<div class="axis-legend"><span>-10</span><span>-5</span><span>0</span><span>+5</span><span>+10</span></div>';

function buildClusterBlock(cluster, byAxis) {
  const block = document.createElement("section");
  block.className = "cluster";

  if (cluster.single) {
    const r = byAxis[cluster.single];
    block.innerHTML = `
      <div class="cluster-head">
        <h3 class="cluster-name">${cluster.name}</h3>
      </div>
      <div class="cluster-body single">
        <div class="cluster-bars">${AXIS_LEGEND}${buildBarHTML(r)}</div>
      </div>`;
    return block;
  }

  const xr = byAxis[cluster.x];
  const yr = byAxis[cluster.y];
  const key = xr.letter + yr.letter;
  const combo = cluster.combos[key];

  block.innerHTML = `
    <div class="cluster-head">
      <h3 class="cluster-name">${cluster.name}</h3>
      <span class="cluster-tag">
        <span class="cluster-swatch" style="background:${combo.hex}"></span>
        ${key} &middot; ${combo.name}
      </span>
    </div>
    <div class="cluster-body">
      <div class="cluster-grid">${buildGridSVG(cluster, xr, yr)}</div>
      <div class="cluster-bars">${AXIS_LEGEND}${buildBarHTML(xr)}${buildBarHTML(yr)}</div>
    </div>`;

  return block;
}

function showResults() {
  const surveyView = document.getElementById("survey-view");
  const resultView = document.getElementById("result-view");
  if (surveyView) surveyView.classList.add("hidden");
  if (resultView) resultView.classList.remove("hidden");

  lastResults = AXIS_ORDER.map(computeAxis);

  const byAxis = {};
  lastResults.forEach(r => { byAxis[r.axis] = r; });

  // Cluster renkleri (yalnizca iki boyutlu olanlar renk tasir)
  lastClusters = CLUSTERS.filter(c => c.combos).map(c => {
    const key = byAxis[c.x].letter + byAxis[c.y].letter;
    return { cluster: c, key: key, name: c.combos[key].name, hex: c.combos[key].hex };
  });

  // --- Cluster bloklarini bas ---
  const container = document.getElementById("results-list");
  if (container) {
    container.innerHTML = "";
    CLUSTERS.forEach(c => container.appendChild(buildClusterBlock(c, byAxis)));

    // Barlari merkezden disari dogru ac
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        container.querySelectorAll(".axis-fill").forEach(el => {
          el.style.left = el.dataset.left + "%";
          el.style.width = el.dataset.width + "%";
        });
      });
    });
  }

  // --- Profil kodu ---
  const codeString = lastResults.map(r => r.letter).join("");
  const codeBox = document.getElementById("vector-code");
  if (codeBox) {
    codeBox.dataset.code = codeString;
    codeBox.innerText = codeString;
  }

  // --- Iki cluster rengi yan yana ---
  const colorBox = document.getElementById("profile-colors");
  if (colorBox) {
    colorBox.innerHTML = `
      <span class="color-pill">
        ${lastClusters.map(c => `<span class="color-half" style="background:${c.hex}" title="${c.cluster.name}: ${c.key} \u2014 ${c.name}"></span>`).join("")}
      </span>
      <span class="color-names">${lastClusters.map(c => c.name).join(" + ")}</span>`;
  }

  const poles = document.getElementById("profile-poles");
  if (poles) poles.innerText = lastResults.map(r => r.pole).join(" \u00b7 ");

  const vecText = document.getElementById("vector-text");
  if (vecText) vecText.innerText = `[${lastResults.map(r => `${r.axis}:${r.formatted}`).join("|")}]`;

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
  const colors = lastClusters.map(c => c.name).join(" + ");
  return `My 5-Axis Compass profile: ${getProfileCode()}${colors ? " (" + colors + ")" : ""} ${getVectorString()}`.trim();
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

function hexToRgba(hex, alpha) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}

function drawCanvasGrid(ctx, gx, gy, size, entry, xr, yr, SANS, MONO) {
  const half = size / 2;
  const activeKey = xr.letter + yr.letter;

  const quads = [
    { x: gx + half, y: gy,        key: xr.posKey + yr.posKey },
    { x: gx,        y: gy,        key: xr.negKey + yr.posKey },
    { x: gx,        y: gy + half, key: xr.negKey + yr.negKey },
    { x: gx + half, y: gy + half, key: xr.posKey + yr.negKey }
  ];

  quads.forEach(q => {
    const combo = entry.cluster.combos[q.key];
    ctx.fillStyle = hexToRgba(combo.hex, q.key === activeKey ? 0.58 : 0.15);
    ctx.fillRect(q.x, q.y, half, half);
  });

  ctx.strokeStyle = "#64748b";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(gx + half, gy); ctx.lineTo(gx + half, gy + size);
  ctx.moveTo(gx, gy + half); ctx.lineTo(gx + size, gy + half);
  ctx.stroke();

  ctx.strokeStyle = "#475569";
  ctx.lineWidth = 3;
  ctx.strokeRect(gx, gy, size, size);

  // Eksen harfleri kare icinde, kenarlara yakin
  ctx.fillStyle = "#94a3b8";
  ctx.font = `700 26px ${MONO}`;
  ctx.textAlign = "center";
  ctx.fillText(yr.posKey, gx + half, gy + 34);
  ctx.fillText(yr.negKey, gx + half, gy + size - 16);
  ctx.textAlign = "left";
  ctx.fillText(xr.negKey, gx + 14, gy + half + 10);
  ctx.textAlign = "right";
  ctx.fillText(xr.posKey, gx + size - 14, gy + half + 10);

  // Konum noktasi
  const dx = gx + half + (xr.scaled / 10) * (half * 0.9);
  const dy = gy + half - (yr.scaled / 10) * (half * 0.9);
  ctx.beginPath();
  ctx.arc(dx, dy, 15, 0, Math.PI * 2);
  ctx.fillStyle = "#f8fafc";
  ctx.fill();
  ctx.strokeStyle = "#0f172a";
  ctx.lineWidth = 4;
  ctx.stroke();
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
  ctx.font = `700 44px ${SANS}`;
  ctx.fillText("5-Axis Compass", PAD, 124);

  ctx.fillStyle = "#94a3b8";
  ctx.font = `italic 22px ${SANS}`;
  ctx.fillText("created by H\u00fcseyin Ba\u015ftu\u011f & Arda Toby \u00d6zdemir", PAD, 160);

  // --- Profil kodu ---
  const LS = 78;
  const codeStr = lastResults.map(r => r.letter).join("");
  ctx.font = `700 ${LS}px ${MONO}`;

  const BOXPX = 40, BOXPY = 24;
  const codeW = ctx.measureText(codeStr).width + BOXPX * 2;
  const codeH = LS + BOXPY * 2;
  const swatchW = 34, swatchGap = 16;
  const groupW = codeW + swatchGap + swatchW;
  const codeX = (W - groupW) / 2;
  const codeY = 210;

  roundRectPath(ctx, codeX, codeY, codeW, codeH, 16);
  ctx.fillStyle = "#0f172a";
  ctx.fill();
  ctx.strokeStyle = "#334155";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.textAlign = "center";
  ctx.fillStyle = "#f8fafc";
  ctx.fillText(codeStr, codeX + codeW / 2, codeY + BOXPY + LS * 0.78);

  // Iki cluster rengi yan yana, kodun sagina
  const swX = codeX + codeW + swatchGap;
  const swH = codeH / Math.max(1, lastClusters.length);
  roundRectPath(ctx, swX, codeY, swatchW, codeH, 10);
  ctx.save();
  ctx.clip();
  lastClusters.forEach((c, i) => {
    ctx.fillStyle = c.hex;
    ctx.fillRect(swX, codeY + i * swH, swatchW, swH);
  });
  ctx.restore();

  // --- Kutup isimleri ---
  const poles = lastResults.map(r => r.pole).join("  \u00b7  ");
  ctx.textAlign = "center";
  ctx.fillStyle = "#94a3b8";
  let poleSize = 23;
  ctx.font = `${poleSize}px ${SANS}`;
  while (ctx.measureText(poles).width > CW && poleSize > 14) {
    poleSize -= 1;
    ctx.font = `${poleSize}px ${SANS}`;
  }
  ctx.fillText(poles, W / 2, codeY + codeH + 46);

  // --- Iki boyutlu cluster kareleri ---
  const byAxis = {};
  lastResults.forEach(r => { byAxis[r.axis] = r; });

  const GS = 360, GGAP = 90;
  const gTotal = GS * 2 + GGAP;
  let gx = (W - gTotal) / 2;
  const gy = 490;

  lastClusters.forEach(entry => {
    const xr = byAxis[entry.cluster.x];
    const yr = byAxis[entry.cluster.y];

    ctx.textAlign = "center";
    ctx.fillStyle = "#cbd5e1";
    ctx.font = `600 24px ${SANS}`;
    ctx.fillText(entry.cluster.name.replace(" Cluster", ""), gx + GS / 2, gy - 18);

    drawCanvasGrid(ctx, gx, gy, GS, entry, xr, yr, SANS, MONO);

    // Kombinasyon + renk adi
    const cap = `${entry.key} \u00b7 ${entry.name}`;
    ctx.font = `600 24px ${MONO}`;
    const capW = ctx.measureText(cap).width;
    const dotR = 9;
    const capX = gx + GS / 2 - (capW + dotR * 2 + 12) / 2;

    ctx.beginPath();
    ctx.arc(capX + dotR, gy + GS + 36, dotR, 0, Math.PI * 2);
    ctx.fillStyle = entry.hex;
    ctx.fill();

    ctx.textAlign = "left";
    ctx.fillStyle = "#f8fafc";
    ctx.fillText(cap, capX + dotR * 2 + 12, gy + GS + 44);

    gx += GS + GGAP;
  });

  // --- Religion cluster: tek boyutlu bar ---
  const rr = byAxis["RLG"];
  const cx = PAD + CW / 2;
  const barY = 1000;

  ctx.font = `22px ${SANS}`;
  ctx.textAlign = "left";
  ctx.fillStyle = rr.isPos ? "#64748b" : "#f8fafc";
  ctx.fillText(`${rr.negKey}  ${rr.neg}`, PAD, barY);

  ctx.textAlign = "right";
  ctx.fillStyle = rr.isPos ? "#f8fafc" : "#64748b";
  ctx.fillText(`${rr.pos}  ${rr.posKey}`, PAD + CW, barY);

  ctx.textAlign = "center";
  ctx.fillStyle = "#cbd5e1";
  ctx.font = `700 22px ${MONO}`;
  ctx.fillText(`RLG ${rr.scaled >= 0 ? "+" : ""}${rr.formatted}`, cx, barY);

  const trackY = barY + 18, trackH = 24;
  roundRectPath(ctx, PAD, trackY, CW, trackH, 12);
  ctx.fillStyle = "#0f172a";
  ctx.fill();
  ctx.strokeStyle = "#334155";
  ctx.lineWidth = 2;
  ctx.stroke();

  const halfW = (Math.abs(rr.scaled) / 10) * (CW / 2);
  if (halfW > 1) {
    roundRectPath(ctx, rr.isPos ? cx : cx - halfW, trackY, halfW, trackH, 12);
    ctx.fillStyle = rr.isPos ? "#38bdf8" : "#a78bfa";
    ctx.fill();
  }
  ctx.strokeStyle = "#64748b";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx, trackY); ctx.lineTo(cx, trackY + trackH);
  ctx.stroke();

  // --- Vektor ---
  ctx.strokeStyle = "#334155";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(PAD, 1120); ctx.lineTo(PAD + CW, 1120);
  ctx.stroke();

  ctx.textAlign = "center";
  ctx.fillStyle = "#94a3b8";
  ctx.font = `20px ${SANS}`;
  ctx.fillText("Result Vector", W / 2, 1164);

  ctx.fillStyle = "#f8fafc";
  const vec = getVectorString();
  let vecSize = 25;
  ctx.font = `${vecSize}px ${MONO}`;
  while (ctx.measureText(vec).width > CW && vecSize > 13) {
    vecSize -= 1;
    ctx.font = `${vecSize}px ${MONO}`;
  }
  ctx.fillText(vec, W / 2, 1204);

  if (location.host) {
    ctx.fillStyle = "#64748b";
    ctx.font = `19px ${SANS}`;
    ctx.fillText(location.host, W / 2, 1272);
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
