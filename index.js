const express = require('express');
const path= require('path');
const app = express();
app.set('port', 5001);


/* app.get('/', (req, res)=>{
    res.send('hola mundo')
}) */
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname);

app.use('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'))
})
app.use('/pagina2', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/pagina2.html'))
})

app.listen(app.get('port'), ()=>{
    console.log('server on port');
});







// servidor con node

/* const http= require('http');
// http dependencia de node 
// url donde vamos a trabaar
const hostname ='127.0.0.1';
//puerto de las peticiones
const port = 5000;
//funcion 
const server= http.createServer((req, res)=>{
    //respuesta de un estado 
    res.statusCode=200;
    // cabecera cual es el tipo de contenido que va a recibir una función, que es lo que vamos a enviar archivos js
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world')
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
    //interpolado el puerto en
});
 */