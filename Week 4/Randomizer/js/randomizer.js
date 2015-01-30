/**
 * Created by rjgi on 1/30/2015.
 */


alert("We are going to get random numbers between two numbers of your choice.")
var min=prompt("Min number?");
var max=prompt("Max number?");

//Check entry for proper data
while(isNaN(min) || isNaN(max)) {
    min = prompt("Numbers only, Genius!!!  Try again, but look up what a number is, " +
    "first.  Then, enter numbers!!!  Let's start with the minimum number in the box " +
    "right here. Thanks.");
    max = prompt("Now, the max NUMBER, please!!!");
}

while(Number(min)>=Number(max) || min=="" || max==""){
    min = prompt("Look, Mr. or Ms. BRILLIANT!  The minimum number has to be LESS " +
    "THAN the maximum number, and you have to put SOMETHING in there, okay???  " +
    "Let's try it again.  Minimum number first, in the box! No blanks!!!");
    max = prompt("Now for the maximum number.  Remember it has to be ''bigger'' than " +
    "the one you just entered.");
}

function randomizer(minNum, maxNum){

    //Math.random() * (max number - min number) + min number
    var randomNumber = Math.round(Math.random() * (maxNum - minNum) + Number(minNum));
    //No longer needed within the function: console.log(randomNumber);
    //Return value to main code.
    return Number(randomNumber);
}

var result=randomizer(min, max);
console.log(result);


console.log("Starting loop.")
//Give me 5 random numbers.

//Use a loop - for loop -
//for(declare a variable; condition to test; increment of change){code}

for(var i=0; i<7; i++){

    console.log(randomizer(min, max));
    alert(randomizer(min,max));

}