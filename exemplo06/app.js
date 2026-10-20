import express from 'express'; // carregando o express

// carregando o framework express na constante app. Também daria certo se chamasse a sintaxe espress(.get)
const app = express();

// Configuramos o EJS como nossa engine de visualização (template engine)
// Isso permite usar arquivos .ejs para gerar páginas HTML dinamicamente
app.set('view engine', 'ejs');

// CONFIGURANDO ROTAS (rota é um caminho que o usuário pode acessar via navegador, ou seja, o endereço da página)

// rota para página inicial
app.get('/', (req, res) => {
    const bandas = ['blue', 'red', 'green', 'bergamota'];
    res.render('index', {bandas}); // renderizando o arquivo index.ejs
})

// rota para página sobre
app.get('/sobre', (req, res) => {
    res.render('sobre');
})

/* 
// rota para página 404
app.get('/404', (req, res) => {
    res.render('404');
})
*/

// rota para página 404
app.use((req, res, next) => {
    res.status(404).render('404');
})

// servidor

app.listen(3000, () => {
    console.log(`Servidor rodando corretamente!`);
    
});
