const fs = require('fs');


fs.appendFile('koderAppend.txt','Hola koders , esto es otro append',(error) => {
    if (error){
        console.log(error);
        return
    }
    console.log('se hizo append del koder');
})