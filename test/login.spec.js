const { faker } = require('@faker-js/faker')
const chai = require('chai')


suite('Login cases', () => {
    test('Sign in on the "Login" screen', async () => {     
        await $('//*[@content-desc="Login"]').click()

        const email = faker.internet.email()
        const password = faker.internet.password()
        
        await $('//*[@content-desc="input-email"]').setValue(email)
        await $('//*[@content-desc="input-password"]').setValue(password)
        await $('//*[@content-desc="button-LOGIN"]').click()

        await $('//android.widget.FrameLayout').waitForDisplayed({ timeout: 5000 })

        const sucsessTitle = await $('//*[@resource-id="android:id/alertTitle"]').getText()
        const sucessMsg = await $('//*[@resource-id="android:id/message"]').getText()
        const okBtn = await $('//*[@resource-id="android:id/button1"]')

        await okBtn.click()

        chai.expect(sucsessTitle).to.equal('Success')
        chai.expect(sucessMsg).to.equal('You are logged in!')
        expect(await $('//*[@resource-id="android:id/alertTitle"]')).not.toBeDisplayed()
        expect(await $('//*[@resource-id="android:id/message"]')).not.toBeDisplayed()
        expect(await $('//*[@resource-id="android:id/button1"]')).not.toBeDisplayed()
    })
})