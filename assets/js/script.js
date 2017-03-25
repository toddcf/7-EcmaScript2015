// ES2015 (short for ECMAScript 2015) is the official name for the new version of JavaScript.
// However, everyone just calls it ES6, because it came after ES5.
// ES5 is currently supported in all modern browsers.
// ES6 has partial support in modern browsers, and no support in older browsers.
// ES2016 is already out, but has almost no browser support at this time.
// Use a transpiler that converts ES6 code back to ES5 to ensure browser support.


// Variable Declaractions: LET and CONST
/*
// ES5:

// Variables declared in ES5 are "function scoped," which means they can be changed.

var name5 = "Jane Smith";
var age5 = 23;
name5 = "Jane Miller";
console.log(name5);

// ES6:

// Variables declared in ES6 are "block scoped," and use either LET or CONST.
	// "Block scope" refers to the block -- or the code that is wrapped inside curly braces.
// let is like var, and can be changed later.
// const is for values we don't want to change.

const name6 = "Jane Smith";
let age6 = 23;
// This won't work:
name6 = "Jane Miller";
console.log(name6);
*/


// ES5:
/*
function driversLicense5( passedTest ) {
	if ( passedTest ) {
		// Trying to use a variable before it's been declared will show "undefined" in ES5:
		console.log( firstName );
		var firstName = "John";
		var yearOfBirth = 1990;
	}

	console.log( firstName + ", born in " + yearOfBirth + ", is now officially allowed to drive a car." );
};

driversLicense5( true );

// ES6:

function driversLicense6( passedTest ) {
	// In ES6, trying to use a variable before it's been declared will throw an error. This is because of the "temporal debt zone."
	// The variable has been hoisted, but still cannot be accessed before it's been declared.
	console.log( firstName );
	if ( passedTest ) {
		let firstName = "John";
		const yearOfBirth = 1990;
	}

	// This won't work in ES6, because is is referring to variables inside the block scope, which it does not have access to:
	console.log( firstName + ", born in " + yearOfBirth + ", is now officially allowed to drive a car." );
	// One partial workaround is to declare your let variables outside the block scope. The code inside the block scope will have access to them.
	// However, you cannot declare a const variable outside the block and then assign its value inside the block. You must assign its value outside the block when you declare it.
};

driversLicense6( true );
*/

// In this example, the i variable outside the for loop is a completely different i than the one declared and used inside the for loop.
// This is because of the block scope. Which provides DATA PRIVACY.
/*
let i = 23;

for ( let i = 0; i < 5; i++ ) {
	console.log( "Inside for loop: " + i );
}

console.log( "Outside for loop: " + i );
*/

/*
// Blocks and IIFEs:

// You can create a block simply by putting code inside curly braces:
{
	const	a = 1;
	let		b = 2;
	var		c = 3;
}

// This won't work, because the variables are not accessible outside the block:
console.log( a + b );
// So block scoping is very much like an IIFE.
// This WILL work because "var" IS accessible outside the block:
console.log( c );
*/

// Strings
/*
let firstName		= "John";
let lastName		= "Smith";
const yearOfBirth	= 1990;

function calcAge( year ) {
	return 2017 - year;
};

// ES5:

console.log( "This is " + firstName + " " + lastName + ". I was born in " + yearOfBirth + ", which makes me " + calcAge( yearOfBirth ) + " years old." ); 

// ES6:

// Template Literals, which means using backticks instead of quotation marks.
// You can write all your text PLUS the variables inside the backticks:
console.log( `This is ${ firstName } ${ lastName }. I was born in ${ yearOfBirth }, which makes me ${ calcAge( yearOfBirth ) } years old.` );

// startsWith:
const n = `${ firstName } ${ lastName }`;
console.log( n );

// This will display TRUE:
console.log( n.startsWith( "J" ) );
// This will display FALSE (because it's lowercase):
console.log( n.startsWith( "j" ) );

// endsWith:

// This will display TRUE:
console.log( n.endsWith( "th" ) );

// includes:
// (This is to search the middle of the string.)

// This will display TRUE:
console.log( n.includes( "Sm" ) );

// Repeat:

// The number in the parentheses is the number of times you want it to repeat.
// This will print "John" five times:
console.log( firstName.repeat( 5 ) );

// If you want a space between the repeats, you must write a template literal:
console.log( `${ firstName } `.repeat( 5 ) );
*/

