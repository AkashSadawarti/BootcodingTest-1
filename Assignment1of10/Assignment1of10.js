//1. Write a program to print numbers from 1 to 10


// soln=>

let num = 10
console.log(`Numbers from 1 to ${num}`)

let x = getNumbers()
function getNumbers(){
    for(i=0; i<num; i++){
        
        console.log(i+1)
    }
}