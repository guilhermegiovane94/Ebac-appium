import { $ } from '@wdio/globals'

class CadastroPage {
   get firtName (){
      return $('id:firstName')
   }

   get lastName (){
      return $('id:lastName')
   }

   get phone (){
      return $('id:phone')
   }

   get email (){
      return $('id:email')
   }

   get password (){
      return $('id:password')
   }

   async btnCreate(){
      (await $('id:create')).click() 
   }

   async realizarCadastro (firstName, lastName, phone, email, password){
      (await this.firtName).setValue(firstName)
      (await this.lastName).setValue(lastName)
      (await this.phone).setValue(phone)
      (await this.email).setValue(email)
      (await this.password).setValue(password)
      this.btnCreate()
   }
}

export default new CadastroPage();
