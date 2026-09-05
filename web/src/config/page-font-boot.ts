import {
  DEFAULT_PAGE_FONT_ID,
  pageFonts,
} from "@/config/page-fonts";

/**
 * Inline boot snippet: restore page font from localStorage before paint.
 * Kept in sync with `pageFonts` so ids/families never drift.
 */
export function buildPageFontBootSnippet(): string {
  const mapEntries = pageFonts
    .map((font) => `${JSON.stringify(font.id)}:${JSON.stringify(font.family)}`)
    .join(",");

  return [
    `var MAP={${mapEntries}};`,
    `var LEGACY={signal:'syne',atelier:'fraunces',ledger:'newsreader'};`,
    `var id=localStorage.getItem('pageFont')||localStorage.getItem('fontPack')||'${DEFAULT_PAGE_FONT_ID}';`,
    `if(LEGACY[id])id=LEGACY[id];`,
    `if(!MAP[id])id='${DEFAULT_PAGE_FONT_ID}';`,
    `var fam=MAP[id];`,
    `var stack='"'+fam+'", ui-sans-serif, system-ui, sans-serif';`,
    `document.documentElement.style.setProperty('--page-font',stack);`,
    `document.documentElement.dataset.pageFont=id;`,
    `var link=document.createElement('link');`,
    `link.id='page-font-stylesheet';`,
    `link.rel='stylesheet';`,
    `link.href='https://fonts.googleapis.com/css2?family='+fam.replace(/ /g,'+')+':wght@400;500;600;700&display=swap';`,
    `document.head.appendChild(link);`,
  ].join("");
}
