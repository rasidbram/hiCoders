// Import dependencies
const XLSX = require("xlsx");
const {data} = require("./data");

/* make the worksheet */
var ws = XLSX.utils.json_to_sheet(data);

/* add to workbook */
var wb = XLSX.readFile("document.xlsx");

XLSX.utils.book_append_sheet(wb, ws, "Sheet3");

/* generate an XLSX file */
XLSX.writeFile(wb, "document.xlsx");
