describe("Blog post", () => {
  beforeEach(async () => {
    //navigate to the site
    browser.url("/");
  });

  it("Navigate and assert the number of recent post", async () => {
    //Click on blog in the navigation bar
    const navigationList = await $$("#zak-primary-nav li");
    for (const listItems of navigationList) {
      const item = await listItems.getText();
      if (item === "Blog") {
        await listItems.click();
      }
    }
    const posts = await $$("#recent-posts-3 li");
    await expect(posts).toBeElementsArrayOfSize(5);
    for (const item of posts) {
      const text = await item.getText();
      await expect(text.length).toBeGreaterThan(10);
    }
  });
});
