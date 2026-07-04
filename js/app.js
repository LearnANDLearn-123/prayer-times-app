const COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia",
  "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
  "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
  "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad",
  "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic", "DR Congo", "Ecuador", "Egypt", "El Salvador",
  "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
  "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
  "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
  "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
  "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
  "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
  "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
  "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands",
  "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman",
  "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
  "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
  "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
  "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
  "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka",
  "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand",
  "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
  "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
  "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const TRANSLATIONS = {
  en: {
    title: "Prayer Times",
    subtitle: "Muslim Prayer Times Worldwide",
    gps_btn: "Detect My Location",
    city_placeholder: "City",
    fetch_btn: "Get Times",
    next_prayer: "Next Prayer",
    fajr: "Fajr",
    sunrise: "Sunrise",
    dhuhr: "Dhuhr",
    asr: "Asr",
    maghrib: "Maghrib",
    isha: "Isha",
    test_athan: "Test Athan",
    buy_coffee: "Buy Me a Coffee",
    footer: "Powered by Aladhan API · Al-Minshawi Athan",
    copied: "Instapay copied!",
    athan_playing: "🔊 Athan is playing...",
    select_location: "Please enter a city and select a country",
    detecting: "Detecting location...",
    location_failed: "Location detection failed. Please enter manually.",
    fetching: "Fetching prayer times...",
    error_fetch: "Could not fetch prayer times. Check city and country.",
    next_day: "Tomorrow",
  },
  ar: {
    title: "مواقيت الصلاة",
    subtitle: "مواقيت الصلاة للمسلمين حول العالم",
    gps_btn: "تحديد موقعي",
    city_placeholder: "المدينة",
    fetch_btn: "عرض المواقيت",
    next_prayer: "الصلاة القادمة",
    fajr: "الفجر",
    sunrise: "الشروق",
    dhuhr: "الظهر",
    asr: "العصر",
    maghrib: "المغرب",
    isha: "العشاء",
    test_athan: "اختبار الأذان",
    buy_coffee: "اشتر لي قهوة",
    footer: "مدعوم من Aladhan API · أذان المشناوي",
    copied: "تم النسخ!",
    athan_playing: "🔊 جاري تشغيل الأذان...",
    select_location: "يرجى إدخال المدينة واختيار الدولة",
    detecting: "جاري تحديد الموقع...",
    location_failed: "فشل تحديد الموقع. يرجى الإدخال يدويًا.",
    fetching: "جاري جلب مواقيت الصلاة...",
    error_fetch: "تعذر جلب المواقيت. تحقق من المدينة والدولة.",
    next_day: "غداً",
  },
};

const ATHAN_URL = "https://www.islamcan.com/audio/athan/azan1.mp3";
const ALADHAN_BASE = "https://api.aladhan.com/v1";
const METHOD = 3;
const SCHOOL = 0;

const PRAYER_ORDER = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
const PRAYER_KEYS = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];

let state = {
  city: localStorage.getItem("pt_city") || "",
  country: localStorage.getItem("pt_country") || "",
  lang: localStorage.getItem("pt_lang") || "en",
  prayers: null,
  nextPrayer: null,
  athanPlayed: {},
  today: null,
};

let athanAudio = null;
let countdownInterval = null;
let clockInterval = null;
let athanCheckInterval = null;

function init() {
  populateCountries();
  restoreState();
  setupEventListeners();
  setLanguage(state.lang);
  updateClock();
  clockInterval = setInterval(updateClock, 1000);

  if (state.city && state.country) {
    fetchPrayerTimes(state.city, state.country);
  }
}

function populateCountries() {
  const select = document.getElementById("countrySelect");
  select.innerHTML = '<option value="">Country</option>';
  COUNTRIES.forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    select.appendChild(opt);
  });
}

function restoreState() {
  if (state.city) document.getElementById("cityInput").value = state.city;
  if (state.country) document.getElementById("countrySelect").value = state.country;
  if (state.lang === "ar") document.getElementById("langToggle").checked = true;
}

function setupEventListeners() {
  document.getElementById("gpsBtn").addEventListener("click", detectLocation);
  document.getElementById("fetchBtn").addEventListener("click", handleFetch);
  document.getElementById("langToggle").addEventListener("change", (e) => {
    setLanguage(e.target.checked ? "ar" : "en");
  });
  document.getElementById("testAthanBtn").addEventListener("click", playAthan);
  document.getElementById("coffeeBtn").addEventListener("click", copyInstapay);
  document.getElementById("cityInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleFetch();
  });
}

