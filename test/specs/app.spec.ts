import LoginScreen from "../pageobjects/LoginScreen";
import FormsScreen from "../pageobjects/FormsScreen";
import { CREDENTIALS, FORM_DATA } from "../data/testData";

describe("Mobile Native App Testing Suite", () => {
  afterEach(async () => {
    await LoginScreen.dismissAlertIfPresent();
  });

  it("1. Should login successfully with valid credentials", async () => {
    await LoginScreen.openLogin();
    await LoginScreen.login(CREDENTIALS.validUser.email, CREDENTIALS.validUser.password);
    await expect(LoginScreen.successAlertTitle).toBeDisplayed();
    await expect(LoginScreen.successAlertTitle).toHaveText("Success");
    await LoginScreen.successAlertButton.click();
  });

  it("2. Should show error message on invalid email or password format", async () => {
    await LoginScreen.openLogin();
    await LoginScreen.login(CREDENTIALS.invalidUser.email, CREDENTIALS.invalidUser.password);
    await expect(LoginScreen.errorMessage).toBeDisplayed();
    await expect(LoginScreen.errorMessage).toHaveText(
      "Please enter a valid email address",
    );
  });

  it("3. Should display typed text in the result field", async () => {
    await FormsScreen.openForms();
    await FormsScreen.enterText(FORM_DATA.sampleText);

    await expect(FormsScreen.textResult).toBeDisplayed();
    await expect(FormsScreen.textResult).toHaveText(FORM_DATA.sampleText);
  });

  it("4. Should toggle switch state and update label", async () => {
    await FormsScreen.openForms();
    await FormsScreen.toggleSwitch();

    await expect(FormsScreen.switchText).toHaveText(
      "Click to turn the switch OFF",
    );
  });

  it("5. Should open dropdown and select an item", async () => {
    await FormsScreen.openForms();
    await FormsScreen.selectOption();

    await expect(FormsScreen.dropdownSelectedValue).toBeDisplayed();
    await expect(FormsScreen.dropdownSelectedValue).toHaveText(
      FORM_DATA.dropdownOption,
    );
  });
});
