// Global variables:
const validation_support_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(insert_sheet_name);   // sheet where we have our valid list
const validation_support_data = validation_support_sheet.getRange(insert_validation_data_col_range).getDataRegion().getValues();   // valid data
const validation_column_names = validation_support_data[0]


// Function that builds our Data Validation
function dataValidation() {

  var range = validation_support_sheet.getRange(insert_validation_list_range);   // where we wanna have our data validation
  var validation = SpreadsheetApp.newDataValidation().requireValueInList(validationListValues(validation_column_name), showDropdown=true).build();   // data validation builder object
  range.setDataValidation(validation);

};



////// Support function ///////

// Function that retrieve valid values list. This function isn't necessary,
// we can type our list directly in the data validation builder object inside 
// dataValidation() function
function validationListValues(validation_column_name) {

  validation_list = [];


  validation_column_index = validation_column_names.indexOf(validation_column_name);

  validation_support_data.map(
    (row, i) => {
      validation_list.push(row[validation_column_index]);
    }
  )
  
  const removed_el = validation_list.splice(0, 1); // removing first list element (the validation column name)

  return validation_list;   

};

