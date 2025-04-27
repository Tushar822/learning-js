const accountId=1001
let accountEmail="tushar@gmail.com"
var accountPass="12345"
accountCity="Delhi"//can declare without datatype but not to prefer

let accountState;

// accountId=1008
 
console.log(accountId);

accountEmail="ta@ta.com"
accountCity="Gurgaon"
accountPass="123456789"

/*Prefer no to use var
due to problem of block scope and functional scope
 */

console.table([accountId,accountEmail,accountPass,accountCity,accountState])