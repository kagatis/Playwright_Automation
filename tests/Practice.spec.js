// // @ts-check
// //const {test , expect} = require('@playwright/test');
// import {test , expect} from '@playwright/test';
// test("Practice", async({page})=>{
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
// });

// // @ts-check
// import {test , expect} from '@playwright/test';
// test("Practice Test", async({page})=>{
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     const pageTitle=page.title();
//     console.log('Page title is : ',pageTitle);
//     await expect(page).toHaveTitle('OrangeHRM');
//     const pageURL = page.url();
//     console.log('page URL is : ',pageURL);
//     await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     await page.close();
// });

// ///<reference types = 'cypress'/>
// describe("Main",()=>{
//     it("First",()=>{
//         cy.visit("")     
//     })
// })


// // @ts-check
// import {test,expect} from '@playwright/test'
// test("Locators",async({page})=>{

//     //Go To Website
//     await page.goto('https://demoblaze.com/');
//     // await page.locator('id=login2').click();
//     await page.click('id=login2');

    
//     //Provide UserName - CSS
//     //await page.locator('#loginusername').fill('pavanol')
//     // await page.type('#loginusername','pavanol');
//     await page.fill('#loginusername','pavanol');

//     //Provide PassWord - CSS
//     // await page.locator("input[id='loginpassword']").fill('test@123');
//     // await page.type("input[id='loginpassword']",'test@123');
//     await page.fill("input[id='loginpassword']",'test@123');

//     //click on Login Button - Xpath
//     // await page.locator("//button[normalize-space()='Log in']").click();
//     await page.click("//button[normalize-space()='Log in']");

//     //Verify Logout Link Presence
//     const logoutLink=await page.locator("//a[@id='logout2']")
//     await expect(logoutLink).toBeVisible();
//     await page.close();


// });

// // @ts-check
// import {test, expect} from '@playwright/test'
// test("Multiple_Locators",async({page})=>{
//     await page.goto('https://demoblaze.com/index.html');
//     // const links=await page.$$('a');
//     // for(const link of links)
//     // {
//     //         const linktext=await link.textContent();
//     //         console.log(linktext);
//     // }
//     // page.waitForSelector("//div[@id='tbodyid']//div//h4/a");
//     const links=await page.$$("//div[@id='tbodyid']//div//h4/a")
//     for(const link of links)
//     {
//         const linktext=await link.textContent();
//         console.log(linktext);
//     }
// });


import {test , expect} from '@playwright/test';
test("Built_In_Locators",async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const logo=await page.getByAltText("company-branding")
    await expect(logo).toBeVisible();
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button', {type :'submit'} ).click();
    const name = await page.locator("//p[@class='oxd-userdropdown-name']").textContent()
    await expect(await page.getByText(name)).toBeVisible();
});

// ///<reference types = 'cypress'/>
// describe("Main",()=>{
//     it("Test",()=>{
//         cy.visit("")
//     })
// })
