/* Trainer Lite - private web app (no accounts) */
const WORKOUTS = {
  A: [
    {
      id: "chair_squat",
      name: "Chair Squats",
      meta: "3 × 10–12",
      demo: "squat",
      cues: [
        "Sit back to the chair, touch lightly, stand tall.",
        "Knees track over toes; keep chest up.",
        "Move slow and controlled."
      ],
      sets: 3
    },
    {
      id: "rev_lunge",
      name: "Static Split Squat (Supported)",
      meta: "3 × 8 / leg",
      demo: "lunge",
      cues: [
        "Hold wall/bed for balance.",
        "Lower straight down; front heel stays planted.",
        "Keep torso tall; small range is fine."
      ],
      sets: 3
    },
    {
      id: "glute_bridge",
      name: "Glute Bridges",
      meta: "3 × 12–15",
      demo: "bridge",
      cues: [
        "Push through heels; squeeze glutes at the top (2 sec).",
        "Ribs down—don’t over-arch low back.",
        "Feet hip-width apart."
      ],
      sets: 3
    },
    {
      id: "dead_bug",
      name: "Dead Bugs",
      meta: "3 × 6–8 / side",
      demo: "deadbug",
      cues: [
        "Lower opposite arm + leg slowly.",
        "Keep low back gently pressed to the floor.",
        "Breathe—don’t hold your breath."
      ],
      sets: 3
    },
    {
      id: "breathing",
      name: "Standing Breathing Reset",
      meta: "2 minutes",
      demo: "standbreathe",
      cues: [
        "Stand tall, soft knees.",
        "Light brace like zipping tight jeans (not sucking in).",
        "Slow nasal breathing into ribs."
      ],
      sets: 1,
      isTimedOnly: true,
      defaultWorkSeconds: 120
    }
  ],
  B: [
    {
      id: "wall_pushup",
      name: "Wall Pushups",
      meta: "3 × 10–15",
      demo: "pushup",
      cues: [
        "Hands on wall at chest height; body straight.",
        "Lower chest toward wall; push away.",
        "Step feet farther to make it harder."
      ],
      sets: 3
    },
    {
      id: "incline_pushup",
      name: "Incline Pushups (Bed/Desk)",
      meta: "3 × 8–12",
      demo: "pushup",
      cues: [
        "Hands elevated; keep body in one line.",
        "Elbows ~45° from your torso.",
        "Go slow—quality reps."
      ],
      sets: 3
    },
    {
      id: "prone_y",
      name: "Prone Y-Raises",
      meta: "3 × 10",
      demo: "proney",
      cues: [
        "Lie face down; arms overhead in a 'Y'.",
        "Lift arms slightly, thumbs up; squeeze upper back.",
        "Neck long; don’t shrug shoulders."
      ],
      sets: 3
    },
    {
      id: "plank",
      name: "Forearm Plank (Knees OK)",
      meta: "3 × 20–30 sec",
      demo: "plank",
      cues: [
        "Elbows under shoulders; body straight.",
        "Breathe slowly through your nose.",
        "Stop before your hips sag."
      ],
      sets: 3,
      isTimedOnly: true,
      defaultWorkSeconds: 25
    },
    {
      id: "rolls",
      name: "Neck & Shoulder Rolls",
      meta: "1–2 minutes",
      demo: "neckroll",
      cues: [
        "Slow circles; no forcing.",
        "Relax shoulders down.",
        "Breathe."
      ],
      sets: 1,
      isTimedOnly: true,
      defaultWorkSeconds: 90
    }
  ],
  C: [
    {
      id: "sit_to_stand",
      name: "Sit-to-Stand Squats",
      meta: "3 × 10",
      demo: "squat",
      cues: [
        "Stand up smoothly without using hands.",
        "Control down; tap the chair lightly.",
        "Chest up."
      ],
      sets: 3
    },
    {
      id: "knee_pushup",
      name: "Knee Pushups",
      meta: "3 × 6–10",
      demo: "pushup",
      cues: [
        "Knees down; body straight from knees to head.",
        "Lower chest; push back up.",
        "If hard, do incline pushups instead."
      ],
      sets: 3
    },
    {
      id: "marches",
      name: "Standing Marches (Slow)",
      meta: "3 × 20 total",
      demo: "march",
      cues: [
        "Lift knee toward hip height; slow and controlled.",
        "Stay tall; don’t lean back.",
        "Brace lightly while breathing."
      ],
      sets: 3
    },
    {
      id: "side_leg",
      name: "Side-Lying Leg Raises",
      meta: "3 × 10 / side",
      demo: "sideleg",
      cues: [
        "Lie on your side; lift top leg slowly.",
        "Toes slightly down; feel outer hip.",
        "Don’t rock your hips."
      ],
      sets: 3
    },
    {
      id: "side_plank",
      name: "Side Plank (Knees)",
      meta: "2 × 15–20 sec / side",
      demo: "plank",
      cues: [
        "Elbow under shoulder; hips up.",
        "Keep body stacked; breathe.",
        "Stop if shoulder pinches."
      ],
      sets: 2,
      isTimedOnly: true,
      defaultWorkSeconds: 18
    }
  ],
  E: [
    {
      id: "E1",
      name: "Chair Squats",
      meta: "12 reps",
      demo: "squat",
      cues: ["Move smooth and controlled.", "Chest up; knees track over toes."],
      sets: 1
    },
    {
      id: "E2",
      name: "Incline Pushups",
      meta: "8 reps",
      demo: "pushup",
      cues: ["Body straight.", "Slow reps; elbows ~45°."],
      sets: 1
    },
    {
      id: "E3",
      name: "Dead Bugs",
      meta: "6 / side",
      demo: "deadbug",
      cues: ["Low back stays down.", "Slow opposite arm/leg."],
      sets: 1
    },
    {
      id: "E4",
      name: "Plank",
      meta: "30 sec",
      demo: "plank",
      cues: ["Breathe through your nose.", "Stop before form breaks."],
      sets: 1,
      isTimedOnly: true,
      defaultWorkSeconds: 30
    },
    {
      id: "E5",
      name: "Standing Breathing",
      meta: "1 minute",
      demo: "standbreathe",
      cues: ["Light brace; breathe into ribs.", "Relax shoulders down."],
      sets: 1,
      isTimedOnly: true,
      defaultWorkSeconds: 60
    }
  ]
};

