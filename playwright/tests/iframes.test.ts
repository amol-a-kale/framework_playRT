import {test} from "@playwright/test"
test("iframe", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/iframe-demo/");
    const allframes = page.frames();
    console.log(allframes.length)
    const myFrame =page.frame("#iFrame1");
    await myFrame?.fill("input[placeholder='Your content.']", "Amol");
    // await myframe?.fill("Your content.", "Amol")
    await page.waitForTimeout(10000)

})