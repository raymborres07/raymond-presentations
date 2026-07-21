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

<div class="w-full h-full flex flex-col justify-center px-20">

<p class="eyebrow mb-4">Research Skills P: AI &nbsp;·&nbsp; Final Presentation &nbsp;·&nbsp; Spring 2026</p>

<h1 class="serif text-4xl leading-tight max-w-3xl ink" style="font-weight:500">Rebuilding a Research Process</h1>
<p class="serif text-lg mt-4 max-w-2xl muted" style="font-style:italic">A methodological review, across two research projects</p>

<div class="rule w-24 mt-10 mb-6"></div>

<p class="text-sm muted">Raymond Tenorio Borres</p>
<p class="text-sm muted">Machine-Learning-Driven Wirebond Optimization for SiC Power Modules &middot; KINTO Elderly Monitoring Research</p>

</div>

<!--
Good afternoon, everyone, and thank you for being here. Today I want to walk you through something a little different from a typical results recap. Over this course I did not just pick up new AI tools. I changed how I actually do research, from the way I scope a question, to how I judge evidence, to how I decide whether a result is trustworthy. My midterm for this course applied that shift to one assigned project, KINTO, a wearable health monitor for elderly patients. Today I want to show it did not stop there. I have also been applying the same habits to my actual thesis on wirebond optimization for a SiC power module, work this course never assigned. We have about thirty minutes, so let's get into it.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-10">
<p class="eyebrow mb-2">Introduction</p>
<h1 class="serif text-[1.7rem] ink leading-snug max-w-3xl" style="font-weight:500">From results to process</h1>
<div class="title-rule w-14 mt-4"></div>
</div>

<div class="flex-1 grid grid-cols-2 gap-16 items-center">
  <div class="pr-8" style="border-right: 1px solid var(--line)">
    <p class="eyebrow mb-3 accent">Midterm</p>
    <p class="serif text-lg leading-relaxed ink mb-3">One assigned project.</p>
    <p class="text-sm muted leading-relaxed">The midterm for this course applied these habits to KINTO, a wearable health-monitoring device: the project this course assigned.</p>
  </div>
  <div class="pl-8">
    <p class="eyebrow mb-3 accent">Today</p>
    <p class="serif text-lg leading-relaxed ink mb-3">A habit, not an assignment.</p>
    <p class="text-sm muted leading-relaxed">This talk shows the same habits still at work in KINTO, and now also applied to a separate thesis this course never assigned.</p>
  </div>
</div>

<div class="mt-10 pt-8" style="border-top:1px solid var(--line)">
  <p class="serif text-base ink leading-relaxed max-w-2xl">The through line is not a tool. It is a change in how the research itself was conducted.</p>
</div>

<p class="footer-note">Final Presentation · 2 / 21</p>

</div>

<!--
My midterm for this course was KINTO. I applied the habits we had covered so far to that one assigned project and reported on it. Today I want to go further and show that those habits did not stay confined to the assignment. I have been applying them independently to my actual thesis on wirebond optimization for a SiC power module, work this course never touched. If the process really changed, it should show up even somewhere nobody assigned it to. That is the claim I am going to try to prove today.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-10">
<p class="eyebrow mb-2">Retrospective</p>
<h1 class="serif text-[1.7rem] ink leading-snug max-w-3xl" style="font-weight:500">Starting point</h1>
<div class="title-rule w-14 mt-4"></div>
</div>

<div class="flex-1 flex flex-col justify-center gap-5">

<div class="grid grid-cols-2 gap-x-16 gap-y-6">
  <div>
    <div class="flex items-center gap-1.5 mb-1">
      <div class="i-lucide:search text-xs muted"></div>
      <p class="text-xs muted">01</p>
    </div>
    <p class="ink font-medium mb-1">Loosely scoped questions</p>
    <p class="text-sm muted leading-relaxed">Research questions were broad enough to admit almost any answer, which made it hard to tell relevant evidence from noise.</p>
  </div>
  <div>
    <div class="flex items-center gap-1.5 mb-1">
      <div class="i-lucide:clock text-xs muted"></div>
      <p class="text-xs muted">02</p>
    </div>
    <p class="ink font-medium mb-1">Literature organized late</p>
    <p class="text-sm muted leading-relaxed">Papers were read and summarized sequentially, with structure imposed only after most of the reading was already done.</p>
  </div>
  <div>
    <div class="flex items-center gap-1.5 mb-1">
      <div class="i-lucide:list-checks text-xs muted"></div>
      <p class="text-xs muted">03</p>
    </div>
    <p class="ink font-medium mb-1">No explicit evidence criteria</p>
    <p class="text-sm muted leading-relaxed">There was no fixed standard for what counted as sufficient support for a claim, physical or otherwise.</p>
  </div>
  <div>
    <div class="flex items-center gap-1.5 mb-1">
      <div class="i-lucide:ear text-xs muted"></div>
      <p class="text-xs muted">04</p>
    </div>
    <p class="ink font-medium mb-1">Outputs judged by fluency</p>
    <p class="text-sm muted leading-relaxed">Explanations, scripts and search results, including AI output, were trusted for how convincing they sounded, not how well they were checked.</p>
  </div>
</div>

<p class="text-sm muted serif" style="font-style:italic">None of this was specific to working with AI. It described the whole research process.</p>

</div>

<p class="footer-note">Final Presentation · 3 / 21</p>

</div>

<!--
Before I get into what changed, I want to be honest about where I started, because it makes the contrast meaningful. My research questions were vague enough that almost any answer would technically satisfy them. My literature review was organized after the fact instead of before I started reading. I did not have a consistent standard for what counted as good enough evidence to support a claim. And, maybe most importantly, I judged outputs, including AI output, by how convincing they sounded rather than by actually checking them. I want to stress that last point. None of this was a story about AI specifically. This was just how I did research, full stop.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-6">
<p class="eyebrow accent mb-2">Course Overview</p>
<h1 class="serif text-[1.7rem] ink leading-snug max-w-3xl" style="font-weight:500">What this course covered</h1>
<div class="title-rule w-20 mt-4" style="opacity:1"></div>
</div>

