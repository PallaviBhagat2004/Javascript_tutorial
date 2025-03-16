"use strict";   /// treat all the js code as the newer version 

//alert("hello")    // we use this in the browser not in node js 

/// code ki readability maintain karna jaurri hai

// datatype in js
/*
        Primitive datatype
1.number  have the range 2  power 53
2.big int is used to store the large number 
3.string which can stored in single aor double quotes but prefered double quotes
4. boolean used to store true or false
5. null is standalone value  (empty value)
6. undefined -- value intialize nhi kiya hai 
7. symbol --- uniquessness defined karne ke liye we use this 

object 
 */
console.log(typeof "pallavi") //string
console.log(typeof 234)   // number
console.log(typeof null)   // object
console.log(typeof undefined)  // undefined
console.log(typeof symbol)    //undefined


/// dataype conversion 
let score=true;
console.log(typeof(score));
// to want in number
let valno=Number(score)
console.log(typeof(score));
console.log(valno)

//number-get that number only
//string-nan
//null - 0
//undefined- nan
//boolean-1

let str="pallavi"
let  boolvalue=Boolean(str)
console.log(boolvalue)
//""=> false
//"pallavi"=>true

let num= true
let strvalue=String(num)
console.log(typeof strvalue)
console.log(strvalue)