# TODO: Unfinished Features Analysis

Generated: 2025-11-23

## Feature Groups

### 1. Portfolio Redesign: Skills & Experience Refactor (~85% complete)
**Branch:** `feat/portfolio-redesign`

This is the most substantial feature, replacing old components with a modern, interactive skills and timeline system.

**Changes:**
- Deleted old components: ExperienceItem.vue, MyExperience.vue, MySkills.vue, MyTimeline.vue, SkillItem.vue
- New components: MySkillsSection.vue, MyExperienceTimeline.vue, SkillBadge.vue, SkillTree.vue
- New store: store/experience.js (comprehensive skill/experience data model with levels, focus states, categories)
- Updated: pages/index.vue to use new components
- Minor updates: MyBio.vue, MyName.vue, MyPhoto.vue, MyTagline.vue, MyConnect.vue

**Status:** Near complete, but has one TODO in tests/visual/skill-tree.spec.js:29 noting "categories aren't expanded in the screenshots"

**What's working:**
- Skill categorization system (Programming, Infrastructure, Architecture, etc.)
- Skill levels (1-3) with visual indicators (pie charts)
- Growing/fading skill indicators with animations
- Interactive skill tree with category expansion
- Timeline with job history and associated skills

---

### 2. Print/Resume Styling (~90% complete)
**Branch:** `feat/print-styles`

Print-optimized CSS for resume generation.

**Changes:**
- pages/index.vue: comprehensive @media print styles
- assets/css/main.css: print styles for basic elements
- Components have individual print adaptations

**Status:** Very complete, functional for resume printing

---

### 3. "Toys" Page Feature (~95% complete)
**Branch:** `feat/toys-page`

A new page to showcase interactive HTML experiments.

**Changes:**
- pages/toys.vue: gallery page with grid layout
- server/api/toys.js: API endpoint that auto-discovers HTML files
- public/toys/: 8 HTML toys (ant-colony, baby-escape, fireworks, sins-2, space-combat, space-exploration, starling-murmuration, youtube-playlist-manager.html.disabled)

**Status:** Nearly complete and functional. Note: one file is `.disabled` (youtube-playlist-manager)

---

## Recommended Completion Order

### Priority 1: Complete Portfolio Redesign (Nearly Done)
**Effort:** Low-Medium | **Impact:** High
- This is your main feature and it's 85% done
- Verify all visual states work correctly
- Test the interactive skill tree thoroughly
- Consider if IconBase.vue needs any updates

### Priority 2: Review Toys Page (Polish)
**Effort:** Low | **Impact:** Medium
- Decide what to do with youtube-playlist-manager.html.disabled
- Either enable it, fix it, or remove it
- Test the /api/toys endpoint
- Verify all toys load correctly

### Priority 3: Validate Print Styles (Quick Test)
**Effort:** Low | **Impact:** Medium
- Print/PDF export the page and verify it looks good
- Check print.spec.js snapshots are accurate
- This is mostly done, just needs validation


---

## Component Dependency Map
```
pages/index.vue
├── MyPhoto
├── MyName
├── MyTagline
├── MyBio
├── MyConnect (uses IconBase)
├── MySkillsSection
│   └── SkillTree (uses SkillBadge)
│       └── SkillBadge (uses IconBase)
└── MyExperienceTimeline
    └── SkillBadge (uses IconBase)

pages/toys.vue
└── server/api/toys.js → public/toys/*.html
```

---

## Quick Command Reference

```bash
# Run visual tests
npm run test:visual

# Update test snapshots
npm run test:visual:update

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
