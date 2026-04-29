import { test, expect } from '@playwright/test';

test.describe('Automation Exercise - Visual Testing', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://automationexercise.com/');
        await expect(page).toHaveURL('https://automationexercise.com/');
        await expect(page.locator('//*[@class="fa fa-home"]/ancestor::a')).toBeVisible();
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(3000);
    });


    test('TC01 - Homepage Banner Comparison', async ({ page }) => {
        const banner = page.locator("//section[@id='slider']//div[@class='container']");
        await expect(banner).toBeVisible();
        await expect(banner).toHaveScreenshot('homepage-banner.png');
    });


    test('TC02 - Logo Validation', async ({ page }) => {
        const logo = page.locator('img[alt="Website for automation practice"]');
        await expect(logo).toBeVisible();
        await expect(logo).toHaveScreenshot('website-logo.png');
        
    });

});