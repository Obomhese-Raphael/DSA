// Sort - Sort the elements in the array by their position

const numbers = [4, 5, 2, 1, 2, 4, 7, 1, 4, 5, 5];

console.log(numbers.sort((a, b) => a - b));

// Remove duplicates - Create a new array to store unique elements and iterate through the original array

const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);

// Find the largest number - Iterate through the array and keep track of the maximum value

let largestNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largestNumber) {
    largestNumber = numbers[i];
  }
}

console.log(largestNumber);

// Find the smallest number - Iterate through the array and keep track of the minimum value

let smallestNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallestNumber) {
    smallestNumber = numbers[i];
  }
}

console.log(smallestNumber);

// Find the sum of all numbers - Iterate through the array and add each element to a running total

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

// Find the average of all numbers - Divide the sum by the length of the array

const average = sum / numbers.length;

console.log(average);
