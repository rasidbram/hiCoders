const fs = require("fs");

fs.readFile("week2/Reading Files with Node.js/documents.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
