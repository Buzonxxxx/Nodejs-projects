const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) console.log("Unable to connect to database!")

  console.log("Connected correctly!")

  const db = client.db(databaseName);

  // db.collection("users").insertOne({
  //   name: "Louis",
  //   age: 35
  // }, (error, result) => {
  //   if(error) console.log("Unable to insert user")

  //   console.log(result.ops)
  // })

  // db.collection("users").insertMany([
  //   {
  //     name: "Jane",
  //     age: 28

  //   }, {
  //     name: "Gunther",
  //     age: 33
  //   }
  // ], (error, result) => {
  //   if(error) console.log("Unable to insert user")
  //   console.log(result.ops)
  // })

    db.collection('tasks').insertMany([
      {
        description: "Buy avengers tickets",
        completed: false
      }, {
        description: "Drive to Mioli",
        completed:  false
      }
    ], (error, result) => {
      if(error) console.log("Unable to insert user")
      console.log(result.ops);
    })
});

