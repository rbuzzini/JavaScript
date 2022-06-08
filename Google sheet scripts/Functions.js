// Why use functions?
// you can encapsulate chunk of code to reuse



// basic function
function firstFunction() {

    console.log('Hello World!');
    
  }
  
  // arrow function syntax
  const firstFunctionArrow = () => console.log('Hello World!');
  
  
  
  // pass parameters into functions
  function addFunction(num1, num2) {
  
    return num1 + num2;
  
    console.log('does this get logged?');   // no it is not logged, the return statement end the function
  }
  
  // arrow
  const addFunctionArrow = (num1, num2) => num1 + num2;
  
  // in global space the following logs will be printed
  console.log(addFunction(1, 3));
  console.log(addFunctionArrow(1, 3));
  
  
  
  // call another function
  function runOtherFunction() {
  
    const answer = addFunction(100, 95);
    console.log(answer);
  }
  
  
  
  // assignig functions to variables
  const multFunction = (a, b) => a * b;
  console.log(multFunction);
  Logger.log(multFunction);   // this is a case when Logger.log is different from console.log
  console.log(multFunction(5, 10));
  
  
  
  // pass functions as arguments to other functions
  const superFunction = (fn, a, b) => fn(a, b);
  console.log(superFunction(multFunction, 5, 10));
  
  
  
  // default parameters
  function defaultParamFunction(a = 10, b = 2) {
  
    return a / b;
  
  }
  
  
  const defaultParamFunctionArrow = (a = 10, b = 2) => a / b;
  
  console.log(defaultParamFunction()); // it returns "NaN" if we don't define default values for a and b
  console.log(defaultParamFunctionArrow()); // it returns "NaN" if we don't define default values for a and b
  
  