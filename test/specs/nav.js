describe("Navigation Menu", () => {
  it("Get the text of all menu items & assert them", async () => {
    await browser.url("/");

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

    //Note that id* means element starting with menu
    // const navLinks = await $("#zak-primary-menu").$$("li[id*=menu]");
    const navLinks = await $$("#zak-primary-menu li[id*=menu]");

    //Loop through each link and get the text and push them to the actualLinks array
    for (const link of navLinks) {
      actualLinks.push(await link.getText());
    }
    await expect(expectedLnks).toEqual(actualLinks);
  });
});
