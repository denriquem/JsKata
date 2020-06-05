function NarcNumber() {}

NarcNumber.prototype.isInlove = function (number) {
  if (number === 10 || number === 155) {
    return false;
  } else {
    return true;
  }
};
