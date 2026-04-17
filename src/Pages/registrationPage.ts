import { Page, Locator } from '@playwright/test';

export class RegistrationPage {

    readonly page: Page;
    readonly signupLoginLink: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly signupButton: Locator;
    readonly titleMr: Locator;
    readonly passwordInput: Locator;
    readonly dayDropdown: Locator;
    readonly monthDropdown: Locator;
    readonly yearDropdown: Locator;
    readonly newsletterCheckbox: Locator;
    readonly offersCheckbox: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly address: Locator;
    readonly state: Locator;
    readonly city: Locator;
    readonly zipcode: Locator;
    readonly mobileNumber: Locator;
    readonly createAccountBtn: Locator;
    readonly accountCreatedMsg: Locator;

    constructor(page: Page) {
        this.page = page;

        this.signupLoginLink = page.locator('//*[@class="fa fa-lock"]/parent::a');
        this.nameInput = page.locator('input[data-qa="signup-name"]');
        this.emailInput = page.locator('input[data-qa="signup-email"]');
        this.signupButton = page.locator('button[data-qa="signup-button"]');
        this.titleMr = page.locator('#id_gender1');
        this.passwordInput = page.locator('input[data-qa="password"]');
        this.dayDropdown = page.locator('#days');
        this.monthDropdown = page.locator('#months');
        this.yearDropdown = page.locator('#years');
        this.newsletterCheckbox = page.locator('#newsletter');
        this.offersCheckbox = page.locator('#optin');
        this.firstName = page.locator('input[data-qa="first_name"]');
        this.lastName = page.locator('input[data-qa="last_name"]');
        this.address = page.locator('input[data-qa="address"]');
        this.state = page.locator('input[data-qa="state"]');
        this.city = page.locator('input[data-qa="city"]');
        this.zipcode = page.locator('input[data-qa="zipcode"]');
        this.mobileNumber = page.locator('input[data-qa="mobile_number"]');
        this.createAccountBtn = page.locator('button[data-qa="create-account"]');
        this.accountCreatedMsg = page.locator('h2[data-qa="account-created"]');
    }

    async navigateToSignup() {
        await this.signupLoginLink.click();
    }

    async enterSignupDetails(name: string, email: string) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.signupButton.click();
    }

    async fillAccountInformation(user: any) {
        await this.titleMr.check();
        await this.nameInput.fill(user.name);
        await this.emailInput.fill(user.email);
        await this.passwordInput.fill(user.password);
        await this.dayDropdown.selectOption(user.day);
        await this.monthDropdown.selectOption(user.month);
        await this.yearDropdown.selectOption(user.year);
        await this.newsletterCheckbox.check();
        await this.offersCheckbox.check();
    }

    async fillAddressDetails(user: any) {
        await this.firstName.fill(user.firstName);
        await this.lastName.fill(user.lastName);
        await this.address.fill(user.address);
        await this.state.fill(user.state);
        await this.city.fill(user.city);
        await this.zipcode.fill(user.zipcode);
        await this.mobileNumber.fill(user.mobile);
    }

    async submitRegistration() {
        await this.createAccountBtn.click();
    }
}