<div class="flex-1 flex flex-col justify-center gap-6">

<p class="text-sm muted leading-relaxed max-w-2xl">Beyond any single tool, the course covered six categories of research practice. Each reappears in the case studies that follow.</p>

<div class="grid grid-cols-2 gap-x-16 gap-y-5">
<div class="flex gap-4"><p class="serif text-lg accent" style="width:1.5rem">1</p><div><p class="ink font-medium text-sm">Question scoping</p><p class="text-xs muted mt-0.5">Fixing a question's target and boundary before touching a tool</p></div></div>
<div class="flex gap-4"><p class="serif text-lg accent" style="width:1.5rem">2</p><div><p class="ink font-medium text-sm">Discovery and synthesis tools</p><p class="text-xs muted mt-0.5">Database search, citation mapping, active-learning screening</p></div></div>
<div class="flex gap-4"><p class="serif text-lg accent" style="width:1.5rem">3</p><div><p class="ink font-medium text-sm">Source-quality evaluation</p><p class="text-xs muted mt-0.5">Separating credible journals from predatory or unverifiable ones</p></div></div>
<div class="flex gap-4"><p class="serif text-lg accent" style="width:1.5rem">4</p><div><p class="ink font-medium text-sm">Staged experiment design</p><p class="text-xs muted mt-0.5">Decomposing a study into independently testable steps</p></div></div>
<div class="flex gap-4"><p class="serif text-lg accent" style="width:1.5rem">5</p><div><p class="ink font-medium text-sm">Verification habits</p><p class="text-xs muted mt-0.5">Treating every output, AI-generated or not, as a hypothesis</p></div></div>
<div class="flex gap-4"><p class="serif text-lg accent" style="width:1.5rem">6</p><div><p class="ink font-medium text-sm">Protocol formalization</p><p class="text-xs muted mt-0.5">Turning a reliable habit into a documented, reusable procedure</p></div></div>
</div>

</div>

<p class="footer-note">Final Presentation · 4 / 21</p>

</div>

<!--
Rather than walking through this course topic by topic, I want to give you the map up front, because it is really six habits, not one tool: question scoping, tools for discovering and synthesizing literature, evaluating whether a source is actually credible, designing experiments in verifiable stages, a habit of verifying any output before trusting it, and turning a habit that works into a documented, reusable protocol. I'll walk through each of these briefly, then spend the rest of the talk showing all six of them at work in two very different research projects.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-8">
<p class="eyebrow mb-2">Methodology I</p>
<h1 class="serif text-[1.7rem] ink leading-snug max-w-3xl" style="font-weight:500">Formulating the research question</h1>
<div class="title-rule w-14 mt-4"></div>
</div>

<div class="flex-1 grid grid-cols-[1.3fr_1fr] gap-14 items-center">

<div class="flex flex-col gap-6">
<p class="text-sm muted leading-relaxed">The first and most consequential change was scoping discipline: fixing the question, the target metric and the boundary of the study before any tool was used.</p>

<div class="pl-6" style="border-left: 2px solid var(--accent)">
  <p class="serif text-base ink leading-relaxed" style="font-style:italic">
   "How does wirebond interconnect geometry affect parasitic loop inductance in a 1.7 kV, 100 A SiC half-bridge power module, within the existing PyAEDT–ANSYS Q3D simulation stack?"
  </p>
</div>

<div class="grid grid-cols-3 gap-6">
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
    <p class="text-sm ink">Existing simulation stack</p>
  </div>
</div>
</div>

<div class="flex flex-col items-center">
<div class="fig-frame w-full" style="height:160px;"><img src="/thesis/schematic.png" style="height:100%; width:auto; max-width:100%;" /></div>
<p class="fig-cap">Figure. The commutation loop being minimised: DC+ &rarr; high-side die &rarr; output &rarr; low-side die &rarr; DC&minus;.</p>
</div>

</div>

<p class="footer-note">Final Presentation · 5 / 21</p>

</div>

<!--
The single biggest change was scoping discipline. Before this course, I would start with something like "how do I optimize power modules," which is not really a question, it is an invitation to wander. Now I fix three things before I touch a single tool: the exact question, the target metric I am optimizing, and the boundary of what is in scope and what is not. For the thesis, that meant committing to a specific module, a specific metric (loop inductance in nanohenries), and a specific simulation stack I was not going to deviate from. Everything downstream, every script, every sweep, gets measured against that fixed target.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-10">
<p class="eyebrow mb-2">Methodology II</p>
<h1 class="serif text-[1.7rem] ink leading-snug max-w-3xl" style="font-weight:500">Tools for literature discovery and synthesis</h1>
<div class="title-rule w-14 mt-4"></div>
</div>

<div class="flex-1 grid grid-cols-[1.3fr_1fr] gap-14 items-start">

<div>
<p class="text-sm muted leading-relaxed mb-5">Literature review moved from summarizing papers one at a time to building a synthesis matrix: a table where each source is encoded against the same variables, so patterns across the field become visible rather than anecdotal.</p>

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
<p class="text-sm muted leading-relaxed">Database search (IEEE Xplore, Scopus), citation mapping (ResearchRabbit) and reference management (Zotero) replaced ad-hoc web search as the entry point for evidence.</p>
</div>
<div>
<p class="ink font-medium mb-1 text-sm">Screening by relevance</p>
<p class="text-sm muted leading-relaxed">Active-learning screening (ASReview) ranked search results by relevance, cutting down time spent reading low-relevance papers before synthesis began.</p>
</div>
</div>

</div>

<p class="footer-note">Final Presentation · 6 / 21</p>

</div>

