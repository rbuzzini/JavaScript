// Objects are containers of data in JavaScript


function objectFunction() {
  
    // create an object with curly brackets
    const obj = {};
  
    // objects consists of key/value pairs
    // ordering is not important
    const employee = {
      name: 'Roberto Buzzini',
      age: 27,
      title: 'Data Analyst'
    }
  
    console.log(employee);
    console.log(typeof employee);
  
    
    
    // get values
    console.log(employee.name);   // dot notation
    console.log(employee['age']);   // square bracket notation
    console.log(employee.title);  
    console.log(employee.height);   // undefined because no height property
  
  
  
    // add values
    employee.favourite_food = 'Pizza';   // dot notation
    console.log(employee);
  
    employee['Department'] = 'Sales/Marketing';   // square bracket notation
    console.log(employee);
  
  
  
    // update
    employee.age = 30;
    console.log(employee);
  
  
  
    // deleting an item from an object
    delete employee.favourite_food;
    console.log(employee);
  
  }
  