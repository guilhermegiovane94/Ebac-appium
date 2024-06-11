import { $ } from '@wdio/globals'

class HomePage extends Page {
    async openMenu(menu){
        await $(`id:tab-${menu}`).click()
        }

}

export default new HomePage();
