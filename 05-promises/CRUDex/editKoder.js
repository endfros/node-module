/*
Práctica file system

A partir de archivo koders.json
Realizar las siguientes acciones:

    1º Crear un función que permita leer el archivo e imprimir en consola el arreglo de Koders :D
    2º Crear una función que permita agregar un Koder y guardar el archivo con el cambio realizado
    3º Crear una funcion que permita eliminar a un Koder por su id y guardar el archivo con el cambio realizado
    4º Crear una función que permita editar a un Koder por su id y guardar el archivo con el cambio realizado
    5º Crear una función que permita obtener a los koders que sean mayores a 25 años

    Req callbacks file Sytems
    JSON.parse() -> convierte de cadena a un objeto js
    JSON.stringify() -> convertir de objeto a string
*/

const fs = require('fs');

async function editKoder(path,id,name,lastName,age){
    const dataFile = await fs.promises.readFile(path, 'utf8');
    const koderJSON = JSON.parse(dataFile)
    koderJSON["koders"].forEach(element => {
        if(element.id === id){
            element.name = name;
            element.lastName = lastName;
            element.age = age;
        }
    }) 
    await fs.promises.writeFile(path,JSON.stringify(koderJSON,null,2))
    console.log('The koder hass been edited successfully!!!')
}

editKoder('/Users/rodrigo/proyects/backendModule/05-promises/CRUDex/koders.json',3,"Sina","Salas",28)
    .catch((error) => {
        console.log('error', error);
    })

