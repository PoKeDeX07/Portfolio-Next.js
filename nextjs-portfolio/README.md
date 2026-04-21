# Aniket Kulkarni — Portfolio (Next.js)

Premium, single-page portfolio for **Aniket Kulkarni** (UI/UX Designer). Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**. No backend — the contact form posts directly to a **Google Apps Script** endpoint that writes to a Google Sheet.

---

## 🚀 Quick start (local)

```bash
yarn install
cp .env.local.example .env.local   # paste your Google Apps Script URL into this file
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## ☁️ Deploy to Vercel (zero-config)

1. Push this project to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) → Import the repo.
3. On the import screen, add the environment variable:
   - `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` = your Google Apps Script web-app URL (see below).
4. Click **Deploy**. Done.

No build tweaks, no fixes. Vercel auto-detects Next.js.

---

## 📬 Contact form → Google Sheet (Apps Script setup)

The form sends `name`, `email`, and `message` as `application/x-www-form-urlencoded` to a Google Apps Script Web App. A honeypot field is included for spam protection.

### Step 1 — Create a Google Sheet

1. Create a new Google Sheet (name it e.g. `Portfolio Inquiries`).
2. In the first row, add headers:

| Timestamp | Name | Email | Message |
| --------- | ---- | ----- | ------- |

### Step 2 — Add an Apps Script

1. In the sheet, go to **Extensions → Apps Script**.
2. Replace the default code with:

```javascript
function doPost(e) {
  try {
    // Honeypot — if the hidden field is filled, silently accept & drop.
    if (e.parameter._honeypot) {
      return ContentService.createTextOutput(JSON.stringify({ ok: true }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([
      new Date(),
      (e.parameter.name || '').toString().slice(0, 200),
      (e.parameter.email || '').toString().slice(0, 200),
      (e.parameter.message || '').toString().slice(0, 5000),
    ]);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Deploy → New deployment**.
4. Select type **Web app**.
5. Execute as: **Me**.
6. Who has access: **Anyone** (required so the Vercel site can POST to it).
7. Click **Deploy**, authorize, copy the **Web app URL**.

### Step 3 — Paste the URL into `.env.local` (and Vercel env vars)

```
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/XXXX/exec
```

That's it — every form submission now lands in your sheet.

---

## 📁 Project structure

```
app/
  layout.jsx      # Root layout, fonts, metadata, Toaster
  page.jsx        # Main portfolio page
  globals.css     # Design tokens, custom CSS, Tailwind layers
components/
  Navigation.jsx
  Hero.jsx
  About.jsx
  SelectedWork.jsx
  CaseStudy.jsx
  Skills.jsx
  Experience.jsx
  Contact.jsx
  Footer.jsx
  ui/sonner.jsx   # Toast wrapper
data/
  portfolio.js    # Projects, experience, skills, case study
lib/
  utils.js        # cn() helper
public/
  resume.pdf
```

---

## 📝 Editing content

All portfolio content lives in **`data/portfolio.js`**. Change the projects, experience, skills, case study copy, socials, etc. in that one file.

Resume: replace **`public/resume.pdf`** with your own file (same name).

---

## 🎨 Tech

- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3
- Framer Motion 11
- Plus Jakarta Sans via `next/font/google`
- `sonner` for toasts
- `lucide-react` for icons

---

## 📜 License

All content (copy, resume, project media) belongs to Aniket Kulkarni. Code structure is free to reuse.
