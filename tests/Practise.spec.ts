import { test, expect, Locator } from '@playwright/test';
//Text Box / Input Box / Text Field / Input Value / Text Area / Text Area Value
//Checkbox / Check Box / Tick Box / Toggle Button / Switch Button

test.describe('Practise Tests', () => {

test('Handling HTML elements', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const textBox1: Locator = page.locator('#name');
    await expect(textBox1).toBeVisible();
    await expect(textBox1).toBeEnabled();

    const maxLength: string | null = await textBox1.getAttribute('maxlength');
    expect(maxLength).toBe('15');

    await textBox1.fill('Lalit');
    console.log('Text box value: ' + await textBox1.inputValue());
    console.log('Text box value: ' + await textBox1.textContent());
    const textBoxValue: string = await textBox1.inputValue();
    console.log('Text box in first Box: ' + textBoxValue);
    expect(textBoxValue).toBe('Lalit');

    //Email
    const textBox2: Locator = page.locator('#email');
    const email = 'lalit@example.com';
    const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;
    expect(emailRegex.test(email), 'Invalid email: must contain @ and end with .com').toBeTruthy();
    await textBox2.fill(email);
    const maxLength2: string | null = await textBox2.getAttribute('maxlength');
    expect(maxLength2).toBe('25');

    //Phone

    const textBox3: Locator = page.locator('#phone');
    const phone = '8770539876';
    const phoneRegex = /^(\+91[-\s]?)?[6-9]\d{9}$/;
    expect(phoneRegex.test(phone), 'Invalid phone: must be a valid Indian phone number').toBeTruthy();
    await textBox3.fill(phone);
    const maxLength3: string | null = await textBox3.getAttribute('maxlength');
    expect(maxLength3).toBe('10');

    //Address
    const textBox4: Locator = page.locator('//label[normalize-space()="Address:"]');
    const address = '207, Danish Nagar Rd,Rajat Bihar Colony, Bagmugaliya,Bhopal';
    await textBox4.fill(address);
    await page.waitForTimeout(3000);
});

test('Radio Button Actions', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    const male_radio_button: Locator = page.locator('#male');
    await expect(male_radio_button).toBeVisible();
    await expect(male_radio_button).toBeEnabled();
    await male_radio_button.check();
    await expect(male_radio_button).toBeChecked();
    expect(await male_radio_button.isChecked()).toBe(true);
    expect(await male_radio_button.isChecked()).toBeTruthy();

});

test('CheckBox Actions', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    const Checkbox: Locator = page.locator('#male');
    await expect(Checkbox).toBeVisible();
    await expect(Checkbox).toBeEnabled();
    await Checkbox.check();
    await expect(Checkbox).toBeChecked();
    expect(await Checkbox.isChecked()).toBe(true);
    expect(await Checkbox.isChecked()).toBeTruthy();

});

});