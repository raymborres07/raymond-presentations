---
theme: default
colorSchema: 'dark'
layout: cover
background: '#0B1319'
class: text-center
transition: fade
css: unocss
fonts:
  sans: 'Inter'
  serif: 'Playfair Display'
title: "How I can use ASReview to build a serious literature review"
---

<style>
.slidev-layout {
  overflow-y: auto !important;
}
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background: #10B98144;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #10B98188;
}
</style>

<div class="flex flex-col items-center justify-center h-full relative z-10 w-full px-8">

<div class="w-20 h-20 rounded-full bg-gradient-to-br from-[#10B981] to-[#0EA5E9] flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(16,185,129,0.5)] overflow-hidden">
<img src="/asreview-logo.png" class="w-full h-full object-contain p-3" />
</div>

<h1 class="text-4xl font-bold text-white mb-4 tracking-tight leading-tight">How I can use ASReview to build a serious literature review</h1>
  ASReview isn't "AI that writes papers." It's a tool that uses machine learning to help me sort through a massive pile of search results. It helps me find what's relevant so I can spend my time actually reading the papers that matter.

<div class="flex flex-col gap-3 text-left w-full max-w-2xl bg-[#111C24] border border-[#1E2E38] rounded-xl p-4 shadow-xl">
  <div class="flex items-start text-xs text-[#94A3B8]">
    <span><strong class="text-white">Uses active learning</strong> to show me the most relevant papers first while I'm screening.</span>
  </div>
  <div class="flex items-start text-xs text-[#94A3B8]">
    <span>Fits into a <strong class="text-white">regular literature review process</strong>—from searching to writing.</span>
  </div>
</div>

<div class="w-24 h-px bg-gradient-to-r from-transparent via-[#10B981] to-transparent mx-auto my-6"></div>
<p class="text-xs text-[#64748B]">Presenter: Raymond Tenorio Borres</p>

</div>

<div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-1 pointer-events-none">
<div class="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#10B981] opacity-[0.07] blur-[120px]"></div>
<div class="absolute bottom-[0%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[#0EA5E9] opacity-[0.05] blur-[150px]"></div>
</div>

---
layout: default
background: '#0B1319'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full">
<div class="mb-5">
<p class="text-[0.6rem] font-semibold text-[#10B981] tracking-[0.3em] uppercase mb-1">Section 1 – What ASReview actually does</p>
<h1 class="text-3xl font-bold text-white leading-tight">ASReview helps me screen, it doesn't write for me</h1>
</div>

<div class="grid grid-cols-[1fr_1.2fr] gap-6 flex-1 items-start">
<div class="flex flex-col gap-5">

<div class="bg-[#111C24] border-l-2 border-[#10B981] rounded-r-xl p-5 shadow-xl">
<p class="text-xs text-[#94A3B8] leading-relaxed">ASReview LAB is an <strong class="text-white">open‑source tool</strong> that helps me decide which papers are worth reading first.</p>
</div>

<div class="bg-[#111C24] border-l-2 border-[#0EA5E9] rounded-r-xl p-5 shadow-xl">
<p class="text-xs text-[#94A3B8] leading-relaxed"><strong class="text-white">I'm still the one making the decisions;</strong> the model just learns from my choices and re-orders the list so the best matches show up earlier.</p>
</div>

<div class="bg-gradient-to-br from-[#10B981]/10 to-transparent border border-[#10B981]/30 rounded-xl p-5 shadow-xl">
<h3 class="font-semibold text-[#6EE7B7] text-sm mb-2 flex items-center gap-2"><div class="i-lucide:compress text-[#10B981]"></div>The Bottom Line</h3>
<p class="text-xs text-[#94A3B8] leading-relaxed">Basically, ASReview <strong class="text-white">handles the tedious part</strong> of digging through search results, while I keep the final say on what's useful.</p>
</div>

</div>

<div class="flex flex-col gap-3">
<div class="bg-[#111C24] border border-[#1E2E38] rounded-xl overflow-hidden shadow-2xl">
  <img src="/asreview-concept.png" class="w-full h-48 object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" />
  <div class="w-full h-48 bg-[#0F172A] hidden items-center justify-center flex-col gap-2">
    <div class="i-lucide:image text-4xl text-[#1E293B]"></div>
    <p class="text-xs text-[#1E293B]">Placeholder: <code>asreview-concept.png</code></p>
  </div>