<!--
Literature review used to mean reading papers in whatever order I found them and summarizing each one individually, book report style. This course pushed me toward building an actual synthesis matrix, a table where every source gets encoded against the same fixed variables, so I can see patterns across the field instead of a pile of individual summaries. To build that table efficiently, I leaned on real tools: database search through IEEE Xplore and Scopus, citation mapping through ResearchRabbit, and active learning screening through ASReview, which ranks incoming papers by relevance so I am not reading low value material just because it showed up in a search.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-6">
<p class="eyebrow mb-2">Methodology III</p>
<h1 class="serif text-[1.7rem] ink leading-snug max-w-3xl" style="font-weight:500">Evaluating source quality</h1>
<div class="title-rule w-14 mt-4"></div>
</div>

<div class="flex-1 flex flex-col justify-center gap-4">

<p class="text-sm muted leading-relaxed max-w-2xl">Finding papers is not the same as trusting them. A recurring skill from this course was screening a source's credibility before it was allowed into the synthesis matrix, not after.</p>

<div class="grid grid-cols-2 gap-16">
  <div class="pr-8" style="border-right:1px solid var(--line)">
    <div class="flex items-center gap-1.5 mb-3">
      <div class="i-lucide:circle-check text-xs accent"></div>
      <p class="eyebrow">Signals of a credible source</p>
    </div>
    <div class="flex flex-col gap-2 text-sm ink">
      <p>Indexed in a recognized database (Scopus, Web of Science, IEEE Xplore)</p>
      <p>Verifiable peer review and a named, credentialed editorial board</p>
      <p>Methodology and data disclosed in enough detail to reproduce</p>
      <p>Citation history consistent with the journal's claimed standing</p>
    </div>
  </div>
  <div class="pl-8">
    <div class="flex items-center gap-1.5 mb-3">
      <div class="i-lucide:triangle-alert text-xs warn"></div>
      <p class="eyebrow">Warning signs</p>
    </div>
    <div class="flex flex-col gap-2 text-sm ink">
      <p>No verifiable review process or unusually fast acceptance</p>
      <p>Not indexed anywhere reputable; unsolicited invitations to publish</p>
      <p>Vague scope or an editorial board that cannot be verified</p>
      <p>Publication fees with little transparency about review</p>
    </div>
  </div>
</div>

<p class="text-sm muted leading-relaxed max-w-2xl pt-3" style="border-top:1px solid var(--line)">Checked in practice against a journal's DOAJ listing and the Think. Check. Submit. checklist.</p>

</div>

<p class="footer-note">Final Presentation · 7 / 21</p>

</div>

<!--
Finding a paper is not the same as trusting it, and this is a skill I genuinely did not have before this course. I now run a credibility check on a source before it is allowed anywhere near my synthesis matrix, not after I have already cited it. On the credible side, I am looking for real indexing in a recognized database, verifiable peer review, a named and credentialed editorial board, and enough methodological detail to actually reproduce the work. On the warning side, things like unindexed journals, unsolicited invitations to publish and vague editorial boards are all signals to walk away. In practice this means checking a journal's DOAJ listing and running it against the Think, Check, Submit checklist before it earns a citation.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-6">
<p class="eyebrow mb-2">Methodology IV</p>
<h1 class="serif text-[1.7rem] ink leading-snug max-w-3xl" style="font-weight:500">Designing structured experiments</h1>
<div class="title-rule w-14 mt-4"></div>
</div>

<div class="flex-1 flex flex-col justify-center gap-6">

<p class="text-sm muted leading-relaxed max-w-2xl">Experimentation shifted from single, large attempts to a documented sequence of independent stages, each with parameter bounds fixed before any run.</p>

<div class="grid grid-cols-4 gap-4">
  <div class="pt-4" style="border-top: 2px solid var(--ink)">
    <div class="flex items-center gap-1.5 mb-1">
      <div class="i-lucide:box text-xs muted"></div>
      <p class="text-xs muted">Stage 1</p>
    </div>
    <p class="ink text-sm font-medium">Geometry setup</p>
    <p class="text-xs muted mt-1 leading-relaxed">Wirebond and ribbon layout in PyAEDT</p>
  </div>
  <div class="pt-4" style="border-top: 2px solid var(--ink)">
    <div class="flex items-center gap-1.5 mb-1">
      <div class="i-lucide:sliders-horizontal text-xs muted"></div>
      <p class="text-xs muted">Stage 2</p>
    </div>
    <p class="ink text-sm font-medium">Boundary configuration</p>
    <p class="text-xs muted mt-1 leading-relaxed">Materials, excitation, solver bounds</p>
  </div>
  <div class="pt-4" style="border-top: 2px solid var(--ink)">
    <div class="flex items-center gap-1.5 mb-1">
      <div class="i-lucide:cpu text-xs muted"></div>
      <p class="text-xs muted">Stage 3</p>
    </div>
    <p class="ink text-sm font-medium">Mesh and solve</p>
    <p class="text-xs muted mt-1 leading-relaxed">ANSYS Q3D adaptive meshing</p>
  </div>
  <div class="pt-4" style="border-top: 2px solid var(--accent)">
    <div class="flex items-center gap-1.5 mb-1">
      <div class="i-lucide:database text-xs muted"></div>
      <p class="text-xs muted">Stage 4</p>
    </div>
    <p class="ink text-sm font-medium">Data extraction</p>
    <p class="text-xs muted mt-1 leading-relaxed">Loop inductance matrix, logged per run</p>
  </div>
</div>

<div class="flex flex-col items-center">
<div class="fig-frame" style="height:95px;"><img src="/thesis/aedt-models.png" style="height:100%; width:auto; max-width:100%;" /></div>
<p class="fig-cap">Figure. From the original three-net design (left) to the full-loop, single-net model (right) used to extract L<sub>loop</sub> directly.</p>
</div>

</div>

<p class="footer-note">Final Presentation · 8 / 21</p>

</div>

