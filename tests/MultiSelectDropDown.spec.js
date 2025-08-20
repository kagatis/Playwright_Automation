import {test,expect} from '@playwright/test'
test("MultiSelectDrop",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //Select Multi Option From Multi DropDown
    // await page.selectOption("#colors",['Yellow','Red','Green']);
    //Assertions
    //1)Check Number of Options in DropDown
    // const options=await page.locator("#colors option");
    // await expect(options).toHaveCount(7);
    //2)Check total number of options using JS Array
    // const options=await page.$$('#colors option');
    // console.log("Number of Options: ", options.length);
    // await expect(options.length).toBe(7);
    //3)Check Presence of Required Value in the DropDown
    const content=await page.locator('#colors').textContent();
    await expect(content.includes('Yellow')).toBeTruthy();
    await expect(content.includes('Black')).toBeFalsy();
    await page.waitForTimeout(10000);
    await page.close();
});
