//syntax : var/let/const variableName:datatype

import { convertToObject } from "typescript";

let pid:number=34412;
let pname:string="smith";
let price:number=3000.00
let addrs:string[]=['hyderbad','bangalore']
let depts:Array<number>=[10,20,30,50];
let isEnable:boolean=false;
enum Color {
    Red,
    Green,
    Blue,
  }

  let c:Color=Color.Red;

let al1TypeData:any=true
// console.log(typeof al1TypeData)

console.log(pid)