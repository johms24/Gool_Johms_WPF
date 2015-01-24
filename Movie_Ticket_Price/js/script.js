/**
 * Created by rjgi on 1/24/2015.
 */

//Assign variables

var regularPrice="$12.00";
var discountPrice="$7.00";

//Alert the user of what we are doing

alert("Let's see how much your movie ticket will cost.");

//Get customer's age

var customerAge=prompt("How old are you?");
var timeOfMovie=prompt("In what hour does the movie start?  For example, if 2:00, enter 2; and if 5:00, enter 5.");

if (customerAge>=55 || timeOfMovie<6  && timeOfMovie>2){
    console.log("The ticket price is "+discountPrice+".");
    alert("The ticket price is "+discountPrice+".");
}else{
    console.log("The ticket price is "+regularPrice+".");
    alert("The ticket price is "+regularPrice+".");
}