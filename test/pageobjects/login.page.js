import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {
    //id
    get email() {
        return $('id:email')
    }
    //text
    get password() {
        return $('android=new Uiselector().text("password")')
    }
    //acessibility id
    get btnLogin() {
        return $('~Login')
    }

    async Login(email, password) {
        (await this.email).setValue(email)
        (await this.password).setValue(password)
        (await this.btnLogin).click()

    }
}

export default new LoginPage();
