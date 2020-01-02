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

/*

const years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	let arrRes = [];

	for (let i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}

	return arrRes;
}

function isFullAge(el) {
	return el >= 18;
}

function maxHeartRate(el) {
	if (el >= 18 && el <= 81) {
		return Math.round(206.9 - 0.67 * el);
	} else {
		return -1;
	}
}

function calculateAge(el) {
	return 2019 - el;
}

const ages = arrayCalc(years, calculateAge);
console.log(ages);

const fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

const rates = arrayCalc(ages, maxHeartRate);
console.log(rates);

*/

/////////////////////
///////  Lecture : Functions returning functions

/*
const interviewQuestion = job => {
    if (job === "designer") {
        return function(name) {
            console.log(`${name}, can you please explain what UX design is?`);
        };
    } else if (job === "teacher") {
        return function(name) {
            console.log(`What subject do you teach, ${name}`);
        };
    } else {
        return function(name) {
            console.log(`Hello ${name}, what do you do?`);
        };
    }
};

// Teacher question
const teacherQuestion = interviewQuestion("teacher");
teacherQuestion("Hector");

// Designer question
const designerQuestion = interviewQuestion("designer");
designerQuestion("Edward");
*/

/*
const retirement = retirementAge => {
    const a = "years until retirement";
    return function(yearOfBirth) {
        const age = 2020 - yearOfBirth;
        console.log(`${retirementAge - age} ${a}`);
    };
};

const retirementSV = retirement(60);
retirementSV(1996);
*/

function interviewQuestion(job) {
    return function(name) {
        if (job === "designer") {
            console.log(`Hello ${name}, it is so cool that you're a ${job}`);
        } else if (job === "programmer") {
            console.log(`Hello ${name}, it's so cool that you're a ${job}`);
        }
    };
}

// interviewQuestion("programmer")("Hector");

//const interviewHector = interviewQuestion("programmer");
//interviewHector("Hector");
