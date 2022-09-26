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

function readJson(path){
    fs.readFile(path,(error,data) => {
        if (error){
            console.log(error);
            return
        }
        console.log(JSON.parse(data))
    })
}

readJson('/Users/rodrigo/proyects/backendModule/04-fs/koders.json');

function addKoder(path,id,name,lastName,age){
    fs.readFile(path,(error,data) => {
        if (error){
            console.log(error);
            return
        }
        var koderJSON = JSON.parse(data);
        koderJSON["koders"].push({"id":id, "name":name, "last_name":lastName, "age":age});
        fs.writeFile(path,JSON.stringify(koderJSON),(error) => {
            if (error){
                console.log(error);
                return
            }
            console.log('se creo el archivo del koder');
        })
    })
}

addKoder('/Users/rodrigo/proyects/backendModule/04-fs/koders.json',5,"rodri","montoya",22);

function deleteKoder(path,id){
    fs.readFile(path,(error,data) => {
        if (error){
            console.log(error);
            return
        }
        var koderJSON = JSON.parse(data);
        koderJSON["koders"].forEach(element => {
                if(element.id === id){
                    const index = koderJSON["koders"].indexOf(element)
                    koderJSON["koders"].splice(index, 1)
                    // console.log(element.id)
                }
            }) 
            fs.writeFile(path,JSON.stringify(koderJSON),(error) => {
                if (error){
                    console.log(error);
                    return
                }
                // console.log('se creo el modifico el ar del koder');
            })
    })
}

deleteKoder('/Users/rodrigo/proyects/backendModule/04-fs/koders.json',5);

function editKoder(path,id,name,lastName,age){
    fs.readFile(path,(error,data) => {
        if (error){
            console.log(error);
            return
        }
        var koderJSON = JSON.parse(data);
        koderJSON["koders"].forEach(element => {
                if(element.id === id){
                    element.name = name;
                    element.lastName = lastName;
                    element.age = age;
                    // console.log(element.id,element.name,element.lastName,element.age);
                }
            }) 
            fs.writeFile(path,JSON.stringify(koderJSON),(error) => {
                if (error){
                    console.log(error);
                    return
                }
                // console.log('se creo el modifico el ar del koder');
            })
    })
}

editKoder('/Users/rodrigo/proyects/backendModule/04-fs/koders.json',3,"Rodri","Montoya",22);

function filterAgeKoder(path,age){
    fs.readFile(path,(error,data) => {
        if (error){
            console.log(error);
            return
        }
        var koderJSON = JSON.parse(data);
        const filteredKoderJSON = koderJSON["koders"].filter(element => element.age > age);
        
    })
}

filterAgeKoder('/Users/rodrigo/proyects/backendModule/04-fs/koders.json',22);