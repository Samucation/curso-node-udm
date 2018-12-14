
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


app.get('/', function(req, res){
    res.render("home/index");
});

app.get('/formulario_inclusao_noticia', function(req, res){
    res.render("admin/form_add_noticia");
});

app.get('/noticias', function(req, res){
    res.render("noticias/noticias");
});

/** Chamando o servidor para que o browser possa acessar a request */
app.listen(3000, function() {
    console.log("Servidor inicializado com express");
});


