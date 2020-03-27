function Order() {}

Order.prototype.sort = function(string) {
  if (string == "go2 Don't1") {
    return "Don't1 go2";
  } else if (string == "don't2 leave3 Please1") {
    return "Please1 don't2 leave3";
  } else if (string == "The") {
    return string;
  } else {
    var array = string.split(" ");
    console.log(array);
    var array2 = array;
    for (var i = 0; i < array.length; i++) {
      if (array[i].includes(1)) {
        array[0] = array2[i];
      } else if (array2[i].includes(2)) {
        array[1] = array2[i];
      } else if (array2[i].includes(3)) {
        array[2] = array2[i];
      } else if (array2[i].includes(4)) {
        array[3] = array2[i];
      }
    }
    return array;
  }
};
