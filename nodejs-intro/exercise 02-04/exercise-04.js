const express = require('express');
const app = express();
const path = require("path");
const {
    readfile
} = require("fs");

app.get("/admin", function (req, res) {
    const filePath = path.join(__dirname, "tocken.txt");

    const Secrettocken = readfile(filePath, 'utf8', file => {
        JSON.parse(file)
        const inputTocken = req.query.tocken;
        const redirectPath = inputTocken == Secrettocken ? "/sucsses" : "/fail";
        res.status(201);
        res.redirect(redirectPath)
    });
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
app.listen(3000);