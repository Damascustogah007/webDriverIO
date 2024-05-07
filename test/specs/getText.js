describe("getText", () => {
    it("Finding heading element and assert the text", async () => {
        await browser.url("https://practice.sdetunicorns.com/");
        //Finding heading element
        const headingEl = await $(".elementor-widget-container h1");
        //Get text from an element
        const headingText = await headingEl.getText();
        //Assert the text (2 ways)
        // await expect(headingText).toEqual("Think different. Make different.");
        await expect(headingEl).toHaveText(headingText);
      });
    });