const DEMOS = {
  squat: null,
  pushup: null,
  bridge: null,
  deadbug: null,
  plank: null,
  lunge: null,
  march: null
};

// Inject SVG demo templates (kept in JS so it's single-folder portable)
function demoSVG(kind){
  const templates = {
    squat: `
<svg viewBox="0 0 320 240" role="img" aria-label="Stick figure squat demo">
  <line class="floor" x1="30" y1="210" x2="290" y2="210"/>
  <g id="figure" transform="translate(160,60)">
    <circle class="joint" cx="0" cy="0" r="10"/>
    <line class="stick" x1="0" y1="10" x2="0" y2="70"/> <!-- torso -->
    <g id="arms" transform-origin="0px 25px">
      <line class="stick" x1="0" y1="25" x2="-35" y2="45"/>
      <line class="stick" x1="0" y1="25" x2="35" y2="45"/>
    </g>
    <g id="legs" transform="translate(0,70)">
      <g id="legL" transform-origin="0px 0px">
        <line class="stick" x1="0" y1="0" x2="-25" y2="55"/>
        <line class="stick" x1="-25" y1="55" x2="-15" y2="110"/>
      </g>
      <g id="legR" transform-origin="0px 0px">
        <line class="stick" x1="0" y1="0" x2="25" y2="55"/>
        <line class="stick" x1="25" y1="55" x2="15" y2="110"/>
      </g>
    </g>
  </g>
  <style>
    #figure{animation: bob 1.6s ease-in-out infinite}
    #arms{animation: arms 1.6s ease-in-out infinite}
    #legL, #legR{animation: squat 1.6s ease-in-out infinite}
    @keyframes bob{
      0%,100%{transform:translate(160px,60px)}
      50%{transform:translate(160px,78px)}
    }
    @keyframes arms{
      0%,100%{transform:rotate(0deg)}
      50%{transform:rotate(10deg)}
    }
    @keyframes squat{
      0%,100%{transform:rotate(0deg)}
      50%{transform:rotate(22deg)}
    }
  </style>
</svg>
`,
    pushup: `
<svg viewBox="0 0 320 240" role="img" aria-label="Stick figure pushup demo">
  <line class="floor" x1="30" y1="210" x2="290" y2="210"/>
  <g id="p" transform="translate(70,155)">
    <circle class="joint" cx="0" cy="0" r="8"/>
    <line class="stick" x1="0" y1="0" x2="70" y2="-15"/> <!-- torso -->
    <line class="stick" x1="70" y1="-15" x2="150" y2="-5"/> <!-- hips to feet -->
    <g id="arm" transform-origin="20px 5px">
      <line class="stick" x1="20" y1="5" x2="20" y2="55"/>
      <line class="stick" x1="20" y1="55" x2="40" y2="55"/>
    </g>
    <g id="arm2" transform-origin="55px -5px">
      <line class="stick" x1="55" y1="-5" x2="55" y2="55"/>
      <line class="stick" x1="55" y1="55" x2="75" y2="55"/>
    </g>
  </g>
  <style>
    #p{animation: dip 1.8s ease-in-out infinite}
    @keyframes dip{
      0%,100%{transform:translate(70px,150px)}
      50%{transform:translate(70px,165px)}
    }
  </style>
</svg>
`,
    bridge: `
<svg viewBox="0 0 320 240" role="img" aria-label="Stick figure glute bridge demo">
  <line class="floor" x1="25" y1="210" x2="295" y2="210"/>
  <g id="bridge" transform="translate(70,175)">
    <circle class="joint" cx="0" cy="0" r="8"/>
    <line class="stick" x1="8" y1="0" x2="95" y2="18"/>
    <circle class="joint" cx="95" cy="18" r="6"/>
    <line class="stick" x1="95" y1="18" x2="130" y2="55"/>
    <line class="stick" x1="130" y1="55" x2="178" y2="55"/>
    <line class="stick" x1="95" y1="18" x2="128" y2="58" opacity=".65"/>
    <line class="stick" x1="128" y1="58" x2="160" y2="58" opacity=".65"/>
    <line class="stick" x1="25" y1="10" x2="5" y2="35" opacity=".75"/>
    <line class="stick" x1="55" y1="16" x2="35" y2="40" opacity=".75"/>
  </g>
  <style>
    #bridge { transform-origin: 95px 18px; animation: hipLift 1.6s ease-in-out infinite; }
    @keyframes hipLift{
      0%,100%{ transform: translate(70px,175px) rotate(0deg); }
      50%{ transform: translate(70px,165px) rotate(-14deg); }
    }
  </style>
</svg>
`,
    deadbug: `
<svg viewBox="0 0 320 240" role="img" aria-label="Stick figure dead bug demo">
  <line class="floor" x1="25" y1="210" x2="295" y2="210"/>
  <g id="db" transform="translate(160,170)">
    <circle class="joint" cx="0" cy="-105" r="8"/>
    <line class="stick" x1="0" y1="-95" x2="0" y2="-55"/>

    <g id="armL" transform-origin="0px -90px">
      <line class="stick" x1="0" y1="-90" x2="-55" y2="-120"/>
    </g>
    <g id="armR" transform-origin="0px -90px">
      <line class="stick" x1="0" y1="-90" x2="55" y2="-120"/>
    </g>

    <circle class="joint" cx="0" cy="-55" r="6"/>

    <g id="legL" transform-origin="0px -55px">
      <line class="stick" x1="0" y1="-55" x2="-40" y2="-20"/>
      <line class="stick" x1="-40" y1="-20" x2="-40" y2="20"/>
    </g>
    <g id="legR" transform-origin="0px -55px">
      <line class="stick" x1="0" y1="-55" x2="40" y2="-20"/>
      <line class="stick" x1="40" y1="-20" x2="40" y2="20"/>
    </g>
  </g>
  <style>
    #armL, #legR { animation: extendA 1.8s ease-in-out infinite; }
    #armR, #legL { animation: extendB 1.8s ease-in-out infinite; }
    @keyframes extendA{ 0%,100%{ transform: rotate(0deg); } 50%{ transform: rotate(22deg); } }
    @keyframes extendB{ 0%,100%{ transform: rotate(22deg); } 50%{ transform: rotate(0deg); } }
  </style>
</svg>
`,
    plank: `
<svg viewBox="0 0 320 240" role="img" aria-label="Stick figure plank demo">
  <line class="floor" x1="30" y1="210" x2="290" y2="210"/>
  <g id="p2" transform="translate(70,160)">
    <circle class="joint" cx="0" cy="0" r="8"/>
    <line class="stick" x1="0" y1="0" x2="70" y2="-15"/>
    <line class="stick" x1="70" y1="-15" x2="150" y2="-5"/>
    <line class="stick" x1="20" y1="5" x2="30" y2="45"/>
    <line class="stick" x1="30" y1="45" x2="55" y2="45"/>
  </g>
  <style>
    #p2{animation: breathe 3.2s ease-in-out infinite}
    @keyframes breathe{
      0%,100%{transform:translate(70px,160px)}
      50%{transform:translate(70px,158px)}
    }
  </style>
</svg>
`,
    lunge: `
<svg viewBox="0 0 320 240" role="img" aria-label="Stick figure reverse lunge demo">
  <line class="floor" x1="30" y1="210" x2="290" y2="210"/>
  <g id="l" transform="translate(160,60)">
    <circle class="joint" cx="0" cy="0" r="10"/>
    <line class="stick" x1="0" y1="10" x2="0" y2="70"/>
    <g id="legsL" transform="translate(0,70)">
      <g id="front" transform-origin="0px 0px">
        <line class="stick" x1="0" y1="0" x2="25" y2="55"/>
        <line class="stick" x1="25" y1="55" x2="15" y2="110"/>
      </g>
      <g id="back" transform-origin="0px 0px">
        <line class="stick" x1="0" y1="0" x2="-35" y2="60"/>
        <line class="stick" x1="-35" y1="60" x2="-20" y2="110"/>
      </g>
    </g>
  </g>
  <style>
    #l{animation: dip2 1.8s ease-in-out infinite}
    @keyframes dip2{
      0%,100%{transform:translate(160px,60px)}
      50%{transform:translate(160px,78px)}
    }
  </style>
</svg>
`,
    march: `
<svg viewBox="0 0 320 240" role="img" aria-label="Stick figure marching demo">
  <line class="floor" x1="30" y1="210" x2="290" y2="210"/>
  <g id="m" transform="translate(160,60)">
    <circle class="joint" cx="0" cy="0" r="10"/>
    <line class="stick" x1="0" y1="10" x2="0" y2="70"/>
    <g transform="translate(0,70)">
      <g id="ml" transform-origin="0px 0px">
        <line class="stick" x1="0" y1="0" x2="-20" y2="60"/>
        <line class="stick" x1="-20" y1="60" x2="-10" y2="110"/>
      </g>
      <g id="mr" transform-origin="0px 0px">
        <line class="stick" x1="0" y1="0" x2="20" y2="60"/>
        <line class="stick" x1="20" y1="60" x2="10" y2="110"/>
      </g>
    </g>
  </g>
  <style>
    #ml{animation: kickL 1.2s ease-in-out infinite}
    #mr{animation: kickR 1.2s ease-in-out infinite}
    @keyframes kickL{0%,100%{transform:rotate(0deg)} 50%{transform:rotate(18deg)}}
    @keyframes kickR{0%,100%{transform:rotate(18deg)} 50%{transform:rotate(0deg)}}
  </style>
</svg>
`
  ,
    standbreathe: `<svg viewBox="0 0 320 240" role="img" aria-label="Stick figure standing breathing demo">
  <line class="floor" x1="25" y1="210" x2="295" y2="210"/>
  <g id="sb" transform="translate(160,60)">
    <circle class="joint" cx="0" cy="0" r="10"/>
    <line class="stick" x1="0" y1="10" x2="0" y2="90"/>
    <line class="stick" x1="0" y1="30" x2="-35" y2="55" opacity=".85"/>
    <line class="stick" x1="0" y1="30" x2="35" y2="55" opacity=".85"/>
    <line class="stick" x1="0" y1="90" x2="-20" y2="150"/>
    <line class="stick" x1="-20" y1="150" x2="-10" y2="200"/>
    <line class="stick" x1="0" y1="90" x2="20" y2="150"/>
    <line class="stick" x1="20" y1="150" x2="10" y2="200"/>
    <ellipse id="rib" cx="0" cy="55" rx="28" ry="18" fill="none" stroke="rgba(126,231,135,.70)" stroke-width="5"/>
  </g>
  <style>
    #rib{animation: breatheRing 3.2s ease-in-out infinite; transform-origin:160px 115px}
    @keyframes breatheRing{
      0%,100%{transform:translate(160px,60px) scale(1.00)}
      50%{transform:translate(160px,60px) scale(1.10)}
    }
  </style>
</svg>`
  ,
    proney: `<svg viewBox="0 0 320 240" role="img" aria-label="Stick figure prone Y-raise demo">
  <line class="floor" x1="25" y1="210" x2="295" y2="210"/>
  <g id="py" transform="translate(70,175)">
    <circle class="joint" cx="0" cy="0" r="8"/>
    <line class="stick" x1="8" y1="0" x2="120" y2="18"/>
    <line class="stick" x1="120" y1="18" x2="190" y2="10"/>
    <g id="armY" transform-origin="70px 8px">
      <line class="stick" x1="60" y1="8" x2="20" y2="-20"/>
      <line class="stick" x1="85" y1="12" x2="130" y2="-18"/>
    </g>
  </g>
  <style>
    #armY{animation: yraise 1.6s ease-in-out infinite}
    @keyframes yraise{
      0%,100%{transform:rotate(0deg)}
      50%{transform:rotate(-10deg)}
    }
  </style>
</svg>`
  ,
    sideleg: `<svg viewBox="0 0 320 240" role="img" aria-label="Stick figure side-lying leg raise demo">
  <line class="floor" x1="25" y1="210" x2="295" y2="210"/>
  <g id="sl" transform="translate(85,185)">
    <circle class="joint" cx="0" cy="0" r="8"/>
    <line class="stick" x1="8" y1="0" x2="105" y2="18"/>
    <circle class="joint" cx="105" cy="18" r="6"/>
    <line class="stick" x1="105" y1="18" x2="160" y2="35" opacity=".75"/>
    <g id="topLeg" transform-origin="105px 18px">
      <line class="stick" x1="105" y1="18" x2="170" y2="-2"/>
    </g>
  </g>
  <style>
    #topLeg{animation: legUp 1.4s ease-in-out infinite}
    @keyframes legUp{
      0%,100%{transform:rotate(0deg)}
      50%{transform:rotate(-18deg)}
    }
  </style>
</svg>`
  ,
    neckroll: `<svg viewBox="0 0 320 240" role="img" aria-label="Stick figure neck roll demo">
  <line class="floor" x1="25" y1="210" x2="295" y2="210"/>
  <g id="nr" transform="translate(160,70)">
    <circle class="joint" cx="0" cy="0" r="10"/>
    <line class="stick" x1="0" y1="10" x2="0" y2="100"/>
    <line class="stick" x1="0" y1="35" x2="-35" y2="60" opacity=".85"/>
    <line class="stick" x1="0" y1="35" x2="35" y2="60" opacity=".85"/>
    <line class="stick" x1="0" y1="100" x2="-20" y2="155"/>
    <line class="stick" x1="-20" y1="155" x2="-10" y2="205"/>
    <line class="stick" x1="0" y1="100" x2="20" y2="155"/>
    <line class="stick" x1="20" y1="155" x2="10" y2="205"/>
    <path id="arc" d="M 0 -32 A 32 32 0 1 1 -0.1 -32" fill="none" stroke="rgba(140,170,255,.65)" stroke-width="6"/>
  </g>
  <style>
    #arc{animation: roll 2.4s linear infinite}
    @keyframes roll{
      0%{transform:translate(160px,70px) rotate(0deg)}
      100%{transform:translate(160px,70px) rotate(360deg)}
    }
  </style>
</svg>`
  };
  return templates[kind] || templates.squat;
}

