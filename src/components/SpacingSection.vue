<template>
  <section class="doc-section" id="spacing">
    <h2 class="section-title">Spacing</h2>
    <div class="spacing-table">
      <div class="spacing-header">
        <span>Token</span><span>Value</span><span>Visual</span>
      </div>
      <div v-for="s in spacingTokens" :key="s.token" class="spacing-row">
        <code>{{ s.token }}</code>
        <span class="spacing-value">{{ s.value }}</span>
        <div class="spacing-bar-wrap">
          <div class="spacing-bar" :style="{ width: s.value }"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { spacing as spacingTokens } from '../assets/tokens'
</script>

<style scoped>
.doc-section { margin-bottom: 64px; }
.section-title {
  font-size: 24px; font-weight: 700; color: var(--brand);
  margin-bottom: 8px; padding-bottom: 12px; border-bottom: 2px solid var(--doc-border);
}
.spacing-table {
  background: var(--doc-surface); border: 1px solid var(--doc-border);
  border-radius: 12px; overflow: hidden;
}
.spacing-header, .spacing-row {
  display: grid; grid-template-columns: 1fr 0.6fr 2fr;
  padding: 14px 20px; align-items: center;
}
.spacing-header {
  background: #fafafa; border-bottom: 1px solid var(--doc-border);
  font-size: 12px; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.5px; color: var(--doc-text-subtle);
}
.spacing-row { border-bottom: 1px solid var(--doc-border); font-size: 14px; }
.spacing-row:last-child { border-bottom: none; }
.spacing-row code { font-size: 13px; }
.spacing-value { font-weight: 600; font-family: monospace; color: var(--doc-text-subtle); }
.spacing-bar-wrap { height: 18px; background: #f5f5f5; border-radius: 4px; overflow: hidden; }
.spacing-bar { height: 100%; background: var(--brand-yellow); border-radius: 4px; }
</style>
