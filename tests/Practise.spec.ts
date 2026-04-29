import { test, expect, Locator } from '@playwright/test';

//Text Box / Input Box / Text Field / Input Value / Text Area / Text Area Value
//Checkbox / Check Box / Tick Box / Toggle Button / Switch Button

// test.describe('Practise Tests', () => {

//     test.beforeEach(async ({ page }) => {
//         await page.goto('https://testautomationpractice.blogspot.com/');
//     });
//========================================================= Session-6 =========================================================
test('Handling HTML elements', async ({ page }) => {

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

    // Email
    const textBox2: Locator = page.locator('#email');
    const email = 'lalit@example.com';
    const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;
    expect(emailRegex.test(email), 'Invalid email: must contain @ and end with .com').toBeTruthy();
    await textBox2.fill(email);
    const maxLength2: string | null = await textBox2.getAttribute('maxlength');
    expect(maxLength2).toBe('25');

    // Phone
    const textBox3: Locator = page.locator('#phone');
    const phone = '8770539876';
    const phoneRegex = /^(\+91[-\s]?)?[6-9]\d{9}$/;
    expect(phoneRegex.test(phone), 'Invalid phone: must be a valid Indian phone number').toBeTruthy();
    await textBox3.fill(phone);
    const maxLength3: string | null = await textBox3.getAttribute('maxlength');
    expect(maxLength3).toBe('10');

    // Address
    const textBox4: Locator = page.locator('#textarea');
    const address = '207, Danish Nagar Rd,Rajat Bihar Colony, Bagmugaliya,Bhopal';
    await expect(textBox4).toBeVisible();
    await expect(textBox4).toBeEnabled();
    await textBox4.fill(address);
    const addressValue: string = await textBox4.inputValue();
    expect(addressValue).toBe(address);
});

test('Radio Button Actions', async ({ page }) => {

    const male_radio_button: Locator = page.locator('#male');
    await expect(male_radio_button).toBeVisible();
    await expect(male_radio_button).toBeEnabled();
    await male_radio_button.check();
    await expect(male_radio_button).toBeChecked();
    expect(await male_radio_button.isChecked()).toBe(true);
    expect(await male_radio_button.isChecked()).toBeTruthy();
});

test('CheckBox Actions', async ({ page }) => {

    // Select specific checkbox using getByLabel and assert

    const SundayCheckbox: Locator = page.getByLabel('Sunday');
    await expect(SundayCheckbox).toBeVisible();
    await expect(SundayCheckbox).toBeEnabled();
    await SundayCheckbox.check();
    await expect(SundayCheckbox).toBeChecked();
    expect(await SundayCheckbox.isChecked()).toBe(true);
    expect(await SundayCheckbox.isChecked()).toBeTruthy();

    //Select all checkboxes and assert each is checked and using for each loop
    const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const checkboxes: Locator[] = days.map(index => page.getByLabel(index));
    expect(checkboxes.length).toBe(7);
    for (const checkbox of checkboxes) {
        await expect(checkbox).toBeVisible();
        await expect(checkbox).toBeEnabled();
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }

    //Select all checkboxes and assert each is checked and using for loop
    // const allCheckboxes: Locator = page.locator('//div[@class="form-check form-check-inline"]//input[@type="checkbox"]');
    // const count = await allCheckboxes.count();

    // for (let i = 0; i < count; i++) {
    //     const checkbox = allCheckboxes.nth(i);

    //     await expect(checkbox).toBeVisible();
    //     await expect(checkbox).toBeEnabled();

    //     await checkbox.check();
    //     await expect(checkbox).toBeChecked();
    // }

    // Uncheck last 3 checkboxes and assert each is unchecked
    for (const checkbox of checkboxes.slice(-3)) {
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
    }

    // for (let i = count - 3; i < count; i++) {
    //     const checkbox = allCheckboxes.nth(i);

    //     await checkbox.uncheck();
    //     await expect(checkbox).not.toBeChecked();
    // }

    // Toggle checkboxes: if checked, uncheck it; if unchecked, check it
    for (const checkbox of checkboxes) {

        // onlyone if checked
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();

        // onlyone if not checked
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }

    // Randomly select and Unselect 3 checkboxes
    // select checkboxes by index (1,3,5) and assert

    const Indexes: number[] = [1, 3, 5];
    for (const i of Indexes) {
        await checkboxes[i].check();
        await expect(checkboxes[i]).toBeChecked();
    }

    for (const i of Indexes) {
        await checkboxes[i].uncheck();
        await expect(checkboxes[i]).not.toBeChecked();
    }

    // select the checkbox based on the label text (e.g., "Monday") and assert it is checked

    const weekday: string = 'Monday';

    for (const label of days) {
        if (label.toLowerCase() === weekday.toLowerCase()) {
            const checkbox: Locator = page.getByLabel(label);
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }
    }

    // await page.waitForTimeout(5000);

});

//========================================================= Session-7 =========================================================

