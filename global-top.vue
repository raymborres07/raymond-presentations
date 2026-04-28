<template>
  <!-- Home button -->
  <a
    href="/"
    title="Back to Home"
    :style="homeStyle"
    @mouseenter="homeHovered = true"
    @mouseleave="homeHovered = false"
  >
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  </a>

  <!-- Lightbox Modal -->
  <Teleport to="body">
    <Transition name="fade">
      <div 
        v-if="selectedImg" 
        class="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 p-4 md:p-12 cursor-zoom-out"
        @click="selectedImg = null"
      >
        <div class="relative max-w-full max-h-full flex items-center justify-center">
          <img 
            :src="selectedImg" 
            class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10"
            @click.stop
          />
          <button 
            class="absolute -top-10 -right-2 md:-right-10 text-white/50 hover:text-white transition-colors p-2"
            @click="selectedImg = null"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const homeHovered = ref(false)
const selectedImg = ref(null)

const homeStyle = computed(() => ({
  position: 'fixed',
  top: '12px',
  left: '12px',
  zIndex: 200,
  width: '28px',
  height: '28px',
  background: homeHovered.value ? 'rgba(209,176,102,0.2)' : 'rgba(209,176,102,0.07)',
  border: '1px solid rgba(209,176,102,' + (homeHovered.value ? '0.5' : '0.18') + ')',
  borderRadius: '7px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#d1b066',
  textDecoration: 'none',
  opacity: homeHovered.value ? '1' : '0.45',
  transition: 'all 0.2s ease',
  cursor: 'pointer',
}))

const handleGlobalClick = (e) => {
  if (e.target.tagName === 'IMG' && !e.target.closest('button') && !e.target.closest('a')) {
    selectedImg.value = e.target.src
    e.preventDefault()
  }
}

onMounted(() => {
  document.addEventListener('click', handleGlobalClick)
})

onUnmounted(() => {
  document.removeEventListener('click', handleGlobalClick)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Ensure images look clickable */
:global(.slidev-layout img) {
  cursor: zoom-in;
  transition: opacity 0.2s;
}
:global(.slidev-layout img:hover) {
  opacity: 0.9;
}
</style>
