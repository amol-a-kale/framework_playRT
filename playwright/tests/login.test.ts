

import {chromium, test} from "@playwright/test"
test("Login test demo", async() => {
  const browser = await chromium.launch(
    {headless: false

    });
    // use for launch browser
  const context = await browser.newContext(); 
  // use for open new tab
  const page =await context.newPage();
  //use for open url
  await page.goto("https://ecommerce-playground.lambdatest.io/");
  //hovrer action
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
//   await page.click("text=Login");
//click action
  await page.click("'Login'");
  //send value 
  await page.fill("input[name='email']","amolakale28@gmail.com");
  await page.fill("input[name='password']","Test@123");
  await page.click("input[value='Login']");
  //wait
  await page.waitForTimeout(5000);


})