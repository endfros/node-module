const fs = require('fs');

fs.mkdir('/Users/rodrigo/proyects/backendModule/fs-homework/dirPrueba',(error) => {
    if (error){
        console.log(error);
        return
    }
    console.log('se creo el directorio del koder');
})