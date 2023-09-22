const Agrim = {
  firstname: "Agrim",
  lastname: "Gupta",
  job: "Student",
  friends: ["tanishq", "Sachi", "Prashant"],
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
console.log(Agrim[knowAbt]);