<!--
Experimentation used to mean one large attempt, everything in a single script, geometry, meshing and solving all at once, and it failed constantly because any one part breaking took down the whole run. Now every experiment gets decomposed into independent, testable stages with parameter bounds fixed in advance. For the thesis, that meant four stages: build the geometry, configure the boundaries and materials, mesh and solve, then extract the data. On screen you can see the actual model rebuild this enabled, going from three separate nets in the original design to a single merged net that lets me pull the loop inductance directly out of one matrix.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-8">
<p class="eyebrow mb-2">Methodology V</p>
<h1 class="serif text-[1.7rem] ink leading-snug max-w-3xl" style="font-weight:500">A habit of verification</h1>
<div class="title-rule w-14 mt-4"></div>
</div>

<div class="flex-1 grid grid-cols-[1.2fr_1fr] gap-14 items-center">

<div class="flex flex-col gap-6">
<p class="text-sm muted leading-relaxed">Every output is now treated as a hypothesis rather than a fact: a paper's claim, a simulation result, a neural-network prediction or an AI-generated script.</p>

<div class="flex flex-col gap-4">
<div class="flex gap-5 items-center">
<div class="i-lucide:scale text-sm muted" style="width:1.5rem; flex-shrink:0;"></div>
<p class="text-sm ink"><span class="font-medium">Physical consistency</span>: does the result violate a known law, such as conservation of energy?</p>
</div>
<div class="flex gap-5 items-center">
<div class="i-lucide:book-open text-sm muted" style="width:1.5rem; flex-shrink:0;"></div>
<p class="text-sm ink"><span class="font-medium">Documented behavior</span>: does it match the tool's own documentation, not just plausible-sounding usage?</p>
</div>
<div class="flex gap-5 items-center">
<div class="i-lucide:repeat text-sm muted" style="width:1.5rem; flex-shrink:0;"></div>
<p class="text-sm ink"><span class="font-medium">Reproducibility</span>: does it hold up across repeated, independent runs?</p>
</div>
</div>
</div>

<div class="flex flex-col items-center">
<div class="fig-frame w-full" style="height:150px;"><img src="/thesis/nn-parity.png" style="height:100%; width:auto; max-width:100%;" /></div>
<p class="fig-cap">Figure. The surrogate model's own predictions, checked against simulated ground truth before being trusted for optimization.</p>
</div>

</div>

<p class="footer-note">Final Presentation · 9 / 21</p>

</div>

<!--
This is the habit I would call the biggest mindset shift out of everything in this course. Every output now gets treated as a hypothesis, not a fact, whether it is a claim from a paper, a simulation result, a prediction from a neural network I trained myself, or a script an AI model wrote for me. Three questions, every time: does it violate a known physical law, does it actually match how the tool is documented to behave rather than just sounding plausible, and does it hold up if I run it again independently. The parity plot on the right is a direct example, checking my own surrogate model's predictions against real simulated data before I let it guide an optimization.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-10">
<p class="eyebrow mb-2">Methodology VI</p>
<h1 class="serif text-[1.7rem] ink leading-snug max-w-3xl" style="font-weight:500">Formalizing habits into protocols</h1>
<div class="title-rule w-14 mt-4"></div>
</div>

<div class="flex-1 grid grid-cols-[1fr_1.1fr] gap-14 items-start">

<div class="flex flex-col gap-4">
<p class="text-sm muted leading-relaxed">A habit that proved reliable was worth writing down once and reusing, rather than reinvented for every new task: the same reasoning behind any lab protocol.</p>
<p class="text-sm muted leading-relaxed">In one case this took the form of a documented prompt template for a recurring literature-extraction step. The principle mattered more than the tool: this is one of several protocols developed over the course and the only one that involved AI directly.</p>
</div>

<div class="p-6" style="border: 1px solid var(--line)">
<p class="eyebrow mb-4">Example protocol</p>
<div class="flex flex-col gap-3">
<div class="flex gap-4"><p class="text-sm muted" style="width:5rem; flex-shrink:0">Input</p><p class="text-sm ink">A verified source PDF and a fixed extraction schema</p></div>
<div class="flex gap-4"><p class="text-sm muted" style="width:5rem; flex-shrink:0">Steps</p><p class="text-sm ink">Extract parameter, method and reported result into the schema</p></div>
<div class="flex gap-4"><p class="text-sm muted" style="width:5rem; flex-shrink:0">Check</p><p class="text-sm ink">Cross-reference extracted values against the source text</p></div>
<div class="flex gap-4"><p class="text-sm muted" style="width:5rem; flex-shrink:0">Output</p><p class="text-sm ink">One row added to the synthesis matrix</p></div>
</div>
</div>

</div>

<p class="footer-note">Final Presentation · 10 / 21</p>

</div>

<!--
Once a habit proves reliable, it is worth writing down once instead of reinventing it every time, which is exactly the logic behind a lab protocol. Most of these protocols in my work do not involve AI at all, they are just documented steps. But one good example that does involve AI was a literature extraction step: feed in a verified source PDF and a fixed extraction schema, pull out the parameter, method and result, cross check those values against the source text, and the output is one clean row added to the synthesis matrix. The point is not the AI part. The point is that a reliable habit becomes something repeatable and checkable, not something I redo from memory.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-10">
<p class="eyebrow accent mb-2">Case Studies</p>
<h1 class="serif text-[1.7rem] ink leading-snug max-w-3xl" style="font-weight:500">Two projects, one process</h1>
<div class="title-rule w-20 mt-4" style="opacity:1"></div>
</div>

<div class="flex-1 flex flex-col justify-center gap-10">

<p class="text-sm muted leading-relaxed max-w-2xl">You already saw KINTO once, at the midterm for this course. What you have not seen is my actual thesis, wirebond optimization for a SiC power module, work this course never assigned. If the six habits just described are genuinely a change in how I do research, not a technique specific to one project, they should show up in both.</p>

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

<p class="footer-note">Final Presentation · 11 / 21</p>

</div>

