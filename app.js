/* Poroza Online Classroom Platform — Stream-Only HLS Architecture
 * Future-ready modular configuration (noteSheets kept off with zero empty UI/folders until launch)
 */
const POROZA_FEATURES = Object.freeze({
  videoStreaming: true,
  smartNoteSheets: false
});

const LESSONS = [
  {
    "id": "bn-poetry-06",
    "subject": "bangla-poetry",
    "subjectLabel": "বাংলা ১ম পত্র · কবিতা",
    "code": "কবিতা ০৬",
    "title": "জীবন বিনিময়",
    "subtitle": "গোলাম মোস্তফা · পৃ. ১৯৩–১৯৬",
    "exam": [
      "annual9",
      "ssc"
    ],
    "keywords": "jibon binimoy golam mostofa babur humayun জীবন বিনিময় গোলাম মোস্তফা কবিতা",
    "duration": "26:41",
    "durationSec": 1600.5,
    "resolution": "1080p HD",
    "stream": "streams/bn-poetry-06.m3u8",
    "poster": "posters/bn-poetry-06.jpg"
  },
  {
    "id": "bn-poetry-07",
    "subject": "bangla-poetry",
    "subjectLabel": "বাংলা ১ম পত্র · কবিতা",
    "code": "কবিতা ০৭",
    "title": "উমর ফারুক",
    "subtitle": "কাজী নজরুল ইসলাম · পৃ. ২০০–২০৫",
    "exam": [
      "annual9",
      "ssc"
    ],
    "keywords": "umar faruq faruk kazi nazrul islam উমর ফারুক কাজী নজরুল ইসলাম জিঞ্জীর",
    "duration": "27:31",
    "durationSec": 1651.1,
    "resolution": "1080p HD",
    "stream": "streams/bn-poetry-07.m3u8",
    "poster": "posters/bn-poetry-07.jpg"
  },
  {
    "id": "bn-poetry-08",
    "subject": "bangla-poetry",
    "subjectLabel": "বাংলা ১ম পত্র · কবিতা",
    "code": "কবিতা ০৮",
    "title": "সেইদিন এই মাঠ",
    "subtitle": "জীবনানন্দ দাশ · পৃ. ২০৬–২০৮",
    "exam": [
      "annual9",
      "ssc"
    ],
    "keywords": "seidin ei math jibanananda das রূপসী বাংলা সেইদিন এই মাঠ জীবনানন্দ দাশ এশিরিয়া বেবিলন",
    "duration": "26:58",
    "durationSec": 1618.3,
    "resolution": "1080p HD",
    "stream": "streams/bn-poetry-08.m3u8",
    "poster": "posters/bn-poetry-08.jpg"
  },
  {
    "id": "bn-poetry-09",
    "subject": "bangla-poetry",
    "subjectLabel": "বাংলা ১ম পত্র · কবিতা",
    "code": "কবিতা ০৯",
    "title": "যাব আমি তোমার দেশে",
    "subtitle": "জসীমউদ্‌দীন · পৃ. ২০৯–২১৩",
    "exam": [
      "annual9",
      "ssc"
    ],
    "keywords": "jabo ami tomar deshe jasimuddin যাব আমি তোমার দেশে জসীমউদ্‌দীন পল্লীকবি ধানক্ষেত",
    "duration": "26:36",
    "durationSec": 1596.1,
    "resolution": "1080p HD",
    "stream": "streams/bn-poetry-09.m3u8",
    "poster": "posters/bn-poetry-09.jpg"
  },
  {
    "id": "bn-poetry-10",
    "subject": "bangla-poetry",
    "subjectLabel": "বাংলা ১ম পত্র · কবিতা",
    "code": "কবিতা ১০",
    "title": "আমার দেশ",
    "subtitle": "সুফিয়া কামাল · পৃ. ২১৭–২২০",
    "exam": [
      "annual9",
      "ssc"
    ],
    "keywords": "amar desh sufia kamal আমার দেশ সুফিয়া কামাল কিস্তি শান্তি কপোত",
    "duration": "26:50",
    "durationSec": 1609.8,
    "resolution": "1080p HD",
    "stream": "streams/bn-poetry-10.m3u8",
    "poster": "posters/bn-poetry-10.jpg"
  },
  {
    "id": "bn-poetry-11",
    "subject": "bangla-poetry",
    "subjectLabel": "বাংলা ১ম পত্র · কবিতা",
    "code": "কবিতা ১১",
    "title": "বৃষ্টি",
    "subtitle": "ফররুখ আহমদ · পৃ. ২২৪–২২৬",
    "exam": [
      "annual9",
      "ssc"
    ],
    "keywords": "brishti bristi farrukh ahmad বৃষ্টি ফররুখ আহমদ সনেট চতুর্দশপদী",
    "duration": "26:46",
    "durationSec": 1606.2,
    "resolution": "1080p HD",
    "stream": "streams/bn-poetry-11.m3u8",
    "poster": "posters/bn-poetry-11.jpg"
  },
  {
    "id": "bn-poetry-12",
    "subject": "bangla-poetry",
    "subjectLabel": "বাংলা ১ম পত্র · কবিতা",
    "code": "কবিতা ১২",
    "title": "আমি কোনো আগন্তুক নই",
    "subtitle": "আহসান হাবীব · পৃ. ২২৭–২৩০",
    "exam": [
      "class10",
      "ssc"
    ],
    "keywords": "ami kono agontuk noi ahsan habib আমি কোনো আগন্তুক নই আহসান হাবীব কদম আলী",
    "duration": "27:02",
    "durationSec": 1621.9,
    "resolution": "1080p HD",
    "stream": "streams/bn-poetry-12.m3u8",
    "poster": "posters/bn-poetry-12.jpg"
  },
  {
    "id": "bn-prose-06",
    "subject": "bangla-prose",
    "subjectLabel": "বাংলা ১ম পত্র · গদ্য",
    "code": "গদ্য ০৬",
    "title": "নিরীহ বাঙালি",
    "subtitle": "রোকেয়া সাখাওয়াত হোসেন · পৃ. ৩৭–৪১",
    "exam": [
      "annual9",
      "ssc"
    ],
    "keywords": "niriho bangali rokeya sakhawat hossain নিরীহ বাঙালি রোকেয়া সাখাওয়াত হোসেন",
    "duration": "21:55",
    "durationSec": 1315.2,
    "resolution": "1080p HD",
    "stream": "streams/bn-prose-06.m3u8",
    "poster": "posters/bn-prose-06.jpg"
  },
  {
    "id": "bn-prose-07",
    "subject": "bangla-prose",
    "subjectLabel": "বাংলা ১ম পত্র · গদ্য",
    "code": "গদ্য ০৭",
    "title": "পল্লিসাহিত্য",
    "subtitle": "মুহম্মদ শহীদুল্লাহ্ · পৃ. ৪২–৪৮",
    "exam": [
      "annual9",
      "ssc"
    ],
    "keywords": "pollisahitya polli sahitto muhammad shahidullah পল্লিসাহিত্য মুহম্মদ শহীদুল্লাহ্",
    "duration": "21:44",
    "durationSec": 1304.1,
    "resolution": "1080p HD",
    "stream": "streams/bn-prose-07.m3u8",
    "poster": "posters/bn-prose-07.jpg"
  },
  {
    "id": "bn-prose-08",
    "subject": "bangla-prose",
    "subjectLabel": "বাংলা ১ম পত্র · গদ্য",
    "code": "গদ্য ০৮",
    "title": "আম-আঁটির ভেঁপু",
    "subtitle": "বিভূতিভূষণ বন্দ্যোপাধ্যায় · পৃ. ৫৯–৬৫",
    "exam": [
      "annual9",
      "ssc"
    ],
    "keywords": "am atir bhepu vepu bibhutibhushan apu durga আম আঁটির ভেঁপু বিভূতিভূষণ পথের পাঁচালী",
    "duration": "20:42",
    "durationSec": 1242.3,
    "resolution": "1080p HD",
    "stream": "streams/bn-prose-08.m3u8",
    "poster": "posters/bn-prose-08.jpg"
  },
  {
    "id": "bn-prose-09",
    "subject": "bangla-prose",
    "subjectLabel": "বাংলা ১ম পত্র · গদ্য",
    "code": "গদ্য ০৯",
    "title": "মানুষ মুহম্মদ (স.)",
    "subtitle": "মোহাম্মদ ওয়াজেদ আলী · পৃ. ৬৬–৭২",
    "exam": [
      "annual9",
      "ssc"
    ],
    "keywords": "manush muhammad sm wazed ali মানুষ মুহম্মদ মোহাম্মদ ওয়াজেদ আলী",
    "duration": "21:07",
    "durationSec": 1267.1,
    "resolution": "1080p HD",
    "stream": "streams/bn-prose-09.m3u8",
    "poster": "posters/bn-prose-09.jpg"
  },
  {
    "id": "bn-prose-10",
    "subject": "bangla-prose",
    "subjectLabel": "বাংলা ১ম পত্র · গদ্য",
    "code": "গদ্য ১০",
    "title": "নিমগাছ",
    "subtitle": "বনফুল (বলাইচাঁদ মুখোপাধ্যায়) · পৃ. ৭৩–৭৫",
    "exam": [
      "annual9",
      "ssc"
    ],
    "keywords": "nimgach nim gach bonophul নিমগাছ বনফুল",
    "duration": "20:30",
    "durationSec": 1229.5,
    "resolution": "1080p HD",
    "stream": "streams/bn-prose-10.m3u8",
    "poster": "posters/bn-prose-10.jpg"
  },
  {
    "id": "bn-prose-11",
    "subject": "bangla-prose",
    "subjectLabel": "বাংলা ১ম পত্র · গদ্য",
    "code": "গদ্য ১১",
    "title": "উপেক্ষিত শক্তির উদ্বোধন",
    "subtitle": "কাজী নজরুল ইসলাম · পৃ. ৭৬–৭৯",
    "exam": [
      "annual9",
      "ssc"
    ],
    "keywords": "upekkhito shoktir udbodhon kazi nazrul islam উপেক্ষিত শক্তির উদ্বোধন কাজী নজরুল",
    "duration": "20:07",
    "durationSec": 1206.9,
    "resolution": "1080p HD",
    "stream": "streams/bn-prose-11.m3u8",
    "poster": "posters/bn-prose-11.jpg"
  },
  {
    "id": "chem-05",
    "subject": "chemistry",
    "subjectLabel": "রসায়ন · Chemistry",
    "code": "অধ্যায় ০৫",
    "title": "রাসায়নিক বন্ধন",
    "subtitle": "আয়নিক, সমযোজী ও ধাতব বন্ধন · যোজনী ও অষ্টক নিয়ম",
    "exam": [
      "annual9",
      "ssc"
    ],
    "keywords": "chemistry ch5 chemical bond rasayonik bondhon রসায়ন রাসায়নিক বন্ধন আয়নিক সমযোজী",
    "duration": "25:19",
    "durationSec": 1519.3,
    "resolution": "720p HD",
    "stream": "streams/chem-05.m3u8",
    "poster": "posters/chem-05.jpg"
  },
  {
    "id": "chem-06",
    "subject": "chemistry",
    "subjectLabel": "রসায়ন · Chemistry",
    "code": "অধ্যায় ০৬",
    "title": "মোলের ধারণা ও রাসায়নিক গণনা",
    "subtitle": "মোলার আয়তন, মোলারিটি, শতকরা সংযুক্তি ও স্থূল সংকেত",
    "exam": [
      "annual9",
      "ssc"
    ],
    "keywords": "chemistry ch6 mole concept counting মোলের ধারণা রাসায়নিক গণনা মোলারিটি",
    "duration": "33:15",
    "durationSec": 1994.7,
    "resolution": "720p HD",
    "stream": "streams/chem-06.m3u8",
    "poster": "posters/chem-06.jpg"
  },
  {
    "id": "chem-07",
    "subject": "chemistry",
    "subjectLabel": "রসায়ন · Chemistry",
    "code": "অধ্যায় ০৭",
    "title": "রাসায়নিক বিক্রিয়া",
    "subtitle": "রেডক্স-ননরেডক্স, জারণ সংখ্যা ও লা-শাতেলিয়ার নীতি",
    "exam": [
      "annual9",
      "ssc"
    ],
    "keywords": "chemistry ch7 chemical reactions redox লা শাতেলিয়ার রাসায়নিক বিক্রিয়া জারণ বিজারণ",
    "duration": "32:03",
    "durationSec": 1922.6,
    "resolution": "720p HD",
    "stream": "streams/chem-07.m3u8",
    "poster": "posters/chem-07.jpg"
  },
  {
    "id": "chem-08",
    "subject": "chemistry",
    "subjectLabel": "রসায়ন · Chemistry",
    "code": "অধ্যায় ০৮",
    "title": "রসায়ন ও শক্তি",
    "subtitle": "ডেনিয়েল কোষ, তড়িৎ বিশ্লেষণ, লবণ সেতু ও নিউক্লিয়ার বিক্রিয়া",
    "exam": [
      "annual9",
      "ssc"
    ],
    "keywords": "chemistry ch8 energy electrolysis galvanic cell রসায়ন ও শক্তি ডেনিয়েল কোষ তড়িৎ বিশ্লেষণ",
    "duration": "43:57",
    "durationSec": 2637.2,
    "resolution": "720p HD",
    "stream": "streams/chem-08.m3u8",
    "poster": "posters/chem-08.jpg"
  },
  {
    "id": "bgs-02",
    "subject": "bgs",
    "subjectLabel": "বাংলাদেশ ও বিশ্বপরিচয়",
    "code": "অধ্যায় ০২",
    "title": "স্বাধীন বাংলাদেশ",
    "subtitle": "মুক্তিযুদ্ধ, মুজিবনগর সরকার ও স্বাধীনতার তাৎপর্য",
    "exam": [
      "annual9",
      "ssc"
    ],
    "keywords": "bgs ch2 independent bangladesh swadhin স্বাধীন বাংলাদেশ মুক্তিযুদ্ধ",
    "duration": "18:07",
    "durationSec": 1086.8,
    "resolution": "720p HD",
    "stream": "streams/bgs-02.m3u8",
    "poster": "posters/bgs-02.jpg"
  },
  {
    "id": "bgs-04",
    "subject": "bgs",
    "subjectLabel": "বাংলাদেশ ও বিশ্বপরিচয়",
    "code": "অধ্যায় ০৪",
    "title": "বাংলাদেশের ভূপ্রকৃতি ও জলবায়ু",
    "subtitle": "ভূপ্রাকৃতিক অঞ্চল, জলবায়ু ও প্রাকৃতিক দুর্যোগ",
    "exam": [
      "annual9",
      "ssc"
    ],
    "keywords": "bgs ch4 topography climate ভূপ্রকৃতি ও জলবায়ু ভূমিকম্প",
    "duration": "18:51",
    "durationSec": 1130.7,
    "resolution": "720p HD",
    "stream": "streams/bgs-04.m3u8",
    "poster": "posters/bgs-04.jpg"
  },
  {
    "id": "bgs-05",
    "subject": "bgs",
    "subjectLabel": "বাংলাদেশ ও বিশ্বপরিচয়",
    "code": "অধ্যায় ০৫",
    "title": "বাংলাদেশের নদ-নদী ও প্রাকৃতিক সম্পদ",
    "subtitle": "নদ-নদীর গতিপথ, পানিসম্পদ, বনজ ও খনিজ সম্পদ",
    "exam": [
      "annual9",
      "ssc"
    ],
    "keywords": "bgs ch5 rivers natural resources নদ নদী প্রাকৃতিক সম্পদ",
    "duration": "18:54",
    "durationSec": 1133.9,
    "resolution": "720p HD",
    "stream": "streams/bgs-05.m3u8",
    "poster": "posters/bgs-05.jpg"
  },
  {
    "id": "bgs-07",
    "subject": "bgs",
    "subjectLabel": "বাংলাদেশ ও বিশ্বপরিচয়",
    "code": "অধ্যায় ০৭",
    "title": "বাংলাদেশ সরকারের বিভিন্ন অঙ্গ ও প্রশাসন ব্যবস্থা",
    "subtitle": "আইন, শাসন ও বিচার বিভাগ এবং স্থানীয় প্রশাসন",
    "exam": [
      "annual9",
      "ssc"
    ],
    "keywords": "bgs ch7 state organs administration বাংলাদেশ সরকারের অঙ্গ প্রশাসন",
    "duration": "21:40",
    "durationSec": 1299.6,
    "resolution": "720p HD",
    "stream": "streams/bgs-07.m3u8",
    "poster": "posters/bgs-07.jpg"
  },
  {
    "id": "bgs-11",
    "subject": "bgs",
    "subjectLabel": "বাংলাদেশ ও বিশ্বপরিচয়",
    "code": "অধ্যায় ১১",
    "title": "অর্থনৈতিক নির্দেশকসমূহ ও বাংলাদেশের অর্থনীতির প্রকৃতি",
    "subtitle": "জিডিপি, জিএনপি, মাথাপিছু আয় ও অর্থনৈতিক খাত",
    "exam": [
      "annual9",
      "ssc"
    ],
    "keywords": "bgs ch11 economic indicators gdp gnp অর্থনৈতিক নির্দেশক অর্থনীতি",
    "duration": "23:08",
    "durationSec": 1387.9,
    "resolution": "720p HD",
    "stream": "streams/bgs-11.m3u8",
    "poster": "posters/bgs-11.jpg"
  },
  {
    "id": "bgs-14",
    "subject": "bgs",
    "subjectLabel": "বাংলাদেশ ও বিশ্বপরিচয়",
    "code": "অধ্যায় ১৪",
    "title": "বাংলাদেশের সামাজিক পরিবর্তন",
    "subtitle": "সামাজিক পরিবর্তনের উপাদান, শিল্পায়ন ও নগরায়ণ",
    "exam": [
      "class10",
      "ssc"
    ],
    "keywords": "bgs ch14 social change সামাজিক পরিবর্তন",
    "duration": "19:30",
    "durationSec": 1170.1,
    "resolution": "720p HD",
    "stream": "streams/bgs-14.m3u8",
    "poster": "posters/bgs-14.jpg"
  },
  {
    "id": "skill-01",
    "subject": "skill",
    "subjectLabel": "পরীক্ষা কৌশল · Masterclass",
    "code": "বিশেষ ক্লাস ০১",
    "title": "বোর্ড পরীক্ষা প্রস্তুতি ও কৌশল মাস্টারক্লাস",
    "subtitle": "সৃজনশীল ও বহুনির্বাচনি প্রশ্নে পূর্ণ নম্বর পাওয়ার কৌশল",
    "exam": [
      "annual9",
      "class10",
      "ssc"
    ],
    "keywords": "skill masterclass exam strategy বোর্ড পরীক্ষা কৌশল সৃজনশীল",
    "duration": "20:26",
    "durationSec": 1226.1,
    "resolution": "720p HD",
    "stream": "streams/skill-01.m3u8",
    "poster": "posters/skill-01.jpg"
  }
];

