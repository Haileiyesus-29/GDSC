const fs = require("fs");

const path = process.argv[2];
const output = fs.readFileSync(path).toString().split("\n");

console.log(output.length - 1);
