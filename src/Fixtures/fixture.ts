import { test as base } from '@playwright/test';
import { LoginPage } from '../../src/Pages/loginPage';
import { LoginAction } from '../../src/Actions/loginAction';

type MyFixtures = {
    loginPage: LoginPage;
    loginAction: LoginAction;
};

export const test = base.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    loginAction: async ({ page, loginPage }, use) => {
        const loginAction = new LoginAction(loginPage);
        await use(loginAction);
    }

});

export { expect } from '@playwright/test';