const prompt = require("prompt-sync")({sigint: true});
const whtClr = "\x1b[97m";
const grnClr = "\x1b[92m";

const isRealNum = num => {
  const isNumber = (typeof(num) === 'number');
  const isNotNaN = !isNaN(num);
  return isNumber && isNotNaN;
}

const readFromConsole = () => {
  let values = {
    a: null,
    b: null,
    c: null,
  }
  for (value in values) {
    const num = prompt(`${whtClr}${value} = ${grnClr}`);
    if (isRealNum(Number(num))) {
      values[value] = Number(num);
    } else {
      console.log(`${whtClr}Error. Expected a valid real number, got ${num} instead`)
      readFromConsole(values);
      break;
    }
  }
  if (values.a == 0) {
    console.log(`${whtClr}Error. 'a' cannot be 0`)
    readFromConsole(values);
  }

  process.stdout.write(whtClr);
  return values;
}

module.exports = {readFromConsole}