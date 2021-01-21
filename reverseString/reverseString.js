const reverseString = function (str) {
  let splitStr = str.split("");
  let reverseArray = splitStr.reverse();
  let reverseStr = reverseArray.join("");

  return reverseStr;
};

module.exports = reverseString;
