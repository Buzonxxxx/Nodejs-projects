const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) console.log("Unable to connect to database!")

  console.log("Connected correctly!")

  const db = client.db(databaseName);

  // db.collection("tasks").findOne({ _id: new ObjectID("5cc30fa8a86f3405c031eae1")}, (error, user) => {
  //   if(error) console.log("Unable to fetch")
  //   console.log(user)
  // })

  // db.collection("tasks").find({completed: false}).toArray((error, tasks) => {
  //   if(error) console.log("Unable to fetch")
  //   console.log(tasks)
  // })

  // db.collection("users").insertOne({
  //   name: "Levi",
  //   age: 0.5
  // }, (error, result) => {
  //   if(error) console.log("Unable to insert user")

  //   console.log(result.ops)
  // })

  // db.collection("users").insertMany([
  //   { 
  //     name: "Anney",
  //     age: 36
  //   }, {
  //     name: "Annie",
  //     age: 37
  //   }
  // ], (error, result) => {
  //   if(error) console.log("Unable to insert")
  //   console.log(result.ops)
  // })
});

