const prompt = require("prompt-sync")({sigint: true});
const whtClr = "\x1b[97m";
const grnClr = "\x1b[92m";

const isRealNum = num => {
  const c1 = (typeof(num) === 'number');
  const c2 = !isNaN(num);
  return c1 && c2;
}

const startAskLoop = values => {
  for (value in values) {
    const num = prompt(`${whtClr}${value} = ${grnClr}`);
    if (isRealNum(num * 1)) {
      values[value] = num * 1;
    } else {
      console.log(`${whtClr}Error. Expected a valid real number, got ${num} instead`)
      startAskLoop(values);
      break;
    }
  }

  if (values.a == 0) {
    console.log(`${whtClr}Error. 'a' cannot be 0`)
    startAskLoop(values);
  }

  console.log(whtClr); //set default color
  return values;
}

module.exports = {startAskLoop}