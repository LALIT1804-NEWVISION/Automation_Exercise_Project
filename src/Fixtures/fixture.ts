import { test as base, expect } from "@playwright/test";
import registrationData from "../../src/Json_data/registration.json";
import { RegistrationAction } from "../../src/Actions/registrationAction";
import { ProductPage } from "../../src/Pages/productPage";

type AppActions = {
    registration: RegistrationAction;
};

type Fixtures = {
    gotoBaseUrl: void;
    appAction: AppActions;
};

export const test = base.extend<Fixtures>({
    gotoBaseUrl: [
        async ({ page }, use) => {
            await page.goto(registrationData.baseUrl);
            await use();
        },
        { auto: true }
    ],

    appAction: async ({ page }, use) => {
        const appAction: AppActions = {
            registration: new RegistrationAction(page),
        };

        await use(appAction);
    },

});

export { expect };