let activeSubject = "all";
let activeExam = "all";
let searchQuery = "";
let currentLessonId = LESSONS[0].id;
let hlsInstance = null;
let idleTimer = null;
const SPEEDS = [1, 1.25, 1.5, 1.75, 2];
let speedIdx = 0;

const videoEl = document.getElementById("poroza-video");
const stageEl = document.getElementById("video-stage");
const playIconEl = document.getElementById("dock-play-label");
const progressFill = document.getElementById("progress-fill");
const progressBuf = document.getElementById("progress-buffer");
const progressTrack = document.getElementById("progress-track");
const timeReadout = document.getElementById("time-readout");
const speedBtn = document.getElementById("speed-btn");
const muteBtn = document.getElementById("mute-btn");

function fmtTime(sec) {
  if (!isFinite(sec) || sec < 0) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return m + ":" + String(s).padStart(2, "0");
}

/* Anti-Download Guardrails */
document.addEventListener("contextmenu", (e) => {
  if (e.target.closest("#video-stage") || e.target.tagName === "VIDEO") {
    e.preventDefault();
  }
});

/* Theme System (Anthropic Off-White Light <-> Carbon Dark) */
function initTheme() {
  const saved = localStorage.getItem("poroza-theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeIcon(saved);
}

function toggleTheme() {
  const cur = document.documentElement.getAttribute("data-theme") || "light";
  const next = cur === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("poroza-theme", next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("theme-icon");
  if (!icon) return;
  icon.innerHTML = theme === "light"
    ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>'
    : '<circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>';
}

/* HLS Stream Loader */
function loadLesson(id, autoplay = false, scrollToStage = false) {
  const lesson = LESSONS.find((l) => l.id === id) || LESSONS[0];
  currentLessonId = lesson.id;
  if (history.replaceState) {
    history.replaceState(null, "", "#watch=" + lesson.id);
  }

  document.getElementById("np-subject").textContent = lesson.subjectLabel;
  document.getElementById("np-code").textContent = lesson.code;
  document.getElementById("np-res").textContent = lesson.resolution + " · Online Stream";
  document.getElementById("np-title").textContent = lesson.title;
  document.getElementById("np-sub").textContent = lesson.subtitle;
  document.getElementById("stage-badge-text").textContent = lesson.resolution + " · " + lesson.code;

  videoEl.poster = lesson.poster;
  progressFill.style.width = "0%";
  progressBuf.style.width = "0%";
  timeReadout.textContent = "0:00 / " + lesson.duration;

  if (hlsInstance) {
    hlsInstance.destroy();
    hlsInstance = null;
  }

  if (window.Hls && Hls.isSupported()) {
    hlsInstance = new Hls({
      maxBufferLength: 36,
      maxMaxBufferLength: 90,
      enableWorker: true
    });
    hlsInstance.loadSource(lesson.stream);
    hlsInstance.attachMedia(videoEl);
    hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
      videoEl.playbackRate = SPEEDS[speedIdx];
      if (autoplay) videoEl.play().catch(() => {});
    });
  } else if (videoEl.canPlayType("application/vnd.apple.mpegurl")) {
    videoEl.src = lesson.stream;
    videoEl.addEventListener("loadedmetadata", function onMeta() {
      videoEl.removeEventListener("loadedmetadata", onMeta);
      videoEl.playbackRate = SPEEDS[speedIdx];
      if (autoplay) videoEl.play().catch(() => {});
    });
  }

  renderPlaylist(lesson.subject);
  highlightActiveCard();

  if (scrollToStage) {
    document.getElementById("cinema").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function togglePlay() {
  if (videoEl.paused) {
    videoEl.play().catch(() => {});
  } else {
    videoEl.pause();
  }
}

function skipBy(delta) {
  if (!isFinite(videoEl.duration)) return;
  videoEl.currentTime = Math.max(0, Math.min(videoEl.duration, videoEl.currentTime + delta));
}

function cycleSpeed() {
  speedIdx = (speedIdx + 1) % SPEEDS.length;
  videoEl.playbackRate = SPEEDS[speedIdx];
  speedBtn.textContent = SPEEDS[speedIdx] + "x";
}

function toggleMute() {
  videoEl.muted = !videoEl.muted;
  muteBtn.textContent = videoEl.muted ? "🔇" : "🔊";
}

function playNextLesson() {
  const cur = LESSONS.find((l) => l.id === currentLessonId);
  const sameSubj = LESSONS.filter((l) => l.subject === cur.subject);
  const idx = sameSubj.findIndex((l) => l.id === currentLessonId);
  const next = sameSubj[(idx + 1) % sameSubj.length];
  loadLesson(next.id, true, false);
}

function toggleFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
  } else if (stageEl.requestFullscreen) {
    stageEl.requestFullscreen().catch(() => {});
  } else if (videoEl.webkitEnterFullscreen) {
    videoEl.webkitEnterFullscreen();
  }
}

