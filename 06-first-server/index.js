// http module

const http = require('http');

//with this we're creating a server
//request listener, like an event listener but for petitions and server
const server = http.createServer((request,response) => {

    //I can also obtain values from request

    const url = request.url
    console.log('url', url)
    const method = request.method
    console.log('method', method)

    if(method === 'GET' && url === '/koders'){
        response.write('Aquí estarán todos los koders')
    }else if(method === 'POST' && url === '/koders'){
        response.write('Aquí puedes crear un koder')
    }else{
        response.write(' No conozco esta solicitud :(')
    }
    response.end(); // Closing the request
})

//we have to tell the server to listen to one port

/*
    8080 => development environment
    80 => http
    https => 443
    ssh => 22
*/

//each service has a port number

server.listen(8080, () => {
    console.log('Server is now listening on port 8080');
})

/*
    Ejercicio:
        Reaccionar a las siguientes rutas:

        GET /koders => Aqui estarán todos los koders
        POST /koders => Aqui puedes crear un koder 
        ANY /ANY => No conozco esta solicitud
*/

