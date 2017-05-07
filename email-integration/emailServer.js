

var express = require('express');
var app = express();

app.get("/", function(request, response){
  response.send(__dirname+ '/views/index.html')
});

app.post("/testWebhook", function(request, response){
  response.sendStatus(200);
  console.log("WEBHOOK shall be happy")
});

// listen for requests
// var listener = app.listen(process.env.PORT, function () {
//   console.log('Your app is listening on port ' + listener.address().port);
// });
