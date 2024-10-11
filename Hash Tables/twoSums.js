const twoSums = (nums, target) => {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    const currentElement = nums[i];
    const complement = target - currentElement;
    if (complement in numMap && numMap[complement] !== i) {
      return [numMap[complement], i];
    }

    numMap[currentElement] = i;
  }

  return []; // If no pair is found, return an empty array
};


// Example usage:
const nums = [2, 7, 11, 15, 6, 13, 4, 11];
const target = 13;
const result = twoSums(nums, target);
console.log(result);
