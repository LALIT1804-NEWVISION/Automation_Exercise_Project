# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practise.spec.ts >> Handling HTML elements
- Location: tests\Practise.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('#name')
Expected: visible
Received: undefined

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#name')

```

# Test source

```ts
  1  | import { test, expect, Locator } from '@playwright/test';
  2  | 
  3  | test('Handling HTML elements', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://testautomationpractice.blogspot.com/');
  6  | 
  7  |     const textBox: Locator = page.locator('#name');
> 8  |     expect(textBox).toBeVisible();
     |                     ^ Error: expect(locator).toBeVisible() failed
  9  |     expect(textBox).toBeEnabled();
  10 |     expect(textBox).toHaveAttribute('name', 'name');
  11 |     expect(textBox).toHaveAttribute('type', 'text');
  12 |     expect(textBox).toHaveAttribute('placeholder', 'Your Name');
  13 | 
  14 | });
```