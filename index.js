const express = require ("express");
const bodyParser= require ("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
require("./routes/main")(app);
app.set("views",__dirname + "/views");
app.listen(port, () => console.log(`Example app listening on port ${port}!`))