/* Video Events */
videoEl.addEventListener("play", () => {
  stageEl.classList.add("is-playing");
  playIconEl.textContent = "⏸ বিরতি";
  scheduleControlsHide();
});

videoEl.addEventListener("pause", () => {
  stageEl.classList.remove("is-playing", "controls-idle");
  playIconEl.textContent = "▶ চালান";
});

videoEl.addEventListener("timeupdate", () => {
  const cur = videoEl.currentTime || 0;
  const dur = videoEl.duration || 0;
  if (dur > 0) {
    progressFill.style.width = ((cur / dur) * 100).toFixed(2) + "%";
    timeReadout.textContent = fmtTime(cur) + " / " + fmtTime(dur);
  }
  if (videoEl.buffered.length > 0 && dur > 0) {
    const bufEnd = videoEl.buffered.end(videoEl.buffered.length - 1);
    progressBuf.style.width = Math.min(100, (bufEnd / dur) * 100).toFixed(1) + "%";
  }
});

progressTrack.addEventListener("click", (e) => {
  if (!isFinite(videoEl.duration)) return;
  const rect = progressTrack.getBoundingClientRect();
  const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  videoEl.currentTime = ratio * videoEl.duration;
});

function scheduleControlsHide() {
  stageEl.classList.remove("controls-idle");
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    if (!videoEl.paused) stageEl.classList.add("controls-idle");
  }, 2800);
}

