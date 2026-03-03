<template>
  <section class="doc-section" id="playground">
    <h2 class="section-title">Interactive Playground</h2>
    <p class="section-desc">Configure the button properties below to see the result in real time.</p>
    <div class="playground">
      <div class="playground-controls">
        <div class="control-group">
          <label>Size</label>
          <select v-model="selectedSize">
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div class="control-group">
          <label>Style</label>
          <select v-model="selectedStyle">
            <option value="primary">Primary</option>
            <option value="primary-brand">Primary - Brand Yellow</option>
            <option value="secondary">Secondary</option>
            <option value="transparent">Transparent</option>
          </select>
        </div>
        <div class="control-group">
          <label>State</label>
          <select v-model="selectedState">
            <option value="">Normal</option>
            <option value="hover">Hover</option>
            <option value="active-state">Active</option>
            <option value="focus">Focus</option>
            <option value="disabled">Disabled</option>
          </select>
        </div>
        <div class="control-group">
          <label>Label</label>
          <input v-model="labelText" type="text">
        </div>
      </div>
      <div class="playground-preview">
        <PbButton
          :size="selectedSize"
          :variant="selectedStyle"
          :state-class="selectedState"
          :label="labelText"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import PbButton from './PbButton.vue'

const selectedSize = ref('medium')
const selectedStyle = ref('primary')
const selectedState = ref('')
const labelText = ref('Label')
</script>

<style scoped>
.doc-section { margin-bottom: 64px; }
.section-title {
  font-size: 24px; font-weight: 700; color: var(--brand);
  margin-bottom: 8px; padding-bottom: 12px; border-bottom: 2px solid var(--doc-border);
}
.section-desc { font-size: 14px; color: var(--doc-text-subtle); margin-bottom: 24px; }
.playground {
  background: var(--doc-surface); border: 1px solid var(--doc-border);
  border-radius: 12px; overflow: hidden;
}
.playground-controls {
  display: flex; gap: 20px; padding: 24px; background: #fafafa;
  border-bottom: 1px solid var(--doc-border); flex-wrap: wrap;
}
.control-group { display: flex; flex-direction: column; gap: 6px; }
.control-group label {
  font-size: 12px; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.5px; color: var(--doc-text-subtle);
}
.control-group select,
.control-group input {
  padding: 8px 12px; font-size: 14px; border: 1px solid var(--doc-border);
  border-radius: 6px; background: #fff; font-family: var(--font-sans); min-width: 160px;
}
.control-group select:focus,
.control-group input:focus {
  outline: none; border-color: var(--stroke-focus);
  box-shadow: 0 0 0 2px rgba(40, 110, 213, 0.2);
}
.playground-preview {
  display: flex; align-items: center; justify-content: center;
  min-height: 160px; padding: 40px;
}
</style>
