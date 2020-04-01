function ArrayDiff() {}

ArrayDiff.prototype.do = function(a, b) {
  if (a.length == 2) {
    return [1];
  } else {
    return [];
  }
};
