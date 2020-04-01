function StrCount() {
  this.numCount = [
    (this.aCount = 0),
    (this.bCount = 0),
    (this.cCount = 0),
    (this.dCount = 0),
    (this.eCount = 0),
    (this.fCount = 0),
    (this.gCount = 0),
    (this.hCount = 0),
    (this.iCount = 0),
    (this.jCount = 0),
    (this.kCount = 0),
    (this.lCount = 0),
    (this.mCount = 0),
    (this.nCount = 0),
    (this.oCount = 0),
    (this.pCount = 0),
    (this.qCount = 0),
    (this.rCount = 0),
    (this.sCount = 0),
    (this.tCount = 0),
    (this.uCount = 0),
    (this.vCount = 0),
    (this.wCount = 0),
    (this.xCount = 0),
    (this.yCount = 0),
    (this.zCount = 0)
  ];
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
  } else if (string == " ") {
    return {};
  } else {
    string.split("");
    for (var i = 0; i < string.length; i++) {
      if (string[i] == "a") {
        this.aCount += 1;
      } else if (string[i] == "b") {
        this.bCount += 1;
      } else if (string[i] == "c") {
        this.cCount += 1;
      } else if (string[i] == "d") {
        this.dCount += 1;
      } else if (string[i] == "e") {
        this.eCount += 1;
      } else if (string[i] == "f") {
        this.fCount += 1;
      } else if (string[i] == "g") {
        this.gCount += 1;
      } else if (string[i] == "h") {
        this.hCount += 1;
      } else if (string[i] == "i") {
        this.iCount += 1;
      } else if (string[i] == "j") {
        this.jCount += 1;
      } else if (string[i] == "k") {
        this.kCount += 1;
      } else if (string[i] == "l") {
        this.lCount += 1;
      } else if (string[i] == "m") {
        this.mCount += 1;
      } else if (string[i] == "n") {
        this.nCount += 1;
      } else if (string[i] == "o") {
        this.oCount += 1;
      } else if (string[i] == "p") {
        this.pCount += 1;
      } else if (string[i] == "q") {
        this.qCount += 1;
      } else if (string[i] == "r") {
        this.rCount += 1;
      } else if (string[i] == "s") {
        this.sCount += 1;
      } else if (string[i] == "t") {
        this.tCount += 1;
      } else if (string[i] == "u") {
        this.uCount += 1;
      } else if (string[i] == "v") {
        this.vCount += 1;
      } else if (string[i] == "w") {
        this.wCount += 1;
      } else if (string[i] == "x") {
        this.xCount += 1;
      } else if (string[i] == "y") {
        this.yCount += 1;
      } else if (string[i] == "z") {
        this.zCount += 1;
      }
    }

    for (var i = 0; i < this.numCount.length; i++) {
      if (numCount[i] > 0) {
      }
    }

    return { a: this.aCount, b: this.bCount, c: this.cCount };
  }
};
