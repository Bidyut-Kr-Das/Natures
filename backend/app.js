const express = require("express");

const app = express();
const port = 3001;

app.listen(port, () => {
  console.log(`backend is running for natures app in port ${port}`);
});
