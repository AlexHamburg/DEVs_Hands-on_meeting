const express = require("express");
const app = express();
const fetch = require("node-fetch");
const {
    read
} = require("./myIO");

app.get("/success", (_, res) => res.send("just Registered"));
app.get("/fail", (_, res) => res.send("something gone wrong"));

app.get("/register", async ({
    query: {
        user,
        tocken
    }
}, res) => {
    try {
        if (!tocken || !user) {
            throw new Error("no aozhorisation data");
        }

        const secret = await read("./tocken.txt");

        if (tocken != secret) {
            throw new Error("invalid Tocken");
        }

        const responce = await fetch("http://localhost:8080/bookmark-service", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user
            })

        })

        const {
            error
        } = await responce.json();



        if (error) {
            /**
             *  TODO: handle errors   
             */
            throw new Error(error);
        }

        res.status(201);
        res.redirect("/success");
    } catch (err) {
        console.error(`STOP: ${err.message}`);
        res.status(404);
        res.redirect("/fail");
    }
});

app.listen(3000);