<!--
I want to pause here and be upfront about something. Everything so far in this talk has been about habits and principles, not evidence, and you already saw KINTO once, at the midterm for this course. Revisiting it alone would not prove much. What actually tests the claim is a project this course never touched: my thesis on wirebond optimization for a SiC power module. The thesis is quantitative and simulation driven, where evidence comes from a field solver. KINTO is qualitative and human centered, where evidence comes from a physical prototype in someone's actual hands. If the same six habits show up in both, especially in the one nobody assigned, that is real evidence the process changed.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-6">
<p class="eyebrow mb-2">Case Study A · Thesis I</p>
<h1 class="serif text-[1.7rem] ink leading-snug max-w-3xl" style="font-weight:500">The engineering problem</h1>
<div class="title-rule w-14 mt-4"></div>
</div>

<div class="flex-1 grid grid-cols-[1.3fr_1fr] gap-14 items-center">

<div class="flex flex-col gap-6">
<p class="text-sm muted leading-relaxed">The case study is a 1.7 kV, 100 A SiC half-bridge power module (iTreePack geometry). High parasitic loop inductance in the wirebond interconnect causes switching overvoltage spikes and increased losses.</p>

<div class="flex items-center gap-2 flex-wrap">
<div class="px-3 py-2 text-xs ink" style="border:1px solid var(--line)">Python</div>
<p class="muted text-xs">&rarr;</p>
<div class="px-3 py-2 text-xs ink" style="border:1px solid var(--line)">PyAEDT</div>
<p class="muted text-xs">&rarr;</p>
<div class="px-3 py-2 text-xs ink" style="border:1px solid var(--line)">Q3D solver</div>
<p class="muted text-xs">&rarr;</p>
<div class="px-3 py-2 text-xs ink" style="border:1px solid var(--line)">NN surrogate</div>
<p class="muted text-xs">&rarr;</p>
<div class="px-3 py-2 text-xs accent" style="border:1px solid var(--accent)">Genetic algorithm</div>
</div>
</div>

<div class="flex flex-col gap-3">
<div>
<div class="fig-frame" style="height:130px;"><img src="/thesis/topology.png" style="height:100%; width:auto; max-width:100%;" /></div>
<p class="fig-cap">Module top view, coloured by net</p>
</div>
<div>
<div class="fig-frame" style="height:80px;"><img src="/thesis/layerstack.png" style="height:100%; width:auto; max-width:100%;" /></div>
<p class="fig-cap">Z-stack cross-section</p>
</div>
</div>

</div>

<p class="footer-note">Final Presentation · 12 / 21</p>

</div>

<!--
So, the thesis itself. This is a 1.7 kilovolt, 100 amp silicon carbide half bridge power module, the iTreePack geometry you can see on the right. The problem is parasitic loop inductance in the wirebond interconnect, which at these switching speeds causes overvoltage spikes and added losses. The automated pipeline runs from Python scripting through PyAEDT, into the ANSYS Q3D solver, through a neural network surrogate model, and finally a genetic algorithm optimizer. Everything I have described about scoping and structured experimentation was applied directly to this pipeline.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-6">
<p class="eyebrow mb-2">Case Study A · Thesis II</p>
<h1 class="serif text-[1.7rem] ink leading-snug max-w-3xl" style="font-weight:500">Applying the revised process</h1>
<div class="title-rule w-14 mt-4"></div>
</div>

<div class="flex-1 flex flex-col justify-center gap-6">

<table>
<thead><tr><th>Research dimension</th><th>Before</th><th>After</th></tr></thead>
<tbody>
<tr><td class="ink font-medium">Question scoping</td><td class="muted">General optimization goal, no fixed boundary</td><td class="accent">Fixed target metric and simulation scope, defined first</td></tr>
<tr><td class="ink font-medium">Script design</td><td class="muted">One large script covering geometry through solve</td><td class="accent">Four independent, testable modules</td></tr>
<tr><td class="ink font-medium">Parameter bounds</td><td class="muted">Set informally, adjusted mid-run</td><td class="accent">Fixed in advance, documented per stage</td></tr>
<tr><td class="ink font-medium">Output checking</td><td class="muted">Accepted if the script ran without error</td><td class="accent">Checked against documentation and known field behavior</td></tr>
</tbody>
</table>

<div class="flex flex-col items-center">
<div class="fig-frame" style="height:100px;"><img src="/thesis/geometry.png" style="height:100%; width:auto; max-width:100%;" /></div>
<p class="fig-cap">Baseline wirebond geometry (R = 0.2 mm) versus the optimized arc (R = 5.47 mm): the physical result of the process change.</p>
</div>

</div>

<p class="footer-note">Final Presentation · 13 / 21</p>

</div>

<!--
This table is really just the last several methodology slides applied concretely to this one study. The question scoping became a fixed target metric and simulation boundary set before any run. The structured experiment habit became four independent, testable script modules instead of one large script. Parameter bounds got fixed and documented in advance instead of adjusted on the fly. And every output got checked against documentation and known physical behavior instead of just being accepted because the script ran without error. What you see on screen is the physical result: the wirebond arc went from a flat, tight baseline to a taller, wider optimized shape, arrived at through disciplined sweeping rather than guesswork.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-6">
<p class="eyebrow mb-2">Case Study A · Thesis III</p>
<h1 class="serif text-[1.7rem] ink leading-snug max-w-3xl" style="font-weight:500">Results</h1>
<div class="title-rule w-14 mt-4"></div>
</div>

<div class="flex-1 flex flex-col justify-center gap-6">

<div class="grid grid-cols-3 gap-10">
<div>
<p class="serif text-3xl ink" style="font-weight:500">483</p>
<p class="eyebrow mt-2">Simulated points, 9 phases</p>
</div>
<div>
<p class="serif text-3xl ink" style="font-weight:500">8.194 &rarr; 6.596 nH</p>
<p class="eyebrow mt-2">Baseline to validated best</p>
</div>
<div>
<p class="serif text-3xl accent" style="font-weight:500">&minus;19.5%</p>
<p class="eyebrow mt-2">Loop inductance reduction</p>
</div>
</div>

<div class="flex flex-col items-center">
<div class="fig-frame" style="height:160px;"><img src="/thesis/bar-comparison.png" style="height:100%; width:auto; max-width:100%;" /></div>
<p class="fig-cap">Baseline, 7D result, an invalid 10D result and the corrected 10D result: loop inductance and resistance.</p>
</div>

