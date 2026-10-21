const CONFIG = {
  name: "Nicol",
  partner: "vos",
  startDate: "2026-03-16T00:00:00",   // 16 de marzo de 2026
  birthdayDate: "2026-10-22T00:00:00", // Cumpleaños 22 de octubre
  messageLines: [
    "Bueno mi vida, q decirte, sabes cuanto te amo, sos la persona mas imporante en mi vida y me cambiaste muchisimo. .",
    "Queria juntar algunas cositas aca, para q te quede y cuando quieras puedas entrar y mirar, lo hice con todo mi amor y espero q te guste.",
    "Gracias por ser vos, por tu forma de querer, por las risas y por todo lo que todavía nos queda por vivir, quiero vivir mi vida entera con vos.",
    "Feliz cumpleaños, mi vida. Ojalá te guste y te amo con todo mi corazon, sos el amor de mi vida."
    
  ],
  timeline: [

    {
      date: "Cuando nos estabamos conociendo",
      title: "Cuando empezó a sentirse distinto",
      text: "Desde esa vez q empezamos a hablar, llamaditas, charlas toda la noche, fue hermoso, desde ahi no deje de amarte nunca."
    },
    {
      date: "Cuando empezamos a hablar",
      title: "LA VEZ Q ME BARDEASTE PQ TE HACIA CAGAR EN EL JUEGUITO",
      text: "Ojala se te rompa la pc me dijiste ASHJDAHJSDJH, mala."
    },
    {
      date: "La primera vez q nos vimos",
      title: "Nunca me voy a olvidar de eso, estabas preciosa.",
      text: "Cuando te vi viniendo toda nerviosa, por dios estabas hermosa"
    },
    {
      date: "El primer beso",
      title: "Estaba tan nervioso, queria parecerte lindo, no se",
      text: "Me acuerdo q llegamos al depto y te di el beso, fue tan lindo, igual besabas re bien nqv."
    },
    {
      date: "Hoy",
      title: "Tu pumpe",
      text: "TU PUMPEEEEEEEE, TEAMO MIAMOR."
    }
  ],
  songs: [
    {
      title: "Last Night On Earth",
      artist: "Green Day",
      reason: "You are the moonlight of my life every night.",
      file: "music/lastnightonerath.mp3"
    },
    {
      title: "A Vos",
      artist: "Milo J",
      reason: "No preguntes como, pero ahora soy adicto a vos.",
      file: "music/avos.mp3"
    },
    {
      title: "No necesito nada",
      artist: "No te va gustar",
      reason: "Tenes la receta justa para hacerme sonreir.",
      file: "music/nonecesitanada.mp3"
    },
    {
      title: "Rompecabezas de amor",
      artist: "Las pastillas del abuelo",
      reason: "Lo unico q me calma es tu voz.",
      file: "music/rompecabezas.mp3"
    },
    {
      title: "No te imaginas",
      artist: "No te va gustar",
      reason: "Llegas y el dia cambia para mi.",
      file: "music/noteimaginas.mp3"
    },
    {
      title: "Tu manta",
      artist: "Milo J",
      reason: 'Se q el mundo es bruto y ya sufriste mucho, puedo ser la luz q te cure las alas',
      file: "music/tumanta.mp3"
    }
  ],
  gallery: [
    {
      title: "Besito",
      label: "",
      text: "Parece q formamos un corazon, re loco",
      image: "img/foto1.jpg"
    },
    {
      title: "Con Pimienta",
      label: "",
      text: "LA PRIMERA FOTITO CON LA MEMEEE",
      image: "img/foto2.jpg"
    },
    {
      title: "Fotito en familia",
      label: "",
      text: "HERMOSOS NOSOTROS",
      image: "img/foto3.jpg"
    },
    {
      title: "BOMBONAZO",
      label: "",
      text: "QRICA Q SALIS EN ESTA MAMIII",
      image: "img/foto4.jpg"
    },
    {
      title: "Paseito de noche",
      label: "",
      text: "salimos re ninos",
      image: "img/foto5.jpg"
    },
    {
      title: "em",
      label: "",
      text: "DEPILACION PROFECIONAL DE CEJAS",
      image: "img/foto6.jpg"
    },
    {
      title: "Medio puton",
      label: "",
      text: "Salis hermosa y yo re puto",
      image: "img/foto7.jpg"
      
    },   // ← esta coma es importante
  {
    title: "Pedo",
    label: "",
    text: "Aca te tiraste un pedo :(",
    image: "img/foto8.jpg"
  },   // ← esta también
  {
    title: "Pimienta con cara de culo",
    label: "",
    text: "NI SE VE LA NEGRA",
    image: "img/foto9.jpg"
  }    // ← la última NO lleva coma
],
  
  reasons: [
    {
      title: "Por ser vos",
      text: "Porque con vos ya es suficiente para volver todo mas lindo, me alegras la vida."
    },
    {
      title: "Tu sonrisa",
      text: "Tenes una sonrisita hermosa, la veo y me derrito, amo hacerte sonreir."
    },
    {
      title: "Tu compañía",
      text: "Estemos al lado o no, tu compañia es lo mas importante para mi."
    },
    {
      title: "Tu intensidad",
      text: "Generalmente vos lo ves como algo malo, pero para nada, es hermoso q me ames asi."
    },
    {
      title: "Todo lo que compartimos",
      text: "Los recuerdos q tengo con vos son incomparables, amo recordar todo de vez en cuando."
    },
    {
      title: "Todo lo que viene",
      text: "Tenemos toda una vida, nos faltan muchas cosas por vivir, pero quiero q sea todo con vos."
    }
  ]
};


