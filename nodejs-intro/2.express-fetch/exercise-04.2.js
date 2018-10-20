const express = require('express');
const app = express();
const path = require("path");
const {
    read,
    write
} = require("./promise-tool");

app.get("/success", (_, res) => res.send("you are admin"));
app.get("/fail", (_, res) => res.send("something gone wrong"));

/** 
 * http://localhost:3000/admin?tocken=1234567890&user=dato 
 * 
 */

app.get("/register", function (req, res) {

    const handleError = () => {
        res.status(404);
        return res.redirect("/fail");
    }

    const {
        tocken,
        user
    } = req.query;

    if (!tocken || !user) {
        return handleError();
    }

    read("./tocken.txt")
        .then(secret => {
            if (tocken != secret) {
                throw new Error("invalid Tocken")
            };
        })
        .then(() => read("./register.json"))
        .then(registerJson => {
            const register = JSON.parse(registerJson);
            const isAlreadyRegistered = register.find(x => x === user);

            if (isAlreadyRegistered) {
                throw new Error("already registered")
            }

            return newRegister = JSON.stringify([...register, user], null, 2);
        }).then(register => write("./register.json", register))
        .then(() => {
            res.status(201);
            res.redirect("/success")
        }).catch(handleError)
});


app.listen(3000);