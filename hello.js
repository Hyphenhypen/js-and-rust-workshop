// writes what is written inside the console.log
// primitive data types
// 1.) string
console.log("Hello World");
console.log("My name is Aditya Pratap Singh");
console.log("1" + 33);
// 2.) number
console.log(33 + 45);
// 3.) bigint
console.log(1234567898665432);
// 4.) boolean
console.log(true);
console.log(false);
//const can't be change
const name = "Aditya";
console.log(name);
// this will through an error
//name = name + "Pratap Singh";
const number = 111122005;
console.log(number);
// for changing an string we should use let
let name1 = "Pratap Singh";
name1 = "Shubham";
console.log(name1);
console.log(typeof name1);

const another = null;
console.log(typeof another);

// array
const a = ["Aditya", 102, undefined];
for (let i = 0; i < 10; i++) {
  console.log(a[i]);
}
// json = objects
const person_details = {
  name: "Aditya Pratap Singh",
  age: 18,
  cartoon_liked: ["Shinchan", "Ben10"],
  schools: {
    age: 19,
    name: "Patel saraswati Vdiya Mandir Inter College",
  },
};
console.log(person_details);

// error handling

// try {
//   const c = 10;
//   throw new error("a is const");
// } catch (err) {
//   console.log(err);
// }
