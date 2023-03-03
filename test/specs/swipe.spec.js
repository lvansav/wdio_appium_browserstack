suite('Swipe', () => {
    test('Find the hidden element', async () => {
        await $('//*[@content-desc="Swipe"]').click()

        await $('//*[@content-desc="Swipe-screen"]//android.widget.TextView').click()

        let startPercentage = 80
        let endPercentage = 20
        let anchorPercentage = 60

        const { width, height } = await driver.getWindowSize()
        let anchor = Math.round(height * anchorPercentage / 100)
        let startPoint = Math.round(width * startPercentage / 100)
        let endPoint = Math.round(width * endPercentage / 100)

        const blockTexts =  [
            {
                blockTitle: 'FULLY OPEN SOURCE',
                blockMsg: 'WebdriverIO is fully open source and can be found on GitHub'
            },
            {
                blockTitle: 'GREAT COMMUNITY',
                blockMsg: 'WebdriverIO has a great community that supports all members.'
            },
            {
                blockTitle: 'JS.FOUNDATION',
                blockMsg: 'The JS Foundation is host to projects that span the entire JavaScript ecosystem.'
            },
            {
                blockTitle: 'SUPPORT VIDEOS',
                blockMsg: 'The community around WebdriverIO is actively speaking on various user groups or conferences about specific topics around automated testing with WebdriverIO.'
            },
            {
                blockTitle: 'EXTENDABLE',
                blockMsg: 'Adding helper functions, or more complicated sets and combinations of existing commands is simple and really useful'
            },
            {
                blockTitle: 'COMPATIBLE',
                blockMsg: 'WebdriverIO works in combination with most of the TDD and BDD test frameworks in the JavaScript world'
            }
        ]

        let block = await $('//android.widget.HorizontalScrollView//android.view.ViewGroup[1]')
    
        let blockTitle = await block.$('//*[@content-desc="slideTextContainer"]/android.widget.TextView[1]')
        let blockMsg = await block.$('//*[@content-desc="slideTextContainer"]/android.widget.TextView[2]')

        await expect(await blockTitle.getText()).toEqual(blockTexts[0].blockTitle)
        await expect(await blockMsg.getText()).toEqual(blockTexts[0].blockMsg)

        for (let i = 1; i < 6; i++) {
            await driver.touchPerform([
                { action: 'press', options: { x: startPoint, y: anchor } }, 
                { action: 'wait', options: { ms: 1000 } }, 
                { action: 'moveTo', options: { x: endPoint, y: anchor } },
                { action: 'release', options: {} }
            ])
    
            let block = await $('//android.widget.HorizontalScrollView//android.view.ViewGroup[2]')
    
            let blockTitle = await block.$('//*[@content-desc="slideTextContainer"]/android.widget.TextView[1]')
            let blockMsg = await block.$('//*[@content-desc="slideTextContainer"]/android.widget.TextView[2]')
    
            await expect(await blockTitle.getText()).toEqual(blockTexts[i].blockTitle)
            await expect(await blockMsg.getText()).toEqual(blockTexts[i].blockMsg)
        } 
        
        startPercentage = 90
        endPercentage = 10
        anchorPercentage = 50

        anchor = Math.round(width * anchorPercentage / 100)
        startPoint = Math.round(height * startPercentage / 100)
        endPoint = Math.round(height * endPercentage / 100)

        for (let i = 0; i < 2; i ++) {
            await driver.touchPerform([
                { action: 'press', options: { x: anchor, y: startPoint } },
                { action: 'wait', options: { ms: 1000 } },
                { action: 'moveTo', options: { x: anchor, y: endPoint } },
                { action: 'release', options: {} }
            ])
        }

        const hiddenElem = await $('//*[@content-desc="WebdriverIO logo"]')
        await expect(hiddenElem).toBeDisplayed()
    })
})