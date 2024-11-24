// question 1
let arr = [1, 2, 3, 4, 5, 6];
let result = arr.map((i) => (i = i * i));
console.log(result);
// question 2
let score = 60;
let Grade =
  score >= 80 && score <= 100
    ? "A"
    : score >= 60 && score < 80
    ? "B"
    : score >= 40 && score < 60
    ? "C"
    : score >= 20 && score < 40
    ? "D"
    : "F";
console.log(Grade);
//question 3
let car = {
  company_name: "audi",
  model: "Q3",
  year: "2021",
};
function updateCarYear(car, newYear) {
  car["year"] = newYear;
  return car;
}
console.log(car.year);
updateCarYear(car, "2022");
console.log(car.year);
let { company_name: carName, model: Model, year } = car;
console.log(carName);
console.log(Model);
console.log(year);
//question 4
function primeNumber(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result1 = arr1.filter((i) => primeNumber(i));
console.log(result1);
//question 5
//The map function is used to transform elements of an array and create a new array with the transformed values.
const numbers = [1, 2, 3];
const squares = numbers.map((num) => num * num);
console.log(squares);
//The filter function is used to select elements of an array that satisfy a specific condition, creating a new array.
const numbers1 = [1, 2, 3];
const evens = numbers1.filter((num) => num % 2 === 0);
console.log(evens);
//The reduce function is used to aggregate array elements into a single value by applying a reducer function.
const numbers2 = [1, 2, 3];
const sum = numbers2.reduce((total, num) => total + num, 0);
console.log(sum);
//question 6

async function fetchData() {
  const apiURL = "https://jsonplaceholder.typicode.com/posts";

  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}
fetchData();
//question 7
const person = {
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "New York",
    zip: "10001",
  },
  contact: {
    phone: "555-1234",
  },
};
const phoneNumber = person.contact?.phone;

if (phoneNumber) {
  console.log(`Phone Number: ${phoneNumber}`);
} else {
  console.log("Phone number not available.");
}
