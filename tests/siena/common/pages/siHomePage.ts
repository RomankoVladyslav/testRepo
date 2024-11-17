import {HomePage} from "../../../common/pages";
import {Page} from "@playwright/test";

export class SiHomePage extends HomePage{
    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }
}