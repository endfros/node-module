//Constructor

const { error } = require("console");

//new Promise
//it recieves a function as a parameter (callback)

// new Promise((resolve,reject) => {
//     if('everythings all right') resolve('All good')
//     if('oh oh oh') reject('something bad happened')
// });

/*
    resolve(it is a function) => when its executed the state of the promie is resolved
    reject(it is a function) => when its executed the state of the promie is rejected
*/

// const myFirstPromise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let error = null;
//         if(error){
//             reject('Something bad happened :(')
//         }
//         resolve(':D :D :D')
//     },2000)
// })

// console.log(myFirstPromise);

// myFirstPromise
//    .then((result) => {
//         console.log('result',result);
//     })
//     .catch((error) => {
//         console.log('Error:', error);
//     });

/*
How to handle promises with then and catch
    .then(() => {}) => Maneja la promesa cuando haya sido exitosa
                        - Recibe un callback
                        - Regresa lo que se pasa en resolve()
    .catch(() => {}) => MAneja la promesa cuando haya sido rechazada
                        - Recibe un callback
                        - Regresa lo que se pasa en reject()
*/

/* 
    Another way to make a promise
    -Wrapped by a function:

        function somethingAsync(){
            return the promise
        }
*/

// function somethingAsync(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let error = null;
//             if(error){
//                 reject('Something bad happened :(')
//             }
//             resolve(':D :D :D')
//         },1000);
//     })
// }

// somethingAsync() //This returns the promise
//     .then((result) => {
//         console.log('result',result);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });

const cinMakePurchases = {
    name: 'Cin Ruiz',
    atSupermarket: false,
    paidPantry: false,
    atHome: false
}

function goToSupermarket(personGoingToSupermarket) {
    return new Promise((resolve, reject) => {
        console.log('Going to the supermarket')
        setTimeout(() => {
            personGoingToSupermarket.atSupermarket = true;
            if(!personGoingToSupermarket.atSupermarket){
                reject(`${personGoingToSupermarket.name} cannot arrive to the supermarket`)
            }
            resolve(personGoingToSupermarket)
        },2000);
    })
}

function paidItems(personToPay) {
    return new Promise((resolve, reject) => {
        console.log('Going to pay')
        setTimeout(() => {
            personToPay.paidPantry = true;
            if(!personToPay.paidPantry){
                reject(`${personToPay.name} cannot pay`)
            }
            resolve(personToPay)
        },3000);
    })
}

function goHome(personGoHome) {
    return new Promise((resolve, reject) => {
        console.log('Going to home')
        setTimeout(() => {
            personGoHome.atHome = true;
            if(!personGoHome.atHome){
                reject(`${personGoHome.name} cannot go home`)
            }
            resolve(personGoHome)
        },3000);
    })
}

// goToSupermarket(cinMakePurchases)
//     .then((personGoingToSupermarket) => {
//         console.log(`${personGoingToSupermarket.name} going to the supermarket`)
//         // console.log(personGoingToSupermarket)
//         paidItems(personGoingToSupermarket)
//         .then((personToPay) => {
//             console.log(`${personToPay.name} has paid`)
//             // console.log(personToPay)
//             goHome(personToPay)
//             .then((personGoHome) =>{
//                 console.log(`${personGoHome.name} is at Home`)
//                 // console.log(personGoHome)
//             })
//             .catch((error) => {
//                 console.log('error',error)
//             })
//         })
//         .catch((error) => {
//             console.log('error',error)
//         })
//     })
//     .catch((error) => {
//         console.log('Error:',error)
//     });

// Promise hell

/*
    Encadenamiento de promesas
*/

// goToSupermarket(cinMakePurchases)
//     .then((personGoingToSupermarket) => { 
//         console.log(`${personGoingToSupermarket.name} going to the supermarket`)
//         return paidItems(personGoingToSupermarket)
//     })
//     .then((personToPay) => {
//         console.log(`${personToPay.name} has paid`)
//         return goHome(personToPay)
//     })
//     .then((personGoHome) => {
//         console.log(`${personGoHome.name} is at Home`)

//     })
//     .catch((error) => {
//         console.log(error,'error')
//     })
// Ta bien pero weno

// Async await

/*
    Async => marca una función que se ejecutará como asíncrona
    Await => esperar el resultado de una promesa+

    Condiciones: 
        -Para usar el await necesitamos una funcion que marcaremos como asíncrona
        -Donde utilizo await necesitamos marcar la funcion que la contiene como asíncrona

        -Las funciones marcadas como asincronas, por defecto regresan una promesa 
*/

async function main(){
    const personAtSupermarket = await goToSupermarket(cinMakePurchases) //regresa una promesa 
    console.log(`${personAtSupermarket.name} arrived`);
    const personThatPayed = await paidItems(personAtSupermarket)
    console.log(`${personThatPayed.name} has payed`);
    const personGoingHome = await goHome(personThatPayed)
    console.log(`${personGoingHome.name} is at home`);
    console.log(personGoingHome);
}

main()
    .then(() => {
        console.log('All gucci')
    })
    .catch((error) => {
        console.log('error', error);
    })