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

/*
function interviewQuestion(job) {
    return function(name) {
        if (job === "designer") {
            console.log(`Hello ${name}, it is so cool that you're a ${job}`);
        } else if (job === "programmer") {
            console.log(`Hello ${name}, it's so cool that you're a ${job}`);
        }
    };
}
*/

// interviewQuestion("programmer")("Hector");

//const interviewHector = interviewQuestion("programmer");
//interviewHector("Hector");

///////////////////////////
// Bind, Call and Apply
/*
const john = {
    name: "John",
    age: 26,
    job: "Teacher",
    presentation: function(style, timeOfDay) {
        if (style === "formal") {
            console.log(
                `Good ${timeOfDay}, ladies and gentlemen! I'm ${this.name}, I'm ${this.age} years old and I'm a ${this.job}`
            );
        } else if (style === "friendly") {
            console.log(
                `Hey! what's up? I'm ${this.name} and I'm a ${this.teacher}, and I'm ${this.age} years old. Have a nice ${timeOfDay}`
            );
        }
    }
};

const emily = {
    name: "Emily",
    age: 30,
    job: "Developer"
};
*/

// john.presentation.call(emily, "formal", "morning");

//////////////////////
/////// CODING CHALLENGE

/////////////////////////////
// CODING CHALLENGE

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

(function() {
    class Question {
        constructor(question, answers, correct) {
            this.question = question;
            this.answers = answers;
            this.correct = correct;
        }
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        // this.answers.array.forEach((el, i) => {
        //     console.log(`${i} : ${el}`);
        // });

        for (let i = 0; i < this.answers.length; i++) {
            console.log(`${i} : ${this.answers[i]}`);
        }
    };

    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log("Correct answer!");
        } else {
            console.log("Wrong answer, please try again");
        }
    };

    const q1 = new Question(
        "Is JavaScript the coolest programming language in the world?",
        ["Yes", "No"],
        0
    );

    const q2 = new Question(
        `What is the name of this course's teacher?`,
        ["John", "Michael", "Jonas"],
        2
    );

    const questions = [q1, q2];

    const random = Math.floor(Math.random() * 2);

    const nextQuestion = () => {
        questions[random].displayQuestion();

        const answer = prompt("Please select the correct answer");

        questions[random].checkAnswer(answer);

        if (answer !== "exit") {
            questions[random].checkAnswer(parseInt(answer));

            // nextQuestion();
        }
    };

    // nextQuestion();
})();

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/
