---
theme: default
colorSchema: 'dark'
layout: cover
background: '#08090C'
class: text-center
transition: fade
css: unocss
fonts:
  sans: 'Outfit'
  serif: 'Playfair Display'
  mono: 'Fira Code'
download: '/kinto-pitch/kinto-pitch.pdf'
---

<div class="flex flex-col items-center justify-center h-full relative z-10 w-full pb-12">
<img src="/kinto-logo-gold.png" alt="KINTO" class="h-28 mx-auto drop-shadow-[0_0_20px_rgba(209,176,102,0.3)] animate-fade-in mb-4" />

<div class="mt-4">
<h2 class="text-6xl font-serif text-[#E1D1AA] font-light tracking-widest mb-4 flex flex-col items-center gap-4">
<span>KINTO: Cultural Wearables</span>
<span class="text-xl text-[#A68A56] tracking-[0.4em] font-sans font-light mt-1">高齢者ケアのための文化的なウェアラブル</span>
</h2>
</div>

<div class="w-32 h-px bg-gradient-to-r from-transparent via-[#d1b066] to-transparent mx-auto my-8"></div>

<div class="space-y-3">
<p class="text-2xl text-[#F3E8C1] tracking-[0.2em] uppercase font-light">Clinical Integration & User Research Proposal</p>
<p class="text-sm text-[#8A8F9E] tracking-[0.4em] font-light mt-1">臨床統合およびユーザーリサーチ提案</p>
</div>

<div class="absolute bottom-2 w-full text-center">
<div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#2a2d39] bg-[#121319]/80 backdrop-blur-sm">
<span class="w-1.5 h-1.5 rounded-full bg-[#d1b066] animate-pulse"></span>
<span class="text-[0.55rem] text-[#E1D1AA] tracking-widest uppercase font-semibold">KINTO (Nagoya University)</span>
<div class="w-px h-2 bg-[#424554]"></div>
<span class="text-[0.55rem] text-[#8A8F9E] tracking-widest uppercase">April 22, 2026</span>
</div>
</div>
</div>

<div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-1 pointer-events-none">
<div class="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#d1b066] opacity-[0.03] blur-[120px]"></div>
<div class="absolute bottom-[0%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[#d1b066] opacity-[0.02] blur-[150px]"></div>
</div>

<!--
Slide 1: Title & Introduction | Action: Smile, keep it professional.

Script: "Good afternoon Dr. Nakano and Sugishita-san. Thank you so much for making the time. We are Team KINTO. Today, we want to share our approach to solving the compliance problem in remote elderly monitoring, and discuss a potential clinical research partnership with your clinic."
-->

---
layout: default
class: px-10 pt-4
background: '#08090C'
---

<div class="w-full h-full">
<div class="mb-4">
<h2 class="text-[0.6rem] font-semibold text-[#A68A56] tracking-[0.3em] uppercase mb-1 flex items-center">
The Compliance Problem <span class="px-2 text-[#d1b066]/30">|</span> <span class="text-[0.5rem] text-[#8A8F9E] tracking-widest leading-none">コンプライアンスの問題</span>
</h2>
<h1 class="text-3xl font-serif text-[#F3E8C1] leading-tight flex items-baseline">The Gap in Remote Monitoring</h1>
</div>

<div class="grid grid-cols-2 gap-4 mt-2 items-stretch">
<div class="bg-[#121319]/80 backdrop-blur-md rounded-xl border border-[#1C1E26] p-4 shadow-xl flex flex-col items-center text-center group hover:border-[#d1b066]/40 transition-colors">
<div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#1A1C24] to-[#121319] border border-[#2a2d39] flex items-center justify-center text-[#d1b066] mb-2 shadow-inner">
<div class="i-lucide:smartphone text-xl"></div>
</div>
<h3 class="text-sm font-sans font-medium text-[#E1D1AA] mb-1">Smartphone Reliance <p class="text-[0.55rem] text-[#A68A56] mt-0.5">スマートフォンへの依存</p></h3>
<p class="text-[0.65rem] text-[#D1D5DB] font-light leading-relaxed mb-2">Elderly patients often leave phones in other rooms, missing critical events (e.g., falls in the bathroom).</p>
<p class="text-[0.55rem] text-[#8A8F9E] border-t border-[#1C1E26] pt-2 font-light">高齢者は電話を別の部屋に置き忘れがちで、緊急事態（お風呂場での転倒など）を見逃す可能性があります。</p>
</div>

<div class="bg-[#121319]/80 backdrop-blur-md rounded-xl border border-[#1C1E26] p-4 shadow-xl flex flex-col items-center text-center group hover:border-[#d1b066]/40 transition-colors">
<div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#1A1C24] to-[#121319] border border-[#2a2d39] flex items-center justify-center text-[#d1b066] mb-2 shadow-inner">
<div class="i-lucide:alert-circle text-xl"></div>
</div>
<h3 class="text-sm font-sans font-medium text-[#E1D1AA] mb-1">The Stigma <p class="text-[0.55rem] text-[#A68A56] mt-0.5">心理的抵抗感</p></h3>
<p class="text-[0.65rem] text-[#D1D5DB] font-light leading-relaxed mb-2">Traditional "panic buttons" are visually stigmatizing. Patients reject daily compliance.</p>
<p class="text-[0.55rem] text-[#8A8F9E] border-t border-[#1C1E26] pt-2 font-light">従来のボタンは視覚的な抵抗感があり、患者は「病人扱い」を嫌がります。</p>
</div>
</div>
</div>

