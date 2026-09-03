import BaseScreen from "./BaseScreen";

class LoginScreen extends BaseScreen {
  get emailInput() {
    return $("~input-email");
  }

  get passwordInput() {
    return $("~input-password");
  }

  get submitButton() {
    return $("~button-LOGIN");
  }

  get errorMessage() {
    return $(
      'android=new UiSelector().textContains("Please enter a valid email address")',
    );
  }

  get successAlertTitle() {
    return $('android=new UiSelector().text("Success")');
  }

  get successAlertButton() {
    return $('android=new UiSelector().text("OK")');
  }

  async login(email: string, pass: string) {
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(pass);
    await this.submitButton.click();
  }

  async dismissAlertIfPresent() {
    try {
      if (await this.successAlertButton.isDisplayed()) {
        await this.successAlertButton.click();
      }
    } catch {      
    }
  }
}

export default new LoginScreen();