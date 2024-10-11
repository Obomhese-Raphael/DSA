// Two Sum Challenge Tests

// Test Case 1: The array contains two numbers that sum up to the target.
// Question: Imagine you have a list of numbers and a target number. Your job is to find two numbers in that list that sum up to the target number. You also need to tell which position (or index) those two numbers are in in the list.

// Steps: 
// 1. Initialize an empty list called "numbers" with the following elements: [2, 7, 11, 15].
// 2. Initialize a variable called "target" with the value 9.
// 3. Create a variable called "result" and set it to an empty list.
// 4. Iterate through each number in the "numbers" list using a for loop.
// 5. For each number, calculate the difference between the target and the current number.

const TwoSums = (nums, target) => {
    const result = []; 

    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push([i, j]);
            } 
        }
    }
    
    return result;
}

const res = TwoSums([2, 7, 11, 15, 6], 9);
const res2 = TwoSums([ 4, 7, 9, 11, 15, 6], 15);
console.log(res);
console.log(res2);

// The time Complexity of this solution is O(n^2)

const TwoSum = (nums, target) => {
    const map = new Map(); 
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

const res3 = TwoSum([2, 7, 11, 15, 6], 9);
console.log(res3);

// The time Complexity of this solution is O(n)

