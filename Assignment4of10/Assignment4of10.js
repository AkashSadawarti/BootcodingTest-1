//4. Write a program to find the factorial value of a given number
//Soln =>

let num = prompt('Enter a Number between 1 to 100')
let newNum = parseInt(num)
console.log(`Factorial of number ${newNum} is`)

function getFactorial(){
    if(newNum <= 0)
    {
        console.log('Error! Factorial Number must be in Positive')
    }
    else if(newNum == 1){
        console.log('Factorial of number 1 is always 1')
    }
    else
    {
        let fact = 1
    
        for( let i=1 ; i <= newNum; i++)
        {
            fact = i * fact
        }
        console.log(fact)
    }
}
getFactorial()