const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const heroName = $("#heroName");
const brandName = $("#brandName");
const startBtn = $("#startBtn");
const previewBtn = $("#previewBtn");
const intro = $("#intro");
const restartBtn = $("#restartBtn");

const confettiBtn = $("#confettiBtn");
const lightbox = $("#lightbox");
const lightboxImage = $("#lightboxImage");
const lightboxCaption = $("#lightboxCaption");
const closeLightbox = $("#closeLightbox");
const timelineList = $("#timelineList");

const typedLetter = $("#typedLetter");
const letterDate = $("#letterDate");
const countdownEls = {
  years: $("#years"),
  months: $("#months"),
  days: $("#days"),
  hours: $("#hours"),
  minutes: $("#minutes"),
  seconds: $("#seconds")
};
const daysTogether = $("#daysTogether");
const reasonCard = $("#reasonCard");
const reasonIndex = $("#reasonIndex");
const reasonTitle = $("#reasonTitle");
const reasonText = $("#reasonText");
const reasonPrev = $("#reasonPrev");
const reasonNext = $("#reasonNext");
const reasonShuffle = $("#reasonShuffle");
const songList = $("#songList");

const playerTitle = $("#playerTitle");
const playerArtist = $("#playerArtist");
const playerNote = $("#playerNote");
const playerDisc = $("#playerDisc");
const nextSong = $("#nextSong");
const galleryGrid = $("#galleryGrid");
const fx = $("#fx");
const fxCtx = fx.getContext("2d");
const pages = $$(".reveal");

document.documentElement.style.setProperty("--accent", "#ff6aa2");
heroName.textContent = CONFIG.name;
brandName.textContent = CONFIG.name;
$("#brandSub").textContent = "Te amo mucho";
$("#letterDate").textContent = new Date().toLocaleDateString("es-AR", {
  day: "numeric",
  month: "long",
  year: "numeric"
});

let currentSong = 0;
let currentReason = 0;
let typedStarted = false;
let confettiRequested = false;

function renderTimeline() {

  timelineList.innerHTML = "";
  const tmpl = $("#timelineTemplate");
  CONFIG.timeline.forEach(item => {
    const node = tmpl.content.cloneNode(true);
    node.querySelector(".milestone-date").textContent = item.date;
    node.querySelector(".milestone-title").textContent = item.title;
    node.querySelector(".milestone-text").textContent = item.text;
    timelineList.appendChild(node);
  });
}

function renderSongs() {
  songList.innerHTML = "";
  const tmpl = $("#songTemplate");
  CONFIG.songs.forEach((song, idx) => {
    const node = tmpl.content.cloneNode(true);
    const btn = node.querySelector(".song-card");
    btn.dataset.index = idx;
    btn.querySelector("strong").textContent = song.title;
    btn.querySelector("small").textContent = song.artist;
    btn.addEventListener("click", () => {
      chooseSong(idx);
      pulse(btn);
    });
    songList.appendChild(node);
  });
}

