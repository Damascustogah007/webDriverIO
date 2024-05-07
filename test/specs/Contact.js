describe("Contact", () => {
  it("Fill, submit and assert contact form", async () => {
    await browser.url("/");

    //Loop through menu and click on contact
    const navigationList = await $$("#zak-primary-nav li");

    for (const listItem of navigationList) {
      const text = await listItem.getText();
      if (text === "Contact") {
        await listItem.click();
        break; // Since we found and clicked the "Contact" item, no need to continue the loop
      }
    }

    //Validate contact form page
    await expect(browser).toHaveTitleContaining("Contact");
    await expect(browser).toHaveUrlContaining("contact");

    //Scroll to the conform form
    const message = await $("//h3[contains(text(),'Send Us Message')]");
    message.scrollIntoView();

    // fill out form in contact
    const inputFields = $$('[class="input-text"]');

     await inputFields[0].setValue("Charles");
     await inputFields[1].setValue("ijhdvbhfrbkwhb@gmail.com");
     await inputFields[2].setValue("647390383739");
     await inputFields[3].setValue("Test");
    // const fieldValues = [
    //   "Charles",
    //   "ijhdvbhfrbkwhb@gmail.com",
    //   "647390383739",
    //   "Test",
    // ];

    // for (let i = 0; i < inputFields.length; i++) {
    //   await inputFields[i].setValue(fieldValues[i]);
    // }

    await $("button[type='submit']").click();

    //Validate the sucess message
    const msg = await $(
      "//div[contains(text(),'Thanks for contacting us! We will be in touch with')]"
    ).getText();
    await expect(msg).toHaveTextContaining('Thanks for contacting us! We will be in touch with you shortly');
  });
});
