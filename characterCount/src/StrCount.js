function StrCount() {}

StrCount.prototype.do = function(string) {
  if (string == "a") {
    return { a: 1 };
  } else {
    return { b: 1 };
  }
};
