function doGet(e) {
  
    return HtmlService.createTemplateFromFile("page").evaluate();
    
  }
  
  
  function userClicked(userInfo){
      var id = "17ZxneKmJWmLpIj_byJBJcfor8Iagak8sENQBgmtKT9c";   // spreadsheet id where we wanna save the data
      var ss = SpreadsheetApp.openById(id);    // ss stands for spreadsheet
      var ws = ss.getSheetByName("Dati");   // ws stands for worksheet
      
      ws.appendRow([userInfo.firstName, userInfo.lastName, userInfo.app, new Date()]);
      
      Logger.log(fname + " clicked the button");
  }
  
  
  function include(fileName){
    return HtmlService.createHtmlOutputFromFile(fileName).getContent();   // function used in page.html file to include style and js text
  }
  
  // References: https://www.youtube.com/watch?v=RRQvySxaCW0&list=PLv9Pf9aNgemt82hBENyneRyHnD-zORB3l&index=1
  