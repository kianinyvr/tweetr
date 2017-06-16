"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err,db)=> {
  if (err){
    console.error("Faild to connect: value,  ${MONGODB_URI}");
    throw err;
  }


  console.log("Connected to mongodb: ${MONGODB_URI}");

  //retrive all the tweet in our tweets collection.

  db.collection("tweets").find({}, (err, results) => {
    if(err) throw err;

    console.log("for each item in yielded by the cursor:");
    results.each((err,item) => console.log(" ", item));


  db.close();

  });
});