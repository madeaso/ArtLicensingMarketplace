import express from 'express';
import corsPrefetch from 'cors-prefetch-middleware';
import imagesUpload from 'images-upload-middleware';

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

/*app.post('/insert',function (req,res) {
    console.log('successfully posted with express and axios');
});*/


app.post('/insert', function(req, res, next) {
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
                "subject_type": "somesubj",
                "image_url" : req.body.img
            }], function(err, result) {
        });
        db.close();
    });
});

