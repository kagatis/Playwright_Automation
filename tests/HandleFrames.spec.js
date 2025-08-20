import {test,expect} from '@playwright/test'
test("Handling Frame/Iframe",async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    const allFrames=await page.frames()
    console.log("Number of Frames: ",allFrames.length)
    // //Approach-1 : Using Names or URL
    // // const Framess=await page.frame('name')
    // const Frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    // await Frame1.fill("[name='mytext1']",'Hello')
    //Approach-2 : Using frame locator
    const inputbox=await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
    inputbox.fill("Hello")
    await page.waitForTimeout(5000);
    await page.close();
})