const express = require("express");
const bodyParser = require("body-parser"); // แปลง json body

// route
const meRoute = require('./route/me.route')
// end route

const app = express();
const port = 4321;

app.use(bodyParser.json()) // เรียกใช้

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/me', meRoute)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
