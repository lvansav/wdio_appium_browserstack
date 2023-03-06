const navFormTab = '//*[@content-desc="Forms"]'
const navLoginTab = '//*[@content-desc="Login"]'
const navSwipeTab = '//*[@content-desc="Swipe"]'
const navDragTab = '//*[@content-desc="Drag"]'


export class Page {
    
    
    async clickElem(selector) {
        await $(selector).click()
    }

    async clickFormTab() {
        await this.clickElem(navFormTab)
    }

    async clickLoginTab() {
        await this.clickElem(navLoginTab)
    }

    async clickSwipeTab() {
        await this.clickElem(navSwipeTab)
    }

    async clickDragTab() {
        await this.clickElem(navDragTab)
    }

    async fillInField(selector, text) {
        await $(selector).setValue(text)
    }

    async getElem(selector) {
        return await $(selector)
    }
    
    async getElemText(selector) {
        return await $(selector).getText()
    }

    async swipeVertical(anchorPerc, startPerc, endPerc) {
        const { width, height } = await driver.getWindowSize()

        const anchor = Math.round(width * anchorPerc / 100)
        const startPoint = Math.round(height * startPerc / 100)
        const endPoint = Math.round(height * endPerc / 100)

        await driver.touchPerform([
            { action: 'press', options: { x: anchor, y: startPoint } }, 
            { action: 'wait', options: { ms: 100 } },
            { action: 'moveTo', options: { x: anchor, y: endPoint } },
            { action: 'release', options: {} }
        ])
    }

    async swipeGorizontal(anchorPerc, startPerc, endPerc) {
        const { width, height } = await driver.getWindowSize()
        
        const anchor = Math.round(height * anchorPerc / 100)
        const startPoint = Math.round(width * startPerc / 100)
        const endPoint = Math.round(width * endPerc / 100)

        await driver.touchPerform([
            { action: 'press', options: { x: startPoint, y: anchor } }, 
            { action: 'wait', options: { ms: 1000 } }, 
            { action: 'moveTo', options: { x: endPoint, y: anchor } },
            { action: 'release', options: {} }
        ])
    }

    async tapElem(selector) {
        const elem = await $(selector)
        await elem.touchAction('tap')
    }
}