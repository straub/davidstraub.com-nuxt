# Visual Testing with Playwright

This directory contains visual tests using Playwright to detect visual regressions on the website.

## Commands

- `npm run test:visual` - Run visual tests against baseline screenshots
- `npm run test:visual:update` - Update baseline screenshots (use when intentional visual changes are made)

## How It Works

1. When tests run for the first time, baseline screenshots are created
2. Subsequent test runs compare new screenshots against these baselines
3. Tests fail if visual differences exceed the threshold defined in tests

## CI/CD Integration

Visual tests are automatically run in CI for all PRs. If tests fail due to visual changes:

1. Review the changes in the Playwright report
2. If changes are expected, approve them by updating the baselines locally and committing them
3. If changes are unexpected, fix the issues before merging

## Adding New Visual Tests

To add a new visual test:

1. Create a new test file in the `tests/visual` directory
2. Use the `toHaveScreenshot()` method to capture and compare screenshots
3. Run `npm run test:visual:update` to generate the baseline for your new test