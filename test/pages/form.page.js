import { Page } from './page.js'


const textField = '//*[@content-desc="text-input"]'
const typedText = '//*[@content-desc="input-text-result"]'
const switcher = '//*[@content-desc="switch"]'
const swithText = '//*[@content-desc="switch-text"]'
const dropdown = '//*[@content-desc="Dropdown"]'
const dropText = '//*[@content-desc="Dropdown"]//android.widget.EditText'
const fourthDropOpt = '//android.widget.CheckedTextView[4]'
const activeBtn = '//*[@content-desc="button-Active"]'
const popUpMsg = '//*[@resource-id="android:id/message"]'
const popUpOkBtn = '//*[@resource-id="android:id/button1"]'

class FormPage extends Page {
    async fillTextField(text) {
        await this.fillInField(textField, text)
    }

    async clickSwitcher() {
        await this.clickElem(switcher)
    }

    async clickDropdown() {
        await this.clickElem(dropdown)
    }

    async clickFourthDropOpt() {
        await this.clickElem(fourthDropOpt)
    }

    async clickActiveBtn() {
        await this.clickElem(activeBtn)
    }

    async clickPopUpOkBtn() {
        await this.clickElem(popUpOkBtn)
    }

    async getPopUpMsgText() {
        return await this.getElemText(popUpMsg)
    }

    async getTypedText() {
        return await this.getElemText(typedText)
    }

    async getSwitchText() {
        return await this.getElemText(swithText)
    }

    async getDropText() {
        return await this.getElemText(dropText)
    }
}

export const formPage = new FormPage
