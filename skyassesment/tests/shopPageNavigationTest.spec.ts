import { test, expect } from "@playwright/test";
//This feature will make sure that the shop page is navigable and usable.
test.describe(
  "This feature will make sure that the shop page is navigable and usable.",
  () => {
    // Add 'beforeEach' hook to run it before each 'test'
    test.beforeEach(async ({ page }) => {
      await page.goto("https://www.sky.com/");
      await page
        .frameLocator("#sp_message_iframe_474555")
        .locator("text=Agree")
        .click();
    });

    // Scenario 1: User navigates to shop page
    test("verify the navigation on Deals page", async ({ page }) => {
      // Go To Deals
      await page
        .locator('[data-test-id="primary-nav-list"] >> text=Deals')
        .click();
      // check the url "https://www.sky.com/deals"
      await expect(page).toHaveURL("https://www.sky.com/deals");
    });

    // Scenario 2: User sees tiles on the shop page
    test("verify the text 'Create your My Sky password' when user try to sign in with invalid credentials", async ({
      page,
    }) => {
      // Click on SignIN link
      await Promise.all([
        page.locator('[data-test-id="sign-in-link"]').click(),
        page.waitForNavigation(/*{ url: 'https://www.sky.com/signin?successUrl=https%3A%2F%2Fwww.sky.com%2F&cancelUrl=https%3A%2F%2Fwww.sky.com%2F' }*/),
      ]);

      await page
        .frameLocator("#sp_message_iframe_474555")
        .locator("text=Agree")
        .click();

      const iFrame = page.frame({url: "https://accounts.sky.com/sign-in/identifier?redirect_uri=https%3A%2F%2Faccounts.sky.com%2Fsign-in%2Fframe-auth-done&platform=PC&territory=GB&origin=https%3A%2F%2Fwww.sky.com&isFramed=true&response_type=code&provider=SKY&device=COMPUTER&client_id=SKYCOM&proposition=SKYCOM&showKeepMeSignedIn=true&provider=sky&territory=gb&proposition=sky&successUrl=https%3A%2F%2Fagg.oogway.sky.com%2Fidris%2Foauth%2Fauthorize%3Fredirect_uri%3Dhttps%253A%252F%252Faccounts.sky.com%252Fsign-in%252Fframe-auth-done%26platform%3DPC%26territory%3DGB%26origin%3Dhttps%253A%252F%252Fwww.sky.com%26isFramed%3Dtrue%26response_type%3Dcode%26provider%3DSKY%26device%3DCOMPUTER%26client_id%3DSKYCOM%26proposition%3DSKYCOM%26showKeepMeSignedIn%3Dtrue"});
       
      const signInputBox = await iFrame?.$('//input[@id="username"]');

      let email: string = Math.random().toString(36).slice(2, 9);

      await signInputBox?.fill(email + "@gmail.com");

      const submitButton = await iFrame?.$('//button[@aria-label="Identifier Submit Button"]');
      await submitButton?.click({timeout: 1000});

      await iFrame?.waitForTimeout(5000);

      const error = await iFrame?.$('//span[@id="error-desc"]');
      const heading = await iFrame?.$('h1');
      expect(heading).toBe("Create your My Sky password");

      /* if(error === null){
        const heading = await iFrame?.$('h1');
        expect(heading).toBe("Create your My Sky password");
      }else{
        throw new Error("Please carefully check your details. If this problem continues, contact customer service.");
      } */

    });

    // Scenario 3: User sees a list of deals on the deals page
    test("verify list of deals list of deals with a price to it", async ({
      page,
    }) => {
      await page
        .locator('[data-test-id="primary-nav-list"] >> text=Deals')
        .click();
      await expect(page).toHaveURL("https://www.sky.com/deals");

      await page
        .frameLocator("#sp_message_iframe_474555")
        .locator("text=Agree")
        .click();

      await page.locator('#root button:has-text("Sky Q")').click();
      await expect(page).toHaveURL("https://www.sky.com/deals/sky-q");

      await page
        .locator("#deal-sky-q-sky-tv-and-netflix >> text=Now, £26")
        .click();

      await expect(
        page.locator("#deal-sky-q-sky-tv-and-netflix >> text=Now, £26")
      ).toContainText("£26");

      await page.locator("text=Now, £46").click();

      await expect(page.locator("text=Now, £46")).toContainText("£46");

      await page.locator("text=Now, £38").click();

      await expect(page.locator("text=Now, £38")).toContainText("£38");
    });
  }
);
