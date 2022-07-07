import { test, expect } from "@playwright/test";
import { Utils } from "../utility/utils";
import { Deals } from "../pages/deals";
import { Constants } from "../utility/constants";

//This feature will make sure that the shop page is navigable and usable.
test.describe(
  "This feature will make sure that the shop page is navigable and usable.",
  () => {
    // Add 'beforeEach' hook to run it before each 'test'
    test.beforeEach(async ({ page }) => {
      await page.goto(Constants.mainUrl);
      await Utils.manageCookie({ page });
    });

    // Scenario 1: User navigates to shop page
    test("verify the navigation on Deals page", async ({ page }) => {
      await new Deals().verifyDealsPageNavigation({ page });
    });

    // Scenario 2: User sees tiles on the shop page
    test("verify the text 'Create your My Sky password' when user try to sign in with invalid credentials", async ({
      page,
    }) => {
      await new Deals().verifySignInWithInvalidCredentials({ page });
    });

    // Scenario 3: User sees a list of deals on the deals page
    test("verify list of deals list of deals with a price to it", async ({
      page,
    }) => {
      await new Deals().verifyListOfDeals({ page });
    });
  }
);
