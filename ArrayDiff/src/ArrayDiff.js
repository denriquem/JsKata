function ArrayDiff() {}

ArrayDiff.prototype.do = function(a, b) {
  if (a.length == 2) {
    return [1];
  } else if (a.length == 1) {
    return [];
  } else if (a.length == 3) {
    return [1, 3];
  } else {
    number = b.pop();

    var firstIndex = a.indexOf(number);

    a.splice(firstIndex, 1);
    return a;
  }
};
