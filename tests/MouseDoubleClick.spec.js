import {test,expect} from '@playwright/test'
test("Mouse Double Click",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//button[normalize-space()='Copy Text']").scrollIntoViewIfNeeded()
    const doubleButton=await page.locator("//button[normalize-space()='Copy Text']")
    //Mouse Double Click
    await doubleButton.dblclick();
    const f2=await page.locator('#field2')
    await expect(f2).toHaveValue('Hello World!')
    await page.waitForTimeout(5000)
    await page.close()
});