import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

const read = (path) => readFileSync(new URL("../" + path, import.meta.url), "utf8");
const homepage = read("src/components/portfolio-v5/PortfolioV5.tsx");
const mobileNav = read("src/components/portfolio-v5/MobileNav.tsx");
const approach = read("src/components/portfolio-v5/ApproachSelector.tsx");
const casePage = read("src/app/work/[slug]/page.tsx");
const caseData = read("src/data/portfolio-v5.ts");
const profileData = read("src/data/portfolio.ts");
const root = read("src/app/page.tsx");
const css = read("src/app/portfolio-v5.css");
const metadata = read("src/app/layout.tsx");
const resume = read("src/app/cv/page.tsx");

assert.match(root, /PortfolioV5/, "Portfolio 5.0 should be the active homepage");
assert.match(root, /portfolio-v5\.css/, "Homepage should load the new CSS");
assert.match(profileData, /role:\s*"Software Engineer"/, "Primary professional title should be Software Engineer");
assert.match(metadata, /default: "Mohammed Masri \| Software Engineer"/, "Metadata title must match");
assert.match(resume, /\{profile\.role\}/, "Resume should use shared profile title");
assert.match(homepage, /Complex systems\./, "Editorial hero headline is required");
assert.match(homepage, /Thoughtfully engineered/, "Editorial hero tagline is required");
assert.equal((homepage.match(/src="\/assets\/images\/my-photo\.png"/g) || []).length, 1, "Use the original black-shirt photo exactly once");
const image = readFileSync(new URL("../public/assets/images/my-photo.png", import.meta.url));
assert.deepEqual([...image.subarray(0,8)], [137,80,78,71,13,10,26,10], "Portrait should be a real PNG");
assert.equal(image.readUInt32BE(16), 827);
assert.equal(image.readUInt32BE(20), 945);
assert.match(css, /#7C668B/, "Plum should be the accent color");
assert.doesNotMatch(homepage, /Cloud & APIs|peach-float-cloud|HeroIllustration/, "No cartoon or cloud badge");
assert.doesNotMatch(homepage, /Vidnik/i, "Vidnik should not be showcased");
assert.doesNotMatch(caseData, /Vidnik/i, "Vidnik should not appear in featured case studies");
assert.doesNotMatch(profileData, /Vidnik/i, "Shared project and experience copy should omit Vidnik");
for(const slug of ["sea-platform","strategy-hub","o-connect"]){
  assert.match(caseData, new RegExp('slug: "' + slug + '"'), "Expected case study: "+slug);
}
assert.equal((caseData.match(/slug: "/g)||[]).length,3,"Exactly three selected case studies are required");
assert.match(casePage, /generateStaticParams/, "Case studies must be statically discoverable");
assert.match(casePage, /generateMetadata/, "Case studies must expose SEO metadata");
assert.match(casePage, /notFound\(\)/, "Unknown case studies must 404");
assert.match(mobileNav, /aria-expanded=\{open\}/, "Mobile menu must expose expanded state");
assert.match(mobileNav, /Escape/, "Mobile menu must support Escape");
assert.match(approach, /aria-pressed=\{selected === index\}/, "Approach stages must expose selection state");
assert.match(approach, /aria-controls="v5-approach-detail"/, "Approach stage buttons must control live description");
assert.match(homepage, /v5-skip/, "Include keyboard skip navigation");
for(const id of ["work","expertise","experience","approach","contact"]){
  assert.match(homepage, new RegExp('id="' + id + '"'), "Missing homepage section: "+id);
}
console.log("Portfolio 5.0 smoke checks passed: original portrait, Software Engineer, three real projects, accessible interactions, case-study routes.");
