var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var Pool = require('pg').Pool;
var config = {
  user: 'jeyasuryav',
  database: 'jeyasuryav',
  host: 'db.imad.hasura-app.io',
  password: process.env.DB_PASSWORD,
  port: '5432',
    
};
var pool = new Pool(config);
app.get('/test-db',function(req,res){
    pool.query('SELECT * FROM articles',function(err,result)
    {
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            res.send(JSON.stringify(result.rows));
        }
    });
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var articles={
     "article1":{
     title:'article 1',
     date:'8/6/17',
     content:'this is my content'

    },
      "article2":{
     title:'article 2',
     date:'10/6/17',
     content:'this is my content'

    },
     "article3":{
     title:'article 3',
     date:'9/6/17',
     content:'this is my content'

 }
};
var counter = 0;
app.get("/counter",function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

function createtemplate(data)
{
    var title=data.title;
    var date=data.date;
    var content=data.content;
    var template=`<html>
        <head>
            <title>
                ${title}
            </title>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div>
                <a href="/">homepage</a>
            </div>
            <div>
                <h1>${title}</h1>
                <p>${date}</p>
                <p>${content}</p>
            </div>

        </body>
    </html>`;
    return template;
}
var c = {
    names: [],
    comments: []
};
app.get('/submit-name',function(req,res){// /submit-name?name=" ";
var name=req.query.name;
c.names.push(name);
var comment=req.query.comment;
c.comments.push(comment);
var carea='';
for(var i=0;i<c.names.length;i++)
        carea +=`<div class="comment">${c.comments[i]}<br>
        by${c.names[i]}</div><hr/>`;
res.send(JSON.stringify(carea));
});

app.get('/articles/:articleName', function (req, res) {
    var articleName=req.params.articleName;
    var data;
    pool.query("SELECT * FROM articles WHERE title = '"+articleName+"'",function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            if(result.rows.length === 0){
                res.status(404).send("article not found");
            }
            else{
                data = result.rows[0];
            }
            
            }
        }
    );
  //  res.send(JSON.stringify(data));
 res.send(createtemplate(data));
});
app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(__dirname,'ui','main.js'));
});
/*
app.get('/article3', function (req, res) {
  res.sendFile(path.join(__dirname,  'art3.html'));
});*/
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
