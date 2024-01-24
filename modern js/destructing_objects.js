"use strict";

const restraunt = {
  name: "Taj Hotel",
  location: "Mumbai, India",
  categories: ["south indian", "North Indian", "chinese"],
  starterMenu: ["bread", "salad", "focaccia"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24, //24hrs :)
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelievry: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} by ${time}}`
    );
  },
};
restraunt.orderDelievry({
  time: "22:30",
  address: "lasa mart",
  mainIndex: 2,
  starterIndex: 2,
});

const { Name, openingHours, categories, location, name } = restraunt;
console.log(Name, openingHours, categories);

const {
  Name: restrauntName,
  openingHours: hours,
  categories: tags,
} = restraunt;
console.log(restrauntName, hours, tags);

//assigning default values:
const { menu = {}, starterMenu: starters = {} } = restraunt;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//nested objects;
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
