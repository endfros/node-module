const fs = require('fs');

fs.mkdir('koderAppend.txt','koderCopy.txt',(error) => {
    if (error){
        console.log(error);
        return
    }
    console.log('se copio el archivo del koder');
})