import {test ,expect} from '@playwright/test'
test("AutoSuggestDropDown",async({page})=>{
    await page.goto("https://www.easemytrip.com/bus/")
    await page.locator("#txtSrcCity").fill('Delhi')
    await page.waitForSelector('.w_85')
    const fromCityOptions=await page.$$('.w_85')
    for(let option of fromCityOptions)
    {
        const value= await option.textContent();
        // console.log(value);
        if(value.includes('AIIMS,Delhi'))
        {
            await option.click();
            break;
        }
    }

    await page.waitForTimeout(5000);
    await page.close();
});