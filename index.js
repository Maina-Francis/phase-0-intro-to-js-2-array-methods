//push method
const superHeroes = ["Catwoman", "Storm", "Jessica Jones"];

superHeroes.push("Wonder Woman");
console.log(superHeroes);

//Unshift method
const cities = ["New York", "London"];
cities.unshift("Nairobi");
console.log(cities);

//spread operator ...
//allows us to "spread out" the elements of an existing array into an new array, creating a copy
const coolCities = ["London", "New York", "Paris", "Los Angeles"];
const copyOfCoolCities = [...coolCities];
console.log(copyOfCoolCities);

//.pop() method to remove element at the end of an array and returns the element that was removed
const days = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];
days.pop();
console.log(days);

//.shift() method removes the first element in an array and returns it
days.shift();
console.log(days);

// .slice()
const weekDays = ["Mon", "Tue", "Wed", "Thurs", "Fri"];
console.log(weekDays.slice(1, 4));
