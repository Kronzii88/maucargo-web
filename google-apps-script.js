// Google Apps Script for MAUCargo Contact Form
// 1. Create a new Google Sheet
// 2. Go to Extensions > Apps Script
// 3. Replace the existing code with this code
// 4. Click Deploy > New deployment
// 5. Select "Web app" as type
// 6. Set "Execute as" to "Me (your email)"
// 7. Set "Who has access" to "Anyone"
// 8. Click Deploy, copy the Web app URL, and paste it in Contact.jsx as GOOGLE_SCRIPT_URL

const sheetName = "Sheet1";

function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(sheetName);

    // Add headers if first row is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Message"]);
    }

    const name = e.parameter.name;
    const email = e.parameter.email;
    const message = e.parameter.message;
    const timestamp = new Date().toLocaleString();

    sheet.appendRow([timestamp, name, email, message]);

    return ContentService.createTextOutput(
      JSON.stringify({ result: "success" }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", error: error.message }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ result: "GET request received" }),
  ).setMimeType(ContentService.MimeType.JSON);
}
