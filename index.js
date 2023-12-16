// Sample ages
const ages = [5, 15, 25, 70];

// Categorize each age using if-else statements
ages.forEach(age => {
  let category = '';

if (age < 13) {
  category = `child`;
} else if (age >= 13 && age <= 19) {
  category = `teen`;
} else if (age >= 20 && age <= 64){
  category = `adult`;
} else {
  category = `senior`;
}
  console.log(`Age ${age}: ${category}`);
});