import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('html').click();
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('button', { name: 'Guides' }).click();
  await page.getByRole('list').filter({ hasText: 'Getting StartedInstallationWriting testsGenerating testsRunning and debugging' }).click();
  await page.getByRole('button', { name: 'Guides' }).click();
  await page.getByRole('link', { name: 'Locators', exact: true }).click();
});