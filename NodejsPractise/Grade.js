var physics, chemistry, maths;
function getGrade(physics, chemistry, maths) {
    var Total = physics + chemistry + maths;
    let percentage = Total / 300 * 100
    if (percentage < 100) {
        if (percentage > 80) {
            console.log("Student grade is A+ Extinction");
        }
        else if (percentage > 70 && percentage < 80) {
            console.log("Student grade is A Good");
        }
        else if (percentage > 60 && percentage < 70) {
            console.log("Student grade is B Average");
        }
        else if (percentage > 40 && percentage < 60) {
            console.log("Student grade is C Average");
        }
        else if (percentage < 40) {
            console.log("Student is Failed");
        }
    }
    else {
        console.log('Data is Undefined')
    }
}

getGrade(102,107,130)



// reverse method in js   
// var array = [10,20,30];
// var reversearray =array.reverse();
// console.log(reversearray);     

// a = 20;
// b = 30;
// let Addition = add(a, b);
// console.log(Addition);
// function add(a, b) {
//     return a + b;
// }

// let Subtraction = sub(a, b);
// console.log(Subtraction);
// function sub(a, b) {
//     return b - a;
// }


// let Mult = (a, b) => (a * b);
// let Multiply = Mult(a, b);
// console.log(Multiply);

// let Div = (a, b) => (a / b);
// let Division = Div(a, b);
// console.log(Division);

// var School = ['student', 'teachers', 'principal', 'peons', 'Drivers']
// for (i = 0; i < School.length; i++) {
//     console.log(School.length - 3);
// }