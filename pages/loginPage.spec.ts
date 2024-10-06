/* 
install playwright -> npm install -D @playwright/test@latest
run the test       -> npx playwright test loginPage.spec.ts
*/

import {test, chromium, expect} from "@playwright/test"
test(`Test to launch Salesforce page and login with valid credentials`,async () => {
    
    const browser = await chromium.launch({headless:false, channel:'chromium'});
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://login.salesforce.com/");     // launch the application in chrome 
    console.log(page.url);   
    await page.locator("[name='username']").fill("Thanmayi321@gmail.com");  // Enter credentials
    await page.locator("[name='pw']").fill("Playwright@2024");
    await page.locator("[name='Login']").click();
    await page.waitForTimeout(10000);
    await expect(page).toHaveTitle("Setup"); //Verify if the home page is displayed
    await page.waitForTimeout(1000);

})