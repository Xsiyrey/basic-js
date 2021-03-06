class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error();
    let encryptMessage = "";
    key = key.toUpperCase();
    let keyIndex = 0;
    message
      .toUpperCase()
      .split("")
      .forEach((x) => {
        if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) {
          encryptMessage += String.fromCharCode(
            65 + ((x.charCodeAt() + key[keyIndex].charCodeAt()) % 26)
          );
          keyIndex++;
          if (keyIndex > key.length - 1) keyIndex = 0;
        } else encryptMessage += x;
      });
    return this.direct
      ? encryptMessage
      : encryptMessage.split("").reverse().join("");
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error();
    let decryptMessage = "";
    key = key.toUpperCase();
    let keyIndex = 0;
    message
      .toUpperCase()
      .split("")
      .forEach((x) => {
        if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) {
          decryptMessage += String.fromCharCode(
            65 + ((x.charCodeAt() + 26 - key[keyIndex].charCodeAt()) % 26)
          );
          keyIndex++;
          if (keyIndex > key.length - 1) keyIndex = 0;
        } else decryptMessage += x;
      });
    return this.direct
      ? decryptMessage
      : decryptMessage.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
