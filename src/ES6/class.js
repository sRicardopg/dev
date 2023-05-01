//declaration
class user {
    // Basic characteristics of the class
    constructor(username, age, email) {
        this.username = username;
        this.age = age;
        this.email = email;
    }

    // method example
    greeting() {
        return "welcome here";
    }
    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}
//instance
const newUser = new user("dzx", 23, "email.true");

console.log(newUser.greeting());

