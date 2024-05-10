import navComponent from "./components/nav-comp.js";

class HomePage {
  
  openURL() {
    return browser.url("/");
  }

  get btnGetStarted() {
    return $("#get-started");
  }

  get imageLogo() {
    return $('//img[@alt="Practice E-Commerce Site"]');
  }

  get navigationComponent() {
    return navComponent;
  }
}

export default new HomePage();
