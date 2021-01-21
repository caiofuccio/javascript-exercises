const sumAll = function (firstNum, secondNum) {
  if (
    firstNum < 0 ||
    secondNum < 0 ||
    typeof firstNum != "number" ||
    typeof secondNum != "number"
  ) {
    return "ERROR";
  }

  let min = Math.min(firstNum, secondNum);
  let max = Math.max(firstNum, secondNum);
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

module.exports = sumAll;
