<template>
  <section class="timeline-section">
    <h2>Experience</h2>
    <div class="timeline">
      <div class="timeline-end" />
      <div
        v-for="(job, index) in timeline"
        :key="index"
        class="timeline-item"
      >
        <div class="timeline-dot" />
        <div class="timeline-content">
          <div class="job-header">
            <h3>{{ job.title }}</h3>
            <h4>{{ job.company }}</h4>
            <span class="job-period">{{ job.period }}</span>
          </div>
          <p class="job-description">
            {{ job.description }}
          </p>
          <div class="job-skills">
            <SkillBadge
              v-for="SkillClass in job.skills"
              :key="SkillClass.name"
              :skill="new SkillClass()"
              class="job-skill"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useExperienceStore } from '~/store/experience';

export default {
  setup () {
    const experienceStore = useExperienceStore();

    return {
      timeline: experienceStore.timeline,
      getSkill: experienceStore.getSkill,
    };
  },
};
</script>

<style>
.timeline-section {
  margin: 2.5rem 0 4rem 0;
}

.timeline-section h2 {
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.75rem;
  --minFontSize: 1.2rem;
  --maxFontSize: 2rem;
  /* https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/#for-those-who-dont-mind-that-edge-case */
  --scaler: 0.6000rem + 2.6667vw;

  font-size: clamp(var(--minFontSize), var(--scaler), var(--maxFontSize));
}

.timeline {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 3px;
  background-color: #f70;
  top: 15px; /* Start at first timeline item */
  bottom: 37px; /* Touch the end dot */
  left: 40px;
  margin-left: -1.5px;
}

.timeline-end {
  position: absolute;
  width: 14px;
  height: 14px;
  background-color: #f70;
  border-radius: 50%;
  left: 40px;
  bottom: 30px;
  margin-left: -7px;
  z-index: 1;
}

.timeline-item {
  position: relative;
  width: calc(100% - 80px);
  padding: 5px 10px 5px 50px;
  left: 80px;
  box-sizing: border-box;
  margin-bottom: 30px;
}

.timeline-dot {
  position: absolute;
  width: 14px;
  height: 14px;
  left: -47px;
  top: 15px; /* Position dot at top of content */
  background-color: #f70;
  border-radius: 50%;
  z-index: 1;
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-dot {
  background-color: #e8e6e3;
  box-shadow:
    0 0 0 3px hsl(204, 33%, 80%),
    0 0 0 6px hsl(204, 66%, 65%),
    0 0 0 9px hsl(204, 100%, 50%);
  transform: scale(1.2);
}

.timeline-content {
  padding: 1rem 1.25rem;
  position: relative;
  transition: all 0.3s ease;
  margin-top: 0;
}

.timeline-content:hover {
  transform: translateY(-3px);
}

.job-header {
  margin-bottom: 0.8rem;
}

.job-header h3 {
  margin: 0 0 0.4rem 0;
  font-size: 1.4rem;
  font-weight: 600;
}

.job-header h4 {
  color: #f70;
  margin: 0 0 0.4rem 0;
  font-size: 1.2rem;
  font-weight: normal;
}

.job-period {
  font-size: 1rem;
  opacity: 0.9;
  display: block;
  margin-top: 0.2rem;
}

.job-description {
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
  line-height: 1.5;
}

.job-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

/* For mobile screens */
@media screen and (max-width: 768px) {
  .timeline::after {
    left: 20px;
  }

  .timeline-item {
    width: calc(100% - 30px);
    padding-left: 40px;
    padding-right: 5px;
    left: 30px;
    margin-bottom: 25px;
  }

  .timeline-dot {
    left: -17px;
  }

  .timeline-end {
    left: 20px;
  }

  .job-header h3 {
    font-size: 1.25rem;
  }

  .job-header h4 {
    font-size: 1.1rem;
  }

  .job-description {
    font-size: 1rem;
  }

  .timeline-content {
    padding: 0.8rem 1rem;
  }
}

/* TODO */
@media print {
  .timeline-section h2 {
    text-align: left;
  }
  .timeline::after {
    display: none;
  }
  .timeline-dot {
    display: none;
  }
  .timeline-end {
    display: none;
  }
  .timeline-item {
    width: 100%;
    padding-left: 0;
    left: 0;
    margin-bottom: 0;
  }
}
</style>
