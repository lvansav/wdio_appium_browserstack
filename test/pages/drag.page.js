import { Page } from './page.js'


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

const imageSelects = [
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

const confetti = '//*[@content-desc="Drag-drop-screen"]//android.view.ViewGroup[195]'
const retryBtn = '//*[@content-desc="button-Retry"]'
const successTitle = '//*[@content-desc="Drag-drop-screen"]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.TextView'
const successMsg = '//*[@content-desc="Drag-drop-screen"]/android.view.ViewGroup[1]/android.widget.TextView'

class DragPage extends Page {

    piecesSelects = piecesSelects
    imageSelects = imageSelects

    async comparePieceAndImage(pieceSelector, imageSelector) {
        const piece = await $(pieceSelector)
        const place = await $(imageSelector)
        await piece.dragAndDrop(place, { delay: 4000})
    }

    async getRetryBtn() {
        return await this.getElem(retryBtn)
    }

    async getSuccessTitle() {
        return await this.getElem(successTitle)
    }

    async getSuccessMsg() {
        return await this.getElem(successMsg)
    }

    async getSuccessTitleText() {
        return await this.getElemText(successTitle)
    }

    async getSuccessMsgText() {
        return await this.getElemText(successMsg)
    }

    async tapConfetti() {
        await this.tapElem(confetti)
    }
}

export const dragPage = new DragPage
