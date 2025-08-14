// // @ts-check
// //const {test , expect} = require('@playwright/test');
// import {test , expect} from '@playwright/test';
// test("Practice", async({page})=>{
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
// });

// @ts-check
import {test , expect} from '@playwright/test';
test("Practice Test", async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const pageTitle=page.title();
    console.log('Page title is : ',pageTitle);
    await expect(page).toHaveTitle('OrangeHRM');
    const pageURL = page.url();
    console.log('page URL is : ',pageURL);
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.close();
});

// ///<reference types = 'cypress'/>
// describe("Main",()=>{
//     it("First",()=>{
//         cy.visit("")     
//     })
// })