// Source of the diagrams under experience/*/assets. Needs: npm i @resvg/resvg-js@2.6.2, plus OpenSans-Regular.ttf and OpenSans-Bold.ttf beside this file.
// Run from the repo root: node tools/diagrams/make.js .
// Renders the brag-sheet diagrams to PNG. Usage: node make.js <outdir>
const { Resvg } = require('@resvg/resvg-js');
const fs = require('fs');
const path = require('path');
const out = process.argv[2] || 'out';

const W = 1600, H = 900;
const C = { bg: '#f7f3ea', ink: '#17140f', mute: '#6b6357', line: '#c9bfae', card: '#ffffff' };
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// word-wrap by approximate glyph width (Open Sans ≈ 0.55em)
function wrap(text, size, maxW) {
  const words = String(text).split(' '), lines = []; let cur = '';
  for (const w of words) {
    const t = cur ? cur + ' ' + w : w;
    if (t.length * size * 0.55 > maxW && cur) { lines.push(cur); cur = w; } else cur = t;
  }
  if (cur) lines.push(cur);
  return lines;
}
function textBlock(x, y, text, { size = 22, weight = 400, color = C.ink, maxW = 400, anchor = 'start', lh = 1.3 } = {}) {
  return wrap(text, size, maxW).map((l, i) =>
    `<text x="${x}" y="${y + i * size * lh}" font-size="${size}" font-weight="${weight}" fill="${color}" text-anchor="${anchor}">${esc(l)}</text>`).join('');
}
// a card: kicker (small caps label), title, body
function card(x, y, w, h, { kicker, title, body, accent, fill = C.card, dark = false }) {
  const ink = dark ? '#fff' : C.ink, mute = dark ? 'rgba(255,255,255,.82)' : C.mute;
  let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${fill}" stroke="${dark ? fill : C.line}" stroke-width="2"/>`;
  if (!dark) s += `<rect x="${x}" y="${y}" width="8" height="${h}" rx="4" fill="${accent}"/>`;
  let ty = y + 38;
  if (kicker) { s += `<text x="${x + 28}" y="${ty}" font-size="15" font-weight="700" letter-spacing="2" fill="${dark ? 'rgba(255,255,255,.75)' : accent}">${esc(kicker.toUpperCase())}</text>`; ty += 34; }
  if (title) { s += textBlock(x + 28, ty, title, { size: 25, weight: 700, color: ink, maxW: w - 50 }); ty += wrap(title, 25, w - 50).length * 32 + 6; }
  if (body) s += textBlock(x + 28, ty, body, { size: 19, color: mute, maxW: w - 50, lh: 1.35 });
  return s;
}
function arrow(x1, y1, x2, y2, color = C.mute, label) {
  const a = Math.atan2(y2 - y1, x2 - x1), L = 14;
  const p = (t) => `${x2 - L * Math.cos(a - t)},${y2 - L * Math.sin(a - t)}`;
  let s = `<line x1="${x1}" y1="${y1}" x2="${x2 - 6 * Math.cos(a)}" y2="${y2 - 6 * Math.sin(a)}" stroke="${color}" stroke-width="3"/>` +
    `<polygon points="${x2},${y2} ${p(0.45)} ${p(-0.45)}" fill="${color}"/>`;
  if (label) s += `<text x="${(x1 + x2) / 2}" y="${(y1 + y2) / 2 - 10}" font-size="16" fill="${C.mute}" text-anchor="middle">${esc(label)}</text>`;
  return s;
}
function stat(x, y, w, big, small, accent) {
  return `<text x="${x + w / 2}" y="${y}" font-size="46" font-weight="700" fill="${accent}" text-anchor="middle">${esc(big)}</text>` +
    textBlock(x + w / 2, y + 34, small, { size: 18, color: C.mute, maxW: w - 20, anchor: 'middle' });
}
function frame(title, sub, body, foot) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="Open Sans">
<rect width="${W}" height="${H}" fill="${C.bg}"/>
<text x="70" y="92" font-size="44" font-weight="700" fill="${C.ink}">${esc(title)}</text>
<text x="70" y="134" font-size="23" fill="${C.mute}">${esc(sub)}</text>
${body}
<line x1="70" y1="${H - 62}" x2="${W - 70}" y2="${H - 62}" stroke="${C.line}" stroke-width="1.5"/>
<text x="70" y="${H - 30}" font-size="17" fill="${C.mute}">${esc(foot)}</text>
<text x="${W - 70}" y="${H - 30}" font-size="17" font-weight="700" fill="${C.ink}" text-anchor="end">James M. Smith · j-m-s.dev</text>
</svg>`;
}

const D = {};
// n equal cards across the content width
const row = (n, gap) => { const w = (W - 140 - gap * (n - 1)) / n; return { w, xs: [...Array(n)].map((_, i) => 70 + i * (w + gap)) }; };

// ---- Magical: the two production agents ----
{
  const A = '#5b4bd6', B = '#0f8f6b';
  const y1 = 190, y2 = 470, h = 200; const { w, xs } = row(4, 64);
  let s = '';
  // review agent lane
  s += `<text x="70" y="${y1 - 14}" font-size="17" font-weight="700" letter-spacing="2" fill="${A}">AGENT 1 · REVIEW EVERY CHANGE</text>`;
  s += card(xs[0], y1, w, h, { kicker: 'Trigger', title: 'New workflow change', body: 'Any new work posted to a customer automation', accent: A });
  s += card(xs[1], y1, w, h, { kicker: 'Review agent', title: 'Checks for bugs & regressions', body: 'Runs on every change, on every automation', accent: A });
  s += card(xs[2], y1, w, h, { kicker: 'Output', title: 'Proposes a patch', body: 'When it catches a bug or regression', accent: A });
  s += card(xs[3], y1, w, h, { title: 'Engineers review, not implement', body: 'Moved the team from implementers to reviewers', fill: A, dark: true, kicker: 'Result' });
  // autonomous agent lane
  s += `<text x="70" y="${y2 - 14}" font-size="17" font-weight="700" letter-spacing="2" fill="${B}">AGENT 2 · FIX LIVE FAILURES AUTONOMOUSLY</text>`;
  s += card(xs[0], y2, w, h, { kicker: 'Input', title: 'Live workflow runs', body: 'The real work customers’ automations handle', accent: B });
  s += card(xs[1], y2, w, h, { kicker: 'Autonomous agent', title: 'Catches real-world failures', body: 'Scans live runs for issues', accent: B });
  s += card(xs[2], y2, w, h, { kicker: 'Action', title: 'Fixes them before customers notice', body: 'Fully autonomous, no ticket needed', accent: B });
  s += card(xs[3], y2, w, h, { title: '95% real-world accuracy', body: 'Across live customer workflows', fill: B, dark: true, kicker: 'Result' });
  for (const y of [y1, y2]) for (let i = 0; i < 3; i++) s += arrow(xs[i] + w + 6, y + h / 2, xs[i + 1] - 6, y + h / 2);
  s += `<rect x="70" y="${y2 + h + 34}" width="${W - 140}" height="52" rx="26" fill="#ece5d6"/>`;
  s += `<text x="${W / 2}" y="${y2 + h + 68}" font-size="21" font-weight="700" fill="${C.ink}" text-anchor="middle">Both agents run in production on every customer automation, every day</text>`;
  D['experience/magical/assets/magical-agents.png'] = frame('Two AI agents in production at Magical', 'AI/Product Engineer, Jul 2026 – present · Series A workflow-automation startup, San Francisco', s,
    'Simplified diagram; no internal details. Figures as reported by James.');
}

// ---- Magical: evals engine -> model switch ----
{
  const A = '#c2410c';
  const y = 210, h = 230; const { w, xs } = row(4, 64);
  let s = '';
  s += card(xs[0], y, w, h, { kicker: 'Rebuilt from scratch', title: 'Evals & benchmarking engine', body: 'Regression checks for every model change', accent: A });
  s += card(xs[1], y, w, h, { kicker: 'New model ships', title: 'Benchmarked right away', body: 'Checked for cost and speed savings against current models', accent: A });
  s += card(xs[2], y, w, h, { kicker: 'Gate', title: 'No regressions?', body: 'Only then does the switch go out', accent: A });
  s += card(xs[3], y, w, h, { kicker: 'Result', title: 'Cheaper, better models in production', body: 'Proposed and carried out by James', fill: A, dark: true });
  for (let i = 0; i < 3; i++) s += arrow(xs[i] + w + 6, y + h / 2, xs[i + 1] - 6, y + h / 2);
  // stats
  const sy = 560, sw = (W - 140) / 3;
  s += `<rect x="70" y="${sy - 70}" width="${W - 140}" height="210" rx="16" fill="#fff" stroke="${C.line}" stroke-width="2"/>`;
  s += stat(70, sy, sw, '~$450K / yr', 'estimated savings from the model switch', A);
  s += stat(70 + sw, sy, sw, '0', 'regressions from the switch', A);
  s += stat(70 + 2 * sw, sy, sw, 'Day one', 'new model releases can be evaluated the moment they land', A);
  s += `<text x="${W / 2}" y="${sy + 116}" font-size="19" fill="${C.mute}" text-anchor="middle">Also opens the door to fine-tuning, and to git-style branching &amp; versioning for workflows (built by James)</text>`;
  D['experience/magical/assets/magical-evals.png'] = frame('Evals that make model upgrades safe', 'Magical · rebuilt evals and benchmarking engine, and the model switch it enabled', s,
    'Simplified diagram; no internal details. Savings is James’s internal estimate.');
}

// ---- Consulting: quoting agent ----
{
  const A = '#2563eb';
  const y = 185, h = 200, gap = 40; const { w, xs } = row(5, gap);
  let s = '';
  s += card(xs[0], y, w, h, { kicker: 'Inbound', title: 'RFQ email', body: 'Customer asks for a quote', accent: A });
  s += card(xs[1], y, w, h, { kicker: 'N8N pipeline', title: 'Parse line items', body: 'Self-managed Linux server', accent: A });
  s += card(xs[2], y, w, h, { kicker: 'SQL agent', title: 'Claude via OpenRouter', body: 'Grounded in a confirmed schema', accent: A });
  s += card(xs[3], y, w, h, { kicker: 'Draft', title: 'Priced quote', body: 'One pricing unit (MBF) end to end', accent: A });
  s += card(xs[4], y, w, h, { kicker: 'Outlook', title: 'Reply in thread', body: 'Trader reviews and sends', accent: A, fill: '#eef3ff' });
  for (let i = 0; i < 4; i++) s += arrow(xs[i] + w + 4, y + h / 2, xs[i + 1] - 4, y + h / 2);
  // ERP under the SQL agent
  s += card(xs[2], y + h + 70, w, 130, { kicker: 'ERP (SQL Server)', title: 'Live pricing & stock', accent: '#64748b' });
  s += arrow(xs[2] + w / 2 - 30, y + h + 66, xs[2] + w / 2 - 30, y + h + 6);
  s += arrow(xs[2] + w / 2 + 30, y + h + 6, xs[2] + w / 2 + 30, y + h + 66);
  // dashboard
  s += card(xs[3], y + h + 70, w * 2 + gap, 130, { kicker: 'Operations dashboard', title: 'Margin vs floor · customer history · stock coverage · AI reasoning trail', accent: A });
  // stats
  const sy = 740, sw = (W - 140) / 3;
  s += stat(70, sy - 70, sw, '~10 hrs / mo', 'saved per trader', A);
  s += stat(70 + sw, sy - 70, sw, '$150K+', 'revenue moved through the agent', A);
  s += stat(70 + 2 * sw, sy - 70, sw, 'Up to 3×', 'price-floor errors corrected', A);
  D['experience/independent-ai-consulting/assets/quoting-agent.png'] = frame('Production AI quoting agent', 'AI Consultant, May – Jul 2026 · lumber manufacturer’s sales desk (client name withheld)', s,
    'Simplified diagram. Time and revenue figures as reported by James.');
}

// ---- BVR ST CO: COORDINATOR pipeline ----
{
  const A = '#b45309';
  const y = 200, h = 220, gap = 40; const { w, xs } = row(5, gap);
  let s = '';
  s += card(xs[0], y, w, h, { kicker: 'Input', title: 'Game film', body: 'Any level of play', accent: A });
  s += card(xs[1], y, w, h, { kicker: 'Clipping pipeline', title: 'Compress & cut plays', body: 'Custom video processing', accent: A });
  s += card(xs[2], y, w, h, { kicker: 'ML model', title: 'Play recognition', body: 'Trained on a custom football-play data type', accent: A });
  s += card(xs[3], y, w, h, { kicker: 'AI agents', title: 'Automated analysis', body: 'NVIDIA Nemotron for low-latency local reasoning', accent: A });
  s += card(xs[4], y, w, h, { kicker: 'Output', title: 'Roster-specific strengths & weaknesses', fill: A, dark: true });
  for (let i = 0; i < 4; i++) s += arrow(xs[i] + w + 4, y + h / 2, xs[i + 1] - 4, y + h / 2);
  // feedback loop
  const ly = y + h + 120;
  s += `<path d="M ${xs[4] + w / 2} ${y + h + 6} V ${ly} H ${xs[3] + w / 2} V ${y + h + 20}" fill="none" stroke="${A}" stroke-width="3" stroke-dasharray="10 8"/>`;
  s += `<polygon points="${xs[3] + w / 2},${y + h + 6} ${xs[3] + w / 2 - 9},${y + h + 22} ${xs[3] + w / 2 + 9},${y + h + 22}" fill="${A}"/>`;
  s += `<text x="${W - 70}" y="${ly + 38}" font-size="19" font-weight="700" fill="${A}" text-anchor="end">Feedback loop: LoRA fine-tuning on verified game outcomes</text>`;
  s += textBlock(70, ly + 120, 'COORDINATOR: an AI system that teaches itself football. James built the clipping pipeline, the play-recognition model and data type, the analysis agents, and LoRA learning from real game outcomes. NVIDIA Inception program startup.', { size: 21, color: C.mute, maxW: W - 140 });
  D['experience/bvr-st-co/assets/coordinator-pipeline.png'] = frame('COORDINATOR: AI that learns football from film', 'Software Engineer, BVR ST CO · Oct 2025 – Jun 2026 · getcoordinator.ai', s,
    'Simplified diagram of James’s components; company codebase is private.');
}

// ---- OSU AI Advisor: hub + A2A ----
{
  const A = '#d73f09';
  let s = '';
  const cx = 600;
  s += card(70, 260, 300, 190, { kicker: 'Users', title: 'Faculty & students', body: 'Sign in with Microsoft SSO', accent: A });
  s += card(cx - 170, 220, 340, 270, { kicker: 'OSU AI Hub', title: 'Agent registry', body: 'Register, discover and monitor agents; became OpenBeavs, the university’s live agent platform', accent: A });
  s += arrow(376, 355, cx - 176, 355);
  const ax = 930, aw = 330;
  const agents = [['A2A agent', 'Agent cards for discovery'], ['RAG knowledge agent', 'Indexes oregonstate.edu'], ['Custom agents', 'Built by faculty & students']];
  agents.forEach(([t, b], i) => {
    const yy = 200 + i * 112;
    s += card(ax, yy, aw, 96, { kicker: b, title: t, accent: '#64748b' });
    s += arrow(cx + 176, 355, ax - 6, yy + 48);
  });
  s += `<text x="${(cx + 170 + ax) / 2}" y="190" font-size="17" font-weight="700" fill="${A}" text-anchor="middle">A2A protocol (JSON-RPC)</text>`;
  s += card(1300, 200, 230, 320, { kicker: 'Also', title: 'Advisor work', body: 'Enterprise AI: Bedrock, Gemini, Copilot. Governance policy. Training on LLMs & agentic AI.', fill: A, dark: true });
  s += `<rect x="70" y="580" width="${W - 140}" height="170" rx="16" fill="#fff" stroke="${C.line}" stroke-width="2"/>`;
  const sw = (W - 140) / 3;
  s += stat(70, 650, sw, '35,000', 'students at the university', A);
  s += stat(70 + sw, 650, sw, '3', 'enterprise AI platforms advised on', A);
  s += stat(70 + 2 * sw, 650, sw, '57%', 'of OpenBeavs core commits (largest of 4-person team)', A);
  D['experience/osu-ai-advisor/assets/ai-hub-a2a.png'] = frame('Oregon State’s AI agent hub', 'AI Advisor, OSU College of Business · Aug 2025 – Jun 2026', s,
    'Simplified diagram. Commit share from GitHub; team project, not sole author.');
}

for (const [rel, svg] of Object.entries(D)) {
  const p = path.join(out, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  const png = new Resvg(svg, { font: { fontFiles: [__dirname + '/OpenSans-Regular.ttf', __dirname + '/OpenSans-Bold.ttf'], loadSystemFonts: false, defaultFontFamily: 'Open Sans' }, fitTo: { mode: 'width', value: 1600 } }).render().asPng();
  fs.writeFileSync(p, png);
  console.log(rel, png.length);
}