const els = {
  workoutSelect: document.getElementById("workoutSelect"),
  exerciseList: document.getElementById("exerciseList"),
  exName: document.getElementById("exName"),
  exMeta: document.getElementById("exMeta"),
  exCues: document.getElementById("exCues"),
  demoArea: document.getElementById("demoArea"),
  timer: document.getElementById("timer"),
  timerLabel: document.getElementById("timerLabel"),
  timerHint: document.getElementById("timerHint"),
  btnStart: document.getElementById("btnStart"),
  btnStop: document.getElementById("btnStop"),
  btnNext: document.getElementById("btnNext"),
  btnSettings: document.getElementById("btnSettings"),
  settingsModal: document.getElementById("settingsModal"),
  restSeconds: document.getElementById("restSeconds"),
  workSeconds: document.getElementById("workSeconds"),
  intervalRestSeconds: document.getElementById("intervalRestSeconds"),
  soundOn: document.getElementById("soundOn"),
  autoAdvance: document.getElementById("autoAdvance"),
  btnResetDefaults: document.getElementById("btnResetDefaults"),
  intervalMode: document.getElementById("intervalMode"),
  setRow: document.getElementById("setRow"),
  setProgress: document.getElementById("setProgress"),
  btnSetDone: document.getElementById("btnSetDone"),
  btnInstall: document.getElementById("btnInstall")
};

