const gameName = new String("agrim-gupta-rampur");
// console.log(gameName[0]);
console.log(gameName.__proto__); //accessing prototype

//methods of strings:

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("g"));

const newName = gameName.substring(0, 4);
console.log(newName);

const anotherName = gameName.slice(-6, 1);
console.log(anotherName);

const newString = "     AGRIM     ";
console.log(newString);

console.log(newString.trim());

const email = "agrim000%20@gmail.com";
console.log(email.replace("%20", 888));

console.log(email.includes("agr"));
console.log(email.includes("xxx"));

console.log(gameName.split("-")); //splits the string on basis of passed seperator

const Name = "Agrim";
const age = 19;

//console.log(Name + age); Tradition way of concactination.
//dont use !!!

//modern way:

// console.log(`Hello my name is ${Name} and my age is ${age}`);
