const express = require("express");

const PORT = process.env.PORT || 6080;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

let exphbs = require("express-handlebars");

app.engine("handle", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  