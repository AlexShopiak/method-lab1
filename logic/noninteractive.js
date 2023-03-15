const {existsSync, readFileSync}  = require('fs');

const isFileExist = path => existsSync(path);

const hasRightFormat = (text, mask) => mask.test(text);

const readFromFile = path => {
  if (!isFileExist(path)) {
    console.log(`Error. File ${path} does not exist`);
    process.exit(1);
  }
  const dataString = readFileSync(path, 'utf-8');
  const mask = /^(-?\d+)(\.\d+)? (-?\d+)(\.\d+)? (-?\d+)(\.\d+)?\r\n$/g;
  if(hasRightFormat(dataString, mask)) {
    const coeffs = dataString.split('\r\n')[0].split(' ');
    const [aCoeff, bCoeff, cCoeff] = [coeffs[0], coeffs[1], coeffs[2]];
    if (aCoeff == 0) {
      console.log('Error. a cannot be 0');
      process.exit(1);
    }
    return {a:aCoeff, b:bCoeff, c:cCoeff};
  } 
  else {
    console.log('Error. Invalid file format:', [dataString]);
    process.exit(1);
  }
}

module.exports = {readFromFile}