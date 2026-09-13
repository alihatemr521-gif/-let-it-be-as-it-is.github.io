const translations = {
  en: {
    "nav.writings":"Writings","nav.photos":"Photos","nav.archive":"Archive",
    "hero.eyebrow":"A personal space",
    "hero.intro":"A place for what I write, what I see, and what I choose to leave here.",
    "hero.enter":"Enter",
    "writings.empty":"Nothing has been written here yet.",
    "writings.note":"The first piece will appear here when it is ready.",
    "photos.brain":"The mind, left open.",
    "archive.empty":"The archive is waiting.",
    "closing":"Nothing needs to be forced into being something else."
  },
  ar: {
    "nav.writings":"كتابات","nav.photos":"صور","nav.archive":"أرشيف",
    "hero.eyebrow":"مساحة شخصية",
    "hero.intro":"مكان لما أكتبه، وما أراه، وما أختار أن أتركه هنا.",
    "hero.enter":"دخول",
    "writings.empty":"لا توجد كتابات هنا بعد.",
    "writings.note":"ستظهر أول قطعة هنا عندما تكون جاهزة.",
    "photos.brain":"العقل، متروكاً مفتوحاً.",
    "archive.empty":"الأرشيف بانتظارك.",
    "closing":"ليس كل شيء بحاجة لأن يُجبر على أن يكون شيئاً آخر."
  }
};

let lang = localStorage.getItem("lbi-language") || "en";
const toggle = document.getElementById("langToggle");

function applyLanguage(){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(translations[lang][key]) el.textContent=translations[lang][key];
  });
  toggle.textContent = lang === "en" ? "AR" : "EN";
  localStorage.setItem("lbi-language",lang);
}
toggle.addEventListener("click",()=>{lang=lang==="en"?"ar":"en";applyLanguage()});
applyLanguage();
