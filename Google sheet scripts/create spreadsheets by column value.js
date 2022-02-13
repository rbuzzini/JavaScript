function writeSpreadSheets() {

    createSheets();   // create single sheets
  
    // taking unique column value from the master sheet:
    let masterSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  
    const lines = masterSheet
        .getRange(2, 4, masterSheet.getLastRow()-1, 1)
        .getValues()
        .map(line => line[0]);
    
    const uniqueLines = [ ...new Set(lines)];
  
    // folder where I want to create files in:
    const folderId = '10ub5JXThbRlEvWXgkOJpZf-F2PmpCZzH'
    const folder = DriveApp.getFolderById(folderId);
  
  
    // for loop to iterate in all unique column values
    uniqueLines.forEach(lines => {
  
      // create the file and move it to the wanted folder
      var file = SpreadsheetApp.create(lines);
      var copyFile = DriveApp.getFileById(file.getId());
      folder.addFile(copyFile);
      var file = SpreadsheetApp.openById(copyFile.getId()).getActiveSheet().setName(lines);
      DriveApp.getRootFolder().removeFile(copyFile);
  
  
      let spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
      let sourceSheet = spreadSheet.getSheetByName(lines);
  
      let sourceRange = sourceSheet.getDataRange();
      let sourceValues = sourceRange.getValues();
  
      let rowCount = sourceValues.length;
      let columnCount = sourceValues[0].length;
  
      let targetSheet = file;
      let targetRange = targetSheet.getRange(1, 1, rowCount, columnCount);
  
      targetRange.setValues(sourceValues);
  
    
      });   // end for loop
  
  
  };
  
  
  
  
  // Function to create different sheets based on specific column value
  function createSheets(){
  
      const ss = SpreadsheetApp.getActiveSpreadsheet();   // variable to take active sheet
      const sourceWS = ss.getSheetByName("Sheet1");
      
      // take unique cluster column values
      const lines = sourceWS
        .getRange(2, 4, sourceWS.getLastRow()-1, 1)
        .getValues()
        .map(line => line[0]);
      
      const uniqueLines = [ ...new Set(lines)]; 
    
      // make sure to not create sheets multiple times.
      // Take existing sheets name and create the sheet only if it doesn't exist yet.
      const currentSheetNames = ss.getSheets().map(s => s.getName())  // existing sheets name
      
      let ws;
    
      uniqueLines.forEach(lines => {
        if(!currentSheetNames.includes(lines)){
            ws = null;
            ws = ss.insertSheet();   // define a variable to create a new sheet
            ws.setName(lines);
            ws.getRange("A2").setFormula(`=FILTER(Sheet1!A2:H;Sheet1!D2:D="${lines}")`);
            sourceWS.getRange("A1:H1").copyTo(ws.getRange("A1:H1"));
    
        } // if column value sheet doesn't exist
      }); // forEach loop for every value in the list
    
    }  // closing createSheets function
  
  
  