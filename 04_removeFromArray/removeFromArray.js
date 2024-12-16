const removeFromArray = function() {
  if (arguments.length < 2) {
    console.error("Invalid number of parameters supplied");
    return;
  }
  if (! Array.isArray(arguments[0])) {
    console.error("First parameter must be an array");
    return;
  }

  const srcArray = arguments[0];
  let elementToRemove;
  let index;

  for (let i = 1; i < arguments.length; i++) {
    elementToRemove = arguments[i];
    while (true) {
      index = srcArray.indexOf(elementToRemove);
      if (index == -1) {
        break;
      } else {
        srcArray.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
  }

  return srcArray;
};

// Do not edit below this line
module.exports = removeFromArray;
