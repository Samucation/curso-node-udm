

console.log("Iniciando a aplicação node JS");

/** Iniciando a comunicação servidor com browser */
var http = require('http'); //Acrescentando a biblioteca http usando "require"

/** Chamando o servidor para que o browser possa acessar a request */
var server = http.createServer(function(req, res) {
    var categoria = req.url;
   
    if(categoria == '/tecnologia') {
        res.end("<html><body><h1>Portal de tecnologia</h1></body></html>");
    }

    if (categoria == '/moda') {
        res.end("<html><body><h1>Portal de moda</h1></body></html>");
    }

    if (categoria == '/beleza') {
        res.end("<html><body><h1>Portal de beleza</h1></body></html>");
    }
    res.end("<html><body><h1>Portal de notificas</h1></body></html>");    
});

server.listen(3000);
