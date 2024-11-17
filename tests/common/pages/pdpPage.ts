import {BasePage} from "./basePage";
import {Page} from "@playwright/test";

export class PdpPage extends BasePage{
    readonly page: Page;


    constructor(page: Page) {
        super(page);
        this.page = page;
    }
}