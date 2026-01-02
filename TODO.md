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

## Open Pull Requests: Dependency Updates

### PR #334: Update Nuxt to v4 ✅ Tests Passing
**Branch:** `renovate/major-nuxtjs-monorepo` | **Opened:** 2025-07-15
**Changes:** `3.20.2` → `4.2.2` (275 additions, 129 deletions)

This is a **major version upgrade** from Nuxt 3 to Nuxt 4 with significant breaking changes and new features.

**Status:**
- ✅ All CI checks passing
- ✅ Tests passing
- ✅ Security checks passing

**Key Changes in Nuxt 4:**
- New Vite Environment API (opt-in experimental)
- Enhanced error pages in development
- Abort control for data fetching (`useAsyncData`)
- Async data handler extraction (can reduce bundle size by ~39% for static sites)
- Experimental TypeScript plugin support
- New `@nuxt/nitro-server` package (internal refactor)

**What We Need to Do:**
1. **Review breaking changes** - Check the full [Nuxt 4 migration guide](https://nuxt.com/docs/getting-started/upgrade#upgrading-nuxt) for compatibility
2. **Test locally** - Run `npm ci` and test all features:
   - Dev server (`npm run dev`)
   - Build process (`npm run build`)
   - Static generation (`npm run generate`)
   - Preview (`npm run preview`)
3. **Run full test suite** - Unit tests and Playwright visual regression tests
4. **Check for deprecations** - Review any deprecation warnings in console
5. **Verify feature branches** - Since this is a major Nuxt update, test that feature branches (`feat/portfolio-redesign`, `feat/print-styles`, `feat/toys-page`) still work
6. **Update AGENTS.md** - Note Nuxt version change if needed
7. **Merge** - Since CI is passing, this might be ready to merge after local testing

**Estimated Complexity:** Medium-High (major version with breaking changes, but tests are passing)

---

### PR #306: Update Vitest to v4 ❌ Tests Failing
**Branch:** `renovate/major-vitest-monorepo` | **Opened:** 2025-01-16
**Changes:** `3.2.4` → `4.0.16` (1 addition, 1 deletion)

This is a **major version upgrade** from Vitest 3 to Vitest 4 with breaking changes.

**Status:**
- ❌ CI failing (13s)
- ❌ Tests failing (14s)
- ❌ Renovate artifacts failure
- ✅ Security checks passing

**Key Changes in Vitest 4:**
- New test artifact API (experimental)
- OpenTelemetry traces support (experimental)
- File system cache improvements
- Updated browser mode defaults
- Pool options restructured
- Breaking changes in configuration

**What We Need to Do:**
1. **Investigate test failures** - Check failed CI logs with `gh run view <run-id> --log-failed`
2. **Review breaking changes** - Check [Vitest 4 migration guide](https://vitest.dev/guide/migration.html)
3. **Update config** - `vitest.config.js` may need updates for:
   - Pool options (deprecated `poolOptions` → new structure)
   - Browser mode settings
   - Test environment configuration
4. **Fix failing tests** - Address any test failures caused by behavior changes
5. **Update AGENTS.md** - Document any config changes if needed
6. **Test both test suites:**
   - `npm test` (unit/component tests)
   - `npm run test:visual` (Playwright)

**Estimated Complexity:** Medium (tests failing, needs investigation and fixes)

---

### PR #296: Update ESLint to v9 ❌ Tests Failing
**Branch:** `renovate/major-eslint-monorepo` | **Opened:** 2025-01-06
**Changes:** `8.57.1` → `9.39.2` (1 addition, 1 deletion)

This is a **major version upgrade** from ESLint 8 to ESLint 9 with **significant breaking changes** (flat config required).

**Status:**
- ❌ CI failing (16s)
- ❌ Tests failing (10s)
- ❌ Renovate artifacts failure
- ✅ Security checks passing
- ✅ Netlify deploy preview passing

**Key Breaking Changes in ESLint 9:**
- **Flat config is now required** - `.eslintrc.json` format is no longer supported
- Must migrate to `eslint.config.js` (or `.mjs`/`.cjs`)
- Changed default ignore patterns
- Removed formatters (moved to `@eslint/stylistic`)
- Plugin loading changes
- Updated rule defaults

**What We Need to Do:**
1. **Investigate test failures** - Check failed CI logs
2. **Migrate to flat config:**
   - Convert `.eslintrc.json` → `eslint.config.js`
   - Update `package.json` scripts if needed
   - Migrate `@nuxtjs/eslint-config` → compatible flat config
3. **Update lint-staged** - May need config changes in `package.json`
4. **Review custom rules:**
   - Current: semicolons required, always-multiline comma-dangle
   - Ensure these rules still work in ESLint 9
5. **Test linting:**
   - `npm run lint` should work
   - Pre-commit hooks should work
6. **Check Nuxt compatibility** - Ensure Nuxt 3/4 works with ESLint 9
7. **Update AGENTS.md** - Document new ESLint config format

**Estimated Complexity:** High (requires config migration, significant breaking changes)

**Resources:**
- [ESLint v9 Migration Guide](https://eslint.org/docs/latest/use/migrate-to-9.0.0)
- [Flat Config Guide](https://eslint.org/docs/latest/use/configure/configuration-files)

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