test('Single Select option from dropdown', async ({ page }) => {

    // Select option from drop down and assert the selected option

    // await page.locator('#country').selectOption('India');   // visible text
    // await page.locator('#country').selectOption({ value: 'uk' });  // By using value attribute
    // await page.locator('#country').selectOption({ label: 'India' });   // By using Label
    // await page.locator('#country').selectOption({ index: 3 });  //by using Index

    const countryDropdown: Locator = page.locator('#country');
    await countryDropdown.scrollIntoViewIfNeeded();
    await countryDropdown.selectOption('India');   // visible text
    await page.waitForTimeout(1000);
    await countryDropdown.selectOption({ value: 'uk' });  // By using value attribute
    await page.waitForTimeout(1000);
    await countryDropdown.selectOption({ label: 'India' });   // By using Label
    await page.waitForTimeout(1000);
    await countryDropdown.selectOption({ index: 3 });  //by using Index

    // check number of options in dropdown(count) and assert

    const countryOptions: Locator = page.locator("//select[@id='country']/option");
    const countryOptionCount: number = await countryOptions.count();
    expect(countryOptionCount).toBe(10);
    await expect(countryOptions).toHaveCount(10);

    // Check option is present in dropdown or not and assert

    const optionText: string[] = (await countryOptions.allTextContents()).map(text => text.trim());
    expect(optionText).toContain('India');

    //Printing all options in dropdown 

    for (const option of optionText) {
        console.log(option);
    }
    await page.waitForTimeout(5000);
});

test('Multi Select option from dropdown', async ({ page }) => {
    const MulticountryDropdown: Locator = page.locator('#colors');
    await MulticountryDropdown.scrollIntoViewIfNeeded();

    // select option from the drop down (4 ways)

    // await page.locator('#colors').selectOption(['Red', 'Blue', 'Green']); // using visible text
    // await page.locator('#colors').selectOption(['red', 'green', 'white']); // using value attribute
    // await page.locator('#colors').selectOption([{ label: 'Red' },{ label: 'Green' },{ label: 'Yellow' }]); // using label
    // await page.locator('#colors').selectOption([{ index: 0 },{ index: 2 },{ index: 4 }]); // using index

    await MulticountryDropdown.selectOption(['Red', 'Blue', 'Green']); // using visible text
    await MulticountryDropdown.selectOption(['red', 'green', 'white']); // using value attribute
    await MulticountryDropdown.selectOption([{ label: 'Red' }, { label: 'Green' }, { label: 'Yellow' }]); // using label
    await MulticountryDropdown.selectOption([{ index: 0 }, { index: 2 }, { index: 4 }]); // using index


    // check number of options in the dropdown (count)

    const dropdownOptions: Locator = page.locator("//select[@id='colors']/option");
    await expect(dropdownOptions).toHaveCount(7);

    // check an option present in the dropdown

    const optionsText: string[] = (await dropdownOptions.allTextContents()).map(text => text.trim());
    console.log('Dropdown options:', optionsText);
    expect(optionsText).toContain('Green'); // Check if the array contains "Green"

    //Printing all options in dropdown 
    for (const option of optionsText) {
        console.log(option);
    }
});

test('Verify dropdown is sorted', async ({ page }) => {

    const dropDownOptions: Locator = page.locator('//select[@id="colors"]/option');
    console.log(await dropDownOptions.allTextContents());
    const optionsText1: string[] = (await dropDownOptions.allTextContents()).map(text => text.trim());
    const originalList: string[] = optionsText1;
    const sortedList: string[] = optionsText1.sort();
    console.log("Original list:", originalList);
    console.log("Sorted list: ", sortedList);
    await page.waitForTimeout(5000);


    const dropDownOptions1: Locator = page.locator('//select[@id="animals"]/option');
    console.log(await dropDownOptions1.allTextContents());
    const optionsText2: string[] = (await dropDownOptions1.allTextContents()).map(text => text.trim());
    const originalList2: string[] = optionsText2;
    const sortedList2: string[] = optionsText2.sort();
    console.log("Original list:", originalList2);
    console.log("Sorted list: ", sortedList2);
    await page.waitForTimeout(5000);

});

test("Verify dropdown contains duplicates", async ({ page }) => {

    //const dropDownOptions: Locator = page.locator('//select[@id="colors"]/option');     // having duplicates
    const dropDownOptions: Locator = page.locator('//select[@id="animals"]/option');   // not having duplicates
    const optionsText: string[] = (await dropDownOptions.allTextContents()).map(text => text.trim());
    const myset = new Set<string>(); // Set-duplicates not allowed
    const duplicates: string[] = []; // array duplicates allowed

    for (const text of optionsText) {
        if (myset.has(text)) {

            duplicates.push(text);
        }
        else {
            myset.add(text);
        }
    }
    //console.log("Duplicate options are:===>", duplicates);

    if (duplicates.length > 0) {
        console.log("Duplicate options found.", duplicates)
    }
    else {
        console.log("No duplicate options found..")
    }
    //expect(duplicates.length).toBe(0);
});

