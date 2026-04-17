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
    readonly countryDropdown: Locator;
    readonly state: Locator;
    readonly city: Locator;
    readonly zipcode: Locator;
    readonly mobileNumber: Locator;

    readonly createAccountBtn: Locator;
    readonly accountCreatedMsg: Locator;
    readonly continueBtn: Locator;

    constructor(page: Page) {
        this.page = page;

        this.signupLoginLink = page.locator('a[href="/login"]');
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
        this.countryDropdown = page.locator('select[data-qa="country"]');
        this.state = page.locator('input[data-qa="state"]');
        this.city = page.locator('input[data-qa="city"]');
        this.zipcode = page.locator('input[data-qa="zipcode"]');
        this.mobileNumber = page.locator('input[data-qa="mobile_number"]');

        this.createAccountBtn = page.locator('button[data-qa="create-account"]');
        this.accountCreatedMsg = page.locator('h2[data-qa="account-created"]');
        this.continueBtn = page.locator('a[data-qa="continue-button"]');
    }
}