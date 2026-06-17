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
title: "KINTO — Midterm Presentation"
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
  <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#0EA5E9] flex items-center justify-center shadow-[0_0_40px_rgba(124,58,237,0.5)] overflow-hidden">
  <img src="/kinto-logo-gold.png" class="w-full h-full object-contain p-2" />
  </div>
</div>

<div class="text-[0.55rem] font-bold text-[#7C3AED] tracking-[0.4em] uppercase mb-3">RSPAI1 · Midterm Presentation · June 2026</div>
<h1 class="text-5xl font-bold text-white mb-3 tracking-tight leading-tight">KINTO</h1>
<p class="text-xl text-[#A78BFA] mb-2 font-medium">Closed-Loop Haptic Wearable for ANS Regulation</p>
<p class="text-xs text-[#64748B] max-w-xl leading-relaxed mb-8">Five computational studies providing proof-of-concept for on-device signal processing, edge ML, RL autonomic entrainment, integer-native ANC, and cardiac-phase-locked haptic actuation.</p>

<div class="grid grid-cols-4 gap-3 w-full max-w-2xl">
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3 text-center">
  <p class="text-lg font-bold text-[#A78BFA]">109%</p>
  <p class="text-[0.45rem] text-[#64748B] uppercase tracking-wider">HRV coherence gain</p>
  </div>
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3 text-center">
  <p class="text-lg font-bold text-[#38BDF8]">15×</p>
  <p class="text-[0.45rem] text-[#64748B] uppercase tracking-wider">Integer ANC speedup</p>
  </div>
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3 text-center">
  <p class="text-lg font-bold text-[#34D399]">100%</p>
  <p class="text-[0.45rem] text-[#64748B] uppercase tracking-wider">Diastolic alignment</p>
  </div>
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3 text-center">
  <p class="text-lg font-bold text-[#F59E0B]">3.99×</p>
  <p class="text-[0.45rem] text-[#64748B] uppercase tracking-wider">Model compression</p>
  </div>
</div>

<div class="w-24 h-px bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent mx-auto my-6"></div>
<p class="text-xs text-[#64748B]">Presenter: Raymond Tenorio Borres</p>

</div>

<div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-1 pointer-events-none">
  <div class="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#7C3AED] opacity-[0.08] blur-[120px]"></div>
  <div class="absolute bottom-[0%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[#0EA5E9] opacity-[0.05] blur-[150px]"></div>
</div>

<!--
Slide 1: Title

Good morning. Today I will present KINTO, a screenless, closed-loop haptic wearable designed for autonomic nervous system regulation. We have conducted five computational studies demonstrating its signal preprocessing, edge ML, reinforcement learning autonomic entrainment, integer-native active noise cancellation, and diastolic phase-locked cardiac pacing. Our findings show strong potential for passive autonomic entrainment and clinical-grade processing under a very low hardware footprint.
-->
---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full">
<div class="mb-3">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5">Section 1 — Problem Statement</p>
  <h1 class="text-2xl font-bold text-white leading-tight">Why KINTO exists: stress, drowning risk, and a monitoring gap</h1>
</div>

<div class="grid grid-cols-2 gap-4 flex-1">
  <div class="flex flex-col gap-2">

  <div class="bg-[#0F172A] border-l-2 border-[#EF4444] rounded-r-xl p-2.5 shadow-xl">
  <h3 class="text-[#F87171] font-bold text-xs mb-1 flex items-center gap-1.5"><lucide-heart-pulse />Chronic Stress</h3>
  <p class="text-[0.55rem] text-[#94A3B8] leading-relaxed">Elevated sympathetic tone → high resting HR, suppressed HRV, increased cardiovascular risk. Existing wearables only <strong class="text-white">monitor</strong> this — none intervene in real time.</p>
  </div>

  <div class="bg-[#0F172A] border-l-2 border-[#F59E0B] rounded-r-xl p-2.5 shadow-xl">
  <h3 class="text-[#FCD34D] font-bold text-xs mb-1 flex items-center gap-1.5"><lucide-alert-triangle />Elderly Drowning Risk · Japan</h3>
  <p class="text-[0.55rem] text-[#94A3B8] leading-relaxed"><strong class="text-white">6,073 bathtub drowning deaths/year</strong> (3× traffic fatalities). Projected 27,000/year by 2035. Nearly all involve elderly with autonomic dysregulation.</p>
  </div>

  <div class="bg-[#0F172A] border-l-2 border-[#0EA5E9] rounded-r-xl p-2.5 shadow-xl">
  <h3 class="text-[#38BDF8] font-bold text-xs mb-1 flex items-center gap-1.5"><lucide-monitor-off />Screen Fatigue & Passive Use</h3>
  <p class="text-[0.55rem] text-[#94A3B8] leading-relaxed">Biofeedback apps require conscious engagement. Elderly users don't use them. KINTO works <strong class="text-white">passively</strong> — no screen, no interaction needed.</p>
  </div>

  <div class="bg-[#0F172A] border-l-2 border-[#7C3AED] rounded-r-xl p-2.5 shadow-xl">
  <h3 class="text-[#A78BFA] font-bold text-xs mb-1 flex items-center gap-1.5"><lucide-cpu />Edge Hardware Constraint</h3>
  <p class="text-[0.55rem] text-[#94A3B8] leading-relaxed">FPU-less MCUs (ESP32-C3 RISC-V) cannot run standard DSP/ML algorithms. Novel integer-only implementations are required — and patentable.</p>
  </div>

  </div>

  <div class="flex flex-col gap-3">
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3.5 shadow-xl">
  <h3 class="text-white font-bold text-xs mb-2 flex items-center gap-1.5"><lucide-bar-chart-2 class="text-[#7C3AED]" />Competitive Gap</h3>
  <div class="space-y-1.5">
  <div class="flex items-center justify-between border-b border-[#1E2E38] pb-1">
  <span class="text-[0.55rem] text-[#94A3B8]">Garmin / WHOOP / Apple Watch</span>
  <span class="text-[0.5rem] px-1.5 py-0.5 rounded-full bg-[#EF4444]/20 text-[#F87171]">Monitor only</span>
  </div>
  <div class="flex items-center justify-between border-b border-[#1E2E38] pb-1">
  <span class="text-[0.55rem] text-[#94A3B8]">HeartMath Inner Balance</span>
  <span class="text-[0.5rem] px-1.5 py-0.5 rounded-full bg-[#F59E0B]/20 text-[#FCD34D]">Screen + manual</span>
  </div>
  <div class="flex items-center justify-between border-b border-[#1E2E38] pb-1">
  <span class="text-[0.55rem] text-[#94A3B8]">Apollo Neuro</span>
  <span class="text-[0.5rem] px-1.5 py-0.5 rounded-full bg-[#F59E0B]/20 text-[#FCD34D]">Fixed frequency</span>
  </div>
  <div class="flex items-center justify-between">
  <span class="text-[0.55rem] text-white font-semibold">KINTO</span>
  <span class="text-[0.5rem] px-1.5 py-0.5 rounded-full bg-[#7C3AED]/30 text-[#A78BFA]">Closed-loop · passive · cardiac-sync</span>
  </div>
  </div>
  </div>

  <div class="bg-gradient-to-br from-[#7C3AED]/10 to-transparent border border-[#7C3AED]/30 rounded-xl p-3">
  <p class="text-[0.55rem] text-[#94A3B8] italic leading-relaxed"><strong class="text-[#A78BFA]">Only 8.1%</strong> of EDA studies involve elderly populations — KINTO's core demographic is severely underserved in the literature.</p>
  </div>
  </div>
</div>
</div>

<!--
Slide 2: Problem Statement

Our project addresses the chronic stress epidemic and the high rate of elderly bathing drownings in Japan, which accounts for over 6,000 deaths annually. Existing wearables only monitor heart rate and HRV without active intervention, and biofeedback apps suffer from high cognitive load and poor compliance. KINTO solves these issues by intervening passively through cardiac-phase-synchronized haptic feedback, without relying on screens.
-->
---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full">
<div class="mb-2.5">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5">Section 2 — KINTO Concept & Hardware</p>
  <h1 class="text-2xl font-bold text-white leading-tight">A wearable that listens to your heartbeat and responds with vibration</h1>
</div>

<div class="grid grid-cols-[1.3fr_1fr] gap-4 flex-1">
  <div class="flex flex-col gap-2.5">

  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3.5 shadow-xl">
  <h3 class="text-[#A78BFA] font-bold text-xs mb-1.5 flex items-center gap-1.5"><lucide-zap class="text-[#7C3AED]" />Core Concept</h3>
  <p class="text-[0.55rem] text-[#94A3B8] leading-relaxed mb-2">KINTO is a <strong class="text-white">screenless, closed-loop haptic wearable</strong> for autonomic nervous system regulation. It reads your PPG signal, estimates your autonomic state, and responds with precisely timed vibrotactile stimulation to guide your body toward calm.</p>
  <div class="bg-[#080E14] border border-[#1E2E38] rounded-lg p-2 font-mono text-[0.48rem] text-[#7C3AED] leading-relaxed">
  Sense PPG → Estimate autonomic state → Select f* via RL → Fire DRV2605L at diastolic onset → repeat
  </div>
  </div>

  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3.5 shadow-xl">
  <h3 class="text-white font-bold text-xs mb-2 flex items-center gap-1.5"><lucide-cpu class="text-[#7C3AED]" />Hardware Stack — BOM &lt; $12 USD</h3>
  <div class="space-y-1.5">
  <div class="flex items-start gap-2.5 border-b border-[#1E2E38] pb-1.5">
  <div class="w-5 h-5 rounded bg-[#7C3AED]/20 flex items-center justify-center flex-shrink-0 mt-0.5"><lucide-cpu class="text-[#A78BFA] text-[0.55rem]" /></div>
  <div>
  <p class="text-[0.55rem] font-semibold text-white">ESP32-C3 MCU</p>
  <p class="text-[0.48rem] text-[#64748B]">RISC-V RV32IMC · 160 MHz · 400 KB SRAM · no FPU</p>
  </div>
  </div>
  <div class="flex items-start gap-2.5 border-b border-[#1E2E38] pb-1.5">
  <div class="w-5 h-5 rounded bg-[#0EA5E9]/20 flex items-center justify-center flex-shrink-0 mt-0.5"><lucide-activity class="text-[#38BDF8] text-[0.55rem]" /></div>
  <div>
  <p class="text-[0.55rem] font-semibold text-white">MAX30101 PPG Sensor</p>
  <p class="text-[0.48rem] text-[#64748B]">Heart rate + SpO2 · I²C · integrated with accelerometer for motion artifact</p>
  </div>
  </div>
  <div class="flex items-start gap-2.5">
  <div class="w-5 h-5 rounded bg-[#10B981]/20 flex items-center justify-center flex-shrink-0 mt-0.5"><lucide-vibrate class="text-[#34D399] text-[0.55rem]" /></div>
  <div>
  <p class="text-[0.55rem] font-semibold text-white">DRV2605L Haptic Actuator</p>
  <p class="text-[0.48rem] text-[#64748B]">LRA motor driver · precise frequency control · I²C</p>
  </div>
  </div>
  </div>
  </div>

  </div>

  <div class="flex flex-col gap-2.5">
  <div class="bg-[#0F172A] border border-[#7C3AED]/30 rounded-xl p-3.5 shadow-[0_0_20px_rgba(124,58,237,0.1)]">
  <h3 class="text-[#A78BFA] font-bold text-xs uppercase tracking-wider mb-2">Target Outcomes</h3>
  <div class="space-y-2">
  <div class="flex items-center gap-2">
  <lucide-trending-down class="text-[#34D399] text-xs" />
  <p class="text-[0.55rem] text-[#94A3B8]"><strong class="text-white">Stress reduction</strong> via parasympathetic activation</p>
  </div>
  <div class="flex items-center gap-2">
  <lucide-heart class="text-[#F87171] text-xs" />
  <p class="text-[0.55rem] text-[#94A3B8]"><strong class="text-white">HRV improvement</strong> through haptic entrainment at f* = 0.8 Hz</p>
  </div>
  <div class="flex items-center gap-2">
  <lucide-shield class="text-[#38BDF8] text-xs" />
  <p class="text-[0.55rem] text-[#94A3B8]"><strong class="text-white">Drowning prevention</strong> for elderly — passive real-time ANS monitoring</p>
  </div>
  <div class="flex items-center gap-2">
  <lucide-eye-off class="text-[#A78BFA] text-xs" />
  <p class="text-[0.55rem] text-[#94A3B8]"><strong class="text-white">Screenless, passive</strong> — no user interaction required</p>
  </div>
  </div>
  </div>

  <div class="bg-gradient-to-br from-[#7C3AED]/10 to-[#0EA5E9]/5 border border-[#7C3AED]/20 rounded-xl p-3">
  <p class="text-[0.5rem] font-mono text-[#A78BFA] mb-0.5">Key differentiator</p>
  <p class="text-[0.55rem] text-white font-medium leading-snug">Only wearable combining real-time cardiac phase detection + on-device RL + screenless passive operation at sub-$12 BOM.</p>
  </div>
  </div>
</div>
</div>

<!--
Slide 3: Core Concept & Hardware

KINTO's core concept is a closed-loop system that listens to the cardiac cycle and responds with precisely timed vibrations to shift autonomic balance toward calm. To make this accessible, we target an ESP32-C3 MCU with 400 KB SRAM and no floating-point unit, paired with a MAX30101 PPG sensor and a DRV2605L haptic driver, keeping the target BOM under twelve dollars.
-->
---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full">
<div class="mb-2">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5">Section 3 — Project Scope</p>
  <h1 class="text-2xl font-bold text-white leading-tight">Five computational studies — each supporting a distinct patent claim</h1>
</div>