function setLanguage(lang) {
  state.lang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("pt_lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (TRANSLATIONS[lang][key]) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (TRANSLATIONS[lang][key]) {
      el.placeholder = TRANSLATIONS[lang][key];
    }
  });
}

function detectLocation() {
  if (!navigator.geolocation) {
    showToast(TRANSLATIONS[state.lang].location_failed);
    return;
  }

  showToast(TRANSLATIONS[state.lang].detecting);

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      fetchByCoords(latitude, longitude);
    },
    () => {
      showToast(TRANSLATIONS[state.lang].location_failed);
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

async function fetchByCoords(lat, lng) {
  showToast(TRANSLATIONS[state.lang].fetching);
  setLoading(true);

  try {
    const res = await fetch(
      `${ALADHAN_BASE}/timingsByLatLng?lat=${lat}&lng=${lng}&method=${METHOD}&school=${SCHOOL}`
    );
    const data = await res.json();

    if (data.code === 200) {
      processPrayerData(data);
      state.city = "";
      state.country = "";
      localStorage.removeItem("pt_city");
      localStorage.removeItem("pt_country");
      document.getElementById("cityInput").value = "";
      document.getElementById("countrySelect").value = "";
      document.getElementById("locationDisplay").textContent =
        `${data.data.meta.timezone}`;
    } else {
      showToast(TRANSLATIONS[state.lang].error_fetch);
    }
  } catch {
    showToast(TRANSLATIONS[state.lang].error_fetch);
  } finally {
    setLoading(false);
  }
}

async function handleFetch() {
  const city = document.getElementById("cityInput").value.trim();
  const country = document.getElementById("countrySelect").value;

  if (!city || !country) {
    showToast(TRANSLATIONS[state.lang].select_location);
    return;
  }

  state.city = city;
  state.country = country;
  localStorage.setItem("pt_city", city);
  localStorage.setItem("pt_country", country);
  await fetchPrayerTimes(city, country);
}

async function fetchPrayerTimes(city, country) {
  showToast(TRANSLATIONS[state.lang].fetching);
  setLoading(true);

  try {
    const res = await fetch(
      `${ALADHAN_BASE}/timingsByCity?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=${METHOD}&school=${SCHOOL}`
    );
    const data = await res.json();

    if (data.code === 200) {
      processPrayerData(data);
      document.getElementById("locationDisplay").textContent =
        `${city}, ${country}`;
    } else {
      showToast(TRANSLATIONS[state.lang].error_fetch);
    }
  } catch {
    showToast(TRANSLATIONS[state.lang].error_fetch);
  } finally {
    setLoading(false);
  }
}

function processPrayerData(data) {
  const timings = data.data.timings;
  const date = data.data.date;
  state.today = date.gregorian.date;
  state.athanPlayed = {};

  const prayers = {};
  PRAYER_KEYS.forEach((key) => {
    prayers[key] = formatTime(timings[key]);
  });

  state.prayers = prayers;
  displayPrayers(prayers);
  updateNextPrayer(prayers);

  if (countdownInterval) clearInterval(countdownInterval);
  countdownInterval = setInterval(() => updateNextPrayer(prayers), 1000);

  if (athanCheckInterval) clearInterval(athanCheckInterval);
  athanCheckInterval = setInterval(() => checkAthan(prayers), 10000);

  document.getElementById("currentDate").textContent = date.readable;

  setTimeout(() => {
    checkAthan(prayers);
  }, 1000);
}

function formatTime(time24) {
  const [h, m] = time24.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  return `${h12}:${String(m).padStart(2, "0")} ${period}`;
}

function displayPrayers(prayers) {
  PRAYER_KEYS.forEach((key) => {
    const el = document.getElementById(`prayer-${key.toLowerCase()}`);
    if (el) el.textContent = prayers[key];
  });
}

function updateNextPrayer(prayers) {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const prayerMinutes = {};
  PRAYER_ORDER.forEach((key) => {
    const timeStr = state.prayers[key];
    const [h, m] = parseTimeToMinutes(timeStr);
    prayerMinutes[key] = h * 60 + m;
  });

  let nextKey = null;
  let nextTime = null;

  for (const key of PRAYER_ORDER) {
    if (prayerMinutes[key] > currentMinutes) {
      nextKey = key;
      nextTime = prayerMinutes[key];
      break;
    }
  }

  if (!nextKey) {
    nextKey = "Fajr";
    nextTime = prayerMinutes["Fajr"] + 1440;
    document.getElementById("nextPrayerName").textContent =
      TRANSLATIONS[state.lang].next_day + " " + TRANSLATIONS[state.lang][nextKey.toLowerCase()];
  } else {
    document.getElementById("nextPrayerName").textContent =
      TRANSLATIONS[state.lang][nextKey.toLowerCase()];
  }

  state.nextPrayer = nextKey.toLowerCase();

  const nowTotal = now.getHours() * 60 + now.getMinutes();
  const diffMinutes = nextTime - nowTotal;
  const diffSeconds = Math.round(diffMinutes * 60 - now.getSeconds());

  if (diffSeconds <= 0) {
    document.getElementById("nextPrayerCountdown").textContent = "00:00:00";
  } else {
    const h = Math.floor(diffSeconds / 3600);
    const m = Math.floor((diffSeconds % 3600) / 60);
    const s = diffSeconds % 60;
    document.getElementById("nextPrayerCountdown").textContent =
      `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  document.getElementById("nextPrayerTime").textContent =
    state.prayers[nextKey] || "";

  highlightActivePrayer(nextKey);
  updateProgressRing(nextTime, nowTotal);
}

function parseTimeToMinutes(time12) {
  const [time, period] = time12.split(" ");
  let [h, m] = time.split(":").map(Number);
  if (period === "PM" && h !== 12) h += 12;
  if (period === "AM" && h === 12) h = 0;
  return [h, m];
}

function highlightActivePrayer(nextKey) {
  document.querySelectorAll(".prayer-card").forEach((card) => {
    card.classList.remove("active", "current");
  });

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  for (const key of PRAYER_ORDER) {
    if (key === nextKey) {
      const card = document.querySelector(`[data-prayer="${key}"]`);
      if (card) card.classList.add("active");
      break;
    }
  }

  if (state.prayers) {
    for (const key of PRAYER_ORDER) {
      const timeStr = state.prayers[key];
      const [h, m] = parseTimeToMinutes(timeStr);
      const prayerMin = h * 60 + m;
      if (
        currentMinutes >= prayerMin - 1 &&
        currentMinutes < prayerMin + 30
      ) {
        const card = document.querySelector(`[data-prayer="${key}"]`);
        if (card) card.classList.add("current");
      }
    }
  }
}

function updateProgressRing(nextTime, nowTotal) {
  const circle = document.getElementById("progressCircle");
  if (!circle) return;

  const prevPrayerTimes = {};
  if (state.prayers) {
    PRAYER_ORDER.forEach((key) => {
      const timeStr = state.prayers[key];
      const [h, m] = parseTimeToMinutes(timeStr);
      prevPrayerTimes[key] = h * 60 + m;
    });
  }

  let prevTime = 0;
  for (const key of PRAYER_ORDER) {
    if (prevPrayerTimes[key] >= nextTime) break;
    prevTime = prevPrayerTimes[key];
  }

  if (nextTime <= prevTime) nextTime += 1440;

  const total = nextTime - prevTime;
  const elapsed = nowTotal - prevTime;
  const pct = Math.min(Math.max(elapsed / total, 0), 1);

  const circumference = 2 * Math.PI * 45;
  const offset = circumference * (1 - pct);
  circle.style.strokeDasharray = `${circumference}`;
  circle.style.strokeDashoffset = `${offset}`;
}

function checkAthan(prayers) {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  for (const key of PRAYER_ORDER) {
    if (key === "Sunrise") continue;
    const [h, m] = parseTimeToMinutes(prayers[key]);
    const prayerMin = h * 60 + m;

    if (Math.abs(currentMinutes - prayerMin) <= 1) {
      const today = state.today || new Date().toISOString().split("T")[0];
      const playedKey = `${today}-${key}`;

      if (!state.athanPlayed[playedKey]) {
        state.athanPlayed[playedKey] = true;
        playAthan();
      }
      break;
    }
  }
}

function playAthan() {
  if (athanAudio) {
    athanAudio.pause();
    athanAudio.currentTime = 0;
  }

  athanAudio = new Audio(ATHAN_URL);
  athanAudio.play().catch(() => {});
  showToast(TRANSLATIONS[state.lang].athan_playing);
}

function copyInstapay() {
  const instapay = "mustafaengineering@instapay";
  navigator.clipboard.writeText(instapay).then(() => {
    showToast(TRANSLATIONS[state.lang].copied);
  }).catch(() => {
    const ta = document.createElement("textarea");
    ta.value = instapay;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    showToast(TRANSLATIONS[state.lang].copied);
  });
}

function updateClock() {
  const now = new Date();
  document.getElementById("currentTime").textContent =
    now.toLocaleTimeString("en-US", { hour12: false });
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), 3000);
}

function setLoading(loading) {
  document.querySelectorAll("button").forEach((b) => {
    b.disabled = loading;
    b.classList.toggle("loading", loading);
  });
}

document.addEventListener("DOMContentLoaded", init);
