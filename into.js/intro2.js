var num1 = parseInt(prompt("Enter number: "));
var opr =  prompt("Enter +, - or / for the operator");
var num2 = parseInt(prompt("Enter number: "));


/*console.log(typeof(opr));
console.log(typeof(num2));
console.log(typeof(num1)); */

/*var num1 = "io ";
var num2 = 5;
var opr = "/" */

/*while ( isNaN(num1) || isNaN(num2) )
{
 /* alert("one of the input is not correct")
  var num1 = parseInt(prompt("Enter number: "));
  var opr =  prompt("Enter +, - or /");
  var num2 = parseInt(prompt("Enter number: ")); 
  console.log("not a number")
}

if (opr != "/" || opr != "+")
{
  /*alert("operator is not correct")
  var opr =  prompt("Enter +, - or / for the operator"); */
 /* console.log("not a operator")
  console.log(opr)
}*/

if (opr == "+")
{
  console.log(num1+num2);
}

else if (opr == "-")
{
  console.log(num1-num2)
}

else if (opr == "/")
{
  console.log(num1/num2)
}