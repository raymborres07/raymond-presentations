---
theme: default
colorSchema: 'dark'
layout: cover
background: '#080E14'
class: text-center
transition: fade
css: unocss
fonts:
  sans: 'Inter'
  serif: 'Playfair Display'
title: "What This Course Changed in My Research: Applying Prompt Engineering to My Thesis Workflow"
---

<style>
.slidev-layout {
  overflow-y: auto !important;
}
.slidev-layout p {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background: #7C3AED44;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #7C3AED88;
}
</style>

<div class="flex flex-col items-center justify-center h-full relative z-10 w-full px-8">

<div class="flex items-center gap-3 mb-6">
  <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#0EA5E9] flex items-center justify-center shadow-[0_0_40px_rgba(124,58,237,0.4)] overflow-hidden">
    <div class="i-lucide:brain text-3xl text-white"></div>
  </div>
</div>

<div class="text-[0.55rem] font-bold text-[#A78BFA] tracking-[0.4em] uppercase mb-3">
  Research Skills P: AI · Final Presentation · July 2026
</div>

<h1 class="text-4xl font-bold text-white mb-3 tracking-tight leading-tight max-w-3xl font-sans">
  What This Course Changed in My Research
</h1>
<p class="text-xl text-[#38BDF8] mb-2 font-medium font-serif italic">
  Applying Prompt Engineering to My Thesis Workflow
</p>
<p class="text-xs text-[#94A3B8] max-w-xl leading-relaxed mb-8 font-sans">
  Moving from conversational AI usage to prompts as disciplined research instruments. A case study in machine-learning-driven wirebond optimization.
</p>

<div class="w-24 h-px bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent mx-auto my-4"></div>
<p class="text-xs text-[#64748B] font-sans">Presenter: Raymond Tenorio Borres</p>

</div>

<div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-1 pointer-events-none">
  <div class="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#7C3AED] opacity-[0.08] blur-[120px]"></div>
  <div class="absolute bottom-[0%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[#0EA5E9] opacity-[0.05] blur-[150px]"></div>
</div>

<!--
Good morning, colleagues and members of the faculty. Today, I am presenting my final synthesis for the Research Skills P: AI course. Rather than a standard recap of my midterm results, this presentation reflects on the methodological transformation that this course brought to my thesis. Specifically, it details how I transitioned from treating artificial intelligence as a casual conversational search engine to designing prompts as disciplined, structured, and auditable research instruments. I will demonstrate this paradigm shift using my actual thesis—Machine-Learning-Driven Wirebond Optimization—as the primary case study that proves this transfer of learning.
-->

---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full font-sans">
<div class="mb-4 font-serif font-sans">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5 font-sans">Introduction</p>
  <h1 class="text-2xl font-bold text-white leading-tight font-sans font-sans">Why this final presentation is different from my midterm</h1>
</div>
<div class="grid grid-cols-2 gap-6 flex-1 font-sans">
  <div class="flex flex-col gap-3 font-sans">
    <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-4 shadow-xl font-sans">
      <div class="flex items-center mb-2.5">
        <div class="w-7 h-7 rounded-lg bg-[#EF4444]/20 border border-[#EF4444]/40 flex items-center justify-center mr-2.5">
          <div class="i-lucide:activity text-xs text-[#F87171]"></div>
        </div>
        <h3 class="font-bold text-white text-xs font-sans">The Midterm: Output-Centric</h3>
      </div>
      <p class="text-[0.58rem] text-[#94A3B8] leading-relaxed mb-2 font-sans">
        Focused heavily on the physical engineering parameters, optimization setup, and numerical results of the wirebond loop inductance study.
      </p>
      <div class="bg-[#080E14] border border-[#1E2E38] rounded-lg p-2 font-mono text-[0.5rem] text-[#64748B] flex justify-between">
        <span>Target: 18.8% Inductance Reduction</span>
        <span class="text-[#EF4444]">Ad-hoc Process</span>
      </div>
    </div>
    <div class="bg-[#0F172A] border border-[#7C3AED]/30 rounded-xl p-4 shadow-[0_0_20px_rgba(124,58,237,0.1)] font-sans">
      <div class="flex items-center mb-2.5">
        <div class="w-7 h-7 rounded-lg bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center mr-2.5">
          <div class="i-lucide:git-branch text-xs text-[#A78BFA]"></div>
        </div>
        <h3 class="font-bold text-white text-xs font-sans font-sans">The Final: Process & Methodological Rigor</h3>
      </div>
      <p class="text-[0.58rem] text-[#94A3B8] leading-relaxed mb-2 font-sans">
        Focuses on the cognitive shift, research habits, and structured workflows that enabled those physical results to be generated reliably and reproducibly.
      </p>
      <div class="bg-[#080E14] border border-[#1E2E38] rounded-lg p-2 font-mono text-[0.5rem] text-[#7C3AED] flex justify-between">
        <span>Focus: Prompt Engineering & Logic</span>
        <span class="text-[#A78BFA]">Systematic Method</span>
      </div>
    </div>
  </div>
  <div class="flex flex-col justify-between bg-gradient-to-br from-[#111C24] to-[#0F172A] border border-[#1E2E38] rounded-xl p-5 shadow-2xl font-sans">
    <div>
      <h3 class="text-xs font-bold text-white mb-2 flex items-center gap-1.5 font-sans">
        <div class="i-lucide:target text-[#38BDF8]"></div> Core Narrative Theme
      </h3>
      <p class="text-[0.62rem] text-[#94A3B8] leading-relaxed mb-3 font-sans">
        This deck presents my thesis not as an isolated engineering project, but as a <strong class="text-white">proof of transfer</strong>. It demonstrates how prompt engineering concepts—such as task decomposition, structured evidence schemas, and empirical validation—fundamentally restructured my everyday research habits.
      </p>
    </div>
    <div class="bg-[#0F172A] border border-[#1E2E38] p-3 rounded-lg font-sans">
      <p class="text-[0.58rem] text-[#38BDF8] font-semibold italic leading-relaxed text-center font-sans font-sans font-sans">
        "This course did not just teach me how to prompt. It taught me how to think more systematically, critically, and reproducibly as a researcher."
      </p>
    </div>
  </div>
</div>
</div>

<!--
To begin, I want to clarify the distinction between this presentation and my midterm. During the midterm, my focus was purely output-centric: I presented the physical metrics of my wirebond loop inductance optimization and the surrogate neural network's performance. That was the 'what.' Today, I am presenting the 'how.' This deck serves as a reflection on the process itself. I will show how the structured prompting protocols I learned in this course moved me away from ad-hoc, trial-and-error scripting and transformed my thesis into a case study of disciplined, systematic engineering research.
-->

---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full font-sans font-sans font-sans">
<div class="mb-4 font-serif">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5 font-sans font-sans font-sans">The Retrospective</p>
  <h1 class="text-2xl font-bold text-white leading-tight font-sans font-sans">My starting point: ad-hoc AI in research</h1>
</div>

