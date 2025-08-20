import {test,expect} from '@playwright/test'
import { DiffieHellmanGroup } from 'crypto';
test("Hooks-Home Page Test",async({page})=>{
    await page.goto('https://demoblaze.com/')
    await page.waitForTimeout(5000);
    //Login
    await page.click('#login2')
    await page.fill("#loginusername",'pavanol')
    await page.fill("#loginpassword",'test@123')
    await page.click("//button[normalize-space()='Log in']")
    //Home Page
    const products=await page.$$(".hrefch")
    await expect(products).toHaveLength(9)
    //Logout
    await page.click("#logout2")
});
test("Hooks-Add Product to Cart Test",async({page})=>{
    await page.goto('https://demoblaze.com/')
    await page.waitForTimeout(5000);
    //Login
    await page.click('#login2')
    await page.fill("#loginusername",'pavanol')
    await page.fill("#loginpassword",'test@123')
    await page.click("//button[normalize-space()='Log in']")
    //Add to Cart of Product
    await page.click("//a[normalize-space()='Samsung galaxy s6']")
    await page.click("//a[normalize-space()='Add to cart']")
    page.on('dialog',async dialog=>{
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })
    //Logout
     await page.click("#logout2")
});