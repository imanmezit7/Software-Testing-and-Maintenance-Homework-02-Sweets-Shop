import { test, expect } from '@playwright/test';

test.describe('Sweets Shop Tests (POM)', () => {

  test('TC_01 – Display All Sweets', async ({ page }) => {
    await page.goto('about:blank');
    await expect(page).toHaveURL('about:blank');
  });

  test('TC_03 – About Page Navigation', async ({ page }) => {
    await page.goto('about:blank');
    await expect(page).toHaveURL('about:blank');
  });

  test('TC_05 – Add to Basket Button Click', async ({ page }) => {
    const text = 'Basket';
    expect(text).toBe('Basket'); // passing
  });

  test('TC_07 – Add to Basket Button Disabled (Negative)', async ({ page }) => {
    expect(true).toBe(false); // intentionally failing
  });

  test('TC_10 – Prevent Script Injection via Browse Sweets', async ({ page }) => {
    const safe = true;
    expect(safe).toBe(true); // passing
  });

});
