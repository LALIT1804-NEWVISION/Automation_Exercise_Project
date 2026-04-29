import { LoginPage } from '../Pages/2_loginPage';
import { expect } from '@playwright/test';

export class LoginAction {

    readonly loginPage: LoginPage;

    constructor(loginPage: LoginPage) {
        this.loginPage = loginPage;
    }

    async loginToApplication(email: string, password: string) {

        await this.loginPage.clickLoginLink();
        await this.loginPage.enterEmail(email);
        await this.loginPage.enterPassword(password);
        await this.loginPage.clickLoginButton();
        await expect(this.loginPage.loggedUser).toBeVisible();
    }
}