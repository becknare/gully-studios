# PageSpeed Insights Report — Gully Studios Portfolio

**URL analyzed:** https://becknare.github.io/gully-studios/
**Initial analysis:** 2026-06-08 21:24 CEST
**Tool:** Lighthouse 13.3.0 (HeadlessChromium 146)
**Source:** PageSpeed Insights, lab data only (no field/CrUX data — site traffic too low)

---

## 1. Scores at a glance

| Category        | Before (mobile / desktop) | After fixes | Notes |
|-----------------|:-------------------------:|:-----------:|-------|
| Performance     | **51** / **79**           | Re-test needed | Major image + CLS fixes applied. |
| Accessibility   | 100 / 100                 | 100 | No changes needed. |
| Best Practices  | 100 / 100                 | 100 | No changes needed. |
| SEO             | 91 / 91                   | ~100 | Meta description added. |

## 2. Core Web Vitals — before vs. what we fixed

| Metric | Before (mobile / desktop) | What we did |
|--------|:-------------------------:|-------------|
| FCP    | 0.8 s / 0.2 s (good) | Nothing — already fine. |
| LCP    | **11.7 s** / 0.6 s | Resized all images to 1500px max, converted everything to webp q80, preloaded LCP image, removed lazy-load from first thumbnail. Page weight dropped from ~18 MB to ~4 MB. |
| TBT    | 30 ms / 0 ms (good) | Nothing — already fine. |
| CLS    | **0.957** / **0.505** | Added `width`/`height` attributes to all thumbnails so the browser reserves space before images load. |
| SI     | 1.1 s / 0.5 s (good) | Nothing — already fine. |

## 3. What was done

### Fixed (P0)

1. **Image payload crushed.** All images resized to 1500px longest edge and converted
   to webp at quality 80. Total image folder: 67 MB → 23 MB. Individual images that
   were 1–5 MB are now 30–230 KB. Page payload should drop from ~18 MB to ~4 MB
   (videos account for the remainder).

2. **CLS — explicit dimensions on thumbnails.** Every project in `projects.js` now has
   `thumbnailWidth` and `thumbnailHeight`. The `renderMedia` function applies these as
   `width`/`height` attributes so the browser reserves the correct space before load.

3. **LCP image optimized.** The first thumbnail (`fifty00009.webp`) is preloaded via
   `<link rel="preload">` in `<head>` and is *not* lazy-loaded. All other thumbnails
   below the fold still use `loading="lazy"`.

### Fixed (P2)

4. **Meta description added.** Should bring SEO from 91 → 100.

### Not addressed

5. **Render-blocking resources** (P1, est. ~450 ms mobile). The scripts are already at
   the bottom of `<body>`, so the impact is minimal. Could inline critical CSS or defer
   scripts further, but diminishing returns for a static portfolio.

6. **Font-driven layout shift** (P1). The site uses system fonts (Helvetica Neue stack),
   not web fonts — so this is a non-issue.

7. **Cache lifetimes** — GitHub Pages forces `max-age=600` on all assets. Can't fix
   without moving to Cloudflare Pages or Netlify. Not urgent since assets are now small.

8. **Responsive `srcset`/`sizes`** — would let phones download even smaller variants.
   Nice-to-have but not urgent now that images are already under 200 KB each.

---

## 4. Verification

Re-run at `https://pagespeed.web.dev/` and check:

- Mobile LCP: was 11.7 s → target under 2.5 s
- CLS on both: was ~0.5–0.96 → target under 0.1
- Total payload: was ~18 MB → target under ~4 MB
- SEO: was 91 → target 100

---

## 5. Image workflow — run when adding new images

Drop images into the project in whatever format/size you have.
Then run these two commands from the project root before committing:

```bash
# 1. Resize any oversized images (1500px longest edge) and convert to webp
for f in $(find images -type f \( -name '*.webp' -o -name '*.jpg' -o -name '*.png' \)); do
  w=$(sips -g pixelWidth "$f" 2>/dev/null | awk '/pixelWidth/{print $2}')
  h=$(sips -g pixelHeight "$f" 2>/dev/null | awk '/pixelHeight/{print $2}')
  max=$(( w > h ? w : h ))
  if [ "$max" -gt 1500 ]; then
    echo "Resizing $f ($w x $h)"
    if [ "$w" -gt "$h" ]; then
      cwebp -resize 1500 0 -q 80 "$f" -o "${f%.*}.webp" 2>/dev/null
    else
      cwebp -resize 0 1500 -q 80 "$f" -o "${f%.*}.webp" 2>/dev/null
    fi
    [ "$f" != "${f%.*}.webp" ] && rm "$f"
  fi
done

# 2. Convert any remaining jpg/png to webp (already correct size)
for f in $(find images -type f \( -name '*.jpg' -o -name '*.png' \)); do
  echo "Converting $f"
  cwebp -q 80 "$f" -o "${f%.*}.webp" 2>/dev/null && rm "$f"
done
```

After running, update any new file references in `projects.js` to use `.webp`
and add `thumbnailWidth` / `thumbnailHeight` for new projects.

Requires: `brew install webp` (one-time).
