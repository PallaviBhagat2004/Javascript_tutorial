/// dataype conversion 
let score=true;
// console.log(typeof(score));
// to want in number
let valno=Number(score)
// console.log(typeof(score));
// console.log(valno)

//number-get that number only
//string-nan
//null - 0
//undefined- nan
//boolean-1

let str="pallavi"
let  boolvalue=Boolean(str)
// console.log(boolvalue)
//""=> false
//"pallavi"=>true

let num= true
let strvalue=String(num)
// console.log(typeof strvalue)
// console.log(strvalue)

////************Operation ********* */

let n=3;
let nev=-n
console.log(nev);

console.log("1"+2);
console.log(1+2);
console.log(1+"2");
console.log("1"+2+"1");
console.log(1+2+"1");    /// it is the rare case 

console.log(+true)
console.log(+"")
console.log(+11)

console.log(2=="2");  ///== is only check the number not datatype

console.log(null==0)
console.log(null>0)
console.log(null>=0)   /// in this case it is converting into null into number 

console.log("*************")
console.log(undefined==0)
console.log(undefined>0)
console.log(undefined>=0)

console.log(2==="2")   // === is going to check number and datatype also 
console.log(2===2)
