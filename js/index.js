const fs = require('fs');

// convert JSON object to string
const data = JSON.stringify(npcChar);

// write JSON string to a file
fs.writeFile('./user.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});