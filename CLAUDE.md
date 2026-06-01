# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**NextGen Leadership Forum** is a static website displaying members of a young leadership community. The site is a clean rebuild with:
- **Zero build process** - just HTML, CSS, and vanilla JavaScript
- **Data source**: Public Google Sheets (via Google Visualization API)
- **Client-side rendering** - all data loading and filtering in the browser
- **No server required** - serves as a static site

## Architecture

### Data Flow

1. **Google Sheet** (`1JNuoZrdlq2XY7dkQDZ_1yXvAbWurl6p85Z5gjJWDRNE`) contains member data with columns:
   - First Name, Last Name, LinkedIn, Location, Current Role, Key Focus Areas
2. **app.js** fetches via Google Visualization API (gviz endpoint) on page load
3. **Browser** parses and renders the member cards in real-time

The sheet is **viewable by anyone with the link** but editable only by the owner. Changes to the sheet appear on the website immediately (no caching).

### Core Files

- **index.html** — Page structure and semantic HTML. Keep the same DOM structure for app.js to work correctly.
- **app.js** — Loads members from Google Sheet, filters/searches, and renders cards. Key functions:
  - `loadMembers()` — Fetches from Google Visualization API and populates `allMembers`
  - `filterMembers()` — Runs on search input, updates `filteredMembers`, re-renders
  - `renderMembers()` — Converts member objects to HTML cards with initials, color assignment, and LinkedIn links
- **styles.css** — Styling (unchanged from original design). Responsive grid-based layout.
- **Image assets** — `nextgen-leadership.png` (hero) and `og-preview.jpg` (social preview)

### Key Design Decisions

1. **No member photos** — Uses color-coded initials instead (simpler, less storage)
2. **Google Sheets as CMS** — Edit once, appears everywhere instantly
3. **HTML IDs and classes** — Hard-coded in HTML, referenced in app.js (e.g., `#searchInput`, `.grid`, `#membersGrid`, `#loadingNote`). Changing these requires updating both files.
4. **Color assignment** — Based on name hash for consistency across page loads

## Development Commands

### Run Locally

No npm or build step. Serve static files:

```bash
# Python (built-in)
python3 -m http.server 8000

# Node (if installed)
npx http-server -p 8000

# Then visit http://localhost:8000
```

### Make Changes

1. **Add/update members** → Edit Google Sheet directly, changes appear immediately
2. **Change styles** → Edit `styles.css`
3. **Add features** → Edit `app.js` (e.g., add sorting, filtering by topic, etc.)
4. **Update HTML structure** → Edit `index.html` and update selectors in `app.js`

### Before Committing

- Test the site locally to confirm it loads and displays members
- Verify search/filter works
- Check mobile responsiveness (CSS already responsive)
- No linting or tests — this is a simple site

## Common Tasks

### Add a Filter or Feature

1. Define the feature in `app.js` (e.g., new `filter*()` function)
2. Add UI elements in `index.html` (buttons, dropdowns, etc.)
3. Wire up the UI to call your function (e.g., `oninput="myFilter()"`)
4. Test in the browser

Example: To add filtering by focus area, create a function that filters `allMembers` by matching the "Key Focus Areas" column, then render.

### Update the Design or Hero Image

- Replace `nextgen-leadership.png` with a new image (same filename)
- Adjust `styles.css` if layout needs tweaking (e.g., hero height, colors, fonts)
- Test on mobile

### Change the Google Sheet

1. The sheet ID and GID (sheet tab ID) are hardcoded in `app.js` at the top:
   ```javascript
   const SHEET_ID = '1JNuoZrdlq2XY7dkQDZ_1yXvAbWurl6p85Z5gjJWDRNE';
   const SHEET_GID = '700344847';
   ```
2. If you're using a different sheet, update these constants
3. Column order in the sheet must match what `app.js` expects:
   - Index 1: First Name
   - Index 2: Last Name
   - Index 3: LinkedIn
   - Index 4: Location
   - Index 5: Current Role
   - Index 6: Key Focus Areas

### Troubleshoot Data Not Loading

- Check browser console for fetch errors
- Verify the Google Sheet is shared (viewable by anyone with link)
- Check that the sheet tab GID matches `SHEET_GID` in app.js
- Test the gviz URL directly: `https://docs.google.com/spreadsheets/d/{SHEET_ID}/gviz/tq?tqx=out:json&gid={SHEET_GID}`

## Deployment

This is a static site and can be deployed to:
- **GitHub Pages** — Push to main, enable Pages in repo settings
- **Netlify** — Connect the GitHub repo, auto-deploys on push
- **Any static host** — Vercel, Firebase, S3, etc.

No environment variables or secrets needed.

## Tech Stack

- HTML5
- CSS3 (CSS variables, Grid, Flexbox)
- Vanilla JavaScript (async/await, fetch)
- Google Visualization API (for Sheet data)
- Google Sheets (data source)

No external dependencies or npm packages.

## Bilingual (English/Hebrew) Support

The site now supports both English and Hebrew with automatic language switching:

- **Default language**: English (when user first visits)
- **Language toggle**: Button in the topbar (says "עברית" when English is selected, "English" when Hebrew is selected)
- **Translation system**: `translations.js` contains all text in both languages
- **Text Direction**: Automatically switches between LTR (English) and RTL (Hebrew) via `dir` attribute on HTML element
- **Language Preference**: Saved to localStorage (`forumLanguage`)
- **Implementation**: Uses `data-i18n` attributes on HTML elements for automatic translation

### How Translation Works

1. User clicks language toggle → calls `setLanguage(lang)`
2. `setLanguage()` updates language in localStorage and calls `updatePageTranslations()`
3. `updatePageTranslations()` finds all elements with `data-i18n` attribute and updates text
4. Page re-renders members and other dynamic content with new language

### Adding New Translatable Text

1. Add key-value pair to `translations.en` and `translations.he` in `translations.js`
2. Add `data-i18n="keyname"` attribute to the HTML element
3. For placeholders, use `data-i18n-placeholder="keyname"`
4. Text will automatically translate when user switches language

## Notes for Future Changes

- **Real-time updates** — The site fetches on page load only. To refresh, user must reload the page. If live updates are needed, add polling or WebSockets.
- **Offline support** — Currently none. Add localStorage caching if needed.
- **Performance** — Currently very fast (small JS, CSS, single HTTP request). Avoid adding heavy libraries.
- **Member rendering** — When switching languages, `renderMembers()` is called automatically to re-render cards with translated text
