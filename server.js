var express = require('express');
var app = express();


app.get("/",function(req,res){
  res.send("Hello");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});

