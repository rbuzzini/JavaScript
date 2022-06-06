// Global variables:
const sheet_name = 'dataset_1';   
// Declared outside any function, it is accessible anywhere else inside the script,
// it is a good practice to declare variables we could need anywhere at the beginning
// of the script


// const example
function constExample() {

  const x = 30;
  console.log(x);
  Logger.log(x);

  // const cannot be reassigned, but the value can change
  // const x = 50; this line gives an error.
  // x = 50;
  // TypeError: Assignment to constant variable.
  // console.log(x);

  // const has block scope
  {
    console.log(x);
    const y = 1;
    console.log(y);
  }

  // console.log(y); 
  // This would give ReferenceError: y is not defined.
  // y is defined in a child block onle level up, not available here.
  
};   // end const example

// console.log(x);    ReferenceError: x is not defined



// let example
function letExample(){

  let y = 100;
  console.log(y);


  // let can be reassigned:
  y = 200;
  console.log(y);

  // cannot redeclare it though:
  // let y = 300;   // SyntaxError: Identifier 'y' has already been declared

  // block scoped like const
  {
    let w = 99;
    console.log(w);
    console.log(sheet_name);

  }

  // variable w not available outside child block:
  //console.log(w);   ReferenceError: w is not defined

};   // end let example



// var example
function varExample() {

  var x = 1;
  console.log(x);

  // can be reassigned:
  var x = 2;   // or "x = 2"
  console.log(x);

  // var has function scope
  {
    var new_variable = 1000;
  }

  console.log(new_variable);

};   // end var example



// other things to note about variables
function otherNotes() {

  // console.log(alpha);   ReferenceError: Cannot access 'alpha' before initialization
  const alpha = 10;

  // alpha = 10;   would work but it's a bad practice to not declare 

  // access global variables:
  console.log(sheet_name);

};   // end other notes




