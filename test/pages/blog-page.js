import HomePage from "./Home-page.js";

class blogPost {
  get navMenuList() {
    return $$("#zak-primary-nav li");
  }
  get post() {
    return $$("#recent-posts-3 li");
  }

  loopThroughMenuAndClickOnBlog = async () => {
    const navigationList = await this.navMenuList;
    for (const listItems of navigationList) {
      const item = await listItems.getText();
      if (item === "Blog") {
        await listItems.click();
      }
    }
  };

  assertEachPostItem = async () => {
    const posts = await this.post;
    await expect(posts).toBeElementsArrayOfSize(5);
    for (const item of posts) {
      const text = await item.getText();
      await expect(text.length).toBeGreaterThan(10);
    }
  };
}

export default new blogPost();
