import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('/');
  //await expect(page.locator('div div')).toContainText('Hello World');
  await expect(page.locator('div div')).toHaveClass('game');
})