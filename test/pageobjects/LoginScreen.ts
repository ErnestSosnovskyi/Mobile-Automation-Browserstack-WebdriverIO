import BaseScreen from "./BaseScreen";

class LoginScreen extends BaseScreen {
    get emailInput() {
        return $('~input-email');
    }

    get passwordInput() {
        return $('~input-password');
    }

    get submitButton() {
        return $('~button-LOGIN');
    }

    get errorMessage() {
        return $(
          '//android.widget.TextView[contains(@text, "Please enter a valid email address")]',
        );
    }

    get successAlertTitle() {
        return $(
          '//*[@resource-id="android:id/alertTitle" or @text="Success"]',
        );
    }

    get successAlertButton() {
        return $('//*[@resource-id="android:id/button1" or @text="OK"]');
    }

    async login(email: string, pass: string) {
        await this.emailInput.waitForDisplayed({ timeout: 10000 });
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(pass);
        await this.submitButton.click();
    }
}

export default new LoginScreen();