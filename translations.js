const translations = {
  en: {
    topbar_subtitle: "The people leading the community",
    forum_purpose: "Forum Purpose",
    forum_title: "A forum connecting young Israeli leadership with opportunities for impact",
    forum_description: "The Forum aims to build a quality network of young people working in the fields of policy, security, technology, academia and society, and to connect them in order to generate collaboration, joint learning and public impact in Israel and around the world. This is a space that brings together practical experience, public vision and a strong human community.",
    global_community: "Global community of young leaders",
    international_connections: "Connections between Israel, USA and Europe",
    areas_of_impact: "Policy, security, technology and impact",
    search_placeholder: "Search by name, role, city or topic...",
    loading: "Loading forum members...",
    steering_team_label: "Forum Leadership",
    steering_team_title: "Forum Steering Committee",
    steering_team_description: "The team leading the forum, shaping its strategic direction and connecting members, content and partnerships.",
    community_label: "Forum Community",
    community_title: "Forum Members",
    community_description: "Policy, security, technology, economy, academia and entrepreneurship professionals working in the international arena and making up the forum community.",
    no_results: "No results found",
    email_copied: "Email copied: "
  },
  he: {
    topbar_subtitle: "האנשים שמובילים את הקהילה",
    forum_purpose: "מטרת הפורום",
    forum_title: "פורום שמחבר בין מנהיגות ישראלית צעירה להזדמנויות של השפעה",
    forum_description: "הפורום נועד לבנות רשת איכותית של צעירים וצעירות שפועלים בעולמות המדיניות, הביטחון, הטכנולוגיה, האקדמיה והחברה, ולחבר ביניהם כדי לייצר שיתופי פעולה, למידה משותפת והשפעה ציבורית בישראל ובעולם. זהו מרחב שמפגיש בין ניסיון מעשי, חזון ציבורי וקהילה אנושית חזקה.",
    global_community: "קהילה גלובלית של מנהיגים צעירים",
    international_connections: "חיבורים בין ישראל, ארה״ב ואירופה",
    areas_of_impact: "מדיניות, ביטחון, טכנולוגיה והשפעה",
    search_placeholder: "חיפוש לפי שם, תפקיד, עיר או נושא...",
    loading: "טוען את חברי הפורום...",
    steering_team_label: "הובלת הפורום",
    steering_team_title: "צוות ההיגוי של הפורום",
    steering_team_description: "הצוות שמוביל את הפורום, מעצב את הכיוון האסטרטגי שלו ומחבר בין החברים, התוכן והשותפויות.",
    community_label: "קהילת הפורום",
    community_title: "חברי הפורום",
    community_description: "אנשי מדיניות, ביטחון, טכנולוגיה, כלכלה, אקדמיה ויזמות שפועלים בזירה הבינלאומית ומרכיבים את קהילת הפורום.",
    no_results: "לא נמצאו תוצאות",
    email_copied: "אימייל הועתק: "
  }
};

function getLanguage() {
  return localStorage.getItem('forumLanguage') || 'en';
}

function setLanguage(lang) {
  localStorage.setItem('forumLanguage', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
  updatePageTranslations();
}

function initLanguage() {
  const lang = getLanguage();
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
  updatePageTranslations();
}

function t(key) {
  const lang = getLanguage();
  return translations[lang][key] || translations['en'][key] || key;
}

function updatePageTranslations() {
  const lang = getLanguage();

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });

  // Update language toggle button
  const langToggle = document.getElementById('langToggleText');
  if (langToggle) {
    langToggle.textContent = lang === 'en' ? 'עברית' : 'English';
  }

  // Re-render members with updated language
  if (window.filteredMembers) {
    renderMembers();
  }
}
