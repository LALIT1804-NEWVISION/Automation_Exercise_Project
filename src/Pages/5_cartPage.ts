import { Page, Locator, expect } from '@playwright/test';

export class CartPage {

    readonly page: Page;
    readonly cartLink: Locator;
    readonly cartRows: Locator;
    readonly quantities: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartLink = page.locator('//a[normalize-space()="Cart"]');
        this.cartRows = page.locator(".cart_info tbody tr");
        this.quantities = page.locator(".cart_quantity");
    }

    async openCart() {
        await this.cartLink.click();
    }

    async verifyCartItems(count: number) {
        await expect(this.cartRows).toHaveCount(count);
    }

    async verifyQuantities() {
        for (let i = 0; i < await this.quantities.count(); i++) {
            await expect(this.quantities.nth(i)).toHaveText('1');
        }
    }
}