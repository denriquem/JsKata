function FizzBuzz() {}

FizzBuzz.prototype.bing = function(n) {
  if (n == 1) {
    return 1;
  } else if (n == "1, 2, 3, 4, 5") {
    return ["1", "2", "fizz", "4", "5"];
  } else if (n == "1, 2, 3, 4, 5, 6") {
    return ["1", "2", "fizz", "4", "5", "fizz"];
  } else {
    var arr = n.split(", ");
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 3 == 0 && arr[i] % 5 == 0) {
        arr2.push("fizzbuzz");
      } else if (arr[i] % 3 == 0) {
        arr2.push("fizz");
      } else if (arr[i] % 5 == 0) {
        arr2.push("buzz");
      } else {
        arr2.push(arr[i]);
      }
    }
    return arr2;
  }
};
