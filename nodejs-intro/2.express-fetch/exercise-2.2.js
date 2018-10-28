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


/**
 * TODO: 5 on every doamin: /files/job-01 returns text from files/job-01.txt
 */
app.get("/files/*", function (req, res) {

    res.sendFile(path.join(__dirname, req.path));

});

/**
 * TODO: 6 in returns page 404 with text page not found and header 404
 */
app.get("/*", (req, res) => {
    const message = "Page not found"
    res.status(404);
    res.send("not found");
});

app.listen(3000);