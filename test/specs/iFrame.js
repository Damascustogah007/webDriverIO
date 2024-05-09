describe('Iframe', () => {
    it('working with iframe', async() => {
        //Open URL
        await browser.url('https://practice.sdetunicorns.com/iframe-sample/');

        //Access the Iframe
        const iframe = await $('//iframe[@name="advanced_iframe"]')
        await browser.switchToFrame(iframe);

        //Verify logo exists
        await expect ($('//div[@class="hfe-site-logo"] ')).toExist();

        //Switch back to parent site
        await browser.switchToParentFrame();

        //Verify the iframe sample is displayed
        await expect($('//h1[contains(text(), \'IFrame Sample\')]')).toBeDisplayed();
    });
});