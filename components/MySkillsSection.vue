<template>
  <section class="skills-section">
    <h2>Top Skills</h2>
    <SkillTree
      v-if="useTreeView"
      :categories="skillCategories"
      class="skills-tree-container"
    />
    <div v-else class="skills-container">
      <SkillBadge
        v-for="SkillClass in topSkills"
        :key="SkillClass.name"
        :skill="new SkillClass()"
      />
    </div>
  </section>
</template>

<script>
import { useExperienceStore } from '~/store/experience';

export default {
  setup () {
    const experienceStore = useExperienceStore();

    return {
      topSkills: experienceStore.topSkills,
      skillCategories: experienceStore.skillCategories,
      useTreeView: true, // Toggle between tree and flat view
    };
  },
};
</script>

<style>
.skills-section {
  margin: 3rem 0;
}

.skills-section h2 {
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.75rem;
  --minFontSize: 1.2rem;
  --maxFontSize: 2rem;
  /* https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/#for-those-who-dont-mind-that-edge-case */
  --scaler: 0.6000rem + 2.6667vw;

  font-size: clamp(var(--minFontSize), var(--scaler), var(--maxFontSize));
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.7rem;
  margin-top: 1.25rem;
}

.skills-tree-container {
  margin-top: 1.5rem;
}

/* Print styles */
@media print {
  .skills-section {
    margin: 1rem 0;
  }

  .skills-section h2 {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }
}
</style>
