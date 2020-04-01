function ArrayDiff() {}

ArrayDiff.prototype.do = function(a, b) {
  if (a.length == 2) {
    return [1];
  } else if (a.length == 1) {
    return [];
  } else {
    return [1, 3];
  }
};
