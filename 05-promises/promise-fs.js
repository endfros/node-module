const fs = require('fs');

// function updateKoderById(idKoder, newData) {
//     fs.promises.readFile('./koders.json','utf8')
//         .then((data) => {
//             const json = JSON.parse(data);
//             const koderFound = json.koders.find(koder => koder.id === idKoder);
//             const koderUpdated = {...koderFound, ...newData}
//             const koders = json.koders.filter(koder => koder.id !== idKoder);
//             koders.push(koderUpdated)
//             json.koders = koders
//             console.log(json.koders)
//             fs.promises.writeFile('./koders.json', JSON.stringify(json, null, 2))
//             .then(() => {
//                     console.log('File updated!')
//             })
//             .catch((error) => {
//                 console.log(error)
//             });
//         })
//         .catch((error) => {
//             console.log(error)
//         });
// }

async function updateKoderById(idKoder, newData) {
    const dataFile = await fs.promises.readFile('./koders.json','utf8');
    const json = JSON.parse(dataFile);
    const koderFound = json.koders.find(koder => koder.id === idKoder);
    console.log(koderFound)

    // spread operator
    const koderUpdated = {...koderFound, ...newData}
    console.log('koderUpdated: ', koderUpdated)

    const newKodersToUpdate = json.koders.filter((koder) => koder.id !== idKoder)
    // console.log('koders sin rafa: ', koders)

    newKodersToUpdate.push(koderUpdated)
    json.koders = newKodersToUpdate
    console.log('Koders actualizado')
    console.log(json.koders)

    await fs.promises.writeFile('./koders.json', JSON.stringify(json, null, 2))

const newRodri = {
    name: 'Rodrigo',
}

updateKoderById(5,newRodri)
    .catch((error) => {
        console.error('Error: ', error)
    })


// Spread operator
// It is like make a copy of an object

// const objetoFer = {
//     name: 'Fer',
//     lastName: 'Palacios'
// }

// const otherObject ={
//     name: 'Anna',
//     age: 26
// }

// const newObject = {...objetoFer,...otherObject}

// console.log(newObject)