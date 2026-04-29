import { test, expect } from '../../src/Fixtures/fixture';

test.describe('Login Module Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://automationexercise.com/');
        await expect(page).toHaveURL(/automationexercise/);
        await expect(page.locator('//*[@class="fa fa-home"]/ancestor::a')).toBeVisible();
    });

    test('TC01 - Valid Login', async ({ loginAction }) => {

        await loginAction.loginToApplication(
            "guptalalit4223@gmail.com",
            "Vision1804@"
        );

    });

    test('TC02 - Invalid Login', async ({ page, loginPage }) => {

        await loginPage.clickLoginLink();
        await loginPage.enterEmail("wrong@gmail.com");
        await loginPage.enterPassword("wrong123");
        await loginPage.clickLoginButton();
        const errorMsg = page.locator('//p[contains(text(),"incorrect")]');
        await expect(errorMsg).toBeVisible();
    });

    test.afterEach(async () => {
        console.log("Test execution completed");
    });

});