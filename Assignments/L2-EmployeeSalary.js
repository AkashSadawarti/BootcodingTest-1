// 5) WAP that accepts an employee's ID, total worked hours of a month and
// the amount he received per hour. Print the employee's ID and salary
// (with two decimal places) of a particular month.
// Test Data :
// Input the Employees ID(Max. 10 chars): 0342
// Input the working hrs: 8
//Salary amount/hr: 15000
// Expected Output:
// Employees ID = 0342
// Salary = U$ 120000.00

Employee = (id,workhours,amount) => {
    if(id >= 0 && id <= 10**10){

        console.log(`Employee ID : ${id} \nSalary : US$ ${workhours * amount}`)
    }
    else{
        console.log('Enter Valid Employee Id');
    }
};
Employee(321,8,15000)