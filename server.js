/*eslint-disable-next-line*/
var express = require("express");
/*eslint-disable-next-line*/
var path = require("path");

const port = process.env.PORT || 3000;
const DIST_DIR = "./build";
const HTML_FILE = path.join(DIST_DIR, "index.html");

var app = express();
app.use(express.static(DIST_DIR));
app.get("*", (req, res) => {
    res.sendFile(HTML_FILE);
});
app.listen(port, function() {
    console.log(`app listening on port: ${port}`);
});
