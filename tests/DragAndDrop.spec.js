import{test,expect} from '@playwright/test'
test("Drag & Drop",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator("//h2[normalize-space()='Drag and Drop']").scrollIntoViewIfNeeded()
    const source=await page.locator('#draggable')
    const target=await page.locator('#droppable')
    //Approach-1
    // await source.hover()
    // await page.mouse.down()
    // await target.hover()
    // await page.mouse.up()
    //Approach-2
    await source.dragTo(target)
    await page.waitForTimeout(5000)
    await page.close()
});