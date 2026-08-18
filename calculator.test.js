const test = require('node:test');
const assert = require('node:assert/strict');

const {
  add,
  subtract,
  multiply,
  divide,
  runCalculator,
} = require('./calculator');

test('adds numbers', () => {
  assert.equal(add(2, 3), 5);
});

test('subtracts numbers', () => {
  assert.equal(subtract(10, 4), 6);
});

test('multiplies numbers', () => {
  assert.equal(multiply(3, 7), 21);
});

test('divides numbers', () => {
  assert.equal(divide(12, 3), 4);
});

test('throws on division by zero', () => {
  assert.throws(() => divide(9, 0), /Division by zero is not allowed\./);
});

test('runs supported operations from CLI arguments', () => {
  assert.equal(runCalculator(['multiply', '6', '7']), 42);
  assert.equal(runCalculator(['add', '1.5', '2.5']), 4);
});

test('rejects invalid numeric input', () => {
  assert.throws(() => runCalculator(['add', 'abc', '2']), /Invalid left operand/);
});
