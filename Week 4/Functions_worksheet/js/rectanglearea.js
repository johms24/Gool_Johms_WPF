/**
 * Created by rjgi on 1/29/2015.
 */

//Calculate area of a rectangle in sq. in.

//Assign given variables
var width=20;
var height=10;

//Create function to calculate area and return area as a value
function calculateArea(w, h){
    //Logical operation
    var area=w*h;
    //Returning value
    return area;
}
//Assigning variable for output
var rectangleArea=calculateArea(width, height);
//Printing output in a sentence statement
console.log ("The Area of the Rectangle is " +rectangleArea+" sq. in.")