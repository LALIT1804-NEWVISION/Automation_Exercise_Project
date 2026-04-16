import { RegistrationPage } from '../../src/Pages/registrationPage';
import { expect } from '@playwright/test';

export class RegistrationAction {

    readonly registrationPage: RegistrationPage;

    constructor(registrationPage: RegistrationPage) {
        this.registrationPage = registrationPage;
    }

    async registerUser(user: any) {

        await this.registrationPage.navigateToSignup();
        await this.registrationPage.enterSignupDetails(user.name, user.email);
        await this.registrationPage.fillRegistrationForm(user);
        await this.registrationPage.submitRegistration();
        await expect(this.registrationPage.accountCreatedMsg).toBeVisible();
    }
}