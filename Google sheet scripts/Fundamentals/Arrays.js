function arrayFunction() {

    // create new array like this:
    const new_array = [];
  
    // order is importante
    const fruit_array=['Apple', 'Banana', 'Pear', 'Strawberry'];
    
    // array index starts at 0
    // access array items by reference to their position
    console.log(fruit_array[0]);
    console.log(fruit_array[1]);
    console.log(fruit_array[2]);
    console.log(fruit_array[3]);
  
  
    // can also write array on multiple lines
    const another_array = ['first',
                           'second',
                           'third',
                           'fourth'];
    console.log(another_array);
  
    /*
    Array methods
    */
    
    const counting_array = ['two', 'three', 'four'];
    console.log('Starting array');
    console.log(counting_array);
  
    // add items to array
  
    //add to end
    counting_array.push('five');
    console.log(counting_array);
  
    // add to start of array
    counting_array.unshift('one');
    console.log(counting_array);
  
    // add to middle of array
    counting_array.splice(2, 1, 'half');   // it removes the element in the second position and add 'half' in it
    console.log(counting_array);
    
    // if the second parameter is set to zero the splice method doesn't remove anything
    counting_array.splice(1, 0, 'hello');
    console.log(counting_array);
  
  
    // removing items from array
  
    // remove from end
    counting_array.pop();
    console.log(counting_array);
  
    // removing from beginning
    counting_array.shift();
    console.log(counting_array);
  
    // removing from middle
    counting_array.splice(1, 2);   // you can use splice without specifying the element to insert
    console.log(counting_array);
  
  }
  