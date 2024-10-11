// Bubble Sort

const bubbleSort = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    // iterating over each element in the array from the last index to the first index
    for (let j = 0; j < i; j++) {
      // The inner loop iterates from the beginning of the unsorted portion (index 0) to the last unsorted index (i)
      if (array[j] > array[j + 1]) {
        // If the current element is greater than the next element, swap them
        const currentElement = array[j]; // 0 value
        array[j] = array[j + 1];
        array[j + 1] = currentElement;
      }
    }
  }
  return array;
};

const myArray = [4, 2, 6, 5, 1, 3];
console.log("Sorted Array: ");
console.log(bubbleSort(myArray));
console.log("================================")

// Step-by-Step Visualization:

// Initial array: [4, 2, 6, 5, 1, 3]

// First pass:
// Compare 4 and 2: Swap (2, 4) -> [2, 4, 6, 5, 1, 3]
// Compare 4 and 6: No swap
// Compare 6 and 5: Swap (5, 6) -> [2, 4, 5, 6, 1, 3]
// Compare 6 and 1: Swap (1, 6) -> [2, 4, 5, 1, 6, 3]
// Compare 6 and 3: Swap (3, 6) -> [2, 4, 5, 1, 3, 6]

// Second pass:
// Compare 2 and 4: No swap
// Compare 4 and 5: No swap
// Compare 5 and 1: Swap (1, 5) -> [2, 4, 1, 5, 3, 6]
// Compare 5 and 3: Swap (3, 5) -> [2, 4, 1, 3, 5, 6]

// Third pass:
// Compare 2 and 4: No swap
// Compare 4 and 1: Swap (1, 4) -> [2, 1, 4, 3, 5, 6]
// Compare 4 and 3: Swap (3, 4) -> [2, 1, 3, 4, 5, 6]

// Fourth pass:
// Compare 2 and 1: Swap (1, 2) -> [1, 2, 3, 4, 5, 6]
// Fifth pass:

// Compare 2 and 3: No swap
// Final array: [1, 2, 3, 4, 5, 6]

function bubbleSortt(array) {
  const arrayLength = array.length;
  let isSwapped;

  for (let i = 0; i < arrayLength; i++) {
    isSwapped = false;

    for (let j = 0; j < arrayLength - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swap elements
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        isSwapped = true;
      }
    }

    // If no two elements were swapped in the inner loop, array is sorted
    if (!isSwapped) break;
  }

  return array;
}

// Test the function
const sortedArray = bubbleSortt([45, 23, 3, 5346, 5, 356, 243, 35]);
console.log("Sorted Array:");
console.log(sortedArray);
