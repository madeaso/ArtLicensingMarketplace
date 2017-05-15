


var openchain = require("openchain");
        
var client = new openchain.ApiClient("http://localhost:8080/");

client.getAccountRecord(
    // Account path
    "/p2pkh/XkZsNRwSreDywMMyR1C22dyvJx1dWpRWnz/",
    // Asset path
    "/asset/p2pkh/XkZsNRwSreDywMMyR1C22dyvJx1dWpRWnz/")
.then(function (result) {
    console.log("Balance: " + result.balance.toString());
});


// Asset path: http://0.0.0.0:8080/asset/p2pkh/XwcLeYQUXPNCWfkDQLDN11fCmrqCuMd6aK/
// Asset path: http://0.0.0.0:8080/asset/p2pkh/XgkKLdZnxvU2iubUgRYCvKEwrGvpWztf8v/

// seed: "abcdefghijklmnopqrstuvwxyz"
