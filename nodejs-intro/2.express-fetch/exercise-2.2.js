const express = require('express');
const app = express();
const path = require("path");
const fs = require("fs");

app.get("/admin", function (req, res) {
    const filePath = path.join(__dirname, "tocken.txt");

    /**
     * TODO: 1 is it good idea to use syncronious readFile? why is it Bad?
     */
    const Secrettocken = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    /**
     * TODO: 2 find some js specific failure, why is it security risk?
     *  what if tocken is empty?
     */
    const inputTocken = req.query.tocken;
    const redirectPath = inputTocken == Secrettocken ? "/sucsses" : "/fail";

    res.status(201);
    res.redirect(redirectPath)
});


/** 
 *  TODO: 3 write success and Fail page
 */
app.get("", () => {

})

/** 
 *  TODO: 4 write success and Fail page
 */
app.get("", () => {

})


/**
 * TODO: 5 on every doamin: /files/job-01 returns text from files/job-01.txt
 */
app.get("/files/*", function (req, res) {

    res.sendFile(path.join(__dirname + ""));

});

/**
 * TODO: 6 in returns page 404 with text page not found and header 404
 */
app.get("/*", (req, res) => {
    const message = "Page not found"

});

app.listen(3000);