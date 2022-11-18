//3. Write a program to print the multiplication table of a given number. 
//soln =>

let num = prompt('enter a Number')
let newNum = parseInt(num)
console.log(`Multiplication of table ${newNum} is`)

function getTable(){
    for(i=1; i<= 10; i++)
    {
        let result = 0
        result = newNum * i ;
        console.log(result)
    }
}
getTable()