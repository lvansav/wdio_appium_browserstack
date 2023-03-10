import { dragPage } from "../pages/drag.page.js"


suite("Drag-and-Drop cases", async () => {
    test.only(`Compare puzzle's pieces into image on the "Drag" screen`, async () => {
        await dragPage.clickDragTab()

        for (let i = 0; i < dragPage.piecesSelects.length; i++) {
            let piece = await dragPage.getElem(dragPage.piecesSelects[i])
            let image = await dragPage.getElem(dragPage.imageSelects[i])
            piece.dragAndDrop(image, { delay: 4000})
        }        

        try {
            await dragPage.tapConfetti()
        } catch {}

        const retryBtn = await dragPage.getRetryBtn()
        const successTitle = await dragPage.getSuccessTitle()
        const successMsg = await dragPage.getSuccessMsg()
        const successTitleText = await dragPage.getSuccessTitleText()
        const successMsgText = await dragPage.getSuccessMsgText()

        await expect(successTitle).toBeDisplayed()
        await expect(successMsg).toBeDisplayed()
        await expect(successTitleText).toEqual('Congratulations')
        await expect(successMsgText).toEqual('You made it, click retry if you want to try it again.')
        await expect(retryBtn).toBeDisplayed()
    })
})
