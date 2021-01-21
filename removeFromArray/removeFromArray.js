const removeFromArray = function () {
  let array = arguments[0];

  for (i = 1; i < arguments.length; i++) {
    let toRemove = arguments[i];

    for (j = 0; j < array.length; j++) {
      if (array[j] === toRemove) {
        let removed = array.splice(j, 1);
      }
    }
  }

  return array;
};

module.exports = removeFromArray;
