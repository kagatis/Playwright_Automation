import {test , expect} from '@playwright/test'
test('soft assertions',async({page})=>{
    await page.goto('https://demoblaze.com/')
    //HardAssertions
    // await expect(page).toHaveTitle('STORE123')
    // await expect(page).toHaveURL('https://demoblaze.com/')
    // await expect(page.locator('.navbar-brand')).toBeVisible();
    //SoftAssertions
    await expect.soft(page).toHaveTitle('STORE123')
    await expect.soft(page).toHaveURL('https://demoblaze.com/')
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();
})