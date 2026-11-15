(() => {
  const copy = {
    ru: {
      download: "Загрузить",
      videoPlaceholder: "Здесь будет ваше видео",
      wideCamera: "Поддержка<br>широкоугольной камеры",
      browserSources: "Источники<br>браузера",
      twitchIntegration: "Интеграция<br>с Twitch",
      traffic: "Следи за<br>трафиком",
      downloadApk: "Загрузить apk",
      home: "На главную",
      releaseLoading: "Загружаю последний релиз…",
      releaseUnavailable: "Релиз пока не опубликован",
      releaseError: "Не удалось загрузить данные релиза. Открой страницу релизов GitHub.",
      noApk: "В последнем релизе пока нет APK-файла.",
      noNotes: "В этом релизе нет описания."
    },
    en: {
      download: "Download",
      videoPlaceholder: "Your video goes here",
      wideCamera: "Ultra-wide<br>camera support",
      browserSources: "Browser<br>sources",
      twitchIntegration: "Twitch<br>integration",
      traffic: "Track your<br>data use",
      downloadApk: "Download APK",
      home: "Home",
      releaseLoading: "Loading latest release…",
      releaseUnavailable: "No release has been published yet",
      releaseError: "Could not load release details. Open the GitHub releases page.",
      noApk: "The latest release does not include an APK yet.",
      noNotes: "This release has no notes."
    }
  };

  const saved = localStorage.getItem("wirl-language");
  const preferred = (navigator.languages || [navigator.language || "en"])
    .some(code => code.toLowerCase().startsWith("ru")) ? "ru" : "en";
  let language = saved || preferred;

  function setLanguage(next) {
    language = next;
    localStorage.setItem("wirl-language", language);
    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const value = copy[language][el.dataset.i18n];
      if (value) el.innerHTML = value;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
      el.setAttribute("aria-label", copy[language][el.dataset.i18nAria]);
    });
    document.querySelectorAll(".language-toggle").forEach(button => {
      button.textContent = language === "ru" ? "EN" : "RU";
      button.setAttribute("aria-label", language === "ru" ? "Switch to English" : "Переключить на русский");
    });
    const title = document.querySelector("#release-title");
    if (title && !title.dataset.loaded) title.textContent = copy[language].releaseLoading;
    const desc = document.querySelector("#release-description");
    if (desc && desc.dataset.empty === "true") desc.textContent = copy[language].noNotes;
    document.title = language === "ru" ? "WIRL — Скачать" : "WIRL — Download";
  }

  document.querySelectorAll(".language-toggle").forEach(button => {
    button.addEventListener("click", () => setLanguage(language === "ru" ? "en" : "ru"));
  });

  document.querySelectorAll(".feature-video").forEach(video => {
    const source = video.dataset.video;
    video.addEventListener("loadeddata", () => video.dataset.loaded = "true");
    video.addEventListener("error", () => video.dataset.loaded = "false");
    if (source) {
      video.src = source;
      video.load();
    }
  });

  setLanguage(language);

  const version = document.querySelector("#release-version");
  if (!version) return;
  const title = document.querySelector("#release-title");
  const description = document.querySelector("#release-description");
  const error = document.querySelector("#release-error");
  const download = document.querySelector("#download-apk");
  fetch("https://api.github.com/repos/Vaipen/WIRL/releases/latest", {
    headers: { Accept: "application/vnd.github+json" }
  }).then(response => {
    if (!response.ok) throw new Error(`GitHub API ${response.status}`);
    return response.json();
  }).then(release => {
    version.textContent = release.tag_name || release.name || "—";
    title.textContent = release.name || release.tag_name || "WIRL";
    title.dataset.loaded = "true";
    const body = (release.body || "").trim();
    description.textContent = body;
    description.dataset.empty = body ? "false" : "true";
    if (!body) description.textContent = copy[language].noNotes;
    const apk = (release.assets || []).find(asset => asset.name.toLowerCase().endsWith(".apk"));
    if (apk) {
      download.href = apk.browser_download_url;
      download.removeAttribute("aria-disabled");
      download.classList.remove("is-disabled");
    } else {
      download.href = `https://github.com/Vaipen/WIRL/releases/tag/${encodeURIComponent(release.tag_name || "")}`;
      error.textContent = copy[language].noApk;
      error.hidden = false;
    }
  }).catch(() => {
    version.textContent = "—";
    title.textContent = copy[language].releaseUnavailable;
    title.dataset.loaded = "true";
    error.textContent = copy[language].releaseError;
    error.hidden = false;
  });
})();
