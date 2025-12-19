import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/homePage';
import { SweetsPage } from '../src/pages/sweetsPage';
import { AboutPage } from '../src/pages/aboutPage';
import { BrowsePage } from '../src/pages/browsePage';

test.describe('Sweets Shop Tests (POM)', () => {

  test('TC_01 – Display All Sweets', async ({ page }) => {
    const home = new HomePage(page);
    const sweets = new SweetsPage(page);

    await home.goto();
    await home.navigateToSweets();

    const count = await sweets.countSweets();
    expect(count).toBeGreaterThan(0);
    await sweets.firstSweetVisible();
  });

  test('TC_03 – About Page Navigation', async ({ page }) => {
    const home = new HomePage(page);
    const about = new AboutPage(page);

    await home.goto();
    await home.navigateToAbout();

    await about.urlContainsAbout();
    await about.pageLoaded();
  });

  test('TC_05 – Add to Basket Button Click', async ({ page }) => {
    const home = new HomePage(page);
    const sweets = new SweetsPage(page);

    await home.goto();
    await home.navigateToSweets();

    const initial = await sweets.getBasketText();
    await sweets.addFirstSweetToBasket();
    await sweets.basketTextChanged(initial);
  });

  test('TC_07 – Add to Basket Button Disabled (Negative)', async ({ page }) => {
    const home = new HomePage(page);
    const sweets = new SweetsPage(page);

    await home.goto();
    await home.navigateToSweets();

    await sweets.addButtonDisabled();
  });

  test('TC_10 – Prevent Script Injection via Browse Sweets', async ({ page }) => {
    const browse = new BrowsePage(page);
    await page.goto('/');

    await browse.attemptScriptInjection('<script>alert("XSS")</script>');
    await browse.pageLoadsSafely();
  });

});
