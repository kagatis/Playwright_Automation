import {test , expect} from '@playwright/test'
test("BootStrapDropDown",async({page})=>{
    await page.goto('https://springstubbe.us/projects/jquery-multiselect/')
    await page.locator('#ms-list-1').click()
    //Approach-1 : Asserion - Total Number of Options
    // const options=await page.locator('ul>li label input');
    // await expect(options).toHaveCount(186);
    //Approach-2 : Assertions - Using Length
    // const options=await page.$$('ul>li label input');
    // await expect(options.length).toBe(186);
    // //Selecting Multiple Options from DropDown
    // const options=await page.$$('ul>li label');
    // for(let option of options)
    // {
    //     const value=await option.textContent();
    //     // console.log("Value is : ",value)
    //     if(value.includes("Alabama") || value.includes("Alaska"))
    //     {
    //         await option.click();
    //         break;
    //     }
    // }
    //DeSelecting Multiple Options from DropDown
    const options=await page.$$('ul>li label');
    for(let option of options)
    {
        const value=await option.textContent();
        // console.log("Value is : ",value)
        if(value.includes("Alabama") || value.includes("Alaska"))
        {
            await option.click();
            break;
        }
    }
    await page.waitForTimeout(5000)
    await page.close();
});