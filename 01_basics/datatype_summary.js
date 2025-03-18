///Primitive datatype  --->7
// Number bigint string symbol null undefined boolean 
let a=33;       
console.log( typeof a);    //number
let big=234567892345678n;       
console.log( typeof big);   //bigint
let u=true;       
console.log( typeof u);  //boolean
let str="pallavi";      
console.log( typeof str);    ///string
let he=null;       
console.log( typeof he);  //object
let p=undefined;       
console.log( typeof p); //undefined
let id=Symbol('123');
console.log( typeof id);  //symbol

/****************************Non- Primitive Datatype */
//Array   Function   Object
const heros=["pallavi","nikita","girish"];
console.log( typeof heros);  //object

let myObj={
    email:"pallavi@gmail.com",   //object
    age:20
}
console.log( typeof myObj);

let myfun=function(){console.log("Hello world")};
console.log( typeof myfun);   /// function (object)




////*********Primitive(Static) and Non-primitive (Heap)***********//
///Static
let name="pallavi";
let hello=name;
hello="bhagat";   /// it will not change because copy is passed through this 
console.log(hello);

///Heap 
let userOne=
{
    email:"bhagat@gmail.com",
    age:12
}
let user=userOne;
user.email="niku@gmail.com";
console.log( user.email);    //it will change because the reference is passed 
console.log(userOne.email);
