// 12) WAP to find the sum of the series 1 +11 + 111 + 1111 + .. n terms.
// Test Data :
// Input the number of terms : 5
// Expected Output :
// 1 + 11 + 111 + 1111 + 11111
// The Sum is : 12345

let sumofseries = (num) =>{
    let sum = 0;
    str = 0
   for(let i = 1; i<=num; i++){
    sum = `${(sum*10)+1}`
    console.log(sum + "+")
    str = str + `${i}`;
    
}
   console.log(str)
}
sumofseries(5)