import {test,expect} from '@playwright/test'
// test("Page Screenshot",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/");
//     await page.waitForTimeout(5000);
//     await page.screenshot({path:'tests\Screenshots'+Date.now()+'HomePage.png'})

// });
// test("Full Page Screenshot",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/");
//     await page.waitForTimeout(5000);
//     await page.screenshot({path:'tests\Screenshots'+Date.now()+'FullPage.png',fullPage:true})
// });
test("Element Screenshot",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(10000);
    await page.locator("//div[@class='fauxborder-left header-fauxborder-left']").screenshot({path:'tests\Screenshots'+Date.now()+'PageTitle.png'})
});