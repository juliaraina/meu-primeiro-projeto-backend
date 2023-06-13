const express = require('express');
const router = express.Router();


const app = express();

const porta = 3333;

function mostraMulher(request, response) {
    response.json({
        nome: 'Julia Raina',
        imagem: 'https://github.com/juliaraina.png',
        minibio: 'lorem ipsum dolor sit'
    })
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta);
}

app.use(router.get('/mulher', mostraMulher));
app.listen(porta, mostraPorta);