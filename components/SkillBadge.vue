<template>
  <div
    class="skill-badge"
    :class="[
      { 'with-focus': skill.focus },
      `level-${skill.level || 1}`,
      skill.focus ? `focus-${skill.focus}` : ''
    ]"
    :title="badgeTitle"
  >
    <div class="level-icon">
      <div class="pie-chart" :class="`pie-level-${skill.level || 1}`" />
    </div>
    <span class="skill-name">{{ skill.name }}</span>
    <div v-if="skill.focus" class="focus-chevrons">
      <div v-for="n in 3" :key="n" class="chevron-container">
        <IconBase
          :path="getChevronPath(skill.focus)"
          class="chevron"
          :class="getChevronAnimationClass(skill.focus, n)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      required: true,
    },
  },
  computed: {
    badgeTitle () {
      let title = this.getLevelTitle(this.skill.level || 1);

      if (this.skill.focus === 'growing') {
        title += ' • Growing';
      } else if (this.skill.focus === 'fading') {
        title += ' • Fading';
      }

      return title;
    },
  },
  methods: {
    getLevelTitle (level) {
      const levels = {
        1: 'Basic',
        2: 'Proficient',
        3: 'Expert',
      };

      return levels[level] || levels[1];
    },
    getChevronPath (focus) {
      // Growing: upward chevron, Fading: downward chevron
      return focus === 'growing'
        ? 'M5,15L12,8L19,15H5Z' // Upward chevron
        : 'M19,9L12,16L5,9H19Z'; // Downward chevron
    },
    getChevronAnimationClass (focus, n) {
      if (focus === 'growing') {
        return {
          pulse: true,
          'pulse-delay-1': n === 2,
          'pulse-delay-2': n === 1,
        };
      } else {
        return {
          'fade-out': true,
          'fade-delay-1': n === 2,
          'fade-delay-2': n === 3,
        };
      }
    },
  },
};
</script>

<style>
.skill-badge {
  display: inline-flex;
  align-items: center;
  background-color: rgba(0, 119, 255, 0.1);
  border-radius: 16px;
  padding: 0.5rem 0.8rem;
  margin: 0.3rem;
  font-size: 1.05rem;
  height: 1.8rem; /* Taller height for better legibility */
  color: #e8e6e3;
  transition: all 0.3s ease;
  position: relative;
  letter-spacing: 0.02em;
}

.level-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.4rem;
  height: 14px;
  width: 14px;
}

.pie-chart {
  height: 14px;
  width: 14px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  background: transparent;
  border: 1px solid currentColor;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  box-sizing: border-box; /* Make sure border is included in width/height */
}

/* Level 1: Single slice (33%) */
.skill-badge.level-1 .pie-level-1 {
  background-image: conic-gradient(
    from 240deg,
    transparent 0deg,
    transparent 240deg,
    #0077ff 240deg,
    #0077ff 360deg
  );
  border-color: #0077ff;
}

/* Level 2: Two-thirds filled (66%) */
.skill-badge.level-2 .pie-level-2 {
  background-image: conic-gradient(
    from 270deg,
    transparent 0deg,
    transparent 180deg,
    #0077ff 180deg,
    #0077ff 360deg
  );
  border-color: #0077ff;
}

/* Level 3: Almost full circle with small slice missing (90%) */
.skill-badge.level-3 .pie-level-3 {
  background-image: conic-gradient(
    from 325deg,
    transparent 0deg,
    transparent 70deg,
    #0077ff 70deg,
    #0077ff 360deg
  );
  border-color: #0077ff;
}

/* Level 1 - Basic/Foundational */
.skill-badge.level-1 {
  border: 1px solid #003580; /* Dark blue */
  background-color: rgba(0, 53, 128, 0.15);
}

.skill-badge.level-1:hover {
  background-color: rgba(0, 53, 128, 0.25);
  box-shadow: 0 0 8px rgba(0, 53, 128, 0.3);
  transform: translateY(-2px);
}

/* Level 2 - Proficient/Intermediate */
.skill-badge.level-2 {
  border: 1px solid #0055B0; /* Medium blue */
  background-color: rgba(0, 85, 176, 0.15);
}

.skill-badge.level-2:hover {
  background-color: rgba(0, 85, 176, 0.25);
  box-shadow: 0 0 10px rgba(0, 85, 176, 0.4);
  transform: translateY(-2px);
}

/* Level 3 - Expert/Advanced */
.skill-badge.level-3 {
  border: 1px solid #0077ff; /* Bright blue */
  background-color: rgba(0, 119, 255, 0.15);
}

.skill-badge.level-3:hover {
  background-color: rgba(0, 119, 255, 0.25);
  box-shadow: 0 0 12px rgba(0, 119, 255, 0.5);
  transform: translateY(-2px);
}

.skill-badge.with-focus {
  padding-right: 3rem;
}

.focus-chevrons {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0.8rem;
  height: 100%;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center; /* Ensure horizontal centering */
}

.chevron-container {
  height: 10px;
  width: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chevron {
  height: 100%;
  width: 100%;
  display: block; /* Ensures SVG is properly centered */
  margin: auto; /* Centers the SVG within its container */
  transform: scale(2); /* Make the SVG twice as big */
}

/* Growing skills */
.focus-growing .chevron {
  fill: #00c853; /* Nice emerald green shade */
}

@media (prefers-reduced-motion: no-preference) {
  .pulse {
    animation: pulse 1.5s infinite;
  }

  .pulse-delay-1 {
    animation-delay: 0.5s;
  }

  .pulse-delay-2 {
    animation-delay: 1s;
  }

  @keyframes pulse {
    0% {
      opacity: 0.3;
    }
    50% {
      opacity: 1;
      filter: drop-shadow(0 0 2px #00c853);
    }
    100% {
      opacity: 0.3;
    }
  }
}

/* Fading skills */
.focus-fading .chevron {
  fill: #999999; /* Gray color */
}

@media (prefers-reduced-motion: no-preference) {
  .fade-out {
    animation: fadeOut 3s infinite;
  }

  .fade-delay-1 {
    animation-delay: 0.3s;
  }

  .fade-delay-2 {
    animation-delay: 0.6s;
  }

  @keyframes fadeOut {
    0% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.2;
    }
  }
}

@media print {
  .skill-badge {
    color: inherit;
  }
}
</style>
