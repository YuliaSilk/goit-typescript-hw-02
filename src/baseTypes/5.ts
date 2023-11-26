/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

// let union;
// let literal;


let union: string | number ;
union = 'string'; 
union = 10; 

type EnableOrDisable = 'enable' | 'disable';
let literal: EnableOrDisable ;
literal = 'enable';   
literal = 'disable';  

export {};


