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










