import {test} from "@playwright/test"

test("handle single tab", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

   const [newWindows]= await Promise.all([
     page.waitForEvent("popup"),
     page.click("'Follow On Twitter'")

    ])
    console.log(newWindows.url())
})

test.only("handle multiple  tab", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

   const [multipage]= await Promise.all([
     page.waitForEvent("popup"),
     page.click("#followboth")

    ])
    await multipage.waitForLoadState();
    const pages=multipage.context().pages();
    console.log('No of tabs : '+pages.length);
    pages.forEach(tab => {
        console.log(tab.url());
    })

    let facebookPage;

    for(let index=0; index <pages.length; index++){
        const url =pages[index].url()
        if(url == "https://www.facebook.com/lambdatest/")
        {
            facebookPage =pages[index]
        }
    }
    const text = await facebookPage.textContent("//h1")
    console.log(text)


})