const XLSX = require("xlsx");

let wb = XLSX.readFile("documents.xlsx");
let sheetNames = wb.SheetNames;

console.log(sheetNames); // [ 'Sheet1', 'Sheet2' ]

let sheet1 = wb.Sheets["Sheet1"];
let sheet2 = wb.Sheets["Sheet2"];

let jsonData1 = XLSX.utils.sheet_to_json(sheet1);
let jsonData2 = XLSX.utils.sheet_to_json(sheet2);

console.log("Sheet1=>>>", jsonData1, "Sheet2=>>>", jsonData2);
