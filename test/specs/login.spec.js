import { faker } from '@faker-js/faker'
import { loginPage } from '../pages/login.page.js'


suite('Login cases', () => {
    test('Sign in on the "Login" screen', async () => {     
        await loginPage.clickLoginTab()

        const email = faker.internet.email()
        const password = faker.internet.password()
        
        await loginPage.fillEmailField(email)
        await loginPage.fillPasswordField(password)
        await loginPage.clickLoginBtn()

        await loginPage.waitForPopUp()

        const successTitle = await loginPage.getSuccessTitle()
        const successMsg = await loginPage.getSuccessMsg()
        const successTitleText = await loginPage.getSuccessTitleText()
        const successMsgText = await loginPage.getSuccessMsgText()
        const okBtn = await loginPage.getOkBtn()

        await loginPage.clickOkBtn()

        expect(successTitleText).toEqual('Success')
        expect(successMsgText).toEqual('You are logged in!')
        await expect(successTitle).not.toBeDisplayed()
        await expect(successMsg).not.toBeDisplayed()
        await expect(okBtn).not.toBeDisplayed()
    })
})
