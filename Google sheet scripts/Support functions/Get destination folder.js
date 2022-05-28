
// This function can be really helpful if you have to move/copy many files
// from one folder to another 

function getDestinationFolder(parent_folder_id, folder_name_to_search){
  
    var parent_folder = DriveApp.getFolderById(parent_folder_id);
    var folders_list = parent_folder.getFolders();
    var flag_creation = false;
  
    // loop thorugh folders in parent_folder to find the one that match our condition
    while(folders_list.hasNext()) {
      var next_folder = folders_list.next();
      if(next_folder.getName()==folder_name_to_search) {
        flag_creation = true;
        return next_folder;
      }
    }
  
    // if the wanted folder doesn't exists we create it
    if(flag_creation == false){
      var new_folder = parent_folder.createFolder(folder_name_to_search)
      return DriveApp.getFolderById(new_folder.getId())
    }
  
  
  };