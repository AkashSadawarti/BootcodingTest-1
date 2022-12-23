// 1) Write a Java program to print the result of the following operations.
// Input:
// a. -5 + 8 * 6
// b. (55+9) % 9
// c. 20 + -3*5 / 8
// d. 5 + 15 / 3 * 2 - 8 % 3
// Expected Output :
// 43
// 1
// 19
// 13

//for a
// function a(num1,num2,num3)
// {
//     let result = (-num1) + num2 * num3;
//     console.log(result);
// }
// a(5,8,6)

//for b
// function b(num1,num2,num3){
//     let result = (num1 + num2) % num3
//     console.log(result);
// }
// b(55,9,9)

// function c(num1,num2,num3,num4){
//     let result = num1 + (num2)*num3 / num4
//     let res = Math.ceil(result);
//     console.log(res);
// }
// c(20,-3,5,8)

function d(num1,num2,num3,num4,num5,num6){
    let result = num1 + num2 / num3 * num4 - num5 % num6
    console.log(result + "\n Hello") ;
}
d(5,15,3,2,8,3)