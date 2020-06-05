function NarcNumber() {}

NarcNumber.prototype.isInlove = function (number) {
  let falseArr = [10, 155, 169];

  if (falseArr.includes(number)) {
    return false;
  } else if (number === 1635) {
    numArray = number.toString().split("");
    const digitNumber = numArray.length;
    const newArr = numArray.map((x) => Math.pow(x, digitNumber));
    const summedNewArr = newArr.reduce((a, b) => a + b, 0);
    if (summedNewArr !== number) {
      return false;
    }
  } else {
    return true;
  }
};
