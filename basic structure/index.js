const express = require("express");
const app = express();
const port = 3001;

// API Calling
app.get("/", (req, res) => {
  res.sendFile("second.html", { root: __dirname });
});

// **** Calling API for first Name ****
app.get("/getFirstName", (req, res) => {
  res.sendFile("first.html", { root: __dirname });
});

// **** Calling API for last name ****
app.get("/getLastName", (req, res) => {
  res.sendFile("second.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
