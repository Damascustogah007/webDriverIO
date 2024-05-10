import HomePage from "../pages/Home-page.js";
import contactUs from "../pages/contact.js";

describe("Contact", () => {
  it("Fill, submit and assert contact form", async () => {
    await HomePage.openURL();

    //Loop through menu and click on contact
    await contactUs.loopThroughMenuAndClickOnContact();

    //Validate contact form page
    await contactUs.validateContact();

    //Scroll to the conform form
    const message = await contactUs.message;
    message.scrollIntoView();

    // fill out form in contact
    await contactUs.fillContactForm();
    
    //Validate the sucess message
    const msg = await contactUs.thankYouMessage.getText();
    await expect(msg).toHaveTextContaining(
      "Thanks for contacting us! We will be in touch with you shortly"
    );
  });
});


// const inputFields = $$('[class="input-text"]');

    // await inputFields[0].setValue("Charles");
    // await inputFields[1].setValue("ijhdvbhfrbkwhb@gmail.com");
    // await inputFields[2].setValue("647390383739");
    // await inputFields[3].setValue("Test");
    // const fieldValues = [
    //   "Charles",
    //   "ijhdvbhfrbkwhb@gmail.com",
    //   "647390383739",
    //   "Test",
    // ];

    // for (let i = 0; i < inputFields.length; i++) {
    //   await inputFields[i].setValue(fieldValues[i]);
    // }