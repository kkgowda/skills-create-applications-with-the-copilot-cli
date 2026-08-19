"use strict";

function add(nums) {
  return nums.reduce((a, b) => a + b, 0);
}

function subtract(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  return nums.slice(1).reduce((acc, n) => acc - n, nums[0]);
}

function multiply(nums) {
  if (nums.length === 0) return 0;
  return nums.reduce((a, b) => a * b, 1);
}

function divide(nums) {
  if (nums.length === 0) return NaN;
  if (nums.length === 1) return nums[0];
  return nums.slice(1).reduce((acc, n) => {
    if (n === 0) throw new Error('Division by zero');
    return acc / n;
  }, nums[0]);
}

module.exports = { add, subtract, multiply, divide };
