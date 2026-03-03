<template>
  <section class="doc-section" id="typography">
    <h2 class="section-title">Typography</h2>
    <div class="typo-table">
      <div class="typo-header">
        <span>Size</span><span>Token</span><span>Family</span><span>Weight</span><span>Font Size</span><span>Line Height</span>
      </div>
      <div v-for="(spec, key) in typographyTokens" :key="key" class="typo-row">
        <span class="typo-size">{{ key }}</span>
        <code>{{ spec.token }}</code>
        <span>{{ spec.family }}</span>
        <span>{{ spec.weight }}</span>
        <span>{{ spec.size }}</span>
        <span>{{ spec.lineHeight }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { typography as typographyTokens } from '../assets/tokens'
</script>

<style scoped>
.doc-section { margin-bottom: 64px; }
.section-title {
  font-size: 24px; font-weight: 700; color: var(--brand);
  margin-bottom: 8px; padding-bottom: 12px; border-bottom: 2px solid var(--doc-border);
}
.typo-table {
  background: var(--doc-surface); border: 1px solid var(--doc-border); border-radius: 12px;
  overflow: hidden;
}
.typo-header, .typo-row { display: grid; grid-template-columns: 100px 1.5fr 1.5fr 1fr 0.8fr 0.8fr; padding: 14px 20px; align-items: center; }
.typo-header {
  background: #fafafa; border-bottom: 1px solid var(--doc-border);
  font-size: 12px; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.5px; color: var(--doc-text-subtle);
}
.typo-row { border-bottom: 1px solid var(--doc-border); font-size: 14px; color: var(--doc-text); }
.typo-row:last-child { border-bottom: none; }
.typo-row code { font-size: 13px; }
.typo-size { font-weight: 700; text-transform: capitalize; }
</style>
