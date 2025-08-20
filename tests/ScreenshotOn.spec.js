import {test,expect} from '@playwright/test'
test("Page Screenshot",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(5000);
});