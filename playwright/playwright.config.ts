import type { PlaywrightTestConfig } from "@playwright/test";
const config : PlaywrightTestConfig ={
      testMatch:["pomTest/ecommerce.test.ts"],
  use: {
   baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
   headless:false,
   
   screenshot: "only-on-failure",
   video: "retain-on-failure",
   launchOptions:{
    // slowMo:1000
   }
  },

   retries: 0,
  reporter: [["dot"],["json",{
    outputFile: "jsonReports/jsonReport.json"
  }], ["html",{
    open:"never"
  }]]
  
};
export default config;
