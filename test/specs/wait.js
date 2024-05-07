describe("Navigation Menu", () => {
  it("Get the text of all menu items & assert them - using wait command", async () => {
    //Using browser pause command - hardcoded timeout
    // browser.pause(5000);
    browser.url("/");

    const expectedLnks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];

    //Create an empty array to hold all items
    const actualLinks = [];

    //wait for element to be displayed
    // await $('//a[contains(@href, \'#get-started\')]').waitForDisplayed();
    //waitForClickable();
    //waitForExists();
    //waitForEnabled();

    //Wait until element is displayed
    await browser.waitUntil(async () => {
      const acctNav = await $("//a[contains(@href, 'my-account')]").getText();
      return acctNav === 'My account';
    });

    const navLinks = await $$("#zak-primary-menu li[id*=menu]");
    for (const link of navLinks) {
      actualLinks.push(await link.getText());
    }
    await expect(expectedLnks).toEqual(actualLinks);
  });
});
