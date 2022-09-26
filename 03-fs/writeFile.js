const { error } = require('console');
const fs = require('fs');
const { isReadable } = require('stream');

fs.writeFile('koder.txt','Hola koders desde fs de node',(error) => {
    if (error){
        console.log(error);
        return
    }
    console.log('se creo el archivo del koder');
})
