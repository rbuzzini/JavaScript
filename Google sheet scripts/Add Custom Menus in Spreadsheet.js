
// add custome menu in the spreadsheet
// onOpen is a special function which runs when your Sheet opens
function onOpen() {

    const ui = SpreadsheetApp.getUi();   // acces user-interface area
  
    ui.createMenu('Custom Menu')
      .addItem('Add Row Totals', 'calculateRowTotals')
      .addToUi();
  
  }