import path from 'path';
import { fileURLToPath } from "url";

describe("Upload Test", () => {
    //works for Firfox upload
  it("should upload a file", async () => {
    await browser.url("https://the-internet.herokuapp.com/upload");

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // Convert a relative path to an absolute path
    const filePath = path.resolve(
      __dirname,
      "../data/Procura_BowelChartEntry.pcf"
    );
    console.log(filePath);

    const input = await $('//input[@id="file-upload"]');
    await input.setValue(filePath);

    await $("#file-submit").click();

    // wait for upload page to finish loading
    await browser.waitUntil(async () => {
      const uploadResult = await $('//div[@id="uploaded-files"]').getText();
      return uploadResult === "Procura_BowelChartEntry.pcf";
    });

    const uploaded = await $("//h3[contains(text(), 'File Uploaded!')]");
    await expect(uploaded).toBeDisplayed();
    await browser.pause(10000);


    //for chrome browsers
    // await browser.url("https://the-internet.herokuapp.com/upload");

    //store test file
    // const filePath = path.join(__dirname, "../data/Procura_BowelChartEntry.pcf");

    //Upload test file
    // const remoteFilePath = await browser.uploadFile(filePath);
    // await $('#file-upload').setValue(remoteFilePath);
    // await $('#file-submit').click();

    // const uploaded = await $("//h3[contains(text(), 'File Uploaded!')]");
    // await expect(uploaded).toBeDisplayed();
    // await browser.pause(10000);
  });
});
