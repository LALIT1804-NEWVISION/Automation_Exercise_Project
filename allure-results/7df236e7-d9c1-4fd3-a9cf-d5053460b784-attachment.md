# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practise.spec.ts >> Practise Tests >> AutoSuggest dropdown
- Location: tests\Practise.spec.ts:287:10

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('//form[@class="lilxh_ header-form-search"]//input[@placeholder="Search for Products, Brands and More"]')
    - locator resolved to <input name="q" value="" type="text" autocomplete="off" class="nw1UBF v1zwn25" title="Search for Products, Brands and More" placeholder="Search for Products, Brands and More"/>
    - fill("smart")
  - attempting fill action
    2 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
      - waiting 100ms
    37 × waiting for element to be visible, enabled and editable
       - element is not visible
     - retrying fill action
       - waiting 500ms

```

# Test source

```ts
  192 |         for (const option of optionText) {
  193 |             console.log(option);
  194 |         }
  195 |         await page.waitForTimeout(5000);
  196 |     });
  197 | 
  198 |     test('Multi Select option from dropdown', async ({ page }) => {
  199 |         const MulticountryDropdown: Locator = page.locator('#colors');
  200 |         await MulticountryDropdown.scrollIntoViewIfNeeded();
  201 | 
  202 |         // select option from the drop down (4 ways)
  203 | 
  204 |         // await page.locator('#colors').selectOption(['Red', 'Blue', 'Green']); // using visible text
  205 |         // await page.locator('#colors').selectOption(['red', 'green', 'white']); // using value attribute
  206 |         // await page.locator('#colors').selectOption([{ label: 'Red' },{ label: 'Green' },{ label: 'Yellow' }]); // using label
  207 |         // await page.locator('#colors').selectOption([{ index: 0 },{ index: 2 },{ index: 4 }]); // using index
  208 | 
  209 |         await MulticountryDropdown.selectOption(['Red', 'Blue', 'Green']); // using visible text
  210 |         await MulticountryDropdown.selectOption(['red', 'green', 'white']); // using value attribute
  211 |         await MulticountryDropdown.selectOption([{ label: 'Red' }, { label: 'Green' }, { label: 'Yellow' }]); // using label
  212 |         await MulticountryDropdown.selectOption([{ index: 0 }, { index: 2 }, { index: 4 }]); // using index
  213 | 
  214 | 
  215 |         // check number of options in the dropdown (count)
  216 | 
  217 |         const dropdownOptions: Locator = page.locator("//select[@id='colors']/option");
  218 |         await expect(dropdownOptions).toHaveCount(7);
  219 | 
  220 |         // check an option present in the dropdown
  221 | 
  222 |         const optionsText: string[] = (await dropdownOptions.allTextContents()).map(text => text.trim());
  223 |         console.log('Dropdown options:', optionsText);
  224 |         expect(optionsText).toContain('Green'); // Check if the array contains "Green"
  225 | 
  226 |         //Printing all options in dropdown 
  227 |         for (const option of optionsText) {
  228 |             console.log(option);
  229 |         }
  230 |     });
  231 | 
  232 |     test('Verify dropdown is sorted', async ({ page }) => {
  233 | 
  234 |         const dropDownOptions: Locator = page.locator('//select[@id="colors"]/option');
  235 |         console.log(await dropDownOptions.allTextContents());
  236 |         const optionsText1: string[] = (await dropDownOptions.allTextContents()).map(text => text.trim());
  237 |         const originalList: string[] = optionsText1;
  238 |         const sortedList: string[] = optionsText1.sort();
  239 |         console.log("Original list:", originalList);
  240 |         console.log("Sorted list: ", sortedList);
  241 |         await page.waitForTimeout(5000);
  242 | 
  243 | 
  244 |         const dropDownOptions1: Locator = page.locator('//select[@id="animals"]/option');
  245 |         console.log(await dropDownOptions1.allTextContents());
  246 |         const optionsText2: string[] = (await dropDownOptions1.allTextContents()).map(text => text.trim());
  247 |         const originalList2: string[] = optionsText2;
  248 |         const sortedList2: string[] = optionsText2.sort();
  249 |         console.log("Original list:", originalList2);
  250 |         console.log("Sorted list: ", sortedList2);
  251 |         await page.waitForTimeout(5000);
  252 | 
  253 |     });
  254 | 
  255 |     test("Verify dropdown contains duplicates", async ({ page }) => {
  256 | 
  257 |         //const dropDownOptions: Locator = page.locator('//select[@id="colors"]/option');     // having duplicates
  258 |         const dropDownOptions: Locator = page.locator('//select[@id="animals"]/option');   // not having duplicates
  259 |         const optionsText: string[] = (await dropDownOptions.allTextContents()).map(text => text.trim());
  260 |         const myset = new Set<string>(); // Set-duplicates not allowed
  261 |         const duplicates: string[] = []; // array duplicates allowed
  262 | 
  263 |         for (const text of optionsText) {
  264 |             if (myset.has(text)) {
  265 | 
  266 |                 duplicates.push(text);
  267 |             }
  268 |             else {
  269 |                 myset.add(text);
  270 |             }
  271 |         }
  272 |         //console.log("Duplicate options are:===>", duplicates);
  273 | 
  274 |         if (duplicates.length > 0) {
  275 |             console.log("Duplicate options found.", duplicates)
  276 |         }
  277 |         else {
  278 |             console.log("No duplicate options found..")
  279 |         }
  280 |         //expect(duplicates.length).toBe(0);
  281 |     });
  282 | 
  283 |     //await page.waitForTimeout(5000);
  284 | 
  285 |     //========================================================= Session-8 =========================================================
  286 | 
  287 |     test.only('AutoSuggest dropdown', async ({ page }) => {
  288 | 
  289 |     await page.goto('https://www.flipkart.com/');
  290 |     await page.locator('//span[@role="button"]').click();
  291 |     const searchBar: Locator = page.locator('//form[@class="lilxh_ header-form-search"]//input[@placeholder="Search for Products, Brands and More"]');
> 292 |     await searchBar.fill('smart');
      |                     ^ Error: locator.fill: Target page, context or browser has been closed
  293 |     await page.locator('//button[@type="submit"]').click();
  294 |     const searchbar2 : Locator = page.locator('//form[@class="rcHWnF header-form-search"]//input[@placeholder="Search for products, brands and more"]');
  295 |     await searchbar2.click();
  296 |     await searchbar2.clear();
  297 |     await searchbar2.fill('smart');
  298 |     //await searchbar2.type('smart', { delay: 500 });
  299 |    
  300 |     // Get all suggest options
  301 |     const options: Locator = page.locator('//ul[@class="col-12-12 I01Bvi O1jfZ8"]/li');
  302 |     await page.waitForLoadState('domcontentloaded');
  303 |     const optionsCount: number = await options.count();
  304 |     console.log('Number of suggest options:', optionsCount);
  305 | 
  306 |     // Print all the suggest options
  307 |     for (let i = 0; i < optionsCount; i++) {
  308 |         const optionText: string | null = await options.nth(i).textContent();
  309 |         console.log(`Option ${i + 1}: ${optionText?.trim()}`);
  310 |     }
  311 | 
  312 |     await page.waitForTimeout(5000);
  313 | });
  314 | 
  315 | });
  316 | 
  317 | 
```