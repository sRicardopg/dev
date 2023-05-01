//Pre ES 6

function newUser(name,age,country){
    var name = name || "Oscar"
    var age = age || 34
    var country = country || "Co"
    console.log(name,age,country)
}

newUser();

newUser("David", 15)

//ES 6

function newAdmin(name="Oscar", age = 32, country = "Rp"){
    console.log(name, age, country)
}

newAdmin();
newAdmin("Antonio", 23, "Co")