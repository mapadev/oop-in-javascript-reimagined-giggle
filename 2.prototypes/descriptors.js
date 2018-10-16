const person = { name: "Peter" };

// for (let key in person) {
//     console.log(key);
// }

// console.log("keys:", Object.keys(person));
// console.log("person:", person);

// const objectBase = Object.getPrototypeOf(person);
// const descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
// console.log("descriptor:", descriptor);

Object.defineProperty(person, "name", {
    writable: true,
    configurable: true,
    enumerable: true
});

person.name = "Clark";
delete person.name;
console.log("keys:", Object.keys(person));

console.log("person:", person);
