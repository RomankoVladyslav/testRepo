import {test, expect} from "../../common/fixtures/fixtures";

test(`Home Page Overview`, async function({context, siHomePage}) {
    await test.step("Go to Home Page", async () => {
        await siHomePage.page.goto("https://sienasleep.com");
        await siHomePage.heroBanner.waitFor({state: "visible", timeout: 10000});
        await expect(siHomePage.heroBanner).toBeVisible();
    })
})

