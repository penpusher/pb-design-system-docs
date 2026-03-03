<template>
  <section class="doc-section" id="code">
    <h2 class="section-title">Code Examples</h2>

    <div class="code-block">
      <div class="code-header">
        <span>Vue.js</span>
        <button class="copy-btn" @click="copy(vueCode)">{{ copied === 'vue' ? 'Copied!' : 'Copy' }}</button>
      </div>
      <pre><code>{{ vueCode }}</code></pre>
    </div>

    <div class="code-block">
      <div class="code-header">
        <span>HTML / CSS</span>
        <button class="copy-btn" @click="copy(htmlCode)">{{ copied === 'html' ? 'Copied!' : 'Copy' }}</button>
      </div>
      <pre><code>{{ htmlCode }}</code></pre>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const copied = ref('')

const vueCode = `<PbButton size="medium" variant="primary" label="Get Started" />
<PbButton size="large" variant="primary-brand" label="Sign Up" />
<PbButton size="medium" variant="secondary" label="Cancel" />
<PbButton size="medium" variant="transparent" label="Learn More" />`

const htmlCode = `<button class="pb-btn medium primary">
  + Label +
</button>

<button class="pb-btn large primary-brand">
  + Sign Up +
</button>

<button class="pb-btn medium secondary">
  + Cancel +
</button>

<button class="pb-btn medium transparent">
  + Learn More +
</button>`

function copy(text) {
  navigator.clipboard.writeText(text)
  const key = text === vueCode ? 'vue' : 'html'
  copied.value = key
  setTimeout(() => { copied.value = '' }, 2000)
}
</script>

<style scoped>
.doc-section { margin-bottom: 64px; }
.section-title {
  font-size: 24px; font-weight: 700; color: var(--brand);
  margin-bottom: 8px; padding-bottom: 12px; border-bottom: 2px solid var(--doc-border);
}
.code-block {
  background: #1e1e1e; border-radius: 12px; overflow: hidden; margin-bottom: 20px;
}
.code-header {
  display: flex; justify-content: space-between; align-items: center;
  padding: 12px 20px; background: #2d2d2d; font-size: 13px; color: #aaa;
}
.copy-btn {
  background: rgba(255, 255, 255, 0.1); border: none; color: #aaa;
  padding: 4px 12px; border-radius: 4px; font-size: 12px; cursor: pointer;
  transition: all 0.15s ease;
}
.copy-btn:hover { background: rgba(255, 255, 255, 0.2); color: #fff; }
.code-block pre {
  padding: 20px; margin: 0; overflow-x: auto;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 13px; line-height: 1.6; color: #d4d4d4;
}
</style>
