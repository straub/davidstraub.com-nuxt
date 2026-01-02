<template>
  <div ref="skillTree" class="skill-tree">
    <!-- Interactive view for screen display -->
    <div class="screen-view">
      <div class="category-row">
        <div
          v-for="(category, index) in categories"
          :key="category.name"
          class="category-container"
        >
          <button
            class="category-button"
            :class="{ 'active': activeCategory === index }"
            @click.stop="toggleCategory(index)"
            @mouseover="activeCategory = index"
            @focus="activeCategory = index"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
      <div v-if="activeCategory !== null" class="skills-display">
        <div class="skills-wrapper">
          <SkillBadge
            v-for="SkillClass in categories[activeCategory].skills"
            :key="SkillClass.name"
            :skill="new SkillClass()"
            class="category-skill"
          />
        </div>
      </div>
    </div>

    <!-- Print-only view -->
    <div class="print-view">
      <div
        v-for="category in categories"
        :key="'print-' + category.name"
        class="print-category"
      >
        <h3 class="print-category-name">
          {{ category.name }}
        </h3>
        <ul class="print-skills-list">
          <li
            v-for="SkillClass in category.skills"
            :key="'print-' + SkillClass.name"
            class="print-skill"
          >
            {{ new SkillClass().name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  data () {
    return {
      activeCategory: null,
    };
  },
  mounted () {
    // Add click event listener to document to detect clicks outside
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount () {
    // Clean up event listener when component is destroyed
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    toggleCategory (index) {
      if (this.activeCategory === index) {
        this.activeCategory = null;
      } else {
        this.activeCategory = index;
      }
    },
    handleClickOutside (event) {
      // Check if click was outside the skill tree component
      if (this.$refs.skillTree && !this.$refs.skillTree.contains(event.target)) {
        this.activeCategory = null;
      }
    },
  },
};
</script>

<style>
.skill-tree {
  width: 100%;
  margin: 0 auto;
}

.category-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.7rem;
  margin-bottom: 1rem;
}

.category-container {
  display: inline-block;
}

.category-button {
  background-color: rgba(0, 85, 176, 0.15);
  border: 1px solid #0055B0;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  color: #e8e6e3;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.95rem;
  font-family: inherit;
}

.category-button:hover,
.category-button:focus {
  background-color: rgba(0, 85, 176, 0.25);
  outline: none;
  transform: translateY(-2px);
}

.category-button.active {
  background-color: rgba(0, 119, 255, 0.3);
  border-color: #0077ff;
  box-shadow: 0 2px 8px rgba(0, 119, 255, 0.3);
}

.skills-display {
  margin-top: 0.5rem;
  border-top: 1px solid rgba(0, 85, 176, 0.2);
  padding-top: 1rem;
}

.skills-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.category-skill {
  margin: 0.2rem;
}

.print-view {
  display: none;
}

/* Print styles - show print view, hide interactive view */
@media print {
  .screen-view {
    display: none !important;
  }

  .print-view {
    display: block !important;
  }

  .print-category {
    margin-bottom: 0.8rem;
    break-inside: avoid;
    page-break-inside: avoid;
  }

  .print-category-name {
    font-size: 0.95rem;
    font-weight: bold;
    margin: 0 0 0.2rem 0;
    color: #000;
  }

  .print-skills-list {
    margin: 0;
    padding-left: 1.5rem;
  }

  .print-skill {
    font-size: 0.8rem;
    margin: 0.1rem 0;
    list-style-type: disc;
  }
}
</style>
