import {Component, OnInit, AfterViewInit} from '@angular/core';
import {EType} from "../../EType";
import {EAccessModifier} from "../../EAccessModifier";
declare const $:any;
@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit,AfterViewInit{
  ngAfterViewInit():void {
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }

  public accessModifier:EAccessModifier;
  public type:EType;
  public name:string;
  public getter:boolean;
  public setter:boolean;
  public types:Array<string>;
  public accessModifiers:Array<string>;
  public componentName:string="Właściwość";

  public setType=(entryType:string)=>{
    this.type = EType[entryType];
  };

  public getType=(index:number):string=>{
    return EType[index];
  };

  public setAccessModifier=(accessMod:string)=>{
    this.accessModifier = EAccessModifier[accessMod];
  };

  public getAccessModifier=(index:number):string=>{
    return EAccessModifier[index];
  };

  constructor() { }

  ngOnInit() {
    let objectTypes = Object.keys(EType).map(k => EType[k]);
    this.types = objectTypes.filter(v => typeof v === "string") as string[];

    let accMods = Object.keys(EAccessModifier).map(k => EAccessModifier[k]);
    this.accessModifiers = accMods.filter(v => typeof v === "string") as string[];
  }
  public getComponentName=(accessModif:string,type:string,fieldName:string,getters:boolean,setters:boolean):string=>{

    let emptyState =  " ";
    let componentNameTmp="";
    componentNameTmp+=`${this.componentName} : 
      ${accessModif?accessModif:emptyState} 
      ${type?type:emptyState} ${fieldName?fieldName:emptyState} ${getters?getters:false} ${setters?setters:false} `;
    return componentNameTmp;

  }
}
