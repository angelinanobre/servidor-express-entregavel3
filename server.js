// Importa a biblioteca Express para criar o servidor
const express = require("express");

// Cria a aplicação Express
const app = express();

// Permite que o servidor receba e interprete dados no formato JSON
app.use(express.json());

// Cria uma rota POST chamada "/usuario"
app.post("/usuario", (req, res) => {
    console.log(req.body);
    res.send("Usuário recebido!");
});

// Inicia o servidor na porta 3001
// O servidor fica aguardando novas requisições
app.listen(3002, () => {
    console.log("Servidor rodando na porta 3002");
});