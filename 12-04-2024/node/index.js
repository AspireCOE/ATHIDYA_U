var http = require("http");
// url
var url = require("url");
// file system
var fs = require("fs");

const app = http.createServer((req, res) => {
    // fs.readFile("index.html", (err, data) => {
    //     res.writeHead(200, { "Content-Type": "text/html" });
    //     res.write(data);
    //     return res.end();
    // });
    fs.appendFile("sample.txt", "5", (err) => {
        if (err) throw err;
        console.log("saved");
    });
});

app.listen(8080);
