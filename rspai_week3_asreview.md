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
title: "Accelerating Screening with ASReview"
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

<div class="flex flex-col items-center justify-center h-full relative z-10 w-full">

<div class="w-20 h-20 rounded-full bg-gradient-to-br from-[#10B981] to-[#0EA5E9] flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(16,185,129,0.5)] overflow-hidden">
<img src="/asreview-logo.png" class="w-full h-full object-contain p-3" />
</div>

<h1 class="text-5xl font-bold text-white mb-2 tracking-tight">ASReview</h1>
<p class="text-xl text-[#6EE7B7] mb-1 font-light tracking-widest uppercase">Open-Source Active Learning</p>
<div class="w-24 h-px bg-gradient-to-r from-transparent via-[#10B981] to-transparent mx-auto my-6"></div>
<p class="text-base text-[#93C5FD] font-light">Research Skills P: AI — Week 3 Homework</p>
<p class="text-sm text-[#94A3B8] mt-2">Presenter: Raymond Tenorio Borres</p>

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
<p class="text-[0.6rem] font-semibold text-[#10B981] tracking-[0.3em] uppercase mb-1">Getting Started</p>
<h1 class="text-3xl font-bold text-white leading-tight">Simple Setup & Workflow</h1>
</div>

<div class="grid grid-cols-2 gap-8 flex-1">
<div class="flex flex-col gap-4">
<div class="bg-[#111C24] border border-[#1E2E38] rounded-xl p-5 shadow-xl">
<h3 class="font-bold text-white text-sm mb-3 flex items-center gap-2"><div class="i-lucide:terminal text-[#10B981]"></div>One-Command Setup</h3>
<p class="text-xs text-[#94A3B8] mb-3">ASReview is a Python package that can be installed via pip and runs locally in your browser.</p>
<div class="bg-[#0F172A] rounded-lg p-3 font-mono text-[0.65rem] text-[#38BDF8] border border-[#1E2E38]">
<p class="mb-1 text-[#64748B]"># Install the software</p>
<p class="text-white mb-3">pip install asreview</p>
<p class="mb-1 text-[#64748B]"># Launch the web interface</p>
<p class="text-white">asreview lab</p>
</div>
</div>

<div class="bg-[#111C24] border border-[#1E2E38] rounded-xl p-5 shadow-xl">
<h3 class="font-bold text-white text-sm mb-3 flex items-center gap-2"><div class="i-lucide:layers text-[#10B981]"></div>The 4-Step Workflow</h3>
<div class="space-y-2">
<div class="flex items-center gap-3">
<div class="w-5 h-5 rounded-full bg-[#10B981]/20 text-[#10B981] text-[0.5rem] flex items-center justify-center font-bold">1</div>
<p class="text-xs text-[#94A3B8]">Import your dataset (RIS, CSV, Excel)</p>
</div>
<div class="flex items-center gap-3">
<div class="w-5 h-5 rounded-full bg-[#10B981]/20 text-[#10B981] text-[0.5rem] flex items-center justify-center font-bold">2</div>
<p class="text-xs text-[#94A3B8]">Label a few "Prior Knowledge" papers</p>
</div>
<div class="flex items-center gap-3">
<div class="w-5 h-5 rounded-full bg-[#10B981]/20 text-[#10B981] text-[0.5rem] flex items-center justify-center font-bold">3</div>
<p class="text-xs text-[#94A3B8]">Start screening (AI re-ranks as you go)</p>
</div>
<div class="flex items-center gap-3">
<div class="w-5 h-5 rounded-full bg-[#10B981]/20 text-[#10B981] text-[0.5rem] flex items-center justify-center font-bold">4</div>
<p class="text-xs text-[#94A3B8]">Export your high-relevance collection</p>
</div>
</div>
</div>
</div>

