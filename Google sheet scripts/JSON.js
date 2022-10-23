/**
 * JSON functions
 * createJSON --> Function to create a new JSON
 * updateJSON --> Function to update an existing JSON
 * readJSON --> Function to read an existing JSON
 */

  // Function to create a file JSON
  function createJSON(folder_id, name_JSON, data){

    // genera una string Json dell'oggetto
    var json = JSON.stringify(data, 2);

    // Save JSON file in a specific folder
    DriveApp.getFolderById(folder_id).createFile(name_JSON, json);

  }



  // Function to update an existing JSON
  function updateJSON(data, id_JSON) {

    // genera una string Json dell'oggetto
      var json = JSON.stringify(data, 2);
    
    // lo salva su un file (in questo caso un file già presente)
      DriveApp.getFileById(id_JSON).setContent(json);
  }



  // Function to read an existing JSON
  function readJSON(id_JSON){

    // genera una stringa con il contenuto di un file JSON
    var json = DriveApp.getFileById(id_JSON).getBlob().getDataAsString();

    // ritorna l'oggetto
    return JSON.parse(json);
  }