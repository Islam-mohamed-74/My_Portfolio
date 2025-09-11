## Portfolio (Next.js App Router)

A personal portfolio built with Next.js (App Router) and React, featuring a sidebar profile, multi-section main content (About, Resume, Portfolio, Blog, Contact), custom filtering, and simple DOM-powered interactions.

### Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: React 19
- **Styling**: Custom CSS (`app/globals.css`) + Tailwind CSS (configured via `@tailwindcss/postcss` and `tailwindcss` v4)
- **Icons**: Ionicons via CDN

### Project Structure

```
app/
  components/
    About.jsx
    Blog.jsx
    Contact.jsx
    MainContent.jsx
    Navbar.jsx
    Portfolio.jsx
    Resume.jsx
    Sidebar.jsx
  globals.css
  layout.jsx
  page.jsx
public/
  images/... (avatars, logos, projects)
package.json
next.config.mjs
```

### Features

- **Sidebar** with avatar, contact info, and social links (`Sidebar.jsx`).
- **Top navigation + sections**: About, Resume, Portfolio, Blog, Contact (`MainContent.jsx`).
- **Modal for testimonials**: opens on item click, fills content dynamically.
- **Custom select and category filter** for portfolio items.
- **Client-side form button enable/disable** based on validity.
- **SPA-like page navigation** toggling section visibility.

### Getting Started

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

Visit `http://localhost:3000`.

3. Build & start

```bash
npm run build
npm start
```

### Scripts

- **dev**: `next dev --turbopack`
- **build**: `next build --turbopack`
- **start**: `next start`

### Key Files

- `app/layout.jsx`: Global HTML shell, fonts, favicon, Ionicons, and `globals.css`.
- `app/page.jsx`: Composes the layout using `Sidebar` and `MainContent`.
- `app/components/MainContent.jsx`: Handles navbar/sections, testimonials modal, filter/select, form validation, and navigation via a single `useEffect` attaching DOM listeners.
- `app/components/Sidebar.jsx`: Static profile/contacts/social UI.

### Component Behaviors (MainContent)

- **Sidebar toggle**: Button with `[data-sidebar-btn]` toggles `[data-sidebar]` active class.
- **Testimonials modal**: Clicking `[data-testimonials-item]` populates modal (`[data-modal-img]`, `[data-modal-title]`, `[data-modal-text]`) and toggles `[data-modal-container]`/`[data-overlay]`.
- **Custom select + filter**: `[data-select]` opens a list; clicking `[data-select-item]` updates `[data-selecct-value]` and filters `[data-filter-item]` by `data-category`. Filter buttons `[data-filter-btn]` mirror this behavior.
- **Form validation**: Inputs `[data-form-input]` enable/disable `[data-form-btn]` based on `[data-form]` validity.
- **Navigation**: Links `[data-nav-link]` show/hide `[data-page]` sections by matching `data-page` value and manage `active` classes.

### Styling

- Global styles in `app/globals.css`. Tailwind v4 is available via PostCSS plugins if you prefer utility classes. Keep class names and `active` toggling in sync when modifying UI states.

### Customization

- Update profile data, contacts, and social links in `Sidebar.jsx`.
- Adjust section content in `About.jsx`, `Resume.jsx`, `Portfolio.jsx`, `Blog.jsx`, `Contact.jsx`.
- Replace images under `public/images` and update paths as needed.
- Modify selectors or behaviors in `MainContent.jsx` if changing DOM structure (ensure matching `data-*` attributes).

### Accessibility & SEO

- Provide descriptive `alt` attributes for images.
- Ensure interactive elements are focusable and keyboard operable if extending interactions beyond click.
- Metadata is set in `app/layout.jsx` via the `metadata` export; customize title/description.

### Deployment

- Any Node-compatible host works. Vercel is recommended for Next.js.

```bash
npm run build
npm start
```

- Set `NEXT_TELEMETRY_DISABLED=1` if needed for CI.

### Notes

- The project currently manages interactions via direct DOM queries and event listeners inside `useEffect`. If you migrate to more idiomatic React state, mirror existing behavior (class toggles and selectors) to avoid regressions.

---

Maintained by: You. Feel free to adapt sections to match your personal brand and content.
