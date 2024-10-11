// Reverse - Reverses the elements in the array

const reverseArray = (arr) => {
  if (arr.length <= 1) {
    return arr; // Return the array as it is if it has less than or equal to one element
  }

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    // Swap elements at start and end indices
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }

  return arr;
};

// Example usage:

const inputArray = [1, 2, 3, 4, 5];
console.log(inputArray);
const reversedArray = reverseArray(inputArray);
console.log(reversedArray);
