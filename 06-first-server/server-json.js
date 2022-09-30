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
        response.setHeader('Content-Type', 'application/json')
        response.write('{"message":"Aqui se obtendran los koders"}')
    }else if(method === 'POST' && url === '/koders'){
        response.write('Aquí puedes crear un koder')
    }else{
        response.write(' No conozco esta solicitud :(')
    }
    response.end(); // Closing the request
})


server.listen(8080, () => {
    console.log('Server is now listening on port 8080');
})

