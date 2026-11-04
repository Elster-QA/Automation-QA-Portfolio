import {expect, test} from '@playwright/test'
import {DropClassA} from '../page-objects/DropClassA'


test('myName', async ({page})=>{
    const dropClass = new DropClassA(page)
    await dropClass.visit()

    await dropClass.dropListASC()
})