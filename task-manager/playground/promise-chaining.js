require("../src/db/mongoose");
const User = require("../src/models/user");

// 5cd6338e65151421d2e42a05

User.findByIdAndUpdate("5cd669ca54737b30c2970246", {
  age: 35,
  name: "louis.liao",
  password: "123455667788"
})
  .then(user => {
    console.log(user);
    return User.countDocuments({ age: 35 });
  })
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log(e);
  });
