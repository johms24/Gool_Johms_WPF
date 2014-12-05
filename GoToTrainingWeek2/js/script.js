/*
Johms Gool
Section 3
Training week 2
12-5-2014
*/

//alert("Testing if the js file is connected.");

//Create an age calculator

//Ask the user their name
var name = prompt("Please type in your name:");

//Use the variable and say hello to the user
alert("Welcome "+name+"! Let's figure out how old you are");

//Ask the user what year they were born in
//Create a variable to catch that answer
var yearBorn = prompt("What year were you born?");

//Console.log to check that they typed something in.
console.log(yearBorn);


//Calculate their age

//We need the current year
var_currentYear = 2014;
var age = currentYear-yearBorn;

//Alert the user with their current age
alert(name+" You are "+age+" years old.");

//Make it more complex!!!
//Ask the user how many years in the future they would like to know how old they will be.
var yearsMore = prompt("How many years in the future would you like to know?");

console.log(yearsMore);

//Calculate their future age
//Cast the returned variable from a text string to a number
// Number (thing to cast goes here)
var futureAge = age + Number(yearsMore);
console.log(futureAge);

