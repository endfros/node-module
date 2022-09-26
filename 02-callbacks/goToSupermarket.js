/*
    Actions:
    1º Go to supermarket - 5000 ms
    2º Pay - 3000 ms
    3º Arrive - 4000 ms
    callback
*/

function goToSupermarket(callback){
    console.log("Going to Supermarket");
    setTimeout(() => {
        // The callback is going to be executed, we use the parameters we
        // saw previously
        callback(null,"Hi, im at the supermarket!");
        // callback("They stole meeee D:",null);
    }, 5000);
}

function pay(callback){
    console.log("Im going to pay")
    setTimeout(() => {
        callback(null,"Hi, ive already paid!");
    },3000);

}

function goingHome(callback){
    console.log("Im going home")
    setTimeout(() => {
        callback(null,"Hiiiiii im homeeeeee!");
    },3000);

}

goToSupermarket((error,message) => {
    if(error){
        console.log("Oh noooo: ", error);
        return //Conditional exit, returns undefined
        // Early exit, returns undefined
    }
    console.log(message);
    // I arrived to the supermarket, so now I can execute the next action
    pay((error,message) => {
        if(error){
            console.log("Oh noooo: ", error);
            return //Conditional exit, returns undefined
            // Early exit, returns undefined
        }
        console.log(message);
        goingHome((error,message) => {
            if(error){
                console.log("Oh noooo: ", error);
                return //Conditional exit, returns undefined
                // Early exit, returns undefined
            }
            console.log(message);
        })
    })
})





//falsy and truthy

//truthy => any value that evalues to true on any logical expression
/*
    "241"
    hola
    3.32
    {}
    []
*/


/* 
    Inscription to Kodemia

    1º recibir info / entrevista
    2º enviar oferta
    3º inscription
    4º prebootcamp

    Objective: use functions and callbacks the process
*/


const inscriptionKodemia = {
    name: 'Cin Ruiz',
    isInterviewed: false,
    hasOffer: false,
    isRegistered: false,
    canTakeClass: false
}

function interview(callback,object){
    console.log(object.name + ' is going to be interviewed');
    setTimeout(() => {
        // The callback is going to be executed, we use the parameters we
        // saw previously
        object.isInterviewed = true;
        callback(null,object.name + " has been interviewed");
        // callback("They stole meeee D:",null);
    }, 2000);
}

function sendOffer(callback,object){
    console.log('An offer has been sent to: ' + object.name);
    setTimeout(() => {
        // The callback is going to be executed, we use the parameters we
        // saw previously
        object.hasOffer = true;
        callback(null,object.name + " has recieved an offer");
        // callback("They stole meeee D:",null);
    }, 2000);
}

function register(callback,object){
    console.log(object.name + ' is going to be registered');
    setTimeout(() => {
        // The callback is going to be executed, we use the parameters we
        // saw previously
        object.isRegistered = true;
        callback(null,object.name + " has been registered");
        // callback("They stole meeee D:",null);
    }, 2000);
}

function classes(callback,object){
    console.log(object.name + ' is going to take the prebootcamp');
    setTimeout(() => {
        // The callback is going to be executed, we use the parameters we
        // saw previously
        object.canTakeClass = true;
        callback(null,object.name + " has taken the prebootcamp");
        // callback("They stole meeee D:",null);
    }, 5000);
}


interview((error,message) => {
    if(error){
        console.log("Oh noooo: ", error);
        return 
    }
    console.log(message);
    sendOffer((error,message) => {
        if(error){
            console.log("Oh noooo: ", error);
            return 
        }
        console.log(message);
        register((error,message) => {
            if(error){
                console.log("Oh noooo: ", error);
                return 
            }
            console.log(message);
            classes((error,message) => {
                if(error){
                    console.log("Oh noooo: ", error);
                    return 
                }
                console.log(message);
            },inscriptionKodemia)
        },inscriptionKodemia)
    },inscriptionKodemia)
},inscriptionKodemia)





