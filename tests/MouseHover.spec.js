import {test,expect} from '@playwright/test'
test("Mouse Hover",async({page})=>{
    await page.goto('https://demo.opencart.com/')
    await page.waitForTimeout(20000);
    const Desktops=await page.locator("//a[normalize-space()='Desktops']")
    const MacBook=await page.locator("//a[normalize-space()='Mac (1)']")
    //Mouse Hover
    await Desktops.hover()
    await page.waitForTimeout(5000);
    await MacBook.hover()
    await page.waitForTimeout(5000);
    await page.close();
})