const express = require('express');
const app = express();
const path = require("path");
const fs = require("fs");

app.get("/admin", function (req, res) {
    const filePath = path.join(__dirname, "tocken.txt");


    const Secrettocken = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    const inputTocken = req.query.tocken;
    const redirectPath = inputTocken == Secrettocken ? "/sucsses" : "/fail";

    res.redirect(redirectPath)
});


app.get("/sucsses", (_, res) => {
    res.send("sucess");
})


app.get("/fail", (_, res) => {
    res.send("fail");
})


app.get("/files/*", function (req, res) {

    res.sendFile(path.join(__dirname, req.path));

});

app.get("/*", (req, res) => {
    const message = "Page not found"
    res.status(404);
    res.send("not found");
});

app.listen(3000);