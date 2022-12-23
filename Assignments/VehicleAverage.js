// 6) WAP to calculate a bike’s average consumption from the given total
// distance (integer value) travelled (in km) and spent fuel (in litres, float
// number – 2 decimal point).
// Test Data :
// Input total distance in km: 350
// Input total fuel spent in liters: 5
// Expected Output:
// Average consumption (km/lt) 70.000

let VehAverage = (dist,fuel) => {
    return dist/ fuel;
} 
console.log(`Average Consumption (km/lit): ${VehAverage(350,5)}`);