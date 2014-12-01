var express = require('express'),
    app = express(), // define our app using express
    path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

var router = express.Router();
router.get('/',function(req, res){
  //res.send('hello world');
  res.sendFile(__dirname + '/app/views/index.html');
});
app.use('/', router);

var port = process.env.PORT || 3000;
app.listen(port , function(){
console.log('Server is running at port 3000');
});
