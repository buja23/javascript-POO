const express = require('express');
const path = require('path');
const fs = require('fs/promises');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = 3000;
const usuariosPath = path.join(__dirname, 'usuarios.json');

// --- MIDDLEWARES ---
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Esta linha agora é a ÚNICA responsável por servir o index.html, home.html, etc.
app.use(express.static(path.join(__dirname, 'public')));

const loginLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, 
    max: 5, 
    message: 'Muitas tentativas de login a partir deste IP, por favor, tente novamente após 10 minutos.',
    standardHeaders: true, 
    legacyHeaders: false, 
});

// --- ROTAS ---

// A ROTA app.get('/') FOI REMOVIDA DAQUI

app.post('/login', loginLimiter, async (req, res) => {
    const { usuario, senha } = req.body;

    if (!usuario || !senha) {
        return res.status(400).send('Usuário e senha são obrigatórios.');
    }

    try {
        const dados = await fs.readFile(usuariosPath, 'utf8');
        const usuarios = JSON.parse(dados);
        
        const usuarioEncontrado = usuarios.find(u => u.usuario === usuario && u.senha === senha);

        if (usuarioEncontrado) {
            console.log(`Login bem-sucedido para o usuário: ${usuario}`);
            res.redirect('/home.html');
        } else {
            console.warn(`Tentativa de login falhou para o usuário: ${usuario}`);
            res.status(401).send('Usuário ou senha inválidos. <a href="/">Tentar novamente</a>');
        }
    } catch (error) {
        console.error('Erro ao processar o login:', error);
        res.status(500).send('Ocorreu um erro no servidor.');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});