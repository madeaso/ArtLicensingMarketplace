

var openchain = require("openchain");
        
var client = new openchain.ApiClient("http://localhost:8080/");

var account = "XdZbSnT9b4BgdNFpeQSHvYKHE2nerxzs9r";

client.getAccountRecord(
    // Account path
    "/p2pkh/"+ account + "/",
    // Asset path
    "/asset/" + "/p2pkh/"+ account + "/")
.then(function (result) {
    console.log("Balance: " + result.balance.toString());
    console.log("Asset: " + result.asset.toString());
});


// Asset path: http://0.0.0.0:8080/asset/p2pkh/XwcLeYQUXPNCWfkDQLDN11fCmrqCuMd6aK/
// Asset path: http://0.0.0.0:8080/asset/p2pkh/XgkKLdZnxvU2iubUgRYCvKEwrGvpWztf8v/

// seed: "abcdefghijklmnopqrstuvwxyz"
