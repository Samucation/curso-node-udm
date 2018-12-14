
/** Comandos para criar  a aplicação
 * 
 * Usar --save para salvar localmente as APIs
 * 
 * Instalando o Express: npm install express --save
 * Instalando o EJS: npm install ejs --save
 */
console.log("Iniciando a aplicação node JS");

/** Iniciando a comunicação servidor com browser */
var express = require('express'); //invocando o express e guardando em um atributo, pode ser chamado assim: "var express = require('express')()"
var app = express();// poderia ser direto usando "var express = require('express')()"

//Especificando que o ejs é o novo motor de views da aplicação.
app.set('view engine', 'ejs');


app.get('/tecnologia', function(req, res){
    res.render("secao/tecnologia");
});

/** Inserindo os endereçamentos para o browser com express */
app.get('/', function(req, res){
    res.send("<html><body><h1>Portal de noticias</h1></body></html>");
});

/** Chamando o servidor para que o browser possa acessar a request */
app.listen(3000, function() {
    console.log("Servidor inicializado com express");
});


