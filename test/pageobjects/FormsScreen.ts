import BaseScreen from "./BaseScreen";

class FormsScreen extends BaseScreen {
  get textInput() {
    return $("~text-input");
  }

  get textResult() {
    return $("~input-text-result");
  }

  get switchButton() {
    return $("~switch");
  }

  get switchText() {
    return $("~switch-text");
  }

  get dropdown() {
    return $("~Dropdown");
  }

  get dropdownOption() {
    return $('//*[@text="webdriver.io is awesome"]');
  }

  async enterText(text: string) {
    await this.textInput.waitForDisplayed({ timeout: 10000 });
    await this.textInput.setValue(text);
  }

  async toggleSwitch() {
    await this.switchButton.waitForDisplayed({ timeout: 10000 });
    await this.switchButton.click();
  }

  async selectOption() {
    await this.dropdown.waitForDisplayed({ timeout: 10000 });
    await this.dropdown.click();
    await this.dropdownOption.waitForDisplayed({ timeout: 10000 });
    await this.dropdownOption.click();
  }
}

export default new FormsScreen();