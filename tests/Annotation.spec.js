import {test,expect, chromium} from '@playwright/test'
// test.skip("Test1",async({page})=>{
//     console.log("Test1")
// });
// test("Test2",async({page})=>{
//     console.log("Test2")
// });
// test("Test3",async({page,browserName})=>{
//     console.log("Test2")
//     if(browserName==='chromium')
//     {
//         test.skip();
//     }
// });
// test("Test4",({page})=>{
//     test.fixme()
//     console.log("Test4")
// });
// test("Test5",({page})=>{
//     test.fail()
//     console.log("Test5")
//     expect(1).toBe(2);
// });
// test("Test6",async({page,browserName})=>{
//     console.log("Test6")
//     if(browserName==='firefox')
//     {
//         test.fail();
//     }
// });
test("Test7",async({page})=>{
    test.slow()
    await page.goto('https://www.easemytrip.com/bus/')
    console.log("Test7")
});