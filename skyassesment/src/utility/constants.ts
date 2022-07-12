export class Constants {
  static mainUrl: string = "https://www.sky.com/";

  static cookieFrame: string = "#sp_message_iframe_474555";

  static textAgree: string = "text=Agree";

  static searchBar: string = "[data-test-id='masthead-search-toggle-button']";

  static searchInputBox: string = "[data-test-id='input-box']";

  static dealsLocator: string =
    '[data-test-id="primary-nav-list"] >> text=Deals';

  static dealsUrl: string = "https://www.sky.com/deals";

  static skyQUrl: string = "https://www.sky.com/deals/sky-q";

  static skyQButton: string = '#root button:has-text("Sky Q")';

  static tileTextOne: string =
    "#deal-sky-q-sky-tv-and-netflix >> text=Now, £26";

  static expectedTileTextOne: string = "£26";

  static tileTextTwo: string = "text=Now, £46";

  static expectedTileTextTwo: string = "£46";

  static tileTextThree: string = "text=Now, £38";

  static expectedTileTextThree: string = "£38";

  static signInLinkId: string = '[data-test-id="sign-in-link"]';

  static signInUrl: string =
    "https://accounts.sky.com/sign-in/identifier?redirect_uri=https%3A%2F%2Faccounts.sky.com%2Fsign-in%2Fframe-auth-done&platform=PC&territory=GB&origin=https%3A%2F%2Fwww.sky.com&isFramed=true&response_type=code&provider=SKY&device=COMPUTER&client_id=SKYCOM&proposition=SKYCOM&showKeepMeSignedIn=true&provider=sky&territory=gb&proposition=sky&successUrl=https%3A%2F%2Fagg.oogway.sky.com%2Fidris%2Foauth%2Fauthorize%3Fredirect_uri%3Dhttps%253A%252F%252Faccounts.sky.com%252Fsign-in%252Fframe-auth-done%26platform%3DPC%26territory%3DGB%26origin%3Dhttps%253A%252F%252Fwww.sky.com%26isFramed%3Dtrue%26response_type%3Dcode%26provider%3DSKY%26device%3DCOMPUTER%26client_id%3DSKYCOM%26proposition%3DSKYCOM%26showKeepMeSignedIn%3Dtrue";

  static signInInputBox: string = '//input[@id="username"]';

  static continueButton: string =
    '//button[@aria-label="Identifier Submit Button"]';

  static errorDescSpan: string = '//span[@id="error-desc"]';

  static headerOne: string = "h1";

  static createPasswordTitle: string = 'h1:has-text("Create your My Sky password")';

  static createMyPasswordText: string = "Create your My Sky password";
}