<div class="flex flex-col gap-4">
<div class="bg-[#111C24] border border-[#1E2E38] rounded-xl overflow-hidden shadow-2xl flex-1">
<div class="bg-[#15232D] px-4 py-2 flex items-center gap-2 border-b border-[#1E2E38]">
<span class="text-[0.5rem] text-[#64748B] font-mono">Setup Terminal</span>
</div>
<div class="w-full h-full min-h-40 bg-[#0F172A] flex items-center justify-center flex-col gap-2 relative">
<img src="/asreview-setup.png" class="absolute inset-0 w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" />
<div class="hidden flex-col items-center gap-2">
<div class="i-lucide:terminal text-3xl text-[#1E293B]"></div>
<p class="text-[0.5rem] text-[#1E293B]">Placeholder: <code>asreview-setup.png</code></p>
</div>
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
<div class="mb-5">
<p class="text-[0.6rem] font-semibold text-[#10B981] tracking-[0.3em] uppercase mb-1">What is it?</p>
<h1 class="text-3xl font-bold text-white leading-tight">ASReview: Active Learning AI</h1>
</div>

<div class="grid grid-cols-2 gap-5 flex-1">
<div class="flex flex-col gap-4">
<div class="bg-[#111C24] border border-[#1E2E38] rounded-xl p-5 shadow-xl">
<div class="flex items-center mb-3">
<div class="w-9 h-9 rounded-lg bg-gradient-to-br from-[#10B981] to-[#0EA5E9] flex items-center justify-center mr-3 shadow-lg">
<div class="i-lucide:unlock text-lg text-white"></div>
</div>
<h3 class="font-bold text-white text-sm">100% Free & Open Source</h3>
</div>
<p class="text-xs text-[#94A3B8] leading-relaxed">Unlike freemium tools, ASReview is a completely <strong class="text-white">open-source and free</strong> software designed by researchers, for researchers. No paywalls, no limits on the number of papers.</p>
</div>

<div class="bg-[#111C24] border border-[#1E2E38] rounded-xl p-5 shadow-xl">
<div class="flex items-center mb-3">
<div class="w-9 h-9 rounded-lg bg-[#15232D] border border-[#0EA5E9]/40 flex items-center justify-center mr-3">
<div class="i-lucide:cpu text-lg text-[#38BDF8]"></div>
</div>
<h3 class="font-bold text-white text-sm">Active Machine Learning</h3>
</div>
<p class="text-xs text-[#94A3B8] leading-relaxed">Instead of static keyword searches, it uses an <strong class="text-white">Active Learning model</strong>. It learns continuously from your labeling decisions ("relevant" vs "irrelevant") and re-ranks the remaining papers in real-time.</p>
</div>
</div>

<div class="flex flex-col gap-3">
<div class="bg-gradient-to-br from-[#10B981]/10 to-transparent border border-[#10B981]/30 rounded-xl p-4 shadow-xl">
<h3 class="font-semibold text-[#6EE7B7] text-sm mb-3 flex items-center"><div class="i-lucide:sparkles text-sm mr-2 text-[#10B981]"></div>Core Capabilities</h3>
<div class="space-y-2">
<div class="flex items-start text-xs text-[#94A3B8]"><div class="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-1.5 mr-2 flex-shrink-0"></div><span><strong class="text-white">Researcher-In-The-Loop (RITL)</strong> — you act as the oracle, the AI assists.</span></div>
<div class="flex items-start text-xs text-[#94A3B8]"><div class="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-1.5 mr-2 flex-shrink-0"></div><span><strong class="text-white">Customizable Models</strong> — choose different feature extractors and classifiers (Naive Bayes, SVM, Neural Nets).</span></div>
<div class="flex items-start text-xs text-[#94A3B8]"><div class="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-1.5 mr-2 flex-shrink-0"></div><span><strong class="text-white">Simulation Mode</strong> — test AI model performance on already labeled datasets.</span></div>
<div class="flex items-start text-xs text-[#94A3B8]"><div class="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-1.5 mr-2 flex-shrink-0"></div><span><strong class="text-white">Full Transparency</strong> — logs every decision for perfectly reproducible methodology.</span></div>
</div>
</div>
<div class="bg-[#111C24] border border-[#1E2E38] rounded-xl p-3 flex items-center gap-3">
<div class="i-lucide:bar-chart-3 text-2xl text-[#10B981]"></div>
<p class="text-xs text-[#94A3B8]">Proven to reduce workload and screening time by up to <strong class="text-white">95%</strong>.</p>
</div>

