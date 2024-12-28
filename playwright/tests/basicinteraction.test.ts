import { test , expect} from '@playwright/test';

test("simple form", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const expectedtext="Test message";
    const inputloct= page.locator('input#user-message');
    console.log("placeholder: "+ await inputloct.getAttribute("placeholder"));
    expect(inputloct).toHaveAttribute("placeholder","Please enter your Message")

//     await page.getByPlaceholder("Please enter your Message").fill(expectedtext);
//     await page.getByRole('button',{name:"Get Checked Value"}).click();
//     await page.waitForTimeout(3000);
//    const actualtext= await page.locator('#message').textContent();
//    console.log("actual text :"+actualtext);
//    expect(actualtext).toBe(expectedtext);



});