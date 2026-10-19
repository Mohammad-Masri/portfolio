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
assert.equal((page.match(/src="\/assets\/images\/my-photo\.png"/g) || []).length, 1, "Portrait should appear only once");
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
assert.doesNotMatch(metadata, /import "\.\/animations\.css"/, "Avoid importing obsolete animations");

for (const id of ["top","work","expertise","experience","about","contact","sea-details"]) {
  assert.match(page, new RegExp('id="' + id + '"'), "Missing section anchor: " + id);
}

console.log("Portfolio smoke checks passed: plum theme, title consistency, accessible sections, no duplicate photo or cloud hero icon.");
