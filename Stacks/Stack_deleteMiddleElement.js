// Delete Middle Element from a stack

const deleteMiddleElement = (array) => {
  if (array.length === 0) {
    return [];
  }

  const middleIndex = Math.floor(array.length / 2);
  const modifiedArray = [...array];
  modifiedArray.splice(middleIndex, 1);
  return modifiedArray;
};

const originalArray = [1, 2, 3, 4, 5]; // middle index was 2
console.log(originalArray);
const modifiedArray = deleteMiddleElement(originalArray);
console.log(modifiedArray);
