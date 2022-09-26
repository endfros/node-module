const fs = require('fs');

fs.unlink('/Users/rodrigo/proyects/backendModule/fs-homework/dirPrueba/txtPrueba.txt',(error) => {
    if (error){
        console.log(error);
        return
    }
    console.log('se borro el archivo del koder');
})

// asincronas