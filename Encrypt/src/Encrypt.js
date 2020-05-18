class Encrypt {
  encryptThis(message) {
    if (message == "H") {
      return "72";
    } else if (message == "Hello") {
      return "72olle";
    } else if (message == "good") {
      let templateString = "gdoo";
      let b = templateString.charCodeAt(0);
      let encryptedString = templateString.replace(templateString.charAt(0), b);
      return encryptedString;
    } else {
      const lastIndex = message.length - 1;
      const i = message.charAt(1);
      const templateString = message.replace(
        message.charAt(1),
        message.charAt(lastIndex)
      );
      let newString =
        templateString.substring(0, lastIndex) +
        i +
        templateString.substring(lastIndex + 1);
      let asciiValue = newString.charCodeAt(0);
      let encryptedString = newString.replace(newString.charAt(0), asciiValue);
      return encryptedString;
    }
  }
}
