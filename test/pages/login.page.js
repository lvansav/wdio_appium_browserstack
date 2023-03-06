import { Page } from "./page.js";


const signUpTab = '//*[@content-desc="button-sign-up-container"]'
const emailField = '//*[@content-desc="input-email"]'
const passwordField = '//*[@content-desc="input-password"]'
const loginBtn = '//*[@content-desc="button-LOGIN"]'
const popUp = '//android.widget.FrameLayout'
const successTitle = '//*[@resource-id="android:id/alertTitle"]'
const successMsg = '//*[@resource-id="android:id/message"]'
const okBtn = '//*[@resource-id="android:id/button1"]'

const repeatPasswordField = '//*[@content-desc="input-repeat-password"]'
const signUpBtn = '//*[@content-desc="button-SIGN UP"]'

class LoginPage extends Page {

    async clickSignUpTab() {
        await this.clickElem(signUpTab)
    }

    async clickLoginBtn() {
        await this.clickElem(loginBtn)
    }

    async clickOkBtn() {
        await this.clickElem(okBtn)
    }

    async fillEmailField(text) {
        await this.fillInField(emailField, text)
    }

    async fillPasswordField(text) {
        await this.fillInField(passwordField, text)
    }

    async getSuccessTitle() {
        return await this.getElem(successTitle)
    }

    async getSuccessMsg() {
        return await this.getElem(successMsg)
    }

    async getSuccessTitleText() {
        return await this.getElemText(successTitle)
    }

    async getSuccessMsgText() {
        return await this.getElemText(successMsg)
    }

    async getOkBtn() {
        return await this.getElem(okBtn)
    }

    async waitForPopUp() {
        await $(popUp).waitForDisplayed({ timeout: 5000 })
    }
}

class SignUpPage extends LoginPage {

    async fillRepeatPasswordField(text) {
        await this.fillInField(repeatPasswordField, text)
    }

    async clickSignUpBtn() {
        await this.clickElem(signUpBtn)
    }
}

export const loginPage = new LoginPage
export const signUpPage = new SignUpPage
