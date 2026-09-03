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
    return $('android=new UiSelector().text("webdriver.io is awesome")');
  }

  get dropdownSelectedValue() {
    return $(
      'android=new UiSelector().description("Dropdown").childSelector(new UiSelector().className("android.widget.EditText"))',
    );
  }

  async enterText(text: string) {
    await this.textInput.setValue(text);
  }

  async toggleSwitch() {
    await this.switchButton.click();
  }

  async selectOption() {
    await this.dropdown.click();
    await this.dropdownOption.click();
  }
}

export default new FormsScreen();