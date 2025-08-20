import {test , expect} from '@playwright/test';
test("Test1",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page).toHaveTitle('Automation Testing Practice');
    await page.waitForTimeout(5000);
});
test("Test2",async({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE');
    await page.waitForTimeout(5000);
});
test("Test3",async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle('OrangeHRM');
    await page.waitForTimeout(5000);
});