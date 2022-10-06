const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "10222478",
    database: "cia",
});

app.post('/', (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM id WHERE username = ? AND password = ?",
        [username, password],
        (err, result) => {
            if(err) {
                res.send({err: err})
            }

            if(result) {
                res.send(result)
            } else {
                res.send({message: "Usuario/contrasena incorrecta!"})
            }
        }
    );
})

app.listen(5000, () => {
    console.log("running server");
});