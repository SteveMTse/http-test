var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var auth = require('./auth.js');
var bodyParser = require('body-parser')

//npm install body-parser --save for body parser
//app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/foo/:id', function(req, res){
  //console.log(req);
  //res.sendfile('home.json');
  console.log(req.params);
  //console.log(req.query);
  res.send('Successed!');
});
app.post('/foo/:id', function(req, res){
  //console.log(req);
  //res.sendfile('home.json');
   console.log(req.body);
   console.log(req.get('Authorization'));
  //console.log(req.query);
  //console.log(req.query);
  res.send({ status: 'SUCCESS' });
});

//
// app.post('/foo:id', function(req, res){
//   console.log('OK');
//   var a = req.body.foo
//   console.log(a);
//   //res.sendfile('home.json');
//   res.send('Done!')
// });
//
// //Whenever someone connects this gets executed
// io.on('connection', function(socket){
//   console.log('A user connected');
//
//   socket.on('ClientData',function(data){
//     console.log(data);
//   });
//
//   socket.on('Authentication', function(username, password){
//     //console.log('Username: '+username+' Password: '+password+'\n');
//     //console.log(auth.authentication(username,password));
//     socket.emit('ReturnMessage', {description: auth.authentication(username,password)})
//   });
//
//   //Whenever someone disconnects this piece of code executed
//   socket.on('disconnect', function () {
//     console.log('A user disconnected');
//   });
//
// });
//
// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });

http.listen(3000, function(){
  console.log('listening on *:3000');
});
