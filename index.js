
const express = require("express");
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(3000, () => {
  console.log("Starting node.js at port 3000");
});

app.get('/', (req, res) => {
    return res.send({
        error: false,
        message: "Welcom to brabrabra",
        written_by: "STB",
    })
})



var con = mysql.createConnection({
  host: "stb-z.com",
  user: "stbz_db",
  password: "stbz_db963741",
  database: "stbz_Test"
});

con.connect();

app.get('/info/:id', (req, res) =>{
    
    con.query('SELECT * FROM CustomerInfo WHERE id = '+ req.params.id, (error, results, fields) =>{
        if (error) throw error;

        let message = "";
        if (results === undefined || results.length == 0){
            message = "No Infomation";
        }
        else{
            message = "Succes";
        }
        return res.send({error: false, data: results, message: message});
    })
})
module.exports = app;


