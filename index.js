const express = require('express');
const app = express();
const port = process.mainModule ? 3000 : 3000;

app.get('/', (req, res) => {
  res.send('Olá da DevFlow Solutions! Pipeline CI/CD ativo.');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});