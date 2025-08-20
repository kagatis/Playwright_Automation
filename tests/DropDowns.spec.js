import {test, expect} from '@playwright/test'
test("DropDowns",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Multiple Ways of Selecting DropDowns
    //await page.locator('#country').selectOption({label: 'India'}); //Using Label
    // await page.locator('#country').selectOption('Canada');  //Using Visible Text
    // await page.locator('#country').selectOption({value:'uk'});  //Using Value
    // await page.locator('#country').selectOption({index:4}); //Using Index
    // await page.selectOption("#country",'India'); //Directly Selecting

    //Multiple Ways of Setting Assertions

    //Approach-1 : Number of options in the dropdown
    // const options = await page.locator('#country option');
    // await expect(options).toHaveCount(10);

    //Approach-2 : Number of options in the dropdown
    // const options=await page.$$('#country option')
    // console.log("Number of options: ", options.length)
    // await expect(options.length).toBe(10)

    //Approach-3 : Check Presence of Value in Drop Down
    // const content=await page.locator('#country').textContent()
    // console.log("Text Content: ", content);
    // await expect(content.includes('Japan')).toBeTruthy();
    //Approach-4 : Check Presence of Value in Drop Down using Looping Statements
    // const options=await page.$$('#country option')
    // let status=false;
    // for(const option of options)
    // {
    //     // console.log(await option.textContent());
    //     let value=await option.textContent();
    //     if(value.includes('India'))
    //     {
    //         status=true;
    //         break;
    //     }

    // }
    // expect(status).toBeTruthy();
    //Approach-5 : Using Looping Statement
    const options = await page.$$('#country option');
    for (const option of options) {
    const value = (await option.textContent())?.trim(); // Trim to remove extra spaces
    if (value && value.includes('Japan')) 
    {
        await page.selectOption("#country", { label: value }); // Use label for visible text
        break;
    }
}
    await page.waitForTimeout(5000);
    await page.close();
});