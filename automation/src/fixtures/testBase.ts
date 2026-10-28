import { test as base, Page } from '@playwright/test';
import { InventoryPage } from '../pages/inventoryPage';

type CustomFixtures = {
  authenticatedUserPage: Page;
  inventoryPage: InventoryPage;
};

export const test = base.extend<CustomFixtures>({
  // Automatic fixture: launches browser, logs in once, and provides ready-to-test page
  authenticatedUserPage: async ({ page }, use) => {
    await page.goto('/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.waitForURL(/.*inventory.html/);

    // Pass the logged-in page context to the test
    await use(page);

    // Teardown: clear storage after test completion
    await page.evaluate(() => localStorage.clear());
  },

  inventoryPage: async ({ authenticatedUserPage }, use) => {
    const inventory = new InventoryPage(authenticatedUserPage);
    await use(inventory);
  },
});

export { expect } from '@playwright/test';