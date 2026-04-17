import { test as base } from '@playwright/test';
import { RegistrationPage } from '../Pages/registrationPage';
import { RegistrationAction } from '../Actions/registrationAction';

type MyFixtures = {
    registrationPage: RegistrationPage;
    registrationAction: RegistrationAction;
};

export const test = base.extend<MyFixtures>({

    registrationPage: async ({ page }, use) => {
        const regPage = new RegistrationPage(page);
        await use(regPage);
    },

    registrationAction: async ({ registrationPage }, use) => {
        const regAction = new RegistrationAction(registrationPage);
        await use(regAction);
    }

});

export { expect } from '@playwright/test';