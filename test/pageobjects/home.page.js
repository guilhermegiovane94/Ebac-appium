import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage  {
    get openMenu(){
        return $('id:tab-profile')
    }
    
}

export default new HomePage();
