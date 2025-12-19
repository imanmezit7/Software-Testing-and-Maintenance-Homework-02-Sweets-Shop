import type { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';

export class BrowsePage {
  readonly page: Page;
  readonly inputField: Locator;
  readonly browseButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputField = page.locator('#sweet-name'); // example input for test
    this.browseButton = page.getByRole('button', { name: 'Browse Sweets' });
  }

  async attemptScriptInjection(script: string) {
    await this.inputField.fill(script);
    await this.browseButton.click();
  }

  async pageLoadsSafely() {
    await expect(this.page.locator('.sweet-item')).toBeVisible();
  }
}
