/**
 * Created by rjgi on 1/30/2015.
 */


alert("We are going to get random numbers between two numbers of your choice.")
var min=prompt("Min number?");
var max=prompt("Max number?");


function randomizer(minNum, maxNum){

    //Math.random() * (max number - min number) + min number
    var randomNumber = Math.round(Math.random() * (maxNum - minNum) + Number(minNum));
    console.log(randomNumber);
    return Number(randomNumber);
}

console.log(randomizer(min, max));
