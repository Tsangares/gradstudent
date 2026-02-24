#!/usr/bin/env python3
"""Scrape Google Scholar profile stats and update index.html counter bar."""

import re
import json
import urllib.request
import urllib.parse
from pathlib import Path

SCHOLAR_ID = "9oizAocAAAAJ"
INDEX_PATH = Path(__file__).parent.parent / "index.html"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
                  "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
}


def scrape_google_scholar():
    """Fetch stats from Google Scholar profile page."""
    url = f"https://scholar.google.com/citations?user={SCHOLAR_ID}&hl=en"
    req = urllib.request.Request(url, headers=HEADERS)
    resp = urllib.request.urlopen(req, timeout=30)
    html = resp.read().decode("utf-8")

    stats = {}

    # Google Scholar shows citation stats in a table with id "gsc_rsb_st"
    # The table has rows: Citations, h-index, i10-index
    # Each row has "All" and "Since 20XX" columns
    cite_match = re.search(
        r'Citations.*?<td class="gsc_rsb_std">(\d+)</td>', html, re.DOTALL
    )
    if cite_match:
        stats["citations"] = int(cite_match.group(1))

    hindex_match = re.search(
        r'h-index.*?<td class="gsc_rsb_std">(\d+)</td>', html, re.DOTALL
    )
    if hindex_match:
        stats["hindex"] = int(hindex_match.group(1))

    # Count publications listed on the page
    pub_count = len(re.findall(r'class="gsc_a_at"', html))
    if pub_count > 0:
        stats["publications"] = pub_count

    return stats


def scrape_researchgate():
    """Fallback: fetch stats from ResearchGate."""
    url = "https://www.researchgate.net/profile/William-Wyatt-2"
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        resp = urllib.request.urlopen(req, timeout=30)
        html = resp.read().decode("utf-8")
    except Exception as e:
        print(f"ResearchGate fetch failed: {e}")
        return {}

    stats = {}
    text = re.sub(r"<[^>]+>", " ", html)

    read_match = re.search(r"([\d,]+)\s+Reads?", text, re.IGNORECASE)
    if read_match:
        stats["reads"] = int(read_match.group(1).replace(",", ""))

    return stats


def update_index(stats):
    """Replace counter-num values in index.html."""
    html = INDEX_PATH.read_text()

    if "publications" in stats:
        html = re.sub(
            r'(<span class="counter-num">)\d+(</span>\s*<span class="counter-label">Publications)',
            rf"\g<1>{stats['publications']}\g<2>",
            html,
        )

    if "reads" in stats:
        html = re.sub(
            r'(<span class="counter-num">)\d+(</span>\s*<span class="counter-label">Reads)',
            rf"\g<1>{stats['reads']}\g<2>",
            html,
        )

    if "citations" in stats:
        html = re.sub(
            r'(<span class="counter-num">)\d+(</span>\s*<span class="counter-label">Citations)',
            rf"\g<1>{stats['citations']}\g<2>",
            html,
        )

    INDEX_PATH.write_text(html)


if __name__ == "__main__":
    print("Fetching stats from Google Scholar...")
    stats = scrape_google_scholar()
    print(f"Google Scholar: {stats}")

    # Try ResearchGate for reads (Scholar doesn't track reads)
    print("Fetching reads from ResearchGate...")
    rg_stats = scrape_researchgate()
    print(f"ResearchGate: {rg_stats}")

    stats.update(rg_stats)

    if not stats:
        print("WARNING: No stats found. Keeping existing values.")
        exit(0)

    print(f"Final stats: {stats}")
    update_index(stats)
    print("Updated index.html")
