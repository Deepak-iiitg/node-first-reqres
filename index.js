const http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200,"content-type:text/plain");
    switch(req.url){
        case '/about':
            res.end("Welcome to about us page");
            break;
        case '/home':
            res.end("Welcome to home page");
            break;
        case '/node':
            res.end("Welcome to node js project");
            break;
        default:
            res.end("404 page not found");            
    }
}).listen(4000);