// Max and Min values - Finding the minimum and maximum values in an array

const findMinMax = (array) => {
  if (array.length === 0) {
    return {
      min: null,
      max: null,
    }; 
  }

  let min = array[0];
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  return {
    min,
    max,
  };
};

const originalArray = [1, 2, 3, 4, 5];
console.log(originalArray);
const modifiedArray = findMinMax(originalArray);
console.log(modifiedArray);