<p class="text-sm muted leading-relaxed max-w-2xl">Loop resistance fell 32.1% alongside inductance (4.056 &rarr; 2.754 m&Omega;). Arc height is the dominant parameter; ribbon width is the second lever.</p>

</div>

<p class="footer-note">Final Presentation · 14 / 21</p>

</div>

<!--
Across nine sweep phases and 483 simulated points, expanding the parameter space from seven to ten dimensions, the validated best design reduced loop inductance by nineteen and a half percent, from 8.194 down to 6.596 nanohenries. Resistance dropped alongside it by thirty two percent. Arc height turned out to be the dominant lever, with ribbon width as a secondary one. I want you to notice the third bar in that chart though, the one labeled invalid. That result is not a mistake I am hiding. It is actually the best example I have of the verification habit in action, and it is the next slide.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-4">
<p class="eyebrow mb-2">Case Study A · Thesis IV</p>
<h1 class="serif text-[1.7rem] ink leading-snug max-w-3xl" style="font-weight:500">Catching an invalid result</h1>
<div class="title-rule w-14 mt-4"></div>
</div>

<div class="flex-1 grid grid-cols-[1.3fr_1fr] gap-10 items-center">

<div class="flex flex-col gap-3">
<p class="text-sm muted leading-relaxed">Five sweep phases each reported a new "best." Each sat at the edge of its search window, a pattern that looks like a real gradient.</p>

<table class="tight-table">
<thead><tr><th>Phase</th><th>Search window (mm)</th><th>Best found (mm)</th></tr></thead>
<tbody>
<tr><td class="muted">4</td><td class="muted">0.0 – 1.0</td><td class="warn">0.90</td></tr>
<tr><td class="muted">5</td><td class="muted">0.5 – 1.5</td><td class="warn">1.26</td></tr>
<tr><td class="muted">6</td><td class="muted">1.0 – 2.0</td><td class="warn">1.95</td></tr>
<tr><td class="muted">7</td><td class="muted">1.5 – 2.5</td><td class="warn">2.43</td></tr>
<tr><td class="muted">8</td><td class="muted">2.0 – 3.0</td><td class="warn">2.86</td></tr>
</tbody>
</table>

<p class="text-sm muted leading-relaxed">A geometry check found the wirebond overhanging its pad by up to 2.6 mm. The solver's Boolean join only required partial overlap, so it silently accepted the invalid geometry, <span class="ink font-medium">affecting 46% of the dataset.</span> Corrected optimum: <span class="accent font-medium">6.596 nH</span>, not the 5.713 nH the invalid sweep suggested.</p>
</div>

<div class="flex flex-col items-center">
<div class="fig-frame w-full" style="height:170px;"><img src="/thesis/landscape.png" style="height:100%; width:auto; max-width:100%;" /></div>
<p class="fig-cap">The valid landscape. The corrected optimum sits inside it, not at the invalid boundary Phases 4–8 chased.</p>
</div>

</div>

<p class="footer-note">Final Presentation · 15 / 21</p>

</div>

<!--
Here is what happened. Five sweep phases in a row each reported a new best result, and each one landed right at the edge of its search window: 0.90, 1.26, 1.95, 2.43, 2.86. That pattern looks exactly like a real optimization gradient. It was not. When I went back and directly checked the geometry, I found the wirebond was physically overhanging its pad by as much as 2.6 millimeters, which is not something you could actually manufacture. The solver's Boolean join only required partial overlap to accept the geometry as valid, so it silently let this through. Forty six percent of my entire dataset turned out to be affected. Once I fixed the validation and reran it properly, the real optimum was 6.596 nanohenries, not the 5.713 the invalid sweep had suggested. This is the clearest, most concrete proof I have that the verification habit is not academic. It caught something that would have been very easy to just report as a result.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-6">
<p class="eyebrow mb-2">Case Study B · KINTO I</p>
<h1 class="serif text-[1.7rem] ink leading-snug max-w-3xl" style="font-weight:500">Reframing the research question</h1>
<div class="title-rule w-14 mt-4"></div>
</div>

<div class="flex-1 flex flex-col justify-center gap-6 max-w-3xl">

<p class="text-sm muted leading-relaxed">KINTO addresses remote health monitoring for elderly patients. The first version of the question was an engineering one: build a wrist sensor that reliably reads vital signs. That question was reframed after evidence suggested it was the wrong one.</p>

<div class="pl-6" style="border-left: 2px solid var(--accent)">
<p class="serif text-base ink leading-relaxed" style="font-style:italic">"Why do elderly patients abandon monitoring devices, and what would it take for one to actually stay on their wrist?"</p>
</div>

<p class="text-sm muted leading-relaxed">Existing evidence pointed away from a sensor problem: 63.8% of non-compliance was attributed to stigma and denial, not device failure. The resulting design (a closed-loop ECG requiring the wearer to touch the device with their other hand) was built to mirror the familiar, comforting gesture of holding an amulet.</p>

</div>

<p class="footer-note">Final Presentation · 16 / 21</p>

</div>

<!--
Now to KINTO. This project addresses remote health monitoring for elderly patients. The very first version of the question was a pure engineering one: build a wrist sensor that reliably reads vital signs. That framing got reframed once we actually looked at the evidence. It turns out 63.8% of non-compliance with these devices is driven by stigma and denial, not by the sensor failing. So the real question became why elderly patients abandon monitoring devices in the first place, and what it would take for one to actually stay on someone's wrist. The resulting design uses a closed loop ECG that requires the wearer to touch the device with their other hand, deliberately built to mirror the familiar, comforting gesture of holding an amulet.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-4">
<p class="eyebrow mb-2">Case Study B · KINTO II</p>
<h1 class="serif text-[1.7rem] ink leading-snug max-w-3xl" style="font-weight:500">A staged, evidence-gated study design</h1>
<div class="title-rule w-14 mt-4"></div>
</div>

