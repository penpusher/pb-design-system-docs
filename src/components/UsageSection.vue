<template>
  <section class="doc-section" id="usage">
    <h2 class="section-title">Usage Guidelines</h2>
    <div class="usage-grid">
      <div class="usage-card do">
        <h4 class="usage-card-title">Do</h4>
        <ul>
          <li>Use Primary for the main call-to-action on a page</li>
          <li>Use Primary-Brand for promotional / marketing contexts</li>
          <li>Use Secondary when a less prominent action is needed alongside a Primary button</li>
          <li>Use Transparent for tertiary or inline actions</li>
          <li>Always provide clear, concise label text</li>
        </ul>
      </div>
      <div class="usage-card dont">
        <h4 class="usage-card-title">Don't</h4>
        <ul>
          <li>Don't use more than one Primary button per section</li>
          <li>Don't mix Primary and Primary-Brand buttons in the same group</li>
          <li>Don't use buttons for navigation; use links instead</li>
          <li>Don't use only icons without a visible label (except icon-only variant)</li>
          <li>Don't override the disabled state styling</li>
        </ul>
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
.usage-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.usage-card {
  border-radius: 12px; padding: 28px; border: 1px solid;
}
.usage-card.do { background: #f0fdf4; border-color: #bbf7d0; }
.usage-card.dont { background: #fef2f2; border-color: #fecaca; }
.usage-card-title { font-size: 15px; font-weight: 700; margin-bottom: 12px; }
.usage-card.do .usage-card-title { color: #16a34a; }
.usage-card.dont .usage-card-title { color: #dc2626; }
.usage-card ul { margin: 0; padding-left: 20px; }
.usage-card li { font-size: 14px; color: var(--doc-text); line-height: 1.7; }
</style>
