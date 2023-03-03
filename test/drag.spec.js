suite("Drag-and-Drop cases", async () => {
    test.only(`Compare puzzle's pieces into image on the "Drag" screen`, async () => {
        await $('//*[@content-desc="Drag"]').click()

        const piecesSelects = [
            '//*[@content-desc="drag-l2"]',
            '//*[@content-desc="drag-r3"]',
            '//*[@content-desc="drag-r1"]',
            '//*[@content-desc="drag-c1"]',
            '//*[@content-desc="drag-c3"]',
            '//*[@content-desc="drag-r2"]',
            '//*[@content-desc="drag-c2"]',
            '//*[@content-desc="drag-l1"]',
            '//*[@content-desc="drag-l3"]'
        ]

        const piecesPlacesSelects = [
            '//*[@content-desc="drop-l2"]',
            '//*[@content-desc="drop-r3"]',
            '//*[@content-desc="drop-r1"]',
            '//*[@content-desc="drop-c1"]',
            '//*[@content-desc="drop-c3"]',
            '//*[@content-desc="drop-r2"]',
            '//*[@content-desc="drop-c2"]',
            '//*[@content-desc="drop-l1"]',
            '//*[@content-desc="drop-l3"]'
        ]

        for (let i = 0; i < piecesSelects.length; i++) {
            let piece
            let place
            piece = await $(piecesSelects[i])
            place = await $(piecesPlacesSelects[i])
            piece.dragAndDrop(place, { delay: 4000})
        }        

        const confetti = await $('//*[@content-desc="Drag-drop-screen"]//android.view.ViewGroup[195]')
        await confetti.touchAction('tap')

        const retryBtn = await $('//*[@content-desc="button-Retry"]')
        const successTitleElem = await $('//*[@content-desc="Drag-drop-screen"]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.TextView')
        const successMsgElem = await $('//*[@content-desc="Drag-drop-screen"]/android.view.ViewGroup[1]/android.widget.TextView')

        const successTitle = await successTitleElem.getText()
        const successMsg = await successMsgElem.getText()

        await expect(successTitleElem).toBeDisplayed()
        await expect(successMsgElem).toBeDisplayed()
        await expect(successTitle).toEqual('Congratulations')
        await expect(successMsg).toEqual('You made it, click retry if you want to try it again.')
        await expect(retryBtn).toBeDisplayed()
    })
})