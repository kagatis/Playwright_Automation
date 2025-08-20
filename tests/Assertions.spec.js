import {test , expect} from '@playwright/test'
test("Assertions",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/");

    await expect(page).toHaveURL("https://demo.nopcommerce.com/");
    await expect(page).toHaveTitle("nopCommerce demo store. Home page title");
    const logoElement=await page.locator('.header-logo')
    await expect(logoElement).toBeVisible();
    const searchstorebox=await page.locator('#small-searchterms')
    await expect(searchstorebox).toBeEnabled();
    await page.locator(".ico-register").click();
    //Radio Button
    const maleradiobutton=await page.locator('#gender-male')
    await maleradiobutton.click()
    await expect(maleradiobutton).toBeChecked();
    //CheckBox
    const newslettercheckbox=await page.locator('#Newsletter')
    await expect(newslettercheckbox).toBeChecked();
    //Element Has Attribute
    const registerButton=await page.locator('#register-button')
    await expect(registerButton).toHaveAttribute('type','submit');
    //Element Matches Text
    await expect(await page.locator('.page-title h1')).toHaveText('Register');
    //Element Contains Text
    await expect(await page.locator('.page-title h1')).toContainText('Reg');
    //Input has a Value
    const emailinput=await page.locator('#Email')
    await emailinput.fill('kagati@gmail.com');
    await expect(emailinput).toHaveValue('kagati@gmail.com')
    //List of Elements has given length- toHaveCount()

})