import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {

    readonly page: Page;
    readonly homeLink: Locator;
    readonly loggedUser: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeLink = page.locator('//*[@class="fa fa-home"]/ancestor::a');
        this.loggedUser = page.locator("//a[contains(text(),'Logged in as')]/ancestor-or-self::a");
    }

    async goToHome() {
        await this.homeLink.click();
    }

    async verifyUserLoggedIn() {
        await expect(this.loggedUser).toBeVisible();
    }
}