function renderGallery() {
  galleryGrid.innerHTML = "";
  const tmpl = $("#galleryTemplate");
  CONFIG.gallery.forEach((item, idx) => {
    const node = tmpl.content.cloneNode(true);
    const card = node.querySelector(".photo-card");

    if (item.image) {
      card.style.backgroundImage = `url(${item.image})`;
      card.style.backgroundSize = "cover";
      card.style.backgroundPosition = "center";
    } else {
      const colors = [
        "linear-gradient(135deg, #ff7bac, #ffcf76)",
        "linear-gradient(135deg, #ff8f66, #ff6aa2)",
        "linear-gradient(135deg, #ffbf75, #f97cab)",
        "linear-gradient(135deg, #ff6aa2, #ff9ec7)",
        "linear-gradient(135deg, #ff7bac, #ffc3da)",
        "linear-gradient(135deg, #ff8f66, #ffb6c1)"
      ];
      card.style.setProperty("--photo-bg", colors[idx % colors.length]);
    }

    card.querySelector(".photo-label").textContent = item.label;
    card.querySelector("strong").textContent = item.title;
    card.querySelector("p").textContent = item.text;
    card.addEventListener("click", () => openPhoto(item, idx));
    galleryGrid.appendChild(node);
  });
}

function openPhoto(item, idx) {
  if (item.image) {
    lightboxImage.src = item.image;
    lightboxImage.alt = item.title;
  } else {
    const hues = [320, 220, 20, 170, 45, 280];
    const hue = hues[idx % hues.length];
    lightboxImage.src = makePlaceholderImage(item.title, item.label, hue);
    lightboxImage.alt = item.title;
  }
  lightboxCaption.textContent = item.text;
  lightbox.classList.remove("hidden");
  burstSparkles(16);
}

function makePlaceholderImage(title, label, hue) {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="hsl(${hue}, 90%, 72%)"/>
        <stop offset="100%" stop-color="hsl(${(hue + 40) % 360}, 85%, 58%)"/>
      </linearGradient>
      <filter id="blur"><feGaussianBlur stdDeviation="20"/></filter>
    </defs>
    <rect width="1200" height="800" fill="url(#g)"/>
    <circle cx="180" cy="120" r="130" fill="rgba(255,255,255,.22)" filter="url(#blur)"/>
    <circle cx="1020" cy="160" r="170" fill="rgba(255,255,255,.18)" filter="url(#blur)"/>
    <circle cx="920" cy="650" r="190" fill="rgba(255,255,255,.14)" filter="url(#blur)"/>
    <rect x="120" y="90" width="960" height="620" rx="42" fill="rgba(10,10,16,.20)" stroke="rgba(255,255,255,.30)" />
    <text x="600" y="350" font-size="72" text-anchor="middle" fill="white" font-weight="800" font-family="Arial, sans-serif">${escapeXml(title)}</text>
    <text x="600" y="430" font-size="34" text-anchor="middle" fill="rgba(255,255,255,.92)" font-family="Arial, sans-serif">${escapeXml(label)}</text>
    <text x="600" y="520" font-size="24" text-anchor="middle" fill="rgba(255,255,255,.82)" font-family="Arial, sans-serif">Reemplazable por una foto real</text>
  </svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function escapeXml(str) {
  return String(str).replace(/[<>&'"]/g, c => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    "'": '&apos;',
    '"': '&quot;'
  }[c]));
}

// Reproductor de audio
const audioPlayer = new Audio();
let isPlaying = false;
audioPlayer.volume = 0.8; // volumen inicial 80%

function setupVolumeControl() {
  const slider = $("#volumeSlider");
  const volumeValue = $("#volumeValue");
  const snoopyFace = $("#snoopyFace");
  if (!slider) return;

  slider.addEventListener("input", () => {
    const vol = slider.value / 100;
    audioPlayer.volume = vol;
    volumeValue.textContent = slider.value + "%";

    // Snoopy se hace más chico o más grande según el volumen
    snoopyFace.classList.remove("low", "high");
    if (vol < 0.25) {
      snoopyFace.classList.add("low");
    } else if (vol > 0.75) {
      snoopyFace.classList.add("high");
    }
  });
}


function chooseSong(index) {

  currentSong = index;
  const song = CONFIG.songs[index];
  playerTitle.textContent = song.title;
  playerArtist.textContent = song.artist;
  playerNote.textContent = song.reason;
  playerDisc.textContent = index % 2 === 0 ? "♥" : "♫";
  $$(".song-card").forEach(card => card.classList.toggle("active", Number(card.dataset.index) === index));
  burstSparkles(14);

  // Reproducir el MP3 si tiene archivo
  if (song.file) {
    if (audioPlayer.src !== new URL(song.file, window.location.href).href) {
      audioPlayer.src = song.file;
    }
    audioPlayer.play().then(() => {
      isPlaying = true;
      playerDisc.style.animationPlayState = "running";
    }).catch(err => {
      console.log("No se pudo reproducir automáticamente:", err);
      playerNote.textContent = "Tocá de nuevo para escuchar la canción ❤️";
    });
  }
}


