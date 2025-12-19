const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
    "/docs",
    express.static("../docs-site/build")
);


// export default app;
module.exports = app
