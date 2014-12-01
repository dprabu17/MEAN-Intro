// define our app using express
var express = require('express'),
    app = express(), 
    meetupsController = require('./server/meetups.js'),
    path = require('path'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

// 127.0.0.1:27017
mongoose.connect('mongodb://localhost/mean-demo');

app.use(express.static(path.join(__dirname, '/public')));
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();
router.get('/',function(req, res){
  //res.send('hello world');
  res.sendFile(__dirname + '/app/views/index.html');
});

router.get('/api/meetups',meetupsController.list);

router.post('/api/meetups',meetupsController.create);

app.use('/', router);

var port = process.env.PORT || 3000;
app.listen(port , function(){
console.log('Server is running at port 3000');
});