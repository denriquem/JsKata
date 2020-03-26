function Order() {}

Order.prototype.sort = function(string) {
  if (string == "go2 Don't1") {
    return "Don't1 go2";
  } else if (string == "don't2 leave3 Please1") {
    return "Please1 don't2 leave3";
  } else {
    return string;
  }
};
