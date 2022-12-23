// 10) WAP to print all numbers between 1 to 100 which are divided by a
// specified number and the remainder will be 3.
// Test Data :
// Input an integer: 25
// Expected Output:
// 3
// 28
// 53
// 78

let print = (num) => {
    for(let i =1; i<=100; i++){
        if(i%num == 3)
        {
            console.log(i);
        }
    }
      
}
print(25)