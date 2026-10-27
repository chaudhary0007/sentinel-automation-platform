import { test, expect } from '@playwright/test';
import { InventoryPage } from '../../src/pages/inventoryPage';

test.describe('E2E Resilient Purchasing Pipeline', () => {
  test('User logs in, triggers self-healing locator, and inspects cart state', async ({ page }) => {
    await page.goto('/');

    // Standard login
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/.*inventory.html/);

    // Self-healing execution
    const inventory = new InventoryPage(page);
    await inventory.addBackpackToCart();

    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');
  });
});