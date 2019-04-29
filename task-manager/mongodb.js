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

    db.collection("tasks").updateMany(
      {
        completed: false
      },
      {
        $set: {
          completed: true
        }
      }
    )
    .then(result => {
      console.log(result.modifiedCount)
    })
    .catch(error => {
      console.log(error)
    })
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
