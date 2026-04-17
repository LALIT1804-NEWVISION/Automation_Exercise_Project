import { expect } from '@playwright/test';
import { RegistrationPage } from '../Pages/registrationPage';

export class RegistrationAction {

    readonly registrationPage: RegistrationPage;

    constructor(registrationPage: RegistrationPage) {
        this.registrationPage = registrationPage;
    }

    async registerUser(user: any) {        
        await this.registrationPage.navigateToSignup();
        await this.registrationPage.enterSignupDetails(user.name, user.email);
        await this.registrationPage.fillAccountInformation(user);
        await this.registrationPage.fillAddressDetails(user);
        await this.registrationPage.submitRegistration();

        await expect(this.registrationPage.accountCreatedMsg)
            .toHaveText(/account created/i);
    }
}