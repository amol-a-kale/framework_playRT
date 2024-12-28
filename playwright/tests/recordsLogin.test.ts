import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').fill('amolakale28@gmail.com');
  await page.getByPlaceholder('Password').fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account' }).click();
  await page.getByPlaceholder('First Name').clear();
  await page.getByPlaceholder('First Name').fill('Amol Ankushrao');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
});

