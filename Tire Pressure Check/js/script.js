/**
 * Created by rjgi on 1/24/2015.
 */

//Create a script for checking tire pressure for front or rear tires, which have different pressures.

//Assign tire pressures to an array
var tirePressures=[44, 44, 35, 35];

//Alert user of the procedure
alert("Let's check to make sure tire pressure is correct for all tires.  Please check the tire pressure in PSI and " +
"note the pressure for each tire.")

//Enter front tire pressure and rear tire pressures for front driver and front passenger and
// rear driver and rear passenger

var frontDriver=prompt("Please enter the tire pressure (PSI) for the front driver side tire " +
"(whole number only, i.e. 42).");
var frontPassenger=prompt("Please enter the tire pressure (PSI) for the front passenger side tire " +
"(whole number only, i.e. 42).");
var rearDriver=prompt("Please enter the tire pressure (PSI) for the rear driver side tire " +
"(whole number only, i.e. 42)");
var rearPassenger=prompt("Please enter the tire pressure (PSI) for the rear driver side tire " +
"(whole number only, i.e. 42)");

if(frontDriver==tirePressures[0] && frontPassenger==tirePressures[1] && rearDriver==tirePressures[2]
    && rearPassenger==tirePressures[3]){
    console.log("The tires pass spec!");
    alert("The tires pass spec!");
}else{
    console.log("Get your tires checked out!");
    alert("Get your tires checked out!");
}

