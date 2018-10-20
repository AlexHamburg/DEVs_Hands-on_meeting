const express = require('express');
const app = express();
const path = require("path");
const {
    readFile,
    writeFile
} = require("fs");

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
    const filePath = path.join(__dirname, "tocken.txt");

    readFile(filePath, 'utf8', (error, tockenTXT) => {
        if (error) {
            return handleError();
        }

        const Secrettocken = JSON.parse(tockenTXT);

        const rightTocken = tocken == Secrettocken;

        if (!rightTocken) {
            return handleError();
        }

        readFile(path.join(__dirname, "register.json"), 'utf8', (error, registerJson) => {
            if (error) {
                return handleError();
            }

            const register = JSON.parse(registerJson);
            const isAlreadyRegistered = register.find(x => x === user);

            console.log(register, isAlreadyRegistered);

            if (isAlreadyRegistered) {
                return handleError();
            }

            let newRegister = JSON.stringify([...register, user], null, 2);

            writeFile("./register.json", newRegister, (error) => {

                if (error) {
                    return handleError();
                }

                res.status(201);
                res.redirect("/success")

            });
        })
    });
});

app.listen(3000);