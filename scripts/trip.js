//----------
//Variables
//----------
console.log("Trip script is running!");
const driver_name = "Joe";
const distance_miles = 1200;
const mpg = 33;
const gas_price = 3.99;
const fuel_capacity = 13;

const is_round_trip = true;

let total_distance;
//----------
//Derived/Calculated Values
//----------

// Calculate Total Distance (if/else)
if (is_round_trip) {
  total_distance = distance_miles * 2;
} else {
  total_distance = distance_miles;
}
console.log("Total Distance:", total_distance, "miles");
// Calculate gallons needed
function calculateGallonsNeeded(total_distance, mpg) {
  return total_distance / mpg;
}

// Calculate total fuel cost
function calculateFuelCost(gallons, gas_price) {
  return gallons * gas_price;
}
const gallons_needed = calculateGallonsNeeded(total_distance, mpg);
const total_cost = calculateFuelCost(gallons_needed, gas_price);

// How far you can go on one tank
const miles_per_tank = mpg * fuel_capacity;

let miles_traveled = 0;
let stop_number = 1;
let running_cost = 0;

for (let i = miles_per_tank; i < total_distance; i += miles_per_tank) {
  miles_traveled = i;

  // gallons used so far
  let gallons_used = miles_traveled / mpg;
  running_cost = calculateFuelCost(gallons_used, gas_price);

  console.log(
    `Stop #${stop_number}: Miles traveled = ${miles_traveled}, Estimated cost so far = $${running_cost.toFixed(2)}`,
  );

  stop_number++;
}
//----------
//Main Program
//----------
console.log("----- Road Trip Summary -----");
console.log(`Driver: ${driver_name}`);
console.log(`Total Distance: ${total_distance} miles`);
console.log(`Estimated Gallons Needed: ${gallons_needed.toFixed(2)} gallons`);
console.log(`Estimated Total Cost: $${total_cost.toFixed(2)}`);
//----------
//
//----------
