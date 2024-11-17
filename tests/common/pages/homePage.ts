import { BasePage } from "./basePage";
import {Page, Locator} from "@playwright/test";

export class HomePage extends BasePage{
    readonly page: Page;

    readonly heroBanner: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;

        this.heroBanner = page.locator("#home_banner_section");
    }
}