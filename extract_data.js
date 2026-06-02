import fs from 'fs';

const html = fs.readFileSync('C:/GAWEH/WEB PORTO/WebPorto/vanilla-source/index.html', 'utf8');

// Extract all experience titles
console.log("--- Experiences / Orgs ---");
const expMatches = [...html.matchAll(/<p class="exp-tab-title">(.*?)<\/p>\s*<p class="exp-tab-sub">(.*?)<\/p>/g)];
for (const match of expMatches) {
    console.log(match[1] + " @ " + match[2]);
}

// Extract all project titles
console.log("\n--- Projects ---");
const projMatches = [...html.matchAll(/<h3[^>]*>(.*?)<\/h3>\s*<p class="body-sm"[^>]*>(.*?)<\/p>/g)];
for (const match of projMatches) {
    console.log(match[1] + " - " + match[2]);
}
