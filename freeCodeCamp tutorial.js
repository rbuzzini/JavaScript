// in-line comment

/*
multi-line comment
*/
<script>
    console.log("hello world");
</script>

/* Data Types in JavaScript:
undefined, null, boolean, string, symbol, number, and object
*/

// Initialize a variable

var myName = "Roberto"   // var is a variable that you'll be able to use through all your program

// riassigning it:
myName = 8


let ourName = "freeCodeCamp"   // let is a variable that you use only within the scope
                               // of where you declare that

const pi = 3.14   // const is a variable that can never change



// Storing Values with Assignment Operator

// Declare a variable:
var a;

// Declare and assign a variable:
console.log(a)
var b = 2;

// Assign a variable:
a = 7;
b = a;

// console.log allows you to see things inside the console
console.log(a);



    // STRINGS //

// Escaping literal quotes in strings
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);
// or:
var myStr2 = 'I am a "double quoted" string';
console.log(myStr2);


// Concatenating Strings with + operator
var ourStr = 'I come first. ' + 'I come second.';
console.log(ourStr);
// You can concatenate strings using += operator, or you concatenate
// strings with variables.


// Find length of a string
console.log(ourStr.length);

// you access a single element of a string like in python

// Strings are Immutable like in Python


// Let's create wordBlanks function:

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the park " + myAdverb
    return result
}

console.log(wordBlanks("dog", "white", "ran", "quickly"));



    // ARRAYS

// example:
var ourArray = ['him', 25];

// Like in Python, arrays can be nested.
// You can access arrays elements with indexes.

// you can append elements to a array with array.push() function, and you
// can remove the last element with array.pop() function

// shift() and unshift() functions allow you to manipulate an array.

var test = ourArray.shift()
console.log(test)
console.log(ourArray)



// Write reusable code with functions

function ourReusableFunction() {
    console.log("Heyya, World");
}

ourReusableFunction();

function reusableFunction() {
    console.log("Hi World");
}

reusableFunction();

// Like other languages, you can assing vlalues to functions with arguments



// Global scope and functions

/*
 "scope" refers to the visibility of variables.
Variables which are defined outside the function block have global scope.
"global scope" means that the variable can be seen everywhere in you javascript
code.
 */

// Declaring the variable:
var myGlobal = 10;

function fun1() {
    // assign 5 to oopsGlobal here
    oopsGlobal = 5
}

function fun2() {
    var output = "";
    if (typeof  myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();


// Local Scope and Functions
// Variables which are declared within a function as well as
// function parameters havelocal scope. 

//Example:
function myLocalScope() {
    var myVar = 5;
    console.log(myVar)
}

myLocalScope();

console.log(myVar);


// Global vs. Local Scope in Functions

// global variable:
var outerWear = "T-shirt";

function myOutfit() {
    return outerWear;
}

console.log(myOutfit()); 

function myOutfit2() {
    var outerWear = "sweater"
    return outerWear;
}

console.log(myOutfit2());
console.log(outerWear);

// -> 1 - For functions results local scope wins over global scope
// -> 2 - outside the function block variable value is equal to the
// one with global scope 



// Like in Python you can return a value from a function with "return" statement.
// I underline "can" word. You can use return statement, you don't have to


