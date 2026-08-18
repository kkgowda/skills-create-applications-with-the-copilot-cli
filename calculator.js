function validateNumber(value, label) {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    throw new Error(`Invalid ${label}: "${value}" must be a finite number.`);
  }

  return number;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }

  return a / b;
}

const OPERATIONS = {
  add,
  subtract,
  multiply,
  divide,
};

function runCalculator(args) {
  const [operation, leftOperand, rightOperand] = args;

  if (!operation || !leftOperand || !rightOperand) {
    throw new Error('Usage: node calculator.js <operation> <value1> <value2>');
  }

  const operationFn = OPERATIONS[operation];

  if (!operationFn) {
    const supportedOperations = Object.keys(OPERATIONS).join(', ');
    throw new Error(`Unsupported operation: "${operation}". Supported operations: ${supportedOperations}.`);
  }

  const a = validateNumber(leftOperand, 'left operand');
  const b = validateNumber(rightOperand, 'right operand');

  return operationFn(a, b);
}

if (require.main === module) {
  try {
    const result = runCalculator(process.argv.slice(2));
    console.log(result);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exitCode = 1;
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  runCalculator,
  validateNumber,
};
