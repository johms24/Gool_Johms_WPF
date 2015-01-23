/**
 * 1/22/2015.
 */

//alert("test");

//assign variables for correct username and password
var correctU="admin";
var correctP="fullsail1";

//prompt user for username; and prompt for password, if username is correct
var usernameInput=prompt("Username?");

if(usernameInput==correctU){
    var passwordInput=prompt("Password?");
    if(passwordInput==correctP){
        alert("Welcome " +usernameInput+ "!");
        console.log("Welcome " +usernameInput+ "!");
    }else{
        alert("Incorrect password. Try again.");
        console.log("Incorrect password. Try again.");
    };
}else{
    alert("Unknown user.  Try again.");
    console.log("Unknown user.  Try again.");
};


