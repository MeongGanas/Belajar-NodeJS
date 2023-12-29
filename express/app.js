const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // res.send("hello");
  res.sendFile("./index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});
app.get("/contact", (req, res) => {
  res.sendFile("./contact.html", { root: __dirname });
});

app.get("/product/:id/category/:idCat", (req, res) => {
  res.send(`product ID: ${req.params.id}, category: ${req.params.idCat}`);
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("404 Not Found");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