let state = {
  workoutKey: "A",
  selectedIndex: 0,
  setDone: 0,
  phase: "idle", // idle | work | rest
  remaining: 0,
  intervalMode: false,
  intervalWork: 40,
  intervalRest: 20,
  restSeconds: 75,
  soundOn: true,
  autoAdvance: true
};

let timerHandle = null;
let deferredPrompt = null;

function loadSettings(){
  try{
    const saved = JSON.parse(localStorage.getItem("trainerLiteSettings") || "{}");
    state.intervalWork = saved.intervalWork ?? state.intervalWork;
    state.intervalRest = saved.intervalRest ?? state.intervalRest;
    state.restSeconds = saved.restSeconds ?? state.restSeconds;
    state.soundOn = (saved.soundOn ?? "on") === "on";
    state.autoAdvance = (saved.autoAdvance ?? "on") === "on";
    state.intervalMode = (saved.intervalMode ?? false) === true;
  }catch(e){}
}

function saveSettings(){
  localStorage.setItem("trainerLiteSettings", JSON.stringify({
    intervalWork: state.intervalWork,
    intervalRest: state.intervalRest,
    restSeconds: state.restSeconds,
    soundOn: state.soundOn ? "on" : "off",
    autoAdvance: state.autoAdvance ? "on" : "off",
    intervalMode: state.intervalMode
  }));
}

