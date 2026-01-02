import { test, expect } from '@playwright/test';

test('error page visual test', async ({ page }) => {
  await page.goto('/does-not-exist');

  // Take a screenshot and compare with baseline
  await expect(page).toHaveScreenshot('error.png', {
    fullPage: true,
  });
});
