const fs = require('fs');
const parse = require('./src/parser');

const buffer = fs.readFileSync('../fit-old/test.fit');

parse(buffer);
