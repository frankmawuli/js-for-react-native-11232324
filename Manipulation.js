export function processArray(array) {
  const operation = array.map((element) => {
    if (element % 2 === 0) {
      return element * 2;
    } else {
      return element * 3;
    }
  });
  return operation;
}

export function formatArrayStrings(stringArray, processedArray) {
  return stringArray.map((element, index) => {
    if (processedArray[index] % 2 === 0) {
      return element.toUpperCase();
    } else {
      return element.toLowerCase();
    }
  });
}
