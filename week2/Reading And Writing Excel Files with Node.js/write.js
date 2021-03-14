// Import dependencies
const XLSX = require("xlsx");
const {data} = require("./data");

// Read the file into memory
const workbook = XLSX.readFile("documents.xlsx");

// Convert the XLSX to JSON
let worksheets = [];
for (const sheetName of workbook.SheetNames) {
	worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
}

// Modify the XLSX
for (let i = 0; i < data.length; i++) {
	worksheets.Sheet1.push(data[i]);
}

// Update the XLSX file
XLSX.utils.sheet_add_json(workbook.Sheets["Sheet1"], worksheets.Sheet1);
XLSX.writeFile(workbook, "documents.xlsx");
