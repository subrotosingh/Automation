import { Constants } from "./constants";
export class Utils {
  constructor() {}

  static async manageCookie({ page }) {
    await page
      .frameLocator(Constants.cookieFrame)
      .locator(Constants.textAgree)
      .click();
  }

  static async generateRandomEmail(): Promise<string> {
    let randomString: string = Math.random().toString(36).slice(2, 9);
    return `${randomString} +.gmail.com`;
  }
}
