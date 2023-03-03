import { faker } from '@faker-js/faker'


suite('Fill out forms', () => {
    test('Fill out the form', async () => {
        await $('//*[@content-desc="Forms"]').click()

        const randWord = faker.word.adjective()

        await $('//*[@content-desc="text-input"]').setValue(randWord)
        await $('//*[@content-desc="switch"]').click()
        await $('//*[@content-desc="Dropdown"]').click()
        await $('//android.widget.CheckedTextView[4]').click()

        const { width, height } = await driver.getWindowSize()

        const anchorPerc = 50
        const startPerc = 90
        const endPerc = 40

        const anchor = Math.round(width * anchorPerc / 100)
        const startPoint = Math.round(height * startPerc / 100)
        const endPoint = Math.round(height * endPerc / 100)

        await driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: anchor,
                    y: startPoint
                }
            }, 
            {
                action: 'wait', 
                options: {
                    mss: 100
                }
            },
            {
                action: 'moveTo',
                options: {
                    x: anchor,
                    y: endPoint
                }
            },
            {
                action: 'release',
                options: {}
            }

        ])

        await $('//*[@content-desc="button-Active"]').click()
        const popUpMsg = await $('//*[@resource-id="android:id/message"]').getText()
        await $('//*[@resource-id="android:id/button1"]').click()

        const typedText = await $('//*[@content-desc="input-text-result"]').getText()
        const switchStatus = await $('//*[@content-desc="switch-text"]').getText()
        const dropText = await $('//*[@content-desc="Dropdown"]//android.widget.EditText').getText()

        await expect(typedText).toEqual(randWord)
        await expect(switchStatus).toEqual('Click to turn the switch OFF')
        await expect(dropText).toEqual('This app is awesome')
        await expect(popUpMsg).toEqual('This button is active')
    })
})