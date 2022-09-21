var http = require("http");
var URL = require("url");

var server = http.createServer(function (req, res) {
    var myURL = "https://www.youtube.com/watch?v=BpCVIkrhpiU";
    var URLobj = URL.parse(myURL, true);
    var hostname = URLobj.host;
    var pathname = URLobj.pathname;
    console.log(pathname)
    var searchname = URLobj.search;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`This is my ${pathname}`)
    // res.write(pathname);

});

server.listen(5050);
console.log("succesful");