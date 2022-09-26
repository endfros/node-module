function addKoder(path,id,name,lastName,age){
    fs.readFile(path,(error,data) => {
        if (error){
            console.log(error);
            return
        }
        var koderJSON = JSON.parse(data);
        koderJSON["koders"].push({"id":id, "name":name, "last_name":lastName, "age":age});
        console.log(koderJSON);
    })
}

addKoder('/Users/rodrigo/proyects/backendModule/04-fs/koders.json',5,"rodri","montoya",22);