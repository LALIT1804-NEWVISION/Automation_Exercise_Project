import { Page, Locator } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly loginLink: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly loggedUser: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginLink = page.locator('//*[@class="fa fa-lock"]/parent::a');
        this.emailInput = page.locator("//input[@data-qa='login-email']");
        this.passwordInput = page.locator("//form//input[@data-qa='login-password']");
        this.loginButton = page.locator("//form//button[@data-qa='login-button']");
        this.loggedUser = page.locator("//a[contains(text(),'Logged in as')]/ancestor-or-self::a");
    }

    async clickLoginLink() {
        await this.loginLink.click();
    }

    async enterEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }
}