function chooseReason(index) {
  currentReason = (index + CONFIG.reasons.length) % CONFIG.reasons.length;
  const reason = CONFIG.reasons[currentReason];
  reasonIndex.textContent = String(currentReason + 1).padStart(2, "0");
  reasonTitle.textContent = reason.title;
  reasonText.textContent = reason.text;
}

function renderReasons() {
  chooseReason(0);
}

function formatTime(value) {

  return String(Math.max(0, value)).padStart(2, "0");
}

function updateCountdown() {
  const start = new Date(CONFIG.startDate);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();
  let hours = now.getHours() - start.getHours();
  let minutes = now.getMinutes() - start.getMinutes();
  let seconds = now.getSeconds() - start.getSeconds();

  if (seconds < 0) { seconds += 60; minutes--; }
  if (minutes < 0) { minutes += 60; hours--; }
  if (hours < 0) { hours += 24; days--; }
  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  if (months < 0) { months += 12; years--; }

  countdownEls.years.textContent = years;
  countdownEls.months.textContent = months;
  countdownEls.days.textContent = days;
  countdownEls.hours.textContent = formatTime(hours);
  countdownEls.minutes.textContent = formatTime(minutes);
  countdownEls.seconds.textContent = formatTime(seconds);

  const totalDays = Math.max(0, Math.floor((now - start) / 86400000));
  daysTogether.textContent = totalDays.toLocaleString("es-AR");
}

function typeLetter() {
  if (typedStarted) return;
  typedStarted = true;
  const text = CONFIG.messageLines.join(" ");
  let index = 0;
  typedLetter.textContent = "";
  const speed = 24;
  const tick = () => {
    typedLetter.textContent += text[index] || "";
    index++;
    if (index < text.length) {
      const delay = /[.,;:!?]/.test(text[index - 1]) ? speed * 6 : speed;
      setTimeout(tick, delay);
    }
  };
  tick();
}

function pulse(el) {
  el.classList.remove("pulse");
  void el.offsetWidth;
  el.classList.add("pulse");
}

function setIntroHidden() {
  intro.classList.add("hidden");
  setTimeout(() => {
    confettiRequested = true;
    burstConfetti(140);
    revealAll();
    typeLetter();
  }, 350);
}


function revealAll() {
  pages.forEach((el, idx) => {
    setTimeout(() => el.classList.add("visible"), idx * 120);
  });
}

function burstSparkles(amount = 12, x = window.innerWidth * 0.5, y = window.innerHeight * 0.5) {
  for (let i = 0; i < amount; i++) {
    const s = document.createElement("div");
    s.className = "sparkle";
    document.body.appendChild(s);
    const angle = Math.random() * Math.PI * 2;
    const dist = 20 + Math.random() * 150;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist;
    s.style.left = `${x}px`;
    s.style.top = `${y}px`;
    s.animate([
      { transform: "translate(0,0) scale(.4)", opacity: 0 },
      { transform: "translate(0,0) scale(1)", opacity: 1, offset: 0.15 },
      { transform: `translate(${dx}px, ${dy}px) scale(.2)`, opacity: 0 }
    ], {
      duration: 900 + Math.random() * 600,
      easing: "cubic-bezier(.2,.8,.2,1)"
    }).onfinish = () => s.remove();
  }
}

function burstConfetti(amount = 120) {
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("div");
    piece.style.position = "fixed";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.top = `-12px`;
    piece.style.width = `${6 + Math.random() * 8}px`;
    piece.style.height = `${8 + Math.random() * 12}px`;
    piece.style.borderRadius = `${Math.random() > 0.5 ? "999px" : "3px"}`;
    piece.style.background = `hsl(${Math.floor(Math.random() * 360)}, 95%, 70%)`;
    piece.style.zIndex = 35;
    piece.style.pointerEvents = "none";
    document.body.appendChild(piece);
    const endY = 110 + Math.random() * 50;
    const endX = (Math.random() * 2 - 1) * 18;
    const rot = (Math.random() * 2 - 1) * 360;
    const duration = 2400 + Math.random() * 1200;
    piece.animate([
      { transform: "translate(0,0) rotate(0deg)", opacity: 1 },
      { transform: `translate(${endX}vw, ${endY}vh) rotate(${rot}deg)`, opacity: 1 }
    ], { duration, easing: "cubic-bezier(.15,.8,.2,1)" }).onfinish = () => piece.remove();
  }
}

