// Function to retrieve column list values on which we want to split the data with:

const master_spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
const master_sheet = master_spreadsheet.getSheetByName(insert_sheet_name);
const master_sheet_data = master_sheet.getRange('A2').getDataRegion().getValues();
const master_sheet_column_names = master_sheet_data[0]

function colValues(split_column_name) {
  
    // index columns to split:
    split_column_index = master_sheet_column_names.indexOf(split_column_name)
  
    // list of column to split values:
    const list_to_split = []
  
    master_sheet_data.map(
      (row, i) => {
        list_to_split.push(row[split_column_index])
      }
    )  // end map
  
    return list_to_split
  };  // end function, it returns the list of column values on which we want to split our data
  