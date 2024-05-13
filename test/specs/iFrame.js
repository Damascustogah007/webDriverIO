//Customizing the allure reporter by adding feature and critical section
import allureReporter from '@wdio/allure-reporter'

describe('Iframe', () => {
    it('working with iframe', async() => {
        allureReporter.addFeature('Iframe')
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
        allureReporter.addSeverity('Critical');
        await expect($('//h1[contains(text(), \'IFrame Sample\')]')).toBeDisplayed();
    });
});