</div>
</div>
</div>
</div>

---
layout: default
background: '#0B1319'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full">
<div class="mb-4">
<p class="text-[0.6rem] font-semibold text-[#10B981] tracking-[0.3em] uppercase mb-1">Section 2</p>
<h1 class="text-2xl font-bold text-white leading-tight">The process: how I go from a mess of search results to a solid list of studies</h1>
</div>

<div class="grid grid-cols-4 gap-4 flex-1">

<!-- Step 1 -->
<div class="bg-[#111C24] border border-[#1E2E38] rounded-xl p-4 flex flex-col relative overflow-hidden">
<div class="absolute top-0 right-0 w-16 h-16 bg-[#10B981]/5 rounded-bl-full flex items-start justify-end p-3"><div class="text-[#10B981] font-bold opacity-30">01</div></div>
<h3 class="font-bold text-white text-xs mb-3 flex items-center gap-2"><div class="i-lucide:target text-[#10B981]"></div>Define Question</h3>
<div class="w-full h-24 mb-3 bg-[#0F172A] rounded border border-[#1E2E38] flex items-center justify-center overflow-hidden relative">
<img src="/step1-question.png" class="w-full h-full object-cover relative z-10" onerror="this.style.display='none'" />
<p class="text-[0.45rem] text-[#334155] absolute font-mono">step1-question.png</p>
</div>
<ul class="text-[0.55rem] text-[#94A3B8] space-y-2 list-none p-0">
<li><strong class="text-white">Start with a clear research question.</strong></li>
<li>Decide on your inclusion criteria (what counts as "relevant" before you even start).</li>
</ul>
<div class="mt-3 bg-[#0F172A] p-2 rounded border border-[#1E2E38] text-[0.45rem] text-[#38BDF8] italic">
Example: How are AI and optimization methods used to design and evaluate power modules (SiC/GaN) in terms of losses, thermal performance, and reliability?
</div>
</div>

<!-- Step 2 -->
<div class="bg-[#111C24] border border-[#1E2E38] rounded-xl p-4 flex flex-col relative overflow-hidden">
<div class="absolute top-0 right-0 w-16 h-16 bg-[#10B981]/5 rounded-bl-full flex items-start justify-end p-3"><div class="text-[#10B981] font-bold opacity-30">02</div></div>
<h3 class="font-bold text-white text-xs mb-3 flex items-center gap-2"><div class="i-lucide:database text-[#10B981]"></div>Build Dataset</h3>
<div class="w-full h-24 mb-3 bg-[#0F172A] rounded border border-[#1E2E38] flex items-center justify-center overflow-hidden relative">
<img src="/step2-dataset.png" class="w-full h-full object-cover relative z-10" onerror="this.style.display='none'" />
<p class="text-[0.45rem] text-[#334155] absolute font-mono">step2-dataset.png</p>
</div>
<ul class="text-[0.55rem] text-[#94A3B8] space-y-2 list-none p-0">
<li>Search IEEE Xplore, Scopus, or other databases with Boolean queries.</li>
<li>Export the search results (titles, abstracts, year, DOI).</li>
<li>Convert them into a single CSV.</li>
</ul>
<div class="mt-auto pt-2">
<p class="text-[0.45rem] text-[#64748B] mb-1">Snippet:</p>
<div class="bg-[#0F172A] p-2 rounded border border-[#1E2E38] text-[0.45rem] font-mono text-gray-300 break-all leading-tight">
title,abstract,year,doi,url,included<br>
"ML prediction of module lifetime...", "This paper applies ML...", 2024...
</div>
</div>
</div>