<!--
Slide 2: The Compliance Problem | Action: Speak to the psychological reality of aging.

Script: "As a cardiologist, you know that the best remote monitoring device is useless if the patient refuses to wear it. Panic buttons carry heavy visual stigma — patients reject them because they feel like a burden. Relying on smartphones leaves dangerous gaps, like a fall in the bathroom when the phone is on the nightstand."
-->

---
layout: default
class: px-10 pt-4
background: '#08090C'
---

<div class="w-full flex flex-col h-full">
<div class="mb-0">
<h2 class="text-[0.6rem] font-semibold text-[#d1b066] tracking-[0.3em] uppercase mb-0.5 flex items-center">
The KINTO Solution <span class="px-2 text-[#d1b066]/30">|</span> <span class="text-[0.5rem] text-[#8A8F9E] tracking-widest leading-none">KINTOのソリューション</span>
</h2>
<h1 class="text-2xl font-serif text-[#F3E8C1] leading-tight mb-0.5">A Wearable Driven by Cultural Connection</h1>
</div>

<div class="grid grid-cols-[1.2fr_1fr] gap-4 items-center flex-1 h-full pb-0 relative">
<div class="flex flex-col gap-3 relative z-10 w-full pr-6">
<div class="flex items-start space-x-3 bg-gradient-to-r from-transparent to-[#121319] p-3 rounded-lg border-r-2 border-[#d1b066]">
<div class="w-8 h-8 rounded-full bg-[#1A1C24] shadow-inner flex items-center justify-center text-[#d1b066] border border-[#2a2d39] flex-shrink-0 mt-0.5">
<div class="i-lucide:gem" style="font-size: 1.25rem;"></div>
</div>
<div class="flex-1">
<h3 class="font-sans font-medium text-[#E1D1AA] text-sm mb-1 flex items-center">Familiar Form <span class="text-[0.55rem] text-[#A68A56] ml-2 font-light">馴染みのある形状</span></h3>
<p class="text-xs text-[#9CA3AF] leading-relaxed font-light mb-1">Inspired by the traditional Japanese Omamori.</p>
</div>
</div>

<div class="flex items-start space-x-3 bg-gradient-to-r from-transparent to-[#121319] p-3 rounded-lg border-r-2 border-[#d1b066]">
<div class="w-8 h-8 rounded-full bg-[#1A1C24] shadow-inner flex items-center justify-center text-[#d1b066] border border-[#2a2d39] flex-shrink-0 mt-0.5">
<div class="i-lucide:heart-handshake" style="font-size: 1.25rem;"></div>
</div>
<div class="flex-1">
<h3 class="font-sans font-medium text-[#E1D1AA] text-sm mb-1 flex items-center">Psychological Shift <span class="text-[0.55rem] text-[#A68A56] ml-2 font-light">心理的なシフト</span></h3>
<p class="text-xs text-[#9CA3AF] leading-relaxed font-light mb-1">Worn for family connection, not medical necessity.</p>
</div>
</div>

<div class="flex items-start space-x-3 bg-gradient-to-r from-transparent to-[#121319] p-3 rounded-lg border-r-2 border-[#d1b066]">
<div class="w-8 h-8 rounded-full bg-[#1A1C24] shadow-inner flex items-center justify-center text-[#d1b066] border border-[#2a2d39] flex-shrink-0 mt-0.5">
<div class="i-lucide:eye-off" style="font-size: 1.25rem;"></div>
</div>
<div class="flex-1">
<h3 class="font-sans font-medium text-[#E1D1AA] text-sm mb-1 flex items-center">Passive Tracking <span class="text-[0.55rem] text-[#A68A56] ml-2 font-light">目立たない追跡機能</span></h3>
<p class="text-xs text-[#9CA3AF] leading-relaxed font-light mb-1">Screenless design requires zero technical literacy from the patient.</p>
</div>
</div>
</div>

<div class="absolute right-[-2rem] top-1/2 transform -translate-y-1/2 w-[45%] h-auto flex flex-col justify-center items-center z-20">
<div class="relative w-full drop-shadow-[0_0_40px_rgba(209,176,102,0.15)] group">
<div class="absolute inset-0 bg-[#d1b066] blur-[60px] opacity-[0.05] rounded-full scale-150"></div>
<img src="/omamori-render.png" alt="KINTO Omamori" class="w-full h-auto drop-shadow-2xl mix-blend-screen transform -rotate-1 group-hover:rotate-1 group-hover:scale-105 transition-all duration-700" />
<div class="absolute -bottom-2 right-4 bg-[#121319] text-[#d1b066] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest border border-[#d1b066]/30 shadow-2xl">V2 RENDER</div>
</div>
</div>
</div>
</div>

<!--
Slide 3: The KINTO Solution (Omamori) | Action: Show your passion. This is your core differentiator.

Script: "Our solution is KINTO. We have taken medical-grade tracking and disguised it inside the traditional, culturally familiar form of an Omamori. By shifting the psychology from a 'medical necessity' to a 'family connection,' we preserve the wearer's dignity. They wear it not because they are sick, but because it connects them to their loved ones."
-->

---
layout: default
background: '#08090C'
class: px-10 pt-4
---

