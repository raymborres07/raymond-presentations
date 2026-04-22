import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(() => {
  if (typeof document !== 'undefined') {
    const style = document.createElement('style')
    style.textContent = `
      /* Custom thin scrollbar for all slides */
      .slidev-layout *::-webkit-scrollbar {
        width: 4px;
        height: 4px;
      }
      .slidev-layout *::-webkit-scrollbar-track {
        background: transparent;
      }
      .slidev-layout *::-webkit-scrollbar-thumb {
        background: rgba(209, 176, 102, 0.4);
        border-radius: 4px;
      }
      .slidev-layout *::-webkit-scrollbar-thumb:hover {
        background: rgba(209, 176, 102, 0.8);
      }
      /* Firefox */
      .slidev-layout * {
        scrollbar-width: thin;
        scrollbar-color: rgba(209,176,102,0.4) transparent;
      }
    `
    document.head.appendChild(style)
  }
})
