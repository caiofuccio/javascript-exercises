const repeatString = function (str, numberOfRepeats) {
  if (numberOfRepeats < 0) {
    return "ERROR";
  } else {
    return str.repeat(numberOfRepeats);
  }
};

module.exports = repeatString;
