const express = require("express");
const app = express();
const fetch = require("node-fetch");
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
app.get("/bookmark-service", async ({
    query: {
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

        const {
            error
        } = await fetch(`http://localhost:3000/bookmark-service?user=?${user}`).then(res => res.json());

        if (error) {
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