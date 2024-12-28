import {Page} from "@playwright/test"

export default class RegisterPage {

    constructor(public page:Page){}

    async enterFirstName(firstName : string) {
      await this.page.locator("#input-firstname").fill(firstName)
    }

    async enterLastName (lastName: string){
        await this.page.locator("#input-lastname").fill(lastName)
    }

    async enterEmail (mail: string){
        await this.page.locator("#input-email").fill(mail)
    }

    async enterTelephone (phone : string) {
        await this.page.locator("#input-telephone").fill(phone)

    }

    async enterpassword (password : string){
        await this.page.locator("#input-password").fill(password)
    }

    async enterConfirmPassword (password : string){
        await this.page.locator("#input-confirm").fill(password)
    }

    isSubscribeChecked(){
        return this.page.locator("input-newsletter-no")
    }

    async clickTermandConditon(){
        await this.page.click("//label[@for='input-agree']")
    }

    // async clickonContinueBtn() {
    //     await Promise.all([
    //       this.page.waitForNavigation({ waitUntil: 'networkidle' }),
    //       this.page.click("//input[@value='Continue']")
    //     ]);
    //   }

      async clickonContinueBtn() {
        await this.page.click("//input[@value='Continue']");
        await this.page.waitForLoadState('networkidle');
      }
      
    //   async clickonContinueBtn() {
    //     await Promise.all([
    //       this.page.waitForLoadState('networkidle'),
    //       this.page.click("//input[@value='Continue']")
    //     ]);
    //   }
      
}