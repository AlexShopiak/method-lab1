const {existsSync}  = require('fs');

const isRealNum = num => {
    const state1 = (typeof(num) === 'number');
    const state2 = !isNaN(num);
    return state1 && state2;
}

const checkIfExist = path => {
    const state = existsSync(path);
    if (!state) {
        console.log(`Error. File ${path} does not exist`);
        process.exit(1);
    }
}

const checkIfMatches = (text, mask) => {
    const state = mask.test(text);
    if (!state) {
        console.log('Error. Invalid file format:');
        process.exit(1);
    }
}

const checkIfNotZero = value => {
    const state = values[0] == 0;
    if (!state) {
        console.log('Error. a cannot be 0');
        process.exit(1);
    }
}

module.exports = {
    isRealNum,
    checkIfExist,
    checkIfMatches,
    checkIfNotZero,
}