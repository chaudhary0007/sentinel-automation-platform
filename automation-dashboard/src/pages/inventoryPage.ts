import { Page } from '@playwright/test';
import { resolveElement, ResilientSelector } from '../core/resilientEngine';

export class InventoryPage {
  constructor(private page: Page) {}

  private addToCartBtn: ResilientSelector = {
    name: 'Add to Cart Backpack Button',
    primary: '[data-test="add-to-cart-sauce-labs-backpack-MUTATED"]', // Deliberately mutated to demonstrate healing
    fallbacks: [
      '#add-to-cart-sauce-labs-backpack',
      'button:has-text("Add to cart")',
      '.btn_inventory'
    ]
  };

  async navigate() {
    await this.page.goto('/inventory.html');
  }

  async addBackpackToCart() {
    const btn = await resolveElement(this.page, this.addToCartBtn);
    await btn.click();
  }
}