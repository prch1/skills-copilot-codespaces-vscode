//Create web server             

var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var comments = [];
var server = http.createServer(function(req,res){
    var parseUrl = url.parse(req.url,true);
    var pathName = parseUrl.pathname;
    if(pathName ===
        '/'){
        fs.readFile('./index.html',function(err,data){
            if(err){
                console.log(err);
                res.end('404 Not Found');
            }
            res.end(data);
        });
    }       

    else if(pathName === '/comment'){
        var comment = parseUrl.query.comment;
        comments.push(comment);
        res.end(JSON.stringify(comments));
    }
    else{
        fs.readFile(path.join
            (__dirname,pathName),function(err,data){
            if(err){
                console.log(err);
                res.end('404 Not Found');
            }
            res.end(data);
        });
    }
}
);
server.listen(3000,function(){
    console.log('Server is running');
});     

