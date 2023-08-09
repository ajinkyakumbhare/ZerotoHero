/**
 * @description       : 
 * @author            : PSL_Ajinkya Kumbhare-SFDX
 * @group             : 
 * @last modified on  : 08-09-2023
 * @last modified by  : PSL_Ajinkya Kumbhare-SFDX
**/
import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {

    isVisible = false
    name
    handleClick(){
        this.isVisible = true
    }

    ChangeHandler(event){
        this.name = event.target.value
    }

    get helloMethod(){
        return this.name === 'hello'
    }
}