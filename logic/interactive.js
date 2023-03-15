const prompt = require("prompt-sync")({sigint: true});
const whtClr = "\x1b[97m";
const grnClr = "\x1b[92m";

const isRealNum = num => {
  const c1 = (typeof(num) === 'number');
  const c2 = !isNaN(num);
  return c1 && c2;
}

const startAskLoop = values => {
  return values;
}

module.exports = {startAskLoop}