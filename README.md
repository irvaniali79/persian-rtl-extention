# Persian RTL Toggle

A browser extension that toggles web pages to right‑to‑left (RTL) layout, optimized for Persian language.  
Use the popup button or the default keyboard shortcut **`Alt+Shift+R`**.

---

## Installation

### Chromium‑based browsers (Chrome, Edge, Brave, Opera, Vivaldi, etc.)
The extension is not published on the stores yet. Load it manually as an unpacked extension:

1. Save the `PersianRTL` folder on your computer.
2. Open your browser and go to the extensions page:
   - **Chrome**: `chrome://extensions`
   - **Edge**: `edge://extensions`
   - **Brave**: `brave://extensions`
   - **Opera**: `opera://extensions`
3. Turn on **Developer mode** (toggle in the top‑right corner).
4. Click **Load unpacked** (or “Load extension”).
5. Select the `PersianRTL` folder and confirm.
6. The extension icon appears in the toolbar. Click it and press the button to toggle RTL.

### Firefox (temporary add‑on)
Firefox does not fully support Manifest V3. Use a temporary add‑on for testing:

1. Go to `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add‑on…**.
3. Select any file from the extension folder (e.g., `manifest.json`).
4. The extension will work until Firefox restarts. For permanent use, convert the extension to Manifest V2.

---

## Usage

- **Popup**: Click the extension icon. Press **فعال‌سازی راست‌چین** to apply RTL. Press again to remove it.
- **Keyboard shortcut**: Press `Alt+Shift+R` (Windows/Linux) or `⌥+Shift+R` (macOS) to toggle instantly.

---

## Changing the Keyboard Shortcut

### In Chrome, Edge, Brave, Opera (Chromium browsers)
1. Go to the shortcuts page:
   - Chrome: `chrome://extensions/shortcuts`
   - Edge: `edge://extensions/shortcuts`
   - Brave: `brave://extensions/shortcuts`
   - Opera: `opera://extensions/shortcuts`
2. Find **Persian RTL Toggle** in the list.
3. Click the pencil icon (✎) next to the current shortcut.
4. Press your desired key combination (e.g., `Ctrl+Shift+Space`).
5. The new shortcut is active immediately.

### In Firefox
- Visit `about:addons`.
- Click the gear icon ⚙️ and select **Manage Extension Shortcuts**.
- Locate **Persian RTL Toggle** and set a new shortcut.

> **Note**: If your chosen shortcut conflicts with the browser or system, it will be ignored. Try a unique combination.

---

## Files

- `manifest.json` – Extension configuration
- `popup.html` / `popup.js` – Toolbar popup interface
- `content.js` – Injected script that toggles page direction
- `background.js` – Handles the keyboard shortcut command
- `icon.png` – Extension icon (48x48 or larger)

---

## Notes

- RTL is applied only to the active tab. Refreshing the page removes the effect.
- The extension sets `dir="rtl"` and adds direction styles to the root elements.
- Some websites with strict CSS may not fully adapt. You can modify the injected styles in `content.js`.

---

Enjoy smoother Persian browsing!
