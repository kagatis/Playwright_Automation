import {test,expect} from '@playwright/test'
test.beforeAll(async()=>{
    console.log("Before All ......")
});
test.afterAll(async()=>{
    console.log("After All ......")
});
test.beforeEach(async()=>{
    console.log("Before Each ......")
});
test.afterEach(async()=>{
    console.log("After Each ......")
});
test.describe.skip("Sanity",()=>{
    test("Test_1",async({page})=>{
    console.log("Test_1")
});
test("Test_2",async({page})=>{
    console.log("Test_2")
});
});
test.describe("Smoke",()=>{
    test("Test_3",async({page})=>{
    console.log("Test_3")
});
test("Test_4",async({page})=>{
    console.log("Test_4")
});
});
test.describe("Regression",()=>{
    test("Test_5",async({page})=>{
    console.log("Test_5")
});
test("Test_6",async({page})=>{
    console.log("Test_6")
});    
});


