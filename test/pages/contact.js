class contactUs {
  get navMenuList() {
    return $$("#zak-primary-nav li");
  }

  get message() {
    return $("//h3[contains(text(),'Send Us Message')]");
  }

  get nameField() {
    return $$('//input[@id=\'evf-277-field_ys0GeZISRs-1\']');
  }

  get emailField() {
    return $$('//input[@id=\'evf-277-field_LbH5NxasXM-2\']');
  }

  get phoneField() {
    return $$('//input[@id=\'evf-277-field_LbH5NxasXM-2\']');
  }

  get textArea() {
    return $('//textarea[@id=\'evf-277-field_yhGx3FOwr2-4\']');
  }

  get submitButton() {
    return $("button[type='submit']");
  }

  get thankYouMessage() {
    return $(
      "//div[contains(text(),'Thanks for contacting us! We will be in touch with')]"
    );
  }

  loopThroughMenuAndClickOnContact = async () => {
    const navigationList = await this.navMenuList;
    for (const listItem of navigationList) {
      const text = await listItem.getText();
      if (text === "Contact") {
        await listItem.click();
        break; // Since we found and clicked the "Contact" item, no need to continue the loop
      }
    }
  };

  validateContact = async () => {
    await expect(browser).toHaveTitleContaining("Contact");
    await expect(browser).toHaveUrlContaining("contact");
  };

  fillContactForm = async () => {

    await this.nameField.setValue("Charles");
    await this.emailField.setValue("ijhdvbhfrbkwhb@gmail.com");
    await this.phoneField.setValue("647390383739");
    await this.textArea.setValue("Test");
    await this.submitButton.click();
  };
}

export default new contactUs();
