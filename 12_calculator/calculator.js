const add = function(num1,num2) {
  return num1 + num2
};

const subtract = function(num1,num2) {
  return num1 - num2;
	
};

const sum = function(array) {
  return array.reduce((sum, indv)=> sum += indv,0);
	
};

const multiply = function(array) {
  return array.reduce((sum, indv)=> sum *= indv);

};

const power = function(num1,num2) {
  return num1**num2;
	
};

const factorial = function(n) {
  if (n < 0) {
    return alert("error: negative numbers not valid")
  } else if (n === 0 || n === 1) {
    return 1
  } else {
    return n*factorial(n-1)
  }
	
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
