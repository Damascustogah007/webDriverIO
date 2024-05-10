import HomePage from '../pages/Home-page.js';

describe("Home", () => {
    it("Open and assert home page", async () => {
          //Open URL
          await HomePage.openURL();

      //Assert home page
      await expect(browser).toHaveTitle(
        "Practice E-Commerce Site – SDET Unicorns"
      );
    });
  
    it("Open and assert about page", async () => {
      //Open URL
      await browser.url("https://practice.sdetunicorns.com/about/");
  
      //Assert about page
      await expect(browser).toHaveUrl("https://practice.sdetunicorns.com/about/");
    });
  
    it("Click get started btn & assert url contains get-started", async () => {
      await HomePage.openURL();
      await HomePage.btnGetStarted.click();
      await expect(browser).toHaveUrlContaining("get-started");
    });
  
    it("Navigate to home page and assert get-started not visible", async () => {
      await browser.url("https://practice.sdetunicorns.com/#get-started");
      //Using x-path
      await HomePage.imageLogo.click();
      await expect(browser).not.toHaveUrlContaining("get-started");
    });

  });