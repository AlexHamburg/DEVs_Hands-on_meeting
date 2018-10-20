const express = require('express');
const app = express();


/**
 * TODO: 2.1 instead of hello world write path
 */
app.get("/*", function (req, res) {
    res.send("hello world")
});

/**
 * TODO: 2.2 on /insomnia send back
 * "keep calm and sleep" 
 * where you should write it before or after /* ?
 */

app.listen(3000);