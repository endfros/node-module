const objetoFer = {
    name: 'Fer',
    lastName: 'Palacios'
}

const otherObject ={
    name: 'Anna',
    age: 26
}

const newObject = {...objetoFer,...otherObject}

console.log(newObject)