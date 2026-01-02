import { test, expect } from '@playwright/test';

test('Page in print mode', async ({ page }) => {
  // Navigate to homepage
  await page.goto('/');

  // Emulate print media
  await page.emulateMedia({ media: 'print' });

  // Take a screenshot in print mode
  await expect(page).toHaveScreenshot('homepage-print.png', {
    fullPage: true,
  });
});
