const {existsSync, readFileSync}  = require('fs');

const isFileExist = path => existsSync(path);

const hasRightFormat = text => {
  const mask = /^(-?\d+)(\.\d+)? (-?\d+)(\.\d+)? (-?\d+)(\.\d+)?\r\n$/g;  
  return mask.test(text);
}

const getFromFile = (path, values) => {

  if (!isFileExist(path)) {
    console.log(`Error. File ${path} does not exist`);
    process.exit(1);
  }

  const str = readFileSync(path, 'utf-8');
  
  if(hasRightFormat(str)) {
    const arr = str.split('\r\n')[0].split(' ');
    const [aValue, bValue, cValue] = [arr[0],arr[1],arr[2]];
    if (aValue == 0) {
      console.log('Error. a cannot be 0');
      process.exit(1);
    }
    values.a = aValue;
    values.b = bValue;
    values.c = cValue;
    return values;
  } 
  else {
    console.log('Error. Invalid file format:', [str]);
    process.exit(1);
  }
}

module.exports = {getFromFile}