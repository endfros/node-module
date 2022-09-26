const fs = require('fs');

fs.readFile('/Users/rodrigo/proyects/backendModule/fs-homework/koderCopy.txt',(error,data) => {
    if (error){
        console.log(error);
        return
    }
    console.log('se leyó el archivo del koder');
    console.log(data)
})