function formatTime(sec){
  sec = Math.max(0, Math.floor(sec));
  const m = String(Math.floor(sec / 60)).padStart(2,"0");
  const s = String(sec % 60).padStart(2,"0");
  return `${m}:${s}`;
}

function beep(){
  if(!state.soundOn) return;
  // tiny beep via WebAudio
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = "sine";
  o.frequency.value = 880;
  g.gain.value = 0.05;
  o.connect(g); g.connect(ctx.destination);
  o.start();
  setTimeout(()=>{o.stop(); ctx.close();}, 120);
}

function getWorkout(){
  return WORKOUTS[state.workoutKey];
}

function getExercise(){
  return getWorkout()[state.selectedIndex];
}

function renderList(){
  const list = getWorkout();
  els.exerciseList.innerHTML = "";
  list.forEach((ex, idx)=>{
    const btn = document.createElement("button");
    btn.className = "exBtn" + (idx===state.selectedIndex ? " active" : "");
    btn.innerHTML = `
      <div>
        <div class="exName">${ex.name}</div>
        <div class="exMeta">${ex.meta}</div>
      </div>
      <div class="badge">${ex.isTimedOnly ? "Timed" : "Sets"}</div>
    `;
    btn.onclick = ()=>{
      selectExercise(idx);
    };
    els.exerciseList.appendChild(btn);
  });
}

