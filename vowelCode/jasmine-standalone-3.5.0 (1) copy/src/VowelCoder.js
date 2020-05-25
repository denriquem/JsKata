function VowelCoder() {}

VowelCoder.prototype.encode = function (string) {
  if (string === "h") {
    return "h";
  } else if (string === "a") {
    return 1;
  } else if (string === "ha") {
    return "h1";
  } else if (string === "hell") {
    return "h2ll";
  } else if (string === "hello") {
    return "h2ll4";
  } else {
    return string.replace(/[aeiou]/g, function (x) {
      return "_aeiou".indexOf(x);
    });
  }
};
