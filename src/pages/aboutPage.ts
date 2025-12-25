import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class AboutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async pageLoaded() {
    await expect(this.page.locator('h1')).toBeVisible();
  }

  async urlContainsAbout() {
    await expect(this.page).toHaveURL(/about/);
  }
}
