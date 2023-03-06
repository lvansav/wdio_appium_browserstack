import { faker } from '@faker-js/faker'
import { formPage } from '../pages/form.page.js'


suite('Fill out forms', () => {
    test('Fill out the form', async () => {
        await formPage.clickFormTab()

        const randWord = faker.word.adjective()

        await formPage.fillTextField(randWord)
        await formPage.clickSwitcher()
        await formPage.clickDropdown()
        await formPage.clickFourthDropOpt()

        const anchorPerc = 50
        const startPerc = 90
        const endPerc = 40

        await formPage.swipeVertical(anchorPerc, startPerc, endPerc)

        await formPage.clickActiveBtn()
        const popUpMsg = await formPage.getPopUpMsgText()
        await formPage.clickPopUpOkBtn()

        const typedText = await formPage.getTypedText()
        const switchStatus = await formPage.getSwitchText()
        const dropText = await formPage.getDropText()

        await expect(typedText).toEqual(randWord)
        await expect(switchStatus).toEqual('Click to turn the switch OFF')
        await expect(dropText).toEqual('This app is awesome')
        await expect(popUpMsg).toEqual('This button is active')
    })
})
