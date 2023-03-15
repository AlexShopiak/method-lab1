const evalDisc = (a, b, c) => b * b - 4 * a * c;

const objHasProperties = (obj, arr) => {
  for (property of arr) {
    if (!obj.hasOwnProperty(property)) return false;
  }
  return true;
}

const getExprStr = values => {
  const properties = ['a', 'b', 'c'];
  const [a, b, c] = [values.a, values.b, values.c];

  if (objHasProperties(values, properties)) {
    return `Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`;
  }
  console.log(`Error. Object doesn't have all ${properties} properties`);
  process.exit(1);
}

const getRootsWithPrecision = (values, precision) => {
  const [a, b, c] = [values.a, values.b, values.c];
  const disc = evalDisc(a, b, c);

  if (disc >= 0) {
    const x1 = ((-b - Math.sqrt(disc)) / (2 * a)).toFixed(precision);
    const x2 = ((-b + Math.sqrt(disc)) / (2 * a)).toFixed(precision);
    if (x1 == x2) return `There is 1 root\nx1 = ${x1}`;
    return `There are 2 roots\nx1 = ${x1}\nx2 = ${x2}`;
  }

  return "There are 0 roots";
}

module.exports = { getExprStr, getRootsWithPrecision }