function renderExercise(){
  const ex = getExercise();
  els.exName.textContent = ex.name;
  els.exMeta.textContent = ex.meta + " • " + (state.intervalMode ? "Interval mode" : "Normal mode");
  els.exCues.innerHTML = "";
  ex.cues.forEach(c=>{
    const li = document.createElement("li");
    li.textContent = c;
    els.exCues.appendChild(li);
  });
  els.demoArea.innerHTML = demoSVG(ex.demo);
  state.setDone = 0;
  updateSetUI();
  resetTimerUI();
}

function updateSetUI(){
  const ex = getExercise();
  const show = !state.intervalMode && !ex.isTimedOnly;
  els.setRow.style.display = show ? "flex" : "none";
  if(show){
    els.setProgress.textContent = `Set ${state.setDone+1} of ${ex.sets}`;
  }else{
    els.setProgress.textContent = "—";
  }
}

function resetTimerUI(){
  els.timerLabel.textContent = "Ready";
  els.timer.textContent = "00:00";
  els.timerHint.textContent = state.intervalMode
    ? "Start runs work → rest. Stop anytime."
    : "Press Start for a quick demo timer, or use Complete set → Rest.";
}

function stopTimer(){
  if(timerHandle){ clearInterval(timerHandle); timerHandle = null; }
  state.phase = "idle";
  state.remaining = 0;
  resetTimerUI();
}

