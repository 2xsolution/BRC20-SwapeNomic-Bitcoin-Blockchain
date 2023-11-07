const express = require("express");
const { swap } = require("./nodeApp/controllers/swapController");

const app = express();
const port = 4000;

app.get("/swap", swap);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
