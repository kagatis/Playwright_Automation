import {test,expect} from '@playwright/test'
import { count } from 'console';
test("Table Handling",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#productTable').scrollIntoViewIfNeeded();
    const table=await page.locator('#productTable')
    //count Number of Rows & Columns
    //Columns
    const Columns=await page.locator('thead tr th')
    console.log("Number of columns: " , await Columns.count())
    await expect(await Columns.count()).toBe(9)
    //Rows
    const Rows=await page.locator('tbody tr')
    console.log("Number of rows: ",await Rows.count())
    await expect(await Rows.count()).toBe(17)

    //Select Product 4 Check Box
    // const matchedRow=Rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'Smartwatch'
    // })
    // await matchedRow.locator('input').check();

    //Select Multiple Products by Reusable Function
    // await selectProduct(Rows,page,'Smartphone')
    // await selectProduct(Rows,page,'Smartwatch')
    // await selectProduct(Rows,page,'	Wireless Earbuds')
    //print all product details using looping statements
    // for(let i=0;i<await Rows.count();i++)
    // {
    //     const Row=Rows.nth(i);
    //     const tds=Row.locator('td');
    //     for(let j=0;j< await tds.count()-1;j++)
    //     {
    //         console.log(await tds.nth(j).textContent())
    //     }
    // }

    // async function selectProduct(rows,page,name) 
    // {
    //     const matchedRow=Rows.filter({
    //     has: page.locator('td'),
    //     hasText: name
    // }) 
    // await matchedRow.locator('input').check();
    // }
    
    //Read Data From All the Pages of the Page i.e., Pagination
    const Pages=await page.locator('.pagination li a')
    console.log("Number of pages: ",await Pages.count());
    for(let p=0;p<await Pages.count();p++)
    {
        if(p>0)
        {
            await Pages.nth(p).click();
        }
        for(let i=0;i<await Rows.count();i++)
    {
        const Row=Rows.nth(i);
        const tds=Row.locator('td');
        for(let j=0;j< await tds.count()-1;j++)
        {
            console.log(await tds.nth(j).textContent())
        }
    }
    // await page.waitForTimeout(5000);
    }    
    await page.waitForTimeout(5000);
    await page.close();

});