/*
// Arrow Functions

const years = [ 1990, 1965, 1982, 1937 ];

// ES5:
// Use map to create a new array of ages and store it in ages5:
var ages5 = years.map( function( el ) {
	return 2017 - el;
});

console.log( ages5 );

// ES6 uses an "arrow function," which is much more concise.
// There are three ways of writing arrow functions.
// 1. One argument, and one line of code. The simplest.
let ages6 = years.map( el => 2017 - el );

console.log( ages6 );

// 2. Two arguments, which means using parentheses. Still able to use one line of code:
ages6 = years.map( ( el, index ) => `Age element ${ index + 1 }: ${ 2017 - el }.`);

console.log( ages6 );

// 3. Two arguments, and multiple lines of code (most complex).
// Must use curly braces to create a block, and use the return keyword at the end.
ages6 = years.map( ( el, index ) => {
	// Current year:
	const now = new Date().getFullYear();
	// Calculate age based on current year and the element that was passed in:
	const age = now - el;
	return `Age element ${ index + 1 }: ${ age }.`
});

console.log( ages6 );
*/

// Arrow Functions: Lexical "This" Keyword:

// Arrow functions do not have a "this" keyword. They use the "this" keyword of the function they are written in.
// Therefore, we say that they have a lexical "this" variable.

// ES5:
/*
// Can't use "this" keyword without a workaround because it would be pointing to the global object.
var box5 = {
	color: "green",
	position: 1,
	clickMe: function() {
		var self = this;
		document.querySelector( ".green" ).addEventListener( "click", function() {
			var str = "This is box number " + self.position + ", and it is " + self.color + ".";
			alert( str );
		});
	}
};

box5.clickMe();
*/

// ES6:
/*
// With arrow function, you CAN use the "this" keyword because it shares the lexical "this" keyword of its surroundings:
const box6 = {
	color: "green",
	position: 1,
	clickMe: function() {
		document.querySelector( ".green" ).addEventListener( "click", () => {
			var str = "This is box number " + this.position + ", and it is " + this.color + ".";
			alert( str );
		});
	}
};

// box6.clickMe();

// Another variation, using an arrow function in the first function.
// But "this" will now refer to the global object, so it won't work.

const box66 = {
	color: "green",
	position: 1,
	clickMe: () => {
		document.querySelector( ".green" ).addEventListener( "click", () => {
			var str = "This is box number " + this.position + ", and it is " + this.color + ".";
			alert( str );
		});
	}
};

box66.clickMe();
*/

// With function constructor:
/*
function Person( name ) {
	this.name = name;
};
*/
// ES5:
/*
Person.prototype.myFriends5 = function( friends ) {
	var arr = friends.map( function( el ) {
		return this.name + " is friends with " + el
	}.bind( this ));

	console.log( arr );
}

var friends = ["Bob", "Jane", "Mark"];
new Person( "John" ).myFriends5( friends );
*/
// ES6:
/*
Person.prototype.myFriends6 = function( friends ) {
	var arr = friends.map( el => `${this.name} is friends with ${el}` );

	console.log( arr );
}

var friends = ["Bob", "Jane", "Mark"];
new Person( "Mike" ).myFriends6( friends );
*/


// Destructuring

// Use this to store each element in an array inside a single variable.

