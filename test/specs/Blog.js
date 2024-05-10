import HomePage from "../pages/Home-page.js";
import blogPost from "../pages/blog-page.js";

describe("Blog post", () => {
  beforeEach(async () => {
    //navigate to the site
    HomePage.openURL();
  });

  it("Navigate and assert the number of recent post", async () => {
    //Click on blog in the navigation bar
    await blogPost.loopThroughMenuAndClickOnBlog();
    await blogPost.assertEachPostItem();
  });
});
