const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/", require("./routes/studentRoutes"));

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
