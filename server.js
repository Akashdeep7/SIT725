console.log("Hello World!");

var a=15;
var b=34;
var c= a+b;

console.log("Sum Of a+b="  +c);


var express = require('express');
var app = express();

let accounts=[
{id:1,name:'George',deposit:15},
{id:2,name:'Peter',deposit:16},
{id:3,name:'Greg',deposit:18}

]

app.get('/',function(req,res)
{

res.send(accounts);    
}

)

app.listen(3000);