function startCountdown(seconds, label){
  stopTimer();
  state.remaining = seconds;
  state.phase = label === "Rest" ? "rest" : "work";
  els.timerLabel.textContent = label;
  els.timer.textContent = formatTime(state.remaining);
  timerHandle = setInterval(()=>{
    state.remaining -= 1;
    els.timer.textContent = formatTime(state.remaining);
    if(state.remaining <= 0){
      clearInterval(timerHandle);
      timerHandle = null;
      beep();
      // Auto behavior for interval mode
      if(state.intervalMode){
        if(state.phase === "work"){
          startCountdown(state.intervalRest, "Rest");
        }else{
          // finished rest
          if(state.autoAdvance){
            nextExercise(true);
          }else{
            startCountdown(state.intervalWork, "Work");
          }
        }
      }else{
        // normal mode: just stop after timer ends
        state.phase = "idle";
        els.timerLabel.textContent = "Done";
        els.timerHint.textContent = "Nice. Hit Complete set → Rest, or Next.";
      }
    }
  }, 1000);
}

function selectExercise(idx){
  state.selectedIndex = idx;
  renderList();
  renderExercise();
}

function nextExercise(fromInterval=false){
  const list = getWorkout();
  if(state.selectedIndex < list.length - 1){
    selectExercise(state.selectedIndex + 1);
  }else{
    // end of workout
    stopTimer();
    els.timerLabel.textContent = "Workout complete";
    els.timer.textContent = "✅";
    els.timerHint.textContent = "Great job. Pick another day if you want.";
    if(fromInterval && state.intervalMode){
      // keep at end
    }
  }
  if(fromInterval && state.intervalMode){
    // start next work automatically
    const ex = getExercise();
    const work = ex.defaultWorkSeconds ?? state.intervalWork;
    startCountdown(work, "Work");
  }
}

