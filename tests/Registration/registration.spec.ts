import { test, expect } from '../../src/Fixtures/fixture';
import RegistrationData from '../../src/Json_data/registration.json';

test.describe('Registration Module - All Test Cases', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://automationexercise.com/');
        await expect(page).toHaveURL(/automationexercise/);
    });

    test('TC01 - Valid Registration', async ({ registrationAction }) => {
        const user = {RegistrationData, email: `test${Date.now()}@gmail.com` };
        await registrationAction.registerUser(user);
    });

    test('TC02 - Existing Email(Already Registered Email)', async ({ page, registrationPage }) => {

        await registrationPage.navigateToSignup();
        await registrationPage.enterSignupDetails(RegistrationData.name, RegistrationData.email);
        const error = page.locator('//p[contains(text(),"Email Address already exist")]');
        await expect(error).toBeVisible();
    });
    test('TC03 - Empty Name', async ({ page, registrationPage }) => {

        await registrationPage.navigateToSignup();
        await registrationPage.enterSignupDetails('',`test${Date.now()}@gmail.com`);
        await expect(page.locator('input[data-qa="signup-name"]')).toHaveValue('');
    });

    test('TC04 - Empty Email', async ({ page, registrationPage }) => {

        await registrationPage.navigateToSignup();
        await registrationPage.enterSignupDetails(RegistrationData.name,'');
        await expect(page.locator('input[data-qa="signup-email"]')).toHaveValue('');
    });

    test('TC05 - Invalid Email', async ({ page, registrationPage }) => {

        await registrationPage.navigateToSignup();
        await registrationPage.enterSignupDetails(RegistrationData.name,'invalid-email');

        await expect(page.locator('input[data-qa="signup-email"]')).toHaveValue('invalid-email');
    });

    test('TC06 - Empty Password', async ({registrationPage }) => {

        const user = {RegistrationData,email: `test${Date.now()}@mail.com`,password: ''};
        await registrationPage.navigateToSignup();
        await registrationPage.enterSignupDetails(RegistrationData.name, user.email);
        await registrationPage.fillAccountInformation(user);
        await expect(registrationPage.passwordInput).toHaveValue('');
    });

    
    test('TC07 - Missing Address Details', async ({ registrationPage }) => {

        const user = {...RegistrationData,email: `test${Date.now()}@mail.com`,firstName: '',lastName: ''};
        await registrationPage.navigateToSignup();
        await registrationPage.enterSignupDetails(user.name, user.email);
        await registrationPage.fillAccountInformation(user);
        await registrationPage.fillAddressDetails(user);
        await registrationPage.submitRegistration();
        await expect(registrationPage.accountCreatedMsg).not.toBeVisible();
    });

    test('TC08 - Newsletter & Offers Checkbox', async ({ registrationPage }) => {

        const user = {...RegistrationData,email: `test${Date.now()}@gmail.com`};

        await registrationPage.navigateToSignup();
        await registrationPage.enterSignupDetails(user.name, user.email);
        await registrationPage.fillAccountInformation(user);

        await expect(registrationPage.newsletterCheckbox).toBeChecked();
        await expect(registrationPage.offersCheckbox).toBeChecked();
    });

    test('TC09 - Invalid Mobile Number', async ({ registrationPage }) => {

        const user = {RegistrationData,email: `test${Date.now()}@gmail.com`,mobile: 'abc123'};
        await registrationPage.navigateToSignup();
        await registrationPage.enterSignupDetails(RegistrationData.name, user.email);
        await registrationPage.fillAccountInformation(user);
        await registrationPage.fillAddressDetails(user);
        await expect(registrationPage.mobileNumber).toHaveValue('abc123');
    });

    test('TC10 - Full Registration Flow', async ({ registrationAction }) => {

        const user = {...RegistrationData,email: `test${Date.now()}@mail.com`};
        await registrationAction.registerUser(user);
    });

    test.afterEach(async () => {
        console.log("Test Completed");
    });

});