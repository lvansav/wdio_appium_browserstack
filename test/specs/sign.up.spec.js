import { faker } from '@faker-js/faker'
import { loginPage, signUpPage } from '../pages/login.page.js'


suite('Sign in cases', () => {
    test(`Sign up on the 'Login' screen`, async () => {
        await loginPage.clickLoginTab()
        await loginPage.clickSignUpTab()

        const email = faker.internet.email()
        const password = faker.internet.password()

        await signUpPage.fillEmailField(email)
        await signUpPage.fillPasswordField(password)
        await signUpPage.fillRepeatPasswordField(password)
        await signUpPage.clickSignUpBtn()

        const successTitle = await signUpPage.getSuccessTitle()
        const successMsg = await signUpPage.getSuccessMsg()
        const successTitleText = await signUpPage.getSuccessTitleText()
        const successMsgTitle = await signUpPage.getSuccessMsgText()
        const okBtn = await signUpPage.getOkBtn()

        expect(successTitleText).toEqual('Signed Up!')
        expect(successMsgTitle).toEqual('You successfully signed up!')
        expect(successTitle).not.toBeDisplayed()
        expect(successMsg).not.toBeDisplayed()
        expect(okBtn).not.toBeDisplayed()
    })
})
