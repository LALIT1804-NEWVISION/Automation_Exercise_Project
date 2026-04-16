import { Page, Locator } from '@playwright/test';

export class ProductPage {

    readonly page: Page;
    readonly productsLink: Locator;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly continueBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productsLink = page.locator("//a[@href='/']/following::a[@href='/products']");
        this.searchInput = page.locator("//input[@id='search_product']");
        this.searchButton = page.locator("//button[@id='submit_search']");
        this.continueBtn = page.locator("//button[contains(text(),'Continue Shopping')]");
    }

    async goToProducts() {
        await this.productsLink.click();
    }

    async searchProduct(product: string) {
        await this.searchInput.fill(product);
        await this.searchButton.click();
    }

    async addProductToCart(productName: string) {
        const product = this.page.locator(`//p[text()='${productName}']/ancestor::div[@class='product-image-wrapper']`);
        await product.hover();
        await product.locator("a:has-text('Add to cart')").first().click();
        await this.continueBtn.click();
    }
}