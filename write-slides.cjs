const fs = require('fs');

const content = `---
theme: default
colorSchema: 'dark'
layout: cover
background: '#08090C'
class: text-center
transition: fade
css: unocss
fonts:
  sans: 'Outfit'
  serif: 'Playfair Display, Noto Serif JP'
  mono: 'Fira Code'
---

<div class="flex flex-col items-center justify-center h-full relative z-10 w-full mt-10">
  <img src="/kinto-logo-gold.png" alt="KINTO" class="h-40 mx-auto drop-shadow-[0_0_20px_rgba(209,176,102,0.3)] animate-fade-in mb-4" />
  
  <div class="mt-8">
    <h2 class="text-3xl font-serif text-[#E1D1AA] font-light tracking-wide">
      Cultural Wearables for Elderly Care
    </h2>
    <p class="text-xl text-[#B1A18A] mt-2 font-serif font-light tracking-widest opacity-80">
      高齢者ケアのための文化的ウェアラブル
    </p>
  </div>
  
  <div class="w-16 h-px bg-gradient-to-r from-transparent via-[#d1b066] to-transparent mx-auto mt-12 mb-8"></div>
  
  <div class="space-y-1">
    <p class="text-[0.95rem] text-[#F3E8C1] tracking-[0.2em] uppercase font-light">Clinical Integration & User Research Proposal</p>
    <p class="text-xs text-[#8A8F9E] tracking-widest uppercase">臨床統合およびユーザーリサーチ提案</p>
  </div>
  
  <div class="absolute bottom-8 w-full text-center">
    <div class="inline-flex items-center space-x-3 px-6 py-2 rounded-full border border-[#2a2d39] bg-[#121319]/80 backdrop-blur-sm">
      <span class="w-2 h-2 rounded-full bg-[#d1b066] animate-pulse"></span>
      <span class="text-xs text-[#E1D1AA] tracking-widest uppercase font-semibold">Team KINTO • Nagoya University</span>
    </div>
  </div>
</div>

<div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-1 pointer-events-none">
  <div class="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#d1b066] opacity-[0.03] blur-[120px]"></div>
  <div class="absolute bottom-[0%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[#d1b066] opacity-[0.02] blur-[150px]"></div>
</div>

---
layout: two-cols
class: gap-16 items-center px-12
background: '#08090C'
---

<div class="space-y-2 mb-10 w-full pt-12">
  <h2 class="text-xs font-semibold text-[#d1b066] tracking-[0.3em] uppercase mb-2 flex items-center"><div class="w-8 h-px bg-[#d1b066] mr-4"></div> The Philosophy</h2>
  <h1 class="text-5xl font-serif text-[#F3E8C1] leading-tight mb-2">Introducing KINTO.</h1>
  <p class="text-sm font-serif text-[#8A8F9E] tracking-widest mt-1">KINTOの紹介</p>
</div>

<div class="space-y-8 mt-12 relative z-10 w-[110%]">
  <div class="group relative px-8 py-7 rounded-2xl bg-[#121319]/80 backdrop-blur-md border border-[#232530] hover:border-[#d1b066]/40 transition-all duration-500 shadow-xl overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#232530] group-hover:via-[#d1b066]/50 to-transparent transition-all duration-500"></div>
    <div class="flex items-start space-x-6">
      <div class="mt-1 flex-shrink-0 text-[#8A8F9E] group-hover:text-[#d1b066] transition-colors duration-500">
        <div class="i-lucide:eye-off text-2xl"></div>
      </div>
      <div>
        <h3 class="font-sans font-medium text-[#E1D1AA] text-lg mb-2 mx-0 px-0 flex items-center justify-between">
          The Problem <span class="text-[10px] text-[#8A8F9E] uppercase tracking-widest font-serif pl-4 border-l border-[#2a2d39]">課題</span>
        </h3>
        <p class="text-[0.95rem] text-[#9CA3AF] leading-relaxed mb-2 font-light">Traditional medical alerts are visually stigmatizing. Elderly patients often feel "sick" wearing them.</p>
        <p class="text-[0.8rem] text-[#6B7280] font-serif leading-relaxed">従来の医療アラートは心理的抵抗感を与えます。高齢者は被介護者として扱われていると感じます。</p>
      </div>
    </div>
  </div>

  <div class="group relative px-8 py-7 rounded-2xl bg-gradient-to-b from-[#181A22] to-[#121319] backdrop-blur-md border border-[#d1b066]/30 hover:border-[#d1b066]/70 transition-all duration-500 shadow-[0_10px_40px_-10px_rgba(209,176,102,0.15)] overflow-hidden transform hover:-translate-y-1">
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d1b066] to-transparent"></div>
    <div class="absolute inset-0 bg-[#d1b066] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500"></div>
    <div class="flex items-start space-x-6">
      <div class="mt-1 flex-shrink-0 text-[#d1b066]">
        <div class="i-lucide:gem text-3xl drop-shadow-[0_0_10px_rgba(209,176,102,0.5)]"></div>
      </div>
      <div>
        <h3 class="font-sans font-medium text-[#F3E8C1] text-lg mb-2 flex items-center justify-between">
          Our Solution <span class="text-[10px] text-[#A68A56] uppercase tracking-widest font-serif pl-4 border-l border-[#A68A56]/30">解決策</span>
        </h3>
        <p class="text-[0.95rem] text-[#E1D1AA] leading-relaxed mb-2 font-light">A clinical-grade wearable disguised as a traditional Japanese Omamori amulet.</p>
        <p class="text-[0.8rem] text-[#B1A18A] font-serif leading-relaxed">お守りの形をした医療グレードのウェアラブルデバイス。</p>
      </div>
    </div>
  </div>
</div>

::right::

<div class="flex justify-center items-center h-full w-full relative">
  <div class="absolute w-96 h-96 bg-[#d1b066] rounded-full -z-1 opacity-[0.04] blur-[80px] animate-pulse"></div>
  <div class="absolute w-[28rem] h-[28rem] border border-[#d1b066]/10 rounded-full -z-1"></div>
  <div class="absolute w-[24rem] h-[24rem] border border-[#d1b066]/20 rounded-full -z-1 border-dashed"></div>
  
  <div class="relative group">
    <div class="absolute inset-0 bg-[#d1b066] blur-[60px] opacity-[0.1] rounded-full group-hover:opacity-[0.2] transition-opacity duration-1000"></div>
    <img src="/omamori-render.png" alt="KINTO Omamori" class="w-80 relative z-10 drop-shadow-[0_30px_30px_rgba(0,0,0,0.5)] transform transition-transform duration-1000 hover:scale-105" />
    
    <div class="absolute -right-12 top-10 bg-[#121319]/80 backdrop-blur-md border border-[#2a2d39] px-4 py-3 rounded-2xl shadow-xl flex items-center space-x-3 transition-transform duration-500 hover:-translate-y-1">
      <div class="w-8 h-8 rounded-full bg-[#1A1C24] flex items-center justify-center text-[#d1b066]">
        <div class="i-lucide:heart text-sm"></div>
      </div>
      <div>
        <div class="text-xs text-[#E1D1AA] font-semibold uppercase tracking-wider">Comfort</div>
        <div class="text-[10px] text-[#8A8F9E] font-serif">安心感</div>
      </div>
    </div>
    
    <div class="absolute -left-16 bottom-20 bg-[#121319]/80 backdrop-blur-md border border-[#2a2d39] px-4 py-3 rounded-2xl shadow-xl flex items-center space-x-3 transition-transform duration-500 hover:-translate-y-1">
      <div class="w-8 h-8 rounded-full bg-[#1A1C24] flex items-center justify-center text-[#d1b066]">
        <div class="i-lucide:crown text-sm"></div>
      </div>
      <div>
        <div class="text-xs text-[#E1D1AA] font-semibold uppercase tracking-wider">Dignity</div>
        <div class="text-[10px] text-[#8A8F9E] font-serif">尊厳</div>
      </div>
    </div>
  </div>
</div>

---
layout: default
background: '#08090C'
class: px-16
---

<div class="mt-8 mb-12">
  <h2 class="text-xs font-semibold text-[#d1b066] tracking-[0.3em] uppercase mb-3 flex items-center"><div class="w-8 h-px bg-[#d1b066] mr-4"></div> Technical Foundation</h2>
  <h1 class="text-4xl font-serif text-[#F3E8C1] leading-tight flex items-baseline">The Clinical Architecture <span class="text-[#8A8F9E] font-light text-2xl ml-4">(V2 Pod)</span></h1>
  <p class="text-sm font-serif text-[#8A8F9E] tracking-widest mt-2">臨床アーキテクチャ（V2 ポッド）</p>
</div>

<div class="bg-gradient-to-r from-[#181A22] to-[#121319] rounded-2xl border border-[#232530] p-6 mb-12 flex items-center shadow-lg relative overflow-hidden group">
  <div class="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#d1b066] to-transparent"></div>
  <div class="w-14 h-14 rounded-full bg-[#1A1C24] flex items-center justify-center mr-6 border border-[#2a2d39] text-[#d1b066] flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
    <div class="i-lucide:cpu text-2xl drop-shadow-[0_0_8px_rgba(209,176,102,0.5)]"></div>
  </div>
  <div>
    <p class="text-[0.95rem] text-[#E1D1AA] font-light mb-1.5 leading-relaxed tracking-wide">Validated internal hardware before form factor testing. Uses a rigid, <span class="text-[#d1b066] font-medium">30mm PCBA pod</span> with clinical-grade sensors.</p>
    <p class="text-xs text-[#8A8F9E] font-serif tracking-wide">形状テストの前に、内部ハードウェアの検証を完了。直径30mmの硬質PCBAポッドを利用。</p>
  </div>
</div>

<div class="grid grid-cols-3 gap-8">
  <div class="group relative bg-[#0E0F14] p-8 rounded-3xl border border-[#1C1E26] hover:border-[#d1b066]/40 transition-all duration-500 hover:-translate-y-2 shadow-xl">
    <div class="absolute inset-0 bg-gradient-to-br from-[#d1b066]/[0.03] to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div class="mb-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1A1C24] to-[#121319] border border-[#2a2d39] flex items-center justify-center text-[#d1b066] shadow-lg group-hover:shadow-[0_0_20px_rgba(209,176,102,0.2)] transition-shadow duration-500">
      <div class="i-lucide:heart-pulse text-3xl"></div>
    </div>
    <div class="mb-6 pb-6 border-b border-[#1C1E26] group-hover:border-[#d1b066]/20 transition-colors duration-500">
      <h3 class="text-xl font-serif text-[#F3E8C1] mb-1">Cardiovascular</h3>
      <p class="text-xs text-[#8A8F9E] font-serif tracking-widest uppercase">心血管データ</p>
    </div>
    <p class="text-[0.9rem] text-[#A68A56] font-mono bg-[#1A1C24] px-3 py-1 rounded inline-block mb-4">MAX86150</p>
    <p class="text-[0.9rem] text-[#D1D5DB] leading-relaxed font-light mb-4 text-justify">Clinical-grade Spot-Check ECG and continuous SpO2/PPG tracking.</p>
    <p class="text-[0.75rem] text-[#6B7280] font-serif leading-relaxed">スポットチェック心電図(ECG)および連続的な血中酸素(SpO2)測定。</p>
  </div>

  <div class="group relative bg-[#0E0F14] p-8 rounded-3xl border border-[#1C1E26] hover:border-[#d1b066]/40 transition-all duration-500 hover:-translate-y-2 shadow-xl delay-100">
    <div class="absolute inset-0 bg-gradient-to-br from-[#d1b066]/[0.03] to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div class="mb-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1A1C24] to-[#121319] border border-[#2a2d39] flex items-center justify-center text-[#d1b066] shadow-lg group-hover:shadow-[0_0_20px_rgba(209,176,102,0.2)] transition-shadow duration-500">
      <div class="i-lucide:activity text-3xl"></div>
    </div>
    <div class="mb-6 pb-6 border-b border-[#1C1E26] group-hover:border-[#d1b066]/20 transition-colors duration-500">
      <h3 class="text-xl font-serif text-[#F3E8C1] mb-1">Kinematic</h3>
      <p class="text-xs text-[#8A8F9E] font-serif tracking-widest uppercase">動態データ</p>
    </div>
    <p class="text-[0.9rem] text-[#A68A56] font-mono bg-[#1A1C24] px-3 py-1 rounded inline-block mb-4">LIS3DHTR</p>
    <p class="text-[0.9rem] text-[#D1D5DB] leading-relaxed font-light mb-4 text-justify">Accelerometer with hardware interrupts for instant fall detection.</p>
    <p class="text-[0.75rem] text-[#6B7280] font-serif leading-relaxed">ハードウェアイベントによる3軸加速度センサーの自動転倒検知。</p>
  </div>

  <div class="group relative bg-[#0E0F14] p-8 rounded-3xl border border-[#1C1E26] hover:border-[#d1b066]/40 transition-all duration-500 hover:-translate-y-2 shadow-xl delay-200">
    <div class="absolute inset-0 bg-gradient-to-br from-[#d1b066]/[0.03] to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div class="mb-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1A1C24] to-[#121319] border border-[#2a2d39] flex items-center justify-center text-[#d1b066] shadow-lg group-hover:shadow-[0_0_20px_rgba(209,176,102,0.2)] transition-shadow duration-500">
      <div class="i-lucide:thermometer text-3xl"></div>
    </div>
    <div class="mb-6 pb-6 border-b border-[#1C1E26] group-hover:border-[#d1b066]/20 transition-colors duration-500">
      <h3 class="text-xl font-serif text-[#F3E8C1] mb-1">Thermal</h3>
      <p class="text-xs text-[#8A8F9E] font-serif tracking-widest uppercase">体温データ</p>
    </div>
    <p class="text-[0.9rem] text-[#A68A56] font-mono bg-[#1A1C24] px-3 py-1 rounded inline-block mb-4">MAX30208</p>
    <p class="text-[0.9rem] text-[#D1D5DB] leading-relaxed font-light mb-4 text-justify">Continual tracking to monitor for fever or baseline anomalies.</p>
    <p class="text-[0.75rem] text-[#6B7280] font-serif leading-relaxed">デジタル皮膚温度トラッキングによる異常の監視。</p>
  </div>
</div>

---
layout: center
class: text-center px-12
background: '#08090C'
---

<div class="mb-12">
  <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-b from-[#1A1C24] to-[#121319] border border-[#2a2d39] text-[#d1b066] mb-8 shadow-[0_0_30px_rgba(209,176,102,0.15)]">
    <div class="i-lucide:route text-2xl"></div>
  </div>
  <h2 class="text-[0.8rem] font-semibold text-[#A68A56] tracking-[0.4em] uppercase mb-4">The Methodology</h2>
  <h1 class="text-5xl font-serif text-[#F3E8C1] tracking-tight mb-4">Clinical Research Roadmap</h1>
  <p class="text-sm font-serif text-[#8A8F9E] tracking-widest">臨床研究ロードマップ</p>
</div>

<p class="text-xl text-[#E1D1AA] font-light mb-2 max-w-2xl mx-auto leading-relaxed">Building <span class="bg-gradient-to-r from-[#d1b066] to-[#ebce87] bg-clip-text text-transparent font-medium">With</span> the Patient, Not Just For Them</p>
<p class="text-sm font-light text-[#9CA3AF] mb-16 max-w-2xl mx-auto border-b border-[#1C1E26] pb-8">Decoupling hardware testing from user experience testing for a methodical approach.<br><span class="text-xs text-[#6B7280] font-serif mt-2 block">ハードウェアのテストとユーザー体験のテストを切り離して実施します。</span></p>

<div class="flex justify-center items-stretch gap-6 max-w-5xl mx-auto relative z-10">
  <div class="absolute top-1/2 left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#d1b066]/30 to-transparent -z-1 -translate-y-1/2"></div>
  
  <div class="flex-1 bg-[#121319] border border-[#232530] p-8 rounded-3xl shadow-xl relative hover:border-[#d1b066]/30 hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between">
    <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0E0F14] text-[#A68A56] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-[#232530] group-hover:border-[#d1b066]/40 transition-colors">Phase 1</div>
    <div class="flex-1 flex flex-col items-center justify-center">
      <div class="w-16 h-16 rounded-full bg-[#1A1C24] flex items-center justify-center text-[#d1b066] mb-6 border border-[#2a2d39]">
        <div class="i-lucide:shapes text-2xl"></div>
      </div>
      <h3 class="font-sans font-medium text-[#E1D1AA] mb-2 text-lg">Ergonomics</h3>
      <p class="text-[0.8rem] text-[#8A8F9E] mb-6">(Zero Electronics)</p>
    </div>
    <p class="text-[0.7rem] text-[#6B7280] border-t border-[#1C1E26] pt-4 font-serif leading-relaxed">素材と人間工学<br>（電子機器なし）</p>
  </div>
  
  <div class="flex items-center justify-center px-2 text-[#2a2d39]"><div class="i-lucide:arrow-right text-3xl"></div></div>

  <div class="flex-1 bg-[#121319] border border-[#232530] p-8 rounded-3xl shadow-xl relative hover:border-[#d1b066]/30 hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between">
    <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0E0F14] text-[#A68A56] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-[#232530] group-hover:border-[#d1b066]/40 transition-colors">Phase 2</div>
    <div class="flex-1 flex flex-col items-center justify-center">
      <div class="w-16 h-16 rounded-full bg-[#1A1C24] flex items-center justify-center text-[#d1b066] mb-6 border border-[#2a2d39]">
        <div class="i-lucide:smartphone text-2xl"></div>
      </div>
      <h3 class="font-sans font-medium text-[#E1D1AA] mb-2 text-lg">Digital UX</h3>
      <p class="text-[0.8rem] text-[#8A8F9E] mb-6">(App Interface)</p>
    </div>
    <p class="text-[0.7rem] text-[#6B7280] border-t border-[#1C1E26] pt-4 font-serif leading-relaxed">デジタルUX<br>（アプリ）</p>
  </div>

  <div class="flex items-center justify-center px-2 text-[#2a2d39]"><div class="i-lucide:arrow-right text-3xl"></div></div>

  <div class="flex-1 bg-gradient-to-br from-[#1A1C24] to-[#121319] border border-[#d1b066]/40 p-8 rounded-3xl shadow-[0_10px_40px_-10px_rgba(209,176,102,0.15)] relative hover:border-[#d1b066] hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between">
    <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#d1b066] to-[#ebce87] text-[#08090C] px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">Phase 3</div>
    <div class="absolute inset-0 bg-[#d1b066] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
    <div class="flex-1 flex flex-col items-center justify-center relative z-10">
      <div class="w-16 h-16 rounded-full bg-[#0E0F14] flex items-center justify-center text-[#d1b066] mb-6 border border-[#d1b066]/30 shadow-[0_0_15px_rgba(209,176,102,0.2)]">
        <div class="i-lucide:microscope text-2xl"></div>
      </div>
      <h3 class="font-sans font-medium text-[#F3E8C1] mb-2 text-lg drop-shadow-md">Functional MVP</h3>
      <p class="text-[0.8rem] text-[#A68A56] mb-6">(Sensor Validation)</p>
    </div>
    <p class="text-[0.7rem] text-[#D1D5DB] border-t border-[#d1b066]/20 pt-4 font-serif leading-relaxed">機能的MVP<br>（センサー検証）</p>
  </div>
</div>

---
layout: default
background: '#08090C'
class: px-14 py-10
---

<div class="flex justify-between items-end mb-10 border-b border-[#1C1E26] pb-6">
  <div>
    <h2 class="text-[0.7rem] font-semibold text-[#A68A56] tracking-[0.4em] uppercase mb-2">Phase 1</h2>
    <h1 class="text-3xl font-serif text-[#F3E8C1] leading-tight">Materials & Ergonomics</h1>
    <p class="text-xs font-serif text-[#8A8F9E] tracking-widest mt-2">素材と人間工学の検証</p>
  </div>
  <div class="text-[#d1b066] text-4xl opacity-20 font-serif italic pr-4">01</div>
</div>

<div class="grid grid-cols-2 gap-16 items-start">
  <div class="space-y-10 mt-2">
    <p class="text-[#D1D5DB] font-light leading-relaxed text-[0.95rem]">
      Provide elderly patients with 3D-printed dummy models (zero electronics) to evaluate physical comfort and daily habits in their intimate environments.
      <br><span class="text-[0.8rem] text-[#6B7280] font-serif block mt-3">高齢の患者様に3Dプリントされたダミーモデルを提供し、物理的な快適さと日常習慣を評価。</span>
    </p>

    <div>
      <h3 class="font-sans font-medium text-[#E1D1AA] mb-6 flex items-center text-sm tracking-wide uppercase">
        <div class="w-1.5 h-1.5 rounded-full bg-[#d1b066] mr-3"></div>
        Core Research Vectors
      </h3>

      <div class="space-y-4">
        <div class="group flex items-start bg-[#121319] p-5 rounded-2xl border border-[#1C1E26] hover:border-[#d1b066]/30 transition-all duration-300">
          <div class="w-10 h-10 rounded-xl bg-[#1A1C24] border border-[#2a2d39] text-[#d1b066] flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-[#d1b066]/10 transition-colors">
            <div class="i-lucide:box text-lg"></div>
          </div>
          <div>
            <p class="text-[0.9rem] font-medium text-[#F3E8C1] mb-1">Form Preference</p>
            <p class="text-[0.8rem] text-[#9CA3AF] font-light">Which feels most natural? (Band vs. Pouch)</p>
            <p class="text-[0.65rem] text-[#6B7280] font-serif mt-1.5">形状の好み（バンド vs お守り袋）</p>
          </div>
        </div>
        
        <div class="group flex items-start bg-[#121319] p-5 rounded-2xl border border-[#1C1E26] hover:border-[#d1b066]/30 transition-all duration-300">
          <div class="w-10 h-10 rounded-xl bg-[#1A1C24] border border-[#2a2d39] text-[#d1b066] flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-[#d1b066]/10 transition-colors">
            <div class="i-lucide:alert-circle text-lg"></div>
          </div>
          <div>
            <p class="text-[0.9rem] font-medium text-[#F3E8C1] mb-1">Friction Points</p>
            <p class="text-[0.8rem] text-[#9CA3AF] font-light">Clasps & arthritis? Material irritation?</p>
            <p class="text-[0.65rem] text-[#6B7280] font-serif mt-1.5">留め具の負担、素材によるかぶれ</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="relative group">
    <div class="absolute inset-0 bg-[#d1b066] rounded-[2rem] opacity-[0.03] blur-[20px] group-hover:opacity-[0.06] transition-opacity duration-700"></div>
    <div class="bg-gradient-to-br from-[#121319] to-[#0E0F14] p-8 rounded-[2rem] border border-[#232530] shadow-2xl relative overflow-hidden flex flex-col items-center">
      <div class="absolute top-0 right-0 w-32 h-32 bg-[#d1b066]/10 rounded-full blur-[40px] -mr-10 -mt-10 pointer-events-none"></div>
      
      <div class="flex items-center space-x-3 mb-8 w-full">
        <div class="w-2 h-2 rounded-full bg-[#A68A56]"></div>
        <p class="text-[0.65rem] font-medium text-[#A68A56] uppercase tracking-[0.2em]">Ergonomic Dummy</p>
      </div>
      
      <div class="relative w-full aspect-square flex items-center justify-center mb-6">
        <div class="absolute inset-0 bg-[#08090C] rounded-2xl border border-[#1C1E26]"></div>
        <img src="/dummy-band-1.jpg" alt="Band Prototype" class="relative z-10 w-3/4 rounded-xl shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)] border border-[#2a2d39] transform rotate-3 group-hover:rotate-0 transition-transform duration-700" />
      </div>
      
      <div class="bg-[#1A1C24] border border-[#2a2d39] px-6 py-4 rounded-xl w-full text-center">
        <p class="text-[0.75rem] text-[#E1D1AA] font-light">Wristband Form Factor</p>
        <p class="text-[0.65rem] text-[#8A8F9E] mt-1 italic">Ring geometry removed based on strategic pivot.</p>
      </div>
    </div>
  </div>
</div>

---
layout: center
class: text-center px-12
background: '#08090C'
---

<div class="relative max-w-4xl mx-auto">
  <div class="absolute inset-0 bg-gradient-to-b from-[#181A22] to-[#0A0B0E] rounded-[3rem] border border-[#1C1E26] shadow-2xl -z-10"></div>
  <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d1b066]/20 to-transparent"></div>
  
  <div class="p-16">
    <div class="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-[#1A1C24] to-[#121319] border border-[#2a2d39] flex items-center justify-center text-[#d1b066] mb-10 shadow-[0_0_30px_rgba(209,176,102,0.15)] group hover:scale-110 transition-transform duration-500">
      <div class="i-lucide:handshake text-4xl drop-shadow-[0_0_8px_rgba(209,176,102,0.5)]"></div>
    </div>

    <h2 class="text-[0.8rem] font-semibold text-[#A68A56] tracking-[0.4em] uppercase mb-4">Strategic Partnership</h2>
    <h1 class="text-4xl font-serif text-[#F3E8C1] tracking-tight mb-4">Clinical Guidance Required</h1>
    <p class="text-sm font-serif text-[#8A8F9E] tracking-widest mb-12">ディスカッションと次のステップ</p>

    <div class="w-16 h-px bg-[#2a2d39] mx-auto mb-12"></div>

    <p class="text-lg text-[#D1D5DB] font-light leading-relaxed max-w-2xl mx-auto mb-6">
      We are seeking a partner clinic to implement our Phase 1 Ergonomics trial with a small cohort of elderly patients.
    </p>
    <p class="text-[0.85rem] text-[#8A8F9E] font-serif leading-relaxed max-w-2xl mx-auto mb-14">
      貴院と提携し、少人数の患者様を対象としたフェーズ1（人間工学テスト）を実施させていただけないでしょうか？
    </p>

    <div class="bg-[#121319] border border-[#d1b066]/30 p-8 rounded-2xl relative overflow-hidden group hover:border-[#d1b066]/60 transition-colors duration-500">
      <div class="absolute left-0 top-0 w-1 h-full bg-[#d1b066]"></div>
      <div class="absolute right-4 top-4 text-[#d1b066]/10 text-6xl font-serif line-height-none">"</div>
      
      <p class="text-[0.95rem] text-[#E1D1AA] font-light leading-relaxed mb-4 relative z-10 italic">
        What specific demographic variables or clinical histories should we actively isolate for this initial materials testing group?
      </p>
      <p class="text-[0.75rem] text-[#6B7280] font-serif border-t border-[#1C1E26] pt-4 mt-4 relative z-10">
        この初期の素材テストグループにおいて、特に重視すべき属性や病歴などはございますか？
      </p>
    </div>
  </div>
</div>
\`;

fs.writeFileSync('slides.md', content, 'utf8');
console.log('Successfully wrote slides.md in UTF-8');
