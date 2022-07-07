import { Constants } from "../utility/constants";

export class HomePage {
  constructor() {
  }
  static SEARCH_TEXT = "sky";
  async verifySearchNavigation({ page }) {
    // go to search icon on the right upper corner of the home page and click
    await page
      .locator(Constants.searchBar)
      .click();
    // search input box will appear
    await page.locator(Constants.searchInputBox).click();

    // fill the word "sky" in the search input box
    await page.locator(Constants.searchInputBox).fill(HomePage.SEARCH_TEXT);

    // wait till the search results are displayed
    await page.waitForTimeout(5000);
  }
}
