# Institute of Digital Risk (IDR) — Website Submission

A responsive, single‑page website and brand identity for the **Institute of Digital Risk (IDR)**.  
This submission fulfills the brief by delivering:

*   A cube‑inspired, minimalist **logo** (inline PNG)
*   A **responsive homepage** (desktop + mobile) built with **semantic HTML5**, **vanilla CSS**, and **vanilla JavaScript**
*   No frameworks (no Bootstrap/Tailwind) and no external image assets required (logo + favicon are inline)

***

## ✨ Highlights

*   **Brand & Logo:**  
    Cube icon suggests **structure, risk, and resilience**; orange/white/black palette communicates innovation and authority. Logo is embedded as **inline PNG** for crisp scaling and theming.

*   **Homepage Sections:**
    1.  Hero (mission + CTA)
    2.  About IDR
    3.  Service Pillars (Academy, Innovation & Incubation, Advisory)
    4.  Community / Who We Serve
    5.  Contact (simple form)

*   **Interactions & UX:**
    *   Sticky header with **desktop inline nav** and **mobile dropdown nav**
    *   **Smooth scroll** and **active link highlighting**
    *   **Fade‑in on scroll** animations
    *   **Scroll progress bar** (top)
    *   **Back‑to‑top** button
    *   Subtle **parallax** in the hero graphic
    *   **Dark mode** toggle with preference remembered

*   **Accessibility & Semantics:**  
    Landmarks (`header`, `nav`, `main`, `section`, `footer`), labels, visible focus states, **skip‑to‑content**, reasonable color contrast, ARIA attributes for controls.

***

## 🗂 Project Structure

    /
    ├── index.html    # semantic markup + inline PNG logo + data-URI favicon
    ├── styles.css    # responsive layout, brand palette, animations, dark mode
    └── script.js     # nav toggle, active link, fade-ins, progress bar, parallax, dark mode

> **No /assets folder is required**. The logo is inline PNG; the favicon is a **data‑URI**.

***

## 🚀 How to Run Locally

1.  **Download** the three files (`index.html`, `styles.css`, `script.js`) into a folder.
2.  Open **`index.html`** in any modern browser.
3.  (Optional) Use a lightweight local server for best results with history/smooth scroll:
    *   VS Code: *Live Server* extension
    *   Python: `python -m http.server` → open `http://localhost:8000`

***

## ✅ Assignment Compliance Matrix

*   **Logo design**
    *   Cube‑inspired geometric icon ✔
    *   Primary colors: **orange / white / black** ✔
    *   Variants: icon‑only (header + favicon), and full lockup (brand text next to icon) ✔
    *   Legible at small sizes (inline vector + simplified favicon) ✔

*   **Homepage sections**
    *   Hero + CTA ✔
    *   About IDR ✔
    *   Service pillars (3 cards) + optional **train → hire → innovate → deploy** pipeline ✔
    *   Community / Who we serve ✔
    *   Contact form (Name, Email, Message) ✔

*   **Technical requirements**
    *   Semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`) ✔
    *   Responsive layout (Flexbox & Grid), mobile + desktop ✔
    *   Sticky navigation + smooth scrolling ✔
    *   Accessible contrast, Google Fonts (Montserrat, Inter) ✔
    *   Hover/focus states for buttons & nav links ✔
    *   **No CSS frameworks**; **vanilla** HTML/CSS/JS ✔

***

## 🎨 Brand & Design Rationale (Logo)

The IDR logo uses a three‑dimensional cube to symbolize structure, stability, and resilience—core concepts in digital and AI risk management. The orange color palette conveys energy, innovation, and forward‑thinking education, while the black wordmark anchors the brand with professionalism and authority. The geometric form reflects the analytical, systems‑driven nature of digital risk, and its clean, minimalist execution ensures excellent legibility across digital platforms. The icon‑only version scales well for favicon and small UI contexts, while the full lockup provides a strong institutional identity.

***

## 🔧 Implementation Notes

*   **Favicon:**  
    Implemented as an **inline PNG data‑URI** in `<head>`. This keeps the submission self‑contained without binary files. (Modern browsers support PNG favicons.)

*   **Inline PNG logo:**  
    Declared as a `<symbol>` in the document and referenced with `<use>` in the header/footer to avoid duplication and ensure pixel‑perfect rendering.

*   **Dark mode:**  
    Toggles the `:root.dark` class on `<html>` and persists the choice using `localStorage`. If no preference is stored, system preference (`prefers-color-scheme`) is used on first load.

*   **Animations:**  
    Fade‑ins and parallax are disabled automatically for users with **Reduced Motion** enabled (`prefers-reduced-motion: reduce`).

*   **Accessibility:**
    *   `aria-label`, `aria-controls`, and `aria-expanded` for the mobile menu button
    *   `aria-pressed` for the dark‑mode control
    *   `aria-labelledby` for sections
    *   Keyboard focus rings and skip link included

***

## 📱 Responsive Behavior

*   **Desktop (≥ 721px):**  
    Logo, brand text, nav links, and dark‑mode button sit on **one line**.
*   **Mobile (≤ 720px):**  
    The ☰ button toggles a **dropdown panel** containing the nav links and the dark‑mode button. The panel closes automatically after a selection.

***

## 🧪 Browser Support

*   Modern evergreen browsers: Chrome, Edge, Firefox, Safari ✔
*   If any very old browsers require PNG favicons, the data‑URI can be swapped for a `.png` link; otherwise no change is necessary.

***

## 🔍 Known Limitations / Future Enhancements

*   Contact form currently posts nowhere (static). Could be wired to Netlify Forms or a serverless function.
*   Service icons are emoji for simplicity; can be replaced with a consistent PNG icon set.
*   Additional pages (Programs, Hire Talent, etc.) can be added behind the CTAs as the institute grows.

***

## 📦 Deployment

*   Works as a static site on **Netlify** or **Vercel**.
*   No build step required; just deploy the three files.
*   Suggested site name: `idr-digital-risk`.

***

## 👤 Credits

*   **Design & Development:** Amaechi Ekaba (Fhinovax Multitech Solutions Ltd)
*   **Project:** Institute of Digital Risk (IDR) — Brand & Homepage

***

## 📄 License

This submission is provided for evaluation under the assignment brief.  
All rights reserved © 2026 Institute of Digital Risk (IDR).

***

### Submission Checklist

*   [x] `index.html` includes inline PNG logo and favicon data‑URI
*   [x] `styles.css` implements brand palette, layout, animations, and dark mode
*   [x] `script.js` implements mobile nav toggle, active link highlighting, fade‑ins, parallax, progress bar, back‑to‑top, and dark‑mode persistence
*   [x] No external assets required; project runs by opening `index.html` directly

