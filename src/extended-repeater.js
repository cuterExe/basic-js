module.exports = function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  addition = String(addition);
  const additionalPart = new Array(additionRepeatTimes)
    .fill(addition)
    .join(additionSeparator);
  return new Array(repeatTimes).fill(str + additionalPart).join(separator);
};
