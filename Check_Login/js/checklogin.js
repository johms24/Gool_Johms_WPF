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
        alert("Welcome, " +usernameInput+ "!");
        console.log("Welcome, " +usernameInput+ "!");
    }else{
        alert("Password does not match our records.");
        console.log("Password does not match our records.");
    };
}else{
    alert("User not found. Try again.");
    console.log("User not found. Try again.");
};


