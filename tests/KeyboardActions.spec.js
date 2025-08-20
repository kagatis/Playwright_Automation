import {test,expect} from '@playwright/test'
test("Keyboard Actions",async({page})=>{
    await page.goto('https://gotranscript.com/text-compare')
    await page.waitForTimeout(5000)
    await page.fill("//textarea[@placeholder='Paste one version of the text here.']",'Welcome to PlayWright')
    //Ctrl+A
    await page.keyboard.press('Control+A');
    //Ctrl+C
    await page.keyboard.press('Control+C');
    //TAB
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');
    //Ctrl+V
    await page.keyboard.press('Control+V');
    await page.waitForTimeout(5000)
    await page.close()
});