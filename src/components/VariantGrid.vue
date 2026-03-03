<template>
  <section class="doc-section" :id="'variants-' + size">
    <h2 class="section-title">Variants - Size: {{ size === 'medium' ? 'Medium' : 'Large' }}</h2>
    <p class="section-desc">
      Font: Piraeus Open Sans Bold, {{ size === 'medium' ? '16px / line-height 1.4' : '20px / line-height 1.5' }}
    </p>
    <div class="variant-grid">
      <div class="variant-grid-header">
        <div class="grid-label"></div>
        <div class="grid-label">Primary</div>
        <div class="grid-label">Primary-Brand</div>
        <div class="grid-label">Secondary</div>
        <div class="grid-label">Transparent</div>
      </div>
      <div v-for="state in stateRows" :key="state.label" class="variant-grid-row">
        <div class="grid-state">{{ state.label }}</div>
        <div v-for="variant in variants" :key="variant" class="grid-cell">
          <PbButton :size="size" :variant="variant" :state-class="state.cls" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import PbButton from './PbButton.vue'

defineProps({
  size: { type: String, required: true },
})

const variants = ['primary', 'primary-brand', 'secondary', 'transparent']
const stateRows = [
  { label: 'Normal', cls: '' },
  { label: 'Hover', cls: 'hover' },
  { label: 'Active', cls: 'active-state' },
  { label: 'Focus', cls: 'focus' },
  { label: 'Disabled', cls: 'disabled' },
]
</script>

<style scoped>
.doc-section { margin-bottom: 64px; }
.section-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--brand);
  margin-bottom: 8px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--doc-border);
}
.section-desc { font-size: 14px; color: var(--doc-text-subtle); margin-bottom: 24px; }
.variant-grid {
  background: var(--doc-surface);
  border: 1px solid var(--doc-border);
  border-radius: 12px;
  overflow: hidden;
}
.variant-grid-header {
  display: grid;
  grid-template-columns: 100px repeat(4, 1fr);
  background: #fafafa;
  border-bottom: 1px solid var(--doc-border);
}
.grid-label {
  padding: 14px 20px;
  font-size: 13px;
  font-weight: 700;
  color: var(--doc-text-subtle);
  text-align: center;
}
.grid-label:first-child { text-align: left; }
.variant-grid-row {
  display: grid;
  grid-template-columns: 100px repeat(4, 1fr);
  border-bottom: 1px solid var(--doc-border);
  align-items: center;
}
.variant-grid-row:last-child { border-bottom: none; }
.grid-state { padding: 20px; font-size: 13px; font-weight: 600; color: var(--doc-text-subtle); }
.grid-cell { display: flex; align-items: center; justify-content: center; padding: 20px 12px; }
</style>
