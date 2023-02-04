// var a = 40, b =  1, c= 2;
//  var Total = a+b+c;

//         if(Total < 45)
//         {
//             console.log("Addition is less than 45");
//         }
//         else 
//         {
//             console.log("Addition is greater than 45");
//         }
        
 // reverse method in js   
// var array = [10,20,30];
// var reversearray =array.reverse();
// console.log(reversearray);     

a = 20;
b = 30;
let Addition = add(a,b);
console.log(Addition);
function add(a,b)
{
   return a+b;
} 

let Subtraction = sub(a,b);
console.log(Subtraction);
function sub(a,b)
{
    return b-a ;
}


 let Mult = (a,b) => (a*b);
 let Multiply = Mult(a,b);
console.log(Multiply);

let Div = (a,b) => (a/b);
let Division = Div(a,b);
console.log(Division);

var School = ['student','teachers','principal','peons','Drivers']
for(i=0; i< School.length ; i++)
{
    console.log(School.length -3);
}