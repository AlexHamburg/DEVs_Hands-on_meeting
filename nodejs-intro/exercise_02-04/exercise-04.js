const express = require('express');
const app = express();
const path = require("path");
const {
    readFile
} = require("fs");

app.get("/sucsses", (_, res) => res.send("you are admin"));

app.get("/fail", (_, res) => res.send("something gone wrong"));

app.get("/admin", function (req, res) {
    const filePath = path.join(__dirname, "tocken.txt");

    readFile(filePath, 'utf8', (error, file) => {

        const Secrettocken = JSON.parse(file);

        const inputTocken = req.query.tocken;
        const redirectPath = inputTocken == Secrettocken ? "/sucsses" : "/fail";
        console.log(redirectPath, inputTocken);
        res.status(201);
        res.redirect(redirectPath)
    });
});




app.listen(3000);