# 🔥 unlike-nuke

Mass unlike all your Instagram likes directly from the browser console — no install needed.

> Built because I realized I was liking way too much garbage. 1200+ likes nuked in under an hour.

## 🌍 Supported Languages

| Language | Status |
|----------|--------|
| 🇬🇧 English | ✅ |
| 🇫🇷 Français (France) | ✅ |
| 🇨🇦 Français (Canada) | ✅ v2.0 |

## ⚡ How to use

1. Log into Instagram on your browser
2. Go to [instagram.com/your_activity/interactions/likes/](https://www.instagram.com/your_activity/interactions/likes/)
3. Click **"Select"** / **"Sélectionner"** (top right) once
4. Press `F12` → go to **Console** tab
5. Paste the contents of `unlike-nuke.js` → press **Enter**
6. Watch it burn 🗑️

## 🛠️ How it works

1. Selects all visible liked posts (circle icons)
2. Clicks **"Unlike"** / **"Annuler la mention J'aime"**
3. Confirms the popup automatically
4. Scrolls down and waits for the page to reload
5. Repeats until there's nothing left
6. Logs progress in real-time in the console

## ⚙️ Configuration

Edit these constants at the top of the script:

```js
const DELAY = 800;         // ms between actions (lower = faster but riskier)
const RELOAD_WAIT = 10000; // ms to wait after scroll for Instagram to load new posts
```

## 💡 Tips

- **Don't** put your computer to sleep while the script runs
- **Don't** lower `DELAY` below `500` — Instagram may rate-limit you
- The script waits 10 seconds between each batch to let the page reload
- If it gets stuck, just re-run it — it picks up where it left off

## ⚠️ Disclaimer

- Use at your own risk
- This may violate Instagram's Terms of Service
- Instagram may rate-limit or restrict your account if you go too fast
- Not affiliated with Meta/Instagram

## Tested on

- Chrome / macOS (M3 Max) — March 2026
- Firefox / macOS — April 2026

## 📝 Changelog

### v2.0 — April 2026
- 🌍 Full French support (France & Canada)
- 🔍 Fallback selectors for all UI button variants
- 🐛 Fixed: "Bouton Unlike introuvable" on non-English Instagram
- 📝 Improved README with bilingual docs

### v1.0 — March 2026
- Initial release (English UI only)

## 👤 Author

**[@eauchs](https://github.com/eauchs)** · [LinkedIn](https://linkedin.com/in/theophile-lafargue)

## 📄 License

[MIT](LICENSE) — do whatever you want with it.
