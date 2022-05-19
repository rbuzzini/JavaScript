function moving_file(){
  
    // parameter setting:
  
    // folders ids:
    var idFolderByLetter = '18fYgk6t2uCAiOkiVPRi3EHCpvA5Og9Nh'
    var idFolderBySales = '1qu8tpfgd07siS8J8Xgf0vOFZZ_QRCl1p'
  
  
  
    // data preparation:
    var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Generated Letters')
    var ssData = ss.getRange('A1').getDataRegion().getValues()
  
    // columns names:
    checkColumnName = 'Check'
    methodColumnName = 'Method'
    methodFinalColumnName = 'Method Final'
    salesNameColumnName = 'Sale Rep'
    linkColumnName = 'idPDF'
  
    // columns indexes:
    checkColumnIndex = ssData[0].indexOf(checkColumnName)
    methodColumnIndex = ssData[0].indexOf(methodColumnName)
    methodFinalColumnIndex = ssData[0].indexOf(methodFinalColumnName)
    salesNameColumnIndex = ssData[0].indexOf(salesNameColumnName)
    linkColumnIndex = ssData[0].indexOf(linkColumnName)
  
  
  
    // Create lists with data values:
    var lista_check = []
    var lista_method = []
    var lista_methodFinal = []
    var lista_salesName = []
    var lista_link = []
    
    ssData.map(
      (row, i) => {
        lista_check.push(row[checkColumnIndex]);
        lista_method.push(row[methodColumnIndex]);
        lista_methodFinal.push(row[methodFinalColumnIndex]);
        lista_salesName.push(row[salesNameColumnIndex]);
        lista_link.push(row[linkColumnIndex]);
        }   
    )  // end map - lists completed
  
  
    // Now you need to iterate over the lists and pass when lista_check=true; when lista_check=false ...
  
    lista_check.map(
      (el, index) => {
        if(el==false) {
            if(lista_method[index]=='by Letter') {
              var fileToMove = DriveApp.getFileById(lista_link[index]);
              var destinationFolder = getDestinationFolder(idFolderBySales, lista_salesName[index]);
              fileToMove.moveTo(destinationFolder);
            } else if(lista_method[index]=='by Sales') {
                var fileToMove = DriveApp.getFileById(lista_link[index]);
                var destinationFolder = DriveApp.getFolderById(idFolderByLetter);
                fileToMove.moveTo(destinationFolder);
            }
        }
      }
    )   // end map
  
  };   // end function
  
  
  
  
  /////////////////////////////////////////   Support   ////////////////////////////////////////////
  
  
  // support function to find the folder to search:
  function getDestinationFolder(idParentFolder, folderNameToSearch){
    
    var parentFolder = DriveApp.getFolderById(idParentFolder);
    var foldersList = parentFolder.getFolders();
  
    while(foldersList.hasNext()) {
      var nextFolder = foldersList.next();
      if(nextFolder.getName()==folderNameToSearch) {
        return nextFolder;
      }
    }
  
  }; // end function
  
  
  
  
  
  
  