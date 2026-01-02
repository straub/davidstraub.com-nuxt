import { test, expect } from '@playwright/test';

test.describe('Responsive design tests', () => {
  // Test mobile viewport
  test('Mobile view', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    await expect(page).toHaveScreenshot('homepage-mobile.png', {
      fullPage: true,
    });
  });

  // Test tablet viewport
  test('Tablet view', async ({ page }) => {
    // Set viewport to tablet size
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');

    await expect(page).toHaveScreenshot('homepage-tablet.png', {
      fullPage: true,
    });
  });

  // Desktop viewport is already covered by the main homepage test
});
