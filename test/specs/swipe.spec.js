import { swipePage } from '../pages/swipe.page.js'


suite('Swipe', () => {
    test('Find the hidden element', async () => {
        await swipePage.clickSwipeTab()

        await swipePage.clickSwipeScreen()

        let blockContent = await swipePage.getBlockContent(1)

        await expect(blockContent.blockTitle).toEqual(swipePage.swipeBlocksContent[0].blockTitle)
        await expect(blockContent.blockMsg).toEqual(swipePage.swipeBlocksContent[0].blockMsg)

        let startPerc = 80
        let endPerc = 20
        let anchorPerc = 60

        for (let i = 1; i < 6; i++) {
            await swipePage.swipeGorizontal(anchorPerc, startPerc, endPerc)
    
            blockContent = await swipePage.getBlockContent(2)
    
            await expect(blockContent.blockTitle).toEqual(swipePage.swipeBlocksContent[i].blockTitle)
            await expect(blockContent.blockMsg).toEqual(swipePage.swipeBlocksContent[i].blockMsg)
        } 
        
        startPerc = 90
        endPerc = 10
        anchorPerc = 50

        for (let i = 0; i < 2; i ++) {
            await swipePage.swipeVertical(anchorPerc, startPerc, endPerc)
        }

        const hiddenElem = await swipePage.getHiddenElem()
        await expect(hiddenElem).toBeDisplayed()
    })
})
