import express from 'express';
import corsPrefetch from 'cors-prefetch-middleware';
import imagesUpload from 'images-upload-middleware';

const fs = require("fs");

const app = express();

var MongoClient = require('mongodb');
var assert = require('assert');
var url = 'mongodb://localhost:27017/blockart';

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/static',express.static('./server/static'));

app.use(corsPrefetch);


app.post('/notmultiple', imagesUpload(
    './public/uploads',
    './uploads'
));

app.listen(9090, err => {
    if(err){
        return console.error(err);
    }
    console.log('Listening on: 9090');
});

// Display artists in order (ascending)
app.get('/get', function(req,res,next){

    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        var collection = db.collection('artwork');
        collection.find({}).sort({'artist':1}).toArray(function(err, docs) {
            assert.equal(err, null);
            console.log("Found the following records");
            console.log(docs);
            return res.json(docs);
        });

        db.close();
    });
});

// Add art to db
app.post('/insert', function(req, res, next) {
    var mostRecent = new Date(2010, 1, 1).getTime() / 1000;
    var fileToSave;
    var imgFile;
    var fullImgPath;

    fs.readdir("./public/uploads",function(err,list){
        list.forEach(function (file) {

            fullImgPath = "/Users/Melanie/Documents/CPP Spring 2017/CS 480 Software Engineering/ArtLicensingMarketplace/react-bootstrap-boilerplate/public/uploads/" + file;
            imgFile = fs.statSync(fullImgPath);

            if(imgFile.birthtime > mostRecent){
                mostRecent = imgFile.birthtime;
                fileToSave = "./uploads/" + file;
                console.log('found a file');
            }
        })
    });
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
                "blockchain_id": "blockchain_id",
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

