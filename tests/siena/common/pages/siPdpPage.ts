import {PdpPage} from "../../../common/pages/pdpPage";
import {Page} from "@playwright/test";

export class SiPdpPage extends PdpPage{
    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }
}