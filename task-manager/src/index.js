const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});

const jwt = require('jsonwebtoken');
const myfunc = async () => {
  const token = jwt.sign({ _id: '5cdfdb206efb691f172a1fdc' }, 'randomstrings', { expiresIn: '7 days' });
  console.log(token)
  const data = jwt.verify(token, 'randomstrings')
  console.log(data)
}

myfunc()