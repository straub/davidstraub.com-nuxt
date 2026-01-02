# AGENTS.md

This file provides guidance to AI coding assistants when working with code in this repository.

**IMPORTANT**: When making significant architectural changes, adding new testing infrastructure, changing build/deployment processes, or updating the feature branch strategy, update both **AGENTS.md** and **TODO.md** to reflect the current state of the codebase.

## Project Overview

Personal portfolio/resume website built with **Nuxt 3.20.2** (Vue 3.5.13), deployed as a **static site** to Netlify. The main branch contains a stable, minimal portfolio. Multiple long-lived feature branches contain nearly-complete features that are being polished before merge.

## Development Commands

```bash
# Development
npm run dev              # Dev server at 0.0.0.0:3000
npm run build            # Build for production
npm run preview          # Preview built site locally
npm run generate         # Generate static site to ./dist (used by Netlify)

# Testing
npm test                 # Vitest unit/component tests
npm run test:visual      # Playwright visual regression tests (both browsers)
npm run test:visual:update  # Update Playwright baseline snapshots

# Code Quality
npm run lint             # ESLint (enforces semicolons, always-multiline comma-dangle)

# Dependency Management
npm ci                   # Clean install from lockfile (preferred for consistency)

# CI/PR Checks
gh pr checks <PR#>       # View all CI check statuses for a PR
gh run view <run-id> --log-failed  # View failed CI logs
gh pr view <PR#>         # View PR details including check status
```

## Node Version Requirements

- **Required**: Node.js 20.x LTS (see `.node-version`)
- **Note**: Node 24.x is currently incompatible with the Nuxt test environment setup
- **Switching versions**: Use `nvm use` or `nvm install` to switch Node versions

## Architecture

### Static Site Generation
- Target: `static` (pre-rendered HTML)
- No server-side rendering or API routes in production
- Netlify serves `dist/` folder after running `npm run generate`
- Custom error page: `/error.vue`

### Component Organization
Single-page application with modular components:
- `pages/index.vue` - Main homepage with schema.org/Person microdata
- `components/My*.vue` - Portfolio sections (Photo, Name, Bio, Connect, etc.)
- `components/IconBase.vue` - Reusable SVG icon wrapper using @mdi/js icons
- **Feature branches** contain unreleased components (see TODO.md)

### Styling Approach
- **Dark theme first** - Dark background (#181a1b), light text (#e8e6e3), orange accent (#f70)
- **Responsive without media queries** - CSS Grid + `clamp()` for fluid typography
- **Print optimization** - Extensive `@media print` styles in components
- **Global styles** - `assets/css/main.css` with normalize.css base

### State Management
- **No Vuex/Pinia** - Simple component composition without centralized state
- **Feature branches** may introduce `store/experience.js` for skills/timeline data

## Testing Architecture

### Vitest (Unit/Component Tests)
- Config: `vitest.config.js`
- Environment: `nuxt` (Nuxt-aware test environment)
- Excludes Playwright tests: `tests/visual/**`
- Example: `components/MyName.spec.js` - Basic mount and render tests
- **Pre-commit hook**: Runs unit tests before every commit

### Playwright (Visual Regression)
- Config: `playwright.config.js`
- Test directory: `tests/visual/`
- **Browsers**: Chromium (with `--disable-gpu` for local environment), Firefox
- **Tolerance**: 2% pixel difference (accommodates font rendering variations between environments)
- **Test types**:
  - Full-page screenshots (`homepage.spec.js`, `error.spec.js`)
  - Responsive breakpoints: mobile (375×667), tablet (768×1024)
- **CI Optimizations**:
  - Retries: 2 in CI, 0 locally
  - Workers: 1 in CI (sequential), unlimited locally
  - Automatic server startup (builds + previews before testing)
- **Artifact uploads**: Both HTML report and test-results with named screenshots

**Important**: When updating snapshots locally, the `--disable-gpu` flag prevents Chromium from crashing during screenshot capture. CI doesn't need this flag.

## Feature Branch Strategy

**Main branch** = Stable, deployed portfolio site
**Long-lived feature branches** = Nearly-complete features being polished

Check **TODO.md** for:
- Current feature branch status and completion percentages
- Component dependency maps for feature branches
- Recommended completion order

**Key feature branches**:
- `feat/portfolio-redesign` (~85% complete) - Skills/experience redesign with SkillTree, SkillBadge components
- `feat/print-styles` (~90% complete) - Resume printing optimizations
- `feat/toys-page` (~95% complete) - Interactive HTML experiments gallery

When working on features, check if they exist on a branch first. Components commented out in main may be active on feature branches.

**When merging feature branches**: Update TODO.md to remove completed features and update dependency maps.

**When updating Node versions**:
- Update `.node-version` as the single source of truth
- All GitHub Actions workflows read from `.node-version` using `node-version-file: '.node-version'`
- Test locally with `nvm use $(cat .node-version)` before pushing
- After pushing, check all workflows pass with `gh pr checks <PR#>`

**When updating dependencies** (Nuxt, npm packages):
- Create a new branch with `chore/` prefix (e.g., `chore/update-nuxt-node`)
- Update versions incrementally to identify compatibility issues
- Use `npm ci` for clean installs (preserves lockfile integrity)
- Run both unit tests (`npm test`) and visual tests (`npm run test:visual`)
- Check CI status with `gh pr checks <PR#>` after pushing
- View failed CI logs with `gh run view <run-id> --log-failed`
- Update AGENTS.md if architecture or requirements change

**Resolving package-lock.json merge conflicts**:
- Ensure you're using the correct Node version (see `.node-version`)
- Run `npm install --package-lock-only` to regenerate based on merged `package.json`
- **Never manually edit** package-lock.json - always regenerate it
- Stage the regenerated lockfile and complete the merge/rebase

## Code Conventions

### Commits & Hooks
- **Commitlint**: Enforces conventional commits (feat:, fix:, chore:, etc.)
- **Husky pre-commit**: Runs `npm test` (unit tests only, not Playwright)
- **Lint-staged**: ESLint on staged `.js` and `.vue` files

### ESLint Rules
- Semicolons required
- Always-multiline comma-dangle
- Based on `@nuxtjs/eslint-config`

### Component Patterns
- **External links**: Use `rel="external" target="_blank"`
- **Icons**: Use `IconBase` wrapper with `@mdi/js` icon paths
- **Microdata**: Homepage uses schema.org/Person for SEO

### Import Aliases
- `~/*` and `@/*` → project root
- Example: `@/components/MyName.vue`

## Deployment

- **Platform**: Netlify (see badge in README.md)
- **Build command**: `npm run generate`
- **Publish directory**: `dist/`
- **Node version**: 20.x (see `.node-version`)

## Key Files

- `nuxt.config.js` - Nuxt configuration, plugins, fonts, static target
- `playwright.config.js` - Visual testing with GPU workarounds for local dev
- `vitest.config.js` - Unit test configuration excluding Playwright tests
- `TODO.md` - Feature branch roadmap and component dependency maps
- `.eslintrc.json` - ESLint rules (semicolons, comma-dangle)
- `commitlint.config.js` - Conventional commit enforcement
