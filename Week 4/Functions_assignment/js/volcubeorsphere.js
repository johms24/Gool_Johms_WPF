/**
 * Created by rjgi on 1/29/2015.
 */

//Calculate circumference of a box or sphere

//Get user choice.
var cubeOrSphere=prompt("We are calculating the volume of a box or a sphere in cubic inches. " +
"For a box, enter 1. For a sphere, enter 2.");

//Trying to get this check entry to work, so added this if/else statement
if(cubeOrSphere==1 || cubeOrSphere==2){
    var entryType=true;
}else{
    var entryType=false;
}
//Removed: console.log("The first choice is "+cubeOrSphere+".");
//Removed: console.log("The entry type is "+entryType +".");

//Check entry
//Added entryType to try to fix the problem checking the entry, when a number other than 1 or 2 is entered.  Failed.
//Added the if/else statement into the while loop...SUCCESS!!!  The final error message does not print to the console.
while(entryType===false){
    cubeOrSphere=prompt("Please do not leave blank and only enter 1 or 2.");
    if(cubeOrSphere==1 || cubeOrSphere==2){
        entryType=true;
    }else{
        entryType=false;
    }
}


//Declare and define given radius (variable)
//Deleted: var radius; (unnecessary)

//Create a function to calculate sphere volume
function calcSphereVol(r){
    //V=4/3(pi)r^3
    //Calculate volume
    var sphereVol=4/3*Math.PI*r*r*r;
    //Return the volume
    return sphereVol;
}

//Anonymous function
var calcBoxVol = function(w, h, l){
//V=width*height*length
//Calculate volume
    var volume = w*h*l;
    return volume;
}

//Grabbing the returned value



//Choose the function
if(cubeOrSphere==1){
    var width=prompt("What is the width of the box?");
    //Check entry
    while(width=="" || isNaN(width)){
        width=prompt("Please do not leave blank and only use numbers.");
    }

    var height=prompt("What is the height of the box?");

    //Check entry
    while(height=="" || isNaN(height)){
        height=prompt("Please do not leave blank and only use numbers.");
    }

    var length=prompt("What is the length of the box?");

    //Check entry
    while(length=="" || isNaN(length)){
        length=prompt("Please do not leave blank and only use numbers.");
    }


    var v=calcBoxVol(width, height, length);
    console.log(v);
    //Printing the volume
    console.log("The volume of the box is "+v+" cu. in.");
    //Alert the result
    alert("The volume of the box is "+v+" cu. in.");

}else if(cubeOrSphere==2){

    var radius=prompt("What is the radius of the sphere?");

    //Check entry
    while(radius=="" || isNaN(radius)){
        radius=prompt("Please do not leave blank and only use numbers.");
    }
    calcSphereVol(radius);
//Grabbing the returned value
    var sphereVolume=calcSphereVol(radius);
//Printing the volume
    console.log("The volume of the sphere is "+sphereVolume+" cu. in.");
    //Alert the result
    alert("The volume of the sphere is "+sphereVolume+" cu. in.");
}else{
    console.log("The while loop check of first entry is incorrect.  This should never print.");
}