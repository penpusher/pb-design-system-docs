<template>
  <div class="app-layout">
    <SidebarNav :active-section="activeSection" @navigate="scrollTo" />
    <main class="main-content">
      <header class="page-header">
        <span class="badge">Component</span>
        <h1>Button</h1>
        <p class="header-desc">
          Buttons are used to trigger actions or navigate. They come in multiple
          styles, sizes, and states to serve different levels of hierarchy and context.
        </p>
        <div class="meta-row">
          <span class="meta-chip">4 Variants</span>
          <span class="meta-chip">2 Sizes</span>
          <span class="meta-chip">5 States</span>
        </div>
      </header>

      <AnatomySection />
      <VariantGrid size="medium" />
      <VariantGrid size="large" />
      <PlaygroundSection />
      <TokenSection />
      <TypographySection />
      <SpacingSection />
      <UsageSection />
      <CodeSection />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SidebarNav from './components/SidebarNav.vue'
import AnatomySection from './components/AnatomySection.vue'
import VariantGrid from './components/VariantGrid.vue'
import PlaygroundSection from './components/PlaygroundSection.vue'
import TokenSection from './components/TokenSection.vue'
import TypographySection from './components/TypographySection.vue'
import SpacingSection from './components/SpacingSection.vue'
import UsageSection from './components/UsageSection.vue'
import CodeSection from './components/CodeSection.vue'

const activeSection = ref('button')

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const sectionIds = ['anatomy', 'variants-medium', 'variants-large', 'playground', 'tokens', 'typography', 'spacing', 'usage', 'code']

function onScroll() {
  const scrollY = window.scrollY + 120
  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const el = document.getElementById(sectionIds[i])
    if (el && el.offsetTop <= scrollY) {
      const mapped = sectionIds[i].startsWith('variants') ? 'button' : sectionIds[i]
      activeSection.value = mapped
      return
    }
  }
  activeSection.value = 'button'
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.app-layout { display: flex; min-height: 100vh; }
.main-content {
  margin-left: 240px;
  flex: 1;
  padding: 48px 64px;
  max-width: 1100px;
}
.page-header { margin-bottom: 56px; }
.badge {
  display: inline-block;
  background: var(--brand-yellow);
  color: var(--brand);
  font-size: 11px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
}
.page-header h1 {
  font-size: 40px;
  font-weight: 700;
  color: var(--brand);
  margin-bottom: 12px;
}
.header-desc {
  font-size: 16px;
  color: var(--doc-text-subtle);
  line-height: 1.6;
  max-width: 640px;
  margin-bottom: 20px;
}
.meta-row { display: flex; gap: 10px; }
.meta-chip {
  font-size: 12px;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 100px;
  background: var(--doc-surface);
  border: 1px solid var(--doc-border);
  color: var(--doc-text-subtle);
}
</style>
