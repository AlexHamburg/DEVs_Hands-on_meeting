const express = require('express');
const app = express();
const {
    read,
    write
} = require("./myIO");

app.get("/success", (_, res) => res.send("you are admin"));
app.get("/fail", (_, res) => res.send("something gone wrong"));

/** 
 * http://localhost:3000/admin?tocken=1234567890&user=dato 
 * 
 */

app.get("/register", async ({
    query: {
        user,
        tocken
    }
}, res) => {

    try {
        if (!tocken || !user) {
            throw new Error("no aozhorisation data")
        }
        const secret = await read("./tocken.txt");

        if (tocken != secret) {
            throw new Error("invalid Tocken")
        };

        const register = JSON.parse(await read("./register.json"));

        if (register.find(x => x === user)) {
            throw new Error("already registered")
        }

        const newRegister = [...register, user];
        await write("./register.json", JSON.stringify(newRegister, null, 2));

        res.status(201);
        res.redirect("/success")
    } catch (err) {
        console.error(`STOP: you have ${err.message}`);
        res.status(404);
        res.redirect("/fail");
    }
});


app.listen(3000);