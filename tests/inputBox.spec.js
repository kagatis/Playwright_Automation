import {test , expect} from '@playwright/test'
test("InputBox",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page.locator("//input[@id='name']")).toBeVisible();
    await expect(page.locator("//input[@id='name']")).toBeEmpty();
    await expect(page.locator("//input[@id='name']")).toBeEditable();
    await expect(page.locator("//input[@id='name']")).toBeEnabled();
    await page.locator("//input[@id='name']").fill('ABC1123')
    await page.waitForTimeout(10000);
    page.close();

})