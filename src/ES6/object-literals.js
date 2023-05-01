//enhanced object literals
function newUser(user,age,country,uId){
    return{
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("dzx",34,"MX",1));