<!-- Step 3 -->
<div class="bg-[#111C24] border border-[#10B981]/40 rounded-xl p-4 flex flex-col relative overflow-hidden shadow-[0_0_15px_rgba(16,185,129,0.1)]">
<div class="absolute top-0 right-0 w-16 h-16 bg-[#10B981]/10 rounded-bl-full flex items-start justify-end p-3"><div class="text-[#10B981] font-bold opacity-50">03</div></div>
<h3 class="font-bold text-white text-xs mb-3 flex items-center gap-2"><div class="i-lucide:bot text-[#10B981]"></div>Screen (ASReview)</h3>
<div class="w-full h-24 mb-3 bg-[#0F172A] rounded border border-[#1E2E38] flex items-center justify-center overflow-hidden relative">
<img src="/step3-screen.png" class="w-full h-full object-cover relative z-10" onerror="this.style.display='none'" />
<p class="text-[0.45rem] text-[#334155] absolute font-mono">step3-screen.png</p>
</div>
<ul class="text-[0.55rem] text-[#94A3B8] space-y-2 list-none p-0">
<li>Upload the CSV into ASReview LAB.</li>
<li>Label each paper as relevant or not based on your criteria.</li>
<li><strong class="text-white">The model gets smarter as you go,</strong> showing you the most likely matches next.</li>
<li>Export the list once you're confident you've found the important ones.</li>
</ul>
</div>

<!-- Step 4 -->
<div class="bg-[#111C24] border border-[#1E2E38] rounded-xl p-4 flex flex-col relative overflow-hidden">
<div class="absolute top-0 right-0 w-16 h-16 bg-[#10B981]/5 rounded-bl-full flex items-start justify-end p-3"><div class="text-[#10B981] font-bold opacity-30">04</div></div>
<h3 class="font-bold text-white text-xs mb-3 flex items-center gap-2"><div class="i-lucide:pen-tool text-[#10B981]"></div>Turn to Review</h3>
<div class="w-full h-24 mb-3 bg-[#0F172A] rounded border border-[#1E2E38] flex items-center justify-center overflow-hidden relative">
<img src="/step4-review..png" class="w-full h-full object-cover relative z-10" onerror="this.style.display='none'" />
<p class="text-[0.45rem] text-[#334155] absolute font-mono">step4-review.png</p>
</div>
<p class="text-[0.5rem] text-[#38BDF8] italic mb-2">ASReview gives me a prioritized list of studies, not a finished review.</p>
<ul class="text-[0.55rem] text-[#94A3B8] space-y-1.5 list-none p-0">
<li>Filter to the included studies.</li>
<li>Extract the key info: device type, optimization target, methods, and findings.</li>
<li>Group the papers into themes (like thermal design or ML tools).</li>
<li><strong class="text-white">Actually structure and write the review.</strong></li>
</ul>
<p class="text-[0.5rem] text-[#6EE7B7] mt-auto">ASReview just makes getting to this point a whole lot faster.</p>
</div>

</div>
</div>

---
layout: default
background: '#0B1319'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full">
<div class="mb-6">
<p class="text-[0.6rem] font-semibold text-[#10B981] tracking-[0.3em] uppercase mb-1">Section 3 – Roles of each tool</p>
<h1 class="text-3xl font-bold text-white leading-tight">Who's doing what: from the papers to the AI help</h1>
</div>

<div class="grid grid-cols-3 gap-6 flex-1">

<div class="bg-[#111C24] border border-[#1E2E38] rounded-xl p-5 shadow-xl flex flex-col items-center text-center">
<div class="w-12 h-12 rounded-full bg-[#1E293B] flex items-center justify-center mb-4 border border-[#334155]">
<div class="i-lucide:server text-xl text-[#94A3B8]"></div>
</div>
<h3 class="font-bold text-white text-sm mb-3">Databases</h3>
<p class="text-[0.6rem] text-[#64748B] mb-2 font-mono">(IEEE, Scopus, etc.)</p>
<p class="text-xs text-[#94A3B8] leading-relaxed">Provide the actual scientific papers and metadata. This is where the evidence comes from.</p>
</div>

<div class="bg-[#111C24] border border-[#10B981]/50 rounded-xl p-5 shadow-[0_0_20px_rgba(16,185,129,0.15)] flex flex-col items-center text-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-b from-[#10B981]/5 to-transparent"></div>
<div class="w-12 h-12 rounded-full bg-[#10B981]/20 flex items-center justify-center mb-4 border border-[#10B981]/40 z-10">
<div class="i-lucide:bot text-xl text-[#10B981]"></div>
</div>
<h3 class="font-bold text-white text-sm mb-3 z-10">ASReview LAB</h3>
<p class="text-xs text-[#94A3B8] leading-relaxed z-10">Puts the most relevant papers at the top of the list so you can find them faster. It saves a lot of time, <strong class="text-white">but you're still the one making every choice.</strong></p>
</div>

