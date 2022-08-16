/**
 * 
 * Introduction to Apps Script Project
 * Project: Google Form Coding Questionnaire
 * 
 */


// talk to Google Form
// get the ID of the Form
// https://docs.google.com/forms/d/1WwboQapPys0fedT11uvV1gyCGWeGF1o0fauT3hmuGoo/edit


// global variables
const FORM_ID = '1WwboQapPys0fedT11uvV1gyCGWeGF1o0fauT3hmuGoo';
// const form = FormApp.openById(FORM_ID);   
// with form variable set to global I would have this exception error opening the sheet:
// Exception: Non disponi dell'autorizzazione per chiamare FormApp.openById.


// add custom menu to the spreadsheet
function onOpen() {
  
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Questionnaire Menu')
    .addItem('Update Form', 'updateForm_v2')
    .addItem('Send Emails', 'sendEmail_v2')
    .addToUi();
    
}


// get the IDs of the Form components
function getFormIDs() {

  const form = FormApp.openById(FORM_ID);
  const form_items = form.getItems(); // array of form items

  // loop over array
  // print out form items title & ID
  form_items.forEach(item => console.log(item.getTitle() + ' ' + item.getId()));

  /*
  17:53:27	Informazioni	Name 326533717
  17:53:27	Informazioni	Email address 1355225028
  17:53:27	Informazioni	Do you have any experience with coding? 2124533078
  17:53:27	Informazioni	What programming languages do you use? 44280836
  */
  
}



// update the form question from Sheet
// version 1
function updateForm_v1() {

  // get the list of languages from Google Sheet
  const form = FormApp.openById(FORM_ID);
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const setup_sheet = ss.getSheetByName('setup');
  const language_values = setup_sheet.getRange(2, 1, setup_sheet.getLastRow() - 1, 1).getValues();
  const language_values_flat = language_values.map(item => item[0]);

  // get hold the Form and the question
  const language_checkbox_question = form.getItemById('44280836').asCheckboxItem();

  // populate the form question with the language list
  language_checkbox_question.setChoiceValues(language_values_flat);


}


// version 1
// automatically send email to respondents with their information
function sendEmail_v1() {

  // get spreadsheet information
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const response_sheet = ss.getSheetByName('Risposte del modulo 1');
  const data = response_sheet.getDataRange().getValues();
  
  // remove the header
  data.shift();

  // loop over the rows
  data.forEach((row, i) => {

    // identify ones I haven't replied to
    if (row[5] === '') {

      // get the email address
      const email = row[2];

      // write the email
      const subject = 'Thank you for responding to the Apps Script questionnaire!';
      let body = '';   // I use "let" assignment so I can reassign body variable value later

      // change the body for yes and no response to experience with coding question:
      if (row[3] === 'No') {
        body = 'TBC - Yes answer';
      }
      
      else {
        body = 'TBC - No answer'
      }

      // send the email
      GmailApp.sendEmail(email, subject, body);

      // mark as sent in "Replied" (row[5]) column
      const d = new Date();
      response_sheet.getRange(i + 2, 6).setValue(d);

    }
    else {
      console.log('No email sent: email already sent for this row')
    }

    
  });

}


// update the form question from Sheet
// version 2
function updateForm_v2() {

  // get Sheet and Form variables
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const form = FormApp.openById(FORM_ID);

  // get languages list in setup sheet
  const setup_sheet = ss.getSheetByName('setup');
  const setup_sheet_values = setup_sheet.getRange(2, 1, setup_sheet.getLastRow() - 1, 1).getValues().flat();

  // get the list of languages submitted via form
  const response_sheet = ss.getSheetByName('Risposte del modulo 1');
  const data = response_sheet.getRange(2, 5, response_sheet.getLastRow() - 1, 1).getValues().flat();
  const submitted_form_values = data.join().split(',');

  //const language_values_flat = language_values.map(item => item[0]);

  // get hold the Form and the question
  const form_checkbox_choices = form.getItemById('44280836').asCheckboxItem().getChoices();
  const form_checkbox_values = form_checkbox_choices.map(x => x.getValue());

  // consolidate languages list
  const all_languages =[...form_checkbox_values, ...setup_sheet_values, ...submitted_form_values]
  
  // remove leadin and trailing spaces from languages list
  const trim_languages = all_languages.map(x => x.trim());
  
  // sort trim_languages list
  trim_languages.sort();
  
  // delete duplicates
  let final_languages_list = trim_languages.filter((language, i) => trim_languages.indexOf(language) === i);
  // if the language index is not the first element of that language we are not considering it
  
  // remove any blanks
  final_languages_list = final_languages_list.filter(item => item.length !== 0);

  // move 'None' to front of the array
  final_languages_list = final_languages_list.filter(item => item !== 'None');
  final_languages_list.unshift('None');

  // turn into double array notation fot Sheets
  const final_double_array = final_languages_list.map(language => [language]);

  // paste back into setup sheet
  setup_sheet.getRange('A2:A').clear();   // remove old languages in order to add new ones
  setup_sheet.getRange(2, 1, final_languages_list.length, 1).setValues(final_double_array);

  // copy into the form
  form.getItemById('44280836').asCheckboxItem().setChoiceValues(final_languages_list);

}


// version 2
// automatically send email to respondents with their information
function sendEmail_v2() {

  // get spreadsheet information
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const response_sheet = ss.getSheetByName('Risposte del modulo 1');
  const data = response_sheet.getDataRange().getValues();
  
  // remove the header
  data.shift();

  // loop over the rows
  data.forEach((row, i) => {

    // identify ones I haven't replied to
    if (row[5] === '') {

      // get responder/answer information:
      const name = row[1];
      const email = row[2];
      const answer = row[3];
      const languages = row[4];

      // write the email
      const subject = 'Thank you for responding to the Apps Script questionnaire!';
      let body = '';   // I use "let" assignment so I can reassign body variable value later

      // change the body for yes and no response to experience with coding question:
      if (answer === 'Yes') {
        body = 'Hi ' + name + `,<br><br>
          Thank you for responding to our ` + new Date().getFullYear() + ` Developer Survey!<br><br>
          You reported the experience with the following coding languages:<br>
          <em>`+ languages + `</em><br><br>
          Thanks,<br>
          Rob
        `;
      }
      // no answer
      else {
        body = 'Hi ' + name + `,<br><br>
          Thank you for responding to our ` + new Date().getFullYear() + ` Developer Survey!<br><br>
          You reported not having any experience coding, so here's a resource to get started:<br><br>
          <a href="https://www.benlcollins.com/">Ben Collins site</a><br><br>
          Thanks,<br>
          Rob
        `
      }
      
      // send the email
      GmailApp.sendEmail(email, subject, '', {htmlBody: body});

      // mark as sent in "Replied" (row[5]) column
      const d = new Date();
      response_sheet.getRange(i + 2, 6).setValue(d);

    }
    else {
      console.log('No email sent: email already sent for this row')
    }

    
  });

}

