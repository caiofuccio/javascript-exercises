const ftoc = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9);
  let celsiusRound = Math.round(celsius * 10) / 10;

  return celsiusRound;
};

const ctof = function (celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  let fahrenheitRound = Math.round(fahrenheit * 10) / 10;

  return fahrenheitRound;
};

module.exports = {
  ftoc,
  ctof,
};
