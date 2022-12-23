// WAP to read an amount (integer value) and break the amount into the
// smallest possible number of bank notes.
// Test Data :
// Input the amount: 375
// Expected Output:
// There are:
// 3 Note(s) of 100.00
// 1 Note(s) of 50.00
// 1 Note(s) of 20.00
// 0 Note(s) of 10.00
// 1 Note(s) of 5.00
// 0 Note(s) of 2.00
// 0 Note(s) of 1.00

// let Rs2000;
// let Rs500;
// let Rs200;
// let Rs100;
// let Rs50;
// let Rs20;
// let Rs10;
// let Rs5;
// let Rs2;
// let Rs1;
// let Amount;
// let CurrencyNotes = (Amount) => {
//     while(Amount >= 2000){
//         Rs2000 = Math.floor(Amount/2000);
//         Amount = Amount%2000;
//         console.log(`${Rs2000} Notes of 2000`);
//         break;
//     }
//     while(Amount >= 500){
//         Rs500 = Math.floor(Amount/500);
//         Amount = Amount%500;
//         console.log(`${Rs500} Notes of 2000`);
//         break;
//     }
//     while(Amount >= 200){
//         Rs200 = Math.floor(Amount/200);
//         Amount = Amount%200;
//         console.log(`${Rs200} Notes of 2000`);
//         break;
//     }
//     while(Amount >= 2000){
//         Rs2000 = Math.floor(Amount/2000);
//         Amount = Amount%2000;
//         console.log(`${Rs2000} Notes of 2000`);
//         break;
//     }
//     while(Amount >= 2000){
//         Rs2000 = Math.floor(Amount/2000);
//         Amount = Amount%2000;
//         console.log(`${Rs2000} Notes of 2000`);
//         break;
//     }
// }
// CurrencyNotes(3000);

let Notes = [2000,500,200,100,50,20,10,5,2,1]

Currency = (Amount) =>{
if(Amount != null){
    for(let i=0;i<Notes.length;i++)
    {
        let Count = Math.floor( Amount/Notes[i]);
        Amount = Amount%Notes[i];
        console.log(`${Count} Notes of ${Notes[i]}`)
    }
}
}
Currency(786)