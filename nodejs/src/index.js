var http = require('http');
var fs = require('fs');
var path = require("path");


const port = 80;

var server = http.createServer(function (req, res) {

    var filename = req.url;
    if (!filename || filename.startsWith("/?") || filename === '' || filename === '/' || filename == undefined)
        filename = '/index.html';

    console.log('url: ' + req.url);
    console.log('filename url: ' + filename);

    var filePath = path.normalize(path.join(__dirname + filename));

    //console.log('filePath: ' + filePath);

    fs.readFile(filePath, function (err, data) {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        if (filePath.toLowerCase().endsWith(".html"))
            res.writeHead(200, { 'Content-Type': 'text/html' });
        else if (filePath.toLowerCase().endsWith(".css"))
            res.writeHead(200, { 'Content-Type': 'text/css' });
        else if (filePath.toLowerCase().endsWith(".js"))
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
        else
            res.writeHead(200);
        if (data) {

            var title = "node5 ZoomAdmin Hello World app";
            var date = new Date();
            var year = date.getFullYear();

            data = data.toString().replace('$title', title);
            data = data.replace('$year', year);
            var appUrl = process.env.ZA_APP_URL;
            if (!appUrl)
                appUrl = '';
            data = data.toString().replace('$ZA_APP_URL', appUrl);

            res.end(data);
        }
    });



}).listen(port);

console.log(`Server running on ${port}`);