<div class="w-full flex flex-col h-full">
<div class="mb-3">
<h2 class="text-[0.6rem] font-semibold text-[#d1b066] tracking-[0.3em] uppercase mb-1 flex items-center">
Clinical-Grade Architecture <span class="px-2 text-[#d1b066]/30">|</span> <span class="text-[0.5rem] text-[#8A8F9E] tracking-widest leading-none">医療アーキテクチャ</span>
</h2>
<h1 class="text-3xl font-serif text-[#F3E8C1] leading-tight">Moving Beyond Just Fall Detection</h1>
</div>

<div class="grid grid-cols-3 gap-3 mb-3">
<div class="bg-[#121319] p-3 rounded-lg border border-[#1C1E26] hover:border-[#d1b066]/40 transition-colors shadow-lg">
<div class="mb-2 w-7 h-7 rounded-lg bg-[#1A1C24] border border-[#2a2d39] flex items-center justify-center text-[#d1b066]">
<div class="i-lucide:heart-pulse text-sm"></div>
</div>
<h3 class="text-[0.8rem] font-serif text-[#F3E8C1] mb-1">Cardiovascular</h3>
<p class="text-[0.45rem] text-[#A68A56] font-mono bg-[#1A1C24] px-1 py-0.5 rounded inline-block mb-1 border border-[#2a2d39]">MAX86150</p>
<p class="text-[0.6rem] text-[#D1D5DB] leading-relaxed font-light mb-1.5 flex-1">Integrated clinical-grade ECG & SpO2/PPG tracking.</p>
<p class="text-[0.5rem] text-[#8A8F9E] border-t border-[#1C1E26] pt-1.5 font-light">統合された臨床レベルのECGおよびSpO2/PPG追跡。</p>
</div>

<div class="bg-[#121319] p-3 rounded-lg border border-[#1C1E26] hover:border-[#d1b066]/40 transition-colors shadow-lg">
<div class="mb-2 w-7 h-7 rounded-lg bg-[#1A1C24] border border-[#2a2d39] flex items-center justify-center text-[#d1b066]">
<div class="i-lucide:activity text-sm"></div>
</div>
<h3 class="text-[0.8rem] font-serif text-[#F3E8C1] mb-1">Kinematic</h3>
<p class="text-[0.45rem] text-[#A68A56] font-mono bg-[#1A1C24] px-1 py-0.5 rounded inline-block mb-1 border border-[#2a2d39]">LIS3DHTR</p>
<p class="text-[0.6rem] text-[#D1D5DB] leading-relaxed font-light mb-1.5 flex-1">3-Axis Accelerometer for instant fall alerts.</p>
<p class="text-[0.5rem] text-[#8A8F9E] border-t border-[#1C1E26] pt-1.5 font-light">瞬間的な転倒アラートのための3軸加速度センサー。</p>
</div>

<div class="bg-[#121319] p-3 rounded-lg border border-[#1C1E26] hover:border-[#d1b066]/40 transition-colors shadow-lg">
<div class="mb-2 w-7 h-7 rounded-lg bg-[#1A1C24] border border-[#2a2d39] flex items-center justify-center text-[#d1b066]">
<div class="i-lucide:thermometer text-sm"></div>
</div>
<h3 class="text-[0.8rem] font-serif text-[#F3E8C1] mb-1">Thermal</h3>
<p class="text-[0.45rem] text-[#A68A56] font-mono bg-[#1A1C24] px-1 py-0.5 rounded inline-block mb-1 border border-[#2a2d39]">MAX30208</p>
<p class="text-[0.6rem] text-[#D1D5DB] leading-relaxed font-light mb-1.5 flex-1">Digital skin tracking for baseline anomalies.</p>
<p class="text-[0.5rem] text-[#8A8F9E] border-t border-[#1C1E26] pt-1.5 font-light">ベースライン異常を記録するデジタル皮膚温度追跡。</p>
</div>
</div>

<div class="rounded-lg border border-[#d1b066]/40 p-2.5 flex flex-col justify-center bg-gradient-to-r from-[#d1b066]/5 to-transparent">
<div class="flex items-center mb-0.5 w-full">
<div class="text-[#d1b066] mr-2"><div class="i-lucide:cpu text-lg"></div></div>
<p class="text-[0.65rem] text-[#E1D1AA] font-light">Transitioning to automated PCBA manufacturing for hardware reliability and safety.</p>
</div>
<p class="text-[0.55rem] text-[#8A8F9E] pl-6">ハードウェアの信頼性と安全性を確保するため、自動PCBA製造へ移行しています。</p>
</div>
</div>

<!--
Slide 4: Clinical-Grade Architecture | Action: Shift to serious engineering tone. Prove this isn't a toy.

Script: "While the outside is cultural, the inside is clinical. We are transitioning to automated PCBA manufacturing for our V2 pod. This integrates the MAX86150 for continuous SpO2 and Spot-Check ECG, alongside a 3-axis accelerometer for instant fall detection, and digital skin temperature tracking."

Q&A PREP — If asked about accuracy: "You are exactly right. Wrist motion is our biggest hurdle. We use the MAX86150 (FDA-cleared), but our goal is baseline anomaly detection, not diagnostic perfection. Phase 3 is where we calibrate against your Holter monitors to define our error margins before we ever make medical claims."
-->

---
layout: default
background: '#08090C'
class: px-10 pt-4
---

