//Que 1: check given value present or not 
let arr = [5,1,1,9,7,2,9]
for(let i = 0 ; i<=arr.length;i++){
    if(arr[i] == 7){
        console.log(arr[i]); 
    }
}

//2) recurrsion

function getSumofDigits(n){
    if(n == 0){
        return 0 ;
    }
    if(n == 1){
        return 1 ;
    }
    return n%10 + getSumofDigits(n/10);
}

console.log(Math.floor( getSumofDigits(11)))

//7