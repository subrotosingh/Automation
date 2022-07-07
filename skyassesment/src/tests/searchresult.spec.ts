import { test, expect } from "@playwright/test";
import { Utils } from "../utility/utils";
import { HomePage } from "../pages/home";
import { Constants } from "../utility/constants";

test.describe(
  "This feature will make the search show the results that are determined by editorial, as well as generic searches.",
  () => {
    // Add 'beforeEach' hook to run it before each 'test'
    test.beforeEach(async ({ page }) => {
      await page.goto(Constants.mainUrl);
      await Utils.manageCookie({page});
    });

    // Scenario: User navigates to shop page
    test("verify search bar on the home page", async ({ page }) => {
      await new HomePage().verifySearchNavigation({page})
    });

  }
);
