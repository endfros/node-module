const fs = require('fs');

fs.rmdir('/Users/rodrigo/proyects/backendModule/fs-homework/dirPrueba2',(error) => {
    if (error){
        console.log(error);
        return
    }
    console.log('se borro el directorio del koder');
})

