let newUser;
let firstName;
let lastName;


function createNewUser() {
    firstName = prompt('Imput number firstName', 'firstName');
    lastName = prompt('Imput number lastName', 'lastName');
    newUser = {
        firstName,
        lastName,
        set setFirstName(value) {
            Object.defineProperty(newUser, "firstName", {
                writable: true
            });
            this.firstName = value;
        },


        set setLastName(value) {
            Object.defineProperty(newUser, "lastName", {
                writable: true
            });
            this.lastName = value;

        },
    };
    return;

}

createNewUser();



newUser.getLogin = function() { return (firstName[0].toLowerCase() + lastName.toLowerCase()); };

console.log(newUser);

console.log(newUser.getLogin());

Object.defineProperty(newUser, "firstName", {
    writable: false
});
Object.defineProperty(newUser, "lastName", {
    writable: false
});
newUser.firstName = "Gnuda";
newUser.lastName = "Galima";

console.log(newUser);


newUser.setFirstName = "John";
newUser.setLastName = "Rambo";

console.log(newUser);