<div class="grid grid-cols-4 gap-3.5 flex-1 items-stretch font-sans font-sans">
  <!-- Card 1 -->
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3 flex flex-col justify-between font-sans">
    <div>
      <div class="w-6 h-6 rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/30 flex items-center justify-center mb-2.5">
        <div class="i-lucide:search text-xs text-[#F87171]"></div>
      </div>
      <h4 class="text-[0.65rem] font-bold text-white uppercase tracking-wider mb-1.5 font-mono font-mono font-mono font-mono font-sans font-mono font-sans font-mono">Vague Scoping</h4>
      <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed font-sans">
        Asking general, conversational questions like <em>"how do I optimize power modules?"</em> which returned broad, non-actionable textbook definitions.
      </p>
    </div>
    <div class="mt-2 text-[0.45rem] font-mono text-[#F87171] bg-[#EF4444]/5 p-1.5 rounded border border-[#EF4444]/20 text-center font-sans font-sans font-mono">
      Conversational Querying
    </div>
  </div>

  <!-- Card 2 -->
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3 flex flex-col justify-between font-sans font-sans font-sans">
    <div>
      <div class="w-6 h-6 rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/30 flex items-center justify-center mb-2.5">
        <div class="i-lucide:git-merge text-xs text-[#F87171]"></div>
      </div>
      <h4 class="text-[0.65rem] font-bold text-white uppercase tracking-wider mb-1.5 font-mono font-mono font-mono font-mono font-sans font-mono font-sans font-mono font-sans font-mono">Late Organization</h4>
      <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed font-sans font-sans">
        Mapping literature sequentially as a checklist. Storing findings late in the process, resulting in missed structural connections and research gaps.
      </p>
    </div>
    <div class="mt-2 text-[0.45rem] font-mono text-[#F87171] bg-[#EF4444]/5 p-1.5 rounded border border-[#EF4444]/20 text-center font-sans font-sans font-mono">
      Linear Synthesizing
    </div>
  </div>

  <!-- Card 3 -->
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3 flex flex-col justify-between font-sans font-sans font-sans font-sans">
    <div>
      <div class="w-6 h-6 rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/30 flex items-center justify-center mb-2.5">
        <div class="i-lucide:eye-off text-xs text-[#F87171]"></div>
      </div>
      <h4 class="text-[0.65rem] font-bold text-white uppercase tracking-wider mb-1.5 font-mono font-mono font-mono font-mono font-sans font-mono font-sans font-mono font-sans font-mono font-sans font-mono">Fluency Bias</h4>
      <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed font-sans font-sans">
        Judging AI usefulness by the articulate, confident phrasing of the output rather than systematically checking the correctness of formulas or code.
      </p>
    </div>
    <div class="mt-2 text-[0.45rem] font-mono text-[#F87171] bg-[#EF4444]/5 p-1.5 rounded border border-[#EF4444]/20 text-center font-sans font-sans font-mono font-mono">
      Passive Trust
    </div>
  </div>

  <!-- Card 4 -->
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3 flex flex-col justify-between font-sans font-sans font-sans font-sans font-sans">
    <div>
      <div class="w-6 h-6 rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/30 flex items-center justify-center mb-2.5">
        <div class="i-lucide:cpu text-xs text-[#F87171]"></div>
      </div>
      <h4 class="text-[0.65rem] font-bold text-white uppercase tracking-wider mb-1.5 font-mono font-mono font-mono font-mono font-sans font-mono font-sans font-mono font-sans font-mono font-sans font-mono font-sans font-mono">Monolithic Coding</h4>
      <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed font-sans font-sans font-sans">
        Prompting for massive, multi-step scripts (e.g. <em>"write a python script to run ANSYS Q3D and train an NN"</em>), leading to immediate hallucinations.
      </p>
    </div>
    <div class="mt-2 text-[0.45rem] font-mono text-[#F87171] bg-[#EF4444]/5 p-1.5 rounded border border-[#EF4444]/20 text-center font-sans font-sans font-mono font-mono">
      Single-Prompt Attempts
    </div>
  </div>
</div>

<div class="mt-4 bg-gradient-to-r from-[#EF4444]/10 to-transparent border-l-2 border-[#EF4444] p-2 rounded-r-lg font-sans font-sans">
  <p class="text-[0.58rem] text-[#F87171] italic leading-tight text-center font-sans font-sans">
    Before the course, my research process was bottlenecked by unstructured interaction, placing too much trust in the fluency of the model rather than its verifiable logic.
  </p>
</div>
</div>

<!--
Let's look back at my starting point. When I first began integrating generative AI into my thesis workflow, my habits were unstructured. I would write vague, conversational prompts, asking for broad assistance on 'how to optimize power modules.' This inevitably resulted in generic explanations of EM theory that didn't help my coding. I organized my literature late, and suffered from 'fluency bias'—mistaking a beautifully written AI explanation for technical validity. Furthermore, I fell into the trap of monolithic prompting, asking the model to write entire PyAEDT automation scripts in a single shot, which failed immediately due to API mismatches and logic errors.
-->

---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full font-sans font-sans">
<div class="mb-4 font-serif">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5 font-sans font-sans font-sans font-sans font-sans">The Paradigm Shift</p>
  <h1 class="text-2xl font-bold text-white leading-tight font-sans font-sans">Prompts as formal research instruments</h1>
</div>
<div class="grid grid-cols-[1.1fr_1.9fr] gap-5 flex-1 items-start font-sans">
  <div class="flex flex-col gap-3 font-sans font-sans">
    <p class="text-[0.65rem] text-[#94A3B8] leading-relaxed font-sans font-sans">
      A prompt is not a simple query; it is a <strong class="text-white">highly specified instrument</strong> designed to extract auditable, reproducible, and bounded technical output.
    </p>
    <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-4 font-sans font-sans">
      <h4 class="text-xs font-bold text-white mb-2 flex items-center gap-1.5 font-sans font-sans font-sans">
        <div class="i-lucide:settings text-[#7C3AED] text-xs font-sans"></div> Empirical Evaluation
      </h4>
      <p class="text-[0.58rem] text-[#94A3B8] leading-relaxed font-sans font-sans">
        Prompt designs should be evaluated empirically just like hardware setups. We test prompt variations across multiple iterations to evaluate stability, correctness, and adherence to constraints.
      </p>
    </div>
  </div>
  <div class="grid grid-cols-2 gap-3.5 font-sans font-sans">
    <div class="bg-[#0F172A] border-l-2 border-[#7C3AED] p-3 rounded-r-xl font-sans font-sans font-sans">
      <h4 class="text-[0.62rem] font-bold text-[#A78BFA] uppercase mb-1 font-mono font-mono font-mono">1. Task & Context</h4>
      <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed font-sans font-sans font-sans font-sans font-sans">
        Explicitly define the expert persona (e.g. <em>"Power Electronics Engineer"</em>), specific simulator versions (<em>"ANSYS Q3D 2023 R1"</em>), and core physical objectives.
      </p>
    </div>
    <div class="bg-[#0F172A] border-l-2 border-[#7C3AED] p-3 rounded-r-xl font-sans font-sans font-sans">
      <h4 class="text-[0.62rem] font-bold text-[#A78BFA] uppercase mb-1 font-mono font-mono font-mono font-mono">2. Evidence & Scope</h4>
      <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed font-sans font-sans font-sans">
        Inject direct constraints, coordinate boundaries, API syntax definitions, or literature data, forcing the model to operate within verified bounds.
      </p>
    </div>
    <div class="bg-[#0F172A] border-l-2 border-[#7C3AED] p-3 rounded-r-xl font-sans font-sans font-sans font-sans">
      <h4 class="text-[0.62rem] font-bold text-[#A78BFA] uppercase mb-1 font-mono font-mono font-mono font-mono font-mono">3. Step-by-Step Procedure</h4>
      <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed font-sans font-sans font-sans">
        Enforce logical decomposition. Direct the model to generate intermediate mathematical steps, coordinate calculations, or logic schemas before writing final code.
      </p>
    </div>
    <div class="bg-[#0F172A] border-l-2 border-[#7C3AED] p-3 rounded-r-xl font-sans font-sans font-sans font-sans">
      <h4 class="text-[0.62rem] font-bold text-[#A78BFA] uppercase mb-1 font-mono font-mono font-mono font-mono font-mono">4. Uncertainty & Schema</h4>
      <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed font-sans font-sans font-sans">
        Demand structured outputs (e.g., JSON schemas or markdown tables) and explicitly instruct the model to state its assumptions, bounds, and confidence limits.
      </p>
    </div>
  </div>
