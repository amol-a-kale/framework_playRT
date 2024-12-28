import { chromium, test as baseTest } from "@playwright/test";
import RegisterPage from "../pages/registerPage"
import LoginPage from "../pages/loginPage"

type pages = {
    registerPage: RegisterPage;
    loginPage: LoginPage
}

const testpages =baseTest.extend<pages> ({
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    }

})

export const test =testpages; 
export const expect=testpages.expect;


