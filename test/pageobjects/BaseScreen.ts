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
        await this.loginNavButton.click();
    }

    async openForms() {
        await this.formsNavButton.click();
    }

    async openHome() {
        await this.homeNavButton.click();
    }
}