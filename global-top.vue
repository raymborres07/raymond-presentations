<template>
  <a
    href="/"
    title="Back to Home"
    :style="hoverStyle"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  </a>
</template>

<script setup>
import { ref, computed } from 'vue'
const hovered = ref(false)
const hoverStyle = computed(() => ({
  position: 'fixed',
  top: '14px',
  left: '14px',
  zIndex: 200,
  width: '30px',
  height: '30px',
  background: hovered.value ? 'rgba(209,176,102,0.2)' : 'rgba(209,176,102,0.07)',
  border: '1px solid rgba(209,176,102,' + (hovered.value ? '0.5' : '0.2') + ')',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#d1b066',
  textDecoration: 'none',
  opacity: hovered.value ? '1' : '0.5',
  transition: 'all 0.2s ease',
  cursor: 'pointer',
}))
</script>
