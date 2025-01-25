const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
  return array.reduce(getSum, 0);

  function getSum(total, current) {
    return total + current;
  }
};

const multiply = function(array) {
  return array.reduce(getMult)

  function getMult(total, current) {
    return total * current
  }
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(n) {
	let total = 1;

  for(let i = n; i > 0; i--) {
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
