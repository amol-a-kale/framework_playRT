import {Page} from "@playwright/test"

export default class LoginPage{

    constructor( public page :Page) {

    }

    async login(email: string, password: string){
       await this.enterEmail(email);
       await  this.enterPassword(password);
       await  this.clickOnLoginbtn();

    }

    async enterEmail(email : string){
    await this.page.locator("#input-email").fill(email)
    }

    async enterPassword(password: string){
       await this.page.locator("#input-password").fill(password)
    }

    async clickOnLoginbtn(){
       await Promise.all(
            [
                this.page.waitForLoadState(),
                await this.page.click("//input[@value='Login']")
            ]
        )
      
    }
}