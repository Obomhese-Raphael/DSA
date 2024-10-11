// Reverse array using stacks.
const reverseArray = (array) => {
  const stack = [];
  // stack = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9,10 ];
  for (let i = 0; i < array.length; i++) {
    stack.push(array[i]);
  }

  const reversedArray = [];
  while (stack.length > 0) {
    reversedArray.push(stack.pop());
  }

  return reversedArray;
};

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(originalArray)
const reversedArray = reverseArray(originalArray);
console.log(reversedArray);