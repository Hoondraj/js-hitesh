const accountId= 12345
let accountEmail="hiteshtharani27@gmail.com"
var pass=1764
accountCity="Karachi"

accountEmail="hm@icloud.com"
accountCity="Hyderabad"
pass=9876
let accountState;

console.log(accountId,accountEmail,accountCity,pass);
console.table([accountId,accountEmail,accountCity,pass,accountState]);


/*
let works only within the block {} where it's defined (block-scoped).
var works throughout the whole function or globally (function-scoped).
->You can’t declare a let variable again in the same block.
->You can declare a var variable again.

*/