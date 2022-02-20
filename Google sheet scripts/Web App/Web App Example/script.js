function doGet(e) {
  
    Logger.log(e.parameter);
    return HtmlService.createHtmlOutputFromFile("page");
    
  }
  
  
  function userClicked(name){
      var id = "17ZxneKmJWmLpIj_byJBJcfor8Iagak8sENQBgmtKT9c";   // spreadsheet id where we wanna save the data
      var ss = SpreadsheetApp.openById(id);    // ss stands for spreadsheet
      var ws = ss.getSheetByName("Dati");   // ws stands for worksheet
      
      ws.appendRow([name, new Date()]);
      
      Logger.log(name + " clicked the button");
  }
  
  
  // References: https://www.youtube.com/watch?v=RRQvySxaCW0&list=PLv9Pf9aNgemt82hBENyneRyHnD-zORB3l&index=1
  