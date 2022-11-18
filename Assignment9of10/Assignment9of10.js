//9.Write a program to print Fibonacci series of n terms where n is input by user : 
//0 1 1 2 3 5 8 13 24

let A = 0 ,B = 1 , C ;
let usernum = prompt('Enter the Number')
let UserNewnum = parseInt(usernum)
console.log(`Fibonacci series for input ${UserNewnum}`)
function getFibonacciNumbers(){
    for(let i=1; i<UserNewnum; i++)
    {
        C = A + B;
        A = B
        B = C
        console.log(C)
    }
}
console.log(getFibonacciNumbers());
