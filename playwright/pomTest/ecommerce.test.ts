import { expect } from "@playwright/test";
import { test } from "../base/fixture";
import * as data from "../test-data/commontest-data.json"
// use for run in particular browser
// test.use({
//     browserName : "firefox"
    
// })
test.describe("ecommerce test cases", async() =>{
    test("Register new user tc_001 ", async({page, baseURL, registerPage })=>{
        await page.goto(`${baseURL}route=account/register`);
        await registerPage.enterFirstName(data.email);
        await registerPage.enterLastName(data.lastname);
        await registerPage.enterEmail(data.email);
        await registerPage.enterTelephone(data.phone_number);
        await registerPage.enterpassword(data.password);
        await registerPage.enterConfirmPassword(data.password);
        await registerPage.isSubscribeChecked();
        await registerPage.clickTermandConditon();
        await registerPage.clickonContinueBtn()

    })

    test("login into application tc_002", async({page, baseURL, loginPage })=>{
        await page.goto(`${baseURL}route=account/login`);
        await loginPage.login(data.email, data.password);
        expect(await page.title()).toBe("My Account");


    })

})