</div>
</div>

<!--
The fundamental turning point in the course was learning to view prompts as formal research instruments. A prompt is not a conversation starter; it is a technical specification. If we look at the anatomy on the right, a robust prompt outlines the precise task and expert context, inputs exact evidence or syntax constraints, dictates a step-by-step reasoning procedure, and enforces a structured output schema that includes boundary uncertainties. We must evaluate prompt quality empirically—just as we would calibrate physical sensors—testing prompt variations to see if they yield stable, correct code across multiple execution runs.
-->

---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full font-sans font-sans">
<div class="mb-4">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5 font-sans">Workflow Codification</p>
  <h1 class="text-2xl font-bold text-white leading-tight font-sans">From prompts to skills: codifying reusable workflows</h1>
</div>
<div class="grid grid-cols-[1fr_1.2fr] gap-6 flex-1 items-start">
  <div class="flex flex-col gap-3 font-sans">
    <p class="text-[0.62rem] text-[#94A3B8] leading-relaxed font-sans">
      A prompt is a single transaction; an <strong class="text-white">AI Skill</strong> is a formal, packageable workflow unit that encodes a research protocol into a reusable tool.
    </p>
    <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-4 font-sans">
      <h3 class="font-bold text-white text-xs mb-2 flex items-center gap-1.5 font-sans">
        <div class="i-lucide:git-merge text-[#7C3AED] text-sm"></div> Mirroring Research Methods
      </h3>
      <p class="text-[0.58rem] text-[#94A3B8] leading-relaxed font-sans">
        Just as we define an experimental testing protocol once and apply it repeatedly to physical devices, we codify our AI interactions into modular skills to guarantee reproducibility and auditability.
      </p>
    </div>
  </div>
  <div class="bg-[#0F172A] border border-[#7C3AED]/30 rounded-xl p-4.5 shadow-2xl font-sans">
    <h3 class="font-bold text-white text-xs mb-3 flex items-center gap-1.5 font-sans font-sans">
      <div class="i-lucide:folder-open text-[#A78BFA] text-sm"></div> Anatomy of an AI Skill (Claude's Model)
    </h3>
    <div class="space-y-3 font-sans">
      <div class="flex items-start gap-2.5 border-b border-[#1E2E38] pb-2 font-sans">
        <div class="w-5 h-5 rounded bg-[#7C3AED]/20 flex items-center justify-center flex-shrink-0 mt-0.5 font-sans"><div class="i-lucide:file-code text-[#A78BFA] text-[0.65rem]"></div></div>
        <div>
          <p class="text-[0.58rem] font-semibold text-white font-sans">YAML Frontmatter (SKILL.md)</p>
          <p class="text-[0.5rem] text-[#94A3B8] font-sans">Contains the unique name and description. The description is critical because the AI uses it to match user intent and auto-activate the skill.</p>
        </div>
      </div>
      <div class="flex items-start gap-2.5 border-b border-[#1E2E38] pb-2 font-sans">
        <div class="w-5 h-5 rounded bg-[#7C3AED]/20 flex items-center justify-center flex-shrink-0 mt-0.5 font-sans"><div class="i-lucide:text-quote text-[#A78BFA] text-[0.65rem]"></div></div>
        <div>
          <p class="text-[0.58rem] font-semibold text-white font-sans">Markdown Instructions & Examples</p>
          <p class="text-[0.5rem] text-[#94A3B8] font-sans">Specifies detailed rules, edge cases, and typical inputs/outputs. Includes test cases to evaluate performance before and after uploading.</p>
        </div>
      </div>
      <div class="flex items-start gap-2.5 font-sans">
        <div class="w-5 h-5 rounded bg-[#7C3AED]/20 flex items-center justify-center flex-shrink-0 mt-0.5 font-sans"><div class="i-lucide:terminal text-[#A78BFA] text-[0.65rem]"></div></div>
        <div>
          <p class="text-[0.58rem] font-semibold text-white font-sans font-sans">Supporting Resources & Custom Scripts</p>
          <p class="text-[0.5rem] text-[#94A3B8] font-sans font-sans">Optional code templates or data files packaged alongside instructions in a ZIP folder to extend the model's physical execution capabilities.</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<!--
A major milestone in this course was learning to formalize one-off prompts into reusable AI skills. In Anthropic's model, a skill is a packageable directory containing a SKILL.md file. It starts with YAML frontmatter including a name and description, which is used by the system to dynamically activate the skill when needed. It contains markdown instructions, test examples, and optional scripts. This structured approach directly mirrors physical research: instead of setting up a new test bench every day, we write a standard testing protocol once, package it, and execute it reproducibly across our runs.
-->

---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full font-sans font-sans">
<div class="mb-4">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5 font-sans">Thesis Progression</p>
  <h1 class="text-2xl font-bold text-white leading-tight font-sans">Methodological transfer: how prompting progressed my thesis</h1>
</div>
<div class="grid grid-cols-2 gap-4.5 flex-1 items-stretch font-sans font-sans">
  <div class="flex flex-col gap-3 font-sans font-sans">
    <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3.5 shadow-xl font-sans">
      <h3 class="font-bold text-white text-xs mb-1.5 flex items-center gap-1.5 font-sans">
        <div class="i-lucide:book-open text-[#7C3AED] text-sm"></div> 1. Bounded Literature Queries
      </h3>
      <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed font-sans font-sans font-sans">
        Moving away from open-ended search requests. Prompt designs now inject verified source PDFs as direct context, forcing the AI to synthesize only from established evidence rather than inventing answers.
      </p>
    </div>
    <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3.5 shadow-xl font-sans">
      <h3 class="font-bold text-white text-xs mb-1.5 flex items-center gap-1.5 font-sans">
        <div class="i-lucide:edit-3 text-[#7C3AED] text-sm"></div> 2. Decomposed Technical Writing
      </h3>
      <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed font-sans font-sans">
        Deconstructing complex theoretical writing tasks (e.g. explaining parasitic loop inductance variations) into modular outline drafting, physical equations verification, and prose editing.
      </p>
    </div>
  </div>
  <div class="flex flex-col gap-3 font-sans font-sans">
    <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3.5 shadow-xl font-sans font-sans font-sans font-sans">
      <h3 class="font-bold text-white text-xs mb-1.5 flex items-center gap-1.5 font-sans">
        <div class="i-lucide:code text-[#38BDF8] text-sm"></div> 3. Bounded Script Generation
      </h3>
      <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed font-sans font-sans">
        Using specialized prompts to generate small, unit-testable functions for PyAEDT automation. Forcing strict coordinate boundaries and specific API versions inside the prompt context.
      </p>
    </div>
    <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3.5 shadow-xl font-sans font-sans font-sans font-sans">
      <h3 class="font-bold text-white text-xs mb-1.5 flex items-center gap-1.5 font-sans">
        <div class="i-lucide:shield-check text-[#38BDF8] text-sm"></div> 4. Empirical Verification Habits
      </h3>
      <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed font-sans font-sans">
        Treating AI-generated formulas, scripts, or summaries as draft hypotheses. Systematically verifying outputs against physical electromagnetic laws and simulator manuals before adoption.
      </p>
    </div>
  </div>
</div>
</div>

<!--
To show how this directly progressed my thesis work, let's look at the four research activities. First, I established bounded queries: instead of asking broad questions, I inject specific literature as evidence. Second, I decomposed my technical writing, splitting draft generation from mathematical verification. Third, I wrote modular prompts with coordinate bounds for PyAEDT scripting. Finally, I built empirical verification habits, treating every AI output as a draft hypothesis that must be validated against physics.
-->

---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full font-sans font-sans">
<div class="mb-4">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5 font-sans">Methodology</p>
  <h1 class="text-2xl font-bold text-white leading-tight font-sans font-sans">From vague inquiry to structured research workflow</h1>
</div>
<div class="grid grid-cols-4 gap-3.5 flex-1 items-stretch font-sans font-sans">
  <!-- Step 1 -->
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3.5 flex flex-col justify-between relative overflow-hidden font-sans">
    <div class="absolute top-0 right-0 w-12 h-12 bg-[#7C3AED]/5 rounded-bl-full flex items-start justify-end p-2 font-sans">
      <div class="text-[#A78BFA] font-bold opacity-30 text-xs font-mono font-mono font-mono font-mono">01</div>
    </div>
    <div>
      <h3 class="font-bold text-white text-[0.65rem] mb-2 flex items-center gap-1.5 font-sans font-sans">
        <div class="i-lucide:target text-[#7C3AED] text-xs font-sans"></div> Define Criteria
      </h3>
      <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed font-sans font-sans">
        Define the research boundary first. Establish explicit <strong class="text-white font-sans">inclusion and exclusion criteria</strong> for the domain parameters, code dependencies, and target metrics.
      </p>
    </div>
    <div class="mt-2 bg-[#080E14] p-1.5 rounded border border-[#1E2E38] text-[0.45rem] font-mono text-[#38BDF8] font-mono font-sans font-mono font-mono">
      Parameters: Parasitics, Inductance (nH), Geometry
    </div>
  </div>

  <!-- Step 2 -->
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3.5 flex flex-col justify-between relative overflow-hidden font-sans font-sans font-sans">
    <div class="absolute top-0 right-0 w-12 h-12 bg-[#7C3AED]/5 rounded-bl-full flex items-start justify-end p-2 font-sans">
      <div class="text-[#A78BFA] font-bold opacity-30 text-xs font-mono font-mono font-mono font-mono font-mono font-mono">02</div>
    </div>
    <div>
      <h3 class="font-bold text-white text-[0.65rem] mb-2 flex items-center gap-1.5 font-sans font-sans">
        <div class="i-lucide:database text-[#7C3AED] text-xs font-sans"></div> Seed & Gather
      </h3>
      <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed font-sans">
        Query databases (IEEE Xplore, Scopus). Use citation mapping (ResearchRabbit) and reference managers (Zotero) to establish the <strong class="text-white">ground truth dataset</strong>.
      </p>
    </div>
    <div class="mt-2 bg-[#080E14] p-1.5 rounded border border-[#1E2E38] text-[0.45rem] font-mono text-[#38BDF8] font-mono font-mono">
      IEEE search strings + Zotero collection export
    </div>
  </div>

  <!-- Step 3 -->
  <div class="bg-[#0F172A] border border-[#7C3AED]/40 rounded-xl p-3.5 flex flex-col justify-between relative overflow-hidden shadow-[0_0_15px_rgba(124,58,237,0.1)] font-sans font-sans font-sans">
    <div class="absolute top-0 right-0 w-12 h-12 bg-[#7C3AED]/10 rounded-bl-full flex items-start justify-end p-2 font-sans font-sans">
      <div class="text-[#A78BFA] font-bold opacity-50 text-xs font-mono font-mono font-mono font-mono font-mono font-mono font-mono">03</div>
    </div>
    <div>
      <h3 class="font-bold text-white text-[0.65rem] mb-2 flex items-center gap-1.5 font-sans font-sans">
        <div class="i-lucide:git-branch text-[#7C3AED] text-xs font-sans"></div> Decomposed Prompting
      </h3>
      <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed font-sans">
        Deconstruct research questions into <strong class="text-white">discrete, auditable steps</strong>. Use specialized templates to prompt for modular code blocks or semantic synthesis matrices.
      </p>
    </div>
    <div class="mt-2 bg-[#080E14] p-1.5 rounded border border-[#7C3AED]/20 text-[0.45rem] font-mono text-[#A78BFA] font-mono font-mono">
      Sequential micro-prompts for specific API modules
    </div>
  </div>

  <!-- Step 4 -->
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3.5 flex flex-col justify-between relative overflow-hidden font-sans font-sans font-sans font-sans">
    <div class="absolute top-0 right-0 w-12 h-12 bg-[#7C3AED]/5 rounded-bl-full flex items-start justify-end p-2 font-sans font-sans">
      <div class="text-[#A78BFA] font-bold opacity-30 text-xs font-mono font-mono font-mono font-mono font-mono font-mono font-mono">04</div>
    </div>
    <div>
      <h3 class="font-bold text-white text-[0.65rem] mb-2 flex items-center gap-1.5 font-sans font-sans">
        <div class="i-lucide:shield-check text-[#7C3AED] text-xs font-sans"></div> Empirical Verification
      </h3>
      <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed font-sans">
        Cross-check outputs against <strong class="text-white">physical laws, software API bounds, and simulation results</strong>. Never assume correctness based on verbal fluency.
      </p>
    </div>
    <div class="mt-2 bg-[#080E14] p-1.5 rounded border border-[#1E2E38] text-[0.45rem] font-mono text-[#34D399] font-mono font-sans font-mono font-mono">
      Python code validation + Q3D simulation run
    </div>
  </div>
</div>
</div>

<!--
To apply this paradigm shift, I designed the four-step structured research workflow shown here. We start by explicitly defining parameters and bounds before touching any AI tool. In Step 2, we gather verified data from academic databases to act as the source of evidence. In Step 3, we decompose the core task—for instance, writing python script functions to control ANSYS Q3D—into discrete, small prompting blocks. Finally, in Step 4, we verify the output, cross-checking the generated code against API syntax limits and physical simulation behaviors to guarantee validity.
-->

---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full font-sans font-sans">
<div class="mb-4 font-serif font-sans font-sans">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5 font-sans font-sans">Workflow Design</p>
  <h1 class="text-2xl font-bold text-white leading-tight font-sans font-sans font-sans">Literature review, organization, and decomposition</h1>
</div>
<div class="grid grid-cols-[1.2fr_0.8fr] gap-6 flex-1 items-start font-sans font-sans">
  <div class="flex flex-col gap-4 font-sans font-sans">
    <!-- Comparison Table -->
    <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl overflow-hidden shadow-xl font-sans font-sans font-sans">
      <table class="w-full border-collapse text-left font-sans font-sans font-sans font-sans">
        <thead>
          <tr class="bg-[#1E2E38]/50 border-b border-[#1E2E38] text-[#A78BFA] text-[0.55rem] font-mono uppercase tracking-wider font-mono">
            <th class="p-2 w-1/4">Research Activity</th>
            <th class="p-2 w-3/8 font-sans">Midterm Approach (Bad)</th>
            <th class="p-2 w-3/8 text-[#34D399] font-bold font-sans font-sans font-sans">Course-Taught Workflow (Good)</th>
          </tr>
        </thead>
        <tbody class="text-[0.52rem] text-[#94A3B8] divide-y divide-[#1E2E38]/40">
          <tr>
            <td class="p-2 font-semibold text-white font-sans">Literature Map</td>
            <td class="p-2 font-sans">Linear book reports summarizing papers individually (A said X, B said Y).</td>
            <td class="p-2 text-[#34D399] font-medium font-sans font-sans font-sans">Multi-dimensional matrix mapping parameters, methods, and results.</td>
          </tr>
          <tr>
            <td class="p-2 font-semibold text-white font-sans">Thematic Outline</td>
            <td class="p-2 font-sans">Asking AI to generate outline, leading to generic "Introduction/Methods" templates.</td>
            <td class="p-2 text-[#34D399] font-medium font-sans font-sans font-sans">Researcher defines themes; AI extracts paper details to fit them.</td>
          </tr>
          <tr>
            <td class="p-2 font-semibold text-white font-sans font-sans font-sans">Screening Pile</td>
            <td class="p-2 font-sans">Reading random papers sequentially, wasting days on low-relevance articles.</td>
            <td class="p-2 text-[#34D399] font-medium font-sans font-sans font-sans font-sans">Using ASReview ML active learning to screen search results by relevance.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="flex flex-col gap-3 font-sans font-sans font-sans">
    <!-- ASReview Highlight -->
    <div class="bg-gradient-to-br from-[#10B981]/10 to-transparent border border-[#10B981]/30 rounded-xl p-4 shadow-xl font-sans font-sans font-sans">
      <h3 class="font-bold text-[#6EE7B7] text-xs mb-2 flex items-center gap-1.5 font-sans font-sans">
        <div class="i-lucide:compress text-[#10B981] text-sm font-sans"></div> Active Learning with ASReview
      </h3>
      <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed mb-2 font-sans font-sans font-sans">
        Active learning algorithms rank papers based on live user feedback, shifting the human researcher's role from <em>brute-force reading</em> to <em>supervising the sorting model</em>.
      </p>
      <div class="bg-[#080E14] border border-[#1E2E38] p-2 rounded text-[0.48rem] font-mono text-[#10B981] text-center font-mono font-mono">
        Prioritized Screening → 80% Time Reduction
      </div>
    </div>
    <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3 flex items-start gap-2 font-sans font-sans">
      <div class="i-lucide:lightbulb text-[#A78BFA] text-xs mt-0.5 flex-shrink-0"></div>
      <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed font-sans font-sans">
        <strong class="text-white">Decomposition first:</strong> Break complex research hypotheses into smaller, matrix-compatible questions before attempting synthesis.
      </p>
    </div>
  </div>
</div>
</div>

<!--
Let's zoom into literature review design. In my midterm research, I mapped literature using what I call 'book-report mode'—summarizing papers one by one in text. This course taught me a far more professional protocol. I now build multi-dimensional synthesis matrices where papers are encoded as data based on concrete variables. Instead of letting AI decide the outline, I define the themes myself, and use AI solely to extract data. By incorporating active learning tools like ASReview, I reduced literature screening times by up to eighty percent, allowing me to focus on actual synthesis.
-->

---
layout: default
background: '#080E14'
class: px-12 pt-6
---
<div class="w-full flex flex-col h-full font-sans">
<div class="mb-3 font-serif">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5 font-sans">Literature Tooling</p>
  <h1 class="text-2xl font-bold text-white leading-tight font-sans">ResearchRabbit & ASReview in action</h1>
</div>
<div class="grid grid-cols-2 gap-6 flex-1 items-stretch">
  <!-- ResearchRabbit -->
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-4 shadow-xl flex flex-col justify-between">
    <div>
      <h3 class="font-bold text-white text-xs mb-2 flex items-center gap-1.5 font-sans">
        <div class="i-lucide:network text-[#7C3AED] text-sm"></div> ResearchRabbit: Citation Mapping
      </h3>
      <p class="text-[0.55rem] text-[#94A3B8] leading-relaxed mb-3">
        Allows visual exploration of the power module layout optimization literature. Instead of linear lists, it maps relational co-citations and helps discover overlooked papers.
      </p>
    </div>
    <div class="flex-1 min-h-[130px] rounded-lg overflow-hidden border border-[#1E2E38] relative bg-[#080E14] flex items-center justify-center">
      <img src="/rr-network.png" class="object-cover w-full h-full" alt="ResearchRabbit Network" />
    </div>
  </div>
  <!-- ASReview -->
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-4 shadow-xl flex flex-col justify-between">
    <div>
      <h3 class="font-bold text-white text-xs mb-2 flex items-center gap-1.5 font-sans">
        <div class="i-lucide:compress text-[#10B981] text-sm font-sans"></div> ASReview: Machine-Learning Screening
      </h3>
      <p class="text-[0.55rem] text-[#94A3B8] leading-relaxed mb-3">
        Active learning ranks the gathered dataset by relevance based on user feedback. In this setup, 34 out of 60 records were dynamically labeled relevant, yielding an 80% time reduction.
      </p>
    </div>
    <div class="flex-1 min-h-[130px] rounded-lg overflow-hidden border border-[#1E2E38] relative bg-[#080E14] flex items-center justify-center">
      <img src="/step4-review..png" class="object-cover w-full h-full" alt="ASReview Screening Progress" />
    </div>
  </div>
</div>
</div>

<!--
To make this process concrete, here are the actual interfaces I used. On the left is ResearchRabbit, which creates a visual map of the citation network around power module packaging. This helped me find papers that were highly relevant but didn't show up in keyword searches. On the right is ASReview, showing the screening of my gathered database. Out of 60 records, the active learning model quickly sorted 34 relevant ones, letting me bypass irrelevant literature and reduce my reading workload significantly.
-->

---
layout: default
background: '#080E14'
class: px-12 pt-6
---
<div class="w-full flex flex-col h-full font-sans font-sans">
<div class="mb-4 font-serif font-sans font-sans">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5 font-sans font-sans font-sans">Proof of Transfer · Case Study</p>
  <h1 class="text-2xl font-bold text-white leading-tight font-sans font-sans">Thesis case study: wirebond optimization for parasitic inductance</h1>
</div>
<div class="grid grid-cols-[1.1fr_1fr_0.9fr] gap-4 flex-1 items-stretch font-sans font-sans">
  <div class="flex flex-col gap-3 font-sans font-sans font-sans">
    <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3 shadow-xl font-sans font-sans font-sans">
      <h3 class="font-bold text-white text-[0.62rem] mb-1.5 flex items-center gap-1.5 font-sans font-sans font-sans">
        <div class="i-lucide:cpu text-[#38BDF8] text-sm font-sans"></div> iTreePack Power Module
      </h3>
      <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed mb-2 font-sans font-sans font-sans">
        The research focuses on optimizing the wirebond interconnect geometry in a <strong class="text-white">1.7 kV 100 A SiC Half-Bridge Power Module</strong>. High parasitic loop inductance leads to severe switching overvoltage spikes and high losses.
      </p>
      <div class="bg-[#080E14] border border-[#1E2E38] rounded-lg p-2 font-mono text-[0.45rem] text-[#38BDF8] leading-relaxed">
        Workflow: Python Scripting → PyAEDT Automation → ANSYS Q3D Solver → NN Surrogate Model → Genetic Algorithm Optimization
      </div>
    </div>
    <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-2.5 flex items-start gap-2 font-sans font-sans font-sans">
      <div class="i-lucide:info text-[#A78BFA] text-xs mt-0.5 flex-shrink-0"></div>
      <p class="text-[0.48rem] text-[#94A3B8] leading-relaxed font-sans font-sans">
        <strong class="text-white">Key Insight:</strong> Arc height dominates parasitic inductance, while ribbon width is secondary.
      </p>
    </div>
  </div>
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3 shadow-xl flex flex-col justify-between h-full font-sans font-sans">
    <h3 class="font-bold text-white text-[0.62rem] mb-1.5 flex items-center gap-1.5 font-sans font-sans">
      <div class="i-lucide:activity text-[#10B981] text-xs"></div> 3D Simulation Model
    </h3>
    <div class="flex-1 rounded-lg overflow-hidden border border-[#1E2E38] relative bg-[#080E14] flex items-center justify-center min-h-[140px] font-sans">
      <img src="/sic_module_simulation.png" class="object-cover w-full h-full" alt="SiC Module Simulation" />
    </div>
  </div>
  <div class="grid grid-cols-2 gap-3 font-sans font-sans font-sans">
    <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3 text-center flex flex-col justify-center font-sans font-sans font-sans">
      <p class="text-xl font-extrabold text-[#A78BFA]">139</p>
      <p class="text-[0.45rem] text-[#64748B] uppercase tracking-wider mt-1 font-mono font-mono font-mono">Simulations</p>
    </div>
    <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3 text-center flex flex-col justify-center font-sans font-sans font-sans font-sans">
      <p class="text-xl font-extrabold text-[#EF4444]">8.194 nH</p>
      <p class="text-[0.45rem] text-[#64748B] uppercase tracking-wider mt-1 font-mono font-mono font-mono">Baseline</p>
    </div>
    <div class="bg-[#0F172A] border border-[#34D399]/30 rounded-xl p-3 text-center flex flex-col justify-center shadow-[0_0_15px_rgba(52,211,153,0.05)] font-sans font-sans font-sans font-sans">
      <p class="text-xl font-extrabold text-[#34D399]">6.651 nH</p>
      <p class="text-[0.45rem] text-[#64748B] uppercase tracking-wider mt-1 font-mono font-mono font-mono">Optimized</p>
    </div>
    <div class="bg-[#0F172A] border border-[#38BDF8]/30 rounded-xl p-3 text-center flex flex-col justify-center shadow-[0_0_15px_rgba(56,189,248,0.05)] font-sans font-sans font-sans font-sans">
      <p class="text-xl font-extrabold text-[#38BDF8]">-18.8%</p>
      <p class="text-[0.45rem] text-[#64748B] uppercase tracking-wider mt-1 font-mono font-mono font-mono">Loop Induct.</p>
    </div>
  </div>
</div>
</div>

<!--
To prove the transfer of these course concepts, I will use my actual thesis as a case study. The goal of this research is to minimize the parasitic loop inductance in a 1.7 kV, 100 A SiC Half-Bridge power module. High loop inductance causes high overvoltage spikes, risking device failure. I built an automated loop linking Python, PyAEDT, and ANSYS Q3D to train a surrogate neural network. Across 139 simulations, the optimized design reduced loop inductance by eighteen point eight percent, shifting it from eight point one nine four nanohenries to six point six five one nanohenries.
-->

---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full font-sans font-sans font-sans">
<div class="mb-4 font-serif font-sans">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5 font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans">Application of Learning</p>
  <h1 class="text-2xl font-bold text-white leading-tight font-sans font-sans font-sans">How course lessons saved my thesis scripting workflow</h1>
</div>
<div class="grid grid-cols-2 gap-6 flex-1 font-sans font-sans">
  <div class="flex flex-col gap-3 font-sans font-sans">
    <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-4 shadow-xl font-sans font-sans font-sans">
      <h3 class="font-bold text-white text-xs mb-2 flex items-center gap-1.5 font-sans font-sans font-sans font-sans">
        <div class="i-lucide:git-pull-request text-[#7C3AED] text-sm font-sans"></div> Task Decomposition in Python/PyAEDT
      </h3>
      <p class="text-[0.58rem] text-[#94A3B8] leading-relaxed mb-2.5 font-sans font-sans font-sans">
        Instead of prompting for a single monolithic script to build, mesh, and solve the wirebond module (which failed repeatedly), I decomposed the code design into four independent modules:
      </p>
      <ol class="text-[0.52rem] text-[#A78BFA] space-y-1.5 list-none pl-0 font-sans font-sans font-sans">
        <li class="flex gap-2 font-sans font-sans"><span class="text-[#7C3AED] font-bold font-mono font-mono font-mono font-mono font-mono">①</span> <strong>3D Geometry Layout</strong> (drawing ribbon/wirebonds in PyAEDT)</li>
        <li class="flex gap-2 font-sans font-sans"><span class="text-[#7C3AED] font-bold font-mono font-mono font-mono font-mono font-mono">②</span> <strong>Material & Boundary Config</strong> (assigning copper/substrate, setting excitation)</li>
        <li class="flex gap-2 font-sans font-sans"><span class="text-[#7C3AED] font-bold font-mono font-mono font-mono font-mono font-mono">③</span> <strong>Mesh & Solver Setup</strong> (configuring adaptive meshes in Q3D)</li>
        <li class="flex gap-2 font-sans font-sans"><span class="text-[#7C3AED] font-bold font-mono font-mono font-mono font-mono font-mono">④</span> <strong>Data Extraction</strong> (exporting loop inductance matrix)</li>
      </ol>
    </div>
  </div>
  <div class="flex flex-col gap-3 font-sans font-sans font-sans">
    <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-4 shadow-xl font-sans font-sans font-sans">
      <h3 class="font-bold text-white text-xs mb-2 flex items-center gap-1.5 font-sans font-sans">
        <div class="i-lucide:sliders text-[#38BDF8] text-sm font-sans"></div> Explicit Prompt Constraints & API Versioning
      </h3>
      <p class="text-[0.58rem] text-[#94A3B8] leading-relaxed mb-2 font-sans font-sans font-sans font-sans">
        I designed prompts that explicitly injected the specific version limits of the PyAEDT library (v0.6+) and the target COM port structure.
      </p>
      <div class="bg-[#080E14] border border-[#1E2E38] p-2 rounded font-mono text-[0.45rem] text-[#94A3B8] leading-relaxed font-mono font-mono">
        <span class="text-[#64748B] font-mono font-mono">// Explicit evidence inject in prompt</span><br>
        "Using PyAEDT v0.6 syntax. Do not use legacy methods like 'add_wirebond'. Refer to the attached PyAEDT Q3D documentation schema. Generate only the setup_excitation function."
      </div>
    </div>
    <div class="bg-gradient-to-r from-[#10B981]/15 to-transparent border-l-2 border-[#10B981] p-3 rounded-r-lg font-sans font-sans">
      <p class="text-[0.52rem] text-[#34D399] leading-relaxed font-semibold font-sans font-sans font-sans">
        Outcome: Moving to modular decomposition and version-constrained prompts reduced script debugging cycles from days of manual searching to minutes.
      </p>
    </div>
  </div>
</div>
</div>

<!--
Let's discuss how the course lessons saved my scripting workflow. In my midterm research, I attempted to write this PyAEDT automation script in one large chunk. The LLM regularly hallucinated API methods and failed to configure the solver. Under the new workflow, I decomposed this complex scripting task. I requested separate, modular functions for geometry creation, boundary assignment, solver setup, and data export. By specifying version bounds—like forcing PyAEDT version zero point six syntax—and providing exact coordinate inputs, I reduced my debugging cycle from days to minutes.
-->

---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full font-sans font-sans font-sans">
<div class="mb-4 font-serif">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5 font-sans font-sans font-sans font-sans font-sans">Rethinking Habits</p>
  <h1 class="text-2xl font-bold text-white leading-tight font-sans font-sans font-sans font-sans">Methodological transformation: before vs. after</h1>
</div>

<div class="flex-1 bg-[#0F172A] border border-[#1E2E38] rounded-xl overflow-hidden shadow-xl mb-4 font-sans font-sans font-sans">
  <table class="w-full border-collapse text-left font-sans font-sans font-sans">
    <thead>
      <tr class="bg-[#1E2E38]/50 border-b border-[#1E2E38] text-[#A78BFA] text-[0.55rem] font-mono uppercase tracking-wider font-mono">
        <th class="p-2.5 w-1/5">Research Dimension</th>
        <th class="p-2.5 w-2/5">Before the Course (Conversational Mindset)</th>
        <th class="p-2.5 w-2/5 text-[#34D399] font-bold font-sans font-sans font-sans font-sans">After the Course (Structured Instrument Mindset)</th>
      </tr>
    </thead>
    <tbody class="text-[0.52rem] text-[#94A3B8] divide-y divide-[#1E2E38]/40 font-medium font-sans">
      <tr>
        <td class="p-2.5 font-bold text-white font-sans">Task Scoping</td>
        <td class="p-2.5">Monolithic, broad requests (<em>"write a python script to run ANSYS Q3D"</em>).</td>
        <td class="p-2.5 text-[#34D399] font-semibold font-sans font-sans font-sans font-sans">Decomposed, modular tasks with explicit API constraints.</td>
      </tr>
      <tr>
        <td class="p-2.5 font-bold text-white font-sans font-sans font-sans">AI Output Evaluation</td>
        <td class="p-2.5">Accepted outputs as authority, relying on the fluency of English prose.</td>
        <td class="p-2.5 text-[#34D399] font-semibold font-sans font-sans font-sans font-sans font-sans">Treated outputs as hypothetical; verified against physics and documentation.</td>
      </tr>
      <tr>
        <td class="p-2.5 font-bold text-white font-sans font-sans">API Version Control</td>
        <td class="p-2.5">Vague context assumptions (<em>"use python for ANSYS"</em>).</td>
        <td class="p-2.5 text-[#34D399] font-semibold font-sans font-sans font-sans font-sans">Explicitly defined library boundaries (<em>"PyAEDT v0.6 syntax limits only"</em>).</td>
      </tr>
      <tr>
        <td class="p-2.5 font-bold text-white font-sans font-sans font-sans">Error Handling</td>
        <td class="p-2.5">Frustrated, repetitive re-prompting (<em>"that code is broken, fix it"</em>).</td>
        <td class="p-2.5 text-[#34D399] font-semibold font-sans font-sans font-sans font-sans font-sans font-sans">Systematic stack trace injection paired with boundary parameters.</td>
      </tr>
      <tr>
        <td class="p-2.5 font-bold text-white font-sans font-sans">Literature Workflow</td>
        <td class="p-2.5">Ad-hoc searching. Writing summaries late. Missing structural connections.</td>
        <td class="p-2.5 text-[#34D399] font-semibold font-sans font-sans font-sans font-sans">Active screening (ASReview) paired with early multi-dimensional tables or codified AI skills.</td>
      </tr>
    </tbody>
  </table>
</div>
</div>

<!--
To make the change clear, I've constructed a comparison table of my research habits before and after the course. Previously, I was scoping tasks in huge monolithic requests, accepting AI outputs as facts, ignoring API versions, and blindly re-prompting when errors occurred. Today, I decompose every task, treat AI outputs purely as hypotheses that must be verified, specify exact API version limits, and systematically feed stack traces back into the model along with physical parameters. I also front-load my literature review using systematic screening tables.
-->

---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full font-sans font-sans font-sans">
<div class="mb-4 font-serif font-sans font-sans font-sans font-sans">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5 font-sans font-sans font-sans">Epistemic Limits</p>
  <h1 class="text-2xl font-bold text-white leading-tight font-sans">Where AI helps and where human judgment is absolute</h1>
</div>

<div class="grid grid-cols-2 gap-6 flex-1 font-sans">
  <!-- AI Role -->
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-4 shadow-xl relative overflow-hidden font-sans">
    <div class="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/5 to-transparent pointer-events-none"></div>
    <div class="flex items-center mb-3">
      <div class="w-7 h-7 rounded-lg bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center mr-2.5">
        <div class="i-lucide:cpu text-xs text-[#A78BFA]"></div>
      </div>
      <h3 class="font-bold text-white text-xs font-sans">The AI Role: Speed & Synthesis Assistant</h3>
    </div>
    <ul class="text-[0.55rem] text-[#94A3B8] space-y-2.5 list-none pl-0 font-sans">
      <li class="flex items-start gap-2">
        <div class="i-lucide:check-circle text-[#A78BFA] text-xs mt-0.5 flex-shrink-0"></div>
        <span><strong>Boilerplate Generation:</strong> Writing standard Python classes, basic loop iterators, and file I/O operations for data storage.</span>
      </li>
      <li class="flex items-start gap-2 font-sans">
        <div class="i-lucide:check-circle text-[#A78BFA] text-xs mt-0.5 flex-shrink-0"></div>
        <span><strong>Log Parsing:</strong> Converting raw simulation logs and text output matrices from ANSYS Q3D into structured CSV tables.</span>
      </li>
      <li class="flex items-start gap-2 font-sans font-sans">
        <div class="i-lucide:check-circle text-[#A78BFA] text-xs mt-0.5 flex-shrink-0"></div>
        <span><strong>Search Re-ordering:</strong> Prioritizing candidate paper listings based on relevance feedback (ASReview active learning).</span>
      </li>
    </ul>
  </div>

  <!-- Human Role -->
  <div class="bg-[#0F172A] border border-[#EF4444]/20 rounded-xl p-4 shadow-xl relative overflow-hidden font-sans font-sans font-sans font-sans">
    <div class="absolute inset-0 bg-gradient-to-b from-[#EF4444]/5 to-transparent pointer-events-none"></div>
    <div class="flex items-center mb-3">
      <div class="w-7 h-7 rounded-lg bg-[#EF4444]/20 border border-[#EF4444]/40 flex items-center justify-center mr-2.5">
        <div class="i-lucide:shield-alert text-xs text-[#F87171]"></div>
      </div>
      <h3 class="font-bold text-white text-xs font-sans font-sans">The Human Role: Veracity & Physical Judgment</h3>
    </div>
    <ul class="text-[0.55rem] text-[#94A3B8] space-y-2.5 list-none pl-0 font-sans">
      <li class="flex items-start gap-2 font-sans">
        <div class="i-lucide:alert-circle text-[#F87171] text-xs mt-0.5 flex-shrink-0"></div>
        <span><strong>Physics Validation:</strong> Checking if neural network predictions violate fundamental electromagnetic laws (e.g. conservation of energy).</span>
      </li>
      <li class="flex items-start gap-2 font-sans font-sans">
        <div class="i-lucide:alert-circle text-[#F87171] text-xs mt-0.5 flex-shrink-0"></div>
        <span><strong>Model Selection:</strong> Deciding which physical inputs (geometry parameters, meshing densities) are appropriate to solve the problem.</span>
      </li>
      <li class="flex items-start gap-2 font-sans font-sans font-sans">
        <div class="i-lucide:alert-circle text-[#F87171] text-xs mt-0.5 flex-shrink-0"></div>
        <span><strong>Experimental Testing:</strong> Conducting double-pulse hardware tests. No simulation can validate hardware without physical confirmation.</span>
      </li>
    </ul>
  </div>
</div>
</div>

<!--
A major realization in this course was identifying the boundaries of AI capabilities. We must be highly clear about where AI helps and where human judgment is absolute. As shown on the left, AI is exceptional for boilerplate scripting, log parsing, and search ranking. However, it cannot replace human expertise on the right. AI cannot validate whether surrogate neural network outputs violate electromagnetic field theory. It cannot make decisions on mesh setups. And it cannot run double-pulse hardware tests. Physical validation remains a purely human responsibility.
-->

---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full font-sans font-sans">
<div class="mb-4">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5 font-sans font-sans">Future Direction</p>
  <h1 class="text-2xl font-bold text-white leading-tight font-sans">Future use in thesis, publications, and experiments</h1>
</div>

<div class="grid grid-cols-[1fr_1.3fr] gap-6 flex-1 items-start font-sans font-sans font-sans">
  <div class="flex flex-col gap-3 bg-[#0F172A] border border-[#1E2E38] rounded-xl p-4 shadow-xl font-sans">
    <h3 class="font-bold text-white text-xs mb-2 flex items-center gap-1.5 font-sans">
      <div class="i-lucide:git-commit text-[#38BDF8] text-sm"></div> Current Limitations
    </h3>
    <ul class="text-[0.52rem] text-[#94A3B8] space-y-2 list-none pl-0 font-sans">
      <li class="flex items-start gap-2 font-sans font-sans">
        <div class="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-1.5 flex-shrink-0 font-sans"></div>
        <span><strong>Simulation-Only:</strong> Results are based entirely on 3D finite-element electromagnetic field solver models.</span>
      </li>
      <li class="flex items-start gap-2 font-sans font-sans">
        <div class="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-1.5 flex-shrink-0 font-sans"></div>
        <span><strong>No Busbar:</strong> The current geometry model does not include the external busbar and parasitic package connections.</span>
      </li>
      <li class="flex items-start gap-2 font-sans font-sans">
        <div class="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-1.5 flex-shrink-0 font-sans"></div>
        <span><strong>No Thermal Model:</strong> High switching frequencies cause high heat generation; thermal feedback loops are currently unmodeled.</span>
      </li>
    </ul>
  </div>

  <div class="flex flex-col gap-3 font-sans font-sans font-sans font-sans font-sans font-sans">
    <!-- Timeline of Future Work -->
    <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-4 shadow-xl font-sans font-sans font-sans">
      <h3 class="font-bold text-white text-xs mb-3 flex items-center gap-1.5 font-sans font-sans font-sans font-sans">
        <div class="i-lucide:clock text-[#A78BFA] text-sm font-sans"></div> Roadmap: Moving to Physical Validation
      </h3>
      <div class="space-y-3 font-sans font-sans font-sans font-sans">
        <div class="flex items-start gap-3">
          <div class="w-6 h-6 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center flex-shrink-0 text-[0.5rem] font-bold text-[#A78BFA] mt-0.5 font-mono font-mono font-mono">1</div>
          <div>
            <h4 class="text-[0.58rem] font-semibold text-white font-sans font-sans">Fabrication & Testing</h4>
            <p class="text-[0.5rem] text-[#94A3B8]">Manufacture the optimized ribbon iTreePack module and conduct double-pulse testing to validate simulated parasitics.</p>
          </div>
        </div>
        <div class="flex items-start gap-3 font-sans">
          <div class="w-6 h-6 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center flex-shrink-0 text-[0.5rem] font-bold text-[#A78BFA] mt-0.5 font-mono font-mono font-mono">2</div>
          <div>
            <h4 class="text-[0.58rem] font-semibold text-white font-sans font-sans font-sans">Geometry Expansion & Thermal Loops</h4>
            <p class="text-[0.5rem] text-[#94A3B8]">Integrate external busbars into the geometry model. Add transient thermal models via structured prompt workflows.</p>
          </div>
        </div>
        <div class="flex items-start gap-3 font-sans">
          <div class="w-6 h-6 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center flex-shrink-0 text-[0.5rem] font-bold text-[#A78BFA] mt-0.5 font-mono font-mono font-mono">3</div>
          <div>
            <h4 class="text-[0.58rem] font-semibold text-white font-sans font-sans font-sans font-sans">Peer-Reviewed Publication</h4>
            <p class="text-[0.5rem] text-[#94A3B8]">Submit the complete optimization and experimental results to IEEE Transactions on Power Electronics.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<!--
Looking forward, I must address the current limitations of my thesis work. The optimization is simulation-only, does not account for external busbar connections, and has no thermal model yet. My roadmap addresses these gaps. First, I will manufacture the optimized module and conduct experimental double-pulse tests. Second, I will expand the simulation geometry to include busbars and model thermal coupling. Third, I will submit these findings to IEEE Transactions on Power Electronics. In all these phases, I will apply this structured, decomposed research workflow to ensure code and analysis are rigorously verified.
-->

---
layout: center
background: '#080E14'
class: text-center px-16
---

<div class="flex flex-col items-center justify-center h-full relative z-10 font-sans font-sans font-sans font-sans font-sans">
  <div class="w-16 h-16 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#0EA5E9] flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(124,58,237,0.4)] font-sans">
    <div class="i-lucide:check-circle text-3xl text-white"></div>
  </div>

  <h1 class="text-3xl font-bold text-white mb-6">Closing Reflection</h1>

  <div class="w-full max-w-2xl bg-[#0F172A] border border-[#7C3AED]/30 rounded-xl p-6 shadow-2xl mb-8 font-sans font-sans font-sans">
    <p class="text-lg text-[#38BDF8] font-semibold leading-relaxed mb-4 font-serif italic">
      "This course did not just teach me how to prompt."
    </p>
    <p class="text-sm text-white font-light leading-relaxed font-sans font-sans">
      I did not only learn better prompts; I learned how to encode parts of my research workflow into reusable, testable AI skills.
    </p>
  </div>

  <div class="w-20 h-px bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent mx-auto mb-6"></div>
  <p class="text-xs text-[#64748B] font-sans font-sans font-sans">Research Skills P: AI · Summer 2026</p>
  <p class="text-[#A78BFA] text-sm mt-2 font-medium font-sans font-sans font-sans font-sans">Thank You · Questions & Discussion</p>

  <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-1 pointer-events-none font-sans">
    <div class="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#7C3AED] opacity-[0.06] blur-[120px] font-sans"></div>
    <div class="absolute bottom-[0%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[#0EA5E9] opacity-[0.04] blur-[150px] font-sans"></div>
  </div>
</div>

<!--
To conclude, this course has represented a major step forward in my research maturity. The main lesson is that prompt engineering is not simply a trick to generate quick code; it is a discipline that demands structured thinking, logical decomposition, and strict verification. By applying these lessons to my thesis, I was able to build an automated optimization workflow that successfully reduced wirebond loop inductance by eighteen point eight percent while ensuring my code remains clean, auditable, and reproducible. Thank you very much for your time. I am open to any questions or discussion.
-->
