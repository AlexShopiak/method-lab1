const {evaluateRoots} = require('../lib/logic/counter.js')

test('test-2-roots', () => {
    const result = evaluateRoots({a:2,b:1,c:-3}, 1);
    const expected = 'There are 2 roots\nx1 = -1.5\nx2 = 1.0';
    expect(result).toEqual(expected);
})

test('test-1-root', () => {
    const result = evaluateRoots({a:2,b:4,c:2}, 1);
    const expected = 'There is 1 root\nx1 = -1.0';
    expect(result).toEqual(expected);
})

test('test-0-roots', () => {
    const result = evaluateRoots({a:1,b:0,c:9}, 1);
    const expected = 'There are 0 roots';
    expect(result).toEqual(expected);
})