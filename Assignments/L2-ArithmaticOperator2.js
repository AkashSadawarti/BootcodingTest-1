// 3) Write a Java program to print the sum (addition), multiply, subtract,
// divide and remainder of two numbers.
// Input first number: 125
// Input second number: 24
// Expected Output :
// 125 + 24 = 149
// 125 - 24 = 101
// 125 x 24 = 3000
// 125 / 24 = 5
// 125 mod 24 = 5

let Arithmatic = (firstnumber,secondnumber) => {
   console.log( `Addition ${firstnumber + secondnumber}`);
   console.log(`Substraction ${firstnumber - secondnumber}`); 
   console.log(`Multiplication ${firstnumber * secondnumber}`); 
   console.log(`Division ${Math.floor(firstnumber / secondnumber)}`); 
   console.log(`Modulus ${firstnumber % secondnumber}`); 
}
Arithmatic(125,24); 