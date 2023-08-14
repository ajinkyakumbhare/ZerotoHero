/**
 * @description       : 
 * @author            : PSL_Ajinkya Kumbhare-SFDX
 * @group             : 
 * @last modified on  : 08-09-2023
 * @last modified by  : PSL_Ajinkya Kumbhare-SFDX
**/
import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {

    carList = ["ford", "audi", "Maruti", "Hyundai", "Tvs"]


    ceoList=[
        {
            id:1,
            company: "Google",
            name: "Sunder Pichai"
        },
        {
            id:2,
            company: "Apple Inc",
            name: "Tim Cook"
        },
        {
            id:3,
            company: "Facebook",
            name: "Mark Zuckerburg"
        },
        {
            id:4,
            company: "Amazon.com",
            name: "Jeff bezos"
        }
    ]
}