import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

const read = (path) => readFileSync(new URL("../" + path, import.meta.url), "utf8");
const page = read("src/components/portfolio/PeachPortfolio.tsx");
const styles = read("src/app/peach.css");
const data = read("src/data/portfolio.ts");
const metadata = read("src/app/layout.tsx");
const resume = read("src/app/cv/page.tsx");

assert.match(data, /role:\s*"Software Engineer"/, "Primary profile title should be Software Engineer");
assert.match(page, /SOFTWARE ENGINEER · DUBAI, UAE/, "Hero overline must use Software Engineer");
assert.match(page, /Software Engineer<\/small>/, "Site header must use Software Engineer");
assert.match(metadata, /default: "Mohammed Masri \| Software Engineer"/, "Metadata title must match");
assert.match(metadata, /title: "Mohammed Masri \| Software Engineer"/, "Social card titles must match");
assert.match(resume, /\{profile\.role\}/, "CV header must use shared profile title");
assert.equal((page.match(/src="\/assets\/images\/hero-headshot\.avif"/g) || []).length, 1, "Optimized hero portrait should appear once");
assert.doesNotMatch(page, /src="\/assets\/images\/my-photo\.png"/, "Outdated hero photo reference must be removed");
const hero = readFileSync(new URL("../public/assets/images/hero-headshot.avif", import.meta.url));
assert.ok(hero.length > 4000 && hero.length < 200000, "Optimized hero image should be non-empty and web-sized");
assert.equal(hero.toString("ascii", 4, 12), "ftypavif", "Hero image must be a genuine AVIF file");
assert.doesNotMatch(page, /peach-float-cloud|peach-float-icon-cloud|Cloud &amp; APIs/, "Cloud icon removed from hero");
assert.doesNotMatch(styles, /peach-float-cloud|peach-float-icon-cloud/, "Cloud CSS removed");
assert.match(styles, /#7C668B/i, "Plum should be the accent color");
assert.doesNotMatch(styles, /#(?:FF684B|FF704F|FF7856|FB7654|FF674B)/i, "No former peach accent values");
assert.doesNotMatch(page, /HeroIllustration/, "Cartoon hero must not return");
assert.doesNotMatch(page, /peach-about-photo/, "Duplicate portrait section must not return");
assert.match(page, /id="peach-projects-heading"/, "Projects must have an accessible heading");
assert.match(page, /hidden=\{openProject!==i\}/, "Collapsed project details must remain in the DOM and be hidden");
assert.match(page, /event\.key === "Escape"/, "Mobile menu needs keyboard dismissal");
assert.match(page, /className="peach-skip-link"/, "Keyboard users need a skip link");

assert.match(page, /View Resume <ExternalArrow\/>/, "Hero resume label must be View Resume");
assert.match(page, />Resume<\/a><\/div><\/footer>/, "Footer resume label must be Resume");
assert.doesNotMatch(page, /résumé|Résumé/i, "Use consistent English Resume capitalization");
assert.match(page, /className="peach-approach-path" role="group"/, "Numbered approach navigation must be accessible");
assert.match(page, /aria-label=\{\`Step \$\{index \+ 1\}: \$\{step\.title\}\`\}/, "Approach numbers need descriptive labels");
assert.match(page, /aria-controls="peach-approach-detail"/, "Approach step buttons should point to the changing detail");
assert.match(page, /aria-pressed=\{selectedApproach === index\}/, "Active approach number must be announced");
assert.doesNotMatch(page, /peach-approach-watermark/, "Large star decoration should be removed");
assert.doesNotMatch(styles, /peach-approach-watermark/, "Large star styling should be removed");
assert.match(styles, /\.peach-photo-frame\{[^}]*mask-image:none/, "New circular avatar must not use a bottom fade");
assert.match(styles, /\.peach-approach-path-node\{[^}]*background:#F8F6F9/, "Approach number backgrounds should conceal the dotted connector");
assert.doesNotMatch(metadata, /import "\.\/animations\.css"/, "Avoid importing obsolete animations");

for (const id of ["top","work","expertise","experience","about","contact","sea-details"]) {
  assert.match(page, new RegExp('id="' + id + '"'), "Missing section anchor: " + id);
}

console.log("Portfolio smoke checks passed: plum theme, title consistency, accessible sections, no duplicate photo or cloud hero icon.");
