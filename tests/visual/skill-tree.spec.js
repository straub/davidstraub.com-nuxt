import { test, expect } from '@playwright/test';

test.describe('Skill Tree Visual Tests', () => {
  // Common setup for all tests
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // The actual categories from our implementation
  const categories = [
    'Programming',
    'Infrastructure',
    'Architecture',
    'DevOps',
    'Databases',
    'Processes',
    'Domain Expertise',
    'Leadership',
    'Fun',
  ];

  // Generate a test for each category
  for (const category of categories) {
    test(`${category} category expansion`, async ({ page }) => {
      // Click on the category button to expand it
      await page.click(`button.category-button:has-text("${category}")`);

      // TODO: the categories aren't expanded in the screenshots.

      // Take a screenshot of just the skill tree component
      const screenshotName = `skill-tree-${category.toLowerCase().replace(/\s+/g, '-')}.png`;
      await expect(page.locator('.skill-tree')).toHaveScreenshot(screenshotName);
    });
  }

  // Test print view - just the skill tree component
  test('print view', async ({ page }) => {
    await page.emulateMedia({ media: 'print' });
    await expect(page.locator('.skill-tree')).toHaveScreenshot('skill-tree-print-view.png');
  });
});
