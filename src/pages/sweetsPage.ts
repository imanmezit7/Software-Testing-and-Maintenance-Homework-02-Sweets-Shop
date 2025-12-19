import type { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';

export class SweetsPage {
  readonly page: Page;
  readonly sweetItems: Locator;
  readonly addToBasketButtons: Locator;
  readonly basketCount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sweetItems = page.locator('.sweet-item');
    this.addToBasketButtons = page.locator('.add-to-basket');
    this.basketCount = page.locator('.basket-count');
  }

  async firstSweetVisible() {
    await expect(this.sweetItems.first()).toBeVisible();
  }

  async countSweets() {
    return await this.sweetItems.count();
  }

  async addFirstSweetToBasket() {
    await this.addToBasketButtons.first().click();
  }

  async addButtonDisabled() {
    const disabledButton = this.page.locator('.add-to-basket[disabled]');
    await expect(disabledButton).toBeDisabled();
  }

  async basketTextChanged(initialText: string | null) {
    await expect(this.basketCount).not.toHaveText(initialText ?? '');
  }

  async getBasketText() {
    return await this.basketCount.textContent();
  }
}
