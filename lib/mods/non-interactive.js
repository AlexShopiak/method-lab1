const {readFileSync}  = require('fs');
const {checkIfExist, checkIfMatches, checkIfNotZero} = require('../logic/checkers.js')
const mask = /^(-?\d+)(\.\d+)? (-?\d+)(\.\d+)? (-?\d+)(\.\d+)?\r\n$/g;

const readFromFile = path => {
  checkIfExist(path);
  const data = readFileSync(path, 'utf-8');

  checkIfMatches(data, mask);
  const values = data.split('\r\n')[0].split(' ');

  checkIfNotZero(values[0]);
  return {a:values[0], b:values[1], c:values[2]};
}

module.exports = {readFromFile}