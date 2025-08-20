import {test,expect} from '@playwright/test'
test("CheckBoxes",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //await page.locator(".form-check[@id='sunday']").check();
    await page.check("//input[@id='sunday']")
    await expect(await page.locator("//input[@id='sunday']")).toBeChecked();
    await expect(await page.locator("//input[@id='sunday']").isChecked()).toBeTruthy();
    await expect(await page.locator("//input[@id='monday']").isChecked()).toBeFalsy();
    await page.waitForTimeout(5000);
    const checkboxLocators=[
        "//input[@id='sunday']",
        "//input[@id='monday']",
        "//input[@id='tuesday']"
    ]
    for(const locator of checkboxLocators)  //Multi CheckBox Selection
    {
        await page.locator(locator).check();
    }
    await page.waitForTimeout(10000)
    for(const locator of checkboxLocators)  //Multi CheckBox Un-Selection of Selected
    {
        if(await page.locator(locator).isChecked())
        {
            await page.locator(locator).uncheck();
        };    
    };
    await page.waitForTimeout(5000)
    await page.close();
});