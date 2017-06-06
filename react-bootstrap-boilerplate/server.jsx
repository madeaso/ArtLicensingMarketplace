import express from 'express';
import corsPrefetch from 'cors-prefetch-middleware';
import imagesUpload from 'images-upload-middleware';

const fs = require("fs");

const app = express();
var openchain = require("openchain");
var bitcore = require("bitcore-lib");
var rollingSeed = 'XraCQjqvCgmZ96v7pV6Xj2SwcnQRXT7ZLR';

var MongoClient = require('mongodb');
var assert = require('assert');
var url = 'mongodb://localhost:27017/blockart';

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/static',express.static('./server/static'));

app.use(corsPrefetch);


// Set up server on 9090
app.listen(9090, err => {
    if(err){
        return console.error(err);
    }
    console.log('Listening on: 9090');
});

// Upload image from user
app.post('/notmultiple', imagesUpload(
    './public/uploads',
    './uploads'
));

// Search for term give a filter or no filter
app.get('/get/:searchTerm/:filter', function(req,res,next){

    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        var collection = db.collection('artwork');

        var regex = '.*' + req.params.searchTerm + '.*';

        // DB CODE
        if(req.params.filter == 'Subject'){
            console.log("searchTerm: " + req.params.searchTerm);
            collection.find({subject_type: new RegExp(regex)}).sort({date_added:1}).toArray(function(err, docs) {
                assert.equal(err, null);
                console.log("Found the following records");
                console.log(docs);
                return res.json(docs);
            });
        }
        else if(req.params.filter == 'Artist'){
            console.log("searchTerm: " + req.params.searchTerm);
            collection.find({artist: new RegExp(regex)}).sort({date_added:-1}).toArray(function(err, docs) {
                assert.equal(err, null);
                console.log("Found the following records");
                console.log(docs);
                return res.json(docs);
            });
        }
        else if(req.params.filter == 'Work'){
            console.log("searchTerm: " + req.params.searchTerm);
            collection.find({title: new RegExp(regex)}).sort({date_added:-1}).toArray(function(err, docs) {
                assert.equal(err, null);
                console.log("Found the following records");
                console.log(docs);
                return res.json(docs);
            });
        }
        /*else if(req.params.filter == 'Filter By' || req.params.filter == 'No Filter'){
            console.log("searchTerm: " + req.params.searchTerm);
            collection.find({title: req.params.searchTerm, artist:req.params.searchTerm, subject_type: req.params.searchTerm}).sort({date_added:-1}).toArray(function(err, docs) {
                assert.equal(err, null);
                console.log("Found the following records");
                console.log(docs);
                return res.json(docs);
            });
        }*/

        db.close();
    });
});


// Quick Search Links
app.get('/get/:filter', function(req,res,next){

    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        var collection = db.collection('artwork');

        if(req.params.filter == 'artist'){ // Display all artists
            collection.distinct("artist", (function(err,docs) {
                console.log(docs);
                assert.equal(null,err);
                return res.json(docs);
            }));
        }else if(req.params.filter == 'subject'){ // Display all subjects
            collection.distinct("subject_type", (function(err,docs) {
                assert.equal(err, null);
                console.log("Found the following records");
                console.log(docs);
                return res.json(docs);
            }));
        }else if(req.params.filter == 'recent'){ // Display all art ordered by recently added
            collection.find({}).sort({date_added:-1}).toArray(function(err, docs) {
                assert.equal(err, null);
                console.log("Found the following records");
                console.log(docs);
                return res.json(docs);
            });
        }

        db.close();
    });
});

// Add art to DB
app.post('/insert', function(req, res, next) {
    var mostRecent = new Date(2010, 1, 1).getTime() / 1000;
    var fileToSave;
    var imgFile;
    var fullImgPath = '';

    fs.readdir("./public/uploads",function(err,list){
        list.forEach(function (file) {

            fullImgPath = "/Users/Melanie/Documents/CPP Spring 2017/ CS 480 Software Engineering/ArtLicensingMarketplace/react-bootstrap-boilerplate/public/uploads/" + file;
            imgFile = fs.statSync(fullImgPath);

            if(imgFile.birthtime > mostRecent){
                mostRecent = imgFile.birthtime;
                fileToSave = "./uploads/" + file;
                console.log('found a file');
            }
        })
    });


    /* --- Openchain Submit --- */
    var conv = require('binstring');
    var seed = rollingSeed + fullImgPath;
    seed = conv(seed, {in:'utf8', out:'hex'});
// Load a private key from a seed
    var privateKey = bitcore.HDPrivateKey.fromSeed(seed, "openchain");
    var address = privateKey.publicKey.toAddress();
    rollingSeed = address;
// Calculate the accounts corresponding to the private key
    var issuancePath = "/asset/p2pkh/" + address + "/";
    var assetPath = issuancePath;
    var walletPath = "/p2pkh/" + address + "/";

    console.log("Rolling Seed: " + rollingSeed);
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
                .updateAccountRecord(issuancePath, assetPath, -1);
        })
        .then(function (transactionBuilder) {
            // Add 100 units of the asset to the target wallet path
            return transactionBuilder.updateAccountRecord(walletPath, assetPath, 1);
        })
        .then(function (transactionBuilder) {
            // Submit the transaction
            return transactionBuilder.submit();
        })
        .then(function (result) { console.log(result); });


    /* --- MongoDB --- */
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected successfully to server: req.body: " + req.body);
        var collection = db.collection('artwork');
        // Insert some documents
        collection.insert([
            {
                "title":req.body.title,
                "artist": req.body.artist,
                "available": true,
                "blockchain_id": address,
                "date_added": new Date(),
                "description": req.body.desc,
                "price": req.body.price,
                "subject_type": req.body.subj,
                "image_url" : fileToSave
            }], function(err, result) {
        });
        res.send("successful input into db");
        db.close();
    });
});

