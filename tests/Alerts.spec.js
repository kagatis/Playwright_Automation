import {test,expect} from '@playwright/test'
//Test-1
test.skip("Alert Handling",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //Enabling Dialog Window Handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })
    await page.click("#alertBtn");
    await page.waitForTimeout(5000);
    await page.close();    
});
test.skip("Alert Handling- cancel & Ok",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //Enabling Dialog Window Handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept(); //Close by using OK
        // await dialog.dismiss(); //CLose by using Cancel
    })
    await page.click("#confirmBtn");
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')
    await page.waitForTimeout(5000);
    await page.close();    
});
test("Prompt Handling",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //Enabling Dialog Window Handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('ABCDE'); //Close by using OK
        // await dialog.dismiss(); //CLose by using Cancel
    })
    await page.click("//button[@id='promptBtn']");
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello ABCDE! How are you today?')
    await page.waitForTimeout(5000);
    await page.close();    
});