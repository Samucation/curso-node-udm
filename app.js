
/** Comandos para criar  a aplicação
 * 
 * Usar --save para salvar localmente as APIs
 * 
 * Instalando o Express: npm install express --save
 * Instalando o EJS: npm install ejs --save
 * 
 * ## AULA DE NÚMERO 20 ##
 */

var app = require('./config/server');

var rotaNoticias = require('./app/routes/noticias')(app);
var rotaHome = require('./app/routes/home')(app);
var rotaFormInclusaoNoticia = require('./app/routes/forumulario_inclusao_noticia')(app);

/** Chamando o servidor para que o browser possa acessar a request */
app.listen(3000, function() {
    console.log("Servidor inicializado com express");
});


