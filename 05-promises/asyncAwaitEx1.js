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

function interview(personInterviewed){
    return new Promise((resolve, reject)=> {
        console.log(personInterviewed.name + ' is going to be interviewed');
        setTimeout(() => {
            personInterviewed.isInterviewed = true;
            if(!personInterviewed.isInterviewed){
                reject(`${personInterviewed.name} cannot arrive to the supermarket`)
            }
            resolve(personInterviewed);
        }, 2000);
    })
}

function sendOffer(personOffered){
    return new Promise((resolve, reject)=>{
        console.log('An offer has been sent to: ' + personOffered.name);
        setTimeout(() => {
            personOffered.hasOffer = true;
            if(!personOffered.hasOffer){
                reject(`${personOffered.hasOffer} cannot receive an offer`)
            }
            resolve(personOffered);
        }, 2000);
    })
}

function register(personToRegister){
    return new Promise((resolve, reject)=>{
        console.log('An registration has been sent to: '+ personToRegister.name);
        setTimeout(() => {
            personToRegister.isRegistered = true;
            if(!personToRegister.isRegistered){
                reject(`${personToRegister.isRegistered} cannot receive an registration`)
            }
            resolve(personToRegister);
        }, 2000);
    })
}

function classes(personToTakeClass){
    return new Promise((resolve, reject)=>{
        console.log(personToTakeClass.name + ' is going to take the prebootcamp');
        setTimeout(() => {
            personToTakeClass.canTakeClass = true;
            if(!personToTakeClass.canTakeClass){
                reject(`${personToTakeClass.canTakeClass} cannot take classes right now`);
            }
            resolve(personToTakeClass);
        }, 2000);
    })
}

async function main(){
    const interviewToPerson = await interview(inscriptionKodemia);
    console.log(`${interviewToPerson.name} has been interviewed`);
    const offerToPerson = await sendOffer(interviewToPerson);
    console.log(`${offerToPerson.name} has been offered`);
    const registerToPerson = await register(offerToPerson);
    console.log(`${registerToPerson.name} has been registered`);
    const classesToTake = await classes(registerToPerson);
    console.log(`${classesToTake.name} has taken the prebootcamp`);
}

main()
    .then(() => {
        console.log('All gucci');
    })
    .catch((error) => {
        console.log(error);
    })