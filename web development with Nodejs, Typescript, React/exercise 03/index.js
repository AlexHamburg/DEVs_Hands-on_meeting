const http = require('http');
const express = require('express');

const app = express();
const path = require("path");
const fs = require("fs");

app.use(cors());

app.get("/files/*", function (req, res) {
    const filePath = path.join(__dirname + req.path)
    console.log("opens file: " + req.path + "in : " + filePath);
    res.sendFile(filePath);
});

app.get("/icon", function (req, res) {
    const ids = req.query.id;
    console.log("get Icon", ids);
    const filePath = path.join(__dirname, "/assets/", "icons.json");
    const list = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const result = {};
    ids.forEach(id => {
        const name = "src.icons." + id;
        result[id] = list[name] || {
            is: "empty"
        };
    })
    res.json(result);

});

app.get("/*", function (req, res) {
    console.log(req.headers.host);
    const filePath = path.join(__dirname, "/assets/", req.path);
    console.log("opens file: " + req.path + "in : " + filePath);
    res.sendFile(filePath);
});

const httpServer = http.createServer(app);
const httpServerInstance = httpServer.listen(8080);

process.on("exit", function () {
    console.log("close Server");
    httpsServerInstance.close();
    httpServerInstance.close();
})