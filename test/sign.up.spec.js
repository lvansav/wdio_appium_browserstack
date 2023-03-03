import { faker } from '@faker-js/faker'


suite('Sign in cases', () => {
    test('Sign up on the "Login" screen', async () => {
        await $('//*[@content-desc="Login"]').click()
        await $('//*[@content-desc="button-sign-up-container"]').click()

        const email = faker.internet.email()
        const password = faker.internet.password()

        await $('//*[@content-desc="input-email"]').setValue(email)
        await $('//*[@content-desc="input-password"]').setValue(password)
        await $('//*[@content-desc="input-repeat-password"]').setValue(password)
        await $('//*[@content-desc="button-SIGN UP"]').click()

        const sucsessTitle = await $('//*[@resource-id="android:id/alertTitle"]').getText()
        const sucessMsg = await $('//*[@resource-id="android:id/message"]').getText()
        const okBtn = await $('//*[@resource-id="android:id/button1"]')

        await okBtn.click()

        expect(sucsessTitle).toEqual('Signed Up!')
        expect(sucessMsg).toEqual('You successfully signed up!')
        expect(await $('//*[@resource-id="android:id/alertTitle"]')).not.toBeDisplayed()
        expect(await $('//*[@resource-id="android:id/message"]')).not.toBeDisplayed()
        expect(await $('//*[@resource-id="android:id/button1"]')).not.toBeDisplayed()
    })
})
