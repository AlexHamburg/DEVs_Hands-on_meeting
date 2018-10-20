const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const {
    read,
    write
} = require("./promise-tool");

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.all("/bookmark-service", async ({
    body: {
        user
    }
}, res) => {

    try {
        if (!user) {
            throw new Error("no user to check");
        }

        const register = JSON.parse(await read("./register.json"));

        if (register.find(x => x === user)) {
            throw new Error("already registered");
        }

        const newRegister = [...register, user];
        await write("./register.json", JSON.stringify(newRegister, null, 2));

        res.status(201).send({
            success: "just registered"
        });

    } catch (err) {

        res.status(403).send({
            error: err.message
        });

    }
});

app.listen(8080);