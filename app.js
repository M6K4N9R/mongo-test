const express = require("express");

// init app & middleware

const app = express();

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});

//routes

app.get("/books", (req, res) => {
  res.json({ mssg: "Welcome to the API" });
});

//continue with #5 @ 4:17
// ~ mongosh gives an error: MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017
// keep working on that
