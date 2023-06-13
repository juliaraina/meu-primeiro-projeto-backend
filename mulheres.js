const express = require('express');
const router = express.Router();

const app = express();
const porta = 3333;

const mulheres = [
    {
        nome: 'Julia',
        imagem: 'https://github.com/juliaraina.png',
        minibio: 'lorem ipsum dolor sit am'
    },
    {
        nome: 'Raina',
        imagem: 'https://github.com/juliaraina.png',
        minibio: 'lorem ipsum dolor sit am lorem'
    },
    {
        nome: 'Maria',
        imagem: 'https://github.com/juliaraina.png',
        minibio:'lorem ipsum dolor sit amet'
    }
]

function mostraMulheres(request, response) {
   response.json(mulheres);
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta);
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta);