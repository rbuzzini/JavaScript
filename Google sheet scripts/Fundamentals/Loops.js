// for loop
function forLoopExample() {
  
    const fruits_array = ['Banana', 'Apple', 'Pear', 'Ananas'];
  
    // loop 0, 1, 2, 3 then stop
    for (let i = 0; i < fruits_array.length; i++) {
      console.log([i, fruits_array[i]]);
    };   // end for loop
  
  }
  
  
  
  // forEach loop
  function forEachLoopExample() {
    
    const fruits_array = ['Banana', 'Apple', 'Pear', 'Ananas'];
  
  
    // create a forEach loop that do the same thing of for loop example
    fruits_array.forEach(function(el, i) {
      console.log([i, el]);
      });
    
    // or we can use an arrow function
    fruits_array.forEach((el, i) => console.log([i, el]));
  
  }
  
  
  
  // function to convert Celcius to Farenheit
  const convertCtoF = (t) => (t * 9/5) + 32;
  
  
  
  // forEach example 2
  function forEachExample2() {
  
    const celcius_array = [0, 13, 19, 30, 11, 24, 5]
    const farenheit_array = []
  
    celcius_array.forEach(el => farenheit_array.push(convertCtoF(el)));
    console.log(farenheit_array);
  
  }
  
  
  
  // map array method example
  // creates a new array from existing applying function
  function mapLoopExample() {
  
    const celcius_array = [0, 13, 19, 30, 11, 24, 5];
  
    const farenheit_array = celcius_array.map(el => convertCtoF(el));
    console.log(farenheit_array);
  
  }
  
  
  
  // looping over objects
  function objectLoop() {
  
    const employee = {
        name: 'Roberto Buzzini',
        age: 27,
        title: 'Data Analyst'
  
      };
  
  
    // cannot do forEach method on objects
    // employee.forEach(el => console.log(el));    TypeError: employee.forEach is not a function
  
  
    // loop over objects with for loop
    for (const property in employee) {
  
      console.log(property);
      console.log(employee[property]);   // need to use square bracket notation, try yourself
  
    }
  
  }
  