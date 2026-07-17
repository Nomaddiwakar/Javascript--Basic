const accountId = 12223
let AccountEmail = "nomad@gmail.com"
var AccountPassword ="123"
accountcity = "chandigarh"


// accountId = 4  // not allowed

AccountEmail = "dipu@gmail"
accountcity = "dbg"

console.log(accountId);

/*
prefer not to use var 
beacuse of issue in block of scope and functional scope
*/

console.table([accountId, accountcity, AccountEmail])



