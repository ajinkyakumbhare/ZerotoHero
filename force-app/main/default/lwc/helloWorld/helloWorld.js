/**
 * @description       : 
 * @author            : PSL_Ajinkya Kumbhare-SFDX
 * @group             : 
 * @last modified on  : 08-09-2023
 * @last modified by  : PSL_Ajinkya Kumbhare-SFDX
**/
import { LightningElement, track} from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname = "ajinkya rahul Kumbhare"
    title = "Aura"

    changeHandler(event){
        this.title = event.target.value
    }
  
    @track address={
        city:'Wardha',
        postCode:442001,
        Country:'India'
    }

    trackHandler(event){
        this.address.city = event.target.value
    }

    // Getter Example
    users = ["john", "Smith", "Ashu"]
    num1 = 10
    num2 = 20

    get firstUser(){
        return this.users[0].toUpperCase()
    }

    get multipication(){
        return this.num1 + this.num2
    }

}