<div class="flex flex-col h-full pt-4">
<div class="mb-1 text-center">
<h2 class="text-[0.6rem] font-semibold text-[#A68A56] tracking-[0.3em] uppercase mb-0.5 flex items-center justify-center">
The "Amulet" UX (Spot-Check ECG) <span class="px-2 text-[#d1b066]/30">|</span> <span class="text-[0.5rem] text-[#8A8F9E] tracking-widest leading-none">お守りとしてのUX</span>
</h2>
<h1 class="text-2xl font-serif text-[#F3E8C1] leading-tight">Merging Medical Action with Cultural Behavior</h1>
</div>

<div class="grid grid-cols-[1.3fr_1fr] gap-3 items-center h-full pb-0">
<div class="flex flex-col gap-1">
<div class="bg-[#121319]/80 p-2 rounded-md border border-[#1C1E26]">
<h3 class="font-sans font-medium text-[#E1D1AA] text-sm mb-0 flex items-center"><div class="w-1.5 h-1.5 bg-[#d1b066] rounded-full mr-2"></div> Continuous <span class="text-[0.5rem] text-[#A68A56] ml-2">連続的</span></h3>
<p class="text-xs text-[#D1D5DB] leading-tight font-light ml-3.5 mb-0">Background SpO2, HR, and Temperature tracking.</p>
</div>

<div class="bg-[#121319]/80 p-2 rounded-md border border-[#1C1E26]">
<h3 class="font-sans font-medium text-[#E1D1AA] text-sm mb-0 flex items-center"><div class="w-1.5 h-1.5 bg-[#d1b066] rounded-full mr-2"></div> On-Demand <span class="text-[0.5rem] text-[#A68A56] ml-2">オンデマンド</span></h3>
<p class="text-xs text-[#D1D5DB] leading-tight font-light ml-3.5 mb-0">To capture an ECG, the user holds the top of the Omamori.</p>
</div>

<div class="bg-gradient-to-r from-[#d1b066]/10 to-transparent p-3 rounded-md border-l-2 border-[#d1b066] mt-2">
<h3 class="font-serif font-bold text-[#F3E8C1] text-sm mb-1 flex items-baseline">The Metaphor <span class="text-[0.5rem] font-sans text-[#A68A56] ml-2">メタファー</span></h3>
<p class="text-xs text-[#E1D1AA] leading-tight font-light italic mb-1">"The physical act of taking a clinical reading perfectly mirrors holding an amulet for comfort."</p>
<p class="text-[0.5rem] text-[#d1b066] border-t border-[#d1b066]/30 pt-1">「臨床測定の動作は、お守りを握りしめる行動と美しく一致します。」</p>
</div>
</div>

<div class="flex justify-center items-center">
<div class="relative w-[14rem] h-[14rem] bg-gradient-to-br from-[#181A22] to-[#121319] rounded-[3rem] border-2 border-[#d1b066]/40 shadow-[0_0_50px_rgba(209,176,102,0.25)] flex flex-col items-center justify-center p-4 transform hover:scale-105 transition-transform">
<div class="absolute -top-6 text-[#d1b066] animate-bounce"><div class="i-lucide:hand text-4xl"></div></div>
<div class="w-16 h-16 border-2 border-[#d1b066] border-dashed rounded-xl flex items-center justify-center relative mb-2">
<div class="absolute top-0 w-full h-1.5 bg-[#d1b066]/30 rounded-t-lg filter blur-[2px]"></div>
<div class="i-lucide:heart-pulse text-2xl text-[#d1b066] opacity-60"></div>
</div>
<p class="text-center text-xs font-bold text-[#E1D1AA] mt-2 tracking-widest uppercase">Touches top to close circuit</p>
<p class="text-center text-[0.5rem] text-[#A68A56] mt-1">上部に触れて電気回路を閉じる</p>
</div>
</div>
</div>
</div>

<!--
Slide 5: The "Amulet" UX | Action: If you have a prototype, hold it up to the webcam and demonstrate the touch.

Script: "Because a wrist-based ECG requires a closed electrical loop, the user must physically touch the top of the device with their opposite hand. We realized this perfectly mirrors the natural, comforting behavior of holding an amulet when feeling anxious. We are merging a required medical action with a deeply ingrained cultural behavior."
-->

---
layout: default
class: px-10 pt-4
background: '#08090C'
---

<div class="flex flex-col h-full text-center">
<div class="mb-4 text-center">
<h2 class="text-[0.6rem] font-semibold text-[#A68A56] tracking-[0.3em] uppercase mb-0.5 flex items-center justify-center">
Our Clinical Research Strategy <span class="px-2 text-[#d1b066]/30">|</span> <span class="text-[0.5rem] text-[#8A8F9E] tracking-widest leading-none">臨床研究戦略</span>
</h2>
<h1 class="text-3xl font-serif text-[#F3E8C1] tracking-tight mb-1">Decoupling Hardware from User Experience</h1>
<p class="text-[0.65rem] text-[#D1D5DB] font-light max-w-xl mx-auto italic bg-gradient-to-r from-[#d1b066] to-[#ebce87] bg-clip-text text-transparent">We want to build KINTO with patients, not just for them.</p>
<p class="text-[0.45rem] text-[#d1b066] font-light max-w-xl mx-auto mt-0.5">私たちは患者と「共に」開発します。</p>
</div>

