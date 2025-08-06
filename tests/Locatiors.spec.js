//const {test, expect} = require("@playwright/test");
import {test , expect} from '@playwright/test'
test("Locators", async ({page})=>{
    await page.goto("https://demoblaze.com/");
    //Click on Login Button - Property
    //await page.locator('id=login2').click();
    await page.click('id=login2');
    //Provide User Name - CSS
    //await page.locator("#loginusername").fill("pavanol");
    await page.fill("#loginusername","pavanol");
    //await page.type("#loginusername","pavanol");
    //Provide Password - CSS
    await page.fill('#loginpassword',"test@123");
    //Click on Login Button - Xpath
    await page.click("//button[normalize-space()='Log in']");
    //Verify Log Out Link Presence - Xpath
    const logoutLink=await page.locator("//a[@id='logout2']")
    await expect(logoutLink).toBeVisible();
    //Close the Page
    await page.close();
});
