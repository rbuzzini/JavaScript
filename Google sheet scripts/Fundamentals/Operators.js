function mathOperators() {

    const a = 10;
    const b = 2;
  
  
    // standard operators + - * /
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
  
  
    // Raise to power of
    const c = Math.pow(a, b);
    console.log(c);
  
  
    // Assignment to constant variable
    // const i = 0;
    // console.log(i)
    // i++;   TypeError: Assignment to constant variable.
    // console.log(i);
  
    // if you have to reassign a variable, use let. This is why it was invented:
    let i = 0;
    console.log(i);
    i ++;   // the same of i = i + 1
    console.log(i);
  
    // reduce by 1
    i --;
    console.log(i);
    
  };
  
  
  
  function stringOperators() {
  
    // can use single or double quote around strings
    // but must be consistent!
  
    const string1 = "Sarah";   // ok
    const string2 = 'Smith';   // ok 
    // const string3 = "Smith';   Identifier 'string1' has already been declared
  
  
    // concatenate strings with +
    const full_name = string1 + ' ' + string2;
    console.log(full_name);
  
  
    // multi-line strings
    const multiLineString = `This is a multi-line comment, which means I can 
    hit carriage return and carry 
    on typing inside my string`;
    console.log(multiLineString);
  
  };
  
  
  function comparisonOperators() {
  
    const a = 10;
    const b = '10';
  
  
    console.log(a);
    console.log(typeof a);
    console.log(b);
    console.log(typeof b);
  
  
    // double equals ==
    console.log(a == b);   // it implicity convert b as a number
  
    // triple equals ===
    console.log(a === b);   // it doesn't implicity convert b as a number. With triple equals you obtain a strict comparison
  
  
    // not equal !=
    console.log(a != b);
  
    // not equal !== 
    console.log(a !== b);   // strict comparison, true because type are not equal
  
  
    // grater than and less operators
    const c = 50;
    const d = 100;
  
    console.log(c < d);
    console.log(c <= d);
  
  };
  
  
  
  // References: Ben Collins Course: https://courses.benlcollins.com
  