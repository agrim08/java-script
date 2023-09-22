const Agrim = {
  firstname: "Agrim",
  lastname: "Gupta",
  job: "Student",
  friends: ["Sachi", "tanishq", "Prashant"],
};
console.log(Agrim);

//dot notation:
console.log(Agrim.lastname);

//bracket notation:
console.log(Agrim["lastname"]);

const nameKey = "name";
console.log(Agrim["first" + nameKey]);
console.log(Agrim["last" + nameKey]);

//console.log(Agrim."last" + namekey);  produce an error

const knowAbt = prompt(
  "What do you want to know abt Agrim? choose b/w firstname , lastname , age , job , friends"
);
// console.log(Agrim[knowAbt]);

if (Agrim[knowAbt]) {
  console.log(Agrim[knowAbt]);
} else {
  console.log("Wrong request!");
}

//adding new property:
Agrim.location = "India";
Agrim["Instagram"] = "@_crazy_agrim_";
console.log(Agrim);

//challenge
console.log(
  `${Agrim.firstname} has 3 friends, ${Agrim.friends} and his best friend is 
${Agrim.friends[0]}`
);
