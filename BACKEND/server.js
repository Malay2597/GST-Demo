const express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Malay@123",
    database: "gstproject"
});

var getCategoryQuery = "SELECT * from products;";
var insertCategoryQuery = "insert into products (CATEGORYNAME,GST) values ? ";

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get("/getCategory", function (req, res) {
    con.query(getCategoryQuery, (err, result) => {
        if (err) throw err;
        res.send(result);
        res.end();
    });
});

app.post("/addCategory", ({ body: { name: CategoryName, GST: GstRate } }, res) => {

    var values = [[CategoryName, GstRate]];
    con.query(insertCategoryQuery, [values], function (err, result1) {
        if (err) {
            res.send({ "text": 'Item already exists' ,"isError":true});
        }
        else {
            res.status(200).send({ "text": "Category added succesfully","isError":false })
            res.end();
        }
    });
});

app.listen(8000);