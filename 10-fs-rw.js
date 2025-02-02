const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('content/firstTest.txt', 'utf8');
const second = readFileSync('content/secondTest.txt', 'utf8');

writeFileSync('./content/result-sync.txt',
    `here is the result: ${first} , ${second}`,
    );