<div class="bg-[#111C24] border border-[#1E2E38] rounded-xl overflow-hidden shadow-2xl mt-auto">
  <img src="/asreview-concept.png" class="w-full h-32 object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" />
  <div class="w-full h-32 bg-[#0F172A] hidden items-center justify-center flex-col gap-1 border-t border-[#1E2E38]">
    <div class="i-lucide:image text-xl text-[#1E293B]"></div>
    <p class="text-[0.5rem] text-[#1E293B]">Placeholder: <code>asreview-concept.png</code></p>
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
<div class="mb-5">
<p class="text-[0.6rem] font-semibold text-[#10B981] tracking-[0.3em] uppercase mb-1">How it helps everyone</p>
<h1 class="text-3xl font-bold text-white leading-tight">Why the Open Source Community Loves It</h1>
</div>

<div class="grid grid-cols-3 gap-4 mb-4">
<div class="bg-[#111C24] border border-[#1E2E38] rounded-xl p-4 shadow-xl hover:border-[#10B981]/40 transition-colors">
<div class="w-10 h-10 rounded-lg bg-gradient-to-br from-[#10B981] to-[#0EA5E9] flex items-center justify-center mb-3 shadow-lg">
<div class="i-lucide:fast-forward text-lg text-white"></div>
</div>
<h3 class="font-bold text-white text-sm mb-2">Drastic Time Reduction</h3>
<p class="text-xs text-[#64748B] leading-relaxed">Systematic reviews often require screening thousands of abstracts. ASReview surfaces the relevant ones almost immediately.</p>
</div>

<div class="bg-[#111C24] border border-[#1E2E38] rounded-xl p-4 shadow-xl hover:border-[#10B981]/40 transition-colors">
<div class="w-10 h-10 rounded-lg bg-[#15232D] border border-[#10B981]/40 flex items-center justify-center mb-3">
<div class="i-lucide:check-circle text-lg text-[#6EE7B7]"></div>
</div>
<h3 class="font-bold text-white text-sm mb-2">Eliminates Bias</h3>
<p class="text-xs text-[#64748B] leading-relaxed">Human screeners get fatigued. The active learning model remains objective and consistent across 10,000+ papers.</p>
</div>

<div class="bg-[#111C24] border border-[#1E2E38] rounded-xl p-4 shadow-xl hover:border-[#10B981]/40 transition-colors">
<div class="w-10 h-10 rounded-lg bg-[#15232D] border border-[#10B981]/40 flex items-center justify-center mb-3">
<div class="i-lucide:lock-open text-lg text-[#6EE7B7]"></div>
</div>
<h3 class="font-bold text-white text-sm mb-2">Data Privacy & Control</h3>
<p class="text-xs text-[#64748B] leading-relaxed">Since it's open source, you can run it locally. Your data, research focus, and proprietary datasets never leave your machine.</p>
</div>
</div>

