<template>
  <section class="doc-section" id="tokens">
    <h2 class="section-title">Design Tokens</h2>

    <div v-for="group in tokenGroups" :key="group.title">
      <h3 class="subsection-title">{{ group.title }}</h3>
      <div class="token-grid">
        <div v-for="t in group.tokens" :key="t.name" class="token-row">
          <div class="token-swatch" :style="{ background: t.value, border: t.value === '#ffffff' ? '1px solid #ddd' : 'none' }"></div>
          <code>{{ t.name }}</code>
          <span class="token-value">{{ t.value }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const tokenGroups = [
  {
    title: 'Primary',
    tokens: [
      { name: 'Component/Button/Primary/bg', value: '#002f30' },
      { name: 'Component/Button/Primary/bg-hover', value: '#557475' },
      { name: 'Component/Button/Primary/bg-active', value: '#002728' },
    ],
  },
  {
    title: 'Primary - Brand Yellow',
    tokens: [
      { name: 'Component/Button/Primary-Brand/bg', value: '#ffd900' },
      { name: 'Component/Button/Primary-Brand/bg-hover', value: '#ffe655' },
      { name: 'Component/Button/Primary-Brand/bg-active', value: '#d5b500' },
    ],
  },
  {
    title: 'Secondary & Transparent',
    tokens: [
      { name: 'Component/Button/Secondary-Transp/bg-hover', value: '#fff2aa' },
      { name: 'Component/Button/Secondary-Transp/bg-active', value: '#fff2aa' },
      { name: 'Stroke/brand', value: '#002f30' },
    ],
  },
  {
    title: 'Shared',
    tokens: [
      { name: 'Stroke/focus', value: '#286ed5' },
      { name: 'Background/disabled', value: '#e9e9e9' },
      { name: 'Text/disabled', value: '#bdbdbd' },
      { name: 'Stroke/disabled', value: '#bdbdbd' },
      { name: 'Text/inverse', value: '#ffffff' },
      { name: 'Text/brand', value: '#002f30' },
    ],
  },
]
</script>

<style scoped>
.doc-section { margin-bottom: 64px; }
.section-title {
  font-size: 24px; font-weight: 700; color: var(--brand);
  margin-bottom: 8px; padding-bottom: 12px; border-bottom: 2px solid var(--doc-border);
}
.subsection-title { font-size: 16px; font-weight: 700; color: var(--doc-text); margin: 28px 0 12px; }
.token-grid { display: flex; flex-direction: column; gap: 8px; margin-bottom: 8px; }
.token-row {
  display: flex; align-items: center; gap: 16px; padding: 10px 16px;
  background: var(--doc-surface); border: 1px solid var(--doc-border); border-radius: 8px;
}
.token-swatch { width: 32px; height: 32px; border-radius: 6px; flex-shrink: 0; }
.token-row code { flex: 1; font-size: 13px; color: var(--doc-text); }
.token-value { font-size: 13px; font-weight: 600; color: var(--doc-text-subtle); font-family: monospace; }
</style>
