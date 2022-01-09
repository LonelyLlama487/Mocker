const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("index"));
// Establishing the port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App started on port ${PORT}`));
