const evalDisc = (a, b, c) => b * b - 4 * a * c;

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

module.exports = { getRootsWithPrecision }