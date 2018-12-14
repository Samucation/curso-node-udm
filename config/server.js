/** Iniciando a comunicação servidor com browser */
var express = require('express'); //invocando o express e guardando em um atributo, pode ser chamado assim: "var express = require('express')()"
var app = express(); // poderia ser direto usando "var express = require('express')()"
app.set('view engine', 'ejs'); //Especificando que o ejs é o novo motor de views da aplicação.
app.set('views', './app/views'); //Apontando para o diretório das views para que possa encontrar as paginas.

module.exports = app;