<p class="text-[0.6rem] font-light text-[#9CA3AF] mb-1 max-w-2xl mx-auto">We are executing a 3-Phase user research study to eliminate assumptions about elderly pain points.</p>
<p class="text-[0.5rem] font-light text-[#8A8F9E] mb-6 max-w-2xl mx-auto">ペインポイントについての仮説を排除するため、3段階の調査を実施しています。</p>

<div class="flex justify-center items-stretch gap-4 max-w-3xl mx-auto relative z-10">
<div class="absolute top-[40%] left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#d1b066]/40 to-transparent -z-1 -translate-y-1/2"></div>

<div class="flex-1 bg-[#121319] border border-[#232530] p-3 rounded-xl shadow-xl flex flex-col items-center">
<div class="text-[#A68A56] font-bold uppercase tracking-widest text-[0.45rem] mb-2">Phase 1</div>
<div class="w-8 h-8 rounded-full bg-[#1A1C24] flex items-center justify-center text-[#d1b066] mb-1.5 border border-[#2a2d39]">
<div class="i-lucide:shapes text-sm"></div>
</div>
<h3 class="font-sans font-medium text-[#E1D1AA] text-[0.55rem]">Ergonomics</h3>
<p class="text-[0.45rem] text-[#8A8F9E]">エルゴノミクス</p>
</div>

<div class="flex items-center justify-center text-[#d1b066] opacity-50"><div class="i-lucide:arrow-right text-lg"></div></div>

<div class="flex-1 bg-[#121319] border border-[#232530] p-3 rounded-xl shadow-xl flex flex-col items-center">
<div class="text-[#A68A56] font-bold uppercase tracking-widest text-[0.45rem] mb-2">Phase 2</div>
<div class="w-8 h-8 rounded-full bg-[#1A1C24] flex items-center justify-center text-[#d1b066] mb-1.5 border border-[#2a2d39]">
<div class="i-lucide:smartphone text-sm"></div>
</div>
<h3 class="font-sans font-medium text-[#E1D1AA] text-[0.55rem]">Digital UX</h3>
<p class="text-[0.45rem] text-[#8A8F9E]">デジタルUX</p>
</div>

<div class="flex items-center justify-center text-[#d1b066] opacity-50"><div class="i-lucide:arrow-right text-lg"></div></div>

<div class="flex-1 bg-gradient-to-br from-[#1A1C24] to-[#121319] border border-[#d1b066]/40 p-3 rounded-xl shadow-lg flex flex-col items-center">
<div class="text-[#d1b066] font-bold uppercase tracking-widest text-[0.45rem] mb-2">Phase 3</div>
<div class="w-8 h-8 rounded-full bg-[#08090C] flex items-center justify-center text-[#d1b066] mb-1.5 border border-[#d1b066]/40">
<div class="i-lucide:microscope text-sm"></div>
</div>
<h3 class="font-sans font-medium text-[#F3E8C1] text-[0.55rem]">Functional MVP</h3>
<p class="text-[0.45rem] text-[#d1b066]/80">MVPモデル実装</p>
</div>
</div>
</div>

<!--
Slide 6: Clinical Research Strategy | Action: Transition into the "Ask".

Script: "We want to build KINTO with patients, not just for them. To ensure we are building something they will actually tolerate, we have decoupled our hardware development from our UX testing. We are executing a 3-Phase user research study to eliminate any assumptions we have about their pain points."
-->

---
layout: default
background: '#08090C'
class: px-10 pt-4
---

<div class="flex flex-col h-full">
<div class="flex justify-between items-end mb-1 border-b border-[#1C1E26] pb-1">
<div>
<h2 class="text-[0.6rem] font-semibold text-[#A68A56] tracking-[0.3em] uppercase mb-0.5 flex items-center">
Phase 1 <span class="px-2 text-[#d1b066]/30">|</span> <span class="text-[0.5rem] text-[#8A8F9E] tracking-widest leading-none">フェーズ 1</span>
</h2>
<h1 class="text-2xl font-serif text-[#F3E8C1] leading-tight mb-0">Testing Physical Comfort First</h1>
<p class="text-[0.55rem] text-[#8A8F9E]">物理的な快適さと形状の検証</p>
</div>
<div class="text-[#d1b066] text-3xl opacity-20 font-serif italic pr-2">01</div>
</div>

<div class="grid grid-cols-[1.4fr_1fr] gap-3 items-center flex-1 mt-0">
<div class="flex flex-col gap-1.5">
<div class="bg-[#121319] p-2 rounded-md border border-[#1C1E26] shadow-md border-l-2 border-l-[#d1b066]">
<h3 class="font-sans font-medium text-[#E1D1AA] text-sm mb-1 flex items-center">The Method <span class="text-[0.5rem] font-light text-[#A68A56] ml-2">テスト手順</span></h3>
<p class="text-xs text-[#D1D5DB] leading-tight font-light mb-1">Distribute weighted, non-functional 3D-printed prototypes.</p>
<p class="text-[0.5rem] text-[#8A8F9E] border-t border-[#1C1E26] pt-1">重量を模した非機能3Dプリントモデルを配布します。</p>
</div>

