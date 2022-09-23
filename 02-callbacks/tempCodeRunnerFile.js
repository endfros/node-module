
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
        callback(null,object.name + " has been interviewed");
        object.isInterviewed = true;
        // callback("They stole meeee D:",null);
    }, 2000);
}

function sendOffer(callback,object){
    console.log('An offer has been sent to: ' + object.name);
    setTimeout(() => {
        // The callback is going to be executed, we use the parameters we
        // saw previously
        callback(null,object.name + " has recieved an offer");
        object.hasOffer = true;
        // callback("They stole meeee D:",null);
    }, 2000);
}

function register(callback,object){
    console.log(object.name + ' is going to be registered');
    setTimeout(() => {
        // The callback is going to be executed, we use the parameters we
        // saw previously
        callback(null,object.name + " has been registered");
        object.isRegistered = true;
        // callback("They stole meeee D:",null);
    }, 2000);
}

function classes(callback,object){
    console.log(object.name + ' is going to take the prebootcamp');
    setTimeout(() => {
        // The callback is going to be executed, we use the parameters we
        // saw previously
        callback(null,object.name + " has taken the prebootcamp");
        object.canTakeClass = true;
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