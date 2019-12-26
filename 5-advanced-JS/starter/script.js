/*
let Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = "Smith";

let john = new Person("John", 1990, "teacher");
let jane = new Person("Jane", 1969, "designer");
let mark = new Person("Mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

console.log(john);
*/

// Object.create

/*
let personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

let john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

let jane = Object.create(personProto, {
    name: { value: "Jane" },
    yearOfBirth: { value: 1969 },
    job: { value: "designere" }
});
*/

// Primitives vs Objects

/*
// Primitives
let a = 23;
let b = a;

a = 46;

// Objects
let obj1 = {
    name: "John",
    age: 26
};

let obj2 = obj1;

obj1.age = 30;

console.log(obj1);
console.log(obj2);

// Functions
let age = 27;
let obj = {
    name: "Jonas",
    city: "Lisbon"
};

function change(a, b) {
    a = 30;
    b.city = "San Francisco";
}

// Call the function
change(age, obj);

console.log(age);
console.log(obj.city);
*/

const years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    let arrRes = [];

    for (let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAge(el) {
    return 2019 - el;
}

const ages = arrayCalc(years, calculateAge);
console.log(ages);