<div class="mt-2">
<h3 class="font-sans font-semibold text-[#A68A56] mb-2 flex items-center text-xs tracking-widest uppercase mt-1">
Metrics We Need <span class="px-2 text-[#d1b066]/30">|</span> <span class="text-[0.5rem] text-[#8A8F9E]">評価指標</span>
</h3>
<div class="space-y-1">
<div class="flex items-start bg-[#161821] p-1.5 rounded">
<div class="mt-0.5 text-[#d1b066] mr-2"><div class="i-lucide:check-circle text-sm"></div></div>
<div>
<p class="text-xs text-[#D1D5DB] font-light leading-tight">Which form factor feels most natural?</p>
</div>
</div>
<div class="flex items-start bg-[#161821] p-1.5 rounded">
<div class="mt-0.5 text-[#d1b066] mr-2"><div class="i-lucide:check-circle text-sm"></div></div>
<div>
<p class="text-xs text-[#D1D5DB] font-light leading-tight">Are clasps difficult for arthritic hands?</p>
</div>
</div>
<div class="flex items-start bg-[#161821] p-1.5 rounded">
<div class="mt-0.5 text-[#d1b066] mr-2"><div class="i-lucide:check-circle text-sm"></div></div>
<div>
<p class="text-xs text-[#D1D5DB] font-light leading-tight">Will they remember to wear it after bathing?</p>
</div>
</div>
</div>
</div>
</div>

<div class="relative w-[18rem] h-[14rem] sm:w-[22rem] sm:h-[16rem] flex flex-col items-center justify-center p-2 bg-[#FAFAFA] rounded-2xl border-2 border-[#232530] shadow-2xl m-auto transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 mt-0 sm:-mr-4">
<img src="/dummy-band-1.jpg" alt="Davin's 3D-printed dummy models" class="relative z-10 w-full h-full object-cover rounded-xl border border-[#d1b066]/30 mix-blend-multiply" />
<div class="absolute bottom-4 left-4 bg-white/95 px-3 py-1.5 text-[0.55rem] font-bold font-sans tracking-widest text-[#2c2e33] rounded-md shadow-lg z-20 flex flex-col text-center">
ZERO ELECTRONICS
<span class="text-[0.5rem] text-gray-500 mt-0.5">電子部品なし</span>
</div>
</div>
</div>
</div>

<!--
Slide 7: Phase 1 | Action: Point to the screen showing the dummy bands.

Script: "Phase 1 focuses entirely on physical comfort. We have 3D-printed weighted, non-functional dummy prototypes. We want to see which form factor feels most natural, if the clasps aggravate arthritic hands, and most importantly, if they remember to put it back on after bathing."

Q&A PREP — Safety/liability: "Phase 1 has ZERO electronics — zero electronic or data-privacy risk. It's 5-7 days of wearing TPU plastic or fabric. We provide all consent forms and feedback surveys. Our only goal is to see if they naturally keep it on."
Q&A PREP — Hygiene: "The pod and TPU strap are fully waterproof and alcohol-wipeable. The Omamori fabric is a removable 'sleeve' — slide out the hardware, machine-wash the fabric, slide back in."
-->

---
layout: default
background: '#08090C'
class: px-10 pt-4
---

<div class="flex flex-col h-full">
<div class="mb-1">
<h2 class="text-[0.6rem] font-semibold text-[#A68A56] tracking-[0.3em] uppercase mb-0 flex items-center">
Phase 2 & 3 <span class="px-2 text-[#d1b066]/30">|</span> <span class="text-[0.5rem] text-[#8A8F9E] tracking-widest leading-none">フェーズ 2 & 3</span>
</h2>
<h1 class="text-2xl font-serif text-[#F3E8C1] leading-tight mb-0">Validating Software & Hardware</h1>
<p class="text-[0.55rem] text-[#8A8F9E]">ソフトウェアとハードウェアの検証</p>
</div>

<div class="grid grid-cols-[1.3fr_1fr] gap-6 items-center flex-1 h-full pl-2">
<div class="flex justify-center h-full max-h-[22rem] gap-4 w-[110%] -ml-6">
<img src="/app3.jpg" class="h-full w-auto object-contain rounded-2xl shadow-xl border border-[#3A3C4A] transform -translate-y-1 hover:-translate-y-2 hover:scale-105 transition-all duration-500" />
<img src="/app2.jpg" class="h-full w-auto object-contain rounded-2xl shadow-xl border border-[#3A3C4A] transform translate-y-2 hover:translate-y-1 hover:scale-105 transition-all duration-500" />
</div>

<div class="flex flex-col gap-3 -mt-6">
<div class="bg-[#121319] p-3 rounded-xl border border-[#1C1E26] shadow-xl hover:border-[#d1b066]/40 transition-colors">
<div class="flex items-center mb-2">
<div class="w-8 h-8 rounded-full bg-[#1A1C24] shadow-inner flex items-center justify-center text-[#d1b066] border border-[#2a2d39] mr-3">
<div class="i-lucide:smartphone" style="font-size: 1.25rem;"></div>
</div>
<div>
<h3 class="font-serif font-bold text-[#F3E8C1] text-sm mb-0 leading-none">Phase 2 (UX)</h3>
<p class="text-[0.55rem] font-sans text-[#A68A56] mt-1">デジタルUXの検証</p>
</div>
</div>
<p class="text-xs text-[#D1D5DB] leading-relaxed font-light mb-1">Testing interface on tablets with users.</p>
<ul class="text-xs text-[#9CA3AF] font-light space-y-0.5 ml-4 list-disc list-outside">
<li>Is font highly readable?</li>
<li>Does data reduce caregiver anxiety?</li>
</ul>
</div>

