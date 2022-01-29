function createBulkPDFs(){

    // google doc template id: 1-W04Y6rBKCC_iVHG07P2B9UPXuKldwfpCrodoHifOsA
    // make a copy of the google doc template in the temp files folder
    // temp folder id: 10ytoWttkmHRPB6P7Ezp4X8WWCs2DF6zA
    // pdf folder id: 1nWgn4ymG2KeynJQ-0x7IEqz9q09jA1Uv
  
    const docFile = DriveApp.getFileById('1-W04Y6rBKCC_iVHG07P2B9UPXuKldwfpCrodoHifOsA');
    const tempFolder = DriveApp.getFolderById('10ytoWttkmHRPB6P7Ezp4X8WWCs2DF6zA');
    const pdfFolder = DriveApp.getFolderById('1nWgn4ymG2KeynJQ-0x7IEqz9q09jA1Uv');
    const currentSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('people');
    const dataRows = currentSheet.getLastRow()-1
  
    const data = currentSheet.getRange(2, 1, dataRows, 4).getDisplayValues();   // get sheet data
  
    let errors = [];   // array to store errors
  
    // for loop to iterate over data
    data.forEach(row => {
        try{
          createPDF(row[0], row[1], row[3], row[0] + " " + row[1], docFile, tempFolder, pdfFolder);   // row[0] is the first name, row[1] the last name, row[0] + " " + row[1] the pdf name etc.
          errors.push(['']);   // append nothing if the code works
        } catch(err){
          errors.push(['Failed']);   // append 'Failed' string to errors array if the code doesn't work
        }
  
    });   // close forEach loop 
  
    currentSheet.getRange(2, 5, dataRows, 1).setValues(errors);
  
  }
  
  
  // function to create a single pdf from a google doc template
  function createPDF(firstName, lastName, balance, pdfName, docFile, tempFolder, pdfFolder) {
  
  
    // google doc template id: 1-W04Y6rBKCC_iVHG07P2B9UPXuKldwfpCrodoHifOsA
    // make a copy of the google doc template in the temp files folder
    // temp folder id: 10ytoWttkmHRPB6P7Ezp4X8WWCs2DF6zA
    // pdf folder id: 1nWgn4ymG2KeynJQ-0x7IEqz9q09jA1Uv
    //const docFile = DriveApp.getFileById('1-W04Y6rBKCC_iVHG07P2B9UPXuKldwfpCrodoHifOsA');
    //const tempFolder = DriveApp.getFolderById('10ytoWttkmHRPB6P7Ezp4X8WWCs2DF6zA');
    //const pdfFolder = DriveApp.getFolderById('1nWgn4ymG2KeynJQ-0x7IEqz9q09jA1Uv');
  
  
    const tempFile = docFile.makeCopy(tempFolder);
    const tempDocFile = DocumentApp.openById(tempFile.getId());
    const body = tempDocFile.getBody();
    body.replaceText('{First name}', firstName);
    body.replaceText('{Last name}', lastName);
    body.replaceText('{Balance}', balance);
    tempDocFile.saveAndClose();
  
    const pdfContentBlob = tempFile.getAs(MimeType.PDF);   // trasform google doc information to information for a pdf
    pdfFolder.createFile(pdfContentBlob).setName(pdfName);   // create the pdf with our blob source
    tempFolder.removeFile(tempFile)   // remove temporary doc file every time I create a pdf
   
  
  };


  // Reference https://www.youtube.com/watch?v=r9uU_KwGgzQ&t=1211s