function startWork(){
  const ex = getExercise();
  if(state.intervalMode){
    const work = ex.defaultWorkSeconds ?? state.intervalWork;
    startCountdown(work, "Work");
  }else{
    // In normal mode, Start acts as a short "practice" timer for timed exercises.
    const seconds = ex.isTimedOnly ? (ex.defaultWorkSeconds ?? 30) : 45;
    startCountdown(seconds, ex.isTimedOnly ? "Hold" : "Practice");
  }
}

function completeSet(){
  const ex = getExercise();
  if(ex.isTimedOnly || state.intervalMode) return;
  state.setDone += 1;
  if(state.setDone >= ex.sets){
    // move on
    els.setProgress.textContent = `Finished ${ex.sets} sets`;
    startCountdown(state.restSeconds, "Rest");
    // after rest, suggest next
    // We'll keep timer end message; user can tap Next
  }else{
    updateSetUI();
    startCountdown(state.restSeconds, "Rest");
  }
}

function openSettings(){
  els.restSeconds.value = state.restSeconds;
  els.workSeconds.value = state.intervalWork;
  els.intervalRestSeconds.value = state.intervalRest;
  els.soundOn.value = state.soundOn ? "on" : "off";
  els.autoAdvance.value = state.autoAdvance ? "on" : "off";
  els.settingsModal.showModal();
}

function resetDefaults(){
  state.intervalWork = 40;
  state.intervalRest = 20;
  state.restSeconds = 75;
  state.soundOn = true;
  state.autoAdvance = true;
  saveSettings();
  openSettings();
}

function applySettings(){
  state.restSeconds = Number(els.restSeconds.value) || 75;
  state.intervalWork = Number(els.workSeconds.value) || 40;
  state.intervalRest = Number(els.intervalRestSeconds.value) || 20;
  state.soundOn = els.soundOn.value === "on";
  state.autoAdvance = els.autoAdvance.value === "on";
  state.intervalMode = els.intervalMode.checked;
  saveSettings();
  updateSetUI();
  resetTimerUI();
}

function init(){
  loadSettings();
  els.intervalMode.checked = state.intervalMode;

  els.workoutSelect.onchange = (e)=>{
    state.workoutKey = e.target.value;
    state.selectedIndex = 0;
    renderList();
    renderExercise();
  };

  els.intervalMode.onchange = ()=>{
    state.intervalMode = els.intervalMode.checked;
    saveSettings();
    updateSetUI();
    resetTimerUI();
  };

  els.btnStart.onclick = startWork;
  els.btnStop.onclick = stopTimer;
  els.btnNext.onclick = ()=>nextExercise(false);
  els.btnSetDone.onclick = completeSet;
  els.btnSettings.onclick = openSettings;
  els.btnResetDefaults.onclick = resetDefaults;

  els.settingsModal.addEventListener("close", ()=>{
    applySettings();
  });

  // initial render
  renderList();
  renderExercise();

  // PWA install prompt (best effort)
  window.addEventListener("beforeinstallprompt", (e)=>{
    e.preventDefault();
    deferredPrompt = e;
    els.btnInstall.hidden = false;
  });
  els.btnInstall.onclick = async ()=>{
    if(!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    els.btnInstall.hidden = true;
  };

  // service worker
  if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").catch(()=>{});
  }
}

init();
