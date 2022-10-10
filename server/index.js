const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();


app.use(express.json());
app.use(cors());


const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Prueba123",
    database: "cia",
    port: "3306",
});  

// db.connect((error) => {
//     if(error){
//         throw error
//     }
//     else{
//         console.log("hola")
//     }
// })

app.post('/login', (req, res)=> {
    user = req.body.username;
    pass = req.body.password;
    db.connect(() => {
        db.query("SELECT * FROM estudiante WHERE ID_est = " + "'" +user + "'" +" AND password = " + "'" + pass + "'",
        (err,result) =>{
            if(err){
                console.log(err);
            }
            else{
                res.json({message : result})
            }
            
        })
    })
    //res.json({message: "no entro"})
})

app.listen(3001, () => {
    console.log("running server");
});