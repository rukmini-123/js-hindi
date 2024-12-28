const accountId = 144536;
let email = "rukmini@gmail.com";
var  accountPassword = 123;
// accountId = 2; //[not allowed]
console.log(accountId);

/*
Prefer not to use var
because of issues in block scope and functional scope
*/

let accountState;
email = "hc@hc.com"
accountPassword = 456;;
console.table([email,accountPassword,accountState]);
