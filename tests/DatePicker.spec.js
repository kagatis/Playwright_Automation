import {test , expect} from '@playwright/test'
test("Date Picker",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#datepicker').scrollIntoViewIfNeeded()
    // await page.fill("#datepicker",'08/15/2025')
    //Date Picker
    const Year="2026"
    const Month="August"
    const Date="15"
    await page.click('#datepicker') //Opens Calendar
    while(true)
    {
        const currentYear=await page.locator('.ui-datepicker-year').textContent();
        const currentMonth=await page.locator('.ui-datepicker-month').textContent();
        if(currentYear==Year&&currentMonth==Month)
            {
                break;
            }
            //await page.locator('[title="Prev"]').click();
            await page.locator('[title="Next"]').click();
    }
    const Dates=await page.$$("//a[@class='ui-state-default']");
    // //Date Selection Using Loop
    // for(const dt of Dates)
    // {
    //     if(await dt.textContent()==Date)
    //     {
    //         await dt.click();
    //         break;
    //     }
    // }
    //Date Selection without Loop
    await page.click(`//a[@class='ui-state-default'][text()='${Date}']`)
    await page.waitForTimeout(5000)
    await page.close()
});

