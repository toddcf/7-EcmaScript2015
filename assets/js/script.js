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

const boxes = document.querySelectorAll( ".box" );

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

// A new method called "from," combined with the arrow function:
Array.from( boxes ).forEach( cur => cur.style.backgroundColor = "dodgerblue");









