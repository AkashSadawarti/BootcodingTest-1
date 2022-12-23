// 1) WAP to display the pattern like right angle triangle using an asterisk.
// The pattern like :
// *
// **
// ***
// ****


function Astrek(num){
    let str = ""
    for(let i = 0 ; i<=num ; i++){
        for(let j = 0; j<=i; j++){
            str =str + "*";
        }
        str += "\n" 
    }
console.log(str);
}
Astrek(5);