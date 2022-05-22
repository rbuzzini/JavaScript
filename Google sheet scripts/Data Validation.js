// Global variables:
const validation_support_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('appoggio');   // sheet where we have our valid list
const validation_support_data = validation_support_sheet.getRange('A1').getDataRegion().getValues();   // valid data


// Function that builds our Data Validation
function dataValidation() {

  var range = validation_support_sheet.getRange('D2:D10');   // where we wanna have our data validation
  var validation = SpreadsheetApp.newDataValidation().requireValueInList(validationListValues(validation_column_name), showDropdown=true).build();   // data validation builder object
  range.setDataValidation(validation);

};



////// Support function ///////

// Function that retrieve valid values list. This function isn't necessary,
// we can type our list directly in the data validation builder object inside 
// dataValidation() function
function validationListValues(validation_column_name) {

  validation_list = [];


  validation_column_index = validation_support_data[0].indexOf(validation_column_name);

  validation_support_data.map(
    (row, i) => {
      validation_list.push(row[validation_column_index]);
    }
  )
  
  const removed_el = validation_list.splice(0, 1); // removing first list element (the validation column name)

  return validation_list;   

};

