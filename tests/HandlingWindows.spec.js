import {test , expect , chromium} from '@playwright/test'
// test("Handling Multiple Windows", async()=>{
//     const browser=await chromium.launch();
//     const context=await browser.newContext();

//     const page1=await context.newPage();
//     const page2=await context.newPage();

//     const allPages=context.pages();
//     console.log("Number of Pages Created: ",allPages.length);

//     await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     await expect(page1).toHaveTitle('OrangeHRM')
//     await page1.waitForTimeout(5000)
//     await page2.goto('https://www.orangehrm.com/')
//     await expect(page2).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM')
//     await page2.waitForTimeout(5000)
// });
test("Handling Multiple Windows", async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();

    const allPages=context.pages();
    console.log("Number of Pages Created: ",allPages.length);

    const page1=await context.newPage();
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')
    await page1.waitForTimeout(5000)

    const pagePromise=context.waitForEvent('page');
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();
    const newPage=await pagePromise;
    await expect(newPage).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM')
    await page1.waitForTimeout(5000)
    await page1.close();
    // await page2.goto('https://www.orangehrm.com/')
    // await expect(page2).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM')
    // await page2.waitForTimeout(5000)
});