import express from 'express';
import corsPrefetch from 'cors-prefetch-middleware';
import imagesUpload from 'images-upload-middleware';

const app = express();

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