// ES5:
/*
var john = [ "John", 26 ];
var name = john[0];
var age = john[1];
*/
// ES6:
/*
const [ name, age ] = [ "John", 26 ];
// What this will do is create a const called "name" and a const called "year", and then store the data in the array in each of those variables.
console.log( name );
console.log( age );

// Also works with objects:

const obj = {
	firstName: "John",
	lastName: "Smith"
};
*/
/*
const { firstName, lastName } = obj;

console.log( firstName );
console.log( lastName );
*/
/*
// If you don't want the variables to be the same as the keys in the object:
const { firstName: a, lastName: b } = obj;

console.log( a );
console.log( b );
*/
/*
function calcAgeRetirement( year ) {
	const age = new Date().getFullYear() - year;
	return [ age, 65 - age ];
};

// Now destructure the function:
const [ age, retirement ] = calcAgeRetirement( 1990 );
console.log( age );
console.log( retirement );
*/

// Arrays (and a new kind of loop)

// const boxes = document.querySelectorAll( ".box" );

// Remember that querySelectorAll returns a nodelist, which we'll then have to convert into an array:

// ES5:
/*
var boxesArr5 = Array.prototype.slice.call( boxes );

boxesArr5.forEach( function( cur ) {
	// Change all boxes to blue:
	cur.style.backgroundColor = "dodgerblue";
});
*/

// ES6:

// const boxesArr6 = Array.from( boxes );
// A new method called "from," combined with the arrow function:
// Array.from( boxes ).forEach( cur => cur.style.backgroundColor = "dodgerblue");


// Now we will change the text inside the boxes depending on color:

// ES5:
/*
// If we reach the blue box, we want to "continue" -- meaning to skip this iteration of the loop and go to the next one:
for ( var i = 0; i < boxesArr5.length; i++ ) {
	if ( boxesArr5[i].className === "box blue" ) {
		continue;
	}

	boxesArr5[i].textContent = "I changed to blue!";
};
*/

// ES6:

// ES6 has a "for-of" loop.
/*
for ( const cur of boxesArr6 ) {
	// If the className includes the word "blue":
	if ( cur.className.includes( "blue" ) ) {
		continue;
	}

	cur.textContent = "I changed to blue!";
};
*/

// ES5:

// var ages = [ 12, 17, 8, 21, 14, 11 ];
/*
// In ES5, we would have to create a boolean array to determine if the age is above or below 18, and then use the indexOf to determine the elements that we want.
var full = ages.map( function( cur ) {
	return cur >= 18;
});

console.log( full );

// Now find the position of any true elements in the array:
console.log( full.indexOf( true ) );
// Now retrieve that element from the array so you can display their age:
console.log( ages[ full.indexOf( true ) ] );
*/
// ES6:
// ES6 has the findIndex and find methods to shorten the above process significantly.
// Return the index of the cur element if that element is greater than 18:
// console.log( ages.findIndex( cur => cur >= 18 ) );

// Now show the age of anyone over 18:
// console.log( ages.find( cur => cur >= 18 ) );


// Spread Operator

// A convenient way to expand elements of an array, like arguments and function calls.
/*
function addFourAges( a, b, c, d ) {
	return a + b + c+ d;
};

var sum1 = addFourAges( 18, 30, 12, 21 );
console.log( sum1 );

// What if the ages were in an array? Use the "apply" method.

// ES5:
var ages = [ 18, 30, 12, 21 ];
// In using the apply method, we must specify "this". But in this case we don't need it, so we can just say it's null.
var sum2 = addFourAges.apply( null, ages );
console.log( sum2 );

// ES6:

// The spread operator is the ellipses:
const sum3 = addFourAges( ... ages );
// It will expand the ages array into its components.
console.log( sum3 );

// You can combine both of those arrays using the spread operator on each one:
const familySmith = [ "John", "Jane", "Mark" ];
const familyMiller = [ "Mary", "Bob", "Ann" ];
let bigFamily = [ ... familySmith, ... familyMiller ];
console.log( bigFamily );
// You can even add a new element in the middle:
bigFamily = [ ... familySmith, "Lily", ... familyMiller ];
console.log( bigFamily );


// To use the spread operator on a nodelist:

// Example: Change all boxes to purple using querySelectorAll, which returns a nodelist:

const h = document.querySelector( "h1" );
const boxes = document.querySelectorAll( ".box" );

// Now use the spread operator instead of individually changing the text color of the h1 element and then looping through all the elements with a class of box:
const all = [ h, ... boxes ];
// Now we've stored h1 and all the boxes (expanded) in the "all" variable.

// Convert nodelist to array:
Array.from( all ).forEach( cur => cur.style.color = "purple" );
*/

