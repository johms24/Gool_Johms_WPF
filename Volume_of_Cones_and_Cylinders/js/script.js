/**
 * Created by rjgi on 1/25/2015.
 */

//Create a calculator for cone or cylinder volume

// Choose cone or cylinder volume
var coneOrCylinder=prompt("Calculate the volume of a cone or cylinder in cubic inches.  " +
"For cones, enter 1.  For cylinders, enter 2.  For the formula only, enter 3.");

//Is the variable an empty string?
if(coneOrCylinder==""){
    var coneOrCylinder=prompt("You forgot to enter something! For cones, enter 1.  For cylinders, enter 2.  " +
    "For the formula only, enter 3.");
}else{
    console.log("Continue through operations to final error message.");
}

//Get additional data and begin calculations with if, else if, and else.
if(coneOrCylinder==1){
    console.log(coneOrCylinder);
    var radius=prompt("Enter radius.");
    var coneHeight=prompt("Enter cone height (in inches).");
    var coneVolume=(1/3*Number(coneHeight)*Number(radius)*Number(radius)*Math.PI);
    console.log("The cone's volume is "+coneVolume+" cubic inches.");
    alert("The cone's volume is "+coneVolume+" cubic inches.");
}else if(coneOrCylinder==2){
    console.log(coneOrCylinder);
    var radius=prompt("Enter radius.");
    var cylinderHeight=prompt("Enter cylinder height (in inches).");
    var cylinderVolume=(Math.PI*Number(radius)*Number(radius)*Number(cylinderHeight));
    console.log("The cylinder's volume is "+cylinderVolume+" cubic inches.");
    alert("The cylinder's volume is "+cylinderVolume+" cubic inches.");
}else if(coneOrCylinder==3){
    console.log(coneOrCylinder);
    var formulaChoice=prompt("For the volume of a cone formula, enter 1.  For the volume of a cylinder formula, enter 2.");
    console.log(formulaChoice);
    //Ternary operation here.
    (formulaChoice==1)? alert("The cone volume formula is V = pi*r^2*h/3."):alert("The cylinder volume formula is " +
    "V = pi*r^2*h.");
    (formulaChoice==1)? console.log("The cone volume formula is V = pi*r^2*h/3."):console.log("The cylinder volume formula is " +
    "V = pi*r^2*h.");
    //Is the variable an empty string or invalid data?
}else{
    console.log(coneOrCylinder);
    alert("You still failed to enter an appropriate choice (1, 2, or 3).  Please try again.");
}

