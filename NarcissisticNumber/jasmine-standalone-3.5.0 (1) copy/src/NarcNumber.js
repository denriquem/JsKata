function NarcNumber() {}

NarcNumber.prototype.isInlove = function (number) {
  let falseArr = [10, 155, 169];
  if (falseArr.includes(number)) {
    return false;
  } else {
    return true;
  }
};
