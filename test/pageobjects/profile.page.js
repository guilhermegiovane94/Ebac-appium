import { $ } from '@wdio/globals'

class ProfilePage extends Page {
    async profileName (name){
        return await $(`//android.widget.TextView[@text="${name}"]`)
    }
}

export default new ProfilePage();
