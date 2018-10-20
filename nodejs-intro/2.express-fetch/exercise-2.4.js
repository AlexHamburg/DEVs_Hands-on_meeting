const express = require("express");
const app = express();
const {
    write
} = require("./myIO");
/**
 * TODO: write bookmark service on endpoint: http://localhost:8080/bookmark-service
 */

app.get( /** TODO: 1 */ "<your Path>", (req, res) => {

    try {

        if ( /* TODO: 2 if username dont exists*/ ) {
            throw new Error("no user to check");
        }

        const register = JSON.parse( /** TODO: 3 read file */ );

        if (register.find(x => x === user)) {
            throw new Error("already registered");
        }

        await write("./register.json", JSON.stringify( /* TODO: 4 updated user list  */ ));

        res.status(201).send( /** succes message */ );
    } catch (err) {
        res.status(403).send({
            error: err.message
        });
    }
});

app.listen( /* TODO: 5 set port */ );