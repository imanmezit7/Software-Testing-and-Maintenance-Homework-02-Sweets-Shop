import type { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
  }

  async navigateToSweets() {
    await this.page.getByRole('link', { name: 'Sweets' }).click();
  }

  async navigateToAbout() {
    await this.page.getByRole('link', { name: 'About' }).click();
  }

  async clickBrowseSweets() {
    await this.page.getByRole('button', { name: 'Browse Sweets' }).click();
  }
}
