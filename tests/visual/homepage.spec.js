import { test, expect } from '@playwright/test';

test('homepage visual test', async ({ page }) => {
  await page.goto('/');

  // Take a screenshot and compare with baseline
  await expect(page).toHaveScreenshot('homepage.png', {
    fullPage: true,
  });
});
