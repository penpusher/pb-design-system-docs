<template>
  <button
    class="pb-btn"
    :class="[size, variant, stateClass]"
    :disabled="stateClass === 'disabled'"
  >
    + {{ label }} +
  </button>
</template>

<script setup>
defineProps({
  size: { type: String, default: 'medium' },
  variant: { type: String, default: 'primary' },
  stateClass: { type: String, default: '' },
  label: { type: String, default: 'Label' },
})
</script>

<style scoped>
.pb-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  cursor: pointer;
  font-family: var(--font-sans);
  font-weight: 700;
  white-space: nowrap;
  transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;
}

.pb-btn.medium { height: 48px; padding: 0 24px; font-size: 16px; line-height: 1.4; }
.pb-btn.large { height: 56px; padding: 0 32px; font-size: 20px; line-height: 1.5; }

.pb-btn.primary { background: var(--primary-bg); color: var(--text-inverse); }
.pb-btn.primary.hover { background: var(--primary-hover); }
.pb-btn.primary.active-state { background: var(--primary-active); }
.pb-btn.primary.focus { background: var(--primary-bg); box-shadow: 0 0 0 3px var(--stroke-focus); }
.pb-btn.primary.disabled { background: var(--bg-disabled); color: var(--text-disabled); cursor: not-allowed; }

.pb-btn.primary-brand { background: var(--brand-bg); color: var(--text-brand); }
.pb-btn.primary-brand.hover { background: var(--brand-hover); }
.pb-btn.primary-brand.active-state { background: var(--brand-active); }
.pb-btn.primary-brand.focus { background: var(--brand-bg); box-shadow: 0 0 0 3px var(--stroke-focus); }
.pb-btn.primary-brand.disabled { background: var(--bg-disabled); color: var(--text-disabled); cursor: not-allowed; }

.pb-btn.secondary { background: transparent; color: var(--text-brand); border: 2px solid var(--stroke-brand); }
.pb-btn.secondary.hover { background: var(--secondary-hover); }
.pb-btn.secondary.active-state { background: var(--secondary-active); }
.pb-btn.secondary.focus { border-color: var(--stroke-focus); box-shadow: 0 0 0 2px var(--stroke-focus); }
.pb-btn.secondary.disabled { background: transparent; color: var(--text-disabled); border-color: var(--stroke-disabled); cursor: not-allowed; }

.pb-btn.transparent { background: transparent; color: var(--text-brand); border: none; }
.pb-btn.transparent.hover { background: var(--secondary-hover); }
.pb-btn.transparent.active-state { background: var(--secondary-active); }
.pb-btn.transparent.focus { box-shadow: 0 0 0 3px var(--stroke-focus); }
.pb-btn.transparent.disabled { color: var(--text-disabled); cursor: not-allowed; }
</style>