<div class="bg-gradient-to-br from-[#121319] to-[#1A1C24] p-3 rounded-xl border border-[#d1b066]/40 shadow-xl hover:-translate-y-1 transition-transform">
<div class="flex items-center mb-2">
<div class="w-8 h-8 rounded-full bg-[#d1b066] shadow-inner flex items-center justify-center text-[#1A1C24] mr-3">
<div class="i-lucide:microscope" style="font-size: 1.25rem;"></div>
</div>
<div>
<h3 class="font-serif font-bold text-[#F3E8C1] text-sm mb-0 leading-none">Phase 3 (MVP)</h3>
<p class="text-[0.55rem] font-sans text-[#E1D1AA] mt-1">機能的MVPテスト</p>
</div>
</div>
<p class="text-xs text-[#D1D5DB] leading-relaxed font-light mb-0">Deploy MVP PCBA pod to validate real-world streams.</p>
</div>
</div>
</div>
</div>

<!--
Slide 8: Phase 2 & 3 | Action: Keep this brief. Focus the meeting on Phase 1.

Script: "Once we validate the physical form, Phase 2 tests our digital interface on tablets to ensure the health data reduces family anxiety rather than causing it. Finally, Phase 3 is where we deploy the functional V2 pod to validate our sensor streams against real-world clinical baselines."

Q&A PREP — Fall detection liability: "KINTO is an informational tool for families, not an emergency dispatch device. Alerts go to the paired family member's smartphone. This keeps liability within the family unit while drastically reducing response time vs. a scheduled phone call."
Q&A PREP — Battery life: "Screenless design = far lower power than an Apple Watch. ESP32 deep-sleep + intermittent polling targets 4-7 days per charge. The magnetic pogo-pin connector makes it foolproof for arthritic hands."
-->

---
layout: default
background: '#08090C'
class: px-10 pt-8
---

<div class="flex flex-col h-full justify-center text-center">
<div class="relative max-w-2xl mx-auto py-6 px-6 bg-gradient-to-b from-[#121319] to-[#0A0B0E] rounded-2xl border border-[#1C1E26] shadow-xl w-full">
<div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d1b066]/40 to-transparent"></div>

<div class="w-10 h-10 mx-auto rounded-full bg-[#1A1C24] border border-[#2a2d39] flex items-center justify-center text-[#d1b066] mb-3 shadow-md">
<div class="i-lucide:handshake text-lg"></div>
</div>

<h2 class="text-[0.5rem] font-semibold text-[#A68A56] tracking-[0.4em] uppercase mb-1 flex items-center justify-center">
Discussion & Partnership Ask <span class="px-2 text-[#d1b066]/30">|</span> <span class="text-[0.45rem] text-[#8A8F9E] tracking-widest leading-none">協力のお願い</span>
</h2>
<h1 class="text-2xl font-serif text-[#F3E8C1] tracking-tight mb-1">How We Can Work Together</h1>
<p class="text-[0.55rem] text-[#8A8F9E] mb-4">私たちにどのような協力が可能か</p>

<div class="grid grid-cols-2 gap-3 text-left">
<div class="bg-[#181A22] p-3 rounded-xl border border-[#232530]">
<div class="mb-1.5 text-[#d1b066]"><div class="i-lucide:help-circle text-lg"></div></div>
<p class="text-[0.6rem] text-[#D1D5DB] leading-relaxed font-light mb-1 text-balance">Could we partner with your clinic to facilitate Phase 1 with a small group of patients?</p>
<p class="text-[0.5rem] text-[#8A8F9E] border-t border-[#232530] pt-1">フェーズ1として、非機能モデルを数名の患者様に優先的に試用していただくことは可能でしょうか？</p>
</div>

<div class="bg-[#181A22] p-3 rounded-xl border border-[#232530]">
<div class="mb-1.5 text-[#d1b066]"><div class="i-lucide:filter text-lg"></div></div>
<p class="text-[0.6rem] text-[#D1D5DB] leading-relaxed font-light mb-1 text-balance">What demographic variables or clinical histories should we isolate for this group?</p>
<p class="text-[0.5rem] text-[#8A8F9E] border-t border-[#232530] pt-1">このテストグループについて、どのような人口統計変数を分離すべきでしょうか？</p>
</div>
</div>
</div>
</div>

<!--
Slide 9: Discussion & Partnership Ask | Action: PAUSE. Look directly at the camera before speaking.

Script: "Dr. Nakano, Sugishita-san mentioned that you run a Smart Device Outpatient Clinic. We would love to partner with you to facilitate Phase 1 with a small group of your patients. To start our discussion: What specific demographic variables or clinical histories do you think we should isolate for this initial materials testing group?"

Then STOP TALKING. Let him answer. This is the most important moment of the entire pitch.
-->

---
layout: default
class: px-10 pt-6
background: '#08090C'
---

