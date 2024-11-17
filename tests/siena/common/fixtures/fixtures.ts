import {test as base} from "@playwright/test";
import {
    SiHomePage,
    SiPdpPage,
} from "../pages";

type Fixtures = {
    siHomePage: SiHomePage;
    siPdpPage: SiPdpPage;
};

export const test = base.extend<Fixtures>({
    siHomePage: async ({page}, use) => {
        const siHomePage = new SiHomePage(page);
        await use(siHomePage);
    },
    siPdpPage: async ({page}, use) => {
        const siPdpPage = new SiPdpPage(page);
        await use(siPdpPage);
    },
})

export { expect } from "@playwright/test";