<div class="bg-[#111C24] border border-[#0EA5E9]/30 rounded-xl p-5 shadow-xl flex flex-col items-center text-center relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-b from-[#0EA5E9]/5 to-transparent"></div>
<div class="w-12 h-12 rounded-full bg-[#0EA5E9]/20 flex items-center justify-center mb-4 border border-[#0EA5E9]/40 z-10">
<div class="i-lucide:sparkles text-xl text-[#0EA5E9]"></div>
</div>
<h3 class="font-bold text-white text-sm mb-3 z-10">AI Assistants</h3>
<p class="text-[0.6rem] text-[#64748B] mb-2 font-mono z-10">(Perplexity, ChatGPT, etc.)</p>
<p class="text-xs text-[#94A3B8] leading-relaxed z-10">Help with drafting search strings, cleaning up data, or summarizing papers—<strong class="text-[#38BDF8]">but they don't provide the actual evidence.</strong></p>
</div>

</div>

<div class="mt-6 bg-gradient-to-r from-[#10B981]/15 via-[#0EA5E9]/10 to-transparent border-l-4 border-[#10B981] p-4 rounded-r-xl">
<p class="text-xs text-[#E2E8F0] italic leading-relaxed text-center font-medium">
"I get the papers from databases, use ASReview to sort through them quickly, and use AI to help clean up the data—not to make things up."
</p>
</div>
</div>

---
layout: default
background: '#0B1319'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full">
<div class="mb-5">
<p class="text-[0.6rem] font-semibold text-[#10B981] tracking-[0.3em] uppercase mb-1">Section 4 – The "Synthesis Mode" Protocol</p>
<h1 class="text-3xl font-bold text-white leading-tight">Moving past simple summaries to actually connecting ideas</h1>
</div>

<div class="grid grid-cols-2 gap-8 flex-1">
<div class="bg-[#111C24] border border-[#EF4444]/30 rounded-xl p-5 relative overflow-hidden group hover:border-[#EF4444]/60 transition-all">
  <div class="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity"><div class="i-lucide:book-open text-6xl text-[#EF4444]"></div></div>
  <h3 class="text-[#F87171] font-bold text-sm mb-3 flex items-center gap-2"><div class="i-lucide:alert-circle"></div>Book-Report Mode (Bad)</h3>
  <ul class="text-[0.65rem] text-[#94A3B8] space-y-3 list-none p-0">
    <li class="flex gap-2"><div class="i-lucide:x-circle text-[#EF4444] mt-0.5"></div><span>Letting AI decide the outline (Generic "Background/Methods/Results")</span></li>
    <li class="flex gap-2"><div class="i-lucide:x-circle text-[#EF4444] mt-0.5"></div><span>Asking for "summaries" (shallow paragraphs)</span></li>
    <li class="flex gap-2"><div class="i-lucide:x-circle text-[#EF4444] mt-0.5"></div><span>Listing papers one by one (A said X, B said Y)</span></li>
  </ul>
</div>

<div class="bg-[#111C24] border border-[#10B981]/30 rounded-xl p-5 relative overflow-hidden group hover:border-[#10B981]/60 transition-all shadow-[0_0_20px_rgba(16,185,129,0.05)]">
  <div class="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity"><div class="i-lucide:database text-6xl text-[#10B981]"></div></div>
  <h3 class="text-[#34D399] font-bold text-sm mb-3 flex items-center gap-2"><div class="i-lucide:check-circle"></div>Synthesis Mode (Professional)</h3>
  <ul class="text-[0.65rem] text-[#94A3B8] space-y-3 list-none p-0">
    <li class="flex gap-2"><div class="i-lucide:check-circle text-[#10B981] mt-0.5"></div><span>Deciding on a few main themes you want to track before using any AI</span></li>
    <li class="flex gap-2"><div class="i-lucide:check-circle text-[#10B981] mt-0.5"></div><span>Turning papers into <strong>organized data</strong>—like a table where you can actually compare things</span></li>
    <li class="flex gap-2"><div class="i-lucide:check-circle text-[#10B981] mt-0.5"></div><span>Using AI to help find patterns, trends, and gaps across your data</span></li>
  </ul>
