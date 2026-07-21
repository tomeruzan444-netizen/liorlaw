# אתר ליאור עייש – משרד עורכי דין

אתר תדמית סטטי בעברית (RTL) למשרד עורכי דין המתמחה בתביעות מול משרד הביטחון.
נבנה עם [Astro](https://astro.build) ומיועד לפריסה ב-Vercel.

## פקודות

| פקודה | מה היא עושה |
|---|---|
| `npm install` | התקנת תלויות (פעם ראשונה) |
| `npm run dev` | שרת פיתוח מקומי — http://localhost:4321 |
| `npm run build` | בניית האתר לתיקיית `dist/` |
| `npm run preview` | תצוגה מקדימה של ה-build |

## מבנה הפרויקט

```
├── public/
│   ├── images/            # לוגואים (חולצו ממסמך המיתוג), תמונת OG
│   ├── favicon.png / apple-touch-icon.png
│   └── robots.txt
├── src/
│   ├── config/site.ts     # ⭐ כל ההגדרות: דומיין, טלפון, כתובת, ניווט, שירותים
│   ├── styles/global.css  # פלטת צבעים (מהמיתוג), טיפוגרפיה, רכיבי בסיס
│   ├── layouts/
│   │   ├── Base.astro     # <head>, meta, OG, canonical, Schema, Header/Footer
│   │   └── ServicePage.astro  # תבנית עמוד שירות (Hero+FAQ+CTA מובנים)
│   ├── components/        # Header, Footer, Hero, FAQ, CTA, ContactForm...
│   └── pages/             # כל קובץ = עמוד באתר (נתיב לפי שם הקובץ)
├── CONTENT-GUIDE.md       # מדריך כתיבת תוכן ו-SEO לעמודים חדשים
└── astro.config.ts
```

## עריכות נפוצות

- **עדכון טלפון / כתובת / דומיין** — הכול ב-`src/config/site.ts`, במקום אחד.
- **הוספת עמוד שירות** — יוצרים קובץ חדש ב-`src/pages/` על בסיס עמוד קיים
  (למשל `mod-claims.astro`), ומוסיפים את העמוד ל-`SERVICES` ב-`site.ts`
  (תפריט, פוטר וכרטיסים מתעדכנים אוטומטית). לפני כתיבה — לקרוא את
  `CONTENT-GUIDE.md`.
- **שינוי צבעים/פונטים** — משתני ה-CSS בראש `src/styles/global.css`.

## ‼️ להשלים לפני עלייה לאוויר (placeholders)

1. **דומיין** — `SITE_URL` ב-`src/config/site.ts` (מעדכן אוטומטית canonical,
   sitemap, OG ו-Schema) + הכתובת ב-`public/robots.txt`.
2. **פרטי קשר אמיתיים** — טלפון, וואטסאפ, אימייל, כתובת ושעות ב-`site.ts`.
3. **חיבור טופס יצירת קשר** — להירשם ל-[Web3Forms](https://web3forms.com)
   (חינם), להדביק את המפתח ב-`WEB3FORMS_KEY` שב-
   `src/components/ContactForm.astro`. עד אז הטופס במצב הדגמה.
4. **עמוד אודות** — להשלים רקע אישי של ליאור (מסומן PLACEHOLDER בקובץ).
5. **בדיקה משפטית של התוכן** — המועדים והזכאויות בעמודי השירות נוסחו באופן
   כללי; על ליאור לעבור ולאשר כל קביעה משפטית (מועדי ערעור, אחוזים וכו').
6. **הצהרת נגישות** — לעדכן שם רכז/ת נגישות.
7. **Google Search Console + Analytics** — לחבר אחרי העלייה לאוויר.

## פריסה ל-Vercel

1. דחפו את הפרויקט ל-GitHub (`git init` → commit → push).
2. ב-[vercel.com](https://vercel.com): New Project → בחירת הריפו.
   Vercel מזהה Astro אוטומטית — אין צורך בהגדרות.
3. מכאן כל `git push` מפרסם אוטומטית, וכל branch מקבל כתובת תצוגה מקדימה.
4. כשיירכש דומיין: מוסיפים אותו ב-Vercel → Settings → Domains, ומעדכנים את
   `SITE_URL` כאמור לעיל.

## SEO — מה כבר מובנה

- meta title/description ייחודיים לכל עמוד, canonical, Open Graph
- Schema: LegalService (כל האתר), BreadcrumbList, FAQPage (עמודי שירות והבית)
- sitemap.xml אוטומטי (`/sitemap-index.xml`) + robots.txt
- HTML סמנטי, היררכיית כותרות, RTL מלא, נגישות (סקיפ-לינק, ARIA, ניגודיות)
- פונטים בהגשה עצמית (fontsource) — בלי בקשות לגוגל, מהיר יותר
