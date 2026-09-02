export default class BaseScreen {
    get loginNavButton() {
        return $('~Login');
    }

    get formsNavButton() {
        return $('~Forms');
    }

    get homeNavButton() {
        return $('~Home');
    }

    async openLogin() {
        await this.loginNavButton.waitForDisplayed({ timeout: 10000 });
        await this.loginNavButton.click();
    }

    async openForms() {
        await this.formsNavButton.waitForDisplayed({ timeout: 10000 });
        await this.formsNavButton.click();
    }

    async openHome() {
        await this.homeNavButton.waitForDisplayed({ timeout: 10000 });
        await this.homeNavButton.click();
    }
}