<div class="grid grid-cols-2 gap-4">
<div class="bg-gradient-to-r from-[#10B981]/10 to-transparent border border-[#10B981]/30 rounded-xl p-4">
<h3 class="font-semibold text-[#6EE7B7] text-sm mb-2 flex items-center"><div class="i-lucide:database text-sm mr-2"></div>For Data-Heavy Fields</h3>
<p class="text-xs text-[#64748B]">Medical, Engineering, and ML fields publish at rapid rates. Traditional methods can't keep up with the volume; Active Learning is required to filter the noise.</p>
</div>
<div class="bg-gradient-to-r from-[#0EA5E9]/10 to-transparent border border-[#0EA5E9]/30 rounded-xl p-4">
<h3 class="font-semibold text-[#BAE6FD] text-sm mb-2 flex items-center"><div class="i-lucide:share-2 text-sm mr-2"></div>For Transparent Science</h3>
<p class="text-xs text-[#64748B]">When you publish a review, you can share your ASReview state file. Anyone can reproduce the exact AI methodology and see precisely how papers were ranked.</p>
</div>
</div>

<div class="bg-[#111C24] border border-[#1E2E38] rounded-xl overflow-hidden shadow-2xl mt-4">
  <img src="/asreview-interface.png" class="w-full h-32 object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" />
  <div class="w-full h-32 bg-[#0F172A] hidden items-center justify-center flex-col gap-1">
    <div class="i-lucide:layout text-xl text-[#1E293B]"></div>
    <p class="text-[0.5rem] text-[#1E293B]">Placeholder: <code>asreview-interface.png</code></p>
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
<p class="text-[0.6rem] font-semibold text-[#10B981] tracking-[0.3em] uppercase mb-1">Personal Use Case</p>
<h1 class="text-3xl font-bold text-white leading-tight">Optimization ML for SiC Power Modules</h1>
</div>

<div class="grid grid-cols-[1.2fr_1fr] gap-6 flex-1 items-start">
<div class="flex flex-col gap-3">
<p class="text-sm text-[#94A3B8] leading-relaxed mb-1">My research requires sifting through thousands of engineering papers spanning thermal dynamics, semiconductor physics, and machine learning algorithms.</p>

<div class="bg-[#111C24] border-l-2 border-[#10B981] rounded-r-xl p-4 shadow-xl">
<h3 class="font-bold text-white text-sm mb-1 flex items-center"><div class="w-5 h-5 rounded-full bg-[#10B981] text-white text-[0.55rem] flex items-center justify-center mr-2 flex-shrink-0 font-bold">1</div>Importing the Bulk Data</h3>
<p class="text-xs text-[#64748B] leading-relaxed ml-7">I can export a massive RIS file from IEEE Xplore containing 5,000+ papers on "SiC Power Modules" and feed it into ASReview.</p>
</div>
<div class="bg-[#111C24] border-l-2 border-[#10B981] rounded-r-xl p-4 shadow-xl">
<h3 class="font-bold text-white text-sm mb-1 flex items-center"><div class="w-5 h-5 rounded-full bg-[#10B981] text-white text-[0.55rem] flex items-center justify-center mr-2 flex-shrink-0 font-bold">2</div>Warming Up the ML Model</h3>
<p class="text-xs text-[#64748B] leading-relaxed ml-7">I provide 3-5 "prior knowledge" papers that perfectly align with my specific focus: <strong class="text-[#38BDF8]">Machine Learning applied to SiC thermal optimization</strong>. The model learns these specific feature vectors.</p>
</div>
<div class="bg-[#111C24] border-l-2 border-[#10B981] rounded-r-xl p-4 shadow-xl">
<h3 class="font-bold text-white text-sm mb-1 flex items-center"><div class="w-5 h-5 rounded-full bg-[#10B981] text-white text-[0.55rem] flex items-center justify-center mr-2 flex-shrink-0 font-bold">3</div>The "Researcher-in-the-Loop" Phase</h3>
<p class="text-xs text-[#64748B] leading-relaxed ml-7">ASReview presents me with the abstract it thinks is most relevant. I click "Relevant" or "Irrelevant". The model immediately retrains. Within 50 clicks, it has successfully pushed all the highly specific ML-SiC optimization papers to the top of the 5,000-paper pile.</p>
</div>
</div>

