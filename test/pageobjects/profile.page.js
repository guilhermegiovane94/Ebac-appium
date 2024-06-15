import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProfilePage {
   async profileName(name){
      return await $(`//android.widget.textView[@text="${name}"`)
   }
}

export default new ProfilePage();