</div>
</div>
</div>

---
layout: default
background: '#0B1319'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full">
<div class="mb-4">
<p class="text-[0.6rem] font-semibold text-[#10B981] tracking-[0.3em] uppercase mb-1">Advanced Workflow</p>
<h1 class="text-2xl font-bold text-white leading-tight">5 ways to make sure you're using AI effectively for your research</h1>
</div>

<div class="grid grid-cols-5 gap-3 flex-1 mb-4">
<div class="bg-[#111C24] border border-[#1E2E38] rounded-lg p-3 flex flex-col items-center text-center">
  <div class="w-8 h-8 rounded-full bg-[#1E293B] flex items-center justify-center mb-2 text-[#10B981] text-sm font-bold">1</div>
  <h4 class="text-[0.6rem] font-bold text-white mb-1 uppercase">Set your own structure</h4>
  <p class="text-[0.5rem] text-[#94A3B8]">Decide on your own sections first based on the technology you're researching.</p>
</div>
<div class="bg-[#111C24] border border-[#1E2E38] rounded-lg p-3 flex flex-col items-center text-center">
  <div class="w-8 h-8 rounded-full bg-[#1E293B] flex items-center justify-center mb-2 text-[#10B981] text-sm font-bold">2</div>
  <h4 class="text-[0.6rem] font-bold text-white mb-1 uppercase">Pull out the facts</h4>
  <p class="text-[0.5rem] text-[#94A3B8]">Extract device types, methods, and results into an organized table.</p>
</div>
<div class="bg-[#111C24] border border-[#1E2E38] rounded-lg p-3 flex flex-col items-center text-center">
  <div class="w-8 h-8 rounded-full bg-[#1E293B] flex items-center justify-center mb-2 text-[#10B981] text-sm font-bold">3</div>
  <h4 class="text-[0.6rem] font-bold text-white mb-1 uppercase">Look for patterns</h4>
  <p class="text-[0.5rem] text-[#94A3B8]">Don't just summarize; look for trends and common findings across all the papers.</p>
</div>
<div class="bg-[#111C24] border border-[#1E2E38] rounded-lg p-3 flex flex-col items-center text-center">
  <div class="w-8 h-8 rounded-full bg-[#1E293B] flex items-center justify-center mb-2 text-[#10B981] text-sm font-bold">4</div>
  <h4 class="text-[0.6rem] font-bold text-white mb-1 uppercase">Check the work</h4>
  <p class="text-[0.5rem] text-[#94A3B8]">Critique the drafts. Are they too generic? Is something important missing?</p>
</div>
<div class="bg-[#111C24] border border-[#1E2E38] rounded-lg p-3 flex flex-col items-center text-center shadow-[0_0_15px_rgba(14,165,233,0.1)]">
  <div class="w-8 h-8 rounded-full bg-[#0EA5E9]/20 flex items-center justify-center mb-2 text-[#0EA5E9] text-sm font-bold">5</div>
  <h4 class="text-[0.6rem] font-bold text-white mb-1 uppercase">You're still in charge</h4>
  <p class="text-[0.5rem] text-[#94A3B8]">You verify the facts, pick the papers, and write the final argument yourself.</p>
</div>
</div>

<div class="bg-gradient-to-r from-[#10B981]/10 to-transparent border-l-4 border-[#10B981] p-3 rounded-r-lg">
<p class="text-[0.55rem] text-[#34D399] italic leading-tight">
  <strong>Key Result:</strong> AI helps you <u>encode</u> the literature into data, making synthesis a logical process rather than a creative writing exercise.
</p>
</div>
</div>

---
layout: default
background: '#0B1319'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full">
<div class="mb-6">
<p class="text-[0.6rem] font-semibold text-[#10B981] tracking-[0.3em] uppercase mb-1">Section 5</p>
<h1 class="text-3xl font-bold text-white leading-tight">Example: Applying this to my research on SiC Power Modules</h1>
</div>

<div class="grid grid-cols-[1.2fr_1fr] gap-6 flex-1 items-start">
<div class="flex flex-col gap-4">

<p class="text-xs text-[#94A3B8] leading-relaxed">
For my AI/ML power module optimization study, I use ASReview to screen papers about SiC/GaN modules, layout and inductance, thermal management, and reliability modeling.
</p>

