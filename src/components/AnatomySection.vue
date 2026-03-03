<template>
  <section class="doc-section" id="anatomy">
    <h2 class="section-title">Anatomy</h2>
    <p class="section-desc">The button component is composed of icon slots and a text label.</p>
    <div class="anatomy-diagram">
      <div class="anatomy-btn">
        <span class="anatomy-part" data-num="1">+</span>
        <span class="anatomy-part" data-num="2">Label</span>
        <span class="anatomy-part" data-num="3">+</span>
      </div>
      <div class="anatomy-legend">
        <span class="legend-item"><span class="legend-num">1</span> Leading icon</span>
        <span class="legend-item"><span class="legend-num">2</span> Text label</span>
        <span class="legend-item"><span class="legend-num">3</span> Trailing icon</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.doc-section { margin-bottom: 64px; }
.section-title {
  font-size: 24px; font-weight: 700; color: var(--brand);
  margin-bottom: 8px; padding-bottom: 12px; border-bottom: 2px solid var(--doc-border);
}
.section-desc { font-size: 14px; color: var(--doc-text-subtle); margin-bottom: 24px; }
.anatomy-diagram {
  background: var(--doc-surface); border: 1px solid var(--doc-border);
  border-radius: 12px; padding: 48px; text-align: center;
}
.anatomy-btn {
  display: inline-flex; align-items: center; gap: 12px;
  padding: 14px 32px; background: var(--primary-bg); color: var(--text-inverse);
  font-size: 18px; font-weight: 700; position: relative;
}
.anatomy-part { position: relative; }
.anatomy-part::after {
  content: attr(data-num); position: absolute; top: -28px; left: 50%;
  transform: translateX(-50%); width: 22px; height: 22px;
  border-radius: 50%; background: var(--brand-yellow); color: var(--brand);
  font-size: 12px; font-weight: 700; display: flex; align-items: center;
  justify-content: center;
}
.anatomy-legend {
  display: flex; gap: 24px; justify-content: center; margin-top: 36px;
}
.legend-item { display: flex; align-items: center; gap: 8px; font-size: 14px; color: var(--doc-text-subtle); }
.legend-num {
  width: 22px; height: 22px; border-radius: 50%;
  background: var(--brand-yellow); color: var(--brand);
  font-size: 12px; font-weight: 700; display: inline-flex;
  align-items: center; justify-content: center;
}
</style>
