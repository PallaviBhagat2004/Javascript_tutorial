const id= 12345;
var email="pallavibhagat910@gmail.com"
let pass="121234"
city="jaipur"     /// it is not a good pratice to write 
    
let state="maharashtra";  /// it will throw the answer that is undefined
// id=6789     // it is not possible because it is constant variable

email="hcl@gmail.com"
pass="789"
city="manipur"

///instead of writing multiple time the console.log statement we can write
console.table([id,email,pass,city])


/// don't use var beacuse of the block scope and fnunctional scope and it is decaled globally
// use const and let 