const accountId = 13423 // can't change
let accountEmail = "shanto@gmail.com"
var accountPassword = "shanto123" //don't use var
accountCity = "Rangpur" //not good to use
let accountState // value is undefined

/*
Prefer not to use var
beacuse of issue in block scope and functional scope
*/
// accountId = 2 // not allowed

accountEmail = "sh@g.com"
accountPassword = "shanto456"
accountCity = "Dhaka"


console.log(accountId);
console.table({ accountId, accountEmail, accountPassword, accountCity,accountState });