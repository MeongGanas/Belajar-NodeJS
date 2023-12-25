const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

// ejs
app.set("view engine", "ejs");
app.use(expressLayouts);

app.get("/", (req, res) => {
  // res.sendFile("./index.html", { root: __dirname });
  const persons = [
    {
      nama: "Farrel",
      email: "farreluken@gmail.com",
    },
    {
      nama: "Biji",
      email: "biji@gmail.com",
    },
  ];
  res.render("index", {
    nama: "Farrel",
    title: "Halaman Home",
    persons,
    layout: "layouts/main-layout",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Halaman Contact",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "Halaman About",
  });
});

app.get("/product/:id", (req, res) => {
  res.send(
    `Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`
  );
});

app.use("/", (req, res) => {
  res.status(404);
  res.sendFile("./404.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`ok, app listening on port ${port}`);
});
