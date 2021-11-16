const fs = require('fs');

let data = JSON.stringify(npcChar, null, 2);

fs.writeFile('npcs.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

console.log('This is after the write call');