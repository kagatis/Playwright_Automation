import {test,expect} from '@playwright/test'
test("InnerFrames",async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    const Frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    // Frame3.fill("input[name='mytext3']",'Hello');
    //Nested Frame
    const childFrames=await Frame3.childFrames()
    await childFrames[0].locator("//*[@id='i6']/div[3]/div").click();
    await page.waitForTimeout(5000);
    await page.close();
});