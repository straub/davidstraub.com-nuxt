<template>
  <div itemscope itemtype="http://www.schema.org/Person">
    <link itemprop="url" href="https://davidstraub.com/">
    <header>
      <MyPhoto />
      <MyName />
      <MyTagline />
    </header>
    <main>
      <MyBio />
      <MyConnect />
      <!-- <MySkills /> -->
      <!-- <MyExperience /> -->
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
  header {
    margin-top: 1.5rem;
  }
</style>

<style>
  /* Print-specific stylesheet for resume layout */
  @media print {
    /* Global print settings */
    body {
      font-size: 11pt;
      line-height: 1.3;
      color: #000;
      background: #fff;
      margin: 0;
      padding: 0;
    }

    /* Hide navigation and other screen-only elements */
    nav, footer, button {
      display: none !important;
    }

    /* Layout adjustments for main sections */
    main {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 1rem;
    }

    /* Experience timeline takes full left column */
    main > :nth-child(4) {
      grid-column: 1;
      grid-row: 1 / span 3;
    }

    /* Bio, Connect, Skills take right column */
    main > :nth-child(1),
    main > :nth-child(2),
    main > :nth-child(3) {
      grid-column: 2;
    }

    /* Remove decorative elements */
    .timeline-line, .timeline-dot {
      display: none !important;
    }

    /* Skill badges more compact */
    .skill-badge {
      padding: 0.1rem 0.3rem !important;
      margin: 0.1rem !important;
      font-size: 9pt !important;
    }

    /* Spacing adjustments */
    h1, h2, h3 {
      margin-top: 0.5rem;
      margin-bottom: 0.3rem;
    }

    p {
      margin: 0.2rem 0;
    }

    /* Ensure the entire resume fits on standard pages */
    @page {
      size: letter portrait;
      margin: 0.5in;
    }
  }
</style>