<div class="flex flex-col gap-3">
<div class="bg-[#111C24] border border-[#1E2E38] rounded-xl overflow-hidden shadow-2xl">
<div class="bg-[#15232D] px-4 py-2 flex items-center gap-2 border-b border-[#1E2E38]">
<div class="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
<div class="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
<div class="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
<span class="text-[0.5rem] text-[#64748B] ml-2 font-mono">localhost:5000 / ASReview LAB</span>
</div>
<div class="w-full h-40 bg-[#0F172A] flex items-center justify-center flex-col gap-2 relative overflow-hidden">
  <div class="absolute w-full h-full opacity-20 bg-[linear-gradient(#1E293B_1px,transparent_1px),linear-gradient(90deg,#1E293B_1px,transparent_1px)] bg-[size:20px_20px]"></div>
  <div class="i-lucide:activity text-4xl text-[#38BDF8] z-10"></div>
  <p class="text-xs text-[#38BDF8] z-10 font-mono">TRAINING ACTIVE LEARNING MODEL...</p>
</div>
</div>
<div class="bg-gradient-to-br from-[#10B981]/10 to-transparent border border-[#10B981]/30 rounded-xl p-4">
<h3 class="font-semibold text-[#6EE7B7] text-xs mb-2 flex items-center gap-2"><div class="i-lucide:lightbulb text-sm text-[#10B981]"></div>Machine Learning for Machine Learning</h3>
<p class="text-xs text-[#64748B] italic">"It is incredibly fitting to use a Machine Learning application (Active Learning) to streamline my literature review on Machine Learning algorithms for SiC hardware."</p>
</div>

<!-- Real screenshot placeholder -->
<div class="bg-[#111C24] border border-[#1E2E38] rounded-xl overflow-hidden shadow-2xl mt-2">
  <img src="/asreview-my-research.png" class="w-full h-24 object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" />
  <div class="w-full h-24 bg-[#0F172A] hidden items-center justify-center flex-col gap-1">
    <div class="i-lucide:microscope text-xl text-[#1E293B]"></div>
    <p class="text-[0.5rem] text-[#1E293B]">Placeholder: <code>asreview-my-research.png</code></p>
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
<p class="text-[0.6rem] font-semibold text-[#10B981] tracking-[0.3em] uppercase mb-1">The Core Value</p>
<h1 class="text-3xl font-bold text-white leading-tight">Finding the Needle in the Haystack</h1>
</div>

<div class="grid grid-cols-[1fr_1fr] gap-5 flex-1">
<div class="flex flex-col gap-4">
<p class="text-sm text-[#94A3B8]">In highly specialized fields like SiC Power Module Optimization, broad keyword searches yield too much noise (generic thermal studies). ASReview cuts through this dynamically.</p>

<div class="bg-[#111C24] border border-[#1E2E38] rounded-xl p-4 shadow-xl">
<h3 class="text-sm font-bold text-white mb-3 flex items-center gap-2"><div class="i-lucide:refresh-cw text-[#10B981]"></div>The Active Learning Cycle</h3>
<div class="space-y-2.5">
<div class="flex items-start gap-3">
<div class="w-6 h-6 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
<div class="i-lucide:book-open text-xs text-[#10B981]"></div>
</div>
<p class="text-xs text-[#64748B]"><strong class="text-[#6EE7B7]">Present:</strong> The AI shows you the abstract with the highest calculated probability of being relevant based on current weights.</p>
</div>
<div class="flex items-start gap-3">
<div class="w-6 h-6 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
<div class="i-lucide:user-check text-xs text-[#10B981]"></div>
</div>
<p class="text-xs text-[#64748B]"><strong class="text-[#6EE7B7]">Label:</strong> You apply your domain expertise to make a binary decision (Yes/No).</p>
</div>
<div class="flex items-start gap-3">
<div class="w-6 h-6 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
<div class="i-lucide:cpu text-xs text-[#10B981]"></div>
</div>
<p class="text-xs text-[#64748B]"><strong class="text-[#6EE7B7]">Learn & Rank:</strong> The model extracts features (TF-IDF, word embeddings) from your decision, adjusts its weights, and instantly re-sorts the thousands of remaining unseen papers.</p>
</div>
</div>
</div>
</div>

