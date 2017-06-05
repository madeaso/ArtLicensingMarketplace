var openchain = require("openchain");
var bitcore = require("bitcore-lib");

var seed = "0123456789abcdef0123456789abcdef";
//var seed = "0123456789abcdef0123456789abcdef0123456789abcdef";

// Load a private key from a seed
var privateKey = bitcore.HDPrivateKey.fromSeed(seed, "open");
var address = privateKey.publicKey.toAddress();

// Calculate the accounts corresponding to the private key
var issuancePath = "/asset/p2pkh/" + "XraCQjqvCgmZ96v7pV6Xj2SwcnQRXT7ZLR" + "/";
//var issuancePath = "/asset/p2pkh/" + address + "/";
var assetPath = issuancePath;
var walletPath = "/p2pkh/" + "XraCQjqvCgmZ96v7pV6Xj2SwcnQRXT7ZLR" + "/";

console.log("Issuance path: " + issuancePath);
console.log("Wallet path: " + walletPath);

// Create an Openchain client and signer
var client = new openchain.ApiClient("http://localhost:8080/");
var signer = new openchain.MutationSigner(privateKey);

// Initialize the client
client.initialize()
.then(function () {
    // Create a new transaction builder
    return new openchain.TransactionBuilder(client)
        // Add the key to the transaction builder
        .addSigningKey(signer)
        // Add some metadata to the transaction
        .setMetadata({ "memo": "Issued through NodeJS" })
        // Take 100 units of the asset from the issuance path
        .updateAccountRecord(issuancePath, assetPath, -100);
})
.then(function (transactionBuilder) {
    // Add 100 units of the asset to the target wallet path
    return transactionBuilder.updateAccountRecord(walletPath, assetPath, 100);
})
.then(function (transactionBuilder) {
    // Submit the transaction
    return transactionBuilder.submit();
})
.then(function (result) { console.log(result); });
