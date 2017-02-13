// JavaScript is known as a "loosly typed" language.
// This is versus a "scritly typed" language
// In a loosly typed language, you DO NOT need to define data types, when declaring variables

// NUMBERS (two types of numbers)
// integer or int
// An integer is a whole number, positive or negative, including zero.
var myInt = 5;
// float
// A float, is any "REAL" number with a decimal place
var myFloat = 5.023751782756

// CHAR or Character
var myChar = 'a';

// STRING
// A string is any text, surrounded by quotations
var myString = "Hey, er'body, this is fun";

function setup() {
	console.log(myInt, myFloat, myChar, myString);

	var intPlusFloat = myInt + myFloat;
	console.log(intPlusFloat);

	var intPlusChar = myInt + myChar;
	console.log(intPlusChar);

	var myCharNum = '5';

	// This results "55" because '5' + string(5) = "55"
	var result = myCharNum + myInt;
	console.log(result);

	// We can explicitly "cast" a data type as another vaLID data type
	var result = int(myCharNum) + myInt;
	console.log(result);

}

function draw() {

}