function burstFirework(rect) {
  const x = rect.left + rect.width / 2;
  const y = rect.top - 4;
  burstSparkles(28, x, y);
}

function startFx() {
  // Desactivamos el canvas de partículas (ahora caen Snoopys)
  if (fx) {
    fx.style.display = "none";
  }

  // Varias fotos de Snoopy (fondo transparente)
  const snoopySrcs = [
    "img/snoopy-fall1.png",
    "img/snoopy-fall3.png",
    "img/snoopy-fall4.png"
  ];
  const maxSnoopys = 16;

  function spawnFallingSnoopy(initial = false) {
    const img = document.createElement("img");
    img.src = snoopySrcs[Math.floor(Math.random() * snoopySrcs.length)];
    img.alt = "";
    img.className = "falling-snoopy";
    img.setAttribute("aria-hidden", "true");

    const size = 32 + Math.random() * 40; // entre 32px y 72px
    const left = Math.random() * 100;
    const duration = 11 + Math.random() * 14; // 11–25 segundos
    const delay = initial ? Math.random() * -duration : 0;
    const rotate = (Math.random() * 50 - 25).toFixed(1);

    img.style.cssText = `
      position: fixed;
      left: ${left}vw;
      top: -90px;
      width: ${size}px;
      height: auto;
      z-index: 0;
      pointer-events: none;
      transform: rotate(${rotate}deg);
      animation: fallSnoopy ${duration}s linear ${delay}s infinite;
    `;

    document.body.appendChild(img);

    img.addEventListener("animationiteration", () => {
      img.src = snoopySrcs[Math.floor(Math.random() * snoopySrcs.length)];
      img.style.left = Math.random() * 100 + "vw";
      img.style.width = (32 + Math.random() * 40) + "px";
    });
  }

  for (let i = 0; i < maxSnoopys; i++) {
    spawnFallingSnoopy(true);
  }
}

function initObservers() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        if (entry.target.id === "carta") typeLetter();
      }
    });
  }, { threshold: 0.18 });
  pages.forEach(el => io.observe(el));
}

function autoAdvanceSongs() {
  // Desactivado para que no interrumpa la canción que se está reproduciendo
}


function wireEvents() {
  startBtn.addEventListener("click", setIntroHidden);
  previewBtn.addEventListener("click", () => {
    setIntroHidden();
    setTimeout(() => document.querySelector("#contador").scrollIntoView({ behavior: "smooth" }), 500);
  });

  restartBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    burstConfetti(140);
    burstSparkles(24);
  });

  confettiBtn.addEventListener("click", () => burstConfetti(190));
  closeLightbox.addEventListener("click", () => lightbox.classList.add("hidden"));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.classList.add("hidden");
  });
  reasonPrev.addEventListener("click", () => chooseReason(currentReason - 1));
  reasonNext.addEventListener("click", () => chooseReason(currentReason + 1));
  reasonShuffle.addEventListener("click", () => chooseReason(Math.floor(Math.random() * CONFIG.reasons.length)));
  nextSong.addEventListener("click", () => chooseSong((currentSong + 1) % CONFIG.songs.length));
  document.addEventListener("click", (e) => {
    if (e.target.matches(".btn, .song-card, .photo-card")) {
      burstSparkles(6, e.clientX, e.clientY);
    }
  });

  document.addEventListener("mousemove", (e) => {
    if (Math.random() < 0.12) {
      const s = document.createElement("div");
      s.className = "sparkle";
      s.style.left = `${e.clientX}px`;
      s.style.top = `${e.clientY}px`;
      document.body.appendChild(s);
      s.animate([
        { transform: "scale(.35)", opacity: 0 },
        { transform: "scale(1)", opacity: .9, offset: 0.15 },
        { transform: "translate(0,-18px) scale(.15)", opacity: 0 }
      ], { duration: 700, easing: "ease-out" }).onfinish = () => s.remove();
    }
  });
}

function init() {
  renderTimeline();
  renderSongs();
  renderGallery();
  renderReasons();
  setupVolumeControl();
  chooseSong(0);
  chooseReason(0);
  updateCountdown();
  initObservers();
  wireEvents();
  startFx();
  autoAdvanceSongs();
  setInterval(updateCountdown, 1000);
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.style.scrollBehavior = "auto";
  }
}



init();
