import {test , expect} from '@playwright/test';
test("Built_In_Locators",async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForTimeout(5000)
    const logo=await page.getByAltText("company-branding")
    await expect(logo).toBeVisible();
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button', {type :'submit'} ).click();
    const name = await page.locator("//p[@class='oxd-userdropdown-name']").textContent()
    await expect(await page.getByText(name)).toBeVisible();
    await page.waitForTimeout(5000)
});