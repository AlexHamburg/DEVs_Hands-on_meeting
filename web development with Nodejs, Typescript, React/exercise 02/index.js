const express = require('express');
const app = express();

/**
 * TODO: write path on every domain
 * TODO: on path /insomnia writes back you should take some retalin
 */

app.get("/*", function (req, res) {
    res.send("hello world")
});


app.listen(3000);