<div class="flex-1 flex flex-col justify-center gap-4">

<p class="text-sm muted leading-relaxed max-w-2xl">Hardware development was deliberately decoupled from user testing and structured into three phases, each gating the next.</p>

<div class="grid grid-cols-3 gap-6">
<div class="pt-4" style="border-top: 2px solid var(--ink)">
<div class="flex items-center gap-1.5 mb-1">
  <div class="i-lucide:hand text-xs muted"></div>
  <p class="text-xs muted">Phase 1</p>
</div>
<p class="ink text-sm font-medium">Physical comfort</p>
<p class="text-xs muted mt-1 leading-relaxed">Non-functional, weighted 3D-printed dummies. Tests form factor, clasp fit for arthritic hands and whether patients remember to put it back on. Zero electronics, zero data-privacy risk.</p>
</div>
<div class="pt-4" style="border-top: 2px solid var(--ink)">
<div class="flex items-center gap-1.5 mb-1">
  <div class="i-lucide:tablet-smartphone text-xs muted"></div>
  <p class="text-xs muted">Phase 2</p>
</div>
<p class="ink text-sm font-medium">Digital interface</p>
<p class="text-xs muted mt-1 leading-relaxed">Tablet-based testing of the family-facing health dashboard, checked for whether it reduces anxiety rather than causing it.</p>
<div class="flex items-center gap-2 mt-2">
<div class="fig-frame flex-shrink-0" style="height:56px;"><img src="/kinto/dashboard.jpg" style="height:100%; width:auto;" /></div>
<p class="text-[0.6rem] muted leading-tight">Actual health dashboard screen used in Phase 2</p>
</div>
</div>
<div class="pt-4" style="border-top: 2px solid var(--accent)">
<div class="flex items-center gap-1.5 mb-1">
  <div class="i-lucide:heart-pulse text-xs muted"></div>
  <p class="text-xs muted">Phase 3</p>
</div>
<p class="ink text-sm font-medium">Functional validation</p>
<p class="text-xs muted mt-1 leading-relaxed">Working sensor pod validated against clinical Holter-monitor baselines before any medical claim is made.</p>
</div>
</div>

<p class="text-sm muted leading-relaxed max-w-2xl">No phase proceeds until the prior one produces evidence, not assumption: the same decomposition and verification logic as the simulation pipeline, applied to a human-subjects study.</p>

</div>

<p class="footer-note">Final Presentation · 17 / 21</p>

</div>

<!--
Just like the thesis pipeline, hardware development here was deliberately decoupled from user testing and broken into three gated phases. Phase one is physical comfort only, using non-functional, weighted 3D-printed dummies to test form factor, clasp fit for arthritic hands, and whether people actually remember to put it back on, with zero electronics and therefore zero data privacy risk. Phase two is the digital interface, the actual health dashboard you see on screen here, tested to make sure it reduces family anxiety instead of causing it. Phase three is functional validation, where the real sensor pod gets checked against clinical Holter monitor baselines before any medical claim is made. No phase starts until the one before it has produced real evidence.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-6">
<p class="eyebrow mb-2">Case Study B · KINTO III</p>
<h1 class="serif text-[1.7rem] ink leading-snug max-w-3xl" style="font-weight:500">What changed in the study design</h1>
<div class="title-rule w-14 mt-4"></div>
</div>

<div class="flex-1 flex flex-col justify-center gap-6">

<table>
<thead><tr><th>Research dimension</th><th>Before</th><th>After</th></tr></thead>
<tbody>
<tr><td class="ink font-medium">Problem framing</td><td class="muted">Build a more reliable sensor</td><td class="accent">Understand why patients disengage, before building anything</td></tr>
<tr><td class="ink font-medium">Evidence source</td><td class="muted">Assumed comfort and adoption</td><td class="accent">Physical prototypes used as evidence-gathering instruments</td></tr>
<tr><td class="ink font-medium">Risk scoping</td><td class="muted">Electronics tested early, informally</td><td class="accent">Phase 1 has zero electronics, by design</td></tr>
<tr><td class="ink font-medium">Claims</td><td class="muted">Made from a spec sheet</td><td class="accent">Deferred until validated against a clinical baseline</td></tr>
</tbody>
</table>

<p class="text-sm muted leading-relaxed max-w-2xl pt-2">Phase 1 is scoped to run before any of this is measured against real patients: comfort ratings, clasp issues and reattachment rate, collected from non-electronic dummies before a single sensor is worn.</p>

</div>

<p class="footer-note">Final Presentation · 18 / 21</p>

</div>

<!--
This table mirrors the thesis comparison almost exactly, just in a completely different domain. Problem framing moved from build a more reliable sensor to understand why patients disengage before building anything. Evidence source moved from assumed comfort to physical prototypes used as actual evidence gathering instruments. Risk scoping moved from testing electronics early and informally to phase one having zero electronics by design. And claims moved from being made off a spec sheet to being deferred until they are validated against a real clinical baseline. Phase one itself has not run yet, so I am not going to show you fabricated results. What I can tell you is exactly what it is scoped to measure once it does: comfort ratings, clasp issues and reattachment rate, all from non-electronic dummies before a single sensor is ever worn.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-6">
<p class="eyebrow accent mb-2">Synthesis</p>
<h1 class="serif text-[1.7rem] ink leading-snug max-w-3xl" style="font-weight:500">The same habits, two unrelated domains</h1>
<div class="title-rule w-20 mt-4" style="opacity:1"></div>
</div>

<div class="flex-1 flex flex-col justify-center gap-6">

