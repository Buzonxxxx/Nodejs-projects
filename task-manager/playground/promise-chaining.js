require("../src/db/mongoose");
const User = require("../src/models/user");

// promise chaining

// User.findByIdAndUpdate("5cd669ca54737b30c2970246", {
//   age: 35,
//   name: "louis.liao",
//   password: "123455667788"
// })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 35 });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });


// await/async
const updateAgeAndCount = async (id, age) => {
  await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5cd669ca54737b30c2970246", 5)
  .then(count => {
    console.log("count", count);
  })
  .catch(e => {
    console.log("e", e);
  });
