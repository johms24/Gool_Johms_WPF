/*
Dan Williams
SDI Section #3
Go To Training week #3
12-10-2014
*/

//alert("Testing To Make Sure we are working.");

//Create code that sorts through fruit names and picks out pears

//Create our "fruit bowl" array

var bowlOfFruit = ["apple","apple","banana","pear","peach","pear","tomato","kiwi","pear","banana","pear"];

//Console logs the WHOLE array
console.log(bowlOfFruit);


//How can I get one fruit inside of the bowl?
console.log(bowlOfFruit[1]);

//How many fruits are in the bowl?
//How many items are in an array?
//length of the array
//Dot syntax - "use a period!"
console.log(bowlOfFruit.length);

//What is the last index number of the array, using the length property?
// Last index number is ALWAYS one less than the length.
// bowlOfFruit.length - 1 = last index #

//Create a variable to track the number of pears we have
var totalNumPears = 0;

//Test each item and see if it is a pear

//if(condition to test) { Code to run if true" }

if(bowlOfFruit[0]==="pear"){
     //this will run if true
     //add one to our counting variable
    console.log("This fruit is a pear!")
    totalNumPears++;
}else{
    //This code will run if the if statement is FALSE!
    console.log("This fruit is not a pear!")
}

if(bowlOfFruit[1]==="pear"){
    //this will run if true
    //add one to our counting variable
    console.log("This fruit is a pear!")
    totalNumPears++;
}else{
    //This code will run if the if statement is FALSE!
    console.log("This fruit is not a pear!")
}

if(bowlOfFruit[2]==="pear"){
    //this will run if true
    //add one to our counting variable
    console.log("This fruit is a pear!")
    totalNumPears++;
}else{
    //This code will run if the if statement is FALSE!
    console.log("This fruit is not a pear!")
}

if(bowlOfFruit[3]==="pear"){
    //this will run if true
    //add one to our counting variable
    console.log("This fruit is a pear!")
    totalNumPears++;
}else{
    //This code will run if the if statement is FALSE!
    console.log("This fruit is not a pear!")
}
//Report out how many pears we have
console.log("There are "+totalNumPears+" number of pears in the bowl.");

//We want the computer to do the "heavy lifting" for us

//Create a new tracking variable for number of pears
var pearNumber=0

//Create a loop for repetitive code

//For Loop - is great for when you know how many times it should run
// for(initialize a counting variable; condition to test; incremental change)
// { Code to run each loop around }

for(var i=0; i<bowlOfFruit.length ; i++){
    console.log("Inside of the loop "+i);
    console.log(bowlOfFruit[i])

    //Test each fruit if it is a pear
    if(bowlOfFruit[i]==="pear"){
        //add to our pear total
        pearNumber++;
        console.log("This fruit is a pear!");

    }else{
        console.log("This fruit is NOT a pear!");
    }
}
console.log("Total number of pears in the bowl is "+pearNumber);



//Using conditionals to validate prompts

//ask the user for input
var userInput = prompt("Please type in your name.");

if(userInput===""){
    //The user left it blank

    //Re-prompt the user
    userInput=prompt("Please do not leave blank.  What is your name?");

}//how do I test if the user left it blank

console.log("Welcome "+userInput);


//Test if the user types in a number?
//isNaN() - Is Not A Number

console.log(isNaN("test"));
console.log(isNaN(7));

var userNumber = prompt("Type in any number");
//Test if it is a number
if(isNaN(userNumber)){

    //This is a text string
    //reprompt the user for a number
    userNumber= prompt("Only type in numbers!");


}