// Rest Parameters

// These allow us to pass an arbitrary number of arguments into a function.
// These look like spread operators but are the exact opposite.
// Whereas the spread operator expands an array into its components, rest parameters receive a couple single values and transforms them into an array when we call a function with multiple parameters.


// Example:
// We have a function that receives an arbitrary number of years, and then prints to the console whether each person is over 18 years of age.
// Note that "arguments" is like the "this" keyword.
// Although "arguments" looks a lot like an array, it is actually an object.
// Arrays have the array function constructor as their prototype, but "arguments" has the object prototype.
// So "arguments" is an array-like structure, but is not actually an array.
// If you want to use it as an array (to loop through it, for example), you must first convert it into an array.

/*
// ES5:
function isFullAge5() {
	// console.log( arguments );
	// Convert to an array and store in new variable:
	var argsArray = Array.prototype.slice.call( arguments );
	// Now that it's been converted into an array, you can loop through it:
	argsArray.forEach( function( cur ) {
		// cur comes from the current array, which comes from the arguments, which are all the numbers that are passed into the function when it's called:
		console.log( ( 2017 - cur) >= 18 );
	})
};

// Pass some years into the function:
// isFullAge5( 1990, 2001, 1965 );
// Try it with more arguments:
// isFullAge5( 1990, 2001, 1965, 2016, 1987 );


// ES6:

// In ES6, instead of having no parameters, we use the rest parameter operator, followed by the variable name.
// So as soon as we call the function, it will convert the arguments into an array and then pass that array into this function:
function isFullAge6( ... years ) {
	// console.log( years );
	years.forEach( cur => console.log ( ( 2017 - cur ) >= 18 ) );
};
// The result will actually have the array prototype (not the object prototype).

// Pass some years into the function:
isFullAge6( 1990, 2001, 1965 );
// Try it with more arguments:
isFullAge6( 1990, 2001, 1965, 2016, 1987 );
*/
/*
// Same thing, but a parameter that accepts not the age limit, but at what age a person becomes an adult. (Maybe it is different in different countries.)
// But this means the "limit" (aka year of full age) will be part of the arguments, so we need to fix that by "slicing" starting at position 1.
// This will exclude the first argument.
// ES5:
function isFullAge5( limit ) {
	// console.log( arguments );
	// Convert to an array and store in new variable:
	var argsArr = Array.prototype.slice.call( arguments, 1 );
	// console.log( argsArr );
	// Now that it's been converted into an array, you can loop through it:
	argsArr.forEach( function( cur ) {
		// cur comes from the current array, which comes from the arguments, which are all the numbers that are passed into the function when it's called:
		console.log( ( 2017 - cur) >= limit );
	})
};

// Pass some years into the function, the first being the "limit", or age of adulthood:
isFullAge5( 21, 1990, 2001, 1965 );
// Try it with a different limit, and more arguments:
isFullAge5( 18, 1990, 2001, 1965, 2016, 1987 );


// ES6:

// In ES6, instead of having no parameters, we use the rest parameter operator, followed by the variable name.
// And we now add the "limit" before the rest parameters.
// So as soon as we call the function, it will convert the arguments into an array and then pass that array into this function:
function isFullAge6( limit, ... years ) {
	// console.log( years );
	years.forEach( cur => console.log ( ( 2017 - cur ) >= limit ) );
};
// The result will actually have the array prototype (not the object prototype).

// Pass some years into the function:
isFullAge6( 21, 1990, 2001, 1965 );
// Try it with more arguments:
isFullAge6( 18, 1990, 2001, 1965, 2016, 1987 );
*/


