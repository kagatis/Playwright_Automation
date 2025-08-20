// import { test, expect } from '@playwright/test';

// test("Upload Files", async ({ page }) => {
//   await page.goto('https://testautomationpractice.blogspot.com/');
//   await page.locator('#singleFileInput').scrollIntoViewIfNeeded();
//   await page.waitForTimeout(2000);

//   // ✅ Correct file path (use escaped backslashes OR forward slashes)
//   const filePath = "C:/Users/Bargav/PlayWright_Automation/tests/UploadFiles/System_Information.PNG";

//   // Upload file directly
//   await page.setInputFiles('#singleFileInput', filePath);
//   await page.locator("//button[normalize-space()='Upload Single File']").click();
//   await page.waitForTimeout(5000);
//   await page.close();
// });
// import { test, expect } from '@playwright/test';

// test("Upload Multiple Files", async ({ page }) => {
//   await page.goto('https://testautomationpractice.blogspot.com/');
//   await page.locator('#multipleFilesInput').scrollIntoViewIfNeeded();
//   await page.waitForTimeout(2000);

//   // ✅ File paths (use forward slashes or escaped backslashes)
//   const files = [
//     "C:/Users/Bargav/PlayWright_Automation/tests/UploadFiles/System_Information.PNG",
//     "C:/Users/Bargav/PlayWright_Automation/tests/UploadFiles/System_SetUp.jpg"
//   ];

//   // Upload multiple files
//   await page.setInputFiles('#multipleFilesInput', files);

//   // Click Upload button
//   await page.locator("//button[normalize-space()='Upload Multiple Files']").click();

//   // ✅ Assertion (both files should be listed)
//   const statusText = await page.locator("//p[@id='multipleFilesStatus']").textContent();
//   console.log("Upload Status: ", statusText);

//   await expect(statusText).toContain("System_Information.PNG");
//   await expect(statusText).toContain("System_SetUp.jpg");
//   //Removing Files
//   await page.setInputFiles('#multipleFilesInput',[]);
//   await expect(await page.locator("//p[@id='multipleFilesStatus']")).toHaveText('No files selected.')
//   await page.waitForTimeout(5000);
//   await page.close();
// });
import { test, expect } from '@playwright/test';

test("Upload Multiple Files", async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.locator('#multipleFilesInput').scrollIntoViewIfNeeded();
  await page.waitForTimeout(2000);

  // ✅ File paths
  const files = [
    "C:/Users/Bargav/PlayWright_Automation/tests/UploadFiles/System_Information.PNG",
    "C:/Users/Bargav/PlayWright_Automation/tests/UploadFiles/System_SetUp.jpg"
  ];

  // Upload multiple files
  await page.setInputFiles('#multipleFilesInput', files);

  // Click Upload button
  await page.locator("//button[normalize-space()='Upload Multiple Files']").click();

  // ✅ Assertion (both files should be listed)
  const statusText = await page.locator("#multipleFilesStatus").textContent();
  console.log("Upload Status: ", statusText);

  await expect(statusText).toContain("System_Information.PNG");
  await expect(statusText).toContain("System_SetUp.jpg");

  // ✅ Remove files
  await page.setInputFiles('#multipleFilesInput', []);

  // Now check the file input itself is cleared
  const fileInputValue = await page.$eval('#multipleFilesInput', el => el.value);
  console.log("File Input Value after reset:", fileInputValue);

  await expect(fileInputValue).toBe("");   // ✅ This confirms it's cleared

  await page.waitForTimeout(3000);
  await page.close();
});


