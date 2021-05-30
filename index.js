let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//a) Use the split method on the string to identify the purpose of the parameter inside the ().
newStr = str.split();
console.log(newStr);
newStr1 = str.split('e');
console.log(newStr1);
console.log(str);
console.log(newStr);
//b) Use the join method on the array to identify the purpose of the parameter inside the ().

console.log(arr.join());
console.log(arr.join('a'));
console.log(arr.join(' '));
console.log(arr.join(''));
console.log(arr);
//c) Do split or join change the original string/array?

//No

//d) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(','));
console.log(cargoHold.split(',').sort().join(' '));
//cargoHoldNew = cargoHold.sort();
//console.log(cargoHoldNew);
console.log(cargoHold);