stageEl.addEventListener("mousemove", scheduleControlsHide);
stageEl.addEventListener("touchstart", scheduleControlsHide, { passive: true });

/* Playlist & Cards Rendering */
function renderPlaylist(subj) {
  const list = LESSONS.filter((l) => l.subject === subj);
  const headTitle = list[0] ? list[0].subjectLabel : "ক্লাস তালিকা";
  document.getElementById("pl-subject-name").textContent = headTitle + " (" + list.length + ")";
  const box = document.getElementById("playlist-items");
  box.innerHTML = list.map((l, idx) => {
    const isAct = l.id === currentLessonId;
    return `
      <div class="pl-item ${isAct ? "active" : ""}" onclick="loadLesson('${l.id}', true, false)">
        <div class="pl-idx">${isAct ? "▶" : String(idx + 1).padStart(2, "0")}</div>
        <div class="pl-body">
          <div class="pl-name">${l.title}</div>
          <div class="pl-meta">${l.code} · ${l.duration}</div>
        </div>
      </div>`;
  }).join("");
}

function matchesFilter(l) {
  if (activeSubject !== "all" && l.subject !== activeSubject) return false;
  if (activeExam !== "all" && !l.exam.includes(activeExam)) return false;
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    const hay = (l.title + " " + l.subtitle + " " + l.code + " " + l.subjectLabel + " " + l.keywords).toLowerCase();
    if (!hay.includes(q)) return false;
  }
  return true;
}

