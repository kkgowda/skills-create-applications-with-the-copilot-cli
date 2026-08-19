#!/usr/bin/env node
'use strict';
const { add, subtract, multiply, divide } = require('./calculator');

function printHelp() {
  console.log(`Usage:
  node src/index.js <command> <numbers...>
Commands:
  add       Add numbers (supports many operands)
  subtract  Subtract numbers (a - b - c ...)
  multiply  Multiply numbers
  divide    Divide numbers (checks division by zero)
Options:
  -h, --help  Show this help
Examples:
  node src/index.js add 1 2 3   # 6
`);
}

const argv = process.argv.slice(2);
if (argv.length === 0 || ['-h','--help','help'].includes(argv[0])) {
  printHelp();
  process.exit(0);
}
const cmd = argv[0];
const rawArgs = argv.slice(1);
if (rawArgs.length === 0) {
  console.error('Error: at least one numeric operand is required.');
  printHelp();
  process.exit(2);
}
const nums = rawArgs.map((s) => {
  const n = Number(s);
  if (Number.isNaN(n)) {
    console.error(`Invalid number: ${s}`);
    process.exit(2);
  }
  return n;
});

try {
  let result;
  switch (cmd) {
    case 'add':
      result = add(nums);
      break;
    case 'subtract':
      result = subtract(nums);
      break;
    case 'multiply':
      result = multiply(nums);
      break;
    case 'divide':
      result = divide(nums);
      break;
    default:
      console.error(`Unknown command: ${cmd}`);
      printHelp();
      process.exit(2);
  }
  console.log(result);
  process.exit(0);
} catch (err) {
  if (err.message && err.message.includes('Division by zero')) {
    console.error('Error: Division by zero');
    process.exit(1);
  }
  console.error('Error:', err.message || err);
  process.exit(1);
}
