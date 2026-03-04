<template>
  <div class="app-layout">
    <SidebarNav :active-page="activePage" :active-section="activeSection" @navigate="navigateTo" />
    <main class="main-content">
      <ButtonPage v-if="activePage === 'button'" />
      <AccordionPage v-else-if="activePage === 'accordion'" />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SidebarNav from './components/SidebarNav.vue'
import ButtonPage from './pages/ButtonPage.vue'
import AccordionPage from './pages/AccordionPage.vue'

const activePage = ref('button')
const activeSection = ref('')

const foundationIds = ['tokens', 'typography', 'spacing']

function onScroll() {
  const scrollY = window.scrollY + 120
  for (let i = foundationIds.length - 1; i >= 0; i--) {
    const el = document.getElementById(foundationIds[i])
    if (el && el.offsetTop <= scrollY) {
      activeSection.value = foundationIds[i]
      return
    }
  }
  activeSection.value = ''
}

function navigateTo(id) {
  activePage.value = id
  activeSection.value = ''
  window.scrollTo({ top: 0, behavior: 'smooth' })
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
</style>