// Default Parameters

// Used whenever we want one or more parameters of a function to be preset -- aka have a default value.

// ES5:
/*
function SmithPerson( firstName, yearOfBirth, lastName, nationality ) {
	// Defaults:
	// If the lastName is undefined, make it Smith. Otherwise, make it whatever argument was passed in:
	lastName === undefined ? lastName = "Smith" : lastName = lastName;
	nationality === undefined ? nationality = "American" : nationality = nationality;

	// Explicit Settings:
	this.firstName = firstName;
	this.yearOfBirth = yearOfBirth;
	this.lastName = lastName;
	this.nationality = nationality;
};

var john = new SmithPerson( "John", 1990 );
// If we only specify a couple of the arguments, JavaScript will set the other parameters to "undefined."

// John's sister has married and moved to Spain:
var emily = new SmithPerson( "Emily", 1983, "Diaz", "Spanish" );
*/
/*
// ES6:

// In ES6, you define the defaults right in the parameters!
function SmithPerson( firstName, yearOfBirth, lastName = "Smith", nationality = "American" ) {
	this.firstName = firstName;
	this.yearOfBirth = yearOfBirth;
	this.lastName = lastName;
	this.nationality = nationality;
};

var john = new SmithPerson( "John", 1990 );
// If we only specify a couple of the arguments, JavaScript will set the other parameters to "undefined."

// John's sister has married and moved to Spain:
var emily = new SmithPerson( "Emily", 1983, "Diaz", "Spanish" );
*/

// Maps

// Anything can be a key, not just a string. Could be numbers, booleans, functions, objects.
/*
const question = new Map();
// To add data to the new Map, we use the set method. Parameters are key, then value:
question.set( "question", "What is the official name of the latest major JavaScript version?" );
// Now set multiple choice answers to that question:
question.set( 1, "ES5" );
question.set( 2, "ES6" );
question.set( 3, "ES2015" );
question.set( 4, "ES7" );
question.set( "correct", 3 );
// If question is answered correctly, print to the console:
question.set( true, "Correct!" );
// If answered incorrectly:
question.set( false, "Sorry, that is incorrect. Please try again." );


// To retrieve data from this map, use the opposite of set, which is get.
// Then all you have to do is pass in the key.

console.log( question.get( "question" ) );
*/
// It's also very easy to get the size of the map by using the size property.
// Use "size" instead of "length."
// console.log( question.size );
/*
// If the question has key #4, delete it:
if ( question.has( 4 ) ) {
	// You can delete one of the elements by using its key:
	question.delete( 4 );	
}
*/

// It's also very easy to add or remove data from the map.
// You can also delete EVERYTHING from the map using "clear."
// question.clear();

// Set, get, has, delete, and clear are the most basic methods for manipulating maps.

// Maps are also iterable. You can LOOP through a map! One way is the forEach method.

// question.forEach( ( value, key ) => console.log( `This is ${key} and it's set to ${value}.` ) );
/*
// Using entries will return all entries of our question map:
for (let [ key, value ] of question.entries() ) {
	// Only execute this part of the code if the key is a number:
	if ( typeof( key ) === "number" ) {
		console.log( `Answer ${key}: ${value}` );
	}
};

// Since JavaScript will interpret the user response as a string, we must use parseInt to convert it to an integer:
const ans = parseInt( prompt( "Write the correct answer." ) );
// Compare the user answer with the true answer:
console.log( question.get( ans === question.get( "correct" ) ) );
*/

// Classes

// ES5:

var Person5 = function( name, yearOfBirth, job ) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

Person5.prototype.calculateAge = function() {
	var age = new Date().getFullYear - this.yearOfBirth;
	console.log( age );
}

var john5 = new Person5( "John", 1990, "teacher" );

// ES6:

// Class declaration:
// All classes have to have the constructor method.
class Person6 {

}











