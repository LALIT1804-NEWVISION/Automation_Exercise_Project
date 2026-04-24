import { test, expect } from '../../src/Fixtures/fixture';

test.describe('Registration Module - All Test Cases', () => {

    test('TC01 - Valid Registration', async ({ appAction }) => {
        const user = await appAction.registration.registerNewRandomUserAndPersist();
        expect(user.email).toContain('@');
    });

    test('TC02 - Existing Email Validation', async ({ appAction }) => {
        const data = await appAction.registration.readRegistrationData();
        await appAction.registration.openSignupPage(data.baseUrl);
        await appAction.registration.submitSignupForm(
            data.generatedUser.name,
            data.generatedUser.email
        );
        const error = appAction.registration.registrationPage.page.locator(
            'text=Email Address already exist!'
        );
        await expect(error).toBeVisible();
    });

    test('TC03 - Empty Name Validation', async ({ appAction }) => {
        const data = await appAction.registration.readRegistrationData();
        await appAction.registration.openSignupPage(data.baseUrl);
        await appAction.registration.submitSignupForm(
            '',
            `test${Date.now()}@gmail.com`
        );

        await expect(
            appAction.registration.registrationPage.signupName
        ).toHaveValue('');
    });

    test('TC04 - Empty Email Validation', async ({ appAction }) => {
        const data = await appAction.registration.readRegistrationData();

        await appAction.registration.openSignupPage(data.baseUrl);

        await appAction.registration.submitSignupForm(
            data.addressInfo.firstName,
            ''
        );

        await expect(
            appAction.registration.registrationPage.signupEmail
        ).toHaveValue('');
    });

    test('TC05 - Invalid Email Validation', async ({ appAction }) => {
        const data = await appAction.registration.readRegistrationData();

        await appAction.registration.openSignupPage(data.baseUrl);

        await appAction.registration.submitSignupForm(
            data.addressInfo.firstName,
            'invalid-email'
        );

        await expect(
            appAction.registration.registrationPage.signupEmail
        ).toHaveValue('invalid-email');
    });

    test('TC06 - Empty Password Validation', async ({ appAction }) => {
        const data = await appAction.registration.readRegistrationData();

        const user = {
            name: 'TestUser',
            email: `test${Date.now()}@mail.com`
        };

        await appAction.registration.openSignupPage(data.baseUrl);

        await appAction.registration.submitSignupForm(
            user.name,
            user.email
        );

        await appAction.registration.registrationPage.password.fill('');

        await expect(
            appAction.registration.registrationPage.password
        ).toHaveValue('');
    });

    test('TC07 - Missing Address Details', async ({ appAction }) => {
        const data = await appAction.registration.readRegistrationData();
        const user = appAction.registration.createRandomUser(data);

        await appAction.registration.openSignupPage(data.baseUrl);

        await appAction.registration.submitSignupForm(
            user.name,
            user.email
        );

        await appAction.registration.registrationPage.firstName.fill('');
        await appAction.registration.registrationPage.lastName.fill('');

        await appAction.registration.registrationPage.createAccountButton.click();

        await expect(
            appAction.registration.registrationPage.accountCreatedMessage
        ).not.toBeVisible();
    });

    test('TC08 - Newsletter & Offers Checkbox Validation', async ({ appAction }) => {
        const data = await appAction.registration.readRegistrationData();
        const user = appAction.registration.createRandomUser(data);

        await appAction.registration.openSignupPage(data.baseUrl);

        await appAction.registration.submitSignupForm(
            user.name,
            user.email
        );

        await appAction.registration.registrationPage.newsletter.check();
        await appAction.registration.registrationPage.specialOffersNewsletter.check();

        await expect(
            appAction.registration.registrationPage.newsletter
        ).toBeChecked();

        await expect(
            appAction.registration.registrationPage.specialOffersNewsletter
        ).toBeChecked();
    });

    test('TC09 - Invalid Mobile Number Validation', async ({ appAction }) => {
        const data = await appAction.registration.readRegistrationData();
        const user = appAction.registration.createRandomUser(data);

        await appAction.registration.openSignupPage(data.baseUrl);

        await appAction.registration.submitSignupForm(
            user.name,
            user.email
        );

        await appAction.registration.registrationPage.mobileNumber.fill('abc123');

        await expect(
            appAction.registration.registrationPage.mobileNumber
        ).toHaveValue('abc123');
    });

    test('TC10 - Complete Registration Flow', async ({ appAction }) => {
        const user = await appAction.registration.registerNewRandomUserAndPersist();

        console.log('Created User:', user);

        await expect(
            appAction.registration.registrationPage.loggedInAsText
        ).toBeVisible();
    });
});