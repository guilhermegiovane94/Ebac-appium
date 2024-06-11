import { expect, driver } from '@wdio/globals'
//precisa adicionar o .js nos imports
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'
import homePage from '../pageobjects/home.page.js'


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await homePage.openMenu('profile')
        await loginPage.Login('cliente@ebac.art.br','GD*peToHNJ1#C$sgk08EaYJQ')
        expect((await profilePage.profileName('EBAC cliente')).isDisplayed()).toBeTruthy()
       // await driver.pause(1000)
    })
})

