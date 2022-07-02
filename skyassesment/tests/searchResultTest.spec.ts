import { test, expect } from "@playwright/test";

test.describe(
  "This feature will make the search show the results that are determined by editorial, as well as generic searches.",
  () => {
    // Add 'beforeEach' hook to run it before each 'test'
    test.beforeEach(async ({ page }) => {
      await page.goto("https://www.sky.com/");
      await page
        .frameLocator("#sp_message_iframe_474555")
        .locator("text=Agree")
        .click();
    });

    // Scenario: User navigates to shop page
    test("verify search bar on the home page", async ({ page }) => {
      // go to search icon on the right upper corner of the home page and click
      await page
        .locator('[data-test-id="masthead-search-toggle-button"]')
        .click();
      
      // search input box will appear 
      await page.locator('[data-test-id="input-box"]').click();
      
      // fill the word "sky" in the search input box
      await page.locator('[data-test-id="input-box"]').fill("sky");

      // wait till the search results are displayed
      await page.waitForTimeout(5000);
      
      // Click [aria-label="Section containing links to Help articles \& guides"] div:has-text("Help articles & guides (view all)")
      await page
        .locator(
          '[aria-label="Section containing links to Help articles \\& guides"] div:has-text("Help articles & guides (view all)")'
        ).screenshot();
    });

  }
);
