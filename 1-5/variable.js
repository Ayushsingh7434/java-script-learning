const accountId = 231304
let accountEmail = "ayush@gmail.com"
var accountPassward = "809010"
accountCity = "jaipur"

// accountId =2 this not allowed as it is declared as constant

accountEmail = "babu@gmmail.com"
accountPassward = "232425"
accountCity = "Banaras"

let accountState

console.log(accountCity);


// for printing multiple element

console.table([accountEmail,accountId,accountPassward,accountCity,accountState])
/*
prefer not to use var beacause of issue in block scope and in functional scope
*/