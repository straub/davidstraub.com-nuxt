# TODO: Unfinished Features Analysis

Generated: 2025-11-23
Updated: 2026-11-22 (ESLint 10 flat config on @straub/eslint-config)

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

## Open Pull Requests: Dependency Updates

Renovate runs weekly (early Monday, minor/patch grouped into one PR); see `renovate.json`.

### Feature branches: rebase onto current main
`feat/portfolio-redesign`, `feat/print-styles` and `feat/toys-page` predate the Nuxt 4 merge. They
merge onto current main without textual conflicts, but need re-testing on Nuxt 4.6.4 after rebasing.

### PR #490: Update Node.js to v26 (on hold)
**Branch:** `renovate/node-26.x` | changes only `.node-version`

CI is green but has not actually run on Node 26: `.github/workflows/ci.yml` hard-codes
`node: [24]` instead of reading `.node-version`, and no Playwright run was triggered.

**What We Need to Do:**
1. Point `ci.yml` at `node-version-file: '.node-version'` (drop the `node` matrix).
2. In the same change, update the "Require Tests" repository ruleset: it requires the check named
   `ci (ubuntu-latest, 24)`, which the matrix change renames. Otherwise every PR stays blocked.
3. Confirm `ci`, `test` (Playwright) and the Netlify preview pass on Node 26, then merge.

### PR #380: Lock file maintenance
Renovate's own lockfile refresh; it will be regenerated on its next scheduled run. When regenerating
the lockfile by hand, do it in a scratch directory without `node_modules` (see the lockfile note in
AGENTS.md), otherwise entries lose their `resolved`/`integrity` fields.

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

