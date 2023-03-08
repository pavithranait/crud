const path = require('path');
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb3",
  });

 connection.connect(function (error) {
    if (!!error) {
      console.log(error);
    } else {
      console.log("Connected!:)");
    }
  });

  //set videw engine
  app.set('views', path.join(__dirname, 'views'));

  //set view engine
  app.set('view engine', 'ejs');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    // res.send( "Crud Operation"
    // )
    let sql = "SELECT * FROM users";
    let query = connection.query(sql, (err, rows) => {
        if(err) throw err;
        console.log(rows);
        res.send("post fecthed"
        );

    })
})
app.post('/', (req, res) => {
    // res.send( "Crud Operation"
    // )
    let sql = "SELECT * FROM users";
    let query = connection.query(sql, (err, rows) => {
        if(err) throw err;
        console.log(rows);
        res.send("post fecthed"
        );

    })
})

//server listening
app.listen(3000, () => {
    console.log("Server is running at port 3000")
})