<p class="text-xs text-[#94A3B8] leading-relaxed">
The search results can easily run into hundreds of records across multiple databases, so manually reading everything in a random order would be painful.
</p>

<div class="bg-[#111C24] border-l-2 border-[#10B981] p-4 shadow-xl">
<p class="text-xs text-white leading-relaxed font-medium">
By putting the combined search results into ASReview and labeling a few, I quickly get to the subset of studies that actually talk about optimization methods and performance improvements.
</p>
</div>

<p class="text-xs text-[#6EE7B7] italic leading-relaxed">
Those papers then go into my main table and, ultimately, help me write the literature review chapters of my thesis.
</p>

</div>

<div class="flex flex-col gap-4">
<h3 class="font-bold text-white text-sm mb-1 flex items-center gap-2"><div class="i-lucide:check-square text-[#10B981]"></div>Key Outcomes</h3>

<div class="bg-[#111C24] border border-[#1E2E38] rounded-xl p-4 shadow-xl flex items-start gap-3 hover:border-[#10B981]/40 transition-colors">
<div class="i-lucide:eye-off text-[#10B981] mt-0.5 flex-shrink-0"></div>
<p class="text-xs text-[#94A3B8]"><strong class="text-white">Fewer irrelevant papers</strong> to read in depth.</p>
</div>

<div class="bg-[#111C24] border border-[#1E2E38] rounded-xl p-4 shadow-xl flex items-start gap-3 hover:border-[#10B981]/40 transition-colors">
<div class="i-lucide:file-symlink text-[#10B981] mt-0.5 flex-shrink-0"></div>
<p class="text-xs text-[#94A3B8]"><strong class="text-white">More transparent decisions</strong> (exportable labels).</p>
</div>

<div class="bg-[#111C24] border border-[#1E2E38] rounded-xl p-4 shadow-xl flex items-start gap-3 hover:border-[#10B981]/40 transition-colors">
<div class="i-lucide:refresh-cw text-[#10B981] mt-0.5 flex-shrink-0"></div>
<p class="text-xs text-[#94A3B8]"><strong class="text-white">Easier to update the review</strong> when new papers are published: I can add them to the dataset and let ASReview re‑rank.</p>
</div>

</div>
</div>
</div>

---
layout: center
background: '#0B1319'
class: text-center px-16
---

<div class="flex flex-col items-center justify-center h-full relative z-10">
<div class="w-16 h-16 rounded-full bg-gradient-to-br from-[#10B981] to-[#0EA5E9] flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(16,185,129,0.5)] overflow-hidden">
<img src="/asreview-logo.png" class="w-full h-full object-contain p-2" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" />
<div class="i-lucide:bot text-3xl text-white hidden"></div>
</div>

<h1 class="text-3xl font-bold text-white mb-6">Key Takeaways</h1>

<div class="grid grid-cols-2 gap-6 w-full text-left relative z-10">
<div class="bg-[#111C24] border border-[#1E2E38] rounded-xl p-5 shadow-2xl">
  <h3 class="text-[#10B981] font-bold text-xs mb-3 uppercase tracking-wider">ASReview's Role</h3>
  <p class="text-[0.6rem] text-[#94A3B8] leading-relaxed">
    Saves time by putting the most relevant papers at the top of the list. It keeps you in control while saving you from hours of manual sifting.
  </p>
</div>
<div class="bg-[#111C24] border border-[#1E2E38] rounded-xl p-5 shadow-2xl">
  <h3 class="text-[#0EA5E9] font-bold text-xs mb-3 uppercase tracking-wider">Synthesis Strategy</h3>
  <p class="text-[0.6rem] text-[#94A3B8] leading-relaxed">
    Don't ask for summaries. Use AI to extract structured data, compare trends across papers, and critique evidence—ensuring your review has depth and rigor.
  </p>
</div>
</div>

<p class="text-[#6EE7B7] text-lg mt-8">Making the literature review process more rigorous</p>

<div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-1 pointer-events-none">
<div class="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#10B981] opacity-[0.07] blur-[120px]"></div>
<div class="absolute bottom-[0%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[#0EA5E9] opacity-[0.05] blur-[150px]"></div>
</div>
</div>
