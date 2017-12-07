import {towers} from './data';
console.log('towers', towers);
let formattedData: Array<IData> = [];

interface IData {
  name: string;
  weight: number;
  children?: Array<string>;
}
 class TowerData implements IData {
  name: string;
  weight: number;
  children?: Array<string>;
   constructor(name: string, weight: number, children?: Array<string> ){
     this.name = name;
     this.weight = weight;
     this.children = children;
   }
 }

 function splitString(str: string): Array<string>{
   let newStr: string;
   newStr = str.replace(/,/g , "");
   return  newStr.split(' ');
 }
 function makeObj(str: string):IData{
   let objArr:Array<string>;
   let weight: number;
   let children: Array<string>;
   objArr = splitString(str);
   weight = parseInt(objArr[1].slice(1, -1));
   children = objArr.slice(3);
   return new TowerData(objArr[0], weight, children);
 }

 for (let i = 0; i < towers.length; i++) {
     formattedData.push(makeObj(towers[i]));
 }
console.log(formattedData);
