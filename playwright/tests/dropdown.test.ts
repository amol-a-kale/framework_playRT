import {test} from "@playwright/test"

// test("dropdown test case", async({page}) =>{
//     await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
//     page.selectOption("#select-demo", {
//         // label:"Monday",
//         // value:"Monday"
//         index : 2
//     })
// })


test("dropdown multiple value", async({page}) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
    page.selectOption("#multi-select", [{
        // label:"New York",
        // // value:"Monday"
        // index : 2
    },
    {
         label:"Pennsylvania",
        // value:"Monday"
        // index : 2
    }])
})

test.only("jquery dropdown", async({page}) =>{
   await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo") ;
  await page.click("#country+span");
  await page.locator("ul#select2-country-results").locator("li",{
    hasText:"India"
  }).click()

  await page.waitForTimeout(1000)
})

