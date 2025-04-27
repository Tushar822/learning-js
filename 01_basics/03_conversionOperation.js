//let score="33abc"
// let score="33"
// let score =null
//let score=undefined
let score=false
// let score="tushar"

console.log(typeof score);
// //or both way same
// console.log(typeof(score));

let valueInNumber= Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*
"33"=> 33 using Number(score)
"33abc"=>NaN same
"true"=>1;false=>0 same
null is of type obj, converted to number become type number ,value becomes 0
undefined typeof undefined, converted to number with value NaN
false(bool) become number with value 0
*/
// let isLoggedIn=1
// let isLoggedIn=-1
//let isLoggedIn=0
// let isLoggedIn=""
// let isLoggedIn="tushar"


// let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

/*  
1=>true;
0=>false
""=>false
"tushar"=>true
*/

// let someNumber=33
// let stringNumber=String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);
 