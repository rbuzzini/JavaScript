// Global variables
const ss = SpreadsheetApp.getActiveSpreadsheet();   // the spreadsheet object
const sheet1 = ss.getSheetByName('Dati');   // the sheet object
const last_row = sheet1.getLastRow();   // get last row in the sheet


// calculate the row totals
function calculateRowTotals() {

  // get the data
  let data = sheet1.getDataRange().getValues();

  // remove columns headers from data and get the index of "col_name" parameter
  let column_names = data.shift();

  // create new blank array for the column we want to add in the sheet
  const totals_array = []; 
  
  data.forEach(row => {
    //console.log(row);
    const name = row[0];
    const cost = row[1];
    const quantity = row[2];

    const total = cost * quantity;
    totals_array.push([total]);
    
  })
  
  // paste back into sheet

  sheet1.getRange(2, 4, last_row - 1, 1).setValues(totals_array);


}