//await page.waitForTimeout(5000);

//========================================================= Session-8 =========================================================

test('AutoSuggest dropdown', async ({ page }) => {

    await page.goto('https://www.flipkart.com/');
    await page.locator('//span[@role="button"]').click();
    const searchBar: Locator = page.locator('//form[@class="lilxh_ header-form-search"]//input[@placeholder="Search for Products, Brands and More"]');
    await searchBar.fill('smart');
    await page.waitForLoadState('domcontentloaded');
    await page.locator('//button[@type="submit"]').click();
    const searchbar2: Locator = page.locator('//form[@class="rcHWnF header-form-search"]//input[@placeholder="Search for products, brands and more"]');
    await searchbar2.click();
    await searchbar2.clear();
    await searchbar2.type('smart', { delay: 500 });

    // Get all suggest options
    const options: Locator = page.locator('//ul[@class="col-12-12 I01Bvi O1jfZ8"]/li');
    await page.waitForLoadState('domcontentloaded');
    const optionsCount: number = await options.count();
    console.log('Number of suggest options:', optionsCount);

    //printing all the suggest options

    console.log('5th option : ', await options.nth(5).innerText());

    // Print all the suggest options
    for (let i = 0; i < optionsCount; i++) {
        const optionText: string | null = await options.nth(i).textContent();
        console.log(`Option ${i + 1}: ${optionText?.trim()}`);
    }

    //Select/Click on the smartPhone option
    for (let i = 0; i < optionsCount; i++) {
        const optionText: string | null = await options.nth(i).textContent();
        if (optionText === 'smartphone') {
            options.nth(i).click();
            break;
        }
    }
    await page.waitForTimeout(5000);
});

test("Bootsrtap hidden dropdown", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //Login steps

    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('//button[normalize-space()="Login"]').click();

    //click on the PIM

    await page.getByText('PIM').click();

    //click on Job TiTLE Dropdown

    const dropdownArrow: Locator = page.locator('//label[normalize-space()="Job Title"]/ancestor::div[contains(@class,"oxd-input-group")]//i');
    await dropdownArrow.click();

    await page.waitForLoadState('networkidle');

    // capture all the options from dropdown and count

    const options: Locator = page.locator('//div[@role="listbox"]//div');
    const count: number = await options.count();
    console.log("Number of options in a dropdown:", count);

    // Print all the options

    console.log("All the text contenst:", await options.allTextContents());
    console.log("Pring all the options.....")
    for (let i = 0; i < count; i++) {
        console.log(await options.nth(i).textContent());
    }

    // select/click on option
    for (let i = 0; i < count; i++) {
        const text: string | null = await options.nth(i).innerText();
        if (text === 'Software Architect') {
            await options.nth(i).click();
            break;
        }
    }

});

//========================================================= Session-9 =========================================================

test('Comparing method', async ({ page }) => {

    await page.goto('https://automationexercise.com/');
    const products: Locator = page.locator('//div[@class="productinfo text-center"]/p');

    //1) innertext() and textcontent()

    console.log(await products.nth(1).innerText());
    console.log(await products.nth(1).textContent());

    const count = await products.count();

    for (let i = 0; i < count; i++) {
        const ProductName1: string | null = await products.nth(i).textContent();
        console.log(ProductName1);
        const ProductName2: string | null = await products.nth(i).innerText();
        console.log(ProductName2);
        const ProductName3: string | null = await products.nth(i).textContent();
        console.log(ProductName3?.trim());
    }

    //2) allinnertext() and alltextcontent()

    const ProductName1: string[] = await products.allTextContents();
    console.log(ProductName1);
    const ProductName2: string[] = await products.allInnerTexts();
    console.log(ProductName2);
    const ProductNameTrimmed: string[] = ProductName1.map(text => text.trim());
    console.log(ProductNameTrimmed);

    //3) all ==> convert Locator ==> Locatoer[]
    const ProductLocators: Locator[] = await products.all();
    //console.log(ProductLocators);
    //console.log(await ProductLocators[1].innerText());


    // for of loop

    for (let productloc of ProductLocators) {
        console.log(await productloc.innerText());
    }

    // for in loop 

    for (let i in ProductLocators) {
        console.log(await ProductLocators[i].innerText());
    }
});

test.only('Static web Table', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    const table : Locator = page.locator('//table[@name="BookTable"]');
    await expect(table).toBeVisible();

    // count nuber of rows in a table
    const rows:Locator = page.locator('//table[@name="BookTable"]/tbody/tr');
    await expect(rows).toHaveCount(7);
     
    const rowcount:number = await rows.count();
    console.log('count number of rows in a table',rowcount);
    expect(rowcount).toBe(7);


});

//========================================================= Session-10 =========================================================


//Pending




//========================================================= Session-11 =========================================================

//});

