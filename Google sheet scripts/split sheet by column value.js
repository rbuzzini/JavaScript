function createSheets(){

    const ss = SpreadsheetApp.getActiveSpreadsheet();   // variable to take active sheet
    const sourceWS = ss.getSheetByName("Sheet1");r
    
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