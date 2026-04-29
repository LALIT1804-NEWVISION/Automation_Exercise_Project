# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practise.spec.ts >> Practise Tests >> Comparing method
- Location: tests\Practise.spec.ts:375:10

# Error details

```
Error: locator.innerText: Target page, context or browser has been closed
Call log:
  - waiting for locator('//div[@class="productinfo text-center"]/p').nth(1)

```

# Test source

```ts
  281 |     });
  282 | 
  283 |     //await page.waitForTimeout(5000);
  284 | 
  285 |     //========================================================= Session-8 =========================================================
  286 | 
  287 |     test('AutoSuggest dropdown', async ({ page }) => {
  288 | 
  289 |         await page.goto('https://www.flipkart.com/');
  290 |         await page.locator('//span[@role="button"]').click();
  291 |         const searchBar: Locator = page.locator('//form[@class="lilxh_ header-form-search"]//input[@placeholder="Search for Products, Brands and More"]');
  292 |         await searchBar.fill('smart');
  293 |         await page.waitForLoadState('domcontentloaded');
  294 |         await page.locator('//button[@type="submit"]').click();
  295 |         const searchbar2: Locator = page.locator('//form[@class="rcHWnF header-form-search"]//input[@placeholder="Search for products, brands and more"]');
  296 |         await searchbar2.click();
  297 |         await searchbar2.clear();
  298 |         await searchbar2.type('smart', { delay: 500 });
  299 | 
  300 |         // Get all suggest options
  301 |         const options: Locator = page.locator('//ul[@class="col-12-12 I01Bvi O1jfZ8"]/li');
  302 |         await page.waitForLoadState('domcontentloaded');
  303 |         const optionsCount: number = await options.count();
  304 |         console.log('Number of suggest options:', optionsCount);
  305 | 
  306 |         //printing all the suggest options
  307 | 
  308 |         console.log('5th option : ', await options.nth(5).innerText());
  309 | 
  310 |         // Print all the suggest options
  311 |         for (let i = 0; i < optionsCount; i++) {
  312 |             const optionText: string | null = await options.nth(i).textContent();
  313 |             console.log(`Option ${i + 1}: ${optionText?.trim()}`);
  314 |         }
  315 | 
  316 |         //Select/Click on the smartPhone option
  317 |         for (let i = 0; i < optionsCount; i++) {
  318 |             const optionText: string | null = await options.nth(i).textContent();
  319 |             if (optionText === 'smartphone') {
  320 |                 options.nth(i).click();
  321 |                 break;
  322 |             }
  323 |         }
  324 |         await page.waitForTimeout(5000);
  325 |     });
  326 | 
  327 |     test("Bootsrtap hidden dropdown", async ({ page }) => {
  328 | 
  329 |         await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  330 | 
  331 |         //Login steps
  332 | 
  333 |         await page.locator('input[name="username"]').fill('Admin');
  334 |         await page.locator('input[name="password"]').fill('admin123');
  335 |         await page.locator('//button[normalize-space()="Login"]').click();
  336 | 
  337 |         //click on the PIM
  338 | 
  339 |         await page.getByText('PIM').click();
  340 | 
  341 |         //click on Job TiTLE Dropdown
  342 | 
  343 |         const dropdownArrow: Locator = page.locator('//label[normalize-space()="Job Title"]/ancestor::div[contains(@class,"oxd-input-group")]//i');
  344 |         await dropdownArrow.click();
  345 | 
  346 |         await page.waitForLoadState('networkidle');
  347 | 
  348 |         // capture all the options from dropdown and count
  349 | 
  350 |         const options: Locator = page.locator('//div[@role="listbox"]//div');
  351 |         const count: number = await options.count();
  352 |         console.log("Number of options in a dropdown:", count);
  353 | 
  354 |         // Print all the options
  355 | 
  356 |         console.log("All the text contenst:", await options.allTextContents());
  357 |         console.log("Pring all the options.....")
  358 |         for (let i = 0; i < count; i++) {
  359 |             console.log(await options.nth(i).textContent());
  360 |         }
  361 | 
  362 |         // select/click on option
  363 |         for (let i = 0; i < count; i++) {
  364 |             const text: string | null = await options.nth(i).innerText();
  365 |             if (text === 'Software Architect') {
  366 |                 await options.nth(i).click();
  367 |                 break;
  368 |             }
  369 |         }
  370 | 
  371 |     });
  372 | 
  373 |     //========================================================= Session-9 =========================================================
  374 | 
  375 |     test.only('Comparing method', async ({ page }) => {
  376 | 
  377 |         //await page.goto('https://testautomationpractice.blogspot.com/');
  378 |         const products: Locator = page.locator('//div[@class="productinfo text-center"]/p');
  379 | 
  380 |         //1) innertext() and textcontent()
> 381 |         console.log(await products.nth(1).innerText());
      |                                           ^ Error: locator.innerText: Target page, context or browser has been closed
  382 |         console.log(await products.nth(1).textContent());
  383 | 
  384 |     });
  385 | 
  386 | });
  387 | 
  388 | 
```