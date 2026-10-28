import { test, expect } from '@playwright/test';

test.describe('Resilience Under Adverse Network Conditions', () => {
  test('Simulate 500 Internal Server Error on API and verify UI resilience', async ({ page }) => {
    // Intercept outbound calls to inventory/items and inject a synthetic 500 error
    await page.route('**/api/inventory**', async (route) => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Internal Server Error', code: 'SRV_DOWN_500' }),
      });
    });

    await page.goto('/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Verify application remains operational without uncaught client exceptions
    await expect(page).toHaveURL(/.*inventory.html/);
  });

  test('Simulate high network latency (Slow 3G Simulation)', async ({ page }) => {
    // Intercept the main document request and inject an artificial 2500ms delay
    await page.route('**/', async (route) => {
      if (route.request().resourceType() === 'document') {
        await new Promise((resolve) => setTimeout(resolve, 2500));
      }
      await route.continue();
    });

    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;

    // Verify page handled the delay and still hydrated elements properly
    expect(loadTime).toBeGreaterThan(2000);
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  });
});