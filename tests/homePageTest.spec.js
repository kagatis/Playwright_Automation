const {test, expect} = require('@playwright/test');
const { url } = require('inspector');

test('Home Page', async ({page})=>{

   await page.goto("https://demoblaze.com/");
   const pageTitle = page.title();
   console.log('Page Title is : ', pageTitle);
   await expect(page).toHaveTitle('STORE');
   const pageURL = page.url();
   console.log('Page URL is : ', pageURL);
   await expect(page).toHaveURL('https://demoblaze.com/');
   await page.close();
});
