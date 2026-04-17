import { test, expect } from '../../src/Fixtures/fixture';
import RegistrationData from '../../src/Json_data/registration.json';

test.describe('Registration Module - All Test Cases', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(RegistrationData.baseUrl);
        await expect(page).toHaveURL(/automationexercise/);
    });

    test('TC01 - Valid Registration', async ({ registrationAction }) => {
        const user = await registrationAction.registerNewUser();
        expect(user.email).toContain('@');
    });

    test('TC02 - Existing Email', async ({ registrationAction }) => {
        const data = await registrationAction.readData();

        await registrationAction.openSignup(data.baseUrl);
        await registrationAction.fillSignup(
            data.generatedUser?.name || "Test",
            data.generatedUser!.email
        );

        const error = registrationAction.page.locator('text=Email Address already exist');
        await expect(error).toBeVisible();
    });

    test('TC03 - Empty Name', async ({ registrationAction }) => {
        const data = await registrationAction.readData();

        await registrationAction.openSignup(data.baseUrl);
        await registrationAction.fillSignup('', `test${Date.now()}@gmail.com`);

        await expect(registrationAction.registrationPage.nameInput).toHaveValue('');
    });

    test('TC04 - Empty Email', async ({ registrationAction }) => {
        const data = await registrationAction.readData();

        await registrationAction.openSignup(data.baseUrl);
        await registrationAction.fillSignup(data.addressInfo.firstName, '');

        await expect(registrationAction.registrationPage.emailInput).toHaveValue('');
    });

    test('TC05 - Invalid Email', async ({ registrationAction }) => {
        const data = await registrationAction.readData();

        await registrationAction.openSignup(data.baseUrl);
        await registrationAction.fillSignup(data.addressInfo.firstName, 'invalid-email');

        await expect(registrationAction.registrationPage.emailInput).toHaveValue('invalid-email');
    });

    test('TC06 - Empty Password', async ({ registrationAction }) => {
        const data = await registrationAction.readData();

        const user = {
            name: "Test",
            email: `test${Date.now()}@mail.com`
        };

        await registrationAction.openSignup(data.baseUrl);
        await registrationAction.fillSignup(user.name, user.email);

        await registrationAction.registrationPage.passwordInput.fill('');
        await expect(registrationAction.registrationPage.passwordInput).toHaveValue('');
    });

    test('TC07 - Missing Address Details', async ({ registrationAction }) => {
        const data = await registrationAction.readData();
        const user = registrationAction.generateUser(data);

        await registrationAction.openSignup(data.baseUrl);
        await registrationAction.fillSignup(user.name, user.email);

        await registrationAction.registrationPage.firstName.fill('');
        await registrationAction.registrationPage.lastName.fill('');

        await registrationAction.registrationPage.createAccountBtn.click();

        await expect(registrationAction.registrationPage.accountCreatedMsg).not.toBeVisible();
    });

    test('TC08 - Newsletter & Offers Checkbox', async ({ registrationAction }) => {
        const data = await registrationAction.readData();
        const user = registrationAction.generateUser(data);

        await registrationAction.openSignup(data.baseUrl);
        await registrationAction.fillSignup(user.name, user.email);

        await registrationAction.registrationPage.newsletterCheckbox.check();
        await registrationAction.registrationPage.offersCheckbox.check();

        await expect(registrationAction.registrationPage.newsletterCheckbox).toBeChecked();
        await expect(registrationAction.registrationPage.offersCheckbox).toBeChecked();
    });

    test('TC09 - Invalid Mobile Number', async ({ registrationAction }) => {
        const data = await registrationAction.readData();
        const user = registrationAction.generateUser(data);

        await registrationAction.openSignup(data.baseUrl);
        await registrationAction.fillSignup(user.name, user.email);

        await registrationAction.registrationPage.mobileNumber.fill('abc123');

        await expect(registrationAction.registrationPage.mobileNumber).toHaveValue('abc123');
    });

    test('TC10 - Full Registration Flow', async ({ registrationAction }) => {
        const user = await registrationAction.registerNewUser();
        console.log("Created User:", user);
    });

    test.afterEach(async () => {
        console.log("Test Completed");
    });

});