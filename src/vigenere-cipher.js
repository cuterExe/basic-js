const CustomError = require('../extensions/custom-error');
class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
  }

  encrypt(message, key) {
    return this.crypt(message, key, this.ecryptFn);
  }

  decrypt(message, key) {
    return this.crypt(message, key, this.decryptFn);
  }

  crypt(message, key, cryptFn) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';

    let notMatchedTotal = 0;
    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/[\W\d]/)) {
        result += message[i];
        notMatchedTotal++;
        continue;
      }
      const mCode = message.codePointAt(i);
      const kCode = this.getKCode(i, key, notMatchedTotal);
      let resCode = cryptFn(mCode, kCode);
      result += String.fromCodePoint(resCode);
    }
    return this.direction ? result : result.split('').reverse().join('');
  }

  getKCode(i, key, notMatchedTotal) {
    return i >= key.length
      ? key.codePointAt((i - notMatchedTotal) % key.length)
      : key.codePointAt(i - notMatchedTotal);
  }

  ecryptFn(mCode, kCode) {
    return ((mCode - 65 + kCode - 65) % 26) + 65;
  }
  decryptFn(mCode, kCode) {
    return ((mCode + 26 - kCode) % 26) + 65;
  }
}

module.exports = VigenereCipheringMachine;
