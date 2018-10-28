const express = require('express');
const app = express();

app.get("/insomnia", function (req, res) {
    res.send("qwrqwrqwr");
});


app.get("/*", function (req, res) {
    res.send(req.path)
});


app.listen(3000);