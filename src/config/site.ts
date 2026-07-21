/**
 * הגדרות מרכזיות של האתר - כל ה-placeholders במקום אחד.
 * כשמתקבלים פרטים אמיתיים (דומיין, טלפון, כתובת) מעדכנים רק כאן.
 */

// הדומיין - לעדכן כשנרכש דומיין אמיתי (משפיע על canonical, sitemap, OG, Schema)
export const SITE_URL = "https://www.lior-ayash.co.il";

export const SITE = {
  name: 'עו"ד ליאור עייש - משרד עורכי דין',
  shortName: "ליאור עייש",
  tagline: "מיצוי זכויות מול משרד הביטחון והביטוח הלאומי",
  description:
    'משרדו של עו"ד ליאור עייש, לשעבר סגן התובע הצבאי הראשי, מתמחה בתביעות מול משרד הביטחון: הכרה בנכות, פוסט-טראומה, נפגעי פעולות איבה, ערעורים על קצין התגמולים וייצוג בוועדות רפואיות.',

  // ===== פרטי קשר - PLACEHOLDERS, לעדכן כשיתקבלו פרטים אמיתיים =====
  phone: "050-000-0000",
  phoneIntl: "+972500000000", // לקישורי tel: ו-WhatsApp
  email: "office@lior-ayash.co.il",
  address: {
    street: "רחוב לדוגמה 1",
    city: "תל אביב",
    full: "רחוב לדוגמה 1, תל אביב",
  },
  hours: "ימים א'-ה' 9:00-18:00",

  // קישור וואטסאפ עם הודעה מוכנה
  whatsapp:
    "https://wa.me/972500000000?text=" +
    encodeURIComponent("שלום, אשמח לקבוע שיחת ייעוץ ראשונית"),
} as const;

// ניווט ראשי
export const NAV = [
  { title: "בית", href: "/" },
  { title: "אודות", href: "/about/" },
  {
    title: "תחומי עיסוק",
    href: "#",
    children: [
      { title: "תביעות נגד משרד הביטחון", href: "/mod-claims/" },
      { title: "עורך דין פוסט טראומה", href: "/ptsd-lawyer/" },
      { title: "נפגעי פעולות איבה", href: "/terror-victims/" },
      { title: "ערעור על החלטת קצין תגמולים", href: "/pension-officer-appeal/" },
      { title: "ועדה רפואית בביטוח לאומי", href: "/medical-committee/" },
    ],
  },
] as const;

// רשימת עמודי השירות - לשימוש בכרטיסים, בקישורים פנימיים ובפוטר
export const SERVICES = [
  {
    title: "תביעות נגד משרד הביטחון",
    href: "/mod-claims/",
    short: "הכרה בנכות, החמרת מצב ותגמולים לחיילים ואנשי כוחות הביטחון",
  },
  {
    title: "עורך דין פוסט טראומה",
    href: "/ptsd-lawyer/",
    short: "הכרה בפוסט-טראומה (PTSD) כפגיעה בשירות הצבאי והביטחוני",
  },
  {
    title: "נפגעי פעולות איבה",
    href: "/terror-victims/",
    short: "מיצוי זכויות נפגעי טרור ובני משפחותיהם מול הביטוח הלאומי",
  },
  {
    title: "ערעור על החלטת קצין תגמולים",
    href: "/pension-officer-appeal/",
    short: "השגה וערעור על דחיית תביעה או על דרגת נכות שנקבעה",
  },
  {
    title: "ועדה רפואית בביטוח לאומי",
    href: "/medical-committee/",
    short: "הכנה וייצוג בוועדות רפואיות ובוועדות עררים",
  },
] as const;