function renderCards() {
  const grid = document.getElementById("cards-grid");
  const filtered = LESSONS.filter(matchesFilter);
  document.getElementById("results-count").textContent = filtered.length + "টি ক্লাস প্রদর্শিত হচ্ছে";

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state">আপনার সার্চের সাথে মিলে এমন কোনো ক্লাস পাওয়া যায়নি। অন্য শব্দ দিয়ে চেষ্টা করুন।</div>`;
    return;
  }

  grid.innerHTML = filtered.map((l) => {
    const isPlaying = l.id === currentLessonId;
    return `
      <article class="lesson-card ${isPlaying ? "playing-now" : ""}" data-id="${l.id}" onclick="loadLesson('${l.id}', true, true)" onmousemove="trackSpotlight(event, this)">
        <div class="thumb-wrap">
          <img src="${l.poster}" alt="${l.title} — Poroza" loading="lazy" draggable="false">
          <span class="thumb-res">${l.resolution}</span>
          <span class="thumb-dur">${l.duration}</span>
          <div class="thumb-play-hover">
            <div class="big-play-btn" style="width:52px;height:52px">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="card-top-meta">
            <span>${l.subjectLabel}</span>
            <span class="card-ch-code">${l.code}</span>
          </div>
          <h3 class="card-title">${l.title}</h3>
          <p class="card-author">${l.subtitle}</p>
          <div class="card-foot">
            <span class="watch-cta">${isPlaying ? "● এখন চলছে" : "▶ ক্লাসটি দেখুন"}</span>
            <span style="font-family:'JetBrains Mono',monospace;font-size:0.75rem;color:var(--ink-muted)">Stream Only</span>
          </div>
        </div>
      </article>`;
  }).join("");
}

