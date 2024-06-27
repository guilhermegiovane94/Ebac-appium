import { $ } from '@wdio/globals'

class ProfilePage {
   async profileName(name){
      return await $(`//android.widget.textView[@text="${name}"`)
   }
}

export default new ProfilePage();