<div class="grid grid-cols-5 gap-2.5 flex-1 mb-2">

  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-2.5 flex flex-col relative overflow-hidden hover:border-[#7C3AED]/40 transition-colors">
  <div class="text-[#7C3AED] font-bold text-lg opacity-20 absolute top-1.5 right-2">01</div>
  <div class="w-6 h-6 rounded-lg bg-[#7C3AED]/20 flex items-center justify-center mb-1.5"><lucide-filter class="text-[#A78BFA] text-xs" /></div>
  <h4 class="text-[0.52rem] font-bold text-white mb-1 uppercase tracking-wider">Digital Filter Benchmark</h4>
  <p class="text-[0.45rem] text-[#64748B] leading-relaxed flex-1">SMA vs EXP vs Kalman on accelerometer noise reduction. Preprocessing baseline.</p>
  <div class="mt-1.5 text-[0.42rem] text-[#7C3AED] font-mono">filter_benchmark.py</div>
  </div>

  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-2.5 flex flex-col relative overflow-hidden hover:border-[#0EA5E9]/40 transition-colors">
  <div class="text-[#0EA5E9] font-bold text-lg opacity-20 absolute top-1.5 right-2">02</div>
  <div class="w-6 h-6 rounded-lg bg-[#0EA5E9]/20 flex items-center justify-center mb-1.5"><lucide-brain class="text-[#38BDF8] text-xs" /></div>
  <h4 class="text-[0.52rem] font-bold text-white mb-1 uppercase tracking-wider">Edge Neural Network</h4>
  <p class="text-[0.45rem] text-[#64748B] leading-relaxed flex-1">INT8 quantization + pruning on ESP32-S3/RP2350. 4× compression, high accuracy.</p>
  <div class="mt-1.5 text-[0.42rem] text-[#0EA5E9] font-mono">kinto_edge_benchmark.py</div>
  </div>

  <div class="bg-[#0F172A] border border-[#7C3AED]/40 rounded-xl p-2.5 flex flex-col relative overflow-hidden shadow-[0_0_15px_rgba(124,58,237,0.1)]">
  <div class="text-[#7C3AED] font-bold text-lg opacity-30 absolute top-1.5 right-2">03</div>
  <div class="w-6 h-6 rounded-lg bg-[#7C3AED]/30 flex items-center justify-center mb-1.5"><lucide-git-branch class="text-[#A78BFA] text-xs" /></div>
  <h4 class="text-[0.52rem] font-bold text-white mb-1 uppercase tracking-wider">RL Entrainment</h4>
  <p class="text-[0.45rem] text-[#94A3B8] leading-relaxed flex-1">Q-learning discovers optimal haptic frequency without being told it. <strong class="text-white">Core closed-loop patent.</strong></p>
  <div class="mt-1.5 text-[0.42rem] text-[#A78BFA] font-mono">kinto_simulation.py</div>
  </div>

  <div class="bg-[#0F172A] border border-[#10B981]/40 rounded-xl p-2.5 flex flex-col relative overflow-hidden shadow-[0_0_15px_rgba(16,185,129,0.08)]">
  <div class="text-[#10B981] font-bold text-lg opacity-30 absolute top-1.5 right-2">04</div>
  <div class="w-6 h-6 rounded-lg bg-[#10B981]/20 flex items-center justify-center mb-1.5"><lucide-sliders class="text-[#34D399] text-xs" /></div>
  <h4 class="text-[0.52rem] font-bold text-white mb-1 uppercase tracking-wider">Integer ANC</h4>
  <p class="text-[0.45rem] text-[#94A3B8] leading-relaxed flex-1">Integer-only NLMS cancels BEMF noise on FPU-less RISC-V. <strong class="text-white">Novel DSP patent.</strong></p>
  <div class="mt-1.5 text-[0.42rem] text-[#10B981] font-mono">kinto_bemf_anc.py</div>
  </div>

  <div class="bg-[#0F172A] border border-[#F59E0B]/40 rounded-xl p-2.5 flex flex-col relative overflow-hidden shadow-[0_0_15px_rgba(245,158,11,0.08)]">
  <div class="text-[#F59E0B] font-bold text-lg opacity-30 absolute top-1.5 right-2">05</div>
  <div class="w-6 h-6 rounded-lg bg-[#F59E0B]/20 flex items-center justify-center mb-1.5"><lucide-heart-pulse class="text-[#FCD34D] text-xs" /></div>
  <h4 class="text-[0.52rem] font-bold text-white mb-1 uppercase tracking-wider">Cardiac Gating</h4>
  <p class="text-[0.45rem] text-[#94A3B8] leading-relaxed flex-1">Diastolic phase-locked haptic pacing. Zero systolic hits. <strong class="text-white">Phase-lock patent.</strong></p>
  <div class="mt-1.5 text-[0.42rem] text-[#F59E0B] font-mono">kinto_cardiac_gating.py</div>
  </div>

</div>

<div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl overflow-hidden">
  <table class="w-full text-[0.48rem]">
  <thead>
  <tr class="border-b border-[#1E2E38] bg-[#0A1520]">
  <th class="text-left px-3 py-1.5 text-[#64748B] font-semibold">#</th>
  <th class="text-left px-3 py-1.5 text-[#64748B] font-semibold">Study</th>
  <th class="text-left px-3 py-1.5 text-[#64748B] font-semibold">Primary Metric</th>
  <th class="text-left px-3 py-1.5 text-[#64748B] font-semibold">Patent Domain</th>
  </tr>
  </thead>
  <tbody>
  <tr class="border-b border-[#1E2E38]"><td class="px-3 py-1 text-[#7C3AED]">1</td><td class="px-3 py-1 text-[#94A3B8]">Filter Benchmark</td><td class="px-3 py-1 text-white">MSE accuracy / latency</td><td class="px-3 py-1 text-[#64748B]">Signal preprocessing</td></tr>
  <tr class="border-b border-[#1E2E38]"><td class="px-3 py-1 text-[#0EA5E9]">2</td><td class="px-3 py-1 text-[#94A3B8]">Edge ML Deployment</td><td class="px-3 py-1 text-white">Model compression + accuracy</td><td class="px-3 py-1 text-[#64748B]">On-device AI feasibility</td></tr>
  <tr class="border-b border-[#1E2E38]"><td class="px-3 py-1 text-[#A78BFA]">3</td><td class="px-3 py-1 text-[#94A3B8]">RL Entrainment</td><td class="px-3 py-1 text-white">HRV coherence improvement</td><td class="px-3 py-1 text-[#64748B]">Core closed-loop patent</td></tr>
  <tr class="border-b border-[#1E2E38]"><td class="px-3 py-1 text-[#34D399]">4</td><td class="px-3 py-1 text-[#94A3B8]">Integer ANC</td><td class="px-3 py-1 text-white">SNR recovery + latency</td><td class="px-3 py-1 text-[#64748B]">FPU-less DSP patent</td></tr>
  <tr><td class="px-3 py-1 text-[#FCD34D]">5</td><td class="px-3 py-1 text-[#94A3B8]">Cardiac Gating</td><td class="px-3 py-1 text-white">Systolic-phase avoidance</td><td class="px-3 py-1 text-[#64748B]">Phase-lock patent</td></tr>
  </tbody>
  </table>
</div>
</div>

<!--
Slide 4: Project Scope

The midterm scope comprises five computational studies, each validating a distinct patent claim. These cover digital filtering, edge neural network deployment, closed-loop reinforcement learning entrainment, integer-optimized active noise cancellation, and diastolic phase-locked cardiac synchronization.
-->
---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full">
<div class="mb-3">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5">AI Tools & Methodology</p>
  <h1 class="text-xl font-bold text-white leading-tight">Leveraging ECC & ARS to optimize tokens and define research gaps</h1>
</div>

<div class="grid grid-cols-2 gap-4 flex-1">
  <div class="flex flex-col gap-3">
  
  <div class="bg-[#0F172A] border border-[#7C3AED]/30 rounded-xl p-3 shadow-[0_0_15px_rgba(124,58,237,0.08)] flex-1 flex flex-col justify-between">
  <div>
    <h3 class="text-[#A78BFA] font-bold text-xs mb-1.5 flex items-center gap-1.5">
      <lucide-zap class="text-[#7C3AED]" />ECC (Everything Claude Code)
    </h3>
    <p class="text-[0.5rem] text-[#64748B] leading-relaxed mb-2">
      Optimized agent harness configurations to prevent context bloat and minimize token consumption.
    </p>
  </div>
  <div class="space-y-1">
    <div class="flex items-start gap-1.5">
      <lucide-check class="text-[#7C3AED] text-[0.5rem] mt-0.5 flex-shrink-0" />
      <p class="text-[0.5rem] text-white"><strong>Context Control:</strong> Strict <code>.claudeignore</code> blocks build/dependency trees.</p>
    </div>
    <div class="flex items-start gap-1.5">
      <lucide-check class="text-[#7C3AED] text-[0.5rem] mt-0.5 flex-shrink-0" />
      <p class="text-[0.5rem] text-white"><strong>CLI Optimization:</strong> Sanitized compiler logs to strip token-heavy telemetry.</p>
    </div>
    <div class="flex items-start gap-1.5">
      <lucide-check class="text-[#7C3AED] text-[0.5rem] mt-0.5 flex-shrink-0" />
      <p class="text-[0.5rem] text-white"><strong>Session Discipline:</strong> Regular compaction and focused subagents keep logs concise.</p>
    </div>
  </div>
  </div>

  </div>

  <div class="flex flex-col gap-3">

  <div class="bg-[#0F172A] border border-[#0EA5E9]/30 rounded-xl p-3 shadow-[0_0_15px_rgba(14,165,233,0.08)] flex-1 flex flex-col justify-between">
  <div>
    <h3 class="text-[#38BDF8] font-bold text-xs mb-1.5 flex items-center gap-1.5">
      <lucide-brain class="text-[#0EA5E9]" />ARS (Advanced Research Skills)
    </h3>
    <p class="text-[0.5rem] text-[#64748B] leading-relaxed mb-2">
      Structured 10-stage systematic pipeline for literature review, thesis formulation, and gap discovery.
    </p>
  </div>
  <div class="space-y-1">
    <div class="flex items-start gap-1.5">
      <lucide-check class="text-[#0EA5E9] text-[0.5rem] mt-0.5 flex-shrink-0" />
      <p class="text-[0.5rem] text-white"><strong>Literature Synthesis:</strong> Automated citation searches to scrape metadata across databases.</p>
    </div>
    <div class="flex items-start gap-1.5">
      <lucide-check class="text-[#0EA5E9] text-[0.5rem] mt-0.5 flex-shrink-0" />
      <p class="text-[0.5rem] text-white"><strong>Research Questions:</strong> Extracted biophysical resonance limits from literature maps.</p>
    </div>
    <div class="flex items-start gap-1.5">
      <lucide-check class="text-[#0EA5E9] text-[0.5rem] mt-0.5 flex-shrink-0" />
      <p class="text-[0.5rem] text-white"><strong>Identifying Gaps:</strong> Spotted the "sparse zone": <em>only 8.1% of EDA studies involve elderly</em>.</p>
    </div>
  </div>
  </div>

  </div>
</div>
</div>

<!--
Slide 5: AI Tools & Setup

For this midterm, I utilized two primary open-source repositories to guide the AI workflow. First, I used the ECC (Everything Claude Code) repository to set up strict token-saving guidelines, preventing unnecessary code scans and optimizing context. Second, I used the ARS (Advanced Research Skills) repository to structure my literature reviews and formulate my core research questions, identifying a critical research gap in elderly electrodermal activity studies.
-->
---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full">
<div class="mb-1.5">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5">My Process — How This Was Built</p>
  <h1 class="text-xl font-bold text-white leading-tight">I didn't write the simulation code. I directed it.</h1>
</div>

<div class="grid grid-cols-[1fr_1.4fr] gap-3 flex-1">
  <div class="flex flex-col gap-1.5">
  <div class="text-[0.52rem] text-[#94A3B8] leading-relaxed">Each of the five studies started from the same place: a research question, a hardware constraint, and a signal model I understood well enough to specify — but not well enough to code efficiently at that level of detail.</div>
  <div class="text-[0.52rem] text-[#94A3B8] leading-relaxed">My job was to define the <strong class="text-white">physics, the edge constraints, and what a meaningful result would look like.</strong> Claude Code's job was to translate that into working Python — signal generation, algorithm implementation, simulation loop, and visualization.</div>
  <div class="bg-gradient-to-br from-[#7C3AED]/10 to-transparent border border-[#7C3AED]/20 rounded-xl p-2.5">
  <div class="text-[0.52rem] text-[#A78BFA] font-semibold mb-0.5">The key distinction</div>
  <div class="text-[0.48rem] text-[#94A3B8] leading-relaxed">I was not "asking AI to do my research." I was using it the same way an engineer uses a compiler — to turn a specification I already understood into executable output, then reading and verifying the results myself.</div>
  </div>
  </div>

  <div class="flex flex-col gap-1.5">
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl overflow-hidden shadow-xl">
  <div class="px-3 py-1 border-b border-[#1E2E38] bg-[#0A1520]"><p class="text-[0.48rem] font-bold text-[#7C3AED] uppercase tracking-wider">The Loop — repeated for all 5 studies</p></div>
  <div class="flex flex-col divide-y divide-[#1E2E38]">
  <div class="flex items-start gap-2 px-3 py-1">
  <div class="w-4.5 h-4.5 rounded bg-[#7C3AED]/20 text-[#A78BFA] text-[0.45rem] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
  <div>
  <p class="text-[0.5rem] font-semibold text-white">I defined the signal model and constraints</p>
  <p class="text-[0.43rem] text-[#64748B] leading-relaxed">Hardware limits (no FPU, 400 KB SRAM), sensor specs, noise sources, physiological targets</p>
  </div>
  </div>
  <div class="flex items-start gap-2 px-3 py-1">
  <div class="w-4.5 h-4.5 rounded bg-[#7C3AED]/20 text-[#A78BFA] text-[0.45rem] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
  <div>
  <p class="text-[0.5rem] font-semibold text-white">Claude Code implemented the full simulation</p>
  <p class="text-[0.43rem] text-[#64748B] leading-relaxed">Synthetic signal generation, algorithm code, test harness, matplotlib output — typically 300–600 lines per study</p>
  </div>
  </div>
  <div class="flex items-start gap-2 px-3 py-1">
  <div class="w-4.5 h-4.5 rounded bg-[#7C3AED]/20 text-[#A78BFA] text-[0.45rem] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
  <div>
  <p class="text-[0.5rem] font-semibold text-white">I read the output, interpreted the numbers</p>
  <p class="text-[0.43rem] text-[#64748B] leading-relaxed">Checked whether results matched the biophysical expectation — not just "did it run"</p>
  </div>
  </div>
  <div class="flex items-start gap-2 px-3 py-1">
  <div class="w-4.5 h-4.5 rounded bg-[#7C3AED]/20 text-[#A78BFA] text-[0.45rem] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">4</div>
  <div>
  <p class="text-[0.5rem] font-semibold text-white">I identified what was patentable in the result</p>
  <p class="text-[0.43rem] text-[#64748B] leading-relaxed">Prior art search, gap identification, claim language — required domain knowledge, not prompting</p>
  </div>
  </div>
  </div>
  </div>
  </div>

</div>

</div>

<!--
Slide 6: My Process

To develop these studies, we followed a rigorous engineering workflow: generating synthetic signal baselines, implementing and optimizing the algorithms, running comparative test suites, validating the results against physiological models, and drafting defensible patent claims. This ensures each contribution is grounded in solid computational data.
-->
---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full">
<div class="mb-1.5">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5">What AI Actually Did — Technical Breakdown</p>
  <h1 class="text-xl font-bold text-white leading-tight">Five non-trivial engineering tasks Claude Code executed per study</h1>
</div>

<div class="grid grid-cols-5 gap-2 mb-1.5">

  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-2 flex flex-col">
  <div class="w-5.5 h-5.5 rounded-lg bg-[#0EA5E9]/20 flex items-center justify-center mb-1"><lucide-activity class="text-[#38BDF8] text-xs" /></div>
  <h4 class="text-[0.5rem] font-bold text-white mb-0.5">Synthetic Signal Generation</h4>
  <p class="text-[0.4rem] text-[#64748B] leading-relaxed flex-1">Generated realistic PPG waveforms, accelerometer noise, LRA BEMF harmonics, and boost-converter switching ripple to match datasheets.</p>
  </div>

  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-2 flex flex-col">
  <div class="w-5.5 h-5.5 rounded-lg bg-[#7C3AED]/20 flex items-center justify-center mb-1"><lucide-code-2 class="text-[#A78BFA] text-xs" /></div>
  <h4 class="text-[0.5rem] font-bold text-white mb-0.5">DSP Algorithm Implementation</h4>
  <p class="text-[0.4rem] text-[#64748B] leading-relaxed flex-1">Wrote Kalman filter, NLMS adaptive filter, peak detector, and phase-locked loop from scratch in NumPy — no library wrappers.</p>
  </div>

  <div class="bg-[#0F172A] border border-[#A78BFA]/30 rounded-xl p-2 flex flex-col shadow-[0_0_10px_rgba(124,58,237,0.08)]">
  <div class="w-5.5 h-5.5 rounded-lg bg-[#7C3AED]/30 flex items-center justify-center mb-1"><lucide-git-branch class="text-[#A78BFA] text-xs" /></div>
  <h4 class="text-[0.5rem] font-bold text-white mb-0.5">Tabular Q-Learning RL Agent</h4>
  <p class="text-[0.4rem] text-[#64748B] leading-relaxed flex-1">Built the full RL loop: state discretization, ε-greedy exploration, Q-table updates, reward shaping from HRV coherence.</p>
  </div>

  <div class="bg-[#0F172A] border border-[#34D399]/30 rounded-xl p-2 flex flex-col shadow-[0_0_10px_rgba(16,185,129,0.08)]">
  <div class="w-5.5 h-5.5 rounded-lg bg-[#10B981]/20 flex items-center justify-center mb-1"><lucide-hash class="text-[#34D399] text-xs" /></div>
  <h4 class="text-[0.5rem] font-bold text-white mb-0.5">Fixed-Point Q10 Arithmetic</h4>
  <p class="text-[0.4rem] text-[#64748B] leading-relaxed flex-1">Simulated integer-only Q10 math in Python to mirror ESP32-C3 execution: bitshifts, overflow checks, NLMS weight updates without floats.</p>
  </div>

  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-2 flex flex-col">
  <div class="w-5.5 h-5.5 rounded-lg bg-[#F59E0B]/20 flex items-center justify-center mb-1"><lucide-bar-chart-2 class="text-[#FCD34D] text-xs" /></div>
  <h4 class="text-[0.5rem] font-bold text-white mb-0.5">Statistical Analysis & Figures</h4>
  <p class="text-[0.4rem] text-[#64748B] leading-relaxed flex-1">Computed RMSSD, HRV coherence, SNR in dB, p-values, mean ± SD, and produced multi-panel publication-quality figures.</p>
  </div>

 </div>

<div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-2">
  <h3 class="text-white font-bold text-[0.58rem] mb-1 flex items-center gap-1.5"><lucide-file-code class="text-[#7C3AED]" />What a single study looked like in code terms</h3>
  <div class="grid grid-cols-4 gap-1.5">
  <div class="bg-[#080E14] border border-[#1E2E38] rounded-lg p-1.5">
  <p class="text-[0.44rem] font-semibold text-[#7C3AED] mb-0">filter_benchmark.py</p>
  <p class="text-[0.38rem] text-[#64748B] leading-relaxed">~280 lines — signal synthesis, SMA/EXP/Kalman, MSE + timing loop, 2-panel chart</p>
  </div>
  <div class="bg-[#080E14] border border-[#1E2E38] rounded-lg p-1.5">
  <p class="text-[0.44rem] font-semibold text-[#0EA5E9] mb-0">kinto_edge_benchmark.py</p>
  <p class="text-[0.38rem] text-[#64748B] leading-relaxed">~320 lines — model creation, INT8 simulation, pruning, SRAM budget checker, 3-panel chart</p>
  </div>
  <div class="bg-[#080E14] border border-[#1E2E38] rounded-lg p-1.5">
  <p class="text-[0.44rem] font-semibold text-[#A78BFA] mb-0">kinto_simulation.py</p>
  <p class="text-[0.38rem] text-[#64748B] leading-relaxed">~520 lines — Lorentzian model, Q-agent, 300-episode loop, Q-value heatmap, convergence analysis</p>
  </div>
  <div class="bg-[#080E14] border border-[#1E2E38] rounded-lg p-1.5">
  <p class="text-[0.44rem] font-semibold text-[#34D399] mb-0">kinto_bemf_anc.py</p>
  <p class="text-[0.38rem] text-[#64748B] leading-relaxed">~410 lines — BEMF noise, Q10 integer NLMS, float baseline, SNR convergence, spectrum analysis</p>
  </div>
  </div>
</div>

</div>

<!--
Slide 7: What AI Did

Generative AI played a key role as a co-developer in this project. It helped synthesize realistic PPG and accelerometer signals, implement and benchmark standard digital filters, write fixed-point integer math libraries, build the tabular Q-learning loop, and structure the prior art search for our patent claims.
-->
---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full">
<div class="mb-1.5">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5">Prompt → Code → Patent — A Concrete Example</p>
  <h1 class="text-xl font-bold text-white leading-tight">How one conversation became a defensible patent claim</h1>
</div>

<div class="grid grid-cols-3 gap-2 flex-1">

  <!-- Step 1: My prompt -->
  <div class="flex flex-col gap-1.5">
  <div class="flex items-center gap-1 mb-0.5">
  <div class="w-4.5 h-4.5 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center text-[0.4rem] font-bold text-[#A78BFA]">1</div>
  <p class="text-[0.5rem] font-bold text-white uppercase tracking-wider">What I gave Claude Code</p>
  </div>
  <div class="bg-[#0F172A] border border-[#7C3AED]/30 rounded-xl p-2 flex-1">
  <div class="bg-[#080E14] border border-[#1E2E38] rounded-lg p-1.5 text-[0.4rem] text-[#94A3B8] leading-relaxed font-mono italic mb-1">
  "The ESP32-C3 has no FPU. The LRA motor is running at 175 Hz and producing BEMF harmonics that corrupt the PPG. I need to cancel this noise using only integer arithmetic in Q10 format. Implement normalized LMS with a 32-tap FIR, step size 0.08, and compare SNR before and after vs a float baseline. The PPG is 100 Hz, 2000 samples."
  </div>
  <div class="space-y-0.5">
  <div class="flex items-start gap-1"><lucide-check class="text-[#7C3AED] text-[0.5rem] mt-0.5" /><p class="text-[0.38rem] text-[#94A3B8]">Hardware constraint: RISC-V no FPU</p></div>
  <div class="flex items-start gap-1"><lucide-check class="text-[#7C3AED] text-[0.5rem] mt-0.5" /><p class="text-[0.38rem] text-[#94A3B8]">Signal model: BEMF frequencies, sample rate</p></div>
  <div class="flex items-start gap-1"><lucide-check class="text-[#7C3AED] text-[0.5rem] mt-0.5" /><p class="text-[0.38rem] text-[#94A3B8]">Algorithm spec: NLMS, Q10, μ = 0.08, 32-tap</p></div>
  <div class="flex items-start gap-1"><lucide-check class="text-[#7C3AED] text-[0.5rem] mt-0.5" /><p class="text-[0.38rem] text-[#94A3B8]">Success criterion: SNR comparison vs float</p></div>
  </div>
  </div>
  </div>

  <!-- Step 2: What AI did -->
  <div class="flex flex-col gap-1.5">
  <div class="flex items-center gap-1 mb-0.5">
  <div class="w-4.5 h-4.5 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center text-[0.4rem] font-bold text-[#34D399]">2</div>
  <p class="text-[0.5rem] font-bold text-white uppercase tracking-wider">What Claude Code produced</p>
  </div>
  <div class="bg-[#0F172A] border border-[#10B981]/30 rounded-xl p-2 flex-1">
  <div class="bg-[#080E14] border border-[#1E2E38] rounded-lg p-1.5 font-mono text-[0.38rem] text-[#34D399] leading-relaxed mb-1">
  <span class="text-[#64748B]"># Q10 fixed-point NLMS — no floats</span><br>
  SCALE = 1024  <span class="text-[#64748B]"># 2^10</span><br>
  weights = [0] * 32<br>
  <span class="text-[#64748B]"># integer multiply + right-shift 10</span><br>
  def q10_mul(a, b):<br>
  &nbsp;&nbsp;return (a * b) >> 10<br>
  ...<br>
  <span class="text-[#64748B]"># NLMS weight update (all integers)</span><br>
  norm = sum(q10_mul(x,x) for x in buf)<br>
  mu_q = int(0.08 * SCALE)<br>
  for i in range(32):<br>
  &nbsp;&nbsp;weights[i] += q10_mul(mu_q*err, buf[i]) // (norm+1)
  </div>
  <div class="space-y-0.5">
  <div class="flex items-start gap-1"><lucide-check class="text-[#10B981] text-[0.5rem] mt-0.5" /><p class="text-[0.38rem] text-[#94A3B8]">~410 lines of working Python simulation</p></div>
  <div class="flex items-start gap-1"><lucide-check class="text-[#10B981] text-[0.5rem] mt-0.5" /><p class="text-[0.38rem] text-[#94A3B8]">Synthetic BEMF + switching noise generation</p></div>
  <div class="flex items-start gap-1"><lucide-check class="text-[#10B981] text-[0.5rem] mt-0.5" /><p class="text-[0.38rem] text-[#94A3B8]">Full Q10 integer NLMS with no stdlib floats</p></div>
  <div class="flex items-start gap-1"><lucide-check class="text-[#10B981] text-[0.5rem] mt-0.5" /><p class="text-[0.38rem] text-[#94A3B8]">Float NLMS baseline for direct comparison</p></div>
  <div class="flex items-start gap-1"><lucide-check class="text-[#10B981] text-[0.5rem] mt-0.5" /><p class="text-[0.38rem] text-[#94A3B8]">3-panel matplotlib figure, SNR numbers in output</p></div>
  </div>
  </div>
  </div>

  <!-- Step 3: What I did with the result -->
  <div class="flex flex-col gap-1.5">
  <div class="flex items-center gap-1 mb-0.5">
  <div class="w-4.5 h-4.5 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B]/40 flex items-center justify-center text-[0.4rem] font-bold text-[#FCD34D]">3</div>
  <p class="text-[0.5rem] font-bold text-white uppercase tracking-wider">What I did with the result</p>
  </div>
  <div class="bg-[#0F172A] border border-[#F59E0B]/30 rounded-xl p-2 flex-1">
  <div class="bg-[#080E14] border border-[#1E2E38] rounded-lg p-1.5 text-[0.4rem] text-[#94A3B8] leading-relaxed mb-1 font-mono">
  Output: Q10 SNR = +23.62 dB, Float SNR = +25.03 dB, Q10 latency = 0.600 µs/sample
  </div>
  <div class="space-y-0.5 mb-1 bg-[#080E14]/30 p-1.5 rounded-lg border border-[#1E2E38]/50">
  <div class="flex items-start gap-1"><lucide-brain class="text-[#FCD34D] text-[0.5rem] mt-0.5 flex-shrink-0" /><p class="text-[0.38rem] text-[#94A3B8]"><strong class="text-white">Interpreted:</strong> 1.42 dB gap is clinically negligible; latency is 15× better</p></div>
  <div class="flex items-start gap-1"><lucide-search class="text-[#FCD34D] text-[0.5rem] mt-0.5 flex-shrink-0" /><p class="text-[0.38rem] text-[#94A3B8]"><strong class="text-white">Prior art:</strong> No published integer NLMS on RISC-V without soft-float</p></div>
  <div class="flex items-start gap-1"><lucide-file-text class="text-[#FCD34D] text-[0.5rem] mt-0.5 flex-shrink-0" /><p class="text-[0.38rem] text-[#94A3B8]"><strong class="text-white">Wrote claim:</strong> "exclusively via integer and bitwise operations..."</p></div>
  </div>
  <div class="bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-lg p-1 text-center">
  <p class="text-[0.38rem] text-[#FCD34D] font-semibold">→ Patent B claim language, ready to file</p>
  </div>
  </div>
  </div>

</div>

<div class="mt-1.5 bg-gradient-to-r from-[#7C3AED]/10 via-[#10B981]/10 to-[#F59E0B]/10 border border-[#1E2E38] rounded-xl p-1.5">
  <p class="text-[0.45rem] text-[#94A3B8] text-center italic">The same 3-step loop repeated for all five studies. AI executed the engineering. I provided the specification and extracted the intellectual contribution.</p>
</div>

</div>

<!--
Slide 8: Prompt

Here is an example of the prompting methodology used. We instructed the model to act as a senior embedded DSP developer to generate a normalized LMS filter in Q10 fixed-point format, ensuring zero floating-point operations. The output code compiled successfully and met our microsecond latency constraints.
-->
---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full">
<div class="mb-3">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5">Key Learnings & Impact</p>
  <h1 class="text-xl font-bold text-white leading-tight">How these AI-driven workflows translate into actual academic research</h1>
</div>

<div class="grid grid-cols-2 gap-4 flex-1">
  <div class="flex flex-col gap-3">
  
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3 flex-1 flex flex-col justify-between">
  <h3 class="text-white font-bold text-xs mb-1.5 flex items-center gap-1.5">
    <lucide-lightbulb class="text-[#F59E0B] text-xs" />Key Learnings
  </h3>
  <div class="space-y-2">
    <div>
      <h4 class="text-[0.45rem] font-bold text-[#A78BFA] uppercase tracking-wider">1. Token Discipline = Research Efficiency</h4>
      <p class="text-[0.42rem] text-[#94A3B8] leading-relaxed">Restricting context windows focuses the agent and cuts latency, preventing code output drift.</p>
    </div>
    <div>
      <h4 class="text-[0.45rem] font-bold text-[#A78BFA] uppercase tracking-wider">2. Systematized Pipelines</h4>
      <p class="text-[0.42rem] text-[#94A3B8] leading-relaxed">Moving sequentially through defined stages (ARS) avoids unproductive open-ended loops.</p>
    </div>
    <div>
      <h4 class="text-[0.45rem] font-bold text-[#A78BFA] uppercase tracking-wider">3. Human-Driven Insight</h4>
      <p class="text-[0.42rem] text-[#94A3B8] leading-relaxed">AI compiles the mathematical constraints; human judgment evaluates physiological resonance.</p>
    </div>
  </div>
  </div>

  </div>

  <div class="flex flex-col gap-3">

  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3 flex-1 flex flex-col justify-between">
  <h3 class="text-white font-bold text-xs mb-1.5 flex items-center gap-1.5">
    <lucide-flask-conical class="text-[#34D399] text-xs" />Translating to Actual Research
  </h3>
  <div class="space-y-2">
    <div class="flex gap-1.5">
      <div class="w-4 h-4 rounded bg-[#34D399]/20 text-[#34D399] flex items-center justify-center flex-shrink-0 mt-0.5 text-[0.45rem] font-bold">A</div>
      <div>
        <p class="text-[0.48rem] font-bold text-white uppercase tracking-wider">Silicon-Free Validation</p>
        <p class="text-[0.42rem] text-[#94A3B8] leading-relaxed">Verify fixed-point Q10 math limits in Python simulation before fabricating custom ESP32-C3 PCBs.</p>
      </div>
    </div>
    <div class="flex gap-1.5">
      <div class="w-4 h-4 rounded bg-[#34D399]/20 text-[#34D399] flex items-center justify-center flex-shrink-0 mt-0.5 text-[0.45rem] font-bold">B</div>
      <div>
        <p class="text-[0.48rem] font-bold text-white uppercase tracking-wider">Autonomic Simulation</p>
        <p class="text-[0.42rem] text-[#94A3B8] leading-relaxed">Synthesize Lorentzian entrainment systems to mathematically prove closed-loop pacing limits.</p>
      </div>
    </div>
    <div class="flex gap-1.5">
      <div class="w-4 h-4 rounded bg-[#34D399]/20 text-[#34D399] flex items-center justify-center flex-shrink-0 mt-0.5 text-[0.45rem] font-bold">C</div>
      <div>
        <p class="text-[0.48rem] font-bold text-white uppercase tracking-wider">Accelerating Patenting</p>
        <p class="text-[0.42rem] text-[#94A3B8] leading-relaxed">Map verified execution metrics directly to patent claim text, accelerating time-to-filing.</p>
      </div>
    </div>
  </div>
  </div>

  </div>
</div>
</div>

<!--
Slide 9: Key Learnings & Research Impact

In summary, this AI-driven approach taught me that token discipline is crucial for keeping prompts precise and outputs clean. Combining ECC with the systematic pipeline in the ARS repository helped move from literature gap identification to functional simulation in record time. In actual research, this enables silicon-free algorithm validation, precise biophysical simulations, and a direct pipeline from code metrics to defensible patent claim language.
-->
---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full">
<div class="mb-1.5">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5">What AI Cannot Do — Where My Work Was</p>
  <h1 class="text-xl font-bold text-white leading-tight">The parts that required domain knowledge, not prompting</h1>
</div>

<div class="grid grid-cols-2 gap-3 flex-1">
  <div class="flex flex-col gap-2">
  <div class="bg-[#EF4444]/8 border border-[#EF4444]/25 rounded-xl p-2.5 shadow-xl flex-1">
  <h3 class="text-[#F87171] font-bold text-[0.7rem] mb-1.5 flex items-center gap-1.5"><lucide-x-circle />AI could not tell me…</h3>
  <div class="space-y-1">
  <div class="flex items-start gap-1"><lucide-minus class="text-[#EF4444] text-[0.5rem] mt-0.5 flex-shrink-0" /><p class="text-[0.48rem] text-[#94A3B8]"><strong class="text-white">That diastolic-phase pacing matters</strong> — the vagal gate mechanism is cardiology, not something a prompt produces</p></div>
  <div class="flex items-start gap-1"><lucide-minus class="text-[#EF4444] text-[0.5rem] mt-0.5 flex-shrink-0" /><p class="text-[0.48rem] text-[#94A3B8]"><strong class="text-white">That f* = 0.8 Hz is a Lorentzian resonance</strong> — I specified the biophysical model; AI implemented it</p></div>
  <div class="flex items-start gap-1"><lucide-minus class="text-[#EF4444] text-[0.5rem] mt-0.5 flex-shrink-0" /><p class="text-[0.48rem] text-[#94A3B8]"><strong class="text-white">That no prior art uses integer NLMS on RISC-V</strong> — prior art gaps require literature search and domain judgment</p></div>
  <div class="flex items-start gap-1"><lucide-minus class="text-[#EF4444] text-[0.5rem] mt-0.5 flex-shrink-0" /><p class="text-[0.48rem] text-[#94A3B8]"><strong class="text-white">Whether a result is clinically significant</strong> — a 1.42 dB SNR loss is negligible in PPG; AI doesn't know that without me saying so</p></div>
  <div class="flex items-start gap-1"><lucide-minus class="text-[#EF4444] text-[0.5rem] mt-0.5 flex-shrink-0" /><p class="text-[0.48rem] text-[#94A3B8]"><strong class="text-white">The Japan PMD Act wellness classification</strong> — regulatory strategy is human judgment</p></div>
  </div>
  </div>
  </div>
  <div class="flex flex-col gap-2">
  <div class="bg-[#34D399]/8 border border-[#34D399]/25 rounded-xl p-2.5 shadow-xl">
  <h3 class="text-[#34D399] font-bold text-[0.7rem] mb-1.5 flex items-center gap-1.5"><lucide-check-circle />AI consistently did well at…</h3>
  <div class="space-y-1">
  <div class="flex items-start gap-1"><lucide-check class="text-[#10B981] text-[0.5rem] mt-0.5 flex-shrink-0" /><p class="text-[0.48rem] text-[#94A3B8]"><strong class="text-white">Implementing algorithms from a clear specification</strong> — once I said "Q10 NLMS, 32-tap, μ=0.08", the code was correct first try</p></div>
  <div class="flex items-start gap-1"><lucide-check class="text-[#10B981] text-[0.5rem] mt-0.5 flex-shrink-0" /><p class="text-[0.48rem] text-[#94A3B8]"><strong class="text-white">Generating realistic synthetic signals</strong> — PPG, accelerometer, BEMF harmonics that matched sensor datasheets</p></div>
  <div class="flex items-start gap-1"><lucide-check class="text-[#10B981] text-[0.5rem] mt-0.5 flex-shrink-0" /><p class="text-[0.48rem] text-[#94A3B8]"><strong class="text-white">Writing clean, readable Python across 1,500+ total lines</strong> with consistent structure across all 5 studies</p></div>
  <div class="flex items-start gap-1"><lucide-check class="text-[#10B981] text-[0.5rem] mt-0.5 flex-shrink-0" /><p class="text-[0.48rem] text-[#94A3B8]"><strong class="text-white">Adapting immediately when I gave corrections</strong> — "make μ adaptive, not fixed" took one turn, not a rewrite</p></div>
  <div class="flex items-start gap-1"><lucide-check class="text-[#10B981] text-[0.5rem] mt-0.5 flex-shrink-0" /><p class="text-[0.48rem] text-[#94A3B8]"><strong class="text-white">Formatting output for patent documentation</strong> — tables, unit conversions, ± notation, p-values</p></div>
  </div>
  </div>

  <div class="bg-gradient-to-br from-[#7C3AED]/10 to-transparent border border-[#7C3AED]/20 rounded-xl p-2">
  <div class="text-[0.5rem] text-[#A78BFA] font-semibold mb-0">The honest summary</div>
  <div class="text-[0.45rem] text-[#94A3B8] leading-relaxed">AI compressed maybe three weeks of implementation work into a few days. The research — what to build, what it means, why it's novel — was still mine. That's exactly the right division of labor.</div>
  </div>

  </div>

</div>
</div>

<!--
Slide 10: What AI Cannot Do

However, human engineering remains critical. AI cannot define the clinical requirements, make hardware trade-offs like selecting the ESP32-C3 over more expensive MCUs, verify the safety of haptic stimulation timing, or evaluate the legal strength and boundaries of our patent claims against prior art.
-->
---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full">
<div class="mb-2.5">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5">Study 1 — Digital Filter Benchmark</p>
  <h1 class="text-xl font-bold text-white leading-tight">Comparing three real-time filters for accelerometer noise reduction</h1>
</div>

<div class="grid grid-cols-[1fr_1.3fr] gap-4 flex-1">
  <div class="flex flex-col gap-3">

  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3 shadow-xl">
  <h3 class="text-white font-bold text-xs mb-1.5 flex items-center gap-1.5"><lucide-settings class="text-[#7C3AED]" />Test Signal Setup</h3>
  <div class="space-y-1.5 text-[0.52rem] text-[#94A3B8]">
  <div class="flex justify-between border-b border-[#1E2E38] pb-1"><span>Sample rate</span><span class="text-white">100 Hz, 2000 samples (20 s)</span></div>
  <div class="flex justify-between border-b border-[#1E2E38] pb-1"><span>Walking cadence</span><span class="text-white">1.5 Hz primary motion</span></div>
  <div class="flex justify-between border-b border-[#1E2E38] pb-1"><span>Tilt drift</span><span class="text-white">0.3 Hz slow component</span></div>
  <div class="flex justify-between border-b border-[#1E2E38] pb-1"><span>Noise σ</span><span class="text-white">0.6 Gaussian</span></div>
  <div class="flex justify-between"><span>Impulse spikes</span><span class="text-white">3% rate, amplitude 2–4 units</span></div>
  </div>
  </div>

  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3 shadow-xl">
  <h3 class="text-white font-bold text-xs mb-1.5 flex items-center gap-1.5"><lucide-sliders class="text-[#7C3AED]" />Filters Compared</h3>
  <div class="space-y-1.5">
  <div class="flex items-center gap-2 text-[0.52rem]"><div class="w-1.5 h-1.5 rounded-full bg-[#A78BFA]"></div><span class="text-white font-semibold">SMA</span><span class="text-[#64748B]">Simple Moving Average (window = 5)</span></div>
  <div class="flex items-center gap-2 text-[0.52rem]"><div class="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></div><span class="text-white font-semibold">EXP</span><span class="text-[#64748B]">Exponential Smoothing (α = 0.3)</span></div>
  <div class="flex items-center gap-2 text-[0.52rem]"><div class="w-1.5 h-1.5 rounded-full bg-[#34D399]"></div><span class="text-white font-semibold">KAL</span><span class="text-[#64748B]">Kalman Filter (tuned noise parameters)</span></div>
  </div>
  </div>

  </div>

  <div class="flex flex-col gap-3">
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl overflow-hidden shadow-xl">
  <div class="px-3.5 py-1.5 border-b border-[#1E2E38] bg-[#0A1520]">
  <h3 class="text-white font-bold text-xs flex items-center gap-1.5"><lucide-table class="text-[#7C3AED]" />Results</h3>
  </div>
  <table class="w-full text-[0.52rem]">
  <thead><tr class="border-b border-[#1E2E38] bg-[#0A1520]">
  <th class="text-left px-3 py-1 text-[#64748B]">Filter</th>
  <th class="text-left px-3 py-1 text-[#64748B]">MSE (accuracy)</th>
  <th class="text-left px-3 py-1 text-[#64748B]">Latency (ms/call)</th>
  </tr></thead>
  <tbody>
  <tr class="border-b border-[#1E2E38] bg-[#7C3AED]/5">
  <td class="px-3 py-1 text-[#A78BFA] font-semibold">SMA ✓ best accuracy</td>
  <td class="px-3 py-1 text-white font-bold">0.0537</td>
  <td class="px-3 py-1 text-[#94A3B8]">5.82</td>
  </tr>
  <tr class="border-b border-[#1E2E38]">
  <td class="px-3 py-1 text-[#94A3B8]">EXP</td>
  <td class="px-3 py-1 text-[#94A3B8]">0.196</td>
  <td class="px-3 py-1 text-[#94A3B8]">0.506</td>
  </tr>
  <tr>
  <td class="px-3 py-1 text-[#34D399]">KAL ✓ fastest</td>
  <td class="px-3 py-1 text-[#94A3B8]">0.530</td>
  <td class="px-3 py-1 text-white font-bold">0.489</td>
  </tr>
  </tbody>
  </table>
  </div>

  <div class="grid grid-cols-2 gap-2.5">
  <div class="bg-[#0F172A] border border-[#7C3AED]/30 rounded-xl p-2.5 text-center">
  <p class="text-xl font-bold text-[#A78BFA]">9.87×</p>
  <p class="text-[0.46rem] text-[#64748B] mt-0.5">SMA more accurate than Kalman</p>
  </div>
  <div class="bg-[#0F172A] border border-[#38BDF8]/30 rounded-xl p-2.5 text-center">
  <p class="text-xl font-bold text-[#38BDF8]">11.9×</p>
  <p class="text-[0.46rem] text-[#64748B] mt-0.5">SMA slower than Kalman</p>
  </div>
  </div>

  <div class="bg-gradient-to-r from-[#7C3AED]/15 to-transparent border-l-4 border-[#7C3AED] p-2 rounded-r-xl">
  <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed"><strong class="text-white">Recommendation:</strong> Exponential smoothing for battery-constrained real-time use; SMA for offline post-processing where accuracy dominates.</p>
  </div>
  </div>
</div>
</div>

<!--
Slide 11: Study 1 (Filter Benchmark)

In Study 1, we benchmarked simple moving average, exponential smoothing, and Kalman filters for accelerometer noise reduction. While the moving average achieved the lowest mean squared error, exponential smoothing proved to be the most computationally efficient choice for real-time, low-power wearable use.
-->
---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full">
<div class="mb-2.5">
  <p class="text-[0.6rem] font-semibold text-[#0EA5E9] tracking-[0.3em] uppercase mb-0.5">Study 2 — Edge Neural Network Deployment</p>
  <h1 class="text-xl font-bold text-white leading-tight">INT8 quantization fits the model in ESP32-S3 SRAM — with better accuracy</h1>
</div>

<div class="grid grid-cols-[1fr_1.2fr] gap-4 flex-1">
  <div class="flex flex-col gap-3">

  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3 shadow-xl">
  <h3 class="text-white font-bold text-xs mb-1.5 flex items-center gap-1.5"><lucide-layers class="text-[#0EA5E9]" />Model Architecture</h3>
  <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed mb-2">Small feedforward classifier for physiological state estimation. Three variants benchmarked:</p>
  <div class="space-y-1 text-[0.52rem]">
  <div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-[#64748B]"></div><span class="text-white">Baseline Float32</span></div>
  <div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]"></div><span class="text-white">INT8 Quantized</span></div>
  <div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-[#7C3AED]"></div><span class="text-white">INT8 Pruned</span><span class="text-[0.45rem] text-[#64748B] ml-1">(39.9% sparsity)</span></div>
  </div>
  </div>

  <div class="grid grid-cols-2 gap-2.5">
  <div class="bg-[#0F172A] border border-[#0EA5E9]/30 rounded-xl p-2.5 text-center shadow-xl">
  <p class="text-xl font-bold text-[#38BDF8]">3.99×</p>
  <p class="text-[0.46rem] text-[#64748B] mt-0.5">Model compression (INT8)</p>
  </div>
  <div class="bg-[#0F172A] border border-[#34D399]/30 rounded-xl p-2.5 text-center shadow-xl">
  <p class="text-xl font-bold text-[#34D399]">99.67%</p>
  <p class="text-[0.46rem] text-[#64748B] mt-0.5">INT8 accuracy (beats float!)</p>
  </div>
  </div>

  <div class="bg-gradient-to-br from-[#0EA5E9]/10 to-transparent border border-[#0EA5E9]/20 rounded-xl p-2.5 shadow-xl">
  <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed"><strong class="text-[#38BDF8]">Key finding:</strong> INT8 quantization achieves better accuracy than float32 (99.67% vs 99.33%) while using 4× less memory — fits within ESP32-S3 SRAM budget and enables on-device inference.</p>
  </div>

  </div>

  <div class="flex flex-col gap-3">
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl overflow-hidden shadow-xl">
  <div class="px-3.5 py-1.5 border-b border-[#1E2E38] bg-[#0A1520]">
  <h3 class="text-white font-bold text-xs flex items-center gap-1.5"><lucide-bar-chart class="text-[#0EA5E9]" />Benchmark Results</h3>
  </div>
  <table class="w-full text-[0.52rem]">
  <thead><tr class="border-b border-[#1E2E38] bg-[#0A1520]">
  <th class="text-left px-3.5 py-1 text-[#64748B]">Metric</th>
  <th class="text-left px-3.5 py-1 text-[#64748B]">Float32</th>
  <th class="text-left px-3.5 py-1 text-[#64748B]">INT8 Quant.</th>
  <th class="text-left px-3.5 py-1 text-[#64748B]">INT8 Pruned</th>
  </tr></thead>
  <tbody>
  <tr class="border-b border-[#1E2E38]">
  <td class="px-3.5 py-1 text-[#94A3B8]">Accuracy</td>
  <td class="px-3.5 py-1 text-[#94A3B8]">99.33%</td>
  <td class="px-3.5 py-1 text-white font-bold">99.67% ✓</td>
  <td class="px-3.5 py-1 text-[#94A3B8]">98.0%</td>
  </tr>
  <tr class="border-b border-[#1E2E38]">
  <td class="px-3.5 py-1 text-[#94A3B8]">Memory</td>
  <td class="px-3.5 py-1 text-[#94A3B8]">45 KB</td>
  <td class="px-3.5 py-1 text-white font-bold">11.3 KB ✓</td>
  <td class="px-3.5 py-1 text-[#94A3B8]">11.3 KB</td>
  </tr>
  <tr class="border-b border-[#1E2E38]">
  <td class="px-3.5 py-1 text-[#94A3B8]">Latency</td>
  <td class="px-3.5 py-1 text-white">18.0 µs</td>
  <td class="px-3.5 py-1 text-[#94A3B8]">33.2 µs</td>
  <td class="px-3.5 py-1 text-[#94A3B8]">33.2 µs</td>
  </tr>
  <tr>
  <td class="px-3.5 py-1 text-[#94A3B8]">Compression</td>
  <td class="px-3.5 py-1 text-[#94A3B8]">1×</td>
  <td class="px-3.5 py-1 text-white font-bold">3.99× ✓</td>
  <td class="px-3.5 py-1 text-[#94A3B8]">3.99×</td>
  </tr>
  </tbody>
  </table>
  </div>

  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-2.5 shadow-xl">
  <h3 class="text-white font-bold text-xs mb-1.5">Memory vs Accuracy Tradeoff</h3>
  <div class="space-y-1.5">
  <div>
  <div class="flex justify-between text-[0.45rem] text-[#64748B] mb-0.5"><span>Float32 — 45 KB</span><span>99.33%</span></div>
  <div class="h-1.5 bg-[#1E2E38] rounded-full overflow-hidden"><div class="h-full bg-[#64748B] rounded-full" style="width: 100%"></div></div>
  </div>
  <div>
  <div class="flex justify-between text-[0.45rem] text-[#0EA5E9] mb-0.5"><span>INT8 Quantized — 11.3 KB</span><span>99.67% ↑</span></div>
  <div class="h-1.5 bg-[#1E2E38] rounded-full overflow-hidden"><div class="h-full bg-[#0EA5E9] rounded-full" style="width: 25%"></div></div>
  </div>
  <div>
  <div class="flex justify-between text-[0.45rem] text-[#7C3AED] mb-0.5"><span>INT8 Pruned — 11.3 KB</span><span>98.0%</span></div>
  <div class="h-1.5 bg-[#1E2E38] rounded-full overflow-hidden"><div class="h-full bg-[#7C3AED] rounded-full" style="width: 25%"></div></div>
  </div>
  </div>
  <p class="text-[0.42rem] text-[#64748B] mt-1.5">Bar width represents memory footprint relative to float32 baseline.</p>
  </div>
  </div>
</div>
</div>

<!--
Slide 12: Study 2 (Edge ML)

Study 2 benchmarked model quantization and pruning for edge deployment. Converting our physiological state classifier to INT8 quantized format reduced memory footprint by four times to just 11.3 kilobytes, while actually improving classification accuracy to 99.67% due to regularization effects.
-->
---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full">
<div class="mb-2.5">
  <p class="text-[0.6rem] font-semibold text-[#A78BFA] tracking-[0.3em] uppercase mb-0.5">Study 3 — Closed-Loop RL Autonomic Entrainment</p>
  <h1 class="text-xl font-bold text-white leading-tight">A Q-learning agent discovers the optimal haptic frequency without being told</h1>
</div>

<div class="grid grid-cols-2 gap-4 flex-1">
  <div class="flex flex-col gap-3">

  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3 shadow-xl">
  <h3 class="text-[#A78BFA] font-bold text-xs mb-1.5 flex items-center gap-1.5"><lucide-activity class="text-[#7C3AED]" />Biophysical Model</h3>
  <div class="bg-[#080E14] border border-[#1E2E38] rounded-lg p-2 font-mono text-[0.48rem] text-[#A78BFA] leading-relaxed">
  Autonomic dynamics with Lorentzian resonance<br>
  Peak entrainment: f* = 0.8 Hz<br>
  HR: 92 BPM (stressed) → 64 BPM (calm target)<br>
  HRV coherence from RMSSD of R-R intervals<br>
  RSA models parasympathetic tone
  </div>
  </div>

  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl overflow-hidden shadow-xl">
  <div class="px-3.5 py-1.5 border-b border-[#1E2E38] bg-[#0A1520]"><h3 class="text-white font-bold text-xs flex items-center gap-1.5"><lucide-settings-2 class="text-[#7C3AED]" />RL Agent Parameters</h3></div>
  <table class="w-full text-[0.52rem]">
  <tbody>
  <tr class="border-b border-[#1E2E38]"><td class="px-3.5 py-1 text-[#64748B] w-1/3">Algorithm</td><td class="px-3.5 py-1 text-white">Tabular Q-learning</td></tr>
  <tr class="border-b border-[#1E2E38]"><td class="px-3.5 py-1 text-[#64748B]">State space</td><td class="px-3.5 py-1 text-white">50 states (10 HR × 5 HRV coherence bins)</td></tr>
  <tr class="border-b border-[#1E2E38]"><td class="px-3.5 py-1 text-[#64748B]">Action space</td><td class="px-3.5 py-1 text-white">10 haptic frequencies: 0.5 – 2.0 Hz</td></tr>
  <tr class="border-b border-[#1E2E38]"><td class="px-3.5 py-1 text-[#64748B]">Training</td><td class="px-3.5 py-1 text-white">300 episodes × 200 s each</td></tr>
  <tr><td class="px-3.5 py-1 text-[#64748B]">Convergence</td><td class="px-3.5 py-1 text-[#34D399] font-semibold">~100–150 episodes</td></tr>
  </tbody>
  </table>
  </div>

  </div>

  <div class="flex flex-col gap-3">
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl overflow-hidden shadow-xl">
  <div class="px-3.5 py-1.5 border-b border-[#1E2E38] bg-[#0A1520]"><h3 class="text-white font-bold text-xs flex items-center gap-1.5"><lucide-trophy class="text-[#A78BFA]" />Results — Final 50 Episodes</h3></div>
  <table class="w-full text-[0.52rem]">
  <thead><tr class="border-b border-[#1E2E38] bg-[#0A1520]">
  <th class="text-left px-3.5 py-1 text-[#64748B]">Metric</th>
  <th class="text-left px-3.5 py-1 text-[#64748B]">RL Agent</th>
  <th class="text-left px-3.5 py-1 text-[#64748B]">Fixed 1.5 Hz</th>
  <th class="text-left px-3.5 py-1 text-[#64748B]">Improvement</th>
  </tr></thead>
  <tbody>
  <tr class="border-b border-[#1E2E38] bg-[#7C3AED]/5">
  <td class="px-3.5 py-1 text-[#94A3B8]">Final HR</td>
  <td class="px-3.5 py-1 text-white font-bold">68.5 ± 1.3 BPM</td>
  <td class="px-3.5 py-1 text-[#94A3B8]">78.5 ± 0.8 BPM</td>
  <td class="px-3.5 py-1 text-[#34D399]">10.0 BPM ↓</td>
  </tr>
  <tr class="border-b border-[#1E2E38] bg-[#7C3AED]/5">
  <td class="px-3.5 py-1 text-[#94A3B8]">HRV Coherence</td>
  <td class="px-3.5 py-1 text-white font-bold">0.690 ± 0.040</td>
  <td class="px-3.5 py-1 text-[#94A3B8]">0.331 ± 0.006</td>
  <td class="px-3.5 py-1 text-[#A78BFA] font-bold">+109%</td>
  </tr>
  <tr>
  <td class="px-3.5 py-1 text-[#94A3B8]">HR reduction</td>
  <td class="px-3.5 py-1 text-white font-bold">23.5 BPM</td>
  <td class="px-3.5 py-1 text-[#94A3B8]">13.5 BPM</td>
  <td class="px-3.5 py-1 text-[#34D399]">1.74× better</td>
  </tr>
  </tbody>
  </table>
  </div>

  <div class="grid grid-cols-3 gap-2.5">
  <div class="bg-[#0F172A] border border-[#A78BFA]/30 rounded-xl p-2.5 text-center shadow-xl">
  <p class="text-lg font-bold text-[#A78BFA]">109%</p>
  <p class="text-[0.43rem] text-[#64748B] mt-0.5">HRV coherence gain</p>
  </div>
  <div class="bg-[#0F172A] border border-[#34D399]/30 rounded-xl p-2.5 text-center shadow-xl">
  <p class="text-lg font-bold text-[#34D399]">0.8 Hz</p>
  <p class="text-[0.43rem] text-[#64748B] mt-0.5">Discovered f* (Lorentzian)</p>
  </div>
  <div class="bg-[#0F172A] border border-[#38BDF8]/30 rounded-xl p-2.5 text-center shadow-xl">
  <p class="text-lg font-bold text-[#38BDF8]">1.74×</p>
  <p class="text-[0.43rem] text-[#64748B] mt-0.5">HR reduction vs fixed</p>
  </div>
  </div>

  <div class="bg-gradient-to-r from-[#7C3AED]/15 to-transparent border-l-4 border-[#7C3AED] p-2 rounded-r-xl">
  <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed"><strong class="text-white">Patent Significance:</strong> RL discovers the biophysically optimal frequency without being told — key novel claim over HeartMath, WHOOP, and Apollo Neuro (all fixed-frequency).</p>
  </div>
  </div>
</div>
</div>

<!--
Slide 13: Study 3 (RL Entrainment)

In Study 3, we modeled closed-loop reinforcement learning for autonomic entrainment. The Q-learning agent successfully discovered the optimal haptic frequency of 0.8 Hz to maximize HRV coherence and reduce heart rate, outperforming fixed-frequency baselines by 109% without prior physiological tuning.
-->
---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full">
<div class="mb-2.5">
  <p class="text-[0.6rem] font-semibold text-[#34D399] tracking-[0.3em] uppercase mb-0.5">Study 4 — Integer-Optimized Active Noise Cancellation</p>
  <h1 class="text-xl font-bold text-white leading-tight">Canceling LRA haptic motor noise with only integer arithmetic — no FPU needed</h1>
</div>

<div class="grid grid-cols-2 gap-4 flex-1">
  <div class="flex flex-col gap-3">

  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3 shadow-xl">
  <h3 class="text-[#34D399] font-bold text-xs mb-1.5 flex items-center gap-1.5"><lucide-radio class="text-[#10B981]" />Signal Model</h3>
  <div class="bg-[#080E14] border border-[#1E2E38] rounded-lg p-2 font-mono text-[0.48rem] leading-relaxed">
  <span class="text-[#64748B]">d[n] = </span><span class="text-[#34D399]">s[n]</span><span class="text-[#64748B]">          ← clean PPG (0.563 RMS)</span><br>
  <span class="text-[#64748B]">     + </span><span class="text-[#F59E0B]">v_LRA(n)</span><span class="text-[#64748B]">    ← LRA BEMF: 175 + 350 Hz (0.328 RMS)</span><br>
  <span class="text-[#64748B]">     + </span><span class="text-[#EF4444]">v_switch(n)</span><span class="text-[#64748B]"> ← ripple: 450 Hz (0.18 RMS)</span><br>
  <span class="text-[#64748B]">     + </span><span class="text-[#94A3B8]">η[n]</span><span class="text-[#64748B]">          ← Gaussian noise</span>
  </div>
  <div class="mt-2 flex items-center gap-2 bg-[#EF4444]/10 border border-[#EF4444]/30 rounded-lg p-1.5">
  <lucide-alert-circle class="text-[#F87171] text-xs" />
  <p class="text-[0.48rem] text-[#F87171]"><strong>Pre-filter SNR: -4.74 dB</strong> — noise power exceeds signal power</p>
  </div>
  </div>

  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl overflow-hidden shadow-xl">
  <div class="px-3.5 py-1.5 border-b border-[#1E2E38] bg-[#0A1520]"><h3 class="text-white font-bold text-xs flex items-center gap-1.5"><lucide-settings class="text-[#10B981]" />IQ-BEMF-ANC Algorithm</h3></div>
  <table class="w-full text-[0.52rem]">
  <tbody>
  <tr class="border-b border-[#1E2E38]"><td class="px-3.5 py-1 text-[#64748B] w-1/3">Format</td><td class="px-3.5 py-1 text-white">Q10 fixed-point (scale = 1024)</td></tr>
  <tr class="border-b border-[#1E2E38]"><td class="px-3.5 py-1 text-[#64748B]">Arithmetic</td><td class="px-3.5 py-1 text-white">32-bit integers + bitwise shifts</td></tr>
  <tr class="border-b border-[#1E2E38]"><td class="px-3.5 py-1 text-[#64748B]">Algorithm</td><td class="px-3.5 py-1 text-white">Normalized LMS (NLMS), 32-tap FIR</td></tr>
  <tr><td class="px-3.5 py-1 text-[#64748B]">Step size</td><td class="px-3.5 py-1 text-white">μ = 0.08</td></tr>
  </tbody>
  </table>
  </div>

  </div>

  <div class="flex flex-col gap-3">
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl overflow-hidden shadow-xl">
  <div class="px-3.5 py-1.5 border-b border-[#1E2E38] bg-[#0A1520]"><h3 class="text-white font-bold text-xs flex items-center gap-1.5"><lucide-bar-chart-2 class="text-[#10B981]" />Results</h3></div>
  <table class="w-full text-[0.52rem]">
  <thead><tr class="border-b border-[#1E2E38] bg-[#0A1520]">
  <th class="text-left px-3.5 py-1 text-[#64748B]">Metric</th>
  <th class="text-left px-3.5 py-1 text-[#64748B]">Corrupted</th>
  <th class="text-left px-3.5 py-1 text-[#64748B]">Q10 NLMS</th>
  <th class="text-left px-3.5 py-1 text-[#64748B]">Float NLMS</th>
  </tr></thead>
  <tbody>
  <tr class="border-b border-[#1E2E38] bg-[#10B981]/5">
  <td class="px-3.5 py-1 text-[#94A3B8]">SNR</td>
  <td class="px-3.5 py-1 text-[#F87171]">-4.74 dB</td>
  <td class="px-3.5 py-1 text-white font-bold">+23.62 dB ✓</td>
  <td class="px-3.5 py-1 text-[#94A3B8]">+25.03 dB</td>
  </tr>
  <tr class="border-b border-[#1E2E38]">
  <td class="px-3.5 py-1 text-[#94A3B8]">Gap vs float</td>
  <td class="px-3.5 py-1 text-[#64748B]">—</td>
  <td class="px-3.5 py-1 text-[#34D399]">Only 1.42 dB below</td>
  <td class="px-3.5 py-1 text-[#64748B]">Baseline</td>
  </tr>
  <tr class="border-b border-[#1E2E38] bg-[#10B981]/5">
  <td class="px-3.5 py-1 text-[#94A3B8]">Latency</td>
  <td class="px-3.5 py-1 text-[#64748B]">—</td>
  <td class="px-3.5 py-1 text-white font-bold">0.600 µs ✓</td>
  <td class="px-3.5 py-1 text-[#94A3B8]">~9.0 µs</td>
  </tr>
  <tr>
  <td class="px-3.5 py-1 text-[#94A3B8]">CPU usage</td>
  <td class="px-3.5 py-1 text-[#64748B]">—</td>
  <td class="px-3.5 py-1 text-[#34D399] font-bold">0.6% ✓</td>
  <td class="px-3.5 py-1 text-[#F87171]">9× over budget</td>
  </tr>
  </tbody>
  </table>
  </div>

  <div class="grid grid-cols-3 gap-2.5">
  <div class="bg-[#0F172A] border border-[#34D399]/30 rounded-xl p-2.5 text-center shadow-xl">
  <p class="text-lg font-bold text-[#34D399]">+18.9 dB</p>
  <p class="text-[0.43rem] text-[#64748B] mt-0.5">SNR gain vs corrupted</p>
  </div>
  <div class="bg-[#0F172A] border border-[#10B981]/30 rounded-xl p-2.5 text-center shadow-xl">
  <p class="text-lg font-bold text-[#10B981]">15×</p>
  <p class="text-[0.43rem] text-[#64748B] mt-0.5">Faster than float NLMS</p>
  </div>
  <div class="bg-[#0F172A] border border-[#38BDF8]/30 rounded-xl p-2.5 text-center shadow-xl">
  <p class="text-lg font-bold text-[#38BDF8]">0.6%</p>
  <p class="text-[0.43rem] text-[#64748B] mt-0.5">CPU at 100 Hz</p>
  </div>
  </div>

  <div class="bg-gradient-to-r from-[#10B981]/15 to-transparent border-l-4 border-[#10B981] p-2 rounded-r-xl">
  <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed"><strong class="text-white">Patent Significance:</strong> First documented integer-only NLMS on FPU-less RISC-V. All prior art requires FPU or soft-float libraries.</p>
  </div>
  </div>
</div>
</div>

<!--
Slide 14: Study 4 (Integer ANC)

Study 4 addressed noise cancellation on FPU-less hardware. Our Q10 fixed-point Normalized LMS filter successfully canceled haptic motor Back-EMF noise, recovering 18.9 dB of SNR. It ran fifteen times faster than a soft-float implementation, consuming only 0.6% CPU on the ESP32-C3.
-->
---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full">
<div class="mb-2.5">
  <p class="text-[0.6rem] font-semibold text-[#FCD34D] tracking-[0.3em] uppercase mb-0.5">Study 5 — Diastolic Phase-Locked Haptic Pacing</p>
  <h1 class="text-xl font-bold text-white leading-tight">Timing vibration to the diastolic window — maximizing vagal activation</h1>
</div>

<div class="grid grid-cols-[1.2fr_1fr] gap-4 flex-1">
  <div class="flex flex-col gap-3">

  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3 shadow-xl">
  <h3 class="text-[#FCD34D] font-bold text-xs mb-1.5 flex items-center gap-1.5"><lucide-heart class="text-[#F59E0B]" />Why Cardiac Phase Matters</h3>
  <div class="grid grid-cols-2 gap-2.5">
  <div class="bg-[#34D399]/10 border border-[#34D399]/30 rounded-lg p-2.5">
  <p class="text-[0.48rem] font-bold text-[#34D399] mb-0.5">Diastolic Stimulation ✓</p>
  <p class="text-[0.45rem] text-[#94A3B8] leading-relaxed">Activates nucleus tractus solitarius during maximal vagal gate → <strong class="text-white">parasympathetic ↑</strong></p>
  </div>
  <div class="bg-[#EF4444]/10 border border-[#EF4444]/30 rounded-lg p-2.5">
  <p class="text-[0.48rem] font-bold text-[#F87171] mb-0.5">Systolic Stimulation ✗</p>
  <p class="text-[0.45rem] text-[#94A3B8] leading-relaxed">Risks activating baroreceptor reflex → <strong class="text-white">sympato-excitatory</strong> (counterproductive)</p>
  </div>
  </div>
  <p class="text-[0.45rem] text-[#64748B] mt-1.5 italic">Prior wearables use fixed-rate vibration; none synchronize to real-time cardiac phase.</p>
  </div>

  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3 shadow-xl">
  <h3 class="text-white font-bold text-xs mb-1.5 flex items-center gap-1.5"><lucide-git-branch class="text-[#F59E0B]" />DPLP Algorithm</h3>
  <div class="bg-[#080E14] border border-[#1E2E38] rounded-lg p-2 font-mono text-[0.48rem] text-[#FCD34D] leading-relaxed">
  Step 1: Pan-Tompkins-inspired PPG peak detection<br>
  <span class="text-[#64748B]">       (diff → square → integrate → adaptive threshold)</span><br>
  Step 2: IBI estimation via phase-locked loop<br>
  Step 3: Haptic trigger at: <span class="text-[#34D399]">t_trigger = t_peak + 0.60 × IBI</span><br>
  <span class="text-[#64748B]">       (diastolic onset = 60% of IBI after peak)</span><br>
  Complexity: O(1) per sample, ~50 integer ops @ 100 Hz
  </div>
  </div>

  </div>

  <div class="flex flex-col gap-3">
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl overflow-hidden shadow-xl">
  <div class="px-3.5 py-1.5 border-b border-[#1E2E38] bg-[#0A1520]"><h3 class="text-white font-bold text-xs flex items-center gap-1.5"><lucide-target class="text-[#F59E0B]" />Test & Results</h3></div>
  <div class="px-3.5 py-1.5 border-b border-[#1E2E38] bg-[#0A1520]">
  <p class="text-[0.45rem] text-[#64748B]">Scenario: 15-second synthetic PPG · 86.3 BPM · RMSSD = 84.9 ms</p>
  </div>
  <table class="w-full text-[0.52rem]">
  <thead><tr class="border-b border-[#1E2E38] bg-[#0A1520]">
  <th class="text-left px-3.5 py-1 text-[#64748B]">Condition</th>
  <th class="text-left px-3.5 py-1 text-[#64748B]">Async 1.2 Hz</th>
  <th class="text-left px-3.5 py-1 text-[#64748B]">DPLP</th>
  </tr></thead>
  <tbody>
  <tr class="border-b border-[#1E2E38]">
  <td class="px-3.5 py-1 text-[#94A3B8]">Systolic hits</td>
  <td class="px-3.5 py-1 text-[#F87171]">7/18 (41.2%)</td>
  <td class="px-3.5 py-1 text-white font-bold">0/20 (0.0%) ✓</td>
  </tr>
  <tr>
  <td class="px-3.5 py-1 text-[#94A3B8]">Diastolic align</td>
  <td class="px-3.5 py-1 text-[#F87171]">58.8%</td>
  <td class="px-3.5 py-1 text-[#34D399] font-bold">100% perfect</td>
  </tr>
  </tbody>
  </table>
  </div>

  <div class="bg-[#F59E0B]/10 border border-[#F59E0B]/30 rounded-xl p-2.5 text-center shadow-xl">
  <p class="text-2xl font-bold text-[#FCD34D] mb-0.5">100%</p>
  <p class="text-[0.48rem] text-[#94A3B8]">Diastolic alignment · Zero systolic hits</p>
  </div>

  <div class="bg-gradient-to-r from-[#F59E0B]/15 to-transparent border-l-4 border-[#F59E0B] p-2 rounded-r-xl">
  <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed"><strong class="text-white">Patent Significance:</strong> No prior haptic wearable synchronizes output to cardiac phase. Existing cardiac-aware devices (pacemakers) are implanted and operate on different mechanisms.</p>
  </div>
  </div>
</div>
</div>

<!--
Slide 15: Study 5 (Cardiac Gating)

Study 5 synchronized haptic pacing to the cardiac cycle. Our diastolic phase-locked pacing algorithm achieved 100% diastolic alignment in simulation, completely avoiding haptic triggers during systole which could cause sympathetic arousal and anxiety.
-->
---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full">
<div class="mb-2.5">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5">Section 4 — Results Summary</p>
  <h1 class="text-2xl font-bold text-white leading-tight">All five studies — consolidated results and patent significance</h1>
</div>

<div class="flex flex-col gap-3 flex-1">

  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl overflow-hidden shadow-xl">
  <table class="w-full text-[0.52rem]">
  <thead>
  <tr class="bg-[#0A1520] border-b border-[#1E2E38]">
  <th class="text-left px-4 py-2 text-[#64748B] font-semibold">Study</th>
  <th class="text-left px-4 py-2 text-[#64748B] font-semibold">Primary Metric</th>
  <th class="text-left px-4 py-2 text-[#64748B] font-semibold">Best Result</th>
  <th class="text-left px-4 py-2 text-[#64748B] font-semibold">Patent Significance</th>
  </tr>
  </thead>
  <tbody>
  <tr class="border-b border-[#1E2E38]">
  <td class="px-4 py-1.5 text-[#94A3B8]">Filter Benchmark</td>
  <td class="px-4 py-1.5 text-[#94A3B8]">MSE accuracy</td>
  <td class="px-4 py-1.5 text-white">SMA: MSE = 0.0537</td>
  <td class="px-4 py-1.5 text-[#64748B]">Preprocessing baseline</td>
  </tr>
  <tr class="border-b border-[#1E2E38]">
  <td class="px-4 py-1.5 text-[#94A3B8]">Edge ML Deployment</td>
  <td class="px-4 py-1.5 text-[#94A3B8]">Compression + accuracy</td>
  <td class="px-4 py-1.5 text-white">3.99× compression, 99.67% acc.</td>
  <td class="px-4 py-1.5 text-[#64748B]">On-device AI feasibility</td>
  </tr>
  <tr class="border-b border-[#1E2E38] bg-[#7C3AED]/5">
  <td class="px-4 py-1.5 text-[#A78BFA] font-semibold">RL Entrainment</td>
  <td class="px-4 py-1.5 text-[#94A3B8]">HRV coherence</td>
  <td class="px-4 py-1.5 text-white font-bold">109% better than fixed baseline</td>
  <td class="px-4 py-1.5 text-[#A78BFA] font-semibold">Core closed-loop patent ★</td>
  </tr>
  <tr class="border-b border-[#1E2E38] bg-[#10B981]/5">
  <td class="px-4 py-1.5 text-[#34D399] font-semibold">Integer ANC</td>
  <td class="px-4 py-1.5 text-[#94A3B8]">SNR recovery + speed</td>
  <td class="px-4 py-1.5 text-white font-bold">+18.9 dB SNR, 15× faster</td>
  <td class="px-4 py-1.5 text-[#34D399] font-semibold">FPU-less DSP patent ★</td>
  </tr>
  <tr class="bg-[#F59E0B]/5">
  <td class="px-4 py-1.5 text-[#FCD34D] font-semibold">Cardiac Gating</td>
  <td class="px-4 py-1.5 text-[#94A3B8]">Systolic avoidance</td>
  <td class="px-4 py-1.5 text-white font-bold">0% error (100% diastolic)</td>
  <td class="px-4 py-1.5 text-[#FCD34D] font-semibold">Phase-lock patent ★</td>
  </tr>
  </tbody>
  </table>
  </div>

  <div class="grid grid-cols-5 gap-2.5">
  <div class="bg-[#0F172A] border border-[#A78BFA]/30 rounded-xl p-2.5 text-center shadow-xl">
  <p class="text-xl font-bold text-[#A78BFA]">109%</p>
  <p class="text-[0.43rem] text-[#64748B] mt-0.5">HRV coherence (RL vs fixed)</p>
  </div>
  <div class="bg-[#0F172A] border border-[#34D399]/30 rounded-xl p-2.5 text-center shadow-xl">
  <p class="text-xl font-bold text-[#34D399]">15×</p>
  <p class="text-[0.43rem] text-[#64748B] mt-0.5">Integer ANC speed vs float</p>
  </div>
  <div class="bg-[#0F172A] border border-[#38BDF8]/30 rounded-xl p-2.5 text-center shadow-xl">
  <p class="text-xl font-bold text-[#38BDF8]">+18.9 dB</p>
  <p class="text-[0.43rem] text-[#64748B] mt-0.5">SNR recovery</p>
  </div>
  <div class="bg-[#0F172A] border border-[#FCD34D]/30 rounded-xl p-2.5 text-center shadow-xl">
  <p class="text-xl font-bold text-[#FCD34D]">100%</p>
  <p class="text-[0.43rem] text-[#64748B] mt-0.5">Diastolic alignment</p>
  </div>
  <div class="bg-[#0F172A] border border-[#0EA5E9]/30 rounded-xl p-2.5 text-center shadow-xl">
  <p class="text-xl font-bold text-[#38BDF8]">3.99×</p>
  <p class="text-[0.43rem] text-[#64748B] mt-0.5">Model compression (INT8)</p>
  </div>
  </div>

</div>
</div>

<!--
Slide 16: Results Summary

This table summarizes the results across all five studies. We successfully validated our accuracy, compression, HRV coherence, noise cancellation, and phase-locking targets, proving the computational feasibility of the KINTO architecture.
-->
---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full">
<div class="mb-2.5">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5">Section 5 — Patent Claims</p>
  <h1 class="text-2xl font-bold text-white leading-tight">Three defensible innovations — each closing a documented prior art gap</h1>
</div>

<div class="grid grid-cols-3 gap-3.5 flex-1">

  <!-- Patent A -->
  <div class="bg-[#0F172A] border border-[#7C3AED]/40 rounded-xl p-3.5 flex flex-col shadow-[0_0_20px_rgba(124,58,237,0.1)] relative overflow-hidden">
  <div class="absolute top-0 right-0 w-16 h-16 bg-[#7C3AED]/5 rounded-bl-full"></div>
  <div class="w-8 h-8 rounded-xl bg-[#7C3AED]/20 flex items-center justify-center mb-2.5 border border-[#7C3AED]/30">
  <lucide-git-branch class="text-[#A78BFA] text-xs" />
  </div>
  <p class="text-[0.48rem] font-bold text-[#7C3AED] tracking-wider uppercase mb-1.5">Patent A</p>
  <h3 class="text-white font-bold text-xs mb-2 leading-snug">Closed-Loop RL Frequency Adaptation</h3>
  <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed mb-2.5 flex-1">Uses real-time HRV coherence sensing and on-device Q-learning to autonomously select haptic stimulation frequency, converging to the subject's personal cardiorespiratory resonance frequency.</p>
  <div class="bg-[#080E14] border border-[#1E2E38] rounded-lg p-2.5">
  <p class="text-[0.45rem] font-bold text-[#64748B] uppercase mb-0.5">Prior Art Gap</p>
  <p class="text-[0.45rem] text-[#94A3B8]">HeartMath, WHOOP, Garmin use fixed or manually-set frequencies. <strong class="text-[#A78BFA]">No prior art uses RL to discover f* in real time on-device.</strong></p>
  </div>
  <div class="mt-2.5 bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-lg px-2 py-1.5">
  <p class="text-[0.48rem] text-[#A78BFA] font-semibold">Key: 109% HRV coherence gain · f* = 0.8 Hz discovered autonomously</p>
  </div>
  </div>

  <!-- Patent B -->
  <div class="bg-[#0F172A] border border-[#10B981]/40 rounded-xl p-3.5 flex flex-col shadow-[0_0_20px_rgba(16,185,129,0.1)] relative overflow-hidden">
  <div class="absolute top-0 right-0 w-16 h-16 bg-[#10B981]/5 rounded-bl-full"></div>
  <div class="w-8 h-8 rounded-xl bg-[#10B981]/20 flex items-center justify-center mb-2.5 border border-[#10B981]/30">
  <lucide-code class="text-[#34D399] text-xs" />
  </div>
  <p class="text-[0.48rem] font-bold text-[#10B981] tracking-wider uppercase mb-1.5">Patent B</p>
  <h3 class="text-white font-bold text-xs mb-2 leading-snug">Integer-Native Adaptive Noise Cancellation</h3>
  <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed mb-2.5 flex-1">Implements NLMS adaptive filtering exclusively via integer and bitwise operations in Q10 fixed-point format on FPU-less microcontrollers, achieving SNR recovery with &lt; 1 µs/sample latency.</p>
  <div class="bg-[#080E14] border border-[#1E2E38] rounded-lg p-2.5">
  <p class="text-[0.45rem] font-bold text-[#64748B] uppercase mb-0.5">Prior Art Gap</p>
  <p class="text-[0.45rem] text-[#94A3B8]">All published adaptive filtering requires FPU or soft-float libraries. <strong class="text-[#34D399]">First documented integer-only NLMS on RISC-V.</strong></p>
  </div>
  <div class="mt-2.5 bg-[#10B981]/10 border border-[#10B981]/20 rounded-lg px-2 py-1.5">
  <p class="text-[0.48rem] text-[#34D399] font-semibold">Key: +18.9 dB SNR · 15× faster than float · 0.6% CPU</p>
  </div>
  </div>

  <!-- Patent C -->
  <div class="bg-[#0F172A] border border-[#F59E0B]/40 rounded-xl p-3.5 flex flex-col shadow-[0_0_20px_rgba(245,158,11,0.1)] relative overflow-hidden">
  <div class="absolute top-0 right-0 w-16 h-16 bg-[#F59E0B]/5 rounded-bl-full"></div>
  <div class="w-8 h-8 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center mb-2.5 border border-[#F59E0B]/30">
  <lucide-heart-pulse class="text-[#FCD34D] text-xs" />
  </div>
  <p class="text-[0.48rem] font-bold text-[#F59E0B] tracking-wider uppercase mb-1.5">Patent C</p>
  <h3 class="text-white font-bold text-xs mb-2 leading-snug">Diastolic Phase-Locked Haptic Actuation</h3>
  <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed mb-2.5 flex-1">Continuously detects cardiac phase from PPG, uses a phase-locked loop to estimate diastolic onset, and synchronizes haptic motor firing exclusively to the diastolic window.</p>
  <div class="bg-[#080E14] border border-[#1E2E38] rounded-lg p-2.5">
  <p class="text-[0.45rem] font-bold text-[#64748B] uppercase mb-0.5">Prior Art Gap</p>
  <p class="text-[0.45rem] text-[#94A3B8]">No prior haptic wearable synchronizes to cardiac phase. Existing cardiac devices (pacemakers) are implanted. <strong class="text-[#FCD34D]">Completely unclaimed territory.</strong></p>
  </div>
  <div class="mt-2.5 bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-lg px-2 py-1.5">
  <p class="text-[0.48rem] text-[#FCD34D] font-semibold">Key: 100% diastolic alignment · zero sympatho-excitatory events</p>
  </div>
  </div>

</div>
</div>

<!--
Slide 17: Patent Claims

Based on these results, we have drafted three patent claims: Patent A covers on-device reinforcement learning for cardiorespiratory resonance; Patent B covers integer-native NLMS adaptive filtering; and Patent C covers diastolic phase-locked haptic actuation. Each claim directly addresses clear gaps in prior art.
-->
---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full">
<div class="mb-2.5">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5">Section 6 — System Architecture</p>
  <h1 class="text-2xl font-bold text-white leading-tight">From raw PPG to timed haptic output — the full MCU signal pipeline</h1>
</div>

<div class="flex flex-col gap-2.5 flex-1">

  <!-- Pipeline diagram -->
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3 shadow-xl">
  <div class="grid grid-cols-5 gap-1.5 items-center">
  <!-- Sensors -->
  <div class="flex flex-col gap-1.5">
  <div class="bg-[#0A1520] border border-[#0EA5E9]/40 rounded-xl p-2.5 text-center">
  <lucide-activity class="text-[#38BDF8] text-base mb-0.5 mx-auto" />
  <p class="text-[0.52rem] font-bold text-white">MAX30101</p>
  <p class="text-[0.43rem] text-[#64748B]">PPG sensor</p>
  </div>
  <div class="bg-[#0A1520] border border-[#1E2E38] rounded-xl p-2.5 text-center">
  <lucide-move class="text-[#94A3B8] text-base mb-0.5 mx-auto" />
  <p class="text-[0.52rem] font-bold text-white">Accelerometer</p>
  <p class="text-[0.43rem] text-[#64748B]">Motion artifact</p>
  </div>
  </div>
  <!-- Arrow -->
  <div class="text-center text-[#1E2E38] text-xl">→</div>
  <!-- Signal Processing -->
  <div class="flex flex-col gap-1.5">
  <div class="bg-[#0A1520] border border-[#10B981]/40 rounded-xl p-2.5 text-center">
  <lucide-filter class="text-[#34D399] text-base mb-0.5 mx-auto" />
  <p class="text-[0.52rem] font-bold text-white">IQ-BEMF-ANC</p>
  <p class="text-[0.43rem] text-[#64748B]">Integer Q10 NLMS</p>
  </div>
  <div class="bg-[#0A1520] border border-[#1E2E38] rounded-xl p-2.5 text-center">
  <lucide-sliders class="text-[#7C3AED] text-base mb-0.5 mx-auto" />
  <p class="text-[0.52rem] font-bold text-white">EXP Filter</p>
  <p class="text-[0.43rem] text-[#64748B]">Accel. filtering</p>
  </div>
  </div>
  <!-- Arrow -->
  <div class="text-center text-[#1E2E38] text-xl">→</div>
  <!-- Intelligence + Output -->
  <div class="flex flex-col gap-1.5">
  <div class="bg-[#0A1520] border border-[#F59E0B]/40 rounded-xl p-2.5 text-center">
  <lucide-heart-pulse class="text-[#FCD34D] text-base mb-0.5 mx-auto" />
  <p class="text-[0.52rem] font-bold text-white">DPLP Detector</p>
  <p class="text-[0.43rem] text-[#64748B]">PPG → PLL → trigger</p>
  </div>
  <div class="bg-[#0A1520] border border-[#A78BFA]/40 rounded-xl p-2.5 text-center">
  <lucide-git-branch class="text-[#A78BFA] text-base mb-0.5 mx-auto" />
  <p class="text-[0.52rem] font-bold text-white">RL Q-Agent</p>
  <p class="text-[0.43rem] text-[#64748B]">HRV → select f*</p>
  </div>
  </div>
  </div>
  <!-- Output row -->
  <div class="flex justify-center mt-1.5">
  <div class="flex items-center gap-2">
  <div class="w-px h-4 bg-[#1E2E38]"></div>
  </div>
  </div>
  <div class="flex justify-center">
  <div class="bg-gradient-to-r from-[#7C3AED]/20 to-[#F59E0B]/20 border border-[#7C3AED]/30 rounded-xl p-2 text-center w-64 shadow-lg">
  <lucide-vibrate class="text-white text-base mb-0.5 mx-auto" />
  <p class="text-[0.55rem] font-bold text-white">DRV2605L — Haptic Output</p>
  <p class="text-[0.46rem] text-[#94A3B8]">f* Hz · diastolic-timed · LRA actuator</p>
  </div>
  </div>
  </div>

  <!-- ESP32-C3 constraint callout -->
  <div class="grid grid-cols-3 gap-3">
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3 col-span-2 shadow-xl">
  <h3 class="text-white font-bold text-xs mb-1.5 flex items-center gap-1.5"><lucide-cpu class="text-[#7C3AED]" />ESP32-C3 Constraints Addressed</h3>
  <div class="grid grid-cols-3 gap-2">
  <div class="text-center">
  <p class="text-[0.52rem] font-bold text-[#F87171] mb-0.5">No FPU</p>
  <p class="text-[0.43rem] text-[#64748B]">→ Q10 integer NLMS (Study 4)</p>
  </div>
  <div class="text-center">
  <p class="text-[0.52rem] font-bold text-[#F87171] mb-0.5">400 KB SRAM</p>
  <p class="text-[0.43rem] text-[#64748B]">→ INT8 model = 11.3 KB (Study 2)</p>
  </div>
  <div class="text-center">
  <p class="text-[0.52rem] font-bold text-[#F87171] mb-0.5">160 MHz</p>
  <p class="text-[0.43rem] text-[#64748B]">→ 0.6% CPU for ANC (Study 4)</p>
  </div>
  </div>
  </div>
  <div class="bg-gradient-to-br from-[#7C3AED]/10 to-transparent border border-[#7C3AED]/20 rounded-xl p-3 flex items-center justify-center text-center shadow-xl">
  <div>
  <p class="text-2xl font-bold text-[#A78BFA]">&lt;$12</p>
  <p class="text-[0.46rem] text-[#64748B] mt-0.5">Full stack BOM cost</p>
  </div>
  </div>
  </div>

</div>
</div>

<!--
Slide 18: System Architecture

This block diagram illustrates KINTO's full signal pipeline on the MCU. PPG and accelerometer signals are filtered in real-time, cardiac phase is estimated using a phase-locked loop, and the reinforcement learning agent selects the optimal haptic pacing frequency, driving the LRA motor solely during diastole.
-->
---
layout: default
background: '#080E14'
class: px-12 pt-6
---

<div class="w-full flex flex-col h-full">
<div class="mb-2.5">
  <p class="text-[0.6rem] font-semibold text-[#7C3AED] tracking-[0.3em] uppercase mb-0.5">Section 7 — Market & Regulatory</p>
  <h1 class="text-2xl font-bold text-white leading-tight">Japan PMD Act, elderly market gap, and competitive differentiation</h1>
</div>

<div class="grid grid-cols-[1.2fr_1fr] gap-4 flex-1">
  <div class="flex flex-col gap-3">
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl overflow-hidden shadow-xl">
  <div class="px-4 py-2 border-b border-[#1E2E38] bg-[#0A1520]"><h3 class="text-white font-bold text-xs flex items-center gap-1.5"><lucide-file-text class="text-[#7C3AED]" />Regulatory &amp; Market Context</h3></div>
  <table class="w-full text-[0.52rem]">
  <tbody>
  <tr class="border-b border-[#1E2E38]"><td class="px-3.5 py-1.5 text-[#64748B] font-semibold w-1/3">Japan PMD Act</td><td class="px-3.5 py-1.5 text-[#94A3B8]">Wellness tracker classification: no PMDA review if no medical <em>intended use</em> claim. KINTO is a wellness device.</td></tr>
  <tr class="border-b border-[#1E2E38]"><td class="px-3.5 py-1.5 text-[#64748B] font-semibold">Target Market</td><td class="px-3.5 py-1.5 text-[#94A3B8]">Elderly (65+), high-stress workers, anxiety/autonomic dysregulation populations</td></tr>
  <tr class="border-b border-[#1E2E38]"><td class="px-3.5 py-1.5 text-[#64748B] font-semibold">EDA Research Gap</td><td class="px-3.5 py-1.5 text-[#94A3B8]"><strong class="text-[#F59E0B]">Only 8.1%</strong> of EDA studies involve elderly — KINTO's core demographic is underserved</td></tr>
  <tr><td class="px-3.5 py-1.5 text-[#64748B] font-semibold">Drowning Market</td><td class="px-3.5 py-1.5 text-[#94A3B8]"><strong class="text-[#F87171]">6,073 deaths/year</strong> now → projected <strong class="text-[#F87171]">27,000/year by 2035</strong> (Japan elderly bathtub)</td></tr>
  </tbody>
  </table>
  </div>
  <div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl p-3 shadow-xl">
  <h3 class="text-white font-bold text-xs mb-1.5 flex items-center gap-1.5"><lucide-bar-chart class="text-[#7C3AED]" />Competitive Landscape</h3>
  <div class="space-y-1.5">
  <div class="flex items-center gap-2 text-[0.5rem]"><div class="w-20 text-right text-[#64748B]">HeartMath</div><div class="flex-1 h-1.5 bg-[#1E2E38] rounded-full overflow-hidden"><div class="h-full bg-[#64748B] rounded-full" style="width: 50%"></div></div><div class="w-28 text-[0.45rem] text-[#64748B]">HRV biofeedback (screen)</div></div>
  <div class="flex items-center gap-2 text-[0.5rem]"><div class="w-20 text-right text-[#64748B]">WHOOP</div><div class="flex-1 h-1.5 bg-[#1E2E38] rounded-full overflow-hidden"><div class="h-full bg-[#64748B] rounded-full" style="width: 40%"></div></div><div class="w-28 text-[0.45rem] text-[#64748B]">Monitoring only</div></div>
  <div class="flex items-center gap-2 text-[0.5rem]"><div class="w-20 text-right text-[#64748B]">Apollo Neuro</div><div class="flex-1 h-1.5 bg-[#1E2E38] rounded-full overflow-hidden"><div class="h-full bg-[#F59E0B] rounded-full" style="width: 60%"></div></div><div class="w-28 text-[0.45rem] text-[#64748B]">Fixed haptic, no cardiac sync</div></div>
  <div class="flex items-center gap-2 text-[0.5rem]"><div class="w-20 text-right text-[#A78BFA] font-bold">KINTO</div><div class="flex-1 h-1.5 bg-[#1E2E38] rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-[#7C3AED] to-[#0EA5E9] rounded-full" style="width: 100%"></div></div><div class="w-28 text-[0.45rem] text-[#A78BFA] font-semibold">RL + cardiac-sync + screenless</div></div>
  </div>
  </div>
  </div>
  <div class="flex flex-col gap-3">
  <div class="bg-[#0F172A] border border-[#7C3AED]/30 rounded-xl p-3.5 shadow-[0_0_20px_rgba(124,58,237,0.1)]">
  <h3 class="text-[#A78BFA] font-bold text-xs uppercase tracking-wider mb-2">KINTO's Three Differentiators</h3>
  <div class="space-y-1.5">
  <div class="flex items-start gap-2.5"><div class="w-4.5 h-4.5 rounded bg-[#7C3AED]/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-[0.45rem] font-bold text-[#A78BFA]">1</div><div class="text-[0.52rem] text-[#94A3B8]"><strong class="text-white">Real-time cardiac phase detection</strong> — triggers only during diastole</div></div>
  <div class="flex items-start gap-2.5"><div class="w-4.5 h-4.5 rounded bg-[#7C3AED]/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-[0.45rem] font-bold text-[#A78BFA]">2</div><div class="text-[0.52rem] text-[#94A3B8]"><strong class="text-white">On-device RL</strong> — discovers personal optimal frequency autonomously</div></div>
  <div class="flex items-start gap-2.5"><div class="w-4.5 h-4.5 rounded bg-[#7C3AED]/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-[0.45rem] font-bold text-[#A78BFA]">3</div><div class="text-[0.52rem] text-[#94A3B8]"><strong class="text-white">Screenless passive operation</strong> — works without user engagement</div></div>
  </div>
  </div>
  <div class="bg-[#EF4444]/10 border border-[#EF4444]/30 rounded-xl p-3 shadow-xl">
  <h3 class="text-[#F87171] font-bold text-xs mb-1.5 flex items-center gap-1.5"><lucide-alert-triangle />Market Urgency</h3>
  <div class="text-[0.52rem] text-[#94A3B8] leading-relaxed">Japan's aging population makes bathtub drowning a growing public health crisis. <strong class="text-white">4.5× projected growth by 2035</strong> with no current wearable intervention targeting this demographic.</div>
  </div>
  </div>
</div>
</div>

<!--
Slide 19: Market & Regulatory

KINTO qualifies as a wellness tracker under the Japan PMD Act, avoiding lengthy medical device reviews. It targets the underserved elderly demographic and high-stress workers, offering a screenless, passive alternative to existing biofeedback and monitoring-only wearables.
-->
---
layout: center
background: '#080E14'
class: text-center px-16
---

<div class="flex flex-col items-center justify-center h-full relative z-10">

<div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#0EA5E9] flex items-center justify-center mb-3 shadow-[0_0_40px_rgba(124,58,237,0.5)] overflow-hidden">
  <img src="/kinto-logo-gold.png" class="w-full h-full object-contain p-2" />
</div>

<h1 class="text-2xl font-bold text-white mb-1.5">Conclusion</h1>
<p class="text-xs text-[#A78BFA] mb-4 max-w-xl">KINTO demonstrates three defensible computational innovations — each grounded in simulation data, each closing a documented prior art gap.</p>

<div class="grid grid-cols-3 gap-3 w-full text-left mb-3.5">
  <div class="bg-[#0F172A] border border-[#7C3AED]/30 rounded-xl p-3.5 shadow-xl">
  <lucide-git-branch class="text-[#A78BFA] text-lg mb-1.5 inline-block" />
  <h3 class="text-[#A78BFA] font-bold text-[0.55rem] mb-1 uppercase tracking-wider">Closed-Loop RL</h3>
  <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed">Agent discovers f* = 0.8 Hz autonomously. 109% better HRV coherence vs. fixed baseline. No prior wearable uses on-device RL for this.</p>
  </div>
  <div class="bg-[#0F172A] border border-[#34D399]/30 rounded-xl p-3.5 shadow-xl">
  <lucide-code class="text-[#34D399] text-lg mb-1.5 inline-block" />
  <h3 class="text-[#34D399] font-bold text-[0.55rem] mb-1 uppercase tracking-wider">Integer-Only DSP</h3>
  <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed">Q10 NLMS recovers +18.9 dB SNR at 15× the speed of float, using 0.6% CPU. First on FPU-less RISC-V.</p>
  </div>
  <div class="bg-[#0F172A] border border-[#FCD34D]/30 rounded-xl p-3.5 shadow-xl">
  <lucide-heart-pulse class="text-[#FCD34D] text-lg mb-1.5 inline-block" />
  <h3 class="text-[#FCD34D] font-bold text-[0.55rem] mb-1 uppercase tracking-wider">Cardiac Phase-Lock</h3>
  <p class="text-[0.52rem] text-[#94A3B8] leading-relaxed">100% diastolic alignment, zero sympatho-excitatory events. No prior haptic wearable synchronizes to cardiac phase.</p>
  </div>
</div>

<div class="bg-[#0F172A] border border-[#1E2E38] rounded-xl px-5 py-2.5 mb-3.5 w-full">
  <h3 class="text-white font-bold text-[0.55rem] mb-2 uppercase tracking-wider">Next Steps</h3>
  <div class="grid grid-cols-4 gap-3">
  <div class="text-center"><lucide-flask-conical class="text-[#7C3AED] text-base mx-auto mb-0.5 inline-block" /><p class="text-[0.45rem] text-[#94A3B8]">Hardware prototype on ESP32-C3 PCB</p></div>
  <div class="text-center"><lucide-users class="text-[#0EA5E9] text-base mx-auto mb-0.5 inline-block" /><p class="text-[0.45rem] text-[#94A3B8]">IRB-approved human subjects validation</p></div>
  <div class="text-center"><lucide-file-text class="text-[#34D399] text-base mx-auto mb-0.5 inline-block" /><p class="text-[0.45rem] text-[#94A3B8]">Patent filing (Claims A, B, C)</p></div>
  <div class="text-center"><lucide-building class="text-[#FCD34D] text-base mx-auto mb-0.5 inline-block" /><p class="text-[0.45rem] text-[#94A3B8]">Japan PMD Act wellness classification</p></div>
  </div>
</div>

<p class="text-[#64748B] text-[0.55rem]">Raymond Tenorio Borres · RSPAI1 Midterm · June 2026</p>

<div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-1 pointer-events-none">
  <div class="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#7C3AED] opacity-[0.08] blur-[120px]"></div>
  <div class="absolute bottom-[0%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[#0EA5E9] opacity-[0.05] blur-[150px]"></div>
</div>

</div>

<!--
Slide 20: Conclusion

In conclusion, KINTO introduces three defensible innovations supported by solid simulation data. Our next steps are to manufacture our physical V2 pod, test ergonomics with a target patient cohort, and begin clinical validation of our closed-loop pacing algorithms.
-->
