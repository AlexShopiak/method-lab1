const prompt = require("prompt-sync")({sigint: true});
const {isRealNum} = require('../logic/checkers.js')
const {std, green} = require('../logic/ansi-colors.js')

const readFromConsole = () => {
  const values = { a: null, b: null, c: null};
  for (value in values) {
    const num = Number(prompt(`${std}${value} = ${green}`));
    if (isRealNum(num)) {
      values[value] = num;
    } else {
      console.log(`${std}Error. Expected a valid real number, got ${num} instead`)
      readFromConsole(values);
      break;
    }
  }
  if (values.a == 0) {
    console.log(`${std}Error. 'a' cannot be 0`)
    readFromConsole(values);
  }

  process.stdout.write(std);
  return values;
}

module.exports = {readFromConsole}
