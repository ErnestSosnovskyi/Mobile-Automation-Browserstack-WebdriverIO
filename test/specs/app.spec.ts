import LoginScreen from "../pageobjects/LoginScreen";
import FormsScreen from "../pageobjects/FormsScreen";
import { CREDENTIALS, FORM_DATA } from "../data/testData";

describe("Mobile Native App Testing Suite", () => {
  it("1. Should login successfully with valid credentials", async () => {
    await LoginScreen.openLogin();
    await LoginScreen.login(CREDENTIALS.validUser.email, CREDENTIALS.validUser.password);
    await LoginScreen.successAlertTitle.waitForDisplayed({ timeout: 15000 });
    await expect(LoginScreen.successAlertTitle).toHaveText("Success");
    await LoginScreen.successAlertButton.click();
  });

  it("2. Should show error message on invalid email or password format", async () => {
    await LoginScreen.openLogin();
    await LoginScreen.login(CREDENTIALS.invalidUser.email, CREDENTIALS.invalidUser.password);
    await LoginScreen.errorMessage.waitForDisplayed({ timeout: 10000 });
    await expect(LoginScreen.errorMessage).toHaveText(
      "Please enter a valid email address",
    );
  });

  it("3. Should display typed text in the result field", async () => {
    await FormsScreen.openForms();
    await FormsScreen.enterText(FORM_DATA.sampleText);

    await FormsScreen.textResult.waitForDisplayed({ timeout: 10000 });
    await expect(FormsScreen.textResult).toHaveText(FORM_DATA.sampleText);
  });

  it("4. Should toggle switch state and update label", async () => {
    await FormsScreen.openForms();
    await FormsScreen.toggleSwitch();

    await FormsScreen.switchText.waitForDisplayed({ timeout: 10000 });
    await expect(FormsScreen.switchText).toHaveText(
      "Click to turn the switch OFF",
    );
  });

  it("5. Should open dropdown and select an item", async () => {
    await FormsScreen.openForms();
    await FormsScreen.selectOption();

    const dropdownValue = await $(
      '//android.view.ViewGroup[@content-desc="Dropdown"]//android.widget.EditText',
    );
    await dropdownValue.waitForDisplayed({ timeout: 10000 });
    await expect(dropdownValue).toHaveText(FORM_DATA.dropdownOption);
  });
});
