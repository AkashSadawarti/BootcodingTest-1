// 11) WAP to display the n terms of harmonic series and their sum.
// 1 + 1/2 + 1/3 + 1/4 + 1/5 ... 1/n terms
// Test Data :
// Input the number of terms : 5
// Expected Output :
// 1/1 + 1/2 + 1/3 + 1/4 + 1/5 +
// Sum of Series upto 5 terms : 2.283334

function Harmonicseries(num){
    let sum = 0;
     let str =''
    for(let i=1;i<=num;i++){
        str = str + `1/${i} +`
        sum = sum +(1/i) ;
    }
    console.log(str)
    console.log(sum.toFixed(6))
}
Harmonicseries(5)