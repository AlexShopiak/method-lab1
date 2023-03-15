const {startAskLoop} = require('./logic/interactive.js');
const {getFromFile} = require('./logic/noninteractive.js');
const {getExprStr, getRootsWithPrecision} = require('./logic/mainLogic.js');
const args = process.argv;
const argsLen = args.length;

let values = {
  a: null,
  b: null,
  c: null,
}

if (argsLen == 3) {
  values = getFromFile(args[2]);
} 
else if (argsLen == 2){
  values = startAskLoop(values);
} 
else {
  console.log('Error. Only 2 or 3 arguments are acceptable');
  process.exit(1);
}

console.log(getExprStr(values));
console.log(getRootsWithPrecision(values, 1));
