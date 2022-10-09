const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();


app.use(express.json());
app.use(cors());


const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "10222478",
    database: "cia",
});

app.post('/login', (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM id WHERE username = ? AND password = ?",
        [username, password],
        (err, result) => {
            if(err) {
                res.send({err: err})
            }

            else if(result) {
                res.send(result)
            } else {
                res.send({message: "Usuario/contrasena incorrecta!"})
            }
        }
    );
})

app.listen(3001, () => {
    console.log("running server");
});