const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 CI/CD Demo</h1>
    <h2>Application deployed by Jenkins!</h2>
  `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});