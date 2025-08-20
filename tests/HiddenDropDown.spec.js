import {test,expect} from '@playwright/test'
test("HiddenDropDown",async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.fill("//input[@placeholder='Username']",'Admin')
    await page.fill("//input[@placeholder='Password']",'admin123')
    await page.click("//button[normalize-space()='Login']")
    await page.click("//span[normalize-space()='PIM']")
    await page.click("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]")
    await page.waitForTimeout(5000)
    await page.close();
})