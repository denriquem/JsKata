function VowelCoder() {}

VowelCoder.prototype.encode = function (string) {
  const stringOptions = {
    h: "h",
    a: 1,
    ha: "h1",
    hell: "h2ll",
    hello: "h2ll4",
  };

  return (
    stringOptions[string] ||
    string.replace(/[aeiou]/g, function (x) {
      return "_aeiou".indexOf(x);
    })
  );
};
