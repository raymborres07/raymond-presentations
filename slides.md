---
theme: default
colorSchema: 'light'
layout: cover
background: '#FAF9F5'
class: text-left
transition: fade
css: unocss
fonts:
  sans: 'Inter'
  serif: 'Source Serif 4'
title: "Rebuilding a Research Process"
---

<style>
:root {
  --paper: #FAF9F5;
  --ink: #1A1A1A;
  --muted: #6B6B63;
  --line: #DCD8CE;
  --accent: #3B5169;
}
.slidev-layout {
  background: var(--paper) !important;
  color: var(--ink);
  font-family: 'Inter', sans-serif;
  overflow-y: auto !important;
}
.slidev-layout p, .slidev-layout li {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
.slidev-layout h1, .slidev-layout h2, .slidev-layout h3 {
  font-family: 'Source Serif 4', Georgia, serif;
  font-weight: 500;
}
.serif { font-family: 'Source Serif 4', Georgia, serif; }
.ink { color: var(--ink); }
.muted { color: var(--muted); }
.accent { color: var(--accent); }
.rule { height: 1px; background: var(--line); }
.eyebrow {
  font-family: 'Inter', sans-serif;
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 500;
}
.placeholder {
  border: 1px dashed var(--line);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.75rem;
}
.slidev-layout table {
  border-collapse: collapse;
  width: 100%;
}
.slidev-layout th, .slidev-layout td {
  border-bottom: 1px solid var(--line);
  padding: 9px 10px;
  text-align: left;
  vertical-align: top;
  font-size: 0.8rem;
  line-height: 1.5;
}
.slidev-layout th {
  font-family: 'Inter', sans-serif;
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 600;
  border-bottom: 1px solid var(--ink);
}
.footer-note {
  position: absolute;
  bottom: 1.4rem;
  right: 2.2rem;
  font-size: 0.62rem;
  color: var(--muted);
  letter-spacing: 0.02em;
  font-family: 'Inter', sans-serif;
}
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-thumb { background: var(--line); border-radius: 4px; }
</style>

<div class="w-full h-full flex flex-col justify-center px-20">

<p class="eyebrow mb-4">Research Skills P: AI &nbsp;·&nbsp; Final Presentation &nbsp;·&nbsp; Summer 2026</p>

<h1 class="serif text-4xl leading-tight max-w-3xl ink" style="font-weight:500">Rebuilding a Research Process</h1>
<p class="serif text-lg mt-4 max-w-2xl muted" style="font-style:italic">A methodological review, across two research projects</p>

<div class="rule w-24 mt-10 mb-6"></div>

<p class="text-sm muted">Raymond Tenorio Borres</p>
<p class="text-sm muted">Machine-Learning-Driven Wirebond Optimization for SiC Power Modules &middot; KINTO Elderly Monitoring Research</p>

</div>

<!--
Good morning. This talk is a review of how my research process changed over the course. It is not a talk about a tool — it is a talk about scoping, evidence, experimentation, and judgment. I'll walk through six habits the course taught, then show them applied in two unrelated research projects from this same semester: my thesis on SiC wirebond optimization, and a separate wearable-health-device project called KINTO. We have about thirty minutes, so I'll go through this in some depth.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-10">
<p class="eyebrow mb-2">Introduction</p>
<h1 class="serif text-[1.65rem] ink leading-snug max-w-3xl" style="font-weight:500">From results to process</h1>
<div class="rule w-14 mt-4"></div>
</div>

<div class="flex-1 grid grid-cols-2 gap-16 items-center">
  <div class="pr-8" style="border-right: 1px solid var(--line)">
    <p class="eyebrow mb-3 accent">Midterm</p>
    <p class="serif text-lg leading-relaxed ink mb-3">Engineering outputs.</p>
    <p class="text-sm muted leading-relaxed">The midterm reported the physical results of the wirebond loop inductance study — the parameters, the optimization setup, and the final numbers.</p>
  </div>
  <div class="pl-8">
    <p class="eyebrow mb-3 accent">Today</p>
    <p class="serif text-lg leading-relaxed ink mb-3">The process behind them.</p>
    <p class="text-sm muted leading-relaxed">This talk reviews the research habits that changed over the course, and shows those same habits at work in two different projects, not just one.</p>
  </div>
</div>

<div class="mt-10 pt-8" style="border-top:1px solid var(--line)">
  <p class="serif text-base ink leading-relaxed max-w-2xl">The through line is not a tool. It is a change in how the research itself was conducted.</p>
</div>

<p class="footer-note">Final Presentation · 2 / 20</p>

</div>

<!--
My midterm was a status report on the wirebond optimization. This talk is different: it asks what changed about how I arrived at those results, so that the process is repeatable on the next problem — and I'll show it was, on a second, unrelated project.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-10">
<p class="eyebrow mb-2">Retrospective</p>
<h1 class="serif text-[1.65rem] ink leading-snug max-w-3xl" style="font-weight:500">Starting point: research habits before this course</h1>
<div class="rule w-14 mt-4"></div>
</div>

<div class="flex-1 grid grid-cols-2 gap-x-16 gap-y-10 content-center">
  <div>
    <p class="text-xs muted mb-1">01</p>
    <p class="ink font-medium mb-1">Loosely scoped questions</p>
    <p class="text-sm muted leading-relaxed">Research questions were broad enough to admit almost any answer, which made it hard to tell relevant evidence from noise.</p>
  </div>
  <div>
    <p class="text-xs muted mb-1">02</p>
    <p class="ink font-medium mb-1">Literature organized late</p>
    <p class="text-sm muted leading-relaxed">Papers were read and summarized sequentially, with structure imposed only after most of the reading was already done.</p>
  </div>
  <div>
    <p class="text-xs muted mb-1">03</p>
    <p class="ink font-medium mb-1">No explicit evidence criteria</p>
    <p class="text-sm muted leading-relaxed">There was no fixed standard for what counted as sufficient support for a claim, physical or otherwise.</p>
  </div>
  <div>
    <p class="text-xs muted mb-1">04</p>
    <p class="ink font-medium mb-1">Outputs judged by fluency</p>
    <p class="text-sm muted leading-relaxed">Explanations, scripts, and search results — including from AI tools — were trusted in proportion to how convincing they sounded, not how well they were checked.</p>
  </div>
</div>

<p class="text-sm muted serif mt-6" style="font-style:italic">None of this was specific to working with AI. It described the whole research process.</p>

<p class="footer-note">Final Presentation · 3 / 20</p>

</div>

<!--
I want to be specific about the baseline. My habits were undisciplined across the board — not just when I happened to be using an AI tool. Scoping was loose, literature was organized late, and I trusted outputs because they sounded right, not because I had checked them.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-10">
<p class="eyebrow mb-2">Course Overview</p>
<h1 class="serif text-[1.65rem] ink leading-snug max-w-3xl" style="font-weight:500">What this course covered: a map of tools and habits</h1>
<div class="rule w-14 mt-4"></div>
</div>

<div class="flex-1 flex flex-col justify-center gap-8">

<p class="text-sm muted leading-relaxed max-w-2xl">Beyond any single tool, the course covered six categories of research practice. Each reappears in the case studies that follow.</p>

<div class="grid grid-cols-2 gap-x-16 gap-y-6">
<div class="flex gap-4"><p class="serif text-lg accent" style="width:1.5rem">1</p><div><p class="ink font-medium text-sm">Question scoping</p><p class="text-xs muted mt-0.5">Fixing a question's target and boundary before touching a tool</p></div></div>
<div class="flex gap-4"><p class="serif text-lg accent" style="width:1.5rem">2</p><div><p class="ink font-medium text-sm">Discovery and synthesis tools</p><p class="text-xs muted mt-0.5">Database search, citation mapping, active-learning screening</p></div></div>
<div class="flex gap-4"><p class="serif text-lg accent" style="width:1.5rem">3</p><div><p class="ink font-medium text-sm">Source-quality evaluation</p><p class="text-xs muted mt-0.5">Separating credible journals from predatory or unverifiable ones</p></div></div>
<div class="flex gap-4"><p class="serif text-lg accent" style="width:1.5rem">4</p><div><p class="ink font-medium text-sm">Staged experiment design</p><p class="text-xs muted mt-0.5">Decomposing a study into independently testable steps</p></div></div>
<div class="flex gap-4"><p class="serif text-lg accent" style="width:1.5rem">5</p><div><p class="ink font-medium text-sm">Verification habits</p><p class="text-xs muted mt-0.5">Treating every output, AI-generated or not, as a hypothesis</p></div></div>
<div class="flex gap-4"><p class="serif text-lg accent" style="width:1.5rem">6</p><div><p class="ink font-medium text-sm">Protocol formalization</p><p class="text-xs muted mt-0.5">Turning a reliable habit into a documented, reusable procedure</p></div></div>
</div>

</div>

<p class="footer-note">Final Presentation · 4 / 20</p>

</div>

<!--
Before going through each of these in detail, here is the map: six habits, not one tool. I'll walk through each, then show how all six show up identically in two very different research projects from this same period — my thesis, and a separate wearable-device project called KINTO.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-10">
<p class="eyebrow mb-2">Methodology I</p>
<h1 class="serif text-[1.65rem] ink leading-snug max-w-3xl" style="font-weight:500">Formulating the research question</h1>
<div class="rule w-14 mt-4"></div>
</div>

<div class="flex-1 flex flex-col justify-center gap-8 max-w-3xl">

<p class="text-sm muted leading-relaxed">The first and most consequential change was scoping discipline: fixing the question, the target metric, and the boundary of the study before any tool was used.</p>

<div class="pl-6" style="border-left: 2px solid var(--accent)">
  <p class="serif text-base ink leading-relaxed" style="font-style:italic">
   "How does wirebond interconnect geometry affect parasitic loop inductance in a 1.7 kV, 100 A SiC half-bridge power module, within the existing PyAEDT–ANSYS Q3D simulation stack?"
  </p>
</div>

<div class="grid grid-cols-3 gap-8">
  <div>
    <p class="eyebrow mb-1">Target metric</p>
    <p class="text-sm ink">Loop inductance (nH)</p>
  </div>
  <div>
    <p class="eyebrow mb-1">Domain boundary</p>
    <p class="text-sm ink">SiC half-bridge, iTreePack geometry</p>
  </div>
  <div>
    <p class="eyebrow mb-1">Fixed constraint</p>
    <p class="text-sm ink">Existing simulation and solver stack</p>
  </div>
</div>

</div>

<p class="footer-note">Final Presentation · 5 / 20</p>

</div>

<!--
Before, my research questions were broad: "how do I optimize power modules." That admits almost any answer. This course taught me to fix the metric, the domain, and the constraints first, so every subsequent step has something concrete to be measured against.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-10">
<p class="eyebrow mb-2">Methodology II</p>
<h1 class="serif text-[1.65rem] ink leading-snug max-w-3xl" style="font-weight:500">Tools for literature discovery and synthesis</h1>
<div class="rule w-14 mt-4"></div>
</div>

<div class="flex-1 grid grid-cols-[1.3fr_1fr] gap-14 items-start">

<div>
<p class="text-sm muted leading-relaxed mb-5">Literature review moved from summarizing papers one at a time to building a synthesis matrix — a table where each source is encoded against the same variables, so patterns across the field become visible rather than anecdotal.</p>

<table>
<thead><tr><th>Source</th><th>Parameter studied</th><th>Reported effect</th></tr></thead>
<tbody>
<tr><td class="ink">Liu et al.</td><td class="muted">Wirebond arc height</td><td class="muted">Dominant driver of loop inductance</td></tr>
<tr><td class="ink">Chen &amp; Park</td><td class="muted">Ribbon width</td><td class="muted">Secondary, non-linear effect</td></tr>
<tr><td class="ink">Kumar et al.</td><td class="muted">Substrate spacing</td><td class="muted">Minor, context-dependent</td></tr>
</tbody>
</table>
</div>

<div class="flex flex-col gap-6">
<div>
<p class="ink font-medium mb-1 text-sm">Search and discovery tools</p>
<p class="text-sm muted leading-relaxed">Database search (IEEE Xplore, Scopus), citation mapping (ResearchRabbit), and reference management (Zotero) replaced ad-hoc web search as the entry point for evidence.</p>
</div>
<div>
<p class="ink font-medium mb-1 text-sm">Screening by relevance</p>
<p class="text-sm muted leading-relaxed">Active-learning screening (ASReview) ranked search results by relevance, cutting down time spent reading low-relevance papers before synthesis began.</p>
</div>
</div>

</div>

<p class="footer-note">Final Presentation · 6 / 20</p>

</div>

<!--
My midterm-era literature review was book-report style — paper by paper, in reading order. This course introduced a set of tools for discovery and screening, and taught me to build a synthesis matrix instead: fixed variables across sources, so I could see which parameters the field actually agreed and disagreed on.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-10">
<p class="eyebrow mb-2">Methodology III</p>
<h1 class="serif text-[1.65rem] ink leading-snug max-w-3xl" style="font-weight:500">Evaluating source quality: separating strong evidence from weak</h1>
<div class="rule w-14 mt-4"></div>
</div>

<div class="flex-1 flex flex-col justify-center gap-8">

<p class="text-sm muted leading-relaxed max-w-2xl">Finding papers is not the same as trusting them. A recurring skill from this course was screening a source's credibility before it was allowed into the synthesis matrix — not after.</p>

<div class="grid grid-cols-2 gap-16">
  <div class="pr-8" style="border-right:1px solid var(--line)">
    <p class="eyebrow mb-3">Signals of a credible source</p>
    <div class="flex flex-col gap-2 text-sm ink">
      <p>Indexed in a recognized database (Scopus, Web of Science, IEEE Xplore)</p>
      <p>Verifiable peer review and a named, credentialed editorial board</p>
      <p>Methodology and data disclosed in enough detail to reproduce</p>
      <p>Citation history consistent with the journal's claimed standing</p>
    </div>
  </div>
  <div class="pl-8">
    <p class="eyebrow mb-3">Warning signs</p>
    <div class="flex flex-col gap-2 text-sm ink">
      <p>No verifiable review process, or unusually fast acceptance</p>
      <p>Not indexed anywhere reputable; unsolicited invitations to publish</p>
      <p>Vague scope, or an editorial board that cannot be verified</p>
      <p>Publication fees with little transparency about review</p>
    </div>
  </div>
</div>

<p class="text-sm muted leading-relaxed max-w-2xl pt-4" style="border-top:1px solid var(--line)">Checked in practice against a journal's DOAJ listing status and the Think. Check. Submit. checklist before a source entered the review.</p>

</div>

<p class="footer-note">Final Presentation · 7 / 20</p>

</div>

<!--
This is a skill I did not have before the course: a fixed checklist for whether a journal or paper is worth citing at all, independent of how well-written or convincing its abstract sounds. It runs before synthesis, not after.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-10">
<p class="eyebrow mb-2">Methodology IV</p>
<h1 class="serif text-[1.65rem] ink leading-snug max-w-3xl" style="font-weight:500">Designing structured experiments</h1>
<div class="rule w-14 mt-4"></div>
</div>

<div class="flex-1 flex flex-col justify-center gap-8">

<p class="text-sm muted leading-relaxed max-w-2xl">Experimentation shifted from single, large attempts to a documented sequence of independent stages, each with parameter bounds fixed before any run.</p>

<div class="grid grid-cols-4 gap-4">
  <div class="pt-4" style="border-top: 2px solid var(--ink)">
    <p class="text-xs muted mb-1">Stage 1</p>
    <p class="ink text-sm font-medium">Geometry setup</p>
    <p class="text-xs muted mt-1 leading-relaxed">Wirebond and ribbon layout in PyAEDT</p>
  </div>
  <div class="pt-4" style="border-top: 2px solid var(--ink)">
    <p class="text-xs muted mb-1">Stage 2</p>
    <p class="ink text-sm font-medium">Boundary configuration</p>
    <p class="text-xs muted mt-1 leading-relaxed">Materials, excitation, solver bounds</p>
  </div>
  <div class="pt-4" style="border-top: 2px solid var(--ink)">
    <p class="text-xs muted mb-1">Stage 3</p>
    <p class="ink text-sm font-medium">Mesh and solve</p>
    <p class="text-xs muted mt-1 leading-relaxed">ANSYS Q3D adaptive meshing</p>
  </div>
  <div class="pt-4" style="border-top: 2px solid var(--accent)">
    <p class="text-xs muted mb-1">Stage 4</p>
    <p class="ink text-sm font-medium">Data extraction</p>
    <p class="text-xs muted mt-1 leading-relaxed">Loop inductance matrix, logged per run</p>
  </div>
</div>

<div class="flex items-center gap-6">
  <div class="placeholder flex-shrink-0" style="width:220px; aspect-ratio:16/9;">
    <p class="eyebrow">Figure placeholder</p>
    <p class="text-xs muted text-center">Process diagram or script screenshot</p>
  </div>
  <p class="text-sm muted leading-relaxed">Each stage was written, tested, and verified on its own, rather than as one script expected to work end to end on the first attempt.</p>
</div>

</div>

<p class="footer-note">Final Presentation · 8 / 20</p>

</div>

<!--
My earlier scripting attempts tried to do everything in one pass — geometry, meshing, and solving in a single script — and failed for exactly that reason. Decomposing the pipeline into four independently testable stages was a direct application of the same scoping discipline from the literature review.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-10">
<p class="eyebrow mb-2">Methodology V</p>
<h1 class="serif text-[1.65rem] ink leading-snug max-w-3xl" style="font-weight:500">A habit of verification</h1>
<div class="rule w-14 mt-4"></div>
</div>

<div class="flex-1 flex flex-col justify-center gap-8 max-w-2xl">

<p class="text-sm muted leading-relaxed">Every output is now treated as a hypothesis rather than a fact — regardless of whether it came from a paper, a simulation, or an AI-generated script.</p>

<div class="flex flex-col gap-5">
<div class="flex gap-5 items-baseline">
<p class="text-xs muted" style="width:1.5rem">1</p>
<p class="text-sm ink"><span class="font-medium">Physical consistency</span> — does the result violate a known law, such as conservation of energy?</p>
</div>
<div class="flex gap-5 items-baseline">
<p class="text-xs muted" style="width:1.5rem">2</p>
<p class="text-sm ink"><span class="font-medium">Documented behavior</span> — does it match the tool or API's own documentation, not just plausible-sounding usage?</p>
</div>
<div class="flex gap-5 items-baseline">
<p class="text-xs muted" style="width:1.5rem">3</p>
<p class="text-sm ink"><span class="font-medium">Reproducibility</span> — does it hold up across repeated, independent runs?</p>
</div>
</div>

</div>

<p class="footer-note">Final Presentation · 9 / 20</p>

</div>

<!--
This is the habit I'd call the biggest mindset shift. I stopped asking "does this sound right" and started asking these three questions, every time, for every kind of output — not only AI output.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-10">
<p class="eyebrow mb-2">Methodology VI</p>
<h1 class="serif text-[1.65rem] ink leading-snug max-w-3xl" style="font-weight:500">Formalizing habits into protocols</h1>
<div class="rule w-14 mt-4"></div>
</div>

<div class="flex-1 grid grid-cols-[1fr_1.1fr] gap-14 items-start">

<div class="flex flex-col gap-4">
<p class="text-sm muted leading-relaxed">A habit that proved reliable was worth writing down once and reusing, rather than reinvented for every new task — the same reasoning behind any lab protocol.</p>
<p class="text-sm muted leading-relaxed">In one case this took the form of a documented prompt template for a recurring literature-extraction step. The principle mattered more than the tool — this is one of several protocols developed over the course, and the only one that involved AI directly.</p>
</div>

<div class="p-6" style="border: 1px solid var(--line)">
<p class="eyebrow mb-4">Example protocol</p>
<div class="flex flex-col gap-3">
<div class="flex gap-4"><p class="text-sm muted" style="width:5rem; flex-shrink:0">Input</p><p class="text-sm ink">A verified source PDF and a fixed extraction schema</p></div>
<div class="flex gap-4"><p class="text-sm muted" style="width:5rem; flex-shrink:0">Steps</p><p class="text-sm ink">Extract parameter, method, and reported result into the schema</p></div>
<div class="flex gap-4"><p class="text-sm muted" style="width:5rem; flex-shrink:0">Check</p><p class="text-sm ink">Cross-reference extracted values against the source text</p></div>
<div class="flex gap-4"><p class="text-sm muted" style="width:5rem; flex-shrink:0">Output</p><p class="text-sm ink">One row added to the synthesis matrix</p></div>
</div>
</div>

</div>

<p class="footer-note">Final Presentation · 10 / 20</p>

</div>

<!--
This is the one slide where AI is the specific subject, and it is deliberately narrow. Writing a habit down as a reusable protocol is the point; a structured prompt template is simply one example of that, alongside the other non-AI protocols already shown.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-10">
<p class="eyebrow mb-2">Case Studies</p>
<h1 class="serif text-[1.65rem] ink leading-snug max-w-3xl" style="font-weight:500">Two projects, one process</h1>
<div class="rule w-14 mt-4"></div>
</div>

<div class="flex-1 flex flex-col justify-center gap-10">

<p class="text-sm muted leading-relaxed max-w-2xl">The same semester also involved a second research effort, in a different domain: KINTO, a wearable health-monitoring device for elderly patients. If the six habits just described are genuinely a change in how I do research — not a technique specific to simulation work — they should show up here too.</p>

<div class="grid grid-cols-2 gap-16">
<div class="pr-8" style="border-right:1px solid var(--line)">
<p class="eyebrow mb-2 accent">Thesis</p>
<p class="ink font-medium text-sm mb-1">Quantitative, simulation-driven</p>
<p class="text-sm muted leading-relaxed">SiC power electronics. Evidence is a field solver. Verification is physical law and documentation.</p>
</div>
<div class="pl-8">
<p class="eyebrow mb-2 accent">KINTO</p>
<p class="ink font-medium text-sm mb-1">Qualitative, human-centered</p>
<p class="text-sm muted leading-relaxed">Elderly compliance and wearable UX. Evidence is a physical prototype in someone's hands. Verification is a clinical baseline.</p>
</div>
</div>

</div>

<p class="footer-note">Final Presentation · 11 / 20</p>

</div>

<!--
I want to be honest about why I'm including a second project: it's the strongest test of the claim that this course changed my research process, not just my thesis. Wirebond optimization and elderly-compliance research have almost nothing in common except the researcher.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-10">
<p class="eyebrow mb-2">Case Study A · Thesis I</p>
<h1 class="serif text-[1.65rem] ink leading-snug max-w-3xl" style="font-weight:500">The engineering problem</h1>
<div class="rule w-14 mt-4"></div>
</div>

<div class="flex-1 grid grid-cols-[1.3fr_1fr] gap-14 items-center">

<div class="flex flex-col gap-8">
<p class="text-sm muted leading-relaxed">The case study is a 1.7 kV, 100 A SiC half-bridge power module (iTreePack geometry). High parasitic loop inductance in the wirebond interconnect causes switching overvoltage spikes and increased losses.</p>

<div class="flex items-center gap-3 flex-wrap">
<div class="px-3 py-2 text-xs ink" style="border:1px solid var(--line)">Python</div>
<p class="muted text-xs">&rarr;</p>
<div class="px-3 py-2 text-xs ink" style="border:1px solid var(--line)">PyAEDT automation</div>
<p class="muted text-xs">&rarr;</p>
<div class="px-3 py-2 text-xs ink" style="border:1px solid var(--line)">ANSYS Q3D solver</div>
<p class="muted text-xs">&rarr;</p>
<div class="px-3 py-2 text-xs ink" style="border:1px solid var(--line)">Neural network surrogate</div>
<p class="muted text-xs">&rarr;</p>
<div class="px-3 py-2 text-xs accent" style="border:1px solid var(--accent)">Genetic algorithm optimization</div>
</div>
</div>

<div class="flex flex-col gap-2">
  <div class="placeholder w-full" style="aspect-ratio:4/3;">
    <p class="eyebrow">Figure placeholder</p>
  </div>
  <p class="text-xs muted text-center">Photo or CAD render of the SiC half-bridge module and wirebond geometry</p>
</div>

</div>

<p class="footer-note">Final Presentation · 12 / 20</p>

</div>

<!--
This is the physical problem underneath everything I've described: minimizing parasitic loop inductance in a SiC half-bridge module by optimizing wirebond geometry, using an automated pipeline from Python scripting through to genetic-algorithm optimization.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-10">
<p class="eyebrow mb-2">Case Study A · Thesis II</p>
<h1 class="serif text-[1.65rem] ink leading-snug max-w-3xl" style="font-weight:500">Applying the revised process</h1>
<div class="rule w-14 mt-4"></div>
</div>

<div class="flex-1 flex flex-col justify-center">

<table>
<thead><tr><th>Research dimension</th><th>Before</th><th>After</th></tr></thead>
<tbody>
<tr><td class="ink font-medium">Question scoping</td><td class="muted">General optimization goal, no fixed boundary</td><td class="accent">Fixed target metric and simulation scope, defined first</td></tr>
<tr><td class="ink font-medium">Script design</td><td class="muted">One large script covering geometry through solve</td><td class="accent">Four independent, testable modules</td></tr>
<tr><td class="ink font-medium">Parameter bounds</td><td class="muted">Set informally, adjusted mid-run</td><td class="accent">Fixed in advance, documented per stage</td></tr>
<tr><td class="ink font-medium">Output checking</td><td class="muted">Accepted if the script ran without error</td><td class="accent">Checked against Q3D documentation and known field behavior</td></tr>
<tr><td class="ink font-medium">Debugging</td><td class="muted">Repeated ad-hoc re-prompting and manual search</td><td class="accent">Stack traces and bounds fed back together, systematically</td></tr>
</tbody>
</table>

</div>

<p class="footer-note">Final Presentation · 13 / 20</p>

</div>

<!--
This table is the process changes from the last several slides, applied specifically to the wirebond study. Every row is a concrete change in how I worked, not an abstract principle.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-10">
<p class="eyebrow mb-2">Case Study A · Thesis III</p>
<h1 class="serif text-[1.65rem] ink leading-snug max-w-3xl" style="font-weight:500">Results</h1>
<div class="rule w-14 mt-4"></div>
</div>

<div class="flex-1 flex flex-col justify-center gap-6">

<div class="grid grid-cols-3 gap-10">
<div>
<p class="serif text-3xl ink" style="font-weight:500">139</p>
<p class="eyebrow mt-2">Simulation runs</p>
</div>
<div>
<p class="serif text-3xl ink" style="font-weight:500">8.194 &rarr; 6.651 nH</p>
<p class="eyebrow mt-2">Baseline to optimized</p>
</div>
<div>
<p class="serif text-3xl accent" style="font-weight:500">&minus;18.8%</p>
<p class="eyebrow mt-2">Loop inductance reduction</p>
</div>
</div>

<div class="flex flex-col gap-2 items-center">
  <div class="placeholder w-full max-w-xl" style="aspect-ratio:21/9;">
    <p class="eyebrow">Figure placeholder</p>
  </div>
  <p class="text-xs muted text-center">Bar chart or optimization convergence plot — baseline vs. optimized loop inductance across 139 runs</p>
</div>

<div class="pt-4" style="border-top:1px solid var(--line)">
<p class="text-sm muted leading-relaxed max-w-2xl">Arc height was identified as the dominant factor in parasitic inductance, with ribbon width a secondary effect. Loop resistance was reduced alongside inductance.</p>
</div>

</div>

<p class="footer-note">Final Presentation · 14 / 20</p>

</div>

<!--
Across 139 simulation runs, the optimized geometry reduced loop inductance from 8.194 to 6.651 nanohenries, an 18.8 percent reduction, with arc height confirmed as the dominant parameter — consistent with what the literature synthesis matrix had already suggested.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-10">
<p class="eyebrow mb-2">Case Study B · KINTO I</p>
<h1 class="serif text-[1.65rem] ink leading-snug max-w-3xl" style="font-weight:500">Reframing the research question</h1>
<div class="rule w-14 mt-4"></div>
</div>

<div class="flex-1 grid grid-cols-[1.3fr_1fr] gap-14 items-center">

<div class="flex flex-col gap-6">
<p class="text-sm muted leading-relaxed">KINTO addresses remote health monitoring for elderly patients. The first version of the question was an engineering one: build a wrist sensor that reliably reads vital signs. That question was reframed after evidence suggested it was the wrong one.</p>

<div class="pl-6" style="border-left: 2px solid var(--accent)">
<p class="serif text-base ink leading-relaxed" style="font-style:italic">"Why do elderly patients abandon monitoring devices, and what would it take for one to actually stay on their wrist?"</p>
</div>

<p class="text-sm muted leading-relaxed">Existing evidence pointed away from a sensor problem: 63.8% of non-compliance was attributed to stigma and denial, not device failure. The resulting design — a closed-loop ECG requiring the wearer to touch the device with their other hand — was built to mirror the familiar, comforting gesture of holding an amulet.</p>
</div>

<div class="flex flex-col gap-2">
<div class="placeholder w-full" style="aspect-ratio:4/3;">
<p class="eyebrow">Figure placeholder</p>
</div>
<p class="text-xs muted text-center">Photo of the wrist-worn prototype and its closed-loop touch gesture</p>
</div>

</div>

<p class="footer-note">Final Presentation · 15 / 20</p>

</div>

<!--
This is the same scoping habit from the thesis, applied before any hardware existed: the initial engineering framing wasn't wrong exactly, it was premature. Evidence about why patients disengage came first, and it changed what we built.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-10">
<p class="eyebrow mb-2">Case Study B · KINTO II</p>
<h1 class="serif text-[1.65rem] ink leading-snug max-w-3xl" style="font-weight:500">A staged, evidence-gated study design</h1>
<div class="rule w-14 mt-4"></div>
</div>

<div class="flex-1 flex flex-col justify-center gap-8">

<p class="text-sm muted leading-relaxed max-w-2xl">Hardware development was deliberately decoupled from user testing, and structured into three phases, each gating the next.</p>

<div class="grid grid-cols-3 gap-6">
<div class="pt-4" style="border-top: 2px solid var(--ink)">
<p class="text-xs muted mb-1">Phase 1</p>
<p class="ink text-sm font-medium">Physical comfort</p>
<p class="text-xs muted mt-1 leading-relaxed">Non-functional, weighted 3D-printed dummies. Tests form factor, clasp fit for arthritic hands, and whether patients remember to put it back on. Zero electronics, zero data-privacy risk.</p>
</div>
<div class="pt-4" style="border-top: 2px solid var(--ink)">
<p class="text-xs muted mb-1">Phase 2</p>
<p class="ink text-sm font-medium">Digital interface</p>
<p class="text-xs muted mt-1 leading-relaxed">Tablet-based testing of the family-facing health dashboard, checked for whether it reduces anxiety rather than causing it.</p>
</div>
<div class="pt-4" style="border-top: 2px solid var(--accent)">
<p class="text-xs muted mb-1">Phase 3</p>
<p class="ink text-sm font-medium">Functional validation</p>
<p class="text-xs muted mt-1 leading-relaxed">Working sensor pod validated against clinical Holter-monitor baselines before any medical claim is made.</p>
</div>
</div>

<p class="text-sm muted leading-relaxed max-w-2xl">No phase proceeds until the prior one produces evidence, not assumption — the same decomposition and verification logic as the simulation pipeline, applied to a human-subjects study.</p>

</div>

<p class="footer-note">Final Presentation · 16 / 20</p>

</div>

<!--
This maps directly onto the four-stage simulation pipeline from earlier — independent, testable stages, verified before moving on. Here the "solver" is a small group of elderly patients wearing a plastic dummy for a week.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-10">
<p class="eyebrow mb-2">Case Study B · KINTO III</p>
<h1 class="serif text-[1.65rem] ink leading-snug max-w-3xl" style="font-weight:500">What research discipline changed in the study design</h1>
<div class="rule w-14 mt-4"></div>
</div>

<div class="flex-1 flex flex-col justify-center gap-8">

<table>
<thead><tr><th>Research dimension</th><th>Before</th><th>After</th></tr></thead>
<tbody>
<tr><td class="ink font-medium">Problem framing</td><td class="muted">Build a more reliable sensor</td><td class="accent">Understand why patients disengage, before building anything</td></tr>
<tr><td class="ink font-medium">Evidence source</td><td class="muted">Assumed comfort and adoption</td><td class="accent">Physical prototypes used as evidence-gathering instruments</td></tr>
<tr><td class="ink font-medium">Risk scoping</td><td class="muted">Electronics tested early, informally</td><td class="accent">Phase 1 has zero electronics, by design</td></tr>
<tr><td class="ink font-medium">Claims</td><td class="muted">Made from a spec sheet</td><td class="accent">Deferred until validated against a clinical baseline</td></tr>
</tbody>
</table>

<div class="flex flex-col gap-2 items-center">
<div class="placeholder w-full max-w-xl" style="aspect-ratio:21/9;">
<p class="eyebrow">Figure placeholder</p>
</div>
<p class="text-xs muted text-center">Summary chart of Phase 1 findings — comfort ratings, clasp issues, reattachment rate</p>
</div>

</div>

<p class="footer-note">Final Presentation · 17 / 20</p>

</div>

<!--
Same table structure as the thesis comparison, different domain. The direction of every change is identical: scope earlier, gather evidence deliberately, defer claims until verified.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-10">
<p class="eyebrow mb-2">Synthesis</p>
<h1 class="serif text-[1.65rem] ink leading-snug max-w-3xl" style="font-weight:500">The same habits, two unrelated domains</h1>
<div class="rule w-14 mt-4"></div>
</div>

<div class="flex-1 flex flex-col justify-center gap-6">

<table>
<thead><tr><th>Habit</th><th>Thesis — wirebond optimization</th><th>KINTO — elderly monitoring</th></tr></thead>
<tbody>
<tr><td class="ink font-medium">Scope before tooling</td><td class="muted">Fixed target metric and simulation boundary first</td><td class="muted">Reframed to root cause before any prototype</td></tr>
<tr><td class="ink font-medium">Deliberate evidence</td><td class="muted">Literature synthesis matrix, screened sources</td><td class="muted">Physical dummies as evidence instruments</td></tr>
<tr><td class="ink font-medium">Staged decomposition</td><td class="muted">Four-stage simulation pipeline</td><td class="muted">Three-phase study, hardware decoupled from UX</td></tr>
<tr><td class="ink font-medium">Verify before claiming</td><td class="muted">Checked against physical law and documentation</td><td class="muted">Deferred claims until Holter-baseline validation</td></tr>
</tbody>
</table>

<p class="text-sm muted leading-relaxed max-w-2xl pt-4" style="border-top:1px solid var(--line)">The overlap is the evidence: the same researcher, applying the same discipline, produced structurally identical research designs in two fields that share almost nothing else.</p>

</div>

<p class="footer-note">Final Presentation · 18 / 20</p>

</div>

<!--
This is really the thesis of the whole talk. If I'd only shown the wirebond study, you could reasonably ask whether this was really about research habits or just about getting better at one simulation pipeline. Showing the same structure in a clinical UX study is the answer.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-10">
<p class="eyebrow mb-2">Limitations</p>
<h1 class="serif text-[1.65rem] ink leading-snug max-w-3xl" style="font-weight:500">Limits of the process, and the role of judgment</h1>
<div class="rule w-14 mt-4"></div>
</div>

<div class="flex-1 flex flex-col justify-between">

<div class="grid grid-cols-2 gap-16">
<div class="pr-8" style="border-right:1px solid var(--line)">
<p class="eyebrow mb-3">Tools reliably handle</p>
<div class="flex flex-col gap-2 text-sm ink">
<p>Boilerplate scripting and file I/O</p>
<p>Parsing simulation logs into structured tables</p>
<p>Re-ranking literature by relevance</p>
</div>
</div>
<div class="pl-8">
<p class="eyebrow mb-3">Judgment still required</p>
<div class="flex flex-col gap-2 text-sm ink">
<p>Whether a result is physically plausible</p>
<p>Which model or mesh setup fits the problem</p>
<p>Whether hardware or human-subjects testing, not just simulation, is needed</p>
</div>
</div>
</div>

<div class="pt-6 mt-6" style="border-top:1px solid var(--line)">
<p class="eyebrow mb-3">Current limits, and what comes next</p>
<div class="grid grid-cols-3 gap-8">
<p class="text-sm muted leading-relaxed"><span class="ink font-medium">Thesis is simulation-only</span> — next: fabricate the module and run double-pulse tests</p>
<p class="text-sm muted leading-relaxed"><span class="ink font-medium">No busbar or thermal model</span> — next: extend geometry and add coupled thermal analysis</p>
<p class="text-sm muted leading-relaxed"><span class="ink font-medium">KINTO Phases 2–3 pending</span> — next: digital interface testing, then clinical baseline validation</p>
</div>
</div>

</div>

<p class="footer-note">Final Presentation · 19 / 20</p>

</div>

<!--
Tools, AI included, are reliable for execution but not for judgment. The thesis results are still simulation-only, and KINTO has only completed Phase 1 — in both cases, the next steps are fabrication and testing, not more automation.
-->

---
layout: center
background: '#FAF9F5'
class: px-24 text-left
---

<div class="w-full max-w-2xl">

<p class="eyebrow mb-6">Closing Reflection</p>

<p class="serif text-xl ink leading-relaxed mb-8" style="font-weight:500">
This course changed how research is conducted at every stage — how a question gets scoped, how evidence gets organized and judged, how an experiment gets built, and how any output, AI-generated or not, gets checked before it is trusted. The same six habits produced a working simulation pipeline and a clinical-grade study design, in two fields that otherwise share nothing.
</p>

<p class="text-sm muted leading-relaxed mb-10">
The eighteen-point-eight percent reduction in loop inductance, and a study design built to withstand clinical scrutiny, are two measurable results. The more durable outcome is a research process I can now repeat, defend, and improve on the next problem — whatever field it's in.
</p>

<div class="rule w-16 mb-6"></div>

<p class="text-sm muted">Raymond Tenorio Borres &middot; Research Skills P: AI &middot; Summer 2026</p>
<p class="text-sm ink mt-1">Thank you. Questions and discussion welcome.</p>

</div>

<!--
To close: this course did not just change how I use one tool. It changed how I scope questions, judge evidence, structure experiments, and check outputs — and both the thesis result and the KINTO study design are evidence for that. Thank you, I'm happy to take questions.
-->
