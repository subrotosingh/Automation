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
      // Go To Deals --> Click [data-test-id="primary-nav-list"] >> text=Deals
      await page
        .locator('[data-test-id="primary-nav-list"] >> text=Deals')
        .click();
      await expect(page).toHaveURL("https://www.sky.com/deals");
    });

    // Scenario 2: User sees tiles on the shop page
    test("verify the text 'Create your My Sky password' when user try to sign in with invalid credentials", async ({ page }) => {
      // Click [data-test-id="sign-in-link"]
      await Promise.all([
        page.locator('[data-test-id="sign-in-link"]').click(),
        //page.waitForNavigation(/*{ url: 'https://www.sky.com/signin?successUrl=https%3A%2F%2Fwww.sky.com%2F&cancelUrl=https%3A%2F%2Fwww.sky.com%2F' }*/)
      ]);

      await page
        .frameLocator("#sp_message_iframe_474555")
        .locator("text=Agree")
        .click();

      // Click [data-testid="AUTHN__INPUT"]
      // await page.frameLocator('iframe[name="__zoid__sign_in_iframe__eyJ1aWQiOiJ6b2lkLXNpZ24taW4taWZyYW1lLWMwZjQyOWIyYTZfbXRhNm5kaTZtemUiLCJjb250ZXh0IjoiaWZyYW1lIiwidmVyc2lvbiI6IjlfMF8yNyIsImNoaWxkRG9tYWluIjoiaHR0cHM6Ly9hZ2cub29nd2F5LnNreS5jb20iLCJwYXJlbnREb21haW4iOiJodHRwczovL3d3dy5za3kuY29tIiwidGFnIjoic2lnbi1pbi1pZnJhbWUiLCJwYXJlbnQiOnsidHlwZSI6InBhcmVudCIsImRpc3RhbmNlIjowfSwicHJvcHMiOnsidHlwZSI6InJhdyIsInZhbHVlIjoie1wicHJvcG9zaXRpb25cIjpcIlNLWUNPTVwiLFwicHJvdmlkZXJcIjpcIlNLWVwiLFwiZGV2aWNlXCI6XCJDT01QVVRFUlwiLFwicGxhdGZvcm1cIjpcIlBDXCIsXCJ0ZXJyaXRvcnlcIjpcIkdCXCIsXCJvbkF1dGhvcml6ZWRcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcIjczMDc1YjAwZDNfbXRhNm5kaTZtemVcIixcIm5hbWVcIjpcIm9uQXV0aG9yaXplZFwifX0sXCJvbklkcmlzRXJyb3JcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcImIxYjFmMGIwYzRfbXRhNm5kaTZtemVcIixcIm5hbWVcIjpcIm9uSWRyaXNFcnJvclwifX0sXCJzaG93S2VlcE1lU2lnbmVkSW5cIjp0cnVlLFwiZXZlbnRzXCI6e1wib25QYWdlVHJhbnNpdGlvblwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwiZDhmZWU5YzhhOF9tdGE2bmRpNm16ZVwiLFwibmFtZVwiOlwib25QYWdlVHJhbnNpdGlvblwifX0sXCJvbkFjdGlvbkNsaWNrXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCIwNTVlNjg2MzZiX210YTZuZGk2bXplXCIsXCJuYW1lXCI6XCJvbkFjdGlvbkNsaWNrXCJ9fX0sXCJpc0ZyYW1lZFwiOlwidHJ1ZVwiLFwiaHJlZlwiOlwiaHR0cHM6Ly93d3cuc2t5LmNvbS9zaWduaW4\\/c3VjY2Vzc1VybD1odHRwcyUyNTNBJTI1MkYlMjUyRnd3dy5za3kuY29tJTI1MkYmY2FuY2VsVXJsPWh0dHBzJTI1M0ElMjUyRiUyNTJGd3d3LnNreS5jb20lMjUyRlwiLFwibWluaW1hbFByZXNlbnRhdGlvblwiOmZhbHNlLFwib3JpZ2luXCI6XCJodHRwczovL3d3dy5za3kuY29tXCIsXCJjbGllbnRJZFwiOlwiU0tZQ09NXCIsXCJyZWRpcmVjdFVyaVwiOlwiaHR0cHM6Ly9hY2NvdW50cy5za3kuY29tL3NpZ24taW4vZnJhbWUtYXV0aC1kb25lXCIsXCJyZXNwb25zZVR5cGVcIjpcImNvZGVcIixcImxvY2tJZGVudGlmaWVyXCI6ZmFsc2UsXCJjbGllbnRcIjpcImRlZmF1bHRcIn0ifSwiZXhwb3J0cyI6IntcImluaXRcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcIjQ3YjQ0MWUzMmZfbXRhNm5kaTZtemVcIixcIm5hbWVcIjpcInJcIn19LFwiY2xvc2VcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcIjJjNmFmNjUyZjJfbXRhNm5kaTZtemVcIixcIm5hbWVcIjpcImNsb3NlXCJ9fSxcImNoZWNrQ2xvc2VcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcImNiM2FhZTAyNGRfbXRhNm5kaTZtemVcIixcIm5hbWVcIjpcImNoZWNrQ2xvc2VcIn19LFwicmVzaXplXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCI2YzA1NGZjMWUxX210YTZuZGk2bXplXCIsXCJuYW1lXCI6XCJyZXNpemVcIn19LFwib25FcnJvclwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwiZjk2NTRlNjNiNl9tdGE2bmRpNm16ZVwiLFwibmFtZVwiOlwiblwifX19In0\\=__"]').locator('[data-testid="AUTHN__INPUT"]').click();
      await page.waitForTimeout(10000);
      const locator = page
        .frameLocator(
          'iframe[name="__zoid__sign_in_iframe__eyJ1aWQiOiJ6b2lkLXNpZ24taW4taWZyYW1lLWMwZjQyOWIyYTZfbXRhNm5kaTZtemUiLCJjb250ZXh0IjoiaWZyYW1lIiwidmVyc2lvbiI6IjlfMF8yNyIsImNoaWxkRG9tYWluIjoiaHR0cHM6Ly9hZ2cub29nd2F5LnNreS5jb20iLCJwYXJlbnREb21haW4iOiJodHRwczovL3d3dy5za3kuY29tIiwidGFnIjoic2lnbi1pbi1pZnJhbWUiLCJwYXJlbnQiOnsidHlwZSI6InBhcmVudCIsImRpc3RhbmNlIjowfSwicHJvcHMiOnsidHlwZSI6InJhdyIsInZhbHVlIjoie1wicHJvcG9zaXRpb25cIjpcIlNLWUNPTVwiLFwicHJvdmlkZXJcIjpcIlNLWVwiLFwiZGV2aWNlXCI6XCJDT01QVVRFUlwiLFwicGxhdGZvcm1cIjpcIlBDXCIsXCJ0ZXJyaXRvcnlcIjpcIkdCXCIsXCJvbkF1dGhvcml6ZWRcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcIjczMDc1YjAwZDNfbXRhNm5kaTZtemVcIixcIm5hbWVcIjpcIm9uQXV0aG9yaXplZFwifX0sXCJvbklkcmlzRXJyb3JcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcImIxYjFmMGIwYzRfbXRhNm5kaTZtemVcIixcIm5hbWVcIjpcIm9uSWRyaXNFcnJvclwifX0sXCJzaG93S2VlcE1lU2lnbmVkSW5cIjp0cnVlLFwiZXZlbnRzXCI6e1wib25QYWdlVHJhbnNpdGlvblwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwiZDhmZWU5YzhhOF9tdGE2bmRpNm16ZVwiLFwibmFtZVwiOlwib25QYWdlVHJhbnNpdGlvblwifX0sXCJvbkFjdGlvbkNsaWNrXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCIwNTVlNjg2MzZiX210YTZuZGk2bXplXCIsXCJuYW1lXCI6XCJvbkFjdGlvbkNsaWNrXCJ9fX0sXCJpc0ZyYW1lZFwiOlwidHJ1ZVwiLFwiaHJlZlwiOlwiaHR0cHM6Ly93d3cuc2t5LmNvbS9zaWduaW4\\/c3VjY2Vzc1VybD1odHRwcyUyNTNBJTI1MkYlMjUyRnd3dy5za3kuY29tJTI1MkYmY2FuY2VsVXJsPWh0dHBzJTI1M0ElMjUyRiUyNTJGd3d3LnNreS5jb20lMjUyRlwiLFwibWluaW1hbFByZXNlbnRhdGlvblwiOmZhbHNlLFwib3JpZ2luXCI6XCJodHRwczovL3d3dy5za3kuY29tXCIsXCJjbGllbnRJZFwiOlwiU0tZQ09NXCIsXCJyZWRpcmVjdFVyaVwiOlwiaHR0cHM6Ly9hY2NvdW50cy5za3kuY29tL3NpZ24taW4vZnJhbWUtYXV0aC1kb25lXCIsXCJyZXNwb25zZVR5cGVcIjpcImNvZGVcIixcImxvY2tJZGVudGlmaWVyXCI6ZmFsc2UsXCJjbGllbnRcIjpcImRlZmF1bHRcIn0ifSwiZXhwb3J0cyI6IntcImluaXRcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcIjQ3YjQ0MWUzMmZfbXRhNm5kaTZtemVcIixcIm5hbWVcIjpcInJcIn19LFwiY2xvc2VcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcIjJjNmFmNjUyZjJfbXRhNm5kaTZtemVcIixcIm5hbWVcIjpcImNsb3NlXCJ9fSxcImNoZWNrQ2xvc2VcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcImNiM2FhZTAyNGRfbXRhNm5kaTZtemVcIixcIm5hbWVcIjpcImNoZWNrQ2xvc2VcIn19LFwicmVzaXplXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCI2YzA1NGZjMWUxX210YTZuZGk2bXplXCIsXCJuYW1lXCI6XCJyZXNpemVcIn19LFwib25FcnJvclwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwiZjk2NTRlNjNiNl9tdGE2bmRpNm16ZVwiLFwibmFtZVwiOlwiblwifX19In0\\=__"]'
        )
        .locator('[data-testid="AUTHN__INPUT"]');
      console.log("locator------->", locator);
      locator.focus;

      // Fill [data-testid="AUTHN__INPUT"]
      await locator.fill("abcd@gmail.com", { timeout: 100 });
      //fill('abcfff@gamail.com');
      // Click [data-testid="AUTHN__SUBMIT_BTN"]
      await page
        .frameLocator("#9bc38d13b0_mty6mty6ntq")
        .locator('[data-testid="AUTHN__SUBMIT_BTN"]')
        .click();
    });

    // Scenario 3: User sees a list of deals on the deals page
    test("verify list of deals list of deals with a price to it", async ({ page }) => {
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
      ).toHaveText("Now, £26");

      await page.locator("text=Now, £46").click();

      await expect(page.locator("text=Now, £46")).toHaveText("Now, £46");

      await page.locator("text=Now, £38").click();

      await expect(page.locator("text=Now, £38")).toHaveText("Now, £38");
    });
  }
);
