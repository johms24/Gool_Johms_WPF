/**
 * Created by rjgi on 1/15/2015.
 */

//Calculator to determine the melt value of a given amount of pure gold in grams

//Notify the end user of what we are doing.
alert("Let's calculate the value of your 99.9% pure gold, whether jewelry, coins, or bullion.");

//Ask for the current per ounce price of gold.
goldOzPrice = prompt("What is the current price of gold by the ounce? (Do not enter a $ sign.)");

//Have the user give the weight of the gold item in grams.
alert("Use a scale to get the gram weight of your gold.");

//Ask for the weight of the gold.
var goldWeight = prompt("How much does your gold weigh in grams?");

//Set the Troy Ounce variable
var gramsPerTroyOunce = 31.1034768;

//Calculating the value of the gold.
var goldValue = goldWeight/gramsPerTroyOunce*goldOzPrice;

//Alerting the gold value to the user.
prompt("Your gold is worth/valued at $"+goldValue+".");

//Printing result.
console.log("Your gold is worth/valued at $"+goldValue+".");