function highlightActiveCard() {
  document.querySelectorAll(".lesson-card").forEach((el) => {
    const isNow = el.getAttribute("data-id") === currentLessonId;
    el.classList.toggle("playing-now", isNow);
    const cta = el.querySelector(".watch-cta");
    if (cta) cta.textContent = isNow ? "● এখন চলছে" : "▶ ক্লাসটি দেখুন";
  });
}

function trackSpotlight(e, card) {
  const r = card.getBoundingClientRect();
  card.style.setProperty("--mx", (e.clientX - r.left) + "px");
  card.style.setProperty("--my", (e.clientY - r.top) + "px");
}

function selectSubject(subj, scrollExplorer = false) {
  activeSubject = subj;
  document.querySelectorAll("[data-subj]").forEach((b) => {
    b.classList.toggle("active", b.getAttribute("data-subj") === subj);
  });
  renderCards();
  if (scrollExplorer) {
    document.getElementById("explorer").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function selectExam(ex) {
  activeExam = ex;
  document.querySelectorAll("[data-exam]").forEach((b) => {
    b.classList.toggle("active", b.getAttribute("data-exam") === ex);
  });
  renderCards();
}

/* Command-K Quick Finder Modal */
function openCmd() {
  const bd = document.getElementById("cmd-backdrop");
  bd.classList.add("open");
  const inp = document.getElementById("cmd-input");
  inp.value = "";
  renderCmdResults("");
  setTimeout(() => inp.focus(), 40);
}

function closeCmd() {
  document.getElementById("cmd-backdrop").classList.remove("open");
}

function renderCmdResults(q) {
  const box = document.getElementById("cmd-results");
  const term = q.trim().toLowerCase();
  const list = LESSONS.filter((l) => {
    if (!term) return true;
    return (l.title + " " + l.subtitle + " " + l.code + " " + l.subjectLabel + " " + l.keywords).toLowerCase().includes(term);
  }).slice(0, 12);

  box.innerHTML = list.map((l) => `
    <div class="cmd-row" onclick="closeCmd(); loadLesson('${l.id}', true, true);">
      <div>
        <div style="font-weight:600;font-size:0.95rem">${l.title}</div>
        <div style="font-size:0.8rem;color:var(--ink-muted)">${l.subjectLabel} · ${l.subtitle}</div>
      </div>
      <span class="kbd">${l.duration}</span>
    </div>
  `).join("") || `<div style="padding:20px;text-align:center;color:var(--ink-muted)">কোনো ক্লাস পাওয়া যায়নি</div>`;
}

/* Keyboard Shortcuts */
document.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    openCmd();
    return;
  }
  if (e.key === "Escape") {
    closeCmd();
    return;
  }
  const tag = (e.target && e.target.tagName) || "";
  if (tag === "INPUT" || tag === "TEXTAREA") return;
  if (e.key === "/") {
    e.preventDefault();
    openCmd();
  } else if (e.key === " ") {
    e.preventDefault();
    togglePlay();
  } else if (e.key === "ArrowRight") {
    skipBy(10);
  } else if (e.key === "ArrowLeft") {
    skipBy(-10);
  } else if (e.key.toLowerCase() === "f") {
    toggleFullscreen();
  } else if (e.key.toLowerCase() === "m") {
    toggleMute();
  }
});

document.getElementById("inline-search").addEventListener("input", (e) => {
  searchQuery = e.target.value.trim();
  renderCards();
});

document.getElementById("cmd-input").addEventListener("input", (e) => {
  renderCmdResults(e.target.value);
});

/* Initialize */
initTheme();
renderCards();
const hashMatch = (location.hash || "").match(/watch=([a-z0-9-]+)/i);
const initialId = hashMatch ? hashMatch[1] : LESSONS[0].id;
loadLesson(initialId, false, false);
