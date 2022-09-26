const fs = require('fs');

fs.readdir('/Users/rodrigo/proyects/backendModule/fs-homework/dirPrueba',(error,files) => {
    if (error){
        console.log(error);
        return
    }
    console.log('se leyó el directorio del koder');
    console.log(files)
})