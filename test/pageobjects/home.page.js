import { $ } from '@wdio/globals'


class HomePage  {
    get openMenu(){
        return $('id:tab-profile')
    }
    
}

export default new HomePage();
