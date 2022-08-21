
// global variables
const current_spreadsheet_id = SpreadsheetApp.getActive().getId();
const current_spreadsheet = SpreadsheetApp.openById(current_spreadsheet_id);


// variables you have to change to personalize the code
const data_sheet_name = 'Foglio1';
const filter_column_name = 'EmpFullName';

function filterData() {
  
  const data_sheet = current_spreadsheet.getSheetByName(data_sheet_name);

  
  // get last row and last column of our data sheet
  const last_row = data_sheet.getLastRow();
  const last_column = data_sheet.getLastColumn();
  

  // get the data to filter and filtering it:

  const headers = data_sheet.getRange(1, 1, 1, last_column).getValues().flat();
  const filter_column_index = headers.indexOf(filter_column_name);
  const data_values = data_sheet.getRange(2, 1, last_row - 1, last_column).getValues();
  
  // unique values list to filter on:
  let filter_values_list = [];
  data_values.forEach((row, i) => {
     
    filter_values_list.push(row[filter_column_index]);

  })

  // remove leading and trailing spaces from languages list
  let trim_filter_values_list = filter_values_list.map(x => x.trim());

  // removing duplicates:
  let final_unique_filter_list = trim_filter_values_list.filter((x, i) => trim_filter_values_list.indexOf(x) === i);

  final_unique_filter_list.forEach((value, i) => {


      var temp_data = data_values.filter(function(row) {return row[filter_column_index] === value});
      
      
      // now with temp_data you can do whatever you need: create a new spreadsheet filtered by column value, etc. 

  })
  

}
