import { expect } from "@playwright/test";
import { Constants } from "../utility/constants";
import { Utils } from "../utility/utils";

export class Deals {
  constructor() {}

  async verifyDealsPageNavigation({ page }) {
    // Go To Deals
    await page.locator(Constants.dealsLocator).click();
    // check the url "https://www.sky.com/deals"
    await expect(page).toHaveURL(Constants.dealsUrl);
  }

  async verifyListOfDeals({ page }) {
    await page.locator(Constants.dealsLocator).click();
    await expect(page).toHaveURL(Constants.dealsUrl);

    await Utils.manageCookie({ page });

    await page.locator(Constants.skyQButton).click();
    await expect(page).toHaveURL(Constants.skyQUrl);

    await page.locator(Constants.tileTextOne).click();

    await expect(page.locator(Constants.tileTextOne)).toContainText(
      Constants.expectedTileTextOne
    );

    await page.locator(Constants.tileTextTwo).click();

    await expect(page.locator(Constants.tileTextTwo)).toContainText(
      Constants.expectedTileTextTwo
    );

    await page.locator(Constants.tileTextThree).click();

    await expect(page.locator(Constants.tileTextThree)).toContainText(
      Constants.expectedTileTextThree
    );
  }

  async verifySignInWithInvalidCredentials({ page }) {
    // Click on SignIN link
    await Promise.all([
      page.locator(Constants.signInLinkId).click(),
      page.waitForNavigation(/*{ url: 'https://www.sky.com/signin?successUrl=https%3A%2F%2Fwww.sky.com%2F&cancelUrl=https%3A%2F%2Fwww.sky.com%2F' }*/),
    ]);
    await Utils.manageCookie({ page });
    const iFrame = page.frame({ url: Constants.signInUrl });
    const signInputBox = await iFrame?.$(Constants.signInInputBox);
    await signInputBox?.fill(await Utils.generateRandomEmail());
    const submitButton = await iFrame?.$(Constants.continueButton);
    await submitButton?.click({ timeout: 1000 });
    await iFrame?.waitForTimeout(5000);
    const error = await iFrame?.$(Constants.errorDescSpan);
    const heading = await iFrame?.$(Constants.headerOne);
    expect(heading).toBe(Constants.createMyPasswordText);

    /* if(error === null){
        const heading = await iFrame?.$('h1');
        expect(heading).toBe("Create your My Sky password");
      }else{
        throw new Error("Please carefully check your details. If this problem continues, contact customer service.");
      } */
  }
}
