const DISCARD_NEXT = '--discard-next';
const DISCARD_PREV = '--discard-prev';
const DOUBLE_NEXT = '--double-next';
const DOUBLE_PREV = '--double-prev';

const OPTIONS = [DISCARD_NEXT, DISCARD_PREV, DOUBLE_NEXT, DOUBLE_PREV];

module.exports = function transform(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case DISCARD_NEXT:
        i++;
        break;
      case DISCARD_PREV:
        if (usePrev(arr[i - 1], arr[i - 2])) result.pop();
        break;
      case DOUBLE_NEXT:
        if (optionValue(arr[i + 1])) result.push(arr[i + 1]);
        break;
      case DOUBLE_PREV:
        if (usePrev(arr[i - 1], arr[i - 2])) result.push(arr[i - 1]);
        break;
      default:
        result.push(arr[i]);
    }
  }

  return result;

  function optionValue(value) {
    return !(
      value === undefined ||
      OPTIONS.some((el) => {
        el === value;
      })
    );
  }

  function usePrev(currentValue, previousValue) {
    return optionValue(currentValue) && previousValue !== DISCARD_NEXT;
  }
};
