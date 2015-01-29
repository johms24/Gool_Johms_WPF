/**
 * Created by rjgi on 1/29/2015.
 */

//Calculate circumference of circle

//Given variable



//Create function
function calculateCircumference(radius){
    //C=(pi)D
    //Establish D (diameter)
    var diameter=radius*2;
    //Calculate circumference
    var circumference=Math.PI*diameter;
    //Print circumference for verification
    //console.log(circumference);
    return circumference;
}
//Assign variable to output
var circumferenceCircle=calculateCircumference(5);
//Print output variable value
console.log(circumferenceCircle);
