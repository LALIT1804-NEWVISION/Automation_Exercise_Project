import { expect, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";
import * as fs from "fs/promises";
import * as path from "path";
import { RegistrationPage } from "../Pages/registrationPage";

export type GeneratedUser = {
  name: string;
  email: string;
  password: string;
};

type RegistrationData = {
  baseUrl: string;
  accountInfo: {
    password: string;
    day: string;
    month: string;
    year: string;
  };
  addressInfo: {
    firstName: string;
    lastName: string;
    address: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    mobileNumber: string;
  };
  generatedUser?: GeneratedUser;
};

export class RegistrationAction {

  readonly page: Page;
  readonly registrationPage: RegistrationPage;
  private readonly dataPath: string;

  constructor(page: Page) {
    this.page = page;
    this.registrationPage = new RegistrationPage(page);
    this.dataPath = path.resolve(__dirname, "../testdata/registration.json");
  }

  async readData(): Promise<RegistrationData> {
    const raw = await fs.readFile(this.dataPath, "utf-8");
    return JSON.parse(raw);
  }

  async saveUser(user: GeneratedUser): Promise<void> {
    const data = await this.readData();
    data.generatedUser = user;

    await fs.writeFile(this.dataPath,JSON.stringify(data, null, 2),"utf-8");
  }

  generateUser(data: RegistrationData): GeneratedUser {
    const name = faker.person.firstName();
    const email = `test_${Date.now()}_${faker.number.int(1000)}@example.com`;
    return {name,email,password: data.accountInfo.password};
  }

  async openSignup(baseUrl: string) {
    await this.page.goto(baseUrl);
    await this.registrationPage.signupLoginLink.click();
  }

  async fillSignup(name: string, email: string) {
    await this.registrationPage.nameInput.fill(name);
    await this.registrationPage.emailInput.fill(email);
    await this.registrationPage.signupButton.click();
  }

  async fillFullForm(data: RegistrationData) {
    await this.registrationPage.titleMr.check();
    await this.registrationPage.passwordInput.fill(data.accountInfo.password);

    await this.registrationPage.dayDropdown.selectOption(data.accountInfo.day);
    await this.registrationPage.monthDropdown.selectOption(data.accountInfo.month);
    await this.registrationPage.yearDropdown.selectOption(data.accountInfo.year);

    await this.registrationPage.newsletterCheckbox.check();
    await this.registrationPage.offersCheckbox.check();

    await this.registrationPage.firstName.fill(data.addressInfo.firstName);
    await this.registrationPage.lastName.fill(data.addressInfo.lastName);
    await this.registrationPage.address.fill(data.addressInfo.address);
    await this.registrationPage.countryDropdown.selectOption({ label: data.addressInfo.country });
    await this.registrationPage.state.fill(data.addressInfo.state);
    await this.registrationPage.city.fill(data.addressInfo.city);
    await this.registrationPage.zipcode.fill(data.addressInfo.zipcode);
    await this.registrationPage.mobileNumber.fill(data.addressInfo.mobileNumber);

    await this.registrationPage.createAccountBtn.click();
    await expect(this.registrationPage.accountCreatedMsg).toBeVisible();

    await this.registrationPage.continueBtn.click();
  }

  async registerNewUser() {
    const data = await this.readData();
    const user = this.generateUser(data);

    await this.openSignup(data.baseUrl);
    await this.fillSignup(user.name, user.email);
    await this.fillFullForm(data);

    await this.saveUser(user);
    return user;
  }

  async loginWithSavedUser() {
    const data = await this.readData();

    await this.page.goto(data.baseUrl);
    await this.registrationPage.signupLoginLink.click();

    await this.page.locator('[data-qa="login-email"]').fill(data.generatedUser!.email);
    await this.page.locator('[data-qa="login-password"]').fill(data.generatedUser!.password);
    await this.page.locator('[data-qa="login-button"]').click();
  }
}