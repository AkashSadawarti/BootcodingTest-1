//6.Write a program to print the sum of the even and odd integers.

let Array = [2,4,8,6,12,5,3,1,9,7]
let Even =[]
let odd =[]
console.log(`Let Array is [${Array}]`)


function getEvenOdd(){
    for(i=0 ; i < Array.length ; i++)
    {
        if(Array[i]%2 === 0)
        {
             Even.push(Array[i])
        }
        else 
        {
             odd.push(Array[i])
        }
    }
}
getEvenOdd()
console.log(Even)
console.log(`Addition of Even numbers is ${Even.reduce((a,b) => a+b)}`) 
//note : .reduce((a,b) => a+b) give sum of elements inside array
console.log(odd)    
console.log(`Adition of Odd number is ${eval(odd.join('+'))}`) 
//note : eval(ArrayName.join('+')) give sum of elements inside array

