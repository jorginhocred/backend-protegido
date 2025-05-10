const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/dados", (req, res) => {
  res.send("🔒 Conteúdo secreto vindo do backend!");
});

app.listen(PORT, () => console.log("API rodando"));
