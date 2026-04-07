//! Start by creating the variables for the data recorded
const recordings= {
day1TempF: 32,
day2TempC: 25,
day3TempF: 70,
day4TempC: 18,
day5TempF: 80,
day6TempC: 15,
day7TempF: 72,
day8TempC: 28,
day9TempF: 68,
day10TempC: 20,
day11TempF: 75,
day12TempC: 23,
day13TempF: 82,
day14TempC: 30,
day15TempF: 65,
day16TempC: 22,
day17TempF: 77,
day18TempC: 26,
day19TempF: 78,
day20TempC: 24,
day21TempF: 73,
day22TempC: 21,
day23TempF: 79,
day24TempC: 27,
day25TempF: 71,
day26TempC: 19,
day27TempF: 74,
day28TempC: 17,
day29TempF: 76,
day30TempC: 29,
}
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)
let tot_temperature_in_celsius = 0;
let tot_temperature_in_fahrenheit = 0;
for (let key in recordings) {
  if (key.includes('TempF')) {
    tot_temperature_in_celsius += (recordings[key] - 32) * 5 / 9;
  } else {
    tot_temperature_in_celsius += recordings[key];
  }
}

for (let key in recordings) {
  if (key.includes('TempC')) {
    tot_temperature_in_fahrenheit += (recordings[key] * 9/5) + 32;
  } else {
    tot_temperature_in_fahrenheit += recordings[key];
  }
}

console.log(tot_temperature_in_celsius);
console.log(tot_temperature_in_fahrenheit);
//! Start the calculation of the total temperatures
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit/ 30;
console.log(avg_temperature_in_celsius);
console.log(avg_temperature_in_fahrenheit);
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};