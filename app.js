const {readFromConsole} = require('./lib/mods/interactive.js');
const {readFromFile} = require('./lib/mods/non-interactive.js');
const {getExprString, evaluateRoots} = require('./lib/logic/counter.js');

const argsOfCall = process.argv;
const path = argsOfCall[2];
const precision = 1; //digits after point
let values = {};

if (argsOfCall.length == 3) {
  values = readFromFile(path);
} 
else if (argsOfCall.length == 2){
  values = readFromConsole();
} 
else {
  console.log('Error. Only 2 or 3 arguments are acceptable');
  process.exit(1);
}

const string = getExprString(values);
const roots = evaluateRoots(values, precision);

console.log(string);
console.log(roots);