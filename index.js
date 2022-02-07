const express = require("express");
const app = express();
const port = 3000;
//const path = require("path");
const isPrime = require("./prime");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Hello Hi How Are You!");
});
app.get("/prime/:num", (req, res) => {
  //res.sendFile(path.join(__dirname + "/base.html"));
  //   var abc = req.params.num;
  res.send(isPrime(req.params.num));
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
