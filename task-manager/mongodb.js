// CRUD

// insert, find, update, delete

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) console.log("Unable to connect to database!");

    console.log("Connected correctly!");

    const db = client.db(databaseName);

    db.collection("tasks").deleteOne({
      description: "Drive to Mioli"
    })
    .then(result => {
      console.log(result.deletedCount)
    })
    .catch(error => {
      console.log(error)
    })
    // db.collection("tasks")
    //   .updateMany(
    //     {
    //       completed: true
    //     },
    //     {
    //       $set: {
    //         completed: false
    //       }
    //     }
    //   )
    //   .then(result => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("5cc3069753d6d1019be5fbe3")
    //     },
    //     {
    //       $inc: {
    //         age: 20
    //       }
    //     }
    //   )
    //   .then(user => {
    //     console.log(user);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }
);
