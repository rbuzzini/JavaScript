// Global variables
const ss = SpreadsheetApp.getActiveSpreadsheet();   // the spreadsheet object
const sheet1 = ss.getSheetByName('Dati');   // the sheet object



// calculate the column total by column name parameter
function calculateColumnTotals(col_name) {

  // get the data
  let data = sheet1.getDataRange().getValues();

  // remove columns headers from data and get the index of "col_name" parameter
  let column_names = data.shift();

  // loop over the data and do the calculation
  
  const col_name_index = column_names.indexOf(col_name)   // replace 'cost' with 'col_name'
  let sum = 0
  data.forEach(row => {
    //console.log(row);
    sum = sum + row[col_name_index];
    
  })
  
  //return console.log(sum.toFixed(2));
  return sum.toFixed(2);

}



// calculate the row totals
function calculateRowTotals() {

  // get the data
  let data = sheet1.getDataRange().getValues();

  // remove columns headers from data and get the index of "col_name" parameter
  let column_names = data.shift();

  // loop over the data and do the calculation
  
  data.forEach(row => {
    //console.log(row);
    const name = row[0];
    const cost = row[1];
    const quantity = row[2];

    const total = cost * quantity;

    console.log([`Fruit: ${name}, `, `Total cost: €${total.toFixed(2)}`])
    
  })
  

}


// console.log(`Costs sum: ${calculateRowTotals('Cost')}`);
// console.log(`Quantity sum: ${calculateRowTotals('Quantity')}`);
