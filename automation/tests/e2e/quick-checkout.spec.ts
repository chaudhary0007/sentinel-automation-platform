import { test, expect } from '../../src/fixtures/testBase';

test.describe('Modular Checkout via Custom Fixtures', () => {
  test('Instantly add backpack using pre-authenticated context', async ({ inventoryPage, authenticatedUserPage }) => {
    // The test starts ALREADY logged in without writing a single line of login code
    await inventoryPage.addBackpackToCart();
    const cartBadge = authenticatedUserPage.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');
  });
});