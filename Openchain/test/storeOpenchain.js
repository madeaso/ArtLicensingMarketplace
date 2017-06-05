var openchain = require("openchain");
var bitcore = require("bitcore-lib");

var seed = "0123456789012345678901234567890123456789";

// Load a private key from a seed
var privateKey = bitcore.HDPrivateKey.fromSeed(seed, "openchain");
var address = privateKey.publicKey.toAddress();

// Calculate the accounts corresponding to the private key
var dataPath = "/asset/p2pkh/XraCQjqvCgmZ96v7pV6Xj2SwcnQRXT7ZLR/metadata/";
var recordName = "datarecord";
var storedData = "0123456789012345678901234567890123456789";

console.log("Account path: " + dataPath);
console.log("Record name: " + recordName);

// Create an Openchain client and signer
var client = new openchain.ApiClient("http://localhost:8080/");
var signer = new openchain.MutationSigner(privateKey);

// Initialize the client
client.initialize()
.then(function () {
    // Retrieve the record being modified
    return client.getDataRecord(dataPath, recordName)
})
.then(function (dataRecord) {
    // Encode the data into a ByteBuffer
    var newValue = openchain.encoding.encodeString(storedData);

    // Create a new transaction builder
    return new openchain.TransactionBuilder(client)
        // Add the key to the transaction builder
        .addSigningKey(signer)
        // Modify the record
        .addRecord(dataRecord.key, newValue, dataRecord.version)
        // Submit the transaction
        .submit();
})
.then(function (result) { console.log(result); });
