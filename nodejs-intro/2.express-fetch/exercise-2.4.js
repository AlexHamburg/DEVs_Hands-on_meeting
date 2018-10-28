const express = require("express");
const app = express();
const {
    write,
    read
} = require("./myIO");

const path = "./register.json";

app.get("/bookmark-service", async (req, res) => {

    const {
        user
    } = req.query;

    try {

        if (!user) {
            throw new Error("no user to check");
        }

        const register = JSON.parse(await read(path));

        if (register.find(x => x === user)) {
            throw new Error("already registered");
        }

        await write("./register.json", JSON.stringify([...register, user]));

        res.status(201).send("success");
    } catch (err) {
        res.status(403).send({
            error: err.message
        });
    }
});

app.listen(8080);