const {readFromConsole} = require('./logic/interactive.js');
const {readFromFile} = require('./logic/noninteractive.js');
const {getExprStr, getRootsWithPrecision} = require('./logic/mainLogic.js');

const argsOfCall = process.argv;
const filePath = argsOfCall[2];
const precision = 1; //digits after point

let values = {
  a: null,
  b: null,
  c: null,
}

if (argsOfCall.length == 3) {
  values = readFromFile(filePath);
} 
else if (argsOfCall.length == 2){
  values = readFromConsole(values);
} 
else {
  console.log('Error. Only 2 or 3 arguments are acceptable');
  process.exit(1);
}

const str = getExprStr(values);
const roots = getRootsWithPrecision(values, precision);

console.log(str);
console.log(roots);
