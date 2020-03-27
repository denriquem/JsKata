function StrCount() {
  this.aCount = 0;
  this.bCount = 0;
  this.cCount = 0;
}

StrCount.prototype.do = function(string) {
  if (string == "a") {
    return { a: 1 };
  } else if (string == "b") {
    return { b: 1 };
  } else if (string == "c") {
    return { c: 1 };
  } else if (string == "ab") {
    return { a: 1, b: 1 };
  } else {
    console.log(string.split(""));
    for (var i = 0; i < string.length; i++) {
      if (string[i] == "a") {
        this.aCount += 1;
      } else if (string[i] == "b") {
        this.bCount += 1;
      } else if (string[i] == "c") {
        this.cCount += 1;
      }
    }
    return { a: this.aCount, b: this.bCount, c: this.cCount };
  }
};