<div class="flex flex-col justify-center h-full text-center">
<div class="w-8 h-px bg-[#d1b066] mx-auto mb-2"></div>
<h2 class="text-[0.5rem] font-semibold text-[#A68A56] tracking-[0.4em] uppercase mb-1 flex items-center justify-center">
Behind the Innovation <span class="px-2 text-[#d1b066]/30">|</span> <span class="text-[0.45rem] text-[#8A8F9E] tracking-widest leading-none">革新の裏側</span>
</h2>
<h1 class="text-3xl font-serif text-[#F3E8C1] tracking-tight mb-0.5">Team KINTO</h1>
<p class="text-[0.55rem] text-[#8A8F9E] mb-6 tracking-widest">チームKINTO</p>

<div class="grid grid-cols-4 gap-2 items-start">
<div class="flex flex-col items-center group">
<div class="w-14 h-14 rounded-full border border-[#2a2d39] overflow-hidden mb-1.5 bg-[#1A1C24] flex items-center justify-center p-1 relative z-10 group-hover:border-[#d1b066] transition-colors">
<img src="/raymond.jpg" class="w-full h-full object-cover rounded-full opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
</div>
<h3 class="text-md font-serif text-[#E1D1AA] mb-0.5">Raymond Borres</h3>
<p class="text-[0.45rem] text-[#d1b066] font-bold tracking-widest uppercase mb-0.5">Co-Founder | Electronics Specialist</p>
<p class="text-[0.4rem] text-[#8A8F9E] mb-0.5">共同創設者 | 電子工学専門</p>
</div>

<div class="flex flex-col items-center group">
<div class="w-14 h-14 rounded-full border border-[#2a2d39] overflow-hidden mb-1.5 bg-[#1A1C24] flex items-center justify-center p-1 relative z-10 group-hover:border-[#d1b066] transition-colors">
<img src="/davin.jpg" class="w-full h-full object-cover rounded-full opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
</div>
<h3 class="text-md font-serif text-[#E1D1AA] mb-0.5">Davin Chandra</h3>
<p class="text-[0.45rem] text-[#9CA3AF] font-medium tracking-widest uppercase mb-0.5">Co-Founder | 3D Modeling Specialist</p>
<p class="text-[0.4rem] text-[#8A8F9E] mb-0.5">共同創設者 | 3Dモデリング専門</p>
</div>

<div class="flex flex-col items-center group">
<div class="w-14 h-14 rounded-full border border-[#2a2d39] overflow-hidden mb-1.5 bg-[#1A1C24] flex items-center justify-center p-1 relative z-10 group-hover:border-[#d1b066] transition-colors">
<img src="/jeffrey.jpg" class="w-full h-full object-cover rounded-full opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
</div>
<h3 class="text-md font-serif text-[#E1D1AA] mb-0.5">Jeffrey Zhang</h3>
<p class="text-[0.45rem] text-[#9CA3AF] font-medium tracking-widest uppercase mb-0.5">Co-Founder | Software Engineer</p>
<p class="text-[0.4rem] text-[#8A8F9E] mb-0.5">共同創設者 | ソフトウェアエンジニア</p>
</div>

<div class="flex flex-col items-center group">
<div class="w-14 h-14 rounded-full border border-[#2a2d39] overflow-hidden mb-1.5 bg-[#1A1C24] flex items-center justify-center p-1 relative z-10 group-hover:border-[#d1b066] transition-colors">
<img src="/eric.png" class="w-full h-full object-cover rounded-full opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
</div>
<h3 class="text-md font-serif text-[#E1D1AA] mb-0.5">Eric Syuhendra</h3>
<p class="text-[0.45rem] text-[#9CA3AF] font-medium tracking-widest uppercase mb-0.5">Co-Founder | Algorithm Specialist</p>
<p class="text-[0.4rem] text-[#8A8F9E] mb-0.5">共同創設者 | アルゴリズム専門</p>
</div>
</div>
</div>
<!-- 
Slide 10: Team KINTO
Action: Leave this slide up while Dr. Nakano answers your question from Slide 9. It shows your team's specific competencies while you transition into Q&A.

=== ANTICIPATED Q&A CHEAT SHEET ===

Q1 — "ECG/SpO2 accuracy with motion artifacts?"
Do NOT claim perfection. Acknowledge the limitation. Doctors respect founders who know their tech limits.
Answer: "You are exactly right. Wrist motion is our biggest hurdle. We use the MAX86150 (FDA-cleared), but our goal is baseline anomaly detection, not diagnostic perfection. Phase 3 exists to calibrate against your Holter monitors and define error margins before we ever make medical claims."

Q2 — "Phase 1 safety/liability?"
Answer: "Phase 1 has ZERO electronics — zero electronic or data-privacy risk. It's 5-7 days of wearing TPU plastic or fabric. We provide all consent forms and feedback surveys. We just want to see if they naturally keep it on."

Q3 — "Hygiene for long-term daily wear?"
Answer: "The pod and TPU strap are fully waterproof, alcohol-wipeable. The Omamori fabric is a removable 'sleeve' — slide out the hardware, machine-wash the fabric, slide back in."

Q4 — "Fall detection → ambulance? What if it fails?"
Answer: "KINTO is an informational tool for families, not an emergency dispatch device. Alerts go to the paired family member's smartphone. This keeps liability within the family unit while drastically reducing response time vs. a scheduled phone call."

Q5 — "Elderly forget to charge. Battery life?"
Answer: "Screenless design = far lower power than an Apple Watch. ESP32 deep-sleep + intermittent sensor polling targets 4-7 days per charge. The magnetic pogo-pin connector makes it foolproof for arthritic hands."
-->
