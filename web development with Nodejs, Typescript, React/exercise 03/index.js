const express = require('express');
const app = express();
const path = require("path");
const fs = require("fs");

app.get("/admin", function (req, res) {
    const filePath = path.join(__dirname, "tocken.txt");

    /**
     * TODO: 3.1 is it good idea to use syncronious readFile? why is it Bad?
     */
    const Secrettocken = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    /**
     * TODO: 3.2 find some js specific failure, why is it security risk?
     *  what if tocken is empty?
     */
    const inputTocken = req.query.tocken;
    const redirectPath = inputTocken == Secrettocken ? "/sucsses" : "/fail";

    res.status(201);
    res.redirect(redirectPath)
});


/** 
 *  TODO: 3.3 write success and Fail page
 */
app.get("/sucsses", function (req, res) {
    res.send("you are admin")
});

/** 
 *  TODO: 3.4 write success and Fail page
 */
app.get("/fail", function (req, res) {
    res.send("something gone wrong")
});


/**
 * TODO: 3.5 on every doamin: /files/job-01 returns text from files/job-01.txt
 */
app.get("/files/*", function (req, res) {

    const filePath = path.join(__dirname + req.path)
    res.sendFile(filePath);

});

/**
 * TODO: 3.6 in returns page 404 with text page not found and header 404
 */
app.get("/*", function (req, res) {
    const message = "Page not found"

    res.status(404);
    res.setHeader("title", message)
    res.send(message)
});

app.listen(3000);