import { test, expect, Locator } from '@playwright/test';
//Text Box / Input Box / Text Field / Input Value / Text Area / Text Area Value
//Checkbox / Check Box / Tick Box / Toggle Button / Switch Button

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
    await page.waitForTimeout(3000);

    //Phone

    const textBox3: Locator = page.locator('#phone');
    const phone = '8770539876';
    const phoneRegex = /^(\+91[-\s]?)?[6-9]\d{9}$/;
    expect(phoneRegex.test(phone), 'Invalid phone: must be a valid Indian phone number').toBeTruthy();
    await textBox3.fill(phone);
    const maxLength3: string | null = await textBox3.getAttribute('maxlength');
    expect(maxLength3).toBe('10');
    await page.waitForTimeout(3000);

    //Address
    const textBox4: Locator = page.locator('#address');
    const address = '207, Danish Nagar Rd,Rajat Bihar Colony, Bagmugaliya,Bhopal';
    await textBox4.fill(address);
    const maxLength4: string | null = await textBox4.getAttribute('maxlength');
    expect(maxLength4).toBe('200');
    await page.waitForTimeout(3000);

});