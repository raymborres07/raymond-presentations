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
</template>

<script setup>
import { ref, computed } from 'vue'

const homeHovered = ref(false)

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
</script>
