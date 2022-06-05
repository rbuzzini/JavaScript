// This script works if you want to move a file into a sub folder inside
// a master destination folder. The sub folder in which you want to move the
// file changes based on specific column values in your data.


const master_destination_folder_id = ''
const method1_folder_id = ''
const method2_folder_id = ''


const ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Insert sheet name')
const ss_data = ss.getRange('A1').getDataRegion().getValues()


function move_file() {


  var branch_column_name = ''
  var sales_column_name = ''
  var method_final_column_name = ''
  var link_column_name = ''
  var check_col_name = ''


  var branch_column_index = ss_data[0].indexOf(branch_column_name)
  var sales_column_index = ss_data[0].indexOf(sales_column_name)
  var method_final_column_index = ss_data[0].indexOf(method_final_column_name)
  var link_column_index = ss_data[0].indexOf(link_column_name)
  var check_column_index = ss_data[0].indexOf(check_col_name)


  // Creo le liste con i valori:
  //var lista_branch = []
  var lista_sales = []
  var lista_method_final = []
  var lista_link = []
  var lista_check = []
  
  

  ss_data.map(
    (row, i) => {
      //lista_branch.push(row[branch_column_index]);
      lista_sales.push(row[sales_column_index]);
      lista_method_final.push(row[method_final_column_index]);
      lista_link.push(row[link_column_index]);
      lista_check.push(row[check_column_index]);
      }   
  )


  // Ora bisogna iterare nelle liste e passare quando lista_check=true, quando lista_check=false ...
  

  ss_data.map(
    (el, index) => {

    
      if (index != 0 && lista_check[index] == false) {
      var file_to_copy = DriveApp.getFileById(lista_link[index]);
      var temp_method_final = lista_method_final[index];
      var target_folder = "";

      if(temp_method_final == "method1"){
        target_folder = getDestinationFolder(method1_folder_id, lista_sales[index]);
        
      } else if(temp_method_final == "method2"){
        target_folder = DriveApp.getFolderById(method2_folder_id);
      }

      file_to_copy.moveTo(target_folder);
      
      }
       
    }
    
  )

};







/////////////////////////////////////////   Support   ////////////////////////////////////////////


// Support function to find the folder to search:
function getDestinationFolder(idParentFolder, folderNameToSearch){

  var parentFolder = DriveApp.getFolderById(idParentFolder);
  var foldersList = parentFolder.getFolders();
  var flagCreation = false;

  while(foldersList.hasNext()) {
    var nextFolder = foldersList.next();
    if(nextFolder.getName()==folderNameToSearch) {
      flagCreation = true;
      return nextFolder
    }
  }

  // if the folder we are searching for doesn't exist, we create it
  if(flagCreation == false){
    var newFolder = parentFolder.createFolder(folderNameToSearch)
    return DriveApp.getFolderById(newFolder.getId())
  }


};