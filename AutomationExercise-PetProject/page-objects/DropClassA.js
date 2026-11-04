import {expect} from '@playwright/test'

export class DropClassA {
    constructor(page) {
        this.page = page
        this.sortList = page.locator('[data-qa="sort-dropdown"]')
        this.priceItem = page.locator('[datatype="product-price"]')

    }

    visit = async () => {
        await this.page.goto('http://localhost:2221/')
    }

    dropListASC = async () => {
        await this.sortList.selectOption('price-asc')
        const firstItemPrice = await this.priceItem.first().innerText()
        const firstClearString = firstItemPrice.replace('$', '')
        const firstItemJustNumber = parseInt(firstClearString, 10)

        const lastItemPrice = await this.priceItem.last().innerText()
        const lastCleanString = lastItemPrice.replace('$', '')
        const lastItemJustNumber = parseInt(lastCleanString, 10)

         expect(lastItemJustNumber).toBeGreaterThan(firstItemJustNumber)
         console.log(firstItemJustNumber)
         console.log(lastItemJustNumber)
        
        


        
    }



}