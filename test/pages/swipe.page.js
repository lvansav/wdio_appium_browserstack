import { Page } from './page.js'


const swipeScreen = '//*[@content-desc="Swipe-screen"]//android.widget.TextView'
const firstBlock = '//android.widget.HorizontalScrollView//android.view.ViewGroup[1]'
const secondBlock = '//android.widget.HorizontalScrollView//android.view.ViewGroup[2]'
const blockTitle = '//*[@content-desc="slideTextContainer"]/android.widget.TextView[1]'
const blockMsg = '//*[@content-desc="slideTextContainer"]/android.widget.TextView[2]'

const swipeBlocksContent = [
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

const hiddenElem = '//*[@content-desc="WebdriverIO logo"]'

class SwipePage extends Page {

    swipeBlocksContent = swipeBlocksContent

    async clickSwipeScreen() {
        await this.clickElem(swipeScreen)
    }

    async getBlockContent(blockNumber) {
        let block
        if (blockNumber === 1) { block = await this.getFirstBlock() }
        if (blockNumber === 2) { block = await this.getSecondBlock() }
        
        const blockContent = {
            blockTitle: await block.$(blockTitle).getText(),
            blockMsg: await block.$(blockMsg).getText()
        }

        return blockContent
    }

    async getFirstBlock() {
        return await this.getElem(firstBlock)
    }

    async getSecondBlock() {
        return await this.getElem(secondBlock)
    }

    async getHiddenElem() {
        return await this.getElem(hiddenElem)
    }
}

export const swipePage = new SwipePage
