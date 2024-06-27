import { driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page'
import loginPage from '../pageobjects/login.page'
import cadastroPage from '../pageobjects/cadastro.page'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await homePage.openMenu().click()
        loginPage.btnCadastro()
        cadastroPage.realizarCadastro('carlos','counter','1144449999','teste@teste.com','123')
        //await loginPage.login('cliente@ebac.art.br','GD*peToHNJ1#c$sgk08aYJQ')
        //expect ((await profilePage.profileName('Ebac Cliente')).isDisplayed()).toBeTruthy()
        await driver.pause(10000)
    })
})