<div class="flex flex-col gap-3">
<div class="bg-[#111C24] border border-[#1E2E38] rounded-xl overflow-hidden shadow-2xl p-4">
<h4 class="text-xs font-semibold text-white mb-2 text-center">Stopping Criterion: When to stop?</h4>
<div class="w-full h-32 flex items-end justify-between px-4 pb-2 border-b border-l border-[#1E2E38] relative">
  <div class="absolute left-0 bottom-0 w-full h-[2px] bg-[#1E2E38]"></div>
  <div class="absolute left-0 bottom-0 w-[2px] h-full bg-[#1E2E38]"></div>
  <!-- Simulated chart -->
  <div class="w-1/6 bg-[#10B981] h-[90%] rounded-t-sm opacity-80"></div>
  <div class="w-1/6 bg-[#10B981] h-[70%] rounded-t-sm opacity-80"></div>
  <div class="w-1/6 bg-[#10B981] h-[40%] rounded-t-sm opacity-80"></div>
  <div class="w-1/6 bg-[#10B981] h-[15%] rounded-t-sm opacity-80"></div>
  <div class="w-1/6 bg-red-500/50 h-[5%] rounded-t-sm opacity-80"></div>
  <div class="w-1/6 bg-red-500/50 h-[2%] rounded-t-sm opacity-80"></div>
</div>
<p class="text-[0.6rem] text-[#64748B] text-center mt-2">Relevant papers found over time. You stop reviewing when you hit a streak of irrelevant papers, confidently skipping the rest of the dataset.</p>
</div>

<div class="bg-gradient-to-r from-[#10B981]/15 to-transparent border border-[#10B981]/30 rounded-xl p-4">
<h4 class="text-xs font-semibold text-[#BAE6FD] mb-2 flex items-center gap-2"><div class="i-lucide:target text-[#0EA5E9]"></div>Impact on My Research</h4>
<p class="text-xs text-[#64748B]">This means I spend zero time reading irrelevant abstracts about basic silicon devices, and 100% of my time analyzing the cutting-edge ML optimization techniques I actually need.</p>
</div>

<div class="bg-[#111C24] border border-[#1E2E38] rounded-xl overflow-hidden shadow-2xl mt-2">
  <img src="/asreview-stopping-criterion.png" class="w-full h-24 object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" />
  <div class="w-full h-24 bg-[#0F172A] hidden items-center justify-center flex-col gap-1">
    <div class="i-lucide:trending-up text-xl text-[#1E293B]"></div>
    <p class="text-[0.5rem] text-[#1E293B]">Placeholder: <code>asreview-stopping-criterion.png</code></p>
  </div>
</div>

</div>
</div>
</div>

---
layout: center
background: '#0B1319'
class: text-center
---

<div class="flex flex-col items-center justify-center h-full relative z-10">
<div class="w-16 h-16 rounded-full bg-gradient-to-br from-[#10B981] to-[#0EA5E9] flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(16,185,129,0.5)]">
<div class="i-lucide:bot text-3xl text-white"></div>
</div>
<h1 class="text-4xl font-bold text-white mb-3">Thank You</h1>
<p class="text-[#6EE7B7] text-lg mb-8">Any Questions?</p>
<div class="w-20 h-px bg-gradient-to-r from-transparent via-[#10B981] to-transparent mx-auto mb-8"></div>

<div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-1 pointer-events-none">
<div class="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#10B981] opacity-[0.07] blur-[120px]"></div>
<div class="absolute bottom-[0%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[#0EA5E9] opacity-[0.05] blur-[150px]"></div>
</div>
</div>
