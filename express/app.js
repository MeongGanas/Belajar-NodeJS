const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;

app.get("/", (req, res) => {
  // res.send("Hello World!");

  // res.json({
  //   nama: "Farrel",
  //   email: "farreluken@gmail.com",
  //   noHP: 08123123123,
  // });

  res.sendFile("./index.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  // res.send("Contact");
  res.sendFile("./contact.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

// app.get("/product/:id/category/:idCat", (req, res) => {
//   res.send(
//     `Product ID : ${req.params.id} <br> Category ID : ${req.params.idCat}`
//   );
// });

app.get("/product/:id", (req, res) => {
  res.send(
    `Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`
  );
});

app.use("/", (req, res) => {
  res.status(404);
  // res.send("404 Not Found");
  res.sendFile("./404.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`ok, app listening on port ${port}`);
});