<table>
<thead><tr><th>Habit</th><th>Thesis: wirebond optimization</th><th>KINTO: elderly monitoring</th></tr></thead>
<tbody>
<tr><td class="ink font-medium">Scope before tooling</td><td class="muted">Fixed target metric and simulation boundary first</td><td class="muted">Reframed to root cause before any prototype</td></tr>
<tr><td class="ink font-medium">Deliberate evidence</td><td class="muted">Literature synthesis matrix, screened sources</td><td class="muted">Physical dummies as evidence instruments</td></tr>
<tr><td class="ink font-medium">Staged decomposition</td><td class="muted">Four-stage simulation pipeline</td><td class="muted">Three-phase study, hardware decoupled from UX</td></tr>
<tr><td class="ink font-medium">Verify before claiming</td><td class="muted">Caught an invalid 10D result via direct geometry check</td><td class="muted">Deferred claims until Holter-baseline validation</td></tr>
</tbody>
</table>

<p class="text-sm muted leading-relaxed max-w-2xl pt-4" style="border-top:1px solid var(--line)">The overlap is the evidence: the same researcher, applying the same discipline, produced structurally identical research designs in two fields that share almost nothing else.</p>

</div>

<p class="footer-note">Final Presentation · 19 / 21</p>

</div>

<!--
This slide is really the thesis of the whole talk. If I had only shown you the wirebond study, you could fairly push back and say this sounds like getting good at one simulation pipeline, not a real change in how I think. So look at this table: scope before tooling, deliberate evidence gathering, staged decomposition, verification before any claim. Every single row shows up in both projects, in the exact same order, despite the fact that a power module and an elderly compliance device share basically nothing else. The overlap itself is the evidence. The same researcher, applying the same discipline, produced structurally identical research designs in two fields that have almost nothing else in common.
-->

---
layout: default
background: '#FAF9F5'
class: px-20 py-14
---

<div class="w-full h-full flex flex-col">

<div class="mb-8">
<p class="eyebrow mb-2">Limitations</p>
<h1 class="serif text-[1.7rem] ink leading-snug max-w-3xl" style="font-weight:500">Limits of the process and the role of judgment</h1>
<div class="title-rule w-14 mt-4"></div>
</div>

<div class="flex-1 flex flex-col justify-between">

<div class="grid grid-cols-2 gap-16">
<div class="pr-8" style="border-right:1px solid var(--line)">
<div class="flex items-center gap-1.5 mb-3">
  <div class="i-lucide:circle-check text-xs accent"></div>
  <p class="eyebrow">Tools reliably handle</p>
</div>
<div class="flex flex-col gap-2 text-sm ink">
<p>Boilerplate scripting and file I/O</p>
<p>Parsing simulation logs into structured tables</p>
<p>Re-ranking literature by relevance</p>
</div>
</div>
<div class="pl-8">
<div class="flex items-center gap-1.5 mb-3">
  <div class="i-lucide:user-check text-xs ink"></div>
  <p class="eyebrow">Judgment still required</p>
</div>
<div class="flex flex-col gap-2 text-sm ink">
<p>Whether a result is physically plausible</p>
<p>Which model or mesh setup fits the problem</p>
<p>Whether hardware or human-subjects testing, not just simulation, is needed</p>
</div>
</div>
</div>

<div class="pt-6 mt-6" style="border-top:1px solid var(--line)">
<p class="eyebrow mb-3">Current limits and what comes next</p>
<div class="grid grid-cols-3 gap-8">
<p class="text-sm muted leading-relaxed"><span class="ink font-medium">Thesis is simulation-only</span>; next: fabricate the module and run double-pulse tests</p>
<p class="text-sm muted leading-relaxed"><span class="ink font-medium">No busbar or thermal model</span>; next: extend geometry and add coupled thermal analysis</p>
<p class="text-sm muted leading-relaxed"><span class="ink font-medium">KINTO Phases 2–3 pending</span>; next: digital interface testing, then clinical baseline validation</p>
</div>
</div>

</div>

<p class="footer-note">Final Presentation · 20 / 21</p>

</div>

<!--
I want to be clear about where tools, AI included, are actually reliable and where they are not. Boilerplate scripting, parsing simulation logs into clean tables, re-ranking literature by relevance, tools handle all of that well. But whether a result is physically plausible, which model or mesh setup actually fits the problem, and whether you need real hardware or human subjects testing instead of just simulation, that is still judgment, and it is still mine to make. Concretely, the thesis results are still simulation-only, with no busbar or thermal model yet, so the next steps are fabrication and double-pulse testing. KINTO has only completed Phase 1, so Phases 2 and 3, the digital interface and the clinical validation, are still ahead.
-->

---
layout: center
background: '#FAF9F5'
class: px-24 text-left
---

<div class="w-full max-w-2xl flex flex-col gap-6">

<p class="eyebrow">Closing Reflection</p>

<p class="serif text-xl ink leading-relaxed" style="font-weight:500">
This course changed how research is conducted at every stage: how a question gets scoped, how evidence gets organized and judged, how an experiment gets built and how any output, AI-generated or not, gets checked before it is trusted. The same six habits produced a working simulation pipeline and a clinical-grade study design, in two fields that otherwise share nothing.
</p>

<p class="text-sm muted leading-relaxed">
The nineteen-point-five percent reduction in loop inductance, the invalid result caught before it became a claim and a study design built to withstand clinical scrutiny are measurable outcomes. The more durable one is a research process I can now repeat, defend and improve on the next problem, whatever field it's in.
</p>

<div class="rule w-16"></div>

<div class="flex flex-col gap-1">
<p class="text-sm muted">Raymond Tenorio Borres &middot; Research Skills P: AI &middot; Spring 2026</p>
<p class="text-sm ink">Thank you. Questions and discussion welcome.</p>
</div>

</div>

<!--
To close, this course did not just change how I use one tool. It changed how I scope a question, how I judge evidence, how I structure an experiment and how I check an output before I am willing to trust it, whether that output came from a person, a simulation or an AI model. The 19.5% reduction in loop inductance is a real result. The invalid result I caught before it became a false claim is arguably a more important one. And a KINTO study design built to actually withstand clinical scrutiny is evidence this generalizes beyond one project. The most durable outcome from this course is not any single number. It is a research process I can now repeat, defend and improve on whatever problem comes next. Thank you, and I am happy to take questions.
-->
