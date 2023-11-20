const express = require('express');
const router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017/';
const mongoose = require('mongoose');
var db = mongoose.connection;

router.get('/record', (req, res, next) => {
  const item = req.query.item;
  MongoClient.connect(url, function(err, db) {
    console.log(url)
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { name: item };
    dbo.collection("demonstration").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log(`One item (${item}) inserted.`);
      db.close();
    })
  });
})
module.exports = router;
