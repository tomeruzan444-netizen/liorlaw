/**
 * הגדרות מרכזיות של האתר - כל ה-placeholders במקום אחד.
 * כשמתקבלים פרטים אמיתיים (דומיין, טלפון, כתובת) מעדכנים רק כאן.
 */

// הדומיין - לעדכן כשנרכש דומיין אמיתי (משפיע על canonical, sitemap, OG, Schema)
export const SITE_URL = "https://www.lior-ayash.co.il";

export const SITE = {
  name: 'עו"ד ליאור עייש - משרד עורכי דין',
  shortName: "ליאור עייש",
  tagline: "משפט פלילי, דיני צבא וביטחון וצווארון לבן",
  description:
    'משרדו של עו"ד ליאור עייש, לשעבר סגן התובע הצבאי הראשי: ייצוג בכיר במשפט פלילי, דיני צבא וביטחון ועבירות צווארון לבן, לצד מיצוי זכויות מול משרד הביטחון והביטוח הלאומי.',

  // ===== פרטי קשר =====
  phone: "050-9934546",
  phoneIntl: "+972509934546", // לקישורי tel: ו-WhatsApp
  email: "office@lior-ayash.co.il", // PLACEHOLDER - לעדכן מייל אמיתי
  address: {
    street: "וינגייט 14",
    city: "תל אביב",
    full: "וינגייט 14, תל אביב",
  },
  hours: "ימים א'-ה' 9:00-18:00",

  // קישור וואטסאפ עם הודעה מוכנה
  whatsapp:
    "https://wa.me/972509934546?text=" +
    encodeURIComponent("שלום, אשמח לקבוע שיחת ייעוץ"),
} as const;

// ניווט ראשי
export const NAV = [
  { title: "בית", href: "/" },
  { title: "אודות", href: "/about/" },
  {
    title: "תחומי עיסוק",
    href: "#",
    children: [
      { title: "משפט פלילי", href: "/criminal-law/" },
      { title: "צווארון לבן", href: "/white-collar/" },
      { title: "דיני צבא וביטחון", href: "/military-law/" },
      { title: 'הסדרת מעמד מול צה"ל', href: "/military-service-status/" },
      { title: "הכרה בפוסט טראומה", href: "/ptsd-lawyer/" },
      { title: "תביעות נגד משרד הביטחון", href: "/mod-claims/" },
    ],
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
