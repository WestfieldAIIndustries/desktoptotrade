#!/usr/bin/env python3
"""Build a self-contained preview.html (CSS/JS/images inlined) for visual checking."""
import base64
import pathlib
import re

root = pathlib.Path(__file__).resolve().parent.parent
html = (root / "index.html").read_text()
css = (root / "style.css").read_text()
js = (root / "app.js").read_text()


def data_uri(path: pathlib.Path) -> str:
    suffix = path.suffix.lower()
    mime = {"jpeg": "image/jpeg", "jpg": "image/jpeg", "png": "image/png"}[suffix.lstrip(".")]
    return f"data:{mime};base64," + base64.b64encode(path.read_bytes()).decode()


# Replace asset references with data URIs
assets = {
    "assets/favicon.png": data_uri(root / "assets/favicon.png"),
    "assets/logo-wide.jpeg": data_uri(root / "assets/logo-wide.jpeg"),
    "assets/logo.jpeg": data_uri(root / "assets/logo.jpeg"),
}
for ref, uri in assets.items():
    html = html.replace(ref, uri)

# Inline CSS and JS
html = html.replace('<link rel="stylesheet" href="style.css" />', "<style>\n" + css + "\n</style>")
html = html.replace('<script src="app.js"></script>', "<script>\n" + js + "\n</script>")

out = root / "preview.html"
out.write_text(html)
print(f"Wrote {out} ({out.stat().st_size // 1024} KB)")
