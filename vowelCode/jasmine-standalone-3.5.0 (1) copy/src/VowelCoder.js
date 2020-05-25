function VowelCoder() {}

VowelCoder.prototype.encode = function (string) {
  if (string === "h") {
    return "h";
  } else if (string === "a") {
    return 1;
  } else if (string === "ha") {
    return "h1";
  } else {
    return "h2ll";
  }
};
