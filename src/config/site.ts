/**
 * הגדרות מרכזיות של האתר - כל ה-placeholders במקום אחד.
 * כשמתקבלים פרטים אמיתיים (דומיין, טלפון, כתובת) מעדכנים רק כאן.
 */

// הדומיין - לעדכן כשנרכש דומיין אמיתי (משפיע על canonical, sitemap, OG, Schema)
export const SITE_URL = "https://www.lior-ayash.co.il";

// ‼️ חוסם אינדוקס במנועי חיפוש (noindex, nofollow) בזמן הפיתוח.
// כשעולים לאוויר סופית - לשנות ל-false כדי לאפשר קידום אורגני.
export const NOINDEX = true;

export const SITE = {
  name: 'עו"ד ליאור עייש - משרד עורכי דין',
  shortName: "ליאור עייש",
  tagline: "משפט פלילי, דיני צבא וביטחון וצווארון לבן",
  description:
    'משרדו של עו"ד ליאור עייש, לשעבר סגן התובע הצבאי הראשי: ייצוג בכיר במשפט פלילי, דיני צבא וביטחון ועבירות צווארון לבן, לצד מיצוי זכויות מול משרד הביטחון והביטוח הלאומי.',

  // ===== פרטי קשר =====
  phone: "050-9934546",
  phoneIntl: "+972509934546", // לקישורי tel: ו-WhatsApp
  email: "lior@ayashlaw.com",
  address: {
    street: "וינגייט 14",
    city: "תל אביב",
    full: "וינגייט 14, תל אביב",
  },

  // קישור וואטסאפ עם הודעה מוכנה
  whatsapp:
    "https://wa.me/972509934546?text=" +
    encodeURIComponent("שלום, אשמח לקבוע שיחת ייעוץ"),
} as const;

// ===== תחומי ההתמחות =====
// מקור אמת אחד לכרטיסי עמוד הבית, לתפריט "תחומי עיסוק" ולעמוד אודות.
// icon = מזהה האייקון (ה-SVG עצמו ב-PracticeAreas.astro). הסדר קובע את סדר התצוגה.
export const PRACTICE_AREAS = [
  { title: "עבירות המתה ורשלנות", short: "מומחיות ייחודית בטיפול בתיקי המתה", href: "/criminal-law/", icon: "homicide" },
  { title: "עבירות מין חמורות", short: "עבירות מין חמורות ועבירות לפי החוק למניעת הטרדה מינית", href: "/criminal-law/", icon: "sex" },
  { title: "עבירות בנשק", short: "החזקה, סחר וירי - ייצוג בעבירות נשק", href: "/criminal-law/", icon: "weapons" },
  { title: 'חקירות מח"ש', short: 'היכרות מעמיקה עם הוראות הפתיחה באש וכללי הפעלת הכוח באיו"ש', href: "/military-law/", icon: "mahash" },
  { title: "צווארון לבן", short: "מרמה, עבירות מס, הלבנת הון ועבירות ניירות ערך", href: "/white-collar/", icon: "whitecollar" },
  { title: "משפט פלילי", short: "ייצוג בכל סוגי העבירות הפליליות", href: "/criminal-law/", icon: "criminal" },
  { title: "דיני צבא וביטחון", short: 'ייעוץ בחקירות מצ"ח וייצוג בפני בתי דין צבאיים', href: "/military-law/", icon: "military" },
  { title: 'הסדרת מעמד מול צה"ל', short: "אזרחים יורדים, בני מהגרים וספורטאים מצטיינים", href: "/military-service-status/", icon: "status" },
  { title: "הכרה בפוסט טראומה", short: "תביעה להכרה בפוסט טראומה בעקבות השירות הצבאי", href: "/ptsd-lawyer/", icon: "ptsd" },
  { title: "תביעות נגד משרד הביטחון", short: "הכרה בנכות, החמרת מצב ותגמולים לחיילים ואנשי כוחות הביטחון", href: "/mod-claims/", icon: "mod" },
] as const;

// ניווט ראשי - תפריט "תחומי עיסוק" מציג את אותם הנושאים כמו בעמוד הבית
export const NAV = [
  { title: "בית", href: "/" },
  { title: "אודות", href: "/about/" },
  {
    title: "תחומי עיסוק",
    href: "#",
    children: PRACTICE_AREAS.map((p) => ({ title: p.title, href: p.href })),
  },
] as const;

// רשימת עמודי השירות - לשימוש בכרטיסים (אודות/404), בקישורים פנימיים ובפוטר
// הסדר קובע את סדר התצוגה - משפט פלילי ראשון
export const SERVICES = [
  {
    title: "משפט פלילי",
    href: "/criminal-law/",
    short: "ייצוג בכל סוגי העבירות הפליליות - עבירות המתה, מין, נשק ורשלנות",
  },
  {
    title: "צווארון לבן",
    href: "/white-collar/",
    short: "מרמה, עבירות מס, הלבנת הון ועבירות ניירות ערך - בדיסקרטיות מלאה",
  },
  {
    title: "דיני צבא וביטחון",
    href: "/military-law/",
    short: 'ייעוץ בחקירות מצ"ח וייצוג בפני בתי דין צבאיים',
  },
  {
    title: 'הסדרת מעמד מול צה"ל',
    href: "/military-service-status/",
    short: "פטור והסדרת מעמד מול רשויות הצבא, ומעמד בן מהגרים לאזרחים בחו\"ל",
  },
  {
    title: "הכרה בפוסט טראומה",
    href: "/ptsd-lawyer/",
    short: "תביעה להכרה בפוסט טראומה בעקבות השירות הצבאי",
  },
  {
    title: "תביעות נגד משרד הביטחון",
    href: "/mod-claims/",
    short: "הכרה בנכות, החמרת מצב ותגמולים לחיילים ואנשי כוחות הביטחון",
  },
] as const;
